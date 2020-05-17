# vue知识

## 04

视图更新会发生什么?

视图更新,视图内所有的表达式,指令,都会重新运行求值

什么情况下灭有响应式?

+ 数组直接修改元素没有响应式

  + pop,push,shift,unshift,splice,sort

+ 一开始不存在的属性,没有响应

  + 响应方法:Vue.set(对象,新的属性,新的值)

  + this.$set(对象,新的属性,新的值)

  + Object.defineProperty(对象,属性,{

    ​	get(){}

    ​	set(){}

    })



响应式条件

+ 数据必须通过插值表达式或指令绑定到视图上
+ 数据必须有监听(setter)



## 05

组件书写

+ 组件注册:
  + 通过配置components选项来注册
+ 组件挂载
  + 组件需要通过组件名形成的自定义标签来挂载
  + 组件的这个自定义标签渲染时不会存在于页面上
  + 挂载时,可以是单标签,也可以是双标签
+ 组件命名
  + 组件的名字不能和html默认拥有的标签名同名
  + 如果名字时驼峰式的,在使用时(html里面),必须要带" - "
+ 组件模板:
  + 通过template选项设置模板
  + 可以使用字符串模板``来书写,一般的引号不能换行
  + 组件的模板需要一个唯一得到根元素包裹
+ 组件的选项和new Vue的选项相比较
  + 1.组件选项没有el属性
  + 2.组件选项的data必须写成函数,return一个数据对象
+ 组件中的数据  父传子
  + props数据是在组件挂载时确定的数据(父传子)
  + props数据接收父组件数据的限制,不能直接在子组件中修改
  + props数据也可以通过this访问
  + props数据也可以通过watch监听
  + 组件有2中数据
    + data数据时一种一般数据,只能在本组件中定义和修改
    + props数据时共享数据,在本组件中定义,bb熊在组件修改
    + computed数据时计算数据,在本组件中定义,不能直接修改,只能修改它依赖的数据
+ v-for不能用在组件的根元素上,要用在父,父传给子,子再props定义父传给子的东西

















































# 面试题1

下面代码结果打印结果为:

```
new Vue({ data: { a: 1, b: 2 }, created: function () { console.log(this.a) }, mounted(){ console.log(this.b) } })
```

A：1，2 B: 1,1 C: 2,2 D:2,1

 

2、在beforeRouteEnter钩子函数中进行console.log(this),其结果为:

A.VueCompent实例 B.undefined C、报错 D. 以上都不对

 

3、vue的生命周期，执行顺序争取的是：

A. beforeCreate -> init->create->mount->destory

B. mount-> init->beforeCreate->create->destory

C.beforeCreate->create->init->mount->destory

D.init->beforeCreate->create->mount->destory

 

4、用于监听 DOM 事件的指令是:

A. v-on B.v-model C.v-bind D.v-html

 

5、以下对vue的双向绑定说法不正确的是:

A.采用数据劫持结合发布者-订阅者模式的方式

B.通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调

C.MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化

D.vue是通过基于脏检查机制实现双向绑定

 

6、vue-router有哪几种导航钩子，以下哪种选项不是vue-router的导航钩子?

A.全局导航钩子

B.组件内的钩子

C.页面钩子

D.单独路由独享组件

 

7、以下选项中不可以进行路由跳转的是:

A. push()

B.replace()

C. route-link

D.jump()

 

8、以下获取动态路由{ path: '/user/:id' }中id的值正确的是:

A.this.$route.params.id

B.this.route.params.id

C.this.$router.params.id

D.this.router.params.id

 

9.以下选项中不属于vuex中的属性？

A. state

B.getters

C.actions

D.init

 

\10. 以下代码打印结果为:

```
<div id="app"> {{ message.split('').reverse().join('') }} </div> <script> new Vue({ el: '#app', data: { message: 'hello' } }) </script>



 
```

A. hello

B.hel

C.olleh

D.llo

 

11.导航钩子函数有哪些？它们有哪些参数？

导航钩子有：a/全局钩子和组件内独享的钩子。b/beforeRouteEnter、afterEnter、beforeRouterUpdate、beforeRouteLeave

参数：有to（去的那个路由）、from（离开的路由）、next（一定要用这个函数才能去到下一个路由，如果不用就拦截）

 

12.v-show和v-if指令的共同点和不同点

- v-show指令是通过修改元素的displayCSS属性让其显示或者隐藏
- v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果

13.Vue中引入组件的步骤?

1. 采用ES6的import ... from ...语法或CommonJSd的require()方法引入插件
2. 使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })

14.计算属性和watch的区别

computed计算属性是用来声明式的描述一个值依赖了其它的值。当你在模板里把数据绑定到一个计算属性上时，Vue 会在其依赖的任何值导致该计算属性改变时更新 DOM。这个功能非常强大，它可以让你的代码更加声明式、数据驱动并且易于维护。 

watch监听的是你定义的变量,当你定义的变量的值发生变化时，调用对应的方法。

就好在div写一个表达式name，data里写入num和lastname,firstname,在watch里当num的值发生变化时，就会调用num的方法，方法里面的形参对应的是num的新值和旧值，

而计算属性computed,计算的是Name依赖的值,它不能计算在data中已经定义过的变量。

 

15.Vue 父子组件间的参数传递是如何做到的？

 父组件向子组件传值：

  1）子组件在props中创建一个属性，用来接收父组件传过来的值；

  2）在父组件中注册子组件；

  3）在子组件标签中添加子组件props中创建的属性；

  4）把需要传给子组件的值赋给该属性

 子组件向父组件传值：

  1）子组件中需要以某种方式（如点击事件）的方法来触发一个自定义的事件；

  2）将需要传的值作为$emit的第二个参数，该值将作为实参传给响应事件的方法；

  3）在父组件中注册子组件并在子组件标签上绑定自定义事件的监听。





 选择题的答案分别是ABDAD  CDADC 其中第三题的D选项为:init->beforeCreate->create->mount->destory