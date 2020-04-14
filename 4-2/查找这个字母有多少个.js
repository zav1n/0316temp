let arr = ["A","B","B","B","D","C","D","B"]
let fn1 = function(arr,char){
    let count = 0//中立变量

    //第一个B的位置
    let index = arr.indexOf(char)
    if(index === -1 ){
        return count
    }
    //最后一个B的位置
    while(index !== arr.lastIndexOf(char)){  //index !== arr.lastIndexOf(char) 的意思是找到第一个的位置和最后一个的位置看他们是不是相等
        count++
        arr.splice(arr.lastIndexOf(char),1)  //不相等就最后一个删掉，并且+1
    }
    return ++count
}
console.log(fn1(arr,"E"))