### 块标签和行内标签

+ 块标签
  + 独占一行
    + 默认宽度百分百
    + 当指定宽度之后,其他的内容由外边距来占据
  + 支持完整的CSS
+ 行内标签
  + 不独占一行 有多少塞多少
  + 支持部分的CSS
    + width
    + height
    + margin-top/bottom
+ 行内块标签
  + 不独占一行
  + 支持完整CSS命令
  + 具有块元素特征的行内元素

### 三属性

+ display(显示方式)
  + block(块元素的形式展示)div,p,ul,li,h1-h6
  + inline(行内元素的形式展示)span,a,input
  + inline-block(行内块元素)img
+ float(浮动)
+ position(定位)

### CSS-RESET

样式重置

因为每个不同的标签都具备自己不同的标签特性,这些特性有好有坏,我们应该保留那些好的特点,去掉坏的特性

### 选择器的优先级

标签选择器(1)

类选择器(10)

ID选择器(100)

行内样式(1000)

!important(他会破坏原有选择器优先级结构)

交集/后代/子代/属性 他们的优先级算法都是 加法

并集选择器 不算加法 每个逗号之间单独计算优先级

### inline-block

#### 特性
具有块元素特性的行内元素  
img是典型的inline-block元素  
inline-block可以设置宽高且内容不独占一行

## 浮动
### 概念
每当我们需要一个左右结构的时候,我们往往都会想到浮动

### 浮动核心
```
float: left/right
缺省值是none
```

### 浮动原理
1. 浮动会使元素**脱离文档流**
2. 块将不块(浮动元素不再独占一行),行内将不行内(浮动元素将支持宽高了)

### 清浮动
下面例子假设父盒子类名叫box,子盒子叫div
1. 子元素浮动的话那么父元素也跟着浮动
```
.box{
    ...
    float: left
}
.div{
    float: left
}
```
2. 写一个空标签作为兄弟元素来控制子标签的浮动情况
```
.div{
    float: left
}
.clearfix{
    clear: both
}
<div class="box">
    <div class="div"></div>
    <div class="clearfix"></div>
</div>
会改变html的结构,降低html代码的可读性
```
3. 利用after伪类来解决
```
.box:after{
    content: "";
    display: block;
    clear: both
}
```
4. 可以利用奇淫巧技overflow:hidden/auto
```
.box{
    overflow:hidden
}
```
#### after伪类
在当前标签的最后处,生成一个子标签
#### overflow
内容溢出的处理方式
```
overflow: visiable(不对文本做任何出现)
        : hidden(对超出文本做隐藏处理)
        : scroll(为该标签生成一对滚动条)
        : auto(如果没超出,则无事发生,如果超出了,则为相应的方向生成滚动条)
```

### 定位
用来解决最特殊的一些方案,一般情况不要用  
回到顶部按钮    
滤镜弹窗  

#### 定位核心
```
position: static/absolute/relative/fixed
不是定位元素/绝对定位/相对定位/固定定位
```

#### 绝对定位
**脱离文档流** 相对文档而言决定元素的位置

#### 相对定位
不脱离文档流 相对该标签原来的位置而言

#### 固定定位
脱离文档流 相对视口而言

#### 定位偏移量
```
left/right/top/bottom
```

#### 层级
因为定位会有若干个层级,所以层级可以主动声明,若层级越高,则内容越不会被覆盖,该数字必须是正整数

### 工具文件 tool.css

```css
.f-cb:after,.f-cbli li:after{display:block;clear:both;content:"";}
.f-mb10{margin-bottom: 10px;}
.f-mb20{margin-bottom: 20px;}
.f-mb30{margin-bottom: 30px;}
.f-mb40{margin-bottom: 40px;}
.f-mb50{margin-bottom: 50px;}
.f-mb60{margin-bottom: 60px;}
.f-mb70{margin-bottom: 70px;}
.f-dn{display:none;}
.f-db{display:block;}
.f-fl{float:left;}
.f-fr{float:right;}
.f-pr{position:relative;}
.f-oh{overflow:hidden;}
.f-fs1{font-size:12px;}
.f-fs2{font-size:14px;}
.f-fwn{font-weight:normal;}
.f-fwb{font-weight:bold;}
.f-tal{text-align:left;}
.f-tac{text-align:center;}
.f-tar{text-align:right;}
.f-vam,.f-vama *{vertical-align:middle;}
.f-ti2{text-indent:2em;}
.f-lhn{line-height:normal;}
.f-tdu,.f-tdu:hover{text-decoration:underline;}
.f-tdn,.f-tdn:hover{text-decoration:none;}
.f-csp{cursor:pointer;}
.f-csd{cursor:default;}
.f-csh{cursor:help;}
.f-csm{cursor:move;}
```



### 预习

1. 图片精灵*
2. 等高布局*
3. 双飞燕/圣杯布局