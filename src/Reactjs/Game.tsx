import * as React from 'react';
import Board from './Board';

class Game extends React.Component{
    public render(){
      return(
        <div>
          <div>
            <Board/>
          </div>
          <div>
            <div>{/** Status */}</div>
            <ol>{/** Todo */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;