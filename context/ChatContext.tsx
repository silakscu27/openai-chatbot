'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { mockResponses } from '@/lib/mockData';
import { AppConfig, ChatConfig } from '@/config/config';

interface Message {
  text: string;
  isUser: boolean;
}

interface Session {
  Id: number;
  UserName: string;
  SessionId: string;
  SelectedPfirmName: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  currentSession: Session | null;
  setCurrentSession: (session: Session | null) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Default export olarak dışa aktarıyoruz
export default function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);

  const sendMessage = async (text: string) => {
    setMessages(prev => [...prev, { text, isUser: true }]);
    
    try {
      let responseText = '';
      
      if (AppConfig.mockMode) {
        responseText = mockResponses[text.toLowerCase()] || ChatConfig.defaultMessages.error;
      } else {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: text,
            sessionId: currentSession?.SessionId
          }),
        });
        const data = await res.json();
        responseText = data.response;
      }
      
      setMessages(prev => [...prev, { text: responseText, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: ChatConfig.defaultMessages.error, 
        isUser: false 
      }]);
    }
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      sendMessage, 
      currentSession, 
      setCurrentSession 
    }}>
      {children}
    </ChatContext.Provider>
  );
}

// useChat hook'u named export olarak kalıyor
export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}