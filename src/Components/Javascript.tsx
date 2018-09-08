import { Button } from 'antd';
import * as React from 'react';

interface InterStates{
    tempText:string
}

let gSpot:number = 0;

class Javascript extends React.Component<{}, InterStates>{
    constructor(props:any){
        super(props);

        this.state = {
            tempText : ' here text '
        }
        
    }

    public fnScript1 = (i:number) =>{
        /* tslint:disable:no-empty */

        gSpot++;
        window.console.log(i + gSpot);
    }

    public render(){
        return(
            <>
                <Button onClick={ add2.bind }>Hello</Button>
                <div>{this.state.tempText}</div>
            </>
        )
    }
}

// Javascript Object()
function fnScript1(i:number){

    // JS에서 Object 타입은 java에서 HashMaps와 같다
    const obj = {
        details: {
            color: "orange",
            size: 12
        },
        "for": "Max",
        name: "Carrot"
    }

    window.console.log('123: ' + i);
    window.console.log( 'obj.name: ' + obj.name );
    window.console.log( 'obj.for: ' + obj.for );
    window.console.log( 'obj.details.color: ' + obj.details.color );
}

// Javascript Array()
function fnArray(){
    /***
        concat 해당 배열에 지정한 항목들을 추가한 새로운 배열을 돌려줍니다
        pop 마지막 항목을 제거한 다음 돌려둡니다
        push 마지막에 하나 이상의 항목을 추가합니다 (ar[ar.length]와 같이)
        slice 배열의 일부분을 돌려줍니다
        sort 비교에 사용할 함수를 따로 지정할 수 있습니다
        splice 구역을 삭제하거나 항목을 추가해서 배열을 수정할 수 있게합니다
        unshift 배열의 시작부분에 항목을 붙일 수 있습니다
        join 다수개의 배열을 합칠 수 있습니다
    */
    const a = ["dog", "cat", "hen"];
    window.console.log( a[1] ); 
}

// Javascript Function()
function add(){
    /***
     함수의 인자는 없을 수도, 많을 수도 있다
     java처럼 인자로 인한 오버로딩이 되지 않는다

     ex) add(1,2,3,4) = 10
     ps) react에서 1번쨰 인자는 this 값이다
    */

   let sum = 0;
   for (let i = 0, j = arguments.length; i < j; i++) {
       sum += arguments[i];
   }
   window.console.log( 'sum['+ sum +']' ); // add(this,1,2,3,4) === sum[10]
   // window.console.log('argument.callee['+ arguments.callee +']')
   // caller, callee, arguments 는 강화된 규격의 스크립트 언어에서 사용 할 수 없다
}
function add2(){
    // 오버로딩 기능은 없지만 apply 라는 함수를 제공한다
    // 2번째 인자에 arguments 배열을 입력 할 수 있다
    add.apply(null, [1,2,3,4] );
}




export default Javascript;