import React, { useState, useEffect } from 'react';
import WebSocketService from './WebsocketService';
import TextArea from 'antd/es/input/TextArea';

function InputComponent() {
  const [text, setText] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    WebSocketService.sendMessage(newText); // Send the message via WebSocket
  };

  return (
    <div>
      <TextArea rows={12} value={text} onChange={handleChange} placeholder="Type something..." />
    </div>
  );
}

function DisplayComponent() {
  const [text, setText] = useState('');

  useEffect(() => {
    WebSocketService.connect((message) => {
      setText(message);
    });
  }, []);

  return (
    <div>
      <h1>Live Text: {text}</h1>
    </div>
  );
}

export { InputComponent, DisplayComponent };
