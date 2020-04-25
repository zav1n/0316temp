// 验证某字符串是回文字符串 "我是我" "level" "123321"
// Input: string
// Output: Boolean
let str1 = "我是我"
let str2 = "level"
let str3 = "123321"
let str4 = "A123321a"


let fn1 = (str) => str === str.split("").reverse().join("") ? true : false

console.log(fn1(str1)) //true
console.log(fn1(str2)) //true
console.log(fn1(str3)) //true
console.log(fn1(str4)) //false
