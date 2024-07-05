import React, { useState, useEffect } from 'react';
import './chatbox.css';
import { useParams } from 'react-router-dom';
import ApiRequest from '../../Lib/ApiRequest';

const ChatBox = () => {
  const { sellerId } = useParams();
  
  // Debugging line to check the value of sellerId
  console.log("Seller ID from useParams:", sellerId);
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!sellerId) {
      console.error("Seller ID is undefined");
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await ApiRequest.get(`/chat`);
        // Assuming response.data.messages is an array, set it to state
        setMessages(response.data.messages || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [sellerId]);

  const handleSendMessage = async () => {
    if (input.trim() && sellerId) {
      try {
        const response = await ApiRequest.post(`/message/${sellerId}`, { text: input });
        setMessages([...messages, response.data]);
        setInput('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-messages">
        {messages && messages.map((msg, index) => (
          <div key={index} className="chatbox-message">
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
