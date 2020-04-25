let num = 1;
let obj = {
  name: "张三"
}

let num2 = num;
let obj2 = obj;
console.log(num)    // 1
console.log(num2)   // 1
console.log(obj.name)  // 张三
console.log(obj2.name)  // 张三

num = 2
obj.name = "李四"

console.log(num) //2
console.log(num2) // 1
console.log(obj.name)  //李四
console.log(obj2.name)  //李四 obj2的地址原先是张三,后来地址的张三被改为李四,所以obj2就变成李四
                        //数字的话就要看域