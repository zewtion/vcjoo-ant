const { odd, even } = require('./var');

function check0dd0rEven(num){
    if( num%2 ){
        return odd;
    }else{
        return even;
    }
}

module.exports = check0dd0rEven;