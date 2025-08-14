'use client';
import { Message } from '@/types/types';

export default function ChatMessage({ text, isUser }: Message) {
  return (
    <div className={`mb-2 ${isUser ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block p-3 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {text}
      </div>
    </div>
  );
}