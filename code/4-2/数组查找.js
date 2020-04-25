//1. ["A", "B", "B", "B", "D", "C", "D", "B"]
//1.1 查询有没有 char 有就返回 true 没有就返回 false
let arr = ["A","B","B","B","D","C","D","B"]
//方法一 ：includes
let fn1 = (arr,char) =>arr.includes(char);
//方法二 ： indexOf
let fn2 = (arr,char) =>arr.indexOf(char) !== -1 ? true : false
//方法三 ： 传统for
let fn3 = (arr,char) => function(){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === char){
            return true
        }
    }
    return false
}

//判断这个数组中所有的内容是不是都不等于你传入的char

//方法四 ：arr.every 
let fn4 = (arr,char) =>function(){ !arr.every(function(e){ e!==char })}
//简化
let fn4_1 = (arr,char) => !arr.every( e => e !== char )

//方法五 ：some
let fn5 = (arr,char) => arr.some(e => e === char)

//方法六 ：find
let fn6 = (arr,char) => arr.find(e => e === char) === char ? true : false
//展开
let fn6_1 =function(arr,char){
    let result = arr.find(function(e){
        e === char
    })
    if(result === char){
        return true
    }
    return false
}
//简化
let fn6_2 = function(arr,char){
    let result = arr.find(e => e === char)
    if(result === char){
        return true
    }
    return false
}
//再简化  因为后面没接 => 所以function不可以去掉
let fn6_3 =function (arr,char){
   return arr.find(e => e === char) === char ? true : false
   //这里不return会报 undefined ，
   //相当于【 arr.find(e => e === char) === char ? true : false 】不知道吐给谁  你是写在function里面，function是一个工厂而不是一个实例，必须return工厂functin才能知道，没有return它不知道这个你要干嘛
   //如果不return就直接用个“杯子”去接 【 arr.find(e => e === char) === char ? true : false 】
}

//方法七 ：findIndex
let fn7 = (arr,char) => arr.findIndex(e => e === char ) >= 0 ? true : false

console.log(fn6_3(arr,"B"))