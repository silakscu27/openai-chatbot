'use client';
import { useChat } from '@/context/ChatContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  const { messages } = useChat();

  return (
    <div className="border rounded-lg p-4 h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}