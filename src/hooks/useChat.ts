import { useState, useEffect, useRef, useCallback } from 'react';

export type ChatMessage = {
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
  showTimestamp: boolean;
};

export function useChat() {

  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const botMessageResponseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const outputNewTimestampRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen && timerRef.current == null) {
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => {
      if (timerRef.current != null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [chatMessages]);
  
  useEffect(() => {
    if (isOpen && messageRef.current != null) {
      messageRef.current.scrollTo({
        top: messageRef.current.scrollHeight,
        behavior: 'auto',
      });
    }
  }, [isOpen]);

  const onSendMessage = useCallback(() => {
    const trimmed = currentMessage.trim();
    if (!trimmed) return;

    const newMessage: ChatMessage = {
      sender: 'user',
      content: trimmed,
      timestamp: new Date(),
      showTimestamp: outputNewTimestampRef.current == null,
    };


    setChatMessages((prev) => [...prev, newMessage]);
    setCurrentMessage('');

    // Bot response
    if (botMessageResponseRef.current == null) {
      botMessageResponseRef.current = setTimeout(() => {
        const botReply: ChatMessage = {
          sender: 'bot',
          content: 'This is a bot response to your message: ' + newMessage.content,
          timestamp: new Date(),
          showTimestamp: false,
        };
        setChatMessages((prev) => [...prev, botReply]);
        botMessageResponseRef.current = null;
      }, 2000); // Bot replies in 2 seconds
    }

    // Timestamp window
    if (outputNewTimestampRef.current == null) {
      outputNewTimestampRef.current = setTimeout(() => {
        outputNewTimestampRef.current = null;
      }, 60000); // A new timestamp will be shown on a user message after 60 seconds
    }
  }, [currentMessage]);

  const onRefresh = useCallback(() => {
    setChatMessages([]);
    setTime(0);
  }, []);

  const onClose = useCallback(() => {
    setTime(0);
    setIsOpen(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Cleanup on unmount (clear any pending timers)
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (botMessageResponseRef.current) clearTimeout(botMessageResponseRef.current);
      if (outputNewTimestampRef.current) clearTimeout(outputNewTimestampRef.current);
    };
  }, []);

  return {
    isOpen,
    time,
    chatMessages,
    currentMessage,
    setIsOpen,
    setCurrentMessage,
    messageRef,
    onSendMessage,
    onRefresh,
    onClose,
  };
}
