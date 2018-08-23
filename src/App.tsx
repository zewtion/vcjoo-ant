import { Button, InputNumber } from 'antd';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';
interface InterState{ num:number }


class App extends React.Component<{},InterState> {
  constructor( props:any){
    super(props);
    this.state={
      num : 0
    }
  }

  public clickHandler = (i:number) =>  {
    window.console.log("counsted: " + i);
    this.setState({
        num : i
      }
    )
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputNumber min={1} max={10} defaultValue={3}  onChange={this.clickHandler}/>
        <Button type="primary" htmlType="button" onClick={callExp(5)}>Primary</Button>
        <p className="App">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          component by reaCt !!
        </p>
        
      </div>
    );
  }
}

function callExp( obj:number ){
  window.console.log( "hello exp" + obj );
}

export default App;
