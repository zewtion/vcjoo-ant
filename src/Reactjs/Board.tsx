import { Button } from 'antd';
import * as React from 'react';
import { isBoolean } from 'util';
import Square from './Square'


interface InterStates{
    squares:any
    xIsNest:boolean
}

const vDefault = null; 

class Board extends React.Component<{},InterStates>{

    constructor(props:any){
        super(props);
        this.state={
            squares: Array(9).fill(vDefault),
            xIsNest: true
        }

    }

    public handleClick = (i:number) => {
        const squares2 = this.state.squares.slice();
        if( squares2[i] || this.caculateWinner(squares2) ){
          return;
        }
        squares2[i] = this.state.xIsNest ? "X" : "O";
        this.setState({
          squares: squares2,
          xIsNest: !this.state.xIsNest
        });
      }

    public renderSquare = (i:number) => {
      return <Square value={this.state.squares[i]} onClick={ this.handleClick.bind(this,i) } />;
    }

    public fnReload = () => {
      this.setState({
        squares: Array(9).fill(vDefault),
        xIsNest: true
      })
    }
  
    // 틱택토- 승리규칙
    public caculateWinner = (squares:any) => {
      const lines:any = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];

      for (const i of lines) {
        const [a,b,c] = i;
        if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
          return squares[a];
        }
      }
      return null;
    }

    public render(){
      let status;
      const winner = this.caculateWinner(this.state.squares);
      status = winner ? "Winner is " + winner : 'Next Player: ' + (this.state.xIsNest? "X" : "O");

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