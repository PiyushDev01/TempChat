import { nanoid } from 'nanoid';

export function generateRoomId(): string {
  return nanoid(10);
}

export function sanitizeUsername(username: string): string {
  return username.trim();
}

export function validateMessage(text: string, maxLength: number): string | null {
  if (!text.trim()) return null;
  return text.slice(0, maxLength);
}