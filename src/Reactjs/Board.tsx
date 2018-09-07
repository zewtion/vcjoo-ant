import * as React from 'react';
import Square from './Square'


interface InterStates{
    squares:any
}
class Board extends React.Component<{},InterStates>{

    constructor(props:any){
        super(props);
        this.state={
            squares: Array(9).fill('*')
        }
    }

    public handleClick = (i:number) => {
        const squares2 = this.state.squares.slice();
        squares2[i] = 'X';
        this.setState({squares: squares2});
      }

    public renderSquare = (i:number) => {
      return <Square value={this.state.squares[i]} onClick={ this.handleClick.bind(this,i) } />;
    }
  
    public render(){
      const status = 'Next Player: X';
      return(
        <div>
          <div className="status">{status}</div>
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