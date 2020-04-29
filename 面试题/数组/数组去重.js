
//去重该数组中所有的 0      [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0] => [1, 100, 20, 90, 10, 10, 100, 20]
let arr = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0]  
function RemoveReapet(num){
// for(let i=0;i<arr.length;i++){
    let Search = arr.filter(function(element){
        if(element !== num){
            return true
        }
        })
        console.log(`去除重复的 ${num} :  `+Search)  // => [1, 100, 20, 90, 10, 10, 100, 20]
    }
// }
RemoveReapet(0)

//去重该数组中所有的 n [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0], n=100 => [0, 1, 0, 20, 90, 10, 10, 0, 20, 0]

RemoveReapet(100)

// n = 20 => [0, 1, 100, 0, 90, 10, 10, 100, 0, 0]
RemoveReapet(20)

/**
 * ----------------------------------------------------------------------------------------------
 * 请在原数组中操作去重 splice(i, 1) [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0] 
 * 
 */

        
        let Search = arr.filter(function(element){
            if(element !== 0 && element !== 100 && element !== 20 && element !== 10){
                return true
            }
            })
            Search.splice(0,0,+"0",+"100",+"20",+"10")
            console.log(Search) //  [0, 1, 100, 20, 90, 10]
