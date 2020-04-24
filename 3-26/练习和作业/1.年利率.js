// 1.假如投资的年利率为5%，试求从1000块增长到5000块，需要花费多少年
let money = 1000;
let count = 0;
    while(money<=5000){
        money *= 1.05;
        count++;
    }
    console.log("需要"+count+"年");
    