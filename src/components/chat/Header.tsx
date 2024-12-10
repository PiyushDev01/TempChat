import React from 'react';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface HeaderProps {
  roomId: string;
  onLeave: () => void;
}

export function Header({ roomId, onLeave }: HeaderProps) {
  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    toast.success('Room ID copied to clipboard!');
  };

  return (
    <div className="border-b border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Chat Room</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Room ID:</span>
            <code className="rounded bg-gray-100 px-2 py-1 text-sm">{roomId}</code>
            <button
              onClick={copyRoomId}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <Copy size={16} />
            </button>
          </div>
          <button
            onClick={onLeave}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
          >
            Leave Room
          </button>
        </div>
      </div>
    </div>
  );
}