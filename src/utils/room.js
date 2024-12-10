import { nanoid } from 'nanoid';

export function generateRoomId() {
  return nanoid(10);
}

export function sanitizeUsername(username) {
  return username.trim();
}

export function validateMessage(text, maxLength) {
  if (!text.trim()) return null;
  return text.slice(0, maxLength);
}