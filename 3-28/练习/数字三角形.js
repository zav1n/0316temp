let str = ""
let num = 4  //一共几层
for(let i = 1;i<=num;i++){
    for(let a=num;i<a;a--){
        str +=" "
    }
    for(let j=1;j<=i;j++){
        str += j 
    }
    for(let b=i;b>1;b--){
        str += b-1
    }
    str +="\n"
}
console.log(str)