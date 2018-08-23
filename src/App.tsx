import { Button, InputNumber } from 'antd';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputNumber min={1} max={10} defaultValue={3} />
        <Button type="primary" htmlType="">Primary</Button>
        <p className="App">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          component by reaCt !!
        </p>
        
      </div>
    );
  }
}

export default App;
