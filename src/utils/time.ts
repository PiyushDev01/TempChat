import { formatDistanceToNow } from 'date-fns';

export function formatMessageTime(timestamp: number): string {
  return formatDistanceToNow(timestamp, { addSuffix: true });
}

export function getCurrentTimestamp(): number {
  return Date.now();
}