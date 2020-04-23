1. 循环题 输出结果

```JavaScript
for (var i = 0; i < 10; i++) {
    console.log(i);
    break;
}
console.log(i);
```

```javascript
for (var i = 0; i < 10; i++) {
  continue
  console.log(i)
}
console.log(i)
```

```javascript
for (var i = 1; i <= 10; i += 2) {
  if (i <= 5) {
    i++
    continue
  } else {
    i -= 2
    break
  }
  i--
  console.log(i)
}
console.log(i)
```

```javascript
for (var i = 3; i < 12; i++) {
  if (i < 3) {
    i++
    break
  }
  if (i > 9) {
    i += 2
    continue
  }
  i--
}
console.log(i)
```

2. 三目运算符 将以下代码改写成三元表达式且输出结果

```
let a = 12;
if (a >= 0 && a <= 20) {
    if (a % 2 === 0) {
        a += 2;
    }
} else {
    a -= 2;
}
console.log(a);
```

3. 类型转换 输出控制台结果

```javascript
let a = typeof typeof typeof [12, 23]
console.log(a)
```

4. switch...case 输出控制台结果

```javascript
let a = "10"
a == 10 ? a++ : a--
console.log(a)

let b = "10"
switch (b) {
  case 10:
    b++
    break
  default:
    b--
}
console.log(b)
```

5. 写出下面结果输出的答案 （阿里面试题）

```javascript
let a = {
  n: 1
}
let b = a
a.x = a = {
  n: 2
}
console.log(a.x)
console.log(b)
```

6. 写出下列代码的输出结果 （腾讯面试题）

```javascript
var str = "abc123"
var num = parseInt(str)
if (num == NaN) {
  console.log(NaN)
} else if (num == 123) {
  console.log(123)
} else if (typeof num == "number") {
  console.log("number")
} else {
  console.log("str")
}
```

7. 写出下列代码的输出结果 （腾讯面试题）

```javascript
var a = 0
var b = a
b++
console.log(a)
var o = {}
o.a = 0
var b = o
b.a = 10
console.log(o.a)
```

8. 请说出以下输出结果

```javascript
console.log(parseInt(1.3))
console.log(1)
console.log(isNaN(1))
console.log(parseInt("1"))
```

9. 下面程序输出的结果

```javascript
if (isNaN(NaN) == "") {
  console.log("老胡")
} else {
  console.log("前端")
}
```

10. 下面程序输出的结果

```javascript
let x = [1, 2, 3]
let y = x
let z = [4, 5, 6]
y[0] = 10
y = z
z[1] = 20
x[2] = z = 30
console.log(x, y, z)
```

11. 以下代码的功能是要实现为5个input按钮循环绑定click点击事件，绑定完成后点击1、2、3、4、5五个按钮分别会alert输出0、1、2、3、4五个字符。（腾讯）

    请问如下代码是否能实现？
    如果不能实现那么现在的效果是什么样的？
    应该做怎样的修改才能达到我们想要的效果，并说明原理？

    ```html
    <div id="btnBox">
        <input type="button" value="button_1" />
        <input type="button" value="button_2" />
        <input type="button" value="button_3" />
        <input type="button" value="button_4" />
        <input type="button" value="button_5" />
    </div>
    <script type="text/javascript">
        var btnBox=document.getElementById('btnBox'),
        inputs=btnBox.getElementsByTagName('input');
        var l=inputs.length;
        for(var i=0;i<l;i++){
            inputs[i].onclick=function(){
                alert(i);
            }
        }
    </script>
    ```

12. 通过修改xxx.style.yyy的形式可以修改样式 **难题,胡老师の套路**

    ```css
    box.style.color = 'red';
    ```

    那么下面的写法是否可以修改元素的样式，如果不可以是为什么？

    ```js
    //第一种方案
    let s1 = box.style;
    s1.color = 'red';
    //第二种方案
    let s2 = box.style.color;
    s2 = 'red';
    //=>哪种方式可以实现，不能实现是因为啥？
    ```