let arr = [1,3,5,7]
let arr2 = [1,3,5,9]

function number(arr){
    return Math.max(...arr,...arr2)
}
console.log(number(arr))