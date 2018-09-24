import * as React from 'react'
import Game from './Game';

interface InterProps{
  name:string
}


class ShoppingList extends React.Component<InterProps, {} > {

  constructor(props:any){
    super(props);

  }

  public componentDidMount(){
    window.console.log('Hello');
  }

  public render() {
    return (
      <>
        <div className="shopping-list">
          <h1>Reactjs {this.props.name} </h1>
          <Game/>
        </div>
      </>
    );
  }
}
  
 export default ShoppingList;

