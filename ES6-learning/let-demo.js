// var的临时性死区
console.log(i);

for(var i =1;i<10;i++){
    console.log(i);
}

console.log(i);
// 
var a=1;
var a=2;
// 不能同时使用
// let b=1;
// let b=2;