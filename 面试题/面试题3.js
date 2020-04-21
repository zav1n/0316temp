var a = 1;
var b = 2; //10

function show() {
  var a = b = 10;  //b = 10是全局变量,而a仅仅在函数里面被赋值了10并没有被应用全局
  console.log(a) //10局部变量
  console.log(b) //10全局变量
}

show()
console.log(a) //1
console.log(b) //10