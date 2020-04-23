for (var i = 0; i < 10; i++) {
    console.log(i); //第一次执行 i = 0 ,i<10正确往下执行,所以i=0  i++是所有下面执行完才i++再执行
    break;//执行了一次i=0就中断跳出了  所以i=0 并没有开始i++
}
console.log(i); //全局作用域没有定义i

//循环解析
var i=0;
for(a;b;c){             //a= (var i=0)   b= (i<10)   c=(i++)
    if(i<10){
        i++
    }else{break}
}
