import { formatDistanceToNow } from 'date-fns';

export function formatMessageTime(timestamp) {
  return formatDistanceToNow(timestamp, { addSuffix: true });
}

export function getCurrentTimestamp() {
  return Date.now();
}