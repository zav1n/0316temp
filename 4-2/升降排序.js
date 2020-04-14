let arr = [10,2,4,1,6,8,9,3,5,7]
function numSort(arr,sort){
    //第一个for循环表示第一轮，把这一轮的最大或最小排出来  第二个for循环表示除了上一轮排剩下来再排一遍谁大谁小
    for(let i=0;i<arr.length - 1;i++){ //为什么-1 因为下面要得到的是下标而不是长度
        for(let j = 0;j<arr.length - 1 - i; j++){
            let temp = arr[j] - arr[ j+1 ]
            if(temp > 0 && sort === "asc" || temp < 0 && sort === "desc"){
                [ arr[j] , arr[j+1] ] = [ arr[j+1] ,arr[j] ]
            }
        }
    }
    return arr
} 
console.log(numSort(arr,"desc"))

//可查看冒泡算法.png