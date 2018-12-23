function helloWorld(){
    window.console.log('Hello world');
    helloNode();
}

function helloNode(){
    window.console.log('Hello node');
}

helloWorld();

window.console.log( __filename );
window.console.log( __dirname );
