let num = 1;
let obj = {name: "张三"}

let num2 = num;
let obj2 = obj;
num = 2

obj = { name: "李四"}

console.log(num) //2
console.log(num2) //1
console.log(obj.name) //李四
console.log(obj2.name) //张三