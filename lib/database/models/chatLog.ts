import { pool } from '../db';

export interface ChatLog {
  Id: number;
  sessionConversation: string;
  sessionDate: Date;
  userFeedBack: number | null;
  sessionId: string;
}

export async function getChatLogsBySessionId(sessionId: string): Promise<ChatLog[]> {
  const result = await pool.request()
    .input('sessionId', sessionId)
    .query('SELECT * FROM ChatBotLog WHERE sessionId = @sessionId ORDER BY sessionDate');
  
  return result.recordset;
}

export async function createChatLog(log: Omit<ChatLog, 'Id'>): Promise<ChatLog> {
  const result = await pool.request()
    .input('sessionConversation', log.sessionConversation)
    .input('sessionId', log.sessionId)
    .query(`
      INSERT INTO ChatBotLog 
      (sessionConversation, sessionDate, sessionId)
      OUTPUT INSERTED.*
      VALUES (@sessionConversation, GETDATE(), @sessionId)
    `);
  
  return result.recordset[0];
}

export async function updateFeedback(id: number, feedback: number): Promise<void> {
  await pool.request()
    .input('id', id)
    .input('feedback', feedback)
    .query('UPDATE ChatBotLog SET userFeedBack = @feedback WHERE Id = @id');
}