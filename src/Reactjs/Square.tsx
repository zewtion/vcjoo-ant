import * as React from 'react'


class Square extends React.Component<{value:number, onClick:any},{}>{

  constructor(props:any){
    super(props);

    this.state = {
      value: null
    }

  }

  public render(){
      const space1 = <code>&nbsp;</code>;
      return(
        <button className="btnSquare" onClick={ this.props.onClick }>
          { this.props.value ? this.props.value : space1 }
        </button>
      );
    }
  }


  export default Square;
  