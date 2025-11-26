import { createPortal } from 'react-dom';
import { FiX, FiRefreshCcw, FiMessageSquare } from 'react-icons/fi';
import IconButton from '../IconButton/IconButton';
import { useChat } from '../../hooks/useChat';

import './Chat.css';

export default function Chat() {
  const {
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
  } = useChat();

  return createPortal(
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="chatbox-open-btn" aria-label="Open chat">
          <FiMessageSquare size={24} />
        </button>
      ) : (
        <div role="dialog" aria-modal="true" className="chatbox-modal">
          <header className="chatbox-header">
            <div className="chatbox-time">{time}</div>
            <div className="chatbox-buttons">
              <IconButton label="Refresh" onClick={onRefresh}>
                <FiRefreshCcw size={18} />
              </IconButton>
              <IconButton label="Close chat" onClick={onClose}>
                <FiX size={18} />
              </IconButton>
            </div>
          </header>
          <div className="chatbox-messages" ref={messageRef}>
            {chatMessages.map(({ sender, content, timestamp, showTimestamp }, index) => (
              <>
                {showTimestamp && (
                  <div key={index + '-timestamp'} className="chatbox-timestamp">
                    {timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    }).toUpperCase()}
                  </div>
                )}
                <div key={index} className={`chatbox-message ${sender}`}>
                  {content}
                </div>
              </>
            ))}
          </div>
          <form
            className="chatbox-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              onSendMessage();
            }}
          >
            <input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type a message…"
              aria-label="Message input"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>,
    document.body
  );
}
