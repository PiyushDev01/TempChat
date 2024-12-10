export interface Message {
  id: string;
  text: string;
  username: string;
  timestamp: number;
}

export interface Room {
  id: string;
  lastActivity: number;
  messages: Message[];
  usersTyping: Record<string, boolean>;
}

export interface User {
  username: string;
  roomId: string | null;
}