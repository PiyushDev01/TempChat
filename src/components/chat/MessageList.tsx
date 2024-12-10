import React from 'react';
import { ChatMessage } from './Message';
import type { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
  currentUsername: string;
}

export function MessageList({ messages, currentUsername }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isCurrentUser={message.username === currentUsername}
        />
      ))}
    </div>
  );
}