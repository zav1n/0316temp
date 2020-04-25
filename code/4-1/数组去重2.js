/**
 * --------------------------------------------------------------------------------------------
 * 请在新数组中操作去重 push(arr[i])
 */
let arr = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0]  
let Search = arr.filter(function(element){
    if(element !== 0 && element !== 100 && element !== 20 && element !== 10){
        return true
    }
    })
let Zero,One,Onehundred,Twenty,Ten
for(let i=0;i<arr.length;i++){


    if(arr[i]=== 0 ){
        Zero=0
    }else if(arr[i] === 1 ){
        One = 1
    }else if(arr[i] === 100){
        Onehundred = 100
    }else if(arr[i] === 20){
        Twenty = 20
    }else if(arr[i] === 10){
        Ten = 10
    }
}
Search.push(Zero,One,Onehundred,Twenty,Ten)
console.log(Search)