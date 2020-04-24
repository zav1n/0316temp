//Regexp
// 正则表达式之元字符  
/**
 * 元字符 
 * . 全字符 用于匹配单个的全部符号(\n和\t)除外  如果只是想使用.这个符号就转义\.或者[]括起来
 * +  {1,}   前一个语法出现至少1次 等价于{1,} 有多少
 * ?  {0,1}  如果有地方不需要一定查找到就在后面加?   前一个语法出现至少0次 至多1次 等价于 {0,1} 有没有
 * $  匹配行尾
 * ^  1.匹配行首   2.如果在[]里面则这个符号^  表示非的意思
 * * 前一个语法出现至少0次 至多正无穷次 等价于 {0,}
 * */ 

//单字符 
// ()   [] 
/**
 * [] 匹配单个字符 [abc] 匹配单个a或单个b或c
 * () 1.提高优先级  2.分组group
 */

 //范围
// - 到 范围 只能用在[]

//形容词
/**
 * 
 * 
 * 
 * `\d` 所有的数字 digital
 * `\w` 所有的单词 word
 * `\s` 所有的空白 space
 * `\b` 单词的边界 blank  我个人理解为border
 * `\n` 换行符  nextline 下一行
 * `\t` 制表符  table
 * `\D` 非数字  非数字 [^0-9]
 * `\W` 非单词  非单词 [^A-Za-z0-9_]
 * `\S` 非空白  非空格 [^ ]
 * `\B` 非单词边界 也就是字母和字母之间间隙
 */

// 常见语法
/**
 * test      string.test(Rexexp)
 * search    string.search(Rexexp)   
 * exec      string.exec(Rexexp)
 * replace   string.replace(Rexexp,[function,string])
 * 
 * match     Rexexp.match(string)
 * 
 * match和其他用法有些不一样
 * 例如
 * let str = "abc"
 * let reg = /^a/
 * console.log(reg.test(str))   test写法
 * console.loh(str.match(reg))   match写法
 * 
 */


 //如何捕获到连续n位的数字
//  let str = "1 23 456 7890"

//  // {} 范围 重复范围
//  // {n} 前一个语法出现n次 就会被匹配或捕获
//  // {n,} 前一个语法至少出现n次
//  // {n,m} 前一个语法至少出现n次且至多出现m次

//  // + 前一个语法出现至少1次 等价于{1,} 有多少
//  // ? 前一个语法出现至少0次 至多1次 等价于 {0,1} 有没有
//  // * 前一个语法出现至少0次 至多正无穷次 等价于 {0,}

//  let reg = /\d{2}/g // 匹配两个连续的数字
//  let reg2 = /\d{2,}/g //匹配至少两个连续的数字
//  let reg3 = /\d{1,2}/g //匹配一个或者两个连续的数字
//  let reg4 = /\d+/g //匹配至少一个数字
//  // let reg5 = /\d{1,}/g //匹配至少一个数字
//  console.log(str.match(reg))  //["23","45","78","90"]
//  console.log(str.match(reg2)) //["23", "456", "7890"]
//  console.log(str.match(reg3)) //[1, 23, 45, 6, 78, 90]
//  console.log(str.match(reg4)) //[1, 23, 456, 7890]