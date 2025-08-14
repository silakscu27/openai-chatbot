import { NextResponse } from 'next/server';
import { mockResponses, mockSessions } from '@/lib/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (query === 'sessions') {
    return NextResponse.json(mockSessions);
  }

  const response = mockResponses[query] || 
    "Üzgünüm, anlayamadım. Lütfen başka bir şekilde ifade edebilir misiniz?";

  return NextResponse.json({ response });
}