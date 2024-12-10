import React from 'react';
import PropTypes from 'prop-types';
import { QRCodeSVG } from 'qrcode.react';

export function QRGenerator({ roomId }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h3 className="text-lg font-semibold text-gray-700">Scan to Join Room</h3>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <QRCodeSVG
          value={roomId}
          size={200}
          level="H"
          includeMargin
          className="h-auto w-full"
        />
      </div>
      <p className="text-sm text-gray-500">
        Scan this QR code with another device to join the chat room
      </p>
    </div>
  );
}

QRGenerator.propTypes = {
  roomId: PropTypes.string.isRequired,
};