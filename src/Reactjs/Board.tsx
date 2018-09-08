import { Button } from 'antd';
import * as React from 'react';
import Square from './Square'


interface InterStates{
    squares:any
}

const vDefault = 'O'; 
const vClick = 'X';

class Board extends React.Component<{},InterStates>{

    constructor(props:any){
        super(props);
        this.state={
            squares: Array(9).fill(vDefault)
        }
    }

    public handleClick = (i:number) => {
        const squares2 = this.state.squares.slice();
        if( squares2[i] === vClick ){
          squares2[i] = vDefault;
        }else{
          squares2[i] = vClick;
        }
        this.setState({squares: squares2});
      }

    public renderSquare = (i:number) => {
      return <Square value={this.state.squares[i]} onClick={ this.handleClick.bind(this,i) } />;
    }

    public fnReload = () => {
      this.setState({
        squares: Array(9).fill(vDefault)
      })
    }
  
    public render(){
      const status = 'Next Player: ' + vClick;
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

          <div><br/>
            <Button type="Normal" size="small" htmlType="button" onClick={ this.fnReload }> Clear() </Button>
          </div>
        </div>
      );
    }
  }

export default Board;