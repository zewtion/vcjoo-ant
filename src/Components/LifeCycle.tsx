import * as React from 'react'

interface InterStates {
    textView:string
}
interface InterProps {
    temp:string
}

class LifeCycle extends React.Component<InterProps,InterStates>{
    constructor(pops:any){
        super(pops);

        this.state = {
            textView: ""
        }
    }

    public componentWillMount(){
        window.console.log("conponentWillMount();");
    }
    public componentDidMount(){
        window.console.log("componentDidMount();");
    }


    public render(){
        return(
            <>
                <div>
                    LifeCycle Pannel !!<br/>
                    {this.state.textView}}
                </div>
            </>
        );
    }
}

export default LifeCycle;   