let a = { n: 1 }
  let b = a;  // b { n : 1 }
  a.x = a = { n: 2 }   // a = { n : 2 }
  console.log(a.x)  
  console.log(b)
  
  //A = B = C
  //A = B
  //B = C

/**
 *  var a=1，b=2，c=3；
 *  a = b = c；
 *  输出的a，b，c结果都为3。  因为赋值运算从右向左执行。
 *  所以a.x = a = { n : 2 }看成 a = { n : 2 }       { n : 2 }只赋值给了a没赋值给a.x
 *  a.x的x没有新开一个地址,所以没有定义
 *  至于输出的b不会解释
 * 
 */
//   

// 

// 