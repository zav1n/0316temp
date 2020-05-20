 # **4.1**

1.栈类似一个井，先进后出
3.队列，先进先出
2.堆  空间小

面试题：VUE是什么？
ES6有什么新增方法？至少回答10个
回调函数    回调函数一定有e i a吗？

不一定,但是如果有e i a一定遵循这个循序


# 4.2
1.深赋值 视频15.20开始
2.作业  用trim

# 4.3
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


# 4.4
this面试会问
函数套函数的this指向window
直接等价于函数（不带括号）就指向最近的一个


11.箭头函数.html的解释
20.普通函数和时间函数

事件流不太懂，看视频

怎么把整个页面变灰色？
4月4日 让所有图片都变灰白css代码
* {
 filter: grayscale(100%);
}



# 4.5

calc

for...of   for...in  forEach map  Array.from()

# 4-7
自定义属性
自由属性只能用setAttribute属性去获取
例如<div floor="1"></div>
这里自己定义的floor要自己去setA去获取

# 4-9
语法糖
实例的__proto__指向构造函数的prototype
（>的意思是指向）
p1的__proto__ > Preson的__proto__ > Proson的prototype
但是__proto__不是prototype
prototype（原型链）是js独有的
构造函数可以继承构造函数吗？
动态prototype也可以获取静态属性吗？可以吧
object有prototype吗？有

继承遵循就近原则，
t1.eat()
Teacher.prototype 里面找eat()函数 。没有就去Preson.prototype里面找，一级一级往上找
Teacher.prototype > Preson.prototype > Object.prototype > null 

（！必须熟练这些类型判断）统用判断的类型判断
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



# 4-12

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


#4-12
1.变量永远有声明提升机制
2.函数永远有预解析机制
3.函数再js中 作用域永远先函数，再var再let
function => var => let

var如果是一个全局变量的话会触发一个映射机制，同时绑定在window

#4-14
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

# 4-16





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

!* match

！* indexof


^在[]外面就是行首   在[]里面就是非的意思

4-17  this的指向
函数套函数  用箭头 11：01    
整理tool


推荐在循环对象属性的时候，使用for...in  循环的是key
在遍历数组的时候的时候使用for...of    循环的是value

for...in循环出的是key，for...of循环出的是value

注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足

for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
https://www.jianshu.com/p/4ccca4ef2927

var、let、const
暂时性死区 了解一下
其实let本质上和var还是很相似的 虽然let没有变量声明提升机制 但是他有一个类似的机制,作用域的变量检查机制 在每个作用域初始化的时候 虽然let是没有声明提升,但是会检查每个let定义的变量 有没有出现提前使用的情况
	function show(a) {
        console.log(a) //100
        let a = 200;
        console.log(a) //200
    }

3-31的日报
## var和let的区别

1. var可以重复定义,let不可以重复定义
2. var有变量声明提升,let没有变量声明提升.(var在同页面还没声明时,可以使用,let在同页面还没声明时候,不可以使用)
3. var不存在暂时性死区TDZ,let存在暂时性死区TDZ(temporal dead zone)
4. var没有块级作用域的概念,但是let有块级作用域

## 同步

同步或者说同步代码,他会马上执行```for```是最典型的同步代码

## 异步

异步代码会延迟执行```事件函数```都是典型的异步代码
      show(100)



# 4-18

深复制和浅复制的区别

深复制内存地址不一样

浅复制就是等号(=),内存地址是一样的

+ **栈**

1. 是所有作用域的执行环境

2. 存储所有数据类型的 key

3. 存储所有基本数据类型的 value

+ **堆**

1. 存储所有引用数据类型的 value

## JSON

XML 标记语言.

JSON(JavaScript Object Notation, JS 对象简谱) 是一种[轻量级]的[数据交换]格式

前端用JS 后端C++ 程序语言中的普通话就是 JSON

前端也认识JSON 后端也认识JSON

JSON -> js对象或数组



有没有字符串和JSON对象交换的方法?

JSON.parse(string) return object //将字符串转换成json

 JSON.stringify(object) return string //将json转换成字符串




      let str = "[1, 2, 3]" //字符串 跨域
      let json = JSON.parse(str); //[1, 2, 3]
      console.log(json)
    
      let json2 = {
        "name": "张三",
        "age": 20
      }
      let str2 = JSON.stringify(json2)
      console.log(str2)
    
      let str3 = '{"name": "张三","age": 20}';
      let obj1 = JSON.parse(str3) //{...}
      let obj2 = JSON.parse(str3) //{...}
      console.log(obj1 === obj2) //false





```js
    //深复制最简单的方案 JSON.parse(JSON.stringify(obj))
        //1. 不能复制函数
        //2. 会破坏原有的原型链
    let obj = {
        name: "张三",
        hobby: ["唱歌", "跳舞", "游泳"],
        eat: function() {
            return this.name + "在吃"
        }
    }

    //$.extend
    let obj2 = JSON.parse(JSON.stringify(obj))

    obj2.name = "李四"
    obj2.hobby[0] = "喝酒"
    console.log(obj)
    console.log(obj2)
```
## 作用域

//JavaScript有几个作用域

   //ES5有且仅有两个作用域 全局作用域/函数(局部)作用域

   //ES6中新增了一个作用域 块作用域 let/const(变相实现块级作用域)

   //全局作用域(所有的内容都属于全局作用域) 没有被大括号括起来的东西 就是全局作用域

   //函数作用域 函数的大括号内部包裹的内容 就是函数作用域

   //块级作用域 但凡是大括号 就是一个块级作用域 for/if 由于加入了这样的机制 会导致 for循环会产生n个长得一模一样的块作用域 只不过就i的是当时的值 显得let i 拥有记忆功能

```js
  let i = 1;
  function show() {
    console.log(i++)
  }

  show() //1
  show() //2
  show() //3

  console.log(i) //4
```


      function show() {
            let i = 1;
            console.log(i++)
          }
      show() //1
      show() //1
      show() //1
      // console.log(i) //
## 闭包



```js
  //因为我要求你的变量 尽量是局部变量 因为全局变量会污染全局作用域 但是又要求i有记忆功能持续的输出1,2,3
  //必须是局部变量,记忆该变量

  //我既要变量是局部变量[不污染作用域],又要保存着内部的变量[保存变量]
  //闭包概念: 形成一个[不被销毁]的[私有作用域]
  //闭包作用: 保存变量[不被销毁] 保护变量[私有作用域]
  //闭包形式: 函数嵌套函数,且返回一个堆内存

  //内部闭包
  function outer() {
    let a = 1;

    function inner() {
      console.log(a)
      a = a + 1;
    }
    inner()
    inner()
    inner()
  }
  outer() //1,2,3
  outer() //1,2,3
```
+ 外部闭包

        function outer() {
            //定义一个局部变量
            let a = 1;
        //定义一个内部函数
        function inner() {
          console.log(a)
          a = a + 1
        }
        
        //返回的是一个内部的函数体
        return inner
      }
    
      //1. 开辟一个outer作用域
      //2. 将inner函数体 返回给 add
      //局部变量 在函数执行完毕之后(触碰到大括号 或者 触碰到return)的时候 该作用域都会销毁
      let add = outer(); //inner
    
      add() //inner()
      add()
      add()
+ 外部闭包2

  

      //全局变量 永远不会销毁 局部变量 在return或者大括号之后 总会被销毁
            //f_outer堆内存 f_add 永远不会被销毁
      //4. 由于outter函数开启的这一次作用域的局部函数 inner没有被销毁 为了保证inner函数的存在,所inner的宿主 也就是这一次的outer作用域 也永远存在
        function outer() {
          //5. 由于outer作用域永远存在 所以a作为一个局部变量 也不会被销毁 得到了永生(也就是全局变量的效果)
          let a = 1;
      
          function inner() {
            console.log(a)
            a = a + 1
          }
          //3. 由于inner函数(0x222)被全局变量所引用 所以装着inner函数的宿主outer函数的那次作用域也永远存在不会被销毁
          return inner
        }
      
        //1.因为add是全局变量 所以add永远存在
        //2. 因为add永远存在 所以add接收的返回值也就是inner 也永远存在
        let add = outer(); //inner
      
        //6.所以每次调用add函数 就相当于是调用inner函数 且使用的a 永永远远是同一个a
        add() //inner() 1
        add() //2
        add() //3
      
        // add -> inner -> outer作用域 -> a永远不会被重新初始化

## 立即执行函数

```
//函数的声明
// function show() {}
//函数的调用
// show()
//立即执行函数的本质 函数声明+函数调用
// function(){}()
// (function () {}());
// (function () {})();
// ~ function () {}();
// ! function () {}();
// +function(){}();
// -function(){}();
// 这些全部都是立即执行函数
```



# 4-20

2020的明星题

函数防抖第三个  闭包会用就可以了（高级用法）

函数防抖和节流的区别：节流就像CD，除了CD的就是防抖

节流：一个事件在一段时间内（300-500ms）内被触发，但绑定的内容在期间会执行一次

函数防抖和节流的应用场景有哪些

防抖：应用文本框

节流：按键/按钮

函数防抖和节流的核心是闭包和定时器

try...catch..finally ，那一段不执行？catch可以不用执行，可以手写报错信息，

有try必有catch

finally可以去掉吗？可以吧

H5新特性

# 4-21

面试  5个标签 header nav  article secsion   aside  footer  datalist 他们都是块标签

html5网页的实现



# 4-22

HTML5新增了什么

querySelector

querySelectorAll

async异步



# 4-27

1.完成老师的拖拽

2.ES6标准入门第3版

https://es6.ruanyifeng.com

3.流式布局.md

bootstrap中的@media媒体大小

zepto是jq的移动端

balenaEtcher

阮一峰  https://es6.ruanyifeng.com/

张鑫旭

骰子flex   http://www.ruanyifeng.com/blog/2015/07/flex-examples.html



# 4-29

今天没讲课

不过发了面试题



H5手机横屏，与安卓的不一样

监听屏幕横竖屏切换事件
window.orientationchange

screen.orientation.angle
是一个属性 属性值是0 90 180 270

0 代表手机默认竖屏

0 180 代表的就是竖屏

所以 如何做一个横竖屏都能正常展示的内容?

面试题的重点：add，冒泡排序，深复制，闭包，递归，数组扁平化



# 4-30

面试题：5种居中方案

1.margin

2.grid

3.flex

4.table

5.vh，vm

# 5-5

面试题，用过哪些插件？less

额外学一下ts

插件

Lodash库

underscore库

echart

移动端zpeto	 



模块化

```
jq使用到，尽量用js去实现
链式操作方式，prototype
11：00
隐式迭代
```

```
${function(){
}}等价于$(document).ready(function(){
})
DOM渲染完毕即可执行内部代码，不用等到所有外部资源加载完成,JQ已经封装了
原理是利用JS的DOMContentLoaded
不同于原生js的load事件是页面文档，外部JS文件等等要加载完毕才执行内部代码
```

querySelect和getElementById的区别

querySelect效率低

mouseover和mouseout配套

JQ的优点

1.隐式迭代，不用for循环

2.链式操作方式

# 5-6

理解JQ原理

gt,lt,eq

search，exec，text，match函数，用于验证是否跟正则表达式符合

如果没有报错能不能使用抛出异常

# 5-8

原生JS的cloneNode不能继承事件

JQ的cloneNode可以继承事件

JQ的on不是事件委托



JQ面试题：show ajax 。。。。待补

JQ只支持事件冒泡不支持事件捕获

# 5-9

JQ小项目   必须写

面试题

轮播图插件  可以尝试一下

## 5-11

ajax

+ ajax为什么默认是异步的
  - 防止页面假死状态
+ ajax异步有什么问题

常见的状态码

请求方式,发送的参数,监听进程,状态码,响应结果



ajax用来实现服务器交互的（后端和前端的数据传递）

1:ajax的基本概念.

+ xhr对象的属性
  - xhr.onreadystatechange事件
  - -> readystate 表示ajax的进程步骤 “0-4”,
  - xhr.status -> 响应代码 404 200等等 
    - 1xx,继续请求
    - 2xx,请求成功
    - 3xx,重定向
    - 4xx,服务端错误
    - 5xx,服务端错误
  - xhr.responseText
+ 请求的基本过程
  - 定义：let xhr = new HMLHttpRequest();
  - xhr.open("GET","URL")
  - xhr.open()
  - 监听服务器响应
  - xhr.onreadystatechange = function(){}

2.参数

GET，POST等等

3.服务器响应

+ 通过xhr.responseText获取



数组遍历有几种方法，是方法，for不算

forEach()

map()

for...in(ES5)

for..of(ES6)



ajax的封装工具的使用.

jq的ajax,axios



跨域

什么是同源(origin)？

源包括3个部分

+ 协议    http   https
+ 域名('IP')      127.0.0.1
+ 端口   80，8080



跨域怎么解决

1.代理

2.cors

在后端文件配置可以访问该后端文件的源的列表，配置一个允许访问的源

*! header("Access-Control-Allow-Origin:*")  ->允许所有的源访问本后端文件

3.jsonp（过时）

通过script的src可以跨域访问文件的原理

前端发送一个函数名字给后端，后端调用这个函数，并且传入跨域数据  



什么是同源(origin)？

源包括3个部分

+ 协议    http   https
+ 域名('IP')      127.0.0.1
+ 端口   80，8080



# 5-14

复习5-13

Q1：axios.all里面的形参，谁先执行谁先赋值给形参吗？



axios的拦截

+ 1.请求拦截 -> 请求发起之前做一些事情
+ 2.响应拦截 -> 拿到数据之前做一些事情

请求拦截(transformRequest)和响应拦截(transformResponse)是异步的吗？都是异步的

全局拦截，要是拦截了其中一个请求，下面的请求还能继续执行吗？



什么是token -> 就是一个字符串

token有什么用 -> 用于用户验证

token包含了用户的个人数据，权限，登录状态等等信息

token发送给后端，后端会根据token得到该token相对应的用户信息（数据，权限，登录状态等等。。。。）

//http协议是一种无状态的协议

无状态 -> 无记忆

前后端交互是无记忆的，因此，相当于每次都是第一次交互

前端需要怎么处理token

每次请求数据都必须发送token给后端

怎么发送token？通过本地储存或cookie存储token

在请求头发送token的键名一般叫：“Authorization”

若token出错，后端会返回401的状态码

若返回403，没有权限访问



promise -> 解决异步编程的方案

异步编程的第一个问题：

+ 因为异步是落后于同步，因此导致某些代码可读性差

异步编程的第二个问题

+ 传统的异步编程都是通过回调函数来监听异步完成，会带来“回调地狱的问题”

异步编程的第三个问题：

+ 传统的异步编程监听异步完成，有时候是回调函数；有时候是事件；事件名不一样，不统一

axios这个插件封装了promise

某种插件封装了promise，一定能用then和catch发送回调

then默认返回当前promise实例

也可以通过在then中显示的return来返回指定的对象

同一个promise实例可以连续调用多个then，前提是没有return，只有第一个then可以访问resolve的实参

promise的回调是同步触发

then的回调是异步触发



重看09token请求数据用promise封装



promise是ES6的语法，是异步编程的解决方案

解决了回调地狱的问题

解决了信任的问题



面试题：事件循环

异步落后于同步

异步还分为类别，一种叫宏任务，一种叫微任务，为任务要先于宏任务

promise是微任务，其他都是宏任务

事件循环

+ 1.先执行完所有的同步
+ 2.执行微任务
+ 3.执行宏任务

如果宏任务长生了微任务，则转而执行微任务



闭包条件：

+ 1 .父函数有子函数（不一定要有return）
+ 2.子函数使用了父函数的局部变量
+ 3.子函数还可以通过别的方式调用（重要）

闭包面试题





# 5-15

async和await 是目前最好的异步编程解决方案.可以把异步操作写起来当同步操作书写

async 写在function前面

await必须在async函数内

await后面应该接一个Promise对象，则await后面的代码会等待Promise结束才触发

await后面接一个Promise对象，这样做await后面的代码会自动等待这个Promise结束才触发

await只能让promise等待，不能让其他操作等待

所有的异步操作都应该用promise书写，因此await只因为Promise是异步（为了标准，为了统一）

await后面接promise才有意义，但实际上，await可以接任意表达式。await表达式

await表达式返回表达式的值

如果await后面的表达式是一个promise对象，则await的返回值是promise内部resolve的实参

await后面的代码会变成异步而且是个微任务



前端安全，eval，html不安全

如何检测一个字符串内有没有可能存在的危险的脚本



$ git merge 合并

$ git add   缓存,暂存

$ git commit		提交到本地仓库

$ git pull 		提交之前更新一下代码,防止覆盖冲突

$ git push  	真正上传



把仓库同步到文件夹

$ git clone [这里填你的地址]



结构赋值 ->按模式匹配

1.数组结构 -> 按照位置起来进行赋值

2.对象解构赋值 -> 按照键名匹配赋值

左边是什么，右边就是什么 



把对象转化为数组的三个方法

Object.key();//数组内的元素是对象的键名

Object.values();//数组内的元素是对象的键值

Object.entries();//二维数组，每个二维数组内的元素是键名和键值



个人总结：

await解决异步同步，让代码从上往下看有顺序

promise解决回调地狱



# 5-16

数组的遍历

# 5-17

面试题：wx:if与hidden之间的区别

因为 `wx:if` 之中的模板也可能包含数据绑定，所以当 `wx:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。

同时 `wx:if` 也是**惰性的**，如果在初始渲染条件为 `false`，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。

相比之下，`hidden` 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。

一般来说，`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 `hidden` 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。

```
wx:for-index="index2" wx:key="index2"
```

index和key有什么区别

index是遍历循环的下标，key就是指定的键，如果wx：key没写会报黄警

### 微信小程序目录结构

pages 目录 放置页面文件的地方

App.js 项目的主入口文件

App.json 项目的全局配置文件

Project.config.json 项目的配置文件

sitemap.json 相当于 robots.txt文件

小程序没有DOM操作，只能数据绑定，用插值表达式去使用

在小程序中改变data的值用过this.setData方法

### 微信开发者社区

https://developers.weixin.qq.com/community/develop/question

小程序没有DOM操作，只能数据绑定，用插值表达式去使用

在小程序中改变data的值用过this.setData方法



复习：

整理学习资料

整理工作区，上传代码git

（git的学习网站：https://learngitbranching.js.org/?locale=zh_CN）