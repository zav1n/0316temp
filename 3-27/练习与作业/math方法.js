//Math.abs(value: any);
//返回value的绝对值(非负数)
console.log(Math.abs(10))		//10
console.log(Math.abs(-10.5))		//10.5
console.log(Math.abs(0))		//0

//如果没有提供数字类型 那么先调用Number()进行强制转换 转换成数字类型之后在返回绝对值
console.log(Math.abs("2.5"))		//2.5
console.log(Math.abs("-2.5"))		//2.5
console.log(Math.abs("-2.5.5"))   //NaN
console.log(Math.abs("helloworld"))   //NaN
console.log(Math.abs(true))		//   因为true是1 1就是true
console.log(Math.abs(null))		//    因为false是0  0就是false
console.log(Math.abs(undefined))		// NaN

//--------------------------------------------------------------------------------------------
//Math.floor(value: Any)    向下取整   不考虑四舍五入,只考虑正负数,正数永远等于小数点前面的数
//                                                      负数有小数点永远向上+(-1)
console.log(Math.floor(0.4)) //0
console.log(Math.floor(10.5))   //10
console.log(Math.floor(-0.4))  //-1
console.log(Math.floor(-0.5))  //-1

//--------------------------------------------------------------------------------------------
//Math.ceil(value: Any)   向上取整     不考虑四舍五入,正数后面有小数点就直接入1  负数后面有小数点就直接去掉
console.log(Math.ceil(0.4)) // 1
console.log(Math.ceil(10.5))   //11
console.log(Math.ceil(-0.4))  //-1
console.log(Math.ceil(-0.5))  //-1

//  Math.round(value: Any)四舍五入

// #### Math.max([x: Any[, y: Any[, …]]])  在x,y,z这样一堆数字中取最大的数字

// #### Math.min([x: Any[, y: Any[, …]]])   在x,y,z这样一堆数字中取最小的数字

// #### Math.pow(x: Any, y: Any)  返回Number x的y次方

