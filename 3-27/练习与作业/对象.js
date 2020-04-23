// Object  :  对象
// 创建对象:  let obj = {} 或 let obj2 = new Object();
//不仅仅是Object是对象
let n1 = new Number(1);
let n2 = new Number(2);
let n3 = new Number("3");
//Number好比一个工厂,和Object一样的工厂,而n1  n2  n3 是工厂生成的实例,简称实例
//任何实例都可以使用该构造类的所有的原型属性及原型方法

console.log(n1)
console.log(n2)
console.log(n3)  //因为"3"是字符串不是数字,所以会报NaN,如果要判断这个是不是数字要用Number.isNaN();
