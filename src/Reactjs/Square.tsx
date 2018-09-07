import * as React from 'react'


class Square extends React.Component<{value:number, onClick:any},{}>{

  constructor(props:any){
    super(props);

    this.state = {
      value: null
    }

  }

  public render(){
      return(
        <button onClick={ this.props.onClick }>
          {this.props.value}
        </button>
      );
    }
  }


  export default Square;
  