import * as React from 'react';
import { isBoolean } from 'util';
import Square from './Square'

interface InterProps{
  squares:any,
  onClick:any
}
interface InterStates{
    squares:any,
    xIsNest:boolean
}

const vDefault = null; 

class Board extends React.Component<InterProps,InterStates>{

    constructor(props:any){
        super(props);
        this.state={
            squares: Array(9).fill(vDefault),
            xIsNest: true
        }

    }

    public renderSquare = (i:number) => {
      // return <Square value={this.state.squares[i]} onClick={ this.handleClick.bind(this,i) } />;
      return <Square 
                value={this.props.squares[i]} 
                onClick={ this.props.onClick.bind(this,i) } 
              />;
    }

    public render(){

      return(
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

export default Board;