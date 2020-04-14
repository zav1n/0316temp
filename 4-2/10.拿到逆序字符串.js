// 怎么样拿到一个逆序字符串
// 数组/for
// Input apple
// Output elppa

//1.定义一个字符串
let str1 = "apple"
//2.用函数
//3.将字符串切割 split 再倒过来 reverse 再 拼接 join 起来
let fn1 = str => str.split("").reverse().join("")
console.log(fn1(str1))