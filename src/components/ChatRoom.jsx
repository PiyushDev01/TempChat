import React from 'react';
import PropTypes from 'prop-types';
import { useChat } from '../hooks/useChat';
import { Header } from './chat/Header';
import { MessageList } from './chat/MessageList';
import { TypingIndicator } from './chat/TypingIndicator';
import { ChatInput } from './chat/Input';

export function ChatRoom({ username, roomId, onLeave }) {
  const { messages, usersTyping, error, sendMessage, setTypingStatus } = useChat(username, roomId);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <Header roomId={roomId} onLeave={onLeave} />
      <MessageList messages={messages} currentUsername={username} />
      <TypingIndicator users={usersTyping} />
      <div className="border-t border-gray-200 bg-white p-4">
        <ChatInput onSendMessage={sendMessage} onTyping={setTypingStatus} />
      </div>
    </div>
  );
}

ChatRoom.propTypes = {
  username: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  onLeave: PropTypes.func.isRequired
};