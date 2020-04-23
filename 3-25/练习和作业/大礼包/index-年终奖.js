// 某个公司要给员工发年终奖，为了奖励老员工，所以工作时间越长，发的越多，规则如下：
// 工作满 0 年,发月薪的 1 倍月薪年终奖，如果月薪大于 8000 ，那么就是发 1.2倍
// 工作满 1 年,发月薪的 1.5 倍月薪年终奖，如果月薪大于 10000 ，那么就是发 1.7倍
// 工作满 2 年甚至更多 ,发月薪的3 倍月薪年终奖，如果月薪大于 12000 ，那么就是发 3.2倍

function money(year,salary){
    let years = Number.parseInt(year);
    let salarys = salary; 

    if(years === 0){
        console.log("工作时间："+years)
        console.log("月薪："+salarys)
        //b>0 ? x : y
        //若 b>0，返回值为 true  则执行 x
        //若 b<0, 返回值为 false  则执行 y
        salary > 8000 ? salarys *= 1.2 : salarys *=1 ;
    }else if(years === 1){
        console.log("工作时间："+years)
        console.log("月薪："+salarys)
        salary > 10000 ? salarys *=1.7 : salarys *=1.5;
    }else{
        console.log("工作时间："+years)
        console.log("月薪："+salarys)
        salary > 12000 ? salarys *=3.2 : salarys *=3;
    }
    console.log(`年终奖${salarys}`);
}
money(3,7000)