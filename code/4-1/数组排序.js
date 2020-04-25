//C 数组排序
//sort() 实现自然数的排序
//冒泡排序

//没有经过处理的排序
let arr = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0]  
let Newarr = arr.sort()
console.log(Newarr)

/**
 * --------------经过去重后排序---------------------
 */
let Search = arr.filter(function(element){
    if(element !== 0 && element !== 100 && element !== 20 && element !== 10){
        return true
    }
    })
let Zero,One,Onehundred,Twenty,Ten
for(let i=0;i<arr.length;i++){
    if(arr[i]=== 0 ){
        Zero=0
    }
    else if(arr[i] === 100){
        Onehundred = 100
    }else if(arr[i] === 20){
        Twenty = 20
    }else if(arr[i] === 10){
        Ten = 10
    }
}
Search.push(Zero,Onehundred,Twenty,Ten)
console.log("排列前 : " + Search)
let NewSort = Search.sort()
console.log("排列后 : " + NewSort+"  因为ASCII,所以还要进一步优化")

Search.sort((function (prev, now) {
    if (prev < now) {
      return -1
    }
  }))
console.log("优化后的排序 : " + NewSort)