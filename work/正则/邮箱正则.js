let str1 = "123456789@qq.com"
let str2 = "123456789@163.com"
let str3 = "123456789@163.com.cn"
let str4 = "123456789@163.edu"
let str5 = "123456789@163.gov"
let str6 = "123456789@163.gov.jp"
let str7 = "hu_p@163.com.cn"
let str8 = "hu_p@163.com"


let reg = /^\w+@\w+[.]\w{2,4}([.]\w{2,4})?$/

console.log(reg.test(str1))
console.log(reg.test(str2))
console.log(reg.test(str3))
console.log(reg.test(str4))
console.log(reg.test(str5))
console.log(reg.test(str6))
console.log(reg.test(str7))
console.log(reg.test(str8))