import { RiChatSmile2Line } from 'react-icons/ri';
import styles from './index.module.scss';

const ChatButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.chatButton} ${isOpen ? styles.chatButtonOpen : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <RiChatSmile2Line className={styles.chatButtonIcon} />
    </button>
  );
};

export default ChatButton;
