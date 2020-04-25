### CSS01-复习

### 基本标签

+ div 大块
+ span 小区域
+ p 段落
+ a 链接 href
+ img 图片 src
+ ul>li 列表 (js以后表达一对多关系 -> 数组)
+ table>tr>td 表格 
+ form>input 表单
  + form
    + action	表单提交的地址,通常是同项目的后端
    + method 提交方式
      + GET(缺省值) 数据会显示在URL地址栏上
      + POST 数据不会显示在URL地址栏上
  + input
    + type 决定控件/表单控件的功能或形态
    + id 确定唯一性(以后js需要用到)
    + name 确定控件的名称 也就是数据提交到后台的数据名
    + value 确定控件的值 也就是数据提交到后台的数据值
    + 数据名和数据值 形成一个名值对 当点击sumbit按钮的时候会提交表单到action指定的地址
      + action?name1=value1&name2=value2&name3=value3

### 选择器

+ 标签选择器 a(标签的名字)
+ 类选择器 .a(标签的类名)
+ ID选择器 #a(标签的ID)
+ 属性选择器 [a] (标签的属性) 选中有a属性的标签
  + [a=b] (a:标签的属性名, b: 标签的属性值) 选中有a属性且值b的标签
+ 交集选择器 ab 缩小范围
+ 并集选择器 a,b 扩大范围
+ 后代选择器 a b 缩小范围 只要被包裹了即可
+ 子代选择器 a>b 缩小范围 必须选中是直接子标签

### 背景

background开头的

+ background-color 背景颜色
+ background-image 背景图片
  + url("这里填你的相对/绝对路径")
+ background-repeat:no-repeat 背景图片是否重复
+ background-position 背景图片定位 (图片坐标的位置由 = 大图的百分比 - 小图的百分比)
  + 像素
  + 方位词 top left right bottom center(50% 50%)
  + 百分比

### 盒模型

+ content -> width height
+ padding 属于盒模型
+ border width/style/color 1px solid black; 属于盒模型
+ margin 不属于盒模型

#### margin补全
1. 外边距折叠  
当父元素盒模型内容不完整的时候会出现该问题(BFC)  
解决方案:padding,border,overflow,浮动,定位  
2. 上下外边距共享  
上下的外边距会被**元素**所共享,左右的外边距不会被相邻元素共享

#### 字体
##### 字体相关的属性
```css
font-size: (字号最好是双数16 18 20)xxpx
font-family: microsoft yahei(微软雅黑.尽量用英语)
font-weight: (字体粗度)100的整百数表示,亦可用bold或bolder
font-style: (字体斜体)
text-align: *在区域内对齐方式
    left(居左对齐 缺省值)
    right(居右对齐)
    center (居中对齐)
    justify (两端对齐)
text-indent: 首行缩进
line-height: *行高,行高包含三个部分,分别是字号和上下两边的空白
text-decoration: *文字装饰
font: font-style font-weight font-size/line-height font-family
```
apple 中国

a/p/p/l/e 叫做字母 [alphabet]

apple 叫做单词 word

中 word

### 颜色

1. 颜色的英文单词
2. rgb

### css-reset

#### 标签样式初始化
众生平等(原来标签之间的重要程度是不一样)(标签本不好的特性,给他干掉)

+ 最简单的样式重置代码

  ```css
  * {
  	margin: 0;
  	padding: 0;
  }
  ```
  
+ 样式重置代码

  ```css
  html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
  header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
  table{border-collapse:collapse;border-spacing:0;}
  caption,th{text-align:left;font-weight:normal;}
  html,body,fieldset,img,iframe,abbr{border:0;}
  i,cite,em,var,address,dfn{font-style:normal;}
  [hidefocus],summary{outline:0;}
  li{list-style:none;}
  h1,h2,h3,h4,h5,h6,small{font-size:100%;}
  sup,sub{font-size:83%;}
  pre,code,kbd,samp{font-family:inherit;}
  q:before,q:after{content:none;}
  textarea{overflow:auto;resize:none;}
  label,summary{cursor:default;}
  a,button{cursor:pointer;}
  h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
  del,ins,u,s,a,a:hover{text-decoration:none;}
  body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,'Microsoft YaHei';color:#333;outline:0;}
  body{background:#fff;min-width: 1024px;}
  a,a:hover{color:#333;}
  ```

### 块元素和行内元素

**display**

### 伪类

#### a:link
链接未访问时的状态(常态)

#### a:hover
鼠标悬停在网页上的状态(瞬间态)

#### a:active
鼠标点击链接时的状态(瞬间态)

#### a:visited
链接访问过后的状态(常态)

#### 口诀
love&hate

### 选择器优先级
```
/* 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important  < js */
/*      1    ->   10   ->    100 ->               1000   */
```

### 浮动(float)

1. 如何写一个浮动效果?
2. 为什么要用浮动?
3. 浮动之后需要清浮动,如何清浮动?
4. 为什么要清浮动? 

### 客户端语言和服务端语言



### 思考题1

+ 伪类还有那些?做一些小练习来整理
+ 线性渐变,环形渐变
+ 分页效果
  - 三层
  - 二层
+ 导航栏

+ 表格效果
+ 怎么理解 页面设计的**版心**

### 思考题2

+ `<html style="font-size: 16px;">` 为什么要在html中写`font-size: 16px`

+ 伪类`:`,伪元素`::`

+ 浮动题目 6道

+ flex 能否用flex来实现这六道题?

+ grid 能否用grid来实现这六道题?

  

