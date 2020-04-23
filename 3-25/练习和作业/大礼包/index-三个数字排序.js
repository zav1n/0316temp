
// let a = 99;
// let b = 8;
// let c = 66;
// let temp;
//     if (a > b) {
//     temp = a;
//     a = b;
//     b = temp;
//     }
//     if (b > c) {
//     temp = b;
//     b = c;
//     c = temp;
//     }
//     if (a > c) {
//     temp = a;
//     a = c;
//     c = temp;
//     }
// console.log(a + '<' + b + '<' + c);


let a = 99;
let b = 8;
let c = 66;
let temp;
    if (a > b) {
    [a , b] = [b ,a]
    }
    if (b > c) {
    [b,c]=[c,b]
    }
    if (a > c) {
    [a,c]=[c,a]
    }
console.log(a + '<' + b + '<' + c);