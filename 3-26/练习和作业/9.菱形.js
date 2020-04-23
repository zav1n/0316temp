var str="";

for(var i=1;i<=5;i++){//控制行
//控制空格
for(var k=1;k<=5-i;k++){
str+=" ";
}

//控制每行显示的星星
for(var j=1;j<=2*i-1;j++){
str+="*";
}
str+="\n";
}

//打印下半部分的菱形
for(var i=1;i<=5;i++){//控制行
//控制空白
for(var j=1;j<=i;j++){
str+=" ";
}

for(var k=1;k<=2*(5-i)+1;k++){
str+="*";
}

str+="\n";
}

console.log(str);//易错点不是每一行完成之后就要打印一次，这样会换行会存在间距，

