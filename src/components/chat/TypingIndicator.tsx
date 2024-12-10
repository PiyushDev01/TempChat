import React from 'react';

interface TypingIndicatorProps {
  users: string[];
}

export function TypingIndicator({ users }: TypingIndicatorProps) {
  if (users.length === 0) return null;

  return (
    <div className="px-4 py-2 text-sm text-gray-500">
      {users.join(', ')} {users.length === 1 ? 'is' : 'are'} typing...
    </div>
  );
}