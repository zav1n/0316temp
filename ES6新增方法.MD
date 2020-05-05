至少回答出10个ES6新增的东西

## for...of

//4-1：
1 .ES6新增常用方法

2. let 块级作用域,怎么使用?
3. const   用来定义常量,一旦定义了,后面就不能修改了
4. 箭头函数=> function()中this是指向调用这个函数的对象

    箭头函数中,this指向了window
    arguments,不能使用
    由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略

//4-2：
数组中ES6新增

##     1.forEach   

​	forEach() 被调用时，不会改变原数组
​	但是有个致命缺陷，不能提供返回值return，而且一直遍历
​	forEach的写法和map很相识，但是map有return，forEach没有return
​	与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用

    2.map不是ES6新增的   
    
    3.filter   
    4.sort
    5.新增两个数据类型，Set&Map

//4-3 :

## 	1.string,prototype.startsWith

​	    判断给定的字符串是否等于当前字符串开头
​	    语法：str.startsWith(searchString[, position])

## 	2.String.prototype.endsWith()

方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。



## String.prototype.includes()

includes()

方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。



在ES6中新增两个数据类型 Set&&Map

```js
  // Set 集合
  // Collection
  //集合?特性 1.确定性 2.互异性 3.无序性
  //声明一个Set类型的set实例
  //new Array
  //Array.from
  // let set = new Set([0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0])
  // let arr = Array.from(set);

  let arr = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0];
  let fn1 = (arr) => Array.from(new Set(arr));

  let fn2 = (arr) => [...new Set(arr)]

  console.log(fn1(arr))
  console.log(fn2(arr))
```
```
let set = new Set([0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0])
      set.forEach((e, i, a) => {
        console.log(e)
        console.log(i)
        console.log(a)
      })
      
      输出:
      0
0
Set { 0, 1, 100, 20, 90, 10 }
1
1
Set { 0, 1, 100, 20, 90, 10 }
100
100
Set { 0, 1, 100, 20, 90, 10 }
20
20
Set { 0, 1, 100, 20, 90, 10 }
90
90
Set { 0, 1, 100, 20, 90, 10 }
10
10
Set { 0, 1, 100, 20, 90, 10 }
      
```

## document.querySelect()