'use client';
import { useChat } from '@/context/ChatContext';
import ChatWindow from '@/app/components/Chat/ChatWindow';
import SessionSelector from '@/app/components/Session/SessionSelector';
import { ChatConfig } from '@/config/config';

export default function Home() {
  const { currentSession, messages } = useChat();

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">OpenAI ChatBot</h1>
      
      {!currentSession ? (
        <SessionSelector />
      ) : (
        <>
          <div className="mb-2">
            <span className="font-semibold">Oturum:</span> {currentSession.SelectedPfirmName}
          </div>
          <ChatWindow />
          {messages.length === 0 && (
            <p className="text-gray-500 mt-4">{ChatConfig.defaultMessages.welcome}</p>
          )}
        </>
      )}
    </main>
  );
}