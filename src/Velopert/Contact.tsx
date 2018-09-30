import * as React from 'react';

interface InterStates{
    keyword:string
}


// 벨로퍼트 주소록 화면 샘플 작성 
class Contact extends React.Component<{}, InterStates>{
    constructor(props:any){
        super(props);
        this.state = {
            keyword: ""
        }
    }


    public handleChange = (event:any) => {
        this.setState({
            keyword : event.target.value
        })
    }

    public render(){

        return(
            <>
                <div>
                    <h1>Contacts</h1>
                    <input
                        name="keyword"
                        placeholder="Search for the name"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                </div>
            </>
        );
    }
}


export default Contact;