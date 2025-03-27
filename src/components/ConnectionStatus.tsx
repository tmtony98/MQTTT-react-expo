import React from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { ConnectionStatus } from '../types';

interface ConnectionStatusProps {
  status: ConnectionStatus;
}

export const ConnectionStatusComponent: React.FC<ConnectionStatusProps> = ({
  status,
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
        status.connected
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      }`}
    >
      {status.connected ? (
        <Wifi className="w-4 h-4" />
      ) : (
        <WifiOff className="w-4 h-4" />
      )}
      <span className="text-sm font-medium">
        {status.connected ? 'Connected' : 'Disconnected'}
      </span>
      {status.error && (
        <span className="text-xs text-red-600 ml-2">{status.error}</span>
      )}
    </div>
  );
};