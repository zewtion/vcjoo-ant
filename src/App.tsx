import { Button } from 'antd';
import * as React from 'react';
import './App.css';
import LifeCycle from './Components/LifeCycle';
import Javascript6 from './Javascript6/Poiemaweb';
import Step1ShoppingList from './Reactjs/Step1ShoppingList';

interface InterState{ 
  num:number,
  step:JSX.Element
}


class App extends React.Component<{},InterState> {
  constructor( props:any){
    super(props);
    this.state={
      num : 0,
      step : <p> Click top menu btn </p>
    }
  }

  public showComponents = ( flag:number ) => {
    /* tslint:disable:no-empty */
    if( flag === 1 ){
      this.setState({
        step : <LifeCycle temp=""/>
      });
    }else if( flag === 2 ){
      this.setState({
        step : <Javascript6 />
      });
    }else if( flag === 3 ){
      this.setState({
        step : <Step1ShoppingList name="HelloAyan"/>
      });
    }
  }

  public render() {
    return (
      <>
        <div className="App">
          <h1 className="App-title">Hello Ayan</h1>
          <Button type="Normal" size="small" htmlType="button" onClick={ this.showComponents.bind(this,1) }>LifeCycle</Button>
          <Button type="Normal" size="small" htmlType="button" onClick={ this.showComponents.bind(this,2) }>Javascript</Button>
          <Button type="Normal" size="small" htmlType="button" onClick={ this.showComponents.bind(this,3) }>Reactjs</Button>
        </div>
        <p className="S3Line"/>
        <div style={{textAlign:'center'}}>
          {this.state.step} 
        </div>
      </>
    );
  }
}


export default App;
