import React from 'react';
import PropTypes from 'prop-types';
import { ChatMessage } from './Message';

export function MessageList({ messages, currentUsername }) {
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

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  })).isRequired,
  currentUsername: PropTypes.string.isRequired
};