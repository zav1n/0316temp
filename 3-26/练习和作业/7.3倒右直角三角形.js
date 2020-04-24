for(let i=0;i<5;i++){
    let star5="";
    for(let j=0;j<5-i;j++){
        star5+="*";
    }
    let space="";
    for(let j=0;j<i;j++){
        space+=" ";
    }
    console.log(space+star5);
}