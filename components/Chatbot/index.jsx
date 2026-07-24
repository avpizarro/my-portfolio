import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatPanel from './ChatPanel';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <>
      <ChatPanel isOpen={isOpen} messages={messages} setMessages={setMessages} />
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
};

export default Chatbot;
