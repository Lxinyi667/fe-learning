//1.Number.isFinite()用来检查一个数值是否为有限的
    console.log(Number.isFinite(15)); // true
    console.log(Number.isFinite(0.8)); // true
    console.log(isFinite(25));//true

    //传统方法会先调用Number()方法将非熟知的值转换成数值，再进行判断
    console.log(isFinite("25"));//true[特殊]
    console.log(Number.isFinite("25"));//false

    //注意，参数类型不是数值，一律返回false
        Number.isFinite(NaN); // false
        Number.isFinite(Infinity); // false
        Number.isFinite(-Infinity); // false
        Number.isFinite('foo'); // false
        Number.isFinite('15'); // false
        Number.isFinite(true); // false
//2.Number.isNaN()用来检查一个值是否为NaN
console.log(isNaN(NaN));//true
console.log(isNaN("NaN"));//true

console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("NaN"));//false
console.log(Number.isNaN(1));//false

//3.Numbserr.parseInt() && Number.parseFloat()
// ES5写法
console.log(parseInt('12.13'))//12
console.log(parseFloat('123.45#'))//123.45
//ES6写法
console.log(Number.parseInt('12.13'))//12
console.log(Number.parseFloat('123.45#'))//123.45

console.log(Number.parseInt === parseInt);//true
console.log(Number.parseFloat === parseFloat);//true
//4.Match对象的扩展
console.log(Math.trunc(4.9))//4
console.log(Math.trunc(-0.125))//-0
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
console.log(Math.trunc("123.456"))//123
console.log(Math.trunc(true))//1
console.log(Math.trunc(false))//0
console.log(Math.trunc(false))//0
//对于空值和无法截取整数的值，返回NaN。
console.log(Math.trunc(NaN));//NaN
console.log(Math.trunc('foo'));
console.log(Math.trunc());
console.log(Math.trunc(undefined));
// Math.trunc = Math.trunc || function(x) {
//     return x < 0 ? Math.ceil(x) : Math.floor(x);
//   };
//   console.log(Math.trunc)


//5,Math.clz32()方法将参数转为32位无符号整数的形式，
//然后返回这个32位值里面有多少个前导0.

//0 的二进制形式全为 0，所以有 32 个前导 0；
console.log(Math.clz32(0));//32
//对于小数，Math.clz32方法只考虑整数部分。
console.log(Math.clz32(3.2));//30

//6.Math.hypot()方法返回所有参数的平方和的平方根。
console.log(Math.hypot(3,4)); //5