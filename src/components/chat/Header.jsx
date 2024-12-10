import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Copy, QrCode } from 'lucide-react';
import toast from 'react-hot-toast';
import { QRGenerator } from '../qr/QRGenerator';

export function Header({ roomId, onLeave }) {
  const [showQR, setShowQR] = useState(false);

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    toast.success('Room ID copied to clipboard!');
  };

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Chat Room</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Room ID:</span>
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">{roomId}</code>
              <button
                onClick={copyRoomId}
                className="rounded-full p-1 hover:bg-gray-100"
                title="Copy Room ID"
              >
                <Copy size={16} />
              </button>
              <button
                onClick={() => setShowQR(!showQR)}
                className="rounded-full p-1 hover:bg-gray-100"
                title="Show QR Code"
              >
                <QrCode size={16} />
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
      {showQR && <QRGenerator roomId={roomId} />}
    </div>
  );
}

Header.propTypes = {
  roomId: PropTypes.string.isRequired,
  onLeave: PropTypes.func.isRequired
};