//Input string ： “JACK MA” or “JaCk MA” or “jACk ma” || "BRUCE LeE" || “sTePHen CuRrY”
//Output string : "Jack MA" || "Bruce LEE" || “Stephen CURRY”

/**
 * 思路：找字眼   利用中间的空格去截取前面的名字和后面的名字，分为三部分，1名字首个字母，2除了名字首个字母后，3空格后的姓
 * 1.indexOf（）获取到空格
 * 2. 1 和 空格
 * 3.截取  方法名：substring || slice
 * 4.字母变大变小  方法名：toUpperCase & toLowerCase
 * 5.把首写字母，首写字母后面和姓三部分凭借起来
 */
function nameFun(str){
    let index = str.indexOf(" ")  //获取到空格的位置
    let firstName = str.substring(1,index).toLowerCase() //获取到名字，截取掉第一个字母
    // let firstName_ = str[0].substring(0,1).toUpperCase() 
    let firstName_ = str.substring(0,1).toUpperCase() //从获取到名字，获取第一个，该成大写
    let lastName = str.substring(index).toUpperCase()  //获取姓 用空格获取到后面的姓，再转为大写
    console.log(firstName_+firstName+lastName)  //然后拼接   可以用concat  或者直接+  把获取的3个值+起来
}
nameFun("StePHen CuRrY")


/**
 * -----------------老师的做法-----------------------
 */
//Input string
//JACK MA
//JacK MA
//jAck ma
//BRUCE LeE

//Outpur string
//Jack MA

//indexOf()
//1 和 空格
//截取 substring||slice
//toUpperCase&toLowerCase
//+
function nameFun(str) {
  // let index1 = 1;
  // let index2 = str.indexOf(" ") //4
  //J
  let firstLetter = str.substring(0, 1).toUpperCase();
  //ack
  let firstName = str.substring(1, str.indexOf(" ")).toLowerCase();
  // ma
  let lastName = str.substring(str.indexOf(" ")).toUpperCase();
  return firstLetter + firstName + lastName
}
let fn = str => {
  let firstLetter = str.substring(0, 1).toUpperCase();
  //ack
  let firstName = str.substring(1, str.indexOf(" ")).toLowerCase();
  // ma
  let lastName = str.substring(str.indexOf(" ")).toUpperCase();
  return firstLetter + firstName + lastName
}

let fn2 = str => str.substring(0, 1).toUpperCase() + str.substring(1, str.indexOf(" ")).toLowerCase() + str
  .substring(str.indexOf(" ")).toUpperCase()
console.log(nameFun("JACK MA"))
console.log(nameFun("JacK MA"))
console.log(nameFun("jAck ma"))
console.log(nameFun("BRUCE LeE"))