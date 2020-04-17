 ## 4.1

1.栈类似一个井，先进后出
3.队列，先进先出
2.堆  空间小

面试题：VUE是什么？
ES6有什么新增方法？至少回答10个
回调函数    回调函数一定有e i a吗？

不一定,但是如果有e i a一定遵循这个循序


## 4.2
1.深赋值 视频15.20开始
2.作业  用trim

## 4.3
this的指向，如果在箭头函数里面就用不了，用传统方法却可以，如何解决？
因为箭头函数是不具备this的，虽然你也可以使用this这个关键字，不过这个this指的是他的最接近的上下文环境
如果一定要使用的话调用箭头函数时.say() ====》百度

谁调用就指向谁 -> 谁.函数() 就指向那个谁/ 函数() -> window.函数()

事件中 this 指向都是指向调用者

对象/数组中 this 指向都是指向对象/数组

箭头函数 没有 this 指向 它的指向继承自父作用域的指向

**this的指向和作用域没有直接关系！！！**

其他情况通通都是指向 window 的

call/apply/bind

可以改变 this 指向


## 4.4
this面试会问
函数套函数的this指向window
直接等价于函数（不带括号）就指向最近的一个
/**/

11.箭头函数.html的解释
20.普通函数和时间函数

事件流不太懂，看视频

怎么把整个页面变灰色？
4月4日 让所有图片都变灰白css代码
* {
 filter: grayscale(100%);
}



## 4.5

calc

for...of   for...in  forEach map  Array.from()

## 4-7
自定义属性
自由属性只能用setAttribute属性去获取
例如<div floor="1"></div>
这里自己定义的floor要自己去setA去获取

## 4-9
语法糖
实例的__proto__指向构造函数的prototype
（>的意思是指向）
p1的__proto__ > Preson的__proto__ > Proson的prototype
但是__proto__不是prototype
prototype是js独有的
构造函数可以继承构造函数吗？
动态prototype也可以获取静态属性吗？可以吧
object有prototype吗？有

继承遵循就近原则，
t1.eat()
Teacher.prototype 里面找eat()函数 。没有就去Preson.prototype里面找，一级一级往上找
Teacher.prototype > Preson.prototype > Object.prototype > null 

（*必须熟练这些类型判断）统用判断的类型判断
没补全1.typeof  一般判断基本数据类型
2.instanceof  表明x实例是否是由X工厂构造的  返回布尔类型
判断最近类型是什么
3.constructor （ES6的关键字，不是保留字） 返回布尔类型   
表示该实例是哪个（最终）工厂构造
用法： x.constructor === X
4.object.prototype.tostring.call(x)


typeof
1.typeof 返回值有：
Undefined	"undefined"
Null	"object" (见下文)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol (ECMAScript 2015 新增)	"symbol"
Function "function"
其他任何对象	"object"
宿主对象（由 JS 环境提供）	取决于具体实现

2.Object.prototype.toString.call(x)
1.不能判断null类型
2.不能判断Array
3.不能判断自定义类型

3的例子function Person(){}
f1 = new Preson
csl(f1)

所有保留字节都有自己固定的内存地址吗？例如null
不是，null比较特殊，有自己特定的内存地址

instanceof  方法object instanceof constructor
			object：某个实例对象   constructor：某个构造函数
instanceof缺点
1.不能判断基本数据类型
2.不能判断最终的类型


constructor缺点
1.不能判断基本数据类型
2.需要自定义类需要手动指定constructor

object.prototype.tostring.call(x)
x是一个函数
用法：object.prototype.tostring.call(arr) === "[object Array]"
缺点是效率慢，再也没有其他缺点


没有null工厂，没有undefined工厂
多态：不同的类的实例在同种方法或者属性下表现出不同的特征这个过程叫多态

Object.creat
Object.creat和new Object有什么区别

assign（一层深复制）和slice一样

寄生继承优化写法 ES5 新增了一个方法 Object.creat()  专门用来优化寄生继承

用这个方法的好处就是既继承了最近的构造函数，又不改变原来的数值。是么？

ES6的类：（ class Preson{} ）
1.js虽然有class关键字，但本质上JS的继承还是原型链  只不过给了一个语法糖

2.每次调用new Preson 总会调用该class的construc的方法
3.直接在类中书写的方法，不是成员方法，而是原型方法

第1~3个关键字是：class static extend 
第4个关键字 constructor
第5个关键字：super



## 4-12

addEventListener的click和onclick的区别

onclick

优点： 
\- 简洁 
\- 处理事件的this关键字指向当前元素 
缺点： 
\- 不能对事件捕获或事件冒泡进行控制，只能使用事件冒泡，无法切换成事件捕获 
\- 一次只能对一个元素绑定一个事件处理程序，当使用window.onload属性时，会覆盖采用相同方法所绑定的事件代码



addEventListener

可以支持事件处理的捕获阶段，也可以支持时间处理的冒泡阶段，两个阶段都是通过addEventListener最后一个参数设置为false(默认值，表示事件冒泡)或者true(表示事件捕获)来切换 
\- 事件处理 this与onclick一样 
\- 事件处理函数中，event对象总是作为第一个可用参数 
\- 你可以为某个元素绑定多个事件而不会覆盖之前绑定的处理程序 （按照顺序执行） 
缺点： 
\- IE8以下不支持


##4-12
1.变量永远有声明提升机制
2.函数永远有预解析机制
3.函数再js中 作用域永远先函数，再var再let
function => var => let

var如果是一个全局变量的话会触发一个映射机制，同时绑定在window

##4-14
for和if里面不能定义
解开多个数组用flat！！！面试加分
！*  flat（infinity无穷）
内存溢出，内存泄漏（了解）
07的数值扁平化只能展开一个数组
08可以展开多个数组
object.prototype.tostring.call万能判断数据类型
08的31行的...flatArr(arr[i])改为flatArr(…arr[i] )可以吗？试一下
熟悉valueOf和toString
遍历对象用for in或者for of不能直接for(let i){}这种形式
对象没有下标的概念，所以传统的for遍历不能用
for of可以遍历对象或数组
数组，对象，函数都可以深复制，那有什么不可以深复制？都可以深复制
4个排序的返回值是什么
！*  冒泡排序
！*  快速排序
！*  18add面试题，应付面试
爬阶梯89

toString和valueOf同时被调用吗？
先调用valueOf再调用toString或者调用其中一个
字符串优先调用toString，而数组优先调用valueOf

插入排序（扑克牌逻辑）有兴趣了解一下
1-100相加

## 4-16





indexOf()&&lastIndexOf()   区分大小写

方法返回调用它的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String) 对象中第一次出现的指定值的索引,

如果未找到该值，则返回 -1。



includes()

方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

区分大小写

```javascript
'Blue Whale'.includes('blue'); // returns false
```





Array.prototype.slice()

//截取
slice(-1)可以加负数

slice()  方法返回一个新的数组对象

原数组的浅拷贝,原始数组不会被改变。

语法  arr.slice([begin[, end]])

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


```



String.prototype.substring()

方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

语法str.substring(indexStart[, indexEnd])

```
indexStart
```

需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。

```
indexEnd
```

可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

```js
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```





String.prototype.split()

split()方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```



大A小a的ASCII对应的数字

A:65  a:97  空格32


正则表达式:

标志符
g: global 全局的
i: ignore 忽略大小写
m: mutiple 多行模式


test,search,exec,replace

!* math

！* indexof


^在[]外面就是行首   在[]里面就是非的意思

4-17  this的指向
函数套函数  用箭头 11：01    
整理tool

key in key of 
轮播图5考虑不做