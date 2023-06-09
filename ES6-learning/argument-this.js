// var fun = function (){
//     console.log(arguments);
// }
const fun = ()=>{
    console.log(arguments);
}
function foo(...args){
    console.log(args);
}
fun(1,2,3)
console.log("分割线————————");
function t01() {
    /** 1.通过arguments对象可以拿到传入的参数 
     * 2.arguments 中包含了函数传递的参数、length等属性，
     * length属性表示的是实参的⻓度，即调用函数的时候传入的参数个数 
     * *///[Arguments] { '0': [ 'sing', 'coding' ] }
     console.log(arguments)
     /** 1想要使用传递的参数，则需要按位置把对应的参数取出来，
      * 尽管 arguments是一个类数组且可遍历的变量，
      * 但它终究不是数组，它不支持数组方法,
      * 因此不能调用arguments.forEeach (..）等数组的方法，
      * 需要使用一些特殊的方法转换成数组使用借助call 方法
      * 把argument转化成一个真正的数组
       */
     //[ [ 'sing', 'coding' ] ]
     var arr= [].slice.call(arguments)
     console.log(arr)}
     var arr= ["sing", "coding"]
     t01(arr);
     console.log("剩余参数————————");
     function t02(name, ...args){
        //es6
        console.log(name);
        //[[ 1, 2 ]]
        console.log(args);
        //输出args的类型【object】
        console.log(typeof args);
     }
     t02("es6",[1,2]);
  