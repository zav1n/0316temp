//5.如何判断一个字符串中有无重复字符
let str = ["c","C","A","A","D","C","B","A","a","b","c","d","e","f","g"]
// let str = ["你","你好","您好","好","你","你","你好","你在无中生有","无中生有","您好","我"]
function repeatWord(letter){
    let count=0;
for(let i = 0;i<str.length;i++){
    if(letter === str[i]){
        ++count;
        break
    }else{
        console.log("没有找到该字符，请重新查找")
        break
    }
    }
    console.log(`你输入的${letter}有`+count+`个重复`)
}
repeatWord("q")


/**
 * --------------------------------函数封装----------------------------------------------
 */
// let str = ["c","C","A","A","D","C","B","A","a","b","c","d","e","f","g"]
let str = ["你","你好","您好","好","你","你","你好","你在无中生有","无中生有","您好","我"]
function repeatWord(letter){
    let count=0;
for(let i = 0;i<str.length;i++){
    letter === str[i] ? count++ : false
    
}
console.log(`你输入的${letter}有`+ --count +`个重复`)
return
}
repeatWord("你好")