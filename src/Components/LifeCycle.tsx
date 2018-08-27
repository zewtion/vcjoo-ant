import * as React from 'react'

interface InterProps {
    temp:string
}
interface InterStates {
    textView:string
}

let tempList:string = '';
let tempCount:number = 0;
class LifeCycle extends React.Component<InterProps,InterStates>{
    constructor(pops:any){
        super(pops);

        this.state = {
            textView: ""
        }

        
    }
    
    public componentWillMount(){
        window.console.log("conponentWillMount();" + ++tempCount );
        tempList += "conponentWillMount();\n";
    }
    public componentDidMount(){
        window.console.log("componentDidMount();" + ++tempCount );
        tempList += "componentDidMount();\n";
    }

    public render(){
        window.console.log("render();" + ++tempCount );
        tempList += "render();\n";
        return(
            <>
                <div>
                    {
                        tempList.split('\n').map((line, i) => {
                                return( <span key={i}>{line}<br/></span> )
                            }
                        )
                    }
                </div>
            </>
        );
    }
}

export default LifeCycle;