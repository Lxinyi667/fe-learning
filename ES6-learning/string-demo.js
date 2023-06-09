
var a = 'hello'
var b = 123
console.log('a的值是：'+ a + 'b的值是：'+b);
// 【模板字符串】
// 1.字符串换行
    // es5
// var str = '第一行内容\n'+
//     '第二行内容\n'+
//     '第三行内容\n';
//     console.log(str);
    //ES6
let strhh = 
    `第一行内容
第二行内容
第三行内容
    `
console.log(strhh);

    // 字符串的拼接
    let name='zhang'
    let school = 'njuit'
    console.log(`学校：${school},姓名：${name}`);//学校：njuit,姓名：zhang

    //带标签的模板字符串
    let str =`<h2>hello</h2>
    <div>world</div>
    <p>aaa</p>`
    console.log(str);

//包含逻辑运算的字符串
    // let x= 1;
    // let y = 2;
    // console.log(`x+y=` +(x+y));//es5
    // console.log(`x+y的和是：${x+y}  `)//es6
    // const age = 17;
    // console.log(`小明是：${age>18 ?'成年人':'未成年人'}`);
//包含更复杂逻辑运算的字符串hhhh
    function isAdult(strArr,age){
        let s1= strArr[0]
        let info = ''
        if (age>18){
            info = age + '岁成年了';

        }else{
            info = age + '岁还未成年';
        
        }
        return `${s1}${info}`;
    }
    const age = 17;
    let res = isAdult`小明今年${age}${isAdult}`;
    console.log(res);//小明今年17岁还未成年