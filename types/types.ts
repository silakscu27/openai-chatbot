export interface Message {
  text: string;
  isUser: boolean;
}

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