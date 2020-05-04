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

//
let arr = [1, [2, [3, 3], 2], 1];
// let arr2 = arr

//一层深复制
// let arr2 = arr.slice();
// let arr2 = [...arr]
// let arr2 = arr.concat([])

//递归深复制
function deepClone(arr) {
    let newArr = [];
    //遍历
    for (let i = 0; i < arr.length; i++) {
        //判断每个元素是不是数组
        if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
            //如果是数组就递归调用deepClone
            newArr.push(deepClone(arr[i]))
        } else {
            //如果是元素直接push
            newArr.push(arr[i])
        }
    }
    return newArr
}

let arr2 = deepClone(arr)
console.log(arr2 === arr) //false
arr[1][1][1] = 100
console.log(arr) //[ 1, [ 2, [ 3, 100 ], 2 ], 1 ]
console.log(arr2) //[ 1, [ 2, [ 3, 3 ], 2 ], 1 ]





//

let obj = {
    name: "张三",
    wife: {
        name: "小红",
        car: {
            name: "玛莎拉蒂"
        }
    }
}

//一层深复制
// let arr2 = arr.slice();
// let arr2 = [...arr]
// let arr2 = arr.concat([])

//递归深复制
function deepClone(obj) {
    //初始化一个新的对象
    let newObj = {};
    //遍历 所有的的key
    for (let key of Object.keys(obj)) {
        //判断每个是对象还是元素
        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            //如果是对象
            newObj[key] = deepClone(obj[key])
        } else {
            //如果是元素
            newObj[key] = obj[key]
        }
    }
    return newObj
}

let obj2 = deepClone(obj)
    // console.log(obj2 === obj)
obj2.wife.car.name = "比亚迪"
console.log(obj) //{ name: '张三', wife: { name: '小红', car: { name: '玛莎拉蒂' } } }
console.log(obj2) //{ name: '张三', wife: { name: '小红', car: { name: '比亚迪' } } }

//




//
let obj = {
    name: "张三",
    wife: {
        name: "小红",
        car: {
            name: "玛莎拉蒂"
        }
    }
}
let arr = [1, [2, [3, 3], 2], 1]
let obj2 = {
    name: "张三",
    hobby: [{
        name: "唱歌",
        play: function() {
            return "我喜欢" + this.name
        }
    }, {
        name: "跳舞"
    }]
}

//一层深复制
// let arr2 = arr.slice();
// let arr2 = [...arr]
// let arr2 = arr.concat([])

//递归深复制
// JSON.parse(JSON.stringify())

function deepClone(obj) {
    //初始化一个新的对象或数组或直接返回
    let newObj;
    if (Object.prototype.toString.call(obj) === "[object Object]") {
        //如果是对象 我的主数据就是对象 所以需要初始化一个最大的对象
        newObj = {}
    } else if (Object.prototype.toString.call(obj) === "[object Array]") {
        //如果是数组 我的主数据就是数组 所以需要初始化一个最大的数组
        newObj = []
    }

    for (let key in obj) {
        //对里面的属性进行遍历
        let temp = Object.prototype.toString.call(obj[key])
        if (temp === "[object Object]") {
            //如果这个属性是 对象
            //递归调用该方法
            newObj[key] = deepClone(obj[key])
        } else if (temp === "[object Array]") {
            //如果这个属性是数组 递归调用该方法
            newObj[key] = deepClone(obj[key])
        } else if (temp === "[object Function]") {
            // console.log(obj[key].toString())
            newObj[key] = obj[key].bind(newObj)
        } else {
            //如果既不是数组 也不是对象 就直接copy
            newObj[key] = obj[key]
        }
    }
    return newObj
}
let obj22 = deepClone(obj2);
console.log(obj22 === obj2); //false
obj2.hobby[0].name = "游泳";
console.log(obj2)
    // {name: '张三',hobby: [ { name: '游泳', play: [Function: play] }, { name: '跳舞' } ]}
console.log(obj22)
    //{name: '张三',hobby: [ { name: '唱歌', play: [Function: bound play] }, { name: '跳舞' } ]}
console.log(obj2.hobby[0].play === obj22.hobby[0].play) //false
console.log(obj2.hobby[0].play()) //我喜欢游泳
console.log(obj22.hobby[0].play()) //我喜欢唱歌

//------------------数组去重--------------------------------------
function unique(arr) {
    return Array.from(new Set(arr))
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
var arr1 = [6, 8.9, 9.12, 13, 14, 13]
let newArr = Array.from(new Set(arr1))
    // console.log(unique(arr))
console.log(newArr)
    //
var arr = [6, 8.9, 9.12, 13, 14, 13]
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--;
        }
    }
}

console.log(arr)