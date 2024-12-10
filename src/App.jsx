import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { JoinRoom } from './components/JoinRoom';
import { ChatRoom } from './components/ChatRoom';

function App() {
  const [user, setUser] = useState(null);

  const handleJoin = (username, roomId) => {
    setUser({ username, roomId });
  };

  const handleLeave = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      {user ? (
        <ChatRoom
          username={user.username}
          roomId={user.roomId}
          onLeave={handleLeave}
        />
      ) : (
        <JoinRoom onJoin={handleJoin} />
      )}
    </div>
  );
}

export default App;