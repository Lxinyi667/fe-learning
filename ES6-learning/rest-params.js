var myLike = {
    0 :'sing',
    1 :'coding',
    length:2
}
   console.log("剩余参数————————");
var arr = ['sing','coding']

function fn(name, ...args){
    console.log(name);
    console.log(args);
}
fn('ES6',123,'hello')