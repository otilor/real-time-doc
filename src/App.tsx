import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Flex, Button,Typography } from 'antd';


const {Title} = Typography;
const {TextArea} = Input;
const baseStyle: React.CSSProperties = {
  width: '100%',
  height: 54,
};

function App() {
  return (
    <div className="App">
      <Flex gap="middle" vertical>
      <Title type="danger">
          Gabriel's <code>Real Time</code> Editor
        </Title>
      
      <TextArea rows={12}></TextArea>
      <Flex vertical={false}>
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
    </div>
  );
}

export default App;
