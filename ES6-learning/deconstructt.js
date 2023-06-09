// 解构赋值
// 1-数组解构赋值
console.log("-----1-数组解构赋值----");
var arr = [1,2,3]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// let [a,b,c] = [1,2,3]
// console.log(a);
// console.log(b);
// console.log(c);

// let [a,b = 1] = [10,'hello']
// let [x,y = 1] = [10,undefined]
// console.log(x);//10
// console.log(y);//1
// let [a = 1] = [null]
// console.log(a);//null

console.log(null == undefined);  //true
console.log(null === undefined); //false

// let c=1;
// let d=2;
// console.log(c);//1
// console.log(d);//2
// [c,d]=[d,c]
// console.log(c);//2
// console.log(d);//1

let [e, , ,f] = [1,2,3,4]
console.log(f);//4
// 2-对象解构赋值
console.log("---2-对象解构赋值---");
var obj = {name : 'zhangsan',age:22}
let {name,age} = obj;
console.log(name); //zhangsan
console.log(age);  //22
// 重命名属性 es5
let { a:x = 8, b:y= 3}={a:2}

console.log(x);//2
console.log(y);//3

// 3-解构字符串
const [a,b,c] = 'xyz'
console.log(a +','+b+','+c);//x,y,z

let { length:len } ='hello'
console.log(len);//5

console.log("---4.解构复杂类型：---");
// 4-解构复杂类型
let data = {
    code :1,
    list:[
        {
            name:'zhang',
            age:22
        },{
            name:'li',
            age:23
        }
    ]
}
let {
    code:newCode,
    list:[
        {
            name:newName,
            age:newAge
        },
    ]
} =data
console.log(newCode);//1
console.log(newName);//zhang
console.log(newAge);//22