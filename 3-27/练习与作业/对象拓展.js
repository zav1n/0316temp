// 请用对象实例一个人,他叫飘哥,年龄18,性别男,未婚,升高190cm

// 第一种写法
let preson = {}
preson.name = "飘哥"
preson.age = 18
preson.sex = "男"
preson.tall = 190
preson.gender = false

console.log(preson.name,preson.age,preson.sex,preson.tall,preson.gender);
//---------------------------------------------------------------------------------------
//第二种写法
//注意,每个属性写了之后要用 , 隔开   name,get等等要"" 
let preson1 = {
    "name":"飘哥1",
    "age":18,
    "sex":"男",
    "tall":190,
    "gender":false,
}
console.log(preson1);
//--------------------------------------------------------------------------------------
// 继承 : 创建了一个人右名字年龄性别等等
//        刚好飘哥跟这个人差不多就是名字不一样,那飘哥就继承他的所有再修改名字
let preson = {}
prenson = {"name":"名字","age":18,"sex":"男","tall":190,"gender":false}
preson.piaoge1 = preson;
console.log(preson)             //人
console.log(preson.piaoge1)    //飘哥
delete preson.name              //删掉继承下来的名字改为飘哥
console.log(preson.name)     //被删了名字所以未定义
preson.name = "飘哥"           /*所以这里定义一下,下面的log就输出名字了*/
console.log(preson.name) 
//---------------------------------------------------------------------------------------
//for...in 在person中遍历所有的属性键(key)
let people = {"hair":"头发","eye":"眼睛","ear":"耳朵","nose":"鼻子","mouth":"嘴巴"}
for (let key in people) {
     console.log(key)       //这里是输出关键字"hair"等,可用于查看有什么关键字再修改关键字的属性
    console.log(people[key])  //这里输出属性 头发等
  }