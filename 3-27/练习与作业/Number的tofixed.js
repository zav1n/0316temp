
//tofixed用法,tofixed是Number工厂的一个属性
//取小数点后数字的个数
let num1 = 66.66;
let num2 = 12.6678979;
let num3 = "88.88"

//Object.tofixed(a)  a是你要取多少位小数
console.log(num1.toFixed(1));//取一位小数
console.log(num2.toFixed(3));//取3位小数
//console.log(num3.toFixed(2)); //因为Number只能用于数字不能用于字符串
                              //字符串Object也没有toFixed这个方法
                              //所以会显示错误not function

//Number.prototype.toFixed() 方法是这样的,为什么引用的时候不用加prototype呢? 答:周期  可跳过或者了解