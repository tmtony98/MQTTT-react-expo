import React from 'react';
import { MessageList } from './components/MessageList';
import { ConnectionStatusComponent } from './components/ConnectionStatus';
import { useMqtt } from './hooks/useMqtt';

function App() {
  const { messages, status } = useMqtt();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">MQTT Client</h1>
            <ConnectionStatusComponent status={status} />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="text-sm font-medium text-gray-600 mb-1">
              Subscribed Topic
            </h2>
            <code className="text-sm bg-gray-200 px-2 py-1 rounded">
              my_topic
            </code>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Messages
            </h2>
            {messages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No messages received yet
              </div>
            ) : (
              <MessageList messages={messages} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;