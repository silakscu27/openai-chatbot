'use client';
import { useState } from 'react';
import { useChat } from '@/context/ChatContext';
import { mockSessions } from '@/lib/mockData';

export default function SessionSelector() {
  const [selectedSession, setSelectedSession] = useState<string>('');
  const { setCurrentSession } = useChat();

  const handleSelectSession = () => {
    const session = mockSessions.find(s => s.Id.toString() === selectedSession);
    if (session) {
      setCurrentSession(session);
    }
  };

  return (
    <div className="border rounded-lg p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Oturum Seçin</h2>
      <select
        value={selectedSession}
        onChange={(e) => setSelectedSession(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Seçim yapın</option>
        {mockSessions.map((session) => (
          <option key={session.Id} value={session.Id}>
            {session.SelectedPfirmName} - {session.UserName}
          </option>
        ))}
      </select>
      <button
        onClick={handleSelectSession}
        disabled={!selectedSession}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Oturumu Başlat
      </button>
    </div>
  );
}