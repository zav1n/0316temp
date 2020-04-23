let str = "qwesadsa"
let reg = /a-z/
console.log(reg.test(str));

let str1 = "das dsa fds"
let reg2 = /(\b\w)(\w+\b)/g
console.log(str1.match(reg2));