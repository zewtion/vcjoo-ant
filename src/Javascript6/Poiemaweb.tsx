import * as React from 'react';
import '../App.css';

interface InterStates{
    v1sort:any,
    v2sort:any
}

class Poiemaweb extends React.Component<{}, InterStates>{
    constructor(props:any){
        super(props);

        this.state={
            v1sort : '?',
            v2sort : '?'
        }
    }
    
    // v1관련 함수 
    public v1CompareNumber(a:any, b:any){
        return a-b; // asc
        // return (a-b) * -1 // desc
    }
    public v1HandleClick = (e:any) => {
        this.setState({
            v1sort : e.sort(this.v1CompareNumber)
        })
    }
    public v2HandleClick = () =>{
        this.setState({
            v2sort : '--'
        })
    }
    public render(){
        const v1arr:any = ['apple/ ', 'twice/ ', 'react/ ', 'ayan/ ', '12/ ', '9/ ', '777/ '];
        const v1are:any = [1,2,3,4,9,8,7,6,5];
        const v2are:any = [1,2,3,4,9,8,7,6,5];
        return(
            <>
                <h1>#v1 &nbsp;
                    <a href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort' target='_blank'>
                        Array.prototype.sort()
                    </a>
                </h1>
                <div style={{backgroundColor:'lightgray', margin:'10px'}} >
                    한줄요약 : 배열객체를 정렬 시킨다<br/><br/>
                    const v1are:any = [1,2,3,4,9,8,7,6,5];<br/>
                    <u className="pointer" onClick={this.v1HandleClick.bind(this, v1are)}>v1are.sort(v1CompareNumber)</u> -> { this.state.v1sort }
                </div>

                <h1>#v2 &nbsp;
                    <a href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='_blank'>
                        Array.prototype.filter()
                    </a>
                </h1>
                <div style={{backgroundColor:'lightgray', margin:'10px'}} >
                    한줄요약 : 필터링 된 배열을 복제한다<br/><br/>

                    다음 배열에서 5이상의 숫자만 꺼내와 보겠습니다
                    const v2are:any = [1,2,3,4,9,8,7,6,5];<br/>
                    var result = v2are.filter( word => word >= 5 )
                    <u className="pointer" onClick={this.v2HandleClick}> result </u> = { this.state.v2sort }
                </div>
            </>
        );
    }
}

export default Poiemaweb;