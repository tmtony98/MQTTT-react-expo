import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-gray-600">
              {message.topic}
            </span>
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <p className="text-gray-800 break-words">{message.payload}</p>
        </div>
      ))}
    </div>
  );
};