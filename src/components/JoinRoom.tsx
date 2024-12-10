import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { MessageSquare } from 'lucide-react';

interface JoinRoomProps {
  onJoin: (username: string, roomId: string) => void;
}

export function JoinRoom({ onJoin }: JoinRoomProps) {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isCreating, setIsCreating] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    const finalRoomId = isCreating ? nanoid(10) : roomId;
    onJoin(username.trim(), finalRoomId);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-center">
          <MessageSquare size={40} className="text-blue-500" />
        </div>
        
        <h1 className="mb-6 text-center text-2xl font-bold">
          Temporary Chat Room
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Display Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setIsCreating(true)}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
                isCreating
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Create Room
            </button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
                !isCreating
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Join Room
            </button>
          </div>

          {!isCreating && (
            <div>
              <label htmlFor="roomId" className="block text-sm font-medium text-gray-700">
                Room ID
              </label>
              <input
                type="text"
                id="roomId"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                required={!isCreating}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {isCreating ? 'Create & Join Room' : 'Join Room'}
          </button>
        </form>
      </div>
    </div>
  );
}