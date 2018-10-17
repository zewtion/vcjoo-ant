

const timer1 = setImmediate( () => {
    console.time( 'timer1' );
    console.log( 'timer1[ 나는 즉시 실행되는 함수에요! 비동기 구현시 활용되고 있어요! ]' );
    console.timeEnd( 'timer1' );
} );

const timer2_ = setTimeout(()=>{ 
    console.log( 'timer2_[ 나는 Immediate 보다 우선 순위가 높아요! 하지만 항상 그런건 아니에요! ]' );
 },0);

const timer2 = setTimeout( ()=>{
    console.time( 'timer2' );
    console.log( 'timer2[ Interval보다 우선순위가 높아요! 시간 지정에 유의해 주세요 ! ]' );
    console.timeEnd( 'timer2' );
    
    clearImmediate( timer3 );
    timer4();
}, 3001 );

const timer3 = setInterval( ()=>{
    console.time( 'timer3' )
    console.log( 'timer3[ 나는 Timeout 보다 우선순위가 낮아요 시간을 Timeout 보다 줄여 주세요! ]' )
    console.timeEnd( 'timer3' );
}, 3000 );

function timer4(){
    try{
        console.log( 'timer4[ 나는 즉시 실행이 안되요 ]' );
        setTimeout( ()=>{
            const errors = null + 1;
            console.log( 'timer4[ timer2가 나를 호출 해 줬어요!~ ]' + errors );
        }, 5000 );
    }catch( error ){
        console.error('timer4[ 나는 에러가 나면 호출 될거에요! ]' + error.message );
    }
}