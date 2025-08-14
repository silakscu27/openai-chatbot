import { AppConfig } from '@/config/config';

export function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

export async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export function logError(error: unknown, context: string) {
  if (AppConfig.mockMode) {
    console.error(`[Mock Mode] Error in ${context}:`, error);
  } else {
    console.error(`Error in ${context}:`, error);
  }
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}