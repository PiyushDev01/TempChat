import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { QrCode } from 'lucide-react';

export function QRScanner({ onScan }) {
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    if (!showScanner) return;

    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render((decodedText) => {
      scanner.clear();
      setShowScanner(false);
      onScan(decodedText);
    }, console.error);

    return () => {
      scanner.clear();
    };
  }, [showScanner, onScan]);

  if (!showScanner) {
    return (
      <button
        onClick={() => setShowScanner(true)}
        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
      >
        <QrCode size={16} />
        Scan QR Code
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Scan QR Code</h3>
          <button
            onClick={() => setShowScanner(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div id="qr-reader" className="overflow-hidden rounded-lg" />
      </div>
    </div>
  );
}

QRScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
};