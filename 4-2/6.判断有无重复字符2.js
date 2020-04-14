// 如何查找到一个字符串出现最多次数的字符
// 如何查找到一个字符串出现最多次数的字符次数
//str 字符串
//char 子串
//return count: number

//思路：
function fn2(str: string, char: string) {
  return result
}
Input: "apple", "p"
Output: 2
Input: "apple", "a"
Output: 1
Input: "apple", "z"
Output: 0


function fn1(str,char){
    let count= 0
    let str1 = str.split("").reverse()
    for(let i=0;i<str1.length;i++){
    str1[i] === char ? ++count : 0
}
console.log(`有${count}个重复`)
}
fn1("apple","k")
fn1("apple","p")