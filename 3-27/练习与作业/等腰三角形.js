let str =""
for(var i=1;i<=3;i++){
    str +="\n"
    for(var j=1;j<=3-i;j++) {
        str +=" "
    }
    for (var k = 1; k <=2*i-1; k++) {
        str +="*"
    }
}console.log(str)

