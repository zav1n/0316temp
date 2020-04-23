let str="我还在for中"
let str1="\n"
let str2="------------"
for (var i = 1; i <= 10; i += 2) {
    console.log("for刚开始")//第一次1  第二次4  第三次7
    if (i <= 5) {
      i++           //先加if的i++再加for的i +=2
      console.log("在if的i="+i); //第一次2 第二次5
      console.log("以上是在if循环"); 
      continue //跳到for呢还是if的判断?答  for中
    } else {
      i -= 2
      console.log("在else的i="+i);
      break
    }
    i--
    console.log(i) //这里为什么输出不了?因为continue?
  }
  console.log(i) //经过三次  第三次在else中被-2了所以等于5
