let a = {};
let b = {
    "name": "张三"
}
let c = {
    "name": "李四"
}
a[b] = 123; //a.{"name": "张三"} =>a.{"name": "张三"}.toString() => a."[object Object]"
a[c] = 456; ///a.{"name": "李四"} => a.{"name": "李四"}.toString() => a."[object Object]"

console.log(a[b]) //456
console.log(a[c]) //456

//-------------------------------------------------------------
function fn(n) {
    debugger
    if (n === 1) {
        return 1
    } else {
        return n * fn(n - 1)
    }
}

console.log(fn(4))


let a = -5;
console.log(Math.abs(a) === a)

//问题 我有个10个阶梯 我每次迈出的步子 可以是一个阶梯 也可以是两个阶梯
//请问 爬楼的方法 有多少种?
// fn(10) = fn(9) + fn(8)
// fn(1) = 1;
// fn(2) = 2;
// fn(3) = fn(2) + fn(1);
// fn(4) = fn(3) + fn(2);

//产生过多的栈内存,造成内存溢出
//非常简洁

//内存溢出 和 内存泄露

function fn(n) {
    if (n === 1 || n === 2) {
        return n
    } else {
        return fn(n - 1) + fn(n - 2)
    }
}
console.log(fn(3)) //3
console.log(fn(4)) //5
console.log(fn(5)) //8
console.log(fn(10)) //89