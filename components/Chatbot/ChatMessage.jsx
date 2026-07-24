import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.module.scss';

const ChatMessage = ({ role, content, isStreaming }) => {
  return (
    <div className={`${styles.message} ${role === 'user' ? styles.userMessage : styles.assistantMessage}`}>
      <div className={styles.messageContent}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        {isStreaming && <span className={styles.cursor} aria-hidden="true" />}
      </div>
    </div>
  );
};

export default ChatMessage;
