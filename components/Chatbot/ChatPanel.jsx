import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import styles from './index.module.scss';

const ERROR_MESSAGE = "Oops, something went wrong on my end! Try again in a moment.";

const ChatPanel = ({ isOpen, messages, setMessages }) => {
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const showErrorMessage = () => {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        content: ERROR_MESSAGE,
      };
      return updated;
    });
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMessage = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setIsStreaming(true);

    // Add empty assistant placeholder
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // keep incomplete line in buffer

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);

          if (data === '[DONE]') {
            return;
          }

          if (data === '[ERROR]') {
            showErrorMessage();
            return;
          }

          try {
            const { text } = JSON.parse(data);
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                content: updated[updated.length - 1].content + text,
              };
              return updated;
            });
          } catch {
            // ignore malformed chunks
          }
        }
      }
    } catch {
      showErrorMessage();
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`${styles.chatPanel} ${isOpen ? styles.chatPanelOpen : ''}`} role="dialog" aria-label="Portfolio chatbot">
      <div className={styles.chatHeader}>
        <span>Ask me anything...</span>
      </div>

      <div className={styles.messageList} data-lenis-prevent>
        {messages.length === 0 && (
          <p className={styles.emptyState}>
            Hi! I know everything about Alejandra&apos;s work. Ask me about her projects, skills, or how to get in touch.
          </p>
        )}
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
            isStreaming={isStreaming && i === messages.length - 1 && msg.role === 'assistant'}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <input
          className={styles.chatInput}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isStreaming}
          aria-label="Chat message input"
        />
        <button
          className={styles.sendButton}
          onClick={sendMessage}
          disabled={isStreaming || !input.trim()}
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
