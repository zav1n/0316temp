
console.log([] === [])
console.log([] == [])
console.log({} === {})
console.log({} == {})

// 四个得出来的结果是什么?

// 其实类比如以下

let obj = new Object(); //0x111
let obj2 = new Object(); //0x222
let arr = new Array();
let arr2 = new Array();
console.log(obj === obj2)
console.log(obj == obj2)
console.log(arr === arr2)
console.log(arr == arr2)
