// const PI;
// PI = 3.14;
// 上面的写法不行，会报错

//常量必须立即初始化且赋初值
const PI = 3.14;
console.log(PI);//3.14
    //定义对象
const obj = {
    a:12
}
console.log(obj);//12
// 值可以改变
obj.a=13;
console.log(obj);//13

    //定义数组
    const arr = []
    arr.push(1)
    arr.push(2)
    arr.push(3)
    //改变数组的值（内容）
    console.log(arr);
    
for(var i=0;i<3;i++){
    setTimeout(() =>{
        console.log(i);
    },1000*1)
}
console.log('hello World');