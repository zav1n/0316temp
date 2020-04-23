let star6="";
for(let i=0;i<6;i++){
    let space="";//每行星星前的空格；
    for(let j=0;j<6-1-i;j++){
        space+=" ";
    }
    star6+="*";
    console.log(space+star6);
}