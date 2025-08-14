export const AppConfig = {
  appName: "OpenAI ChatBot",
  defaultSessionTimeout: 30 * 60 * 1000, // 30 dakika
  mockMode: process.env.MOCK_MODE === 'true',
  apiSettings: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
    endpoints: {
      chat: '/chat',
      sessions: '/sessions',
      mock: '/mock'
    }
  },
  dbConfig: {
    maxPoolSize: 10,
    connectionTimeout: 30000
  },
};

export const ChatConfig = {
  maxMessageLength: 1000,
  typingDelay: 300, // ms
  maxHistoryLength: 50,
  defaultMessages: {
    welcome: "Merhaba! Size nasıl yardımcı olabilirim?",
    error: "Bir hata oluştu, lütfen daha sonra tekrar deneyin.",
    emptyResponse: "Yanıt alınamadı, lütfen tekrar deneyin."
  }
};