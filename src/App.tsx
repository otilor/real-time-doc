import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Flex, Button,Typography } from 'antd';
import { DisplayComponent, InputComponent } from './components';


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
        <InputComponent />
        <DisplayComponent />
      
      
    </Flex>
    </div>
  );
}

export default App;
