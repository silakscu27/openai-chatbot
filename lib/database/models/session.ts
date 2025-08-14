import { pool } from '../db';

export interface Session {
  Id: number;
  UserName: string;
  UserType: string;
  FullName: string;
  Email: string;
  SelectedPfirmName: string;
  SelectedPfirmId: number;
  PfirmDfirmId: number;
  PfirmDfirmName: string;
  Segment: string;
  SessionId: string;
  UserId: number;
}

export async function getSessionById(id: number): Promise<Session | null> {
  const result = await pool.request()
    .input('id', id)
    .query('SELECT * FROM ChatBotUserSession WHERE Id = @id');
  
  return result.recordset[0] || null;
}

export async function createSession(session: Omit<Session, 'Id'>): Promise<Session> {
  const result = await pool.request()
    .input('UserName', session.UserName)
    // Diğer alanlar...
    .query(`
      INSERT INTO ChatBotUserSession 
      (UserName, UserType, FullName, Email, SelectedPfirmName, SelectedPfirmId, PfirmDfirmId, PfirmDfirmName, Segment, SessionId, UserId)
      OUTPUT INSERTED.*
      VALUES (@UserName, @UserType, @FullName, @Email, @SelectedPfirmName, @SelectedPfirmId, @PfirmDfirmId, @PfirmDfirmName, @Segment, @SessionId, @UserId)
    `);
  
  return result.recordset[0];
}