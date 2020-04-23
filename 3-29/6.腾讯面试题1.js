var str = "abc123"
var num = parseInt(str)
if (num == NaN) {
  console.log(NaN)             //虽然num是NaN,但是会报错,报NaN,所以执行不了 ===也没用,要用Nmunber.in
} else if (num == 123) {
  console.log(123)           //字符串不等于数字,所以不执行
} else if (typeof num == "number") {
  console.log("number")     //考点:typeof   操作符返回一个字符串，表示未经计算的操作数的类型。
} else {
  console.log("str")
}
//3-29做错了
/**
 * -------------------------------------------------------------------------------------
 * 最新的 ECMAScript 标准定义了 8 种数据类型:
 * boolean null Undefined Number  String  BigInt  Symbol
 * 6种基本数据类型:
 * false 0 null NaN "" undefiend 
 * 
 */

 ///*******************示例,来自MDN
 // 数值   只要是type of后面接数字就返回number,简单来讲 数字对数字就正确
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';


// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串   注意,和上面的要区分
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全


// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()


// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined'; //不懂,暂时跳过  看到undefiend就可以断定时等于undefined了
typeof undeclaredVariable === 'undefined'; //不懂,暂时跳过  看到undefiend就可以断定时等于undefined了


// 对象
typeof {a: 1} === 'object'; // {}大括号 属于对象

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';// 注意!Date是对象
typeof /regex/ === 'object'; // 历史结果请参阅正则表达式部分  //看不懂,先跳过


// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
//只要是new了就是相当于生成一个对象,我是这么理解的
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// 函数  使用class  function就是函数
typeof function() {} === 'function';
typeof class C {} === 'function'
typeof Math.sin === 'function'; //正弦啊~~正弦在数学中本来就叫做函数,所以就是函数啊哈哈哈