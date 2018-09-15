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
      history : [
        {
          squares : Array(9).fill(null)
        }
      ],
      xIsNext : true,
    };
  }

  public handleClick = (i:number) => {
    const history = this.state.history;
    const current = history[history.length-1];
    const squares2 = current.squares.slice();
    if( squares2[i] || this.caculateWinner(squares2) ){
      return;
    }
    squares2[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares2 }]),
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
              onClick={this.handleClick.bind(this,i)}
            />
          </div>
          <div>
            <div>{status}}</div>
            <ol>{/** Todo */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;