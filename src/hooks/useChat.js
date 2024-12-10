import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, push, set, remove, get } from 'firebase/database';
import { nanoid } from 'nanoid';
import { db } from '../lib/firebase';
import { MAX_MESSAGES, MAX_MESSAGE_LENGTH } from '../constants/chat';
import { getCurrentTimestamp } from '../utils/time';
import { validateMessage } from '../utils/room';

export function useChat(username, roomId) {
  const [messages, setMessages] = useState([]);
  const [usersTyping, setUsersTyping] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!roomId) return;

    const roomRef = ref(db, `rooms/${roomId}`);

    const initializeRoom = async () => {
      const snapshot = await get(roomRef);
      if (!snapshot.exists()) {
        await set(roomRef, {
          id: roomId,
          lastActivity: getCurrentTimestamp(),
          messages: [],
          usersTyping: {}
        });
      }
    };

    initializeRoom().then(() => {
      const unsubscribe = onValue(roomRef, (snapshot) => {
        const room = snapshot.val();
        
        if (!room) {
          setError('Room not found');
          return;
        }

        set(ref(db, `rooms/${roomId}/lastActivity`), getCurrentTimestamp());

        const messageList = room.messages ? 
          Object.values(room.messages)
            .sort((a, b) => a.timestamp - b.timestamp)
            .slice(-MAX_MESSAGES) : 
          [];
        
        setMessages(messageList);

        const typingUsers = room.usersTyping ? 
          Object.entries(room.usersTyping)
            .filter(([, isTyping]) => isTyping)
            .map(([user]) => user)
            .filter(user => user !== username) :
          [];
        setUsersTyping(typingUsers);
      });

      return () => unsubscribe();
    });
  }, [roomId, username]);

  const sendMessage = useCallback(async (text) => {
    const validatedText = validateMessage(text, MAX_MESSAGE_LENGTH);
    if (!validatedText) return;

    const messageRef = ref(db, `rooms/${roomId}/messages`);
    const newMessage = {
      id: nanoid(),
      text: validatedText,
      username,
      timestamp: getCurrentTimestamp(),
    };

    await push(messageRef, newMessage);
    setTypingStatus(false);
  }, [roomId, username]);

  const setTypingStatus = useCallback(async (isTyping) => {
    if (!roomId) return;
    const typingRef = ref(db, `rooms/${roomId}/usersTyping/${username}`);
    await set(typingRef, isTyping);
  }, [roomId, username]);

  const deleteRoom = useCallback(async () => {
    if (!roomId) return;
    await remove(ref(db, `rooms/${roomId}`));
  }, [roomId]);

  return {
    messages,
    usersTyping,
    error,
    sendMessage,
    setTypingStatus,
    deleteRoom,
  };
}