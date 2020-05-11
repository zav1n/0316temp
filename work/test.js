function eat() {
  console.log(this.name + "在吃");
}

let obj1 = {
  name: "张三",
};

let obj2 = {
  name: "李四",
};

eat.call(obj1);
eat.call(obj2);
//----------------------------------------------

let animals = [
  { species: "Lion", name: "King" },
  { species: "狗", name: "柯基" },
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("下标：" + i);
      console.log(this.species + ": " + this.name);
    };
    this.print();
  }.call(animals[i], i));
}
//for遍历animals  i获取下标   匿名函数 (function(i){}).call(animals[i],i)

//-------------------------------------------------------------
function amimals() {
  let reply = [this.animal, "睡", this.sleepDuration].join("");
  console.log(reply);
}

var obj = {
  animal: "猫",
  sleepDuration: "12到16个小时",
};

amimals.call(obj); //猫睡12到16个小时

//-------------------------------------------------------------
var array = ["a", "b"];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//-------------------------------------------------------------

let obj = {
  str: 42,
  getFn: function () {
    return this.str;
  },
};
let unboundGetFn = obj.getFn;
console.log(unboundGetFn()); // 函数在全局范围内被调用
// 输出: undefined
let boundGetX = obj.getFn.bind(obj);
console.log(boundGetX());
// 输出: 42

//-------------------------------------------------------------
let str = "北京欢迎您";
console.log(str);
console.log(str[2]);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//-------------------------------------------------------------
let arr = ["北京", "深圳", "上海"];
Array.from(arr, function (e, i) {
  console.log(e, i);
});
//-------------------------------------------------------------
//element 当前被遍历的元素值
//index 当前被遍历的元素下标
//array 源数据

let arr = ["北京", "深圳", "上海"];
//forEach 不会提供返回值
arr.forEach(function (e, i, a) {
  console.log(e, i, a);
});
//北京 0 [ '北京', '深圳', '上海' ]
//深圳 1 [ '北京', '深圳', '上海' ]
//上海 2 [ '北京', '深圳', '上海' ]

//-------------------------------------------------------------

//保留所有的奇数 [1, 3, 5, 7, 9]
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//遍历所有的元素 当该元素的返回值 是真的时候 就保留 是假的时候就不保留
let newArr1 = arr.filter((e) => e % 2 === 1); // 简写
let newArr = arr.filter(function (e) {
  if (e % 2 === 0) {
    //2 4 6 8 10
    return false;
  } else {
    //1 3 5 7 9
    return true;
  }
});
console.log(newArr);
console.log(newArr1);
//-------------------------------------------------------------
var items = [
  { name: "Edward", value: 21 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];
// 按年龄排序
items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(items);

// [
//     { name: 'The', value: -12 },
//     { name: 'Edward', value: 21 },
//     { name: 'Zeros', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'Magnetic' }
// ]

// 按英文名字排序

items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

console.log(items);
// [
//     { name: 'And', value: 45 },
//     { name: 'Edward', value: 21 },
//     { name: 'Magnetic' },
//     { name: 'The', value: -12 },
//     { name: 'Zeros', value: 37 }
// ]

//-------------------------------------------------------------

//sort 方法的本质 是将 所有的元素 转换成 字符串 再根据UTF-16进行排序
let arr = ["apple", "cherry", "AAA", "zzz", "banana", 1, 2, 3];
let newArr = arr.sort(); //1, 2, 3, AAA, apple, banana, cherry, zzz
console.log(newArr);
[1, 2, 3, "AAA", "apple", "banana", "cherry", "zzz"];

//在正常的字符串比较的时候是没有任何问题的 但是在纯数字的理解上 计算机和人类产生了冲突
//需要为sort提供一个回调函数 主动的提供自定义的排序方法
//在这个回调函数中 又规定两个 回调参数
//第一个参数 代表的是当前值
//第二个参数 代表的是下一个值
//再为这个回调函数提供一个返回值
//如果返回值是负数的话 那么前后两个参数 就会原地发生交换 否则不交换
let arr2 = [1, 11, 2, 22];

console.log(
  arr2.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
    // return a - b
  })
); //1, 11,2, 22
arr2.sort((a, b) => a - b);

//-------------------------------------------------------------
let arr = ["A", "B", "B", "B", "D", "C", "D", "B"];
let Search_A = arr.lastIndexOf("A");
if (Search_A != -1) {
  console.log("lastIndexOf()写法：" + true);
} else {
  console.log("lastIndexOf()写法：" + false);
}
//-------------------------------------------------------------
var i = 12;
var sum = i++ + ++i + ++i * 2 + i-- + i--;
console.log(sum + " " + i);
//-------------------------------------------------------------
//如何将arr的数组降序排序
var arr = [25, 111, 18, 12, 92, 5, 15];
console.log(arr.sort()); //[111,12,15,18,25,5,92]
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
); //[5,12,15,18,25,92,111]
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
); //[111,92,25,18,15,12,5]
console.log(arr.sort(b - a)); //报错，b is not defined
//-------------------------------------------------------------
var arr = [1, 2, 3, 4];
// 执行arr.concat(1,2,3,[1,2,3,],5)后，arr的长度为（）
let newArr = arr.concat(1, 2, 3, [1, 2, 3], 5);
console.log(newArr.length);
//-------------------------------------------------------------
// var now = new Date(),设置3天后的时间正确写法（）
// A：now.setDate(now.getDate()+3)
// B：now.setTime(now.getTime()+3)
// C：now.setTime(now.getDate()+3*1000*3600*24)
// D：now.setTime(now.getMILLISECONDS()+3*1000*3600*24)
var now = new Date();
console.log(now.setDate(now.getDate() + 3));
console.log(now.setTime(now.getTime() + 3));
console.log(now.setDate(now.getDate()));
console.log(now.setTime(now.getTime()));
console.log(now.setTime(now.getDate() + 3 * 1000 * 3600 * 24));
console.log(now.setTime(now.getMilliseconds() + 3 * 1000 * 3600 * 24));
//一天39024秒

//-------------------------------------------------------------
let add = (...outerArg) => {
  let inner = (...innerArg) => add(...outerArg, ...innerArg);
  inner.toString = () => outerArg.reduce((acc, cur) => acc + cur);
  return inner;
};

console.log(add(1, 2, 3)(4, 5)(6));

//-------------------------------------------------------------

function add2(...outerArgs) {
  function inner(...innerArgs) {
    return add2(...outerArgs, ...innerArgs);
  }
  inner.toString = function () {
    // 参数的处理
    let result = 0;
    for (let i = 0; i < outerArgs.length; i++) {
      result += outerArgs[i];
    }
    return result;
  };
  return inner;
}
console.log(add2(1, 2, 3)(4, 5)(6, 7)); //////////////===========/ */
/*************************/ function add1(...outerArgs) {
  inner.toString = function () {
    let result = 0;
    for (let i = 0; i < outerArgs.length; i++) {
      result += outerArgs[i];
    }
    return result;
  };

  function inner(...innerArgs) {
    return add1(...outerArgs, ...innerArgs);
  }
  return inner;
}
console.log(add1(1, 2, 3)(4, 5)(6, 7));

/**************************************************** */
let arr = [1, -1, [[2, 0], 5, [3]], 5];

function flatArr(arr) {
  //一定要有形参!要不然会显示undefined
  let newArr = []; //定义一个空的数组来接新的数组
  for (let i = 0; i < arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
      newArr.push(...flatArr(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr; //一定要return newArr  要不然会显示undefined
}
console.log(flatArr(arr)) +
  /**************************************************** */
  /**************************************************** */
  /**************************************************** */
  /**************************************************** */
  /**************************************************** */
  /**************************************************** */
  /**************************************************** */

  (function () {
    var a = 5;

    function a() {}
    console.log(a);

    function b() {}
    b = 6;
    console.log(b);
    var c = (d = b);
  })();
console.log(d);
console.log(c);
