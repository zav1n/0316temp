# HTMLday02复习整理

### 班规

1. 中午必须睡觉
2. 老师讲课,同学必须响应

## HTML(八标签)

1. div		块标签 形容大型区域
2. span     小型区域
3. p     段落
4. a     链接
   1.  **href** 跳转的链接的地址
   2.  target 跳转方式 _self 缺省值(缺掉省去的默认值)在本页面打开 _blank 在空白页打开 
5. img
   1. src 图片路径 绝对路径
6. ul>li
7. table>tr>td
8. form>input

h1-h6 标题标签

strong/em/ 强调标签(加粗/斜体)
<del>b/i/u/font</del> 因为这些标签是纯表现标签

## 标签之间的关系

1. 嵌套关系(父子标签) 
2. 并列关系(兄弟标签)

### 列表

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### 表格

```html
<table>
    <tr>
    	<td></td>
        <td></td>
        <td></td>
    </tr>
    <tr></tr>
    <tr></tr>
</table>
```

### 表单

```html
<form action="login.php" method="GET/POST">
    <!--
		type: text(文本框),password(密码框),radio(单选框),checkbox(复选框),button(按钮),submit(提交),reset(重置)
		name: 数据的名字
		value: 数据的值
		id: 唯一值
		* 你的网站地址/action地址?属性名1=属性值1&属性名2=属性值2

		checked
		selected
		readonly
		disabled
		placeholder
	-->
    <input type="text" name="username" id="username"/>
    <input type="password" name="pwd" id="pwd"/>
    <input type="submit"/>
</form>
```

### head

+ 浏览器  `<meta charset="UTF-8">`
+ 搜索引擎 `<meta name="keywords" content="豆瓣,豆瓣读书"`

1. title 标签页
2. meta 用来描述网页某些内容的东西
3. link 
   1. 引用css文件
   2. 标签头图标
4. style
   1. 内部样式
5. script
   1. js内部代码

# CSS简介

## 为什么我们需要用css

## css作用

任何元素 任何样式

# CSS的引入方式
+ 外部样式表
  + 维护性
  + 可复用
```html
<link rel="stylesheet" src="xxx.css" />
```
+ 内部样式表
```html
<head>
    <style>
        
    </style>
</head>
```
+ 行内样式表
```html
<div style="color: red;"></div>
```

login.vue

```html
<template>
</template>

<style>
</style>

<script>
</script>
```



# CSS选择器

## 简单选择器
+ 标签选择器
  + a (标签的名字)
```css
div {
    
}
span {

}
```
+ 类选择器
  + .a(类名)
```css
.div1 {

}
```
+ id选择器
  + #a(ID的名字)
```css
#box {

}
```
+ 属性选择器
  + `[a](属性名)`
```css
[type=button]{

}
```
## 复合选择器
+ 交集选择器
  + ab(a代表选择器/b也代表选择器)
```css
div.div1 {

}
div#box {

}
```
+ 并集选择器
  + a,b
```css
div,p,span {

}
```
+ 后代/子代选择器
  + a[空格]b
  + a > b
```css
div span {

}
ul > li {

}
table > tr > td {

}
```
# 盒模型
+ content
    - width
    - height
+ padding
    - 上 右 下 左
    - 上下 左右
    - 上右下左
+ border
    - border-width 边框的宽度
    - border-style 边框的样式
    - border-color 边框的颜色
```css
div {
    border: 1px solid black;
}
```
+ margin
    - 上 右 下 左
    - 上下 左右
    - 上右下左

> **content**和**padding**和**border**共同组成盒模型真正的宽度和高度

# 颜色
+ 英文单词
+ rgb
+ rgba
+ hsl
+ hsla
+ 十六进制表示法
+ 十六进制表示简写

# 背景
+ background-color 背景颜色
+ background-image 背景图片
+ background-repeat 背景图片是否重复
+ background-posistion 背景图片定位

# 字体
+ font-size 字号
+ font-weight 粗细
+ font-family 字体
+ font-style 斜体
+ **text-align** 文本对齐方式
+ **line-height** 行高

### 思考题

+ 三种样式引入方式 哪种方式用的最多/哪种方式用的最少?为什么?
+ 为什么要在head中使用书写css样式?
+ 什么是BFC 怎么触发或解决BFC