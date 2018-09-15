import { Button } from 'antd';
import * as React from 'react';
import Board from './Board';

interface InterState{
  xIsNext:boolean,
  history:any
}

class Game extends React.Component<{},InterState>{
  constructor(props:any){
    super(props);
    this.state = {
      history : [{
          squares : Array(9).fill(null)
      }],
      xIsNext : true,
    };
  }

  public handleClick = (i:number) => {
    const historyTemp = this.state.history;
    const currentTemp = historyTemp[historyTemp.length-1];
    const squaresTemp = currentTemp.squares.slice();
    if( squaresTemp[i] || this.caculateWinner(squaresTemp) ){
      return;
    }
    squaresTemp[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: historyTemp.concat([{ squares: squaresTemp }]),
      xIsNext: !this.state.xIsNext
    });
  }

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

  // 초기화 버튼
  public fnReload = () => {
    this.setState({
      history : [
        {
          squares : Array(9).fill(null)
        }
      ],
      xIsNext: true
    })
  }

    public render(){
      const history = this.state.history;
      const current = history[history.length-1];
      const winner = this.caculateWinner( current.squares );
      let status;
      if( winner ){
        status = 'Winner is ' + winner;
      }else{
        status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return(
        <div>
          <div>
            <Board
              squares={current.squares}
              onClick={this.handleClick}

            />
          </div>
          <div>
            <div>{status}</div>
            <ol>{/** Todo */}</ol>
            <div><br/>
              <Button type="Normal" size="small" htmlType="button" onClick={ this.fnReload }> Clear() </Button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Game;