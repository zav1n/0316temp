let arr = ["A", "B", "B", "B", "D", "C", "D", "B"]
// 1.1查询有没有 char 有就返回 true 没有就返回 false

// arr.indexOf(searchElement[, fromIndex])
// arr.indexOf()
// arr.lastIndexOf()  不会改变原来数组的下标，只是从后面返回

//写法一   查找B有没有在数组里面
let Search_B = arr.indexOf("B")
if(Search_B != -1 ){
    console.log(true)
}else{
    console.log(false)
}

//写法一用函数写，想查找那个值就直接在函数的参数输入想要查询的值
function Search(v){
    Char = arr.indexOf(v)
    if(Char != -1 ){
        console.log("写法二 ： "+true)
    }else{
        console.log("写法二 ： "+false)
    }
}
//输入你想找的值，如果没有控制台显示false，否则显示true   这里默认查找K，K不在数组里面，所以控制台显示false
Search("K")


//----------------------------------------------------------------------------------------------------
//arr.lastIndexOf()写法   查找有没有A
let Search_A = arr.lastIndexOf("A")
if(Search_A != -1 ) {
    console.log("lastIndexOf()写法："+true)
}else{
    console.log("lastIndexOf()写法："+false)
}


