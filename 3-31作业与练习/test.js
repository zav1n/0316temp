var a = 0
var b = a          
b++                 
console.log(a)   
var o = {}
console.log(o.a)
o.a = 2
console.log(o.a)
var b = o
b.a = 10
console.log(o.a)


var o = {}
o.a = 2
//所以可以看成 var o = {a} a=2
var b = o
//因为var o ={} 所以 b={}
b = {}
b.a = 10   
//修改了上面的 o ={a} a=2的值  看成b={a} a=10



