//1.2 查询有多少个 char 有就返回个数 Number 没有就返回 0

//思路：使用Array.prototype.filter() 过滤掉其他东西，留下你要的东西，再返回个数
//var newArray = arr.filter(callback(element[, index[, array]]))

let arr= ["A", "B", "B", "B", "D", "C", "D", "B"]


let Search_B = arr.filter(function(element){
    if(element === "B"){
        return true //查找到B不过滤，返回true
    }
});
console.log(`你查找的B有`+Search_B.length+`个`)

//----------------------------------------------------------------------------------------------------------
//写法二：函数封装
function SearchCount(Char){
    let Search = arr.filter(function(element){
        if(element === Char){
            return true //查找到B不过滤，返回true
        }
    });
    console.log(`你查找的${Char}有`+Search.length+`个`)
}
//输入你要查找的字母
SearchCount("C")


