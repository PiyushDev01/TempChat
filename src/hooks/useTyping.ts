import { useRef, useCallback, useEffect } from 'react';
import { TYPING_TIMEOUT } from '../constants/chat';

export function useTyping(onTypingChange: (isTyping: boolean) => void) {
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const handleTyping = useCallback(() => {
    onTypingChange(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onTypingChange(false);
    }, TYPING_TIMEOUT);
  }, [onTypingChange]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return handleTyping;
}