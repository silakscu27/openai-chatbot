import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatProvider from '@/context/ChatContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenAI ChatBot',
  description: 'OpenAI tabanlı yardımcı chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ChatProvider>
          {children}
        </ChatProvider>
      </body>
    </html>
  );
}