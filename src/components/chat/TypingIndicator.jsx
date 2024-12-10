import React from 'react';
import PropTypes from 'prop-types';

export function TypingIndicator({ users }) {
  if (users.length === 0) return null;

  return (
    <div className="px-4 py-2 text-sm text-gray-500">
      {users.join(', ')} {users.length === 1 ? 'is' : 'are'} typing...
    </div>
  );
}

TypingIndicator.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired
};