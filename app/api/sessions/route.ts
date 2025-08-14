import { pool } from '@/lib/database/db';
import { NextResponse } from 'next/server';
import { AppConfig } from '@/config/config';

export async function GET() {
  try {
    if (AppConfig.mockMode) {
      const { mockSessions } = await import('@/lib/mockData');
      return NextResponse.json(mockSessions);
    }

    const result = await pool.request()
      .query('SELECT * FROM ChatBotUserSession');
    
    return NextResponse.json(result.recordset);
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ 
      error: err.message 
    }, { 
      status: 500 
    });
  }
}