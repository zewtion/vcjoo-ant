import { Button } from 'antd';
import * as React from 'react';
import './App.css';
import LifeCycle from './Components/LifeCycle';

interface InterState{ num:number }


class App extends React.Component<{},InterState> {
  constructor( props:any){
    super(props);
    this.state={
      num : 0
    }
  }

  public render() {

    return (
      <div className="App">
        <h1 className="App-title">Hello Ayan</h1>
        <Button type="normal" htmlType="button" onClick={callExp(5)}>LifeCycle</Button>
        <p className="App"> Click to Buttons </p>
        <div><LifeCycle/></div>
        
      </div>
    );
  }
}

function callExp( obj:number ){
  window.console.log( "hello exp" + obj );
}

export default App;
