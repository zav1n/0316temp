
//记住6了false      flase null NaN "" undefiend  0
let b1 = true
let b2 = false
console.log(!b1)   //非b1 = 非true = false
// 隐形转换
console.log(!1);// 1在布尔值中是true   !是非  非1=非true=false 
console.log(!!1) // !!1=非非true=true

console.log(Boolean(null))
console.log(Boolean(undefined))