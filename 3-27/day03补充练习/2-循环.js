for (var i = 0; i < 10; i++) {
    continue;  //一直在这里循环  没有执行道下面的输出,当执行道 i=10 i不小于10  就跳出循环了
    console.log(i)
}
console.log(i)

//continue 与 break 语句的区别是， break 是结束整个循环体，continue是结束单次循环。

//但是，在执行 continue 语句时，表现出了两种不同类型的循环：
// 在 while 循环中，会先判断条件，如果条件为 true，循环再执行一次。
// 在 for 循环中，自增长表达式 (如：i++) 会先计算，然后再判断条件是否为true，再决定是否执行迭代。
let i = 0;
let str ="\n"
let str1 = "-------------"
while (i < 5) {
   i++;
   if (i === 3) {
      continue;//跳到while判断中,当i=3时,中断了,所以到了=3时传不下去
      
        console.log("在if的i="+i);//整个while和if都没碰到,因为continue截断了
   }else{
        console.log("在else的i="+i)
        console.log(str)
    }
    console.log("在while的i="+i);
    console.log(str1)
}
