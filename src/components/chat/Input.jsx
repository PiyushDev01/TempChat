import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'lucide-react';
import { useTyping } from '../../hooks/useTyping';
import { MAX_MESSAGE_LENGTH } from '../../constants/chat';

export function ChatInput({ onSendMessage, onTyping }) {
  const [message, setMessage] = useState('');
  const handleTyping = useTyping(onTyping);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  }, [message, onSendMessage]);

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
    handleTyping();
  }, [handleTyping]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Type a message..."
        maxLength={MAX_MESSAGE_LENGTH}
        rows={1}
        className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        disabled={!message.trim()}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
      >
        <Send size={20} />
      </button>
    </form>
  );
}

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  onTyping: PropTypes.func.isRequired
};