function eat() {
    console.log(this.name + "在吃")
}

let obj1 = {
    name: "张三"
}

let obj2 = {
    name: "李四"
}

eat.call(obj1)
eat.call(obj2)
//----------------------------------------------

let animals = [
    { species: 'Lion', name: 'King' },
    { species: '狗', name: '柯基' }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('下标：' + i);
            console.log(this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}
//for遍历animals  i获取下标   匿名函数 (function(i){}).call(animals[i],i)

//-------------------------------------------------------------
function amimals() {
    let reply = [this.animal, '睡', this.sleepDuration].join("");
    console.log(reply);
}

var obj = {
    animal: '猫',
    sleepDuration: '12到16个小时'
};

amimals.call(obj);  //猫睡12到16个小时

//-------------------------------------------------------------
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//-------------------------------------------------------------

let obj = {
    str: 42,
    getFn: function() {
        return this.str;
    }
}
let unboundGetFn = obj.getFn;
console.log(unboundGetFn()); // 函数在全局范围内被调用
// 输出: undefined
let boundGetX = obj.getFn.bind(obj);
console.log(boundGetX());
// 输出: 42

//-------------------------------------------------------------
let str = "北京欢迎您";
      console.log(str)
      console.log(str[2])
      for (let i = 0; i < str.length; i++) {
        console.log(str[i])
      }