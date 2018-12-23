const os = require('os');
const { odd, even } = require('./var');
const checkNumber = require('./func');



function checkString0dd0rEven(str){
    if( str.length % 2 ){
        return odd;
    }else{
        return even;
    }
}

function printId(){
    process.env.uid = 'vcjoo_under';
    const uid = process.env.uid;
    return uid;
}


window.console.log( checkNumber(10) );
window.console.log( 'print_id ', printId() );
window.console.log( __filename );