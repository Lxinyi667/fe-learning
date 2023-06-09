// 原始函数
var name = function(){
    return 1+1;
}
console.log(name());//2
    //去掉function关键字
    let name1 =() =>{
        return 1+1;
    }
console.log(name1());//2
    // 1.如果函数体只包含一条return语句，
    //那么函数体的大括号和return关键字就可以省略
    let name2 =() => 1+1;
console.log(name2());//2
    //2.或者函数体不包含return语句，那么也可以把大括号给省略掉
    let name3=() => console.log("aaaaa");console.log("bbbbbb");
    name3();//aaaa

// 箭头函数demo
let sum = (num1 , num2) => num1 + num2
let sum1 = num => num +10
console.log(sum(2,3));//5 
console.log(sum1(5));//15

console.log([1,2,3].map(x => x*x));//1,4,9
//es5
[1,2,3].map(x => x *x);

 //注意点
    //1.没有 this
    //2.箭头函数不能绑定arguments

    //es6测试、
    let fun2 =() =>{
        console.log(arguments)//会出现一大堆信息
    }
    fun2("hello world");
   
        //es5可以
        let fun = function (){
            console.log(arguments)//[Arguments] { '0': 'hello world' }
        }
        fun("hello world");
    // 修改es6测试，用剩余参数来代替arguments
    let fun3 =(...args) =>{
        console.log(args)
    }
    fun3("hello world");//[ 'hello world' ]

    //3.箭头函数不能作为构造函数，和new 一起用会报错
    let fun4 =() =>{
        console.log("箭头函数并不能new");
    }
    fun4();
    //不能new出来
    let t = new fun4();//会报错

    //4.没有proptotype属性
    //es5的proptotype测试
    function person(){

    }
    person.prototype.name ="es6没有proptotype属性";
    var p = new person();
    console.log(p.name);//es6没有proptotype属性
    //
