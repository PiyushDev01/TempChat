import React from 'react';
import { formatMessageTime } from '../../utils/time';
import type { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
}

export function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${
        isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
      } rounded-lg px-4 py-2`}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">
            {isCurrentUser ? 'You' : message.username}
          </span>
          <span className="text-xs opacity-75">
            {formatMessageTime(message.timestamp)}
          </span>
        </div>
        <p className="mt-1 break-words">{message.text}</p>
      </div>
    </div>
  );
}