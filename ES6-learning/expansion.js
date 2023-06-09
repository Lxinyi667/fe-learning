console.log("1.对数组或对象字面量进行拷贝");
console.log("ES 5 写法--------");
    //ES 5 写法
var arr1 = [1,2,3];
// var arr1;
// arr1=[1,2,3];
    //利用concat赋值、
    //需要在定义时，就赋值，否则arr2为空
var arr2 = [].concat(arr1) 
    //利用splice赋值
var arr3 = arr1.slice(0)
arr1.push(4);//后期push(4)，但改变了全局，arr1已经被改变
// arr1.forEach(function(value){
// arr2.push(value)
// })
console.log(arr1);//[1,2,3,4]
console.log(arr2);//[1,2,3]
console.log(arr3);//[1,2,3]
console.log("ES 6 写法--------");
let arrr1= [3,4,5]
let arrr2= [...arrr1]
arrr1.push(6)
console.log(arrr1)
console.log(arrr2);
    console.log("2.浅拷贝--------");
    const obj = { a:1 , b:2 }
    let copyObj = {... obj}
    console.log(obj)
    console.log(copyObj);

    function sum( x, y, z ){
        return x + y + z;
    }
    const arr4 = [1,2,3];
    console.log(sum(...arr4));//6[将对象传到方法中进行计算]
console.log("分割线--------");
const arr = [...'hello']
console.log(arr);
console.log(arr.length);    //获取对象的长度
console.log("分割线--------");
