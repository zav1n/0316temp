/*
    Number.parseFloat(string) 方法可以把一个字符串解析成浮点数。

    给定值被解析成浮点数，如果无法被解析成浮点数，则返回NaN
*/
let num1 = Number.parseFloat(12.34)
let num2 = Number.parseFloat("2.54")
let num3 = Number.parseFloat("3.3.3")
let num4 = Number.parseFloat("%%") //NaN  无法解析成浮点数
console.log(num1) //12.34
console.log(num2) //2.54
console.log(num3) //3.3
console.log(num4) //NaN