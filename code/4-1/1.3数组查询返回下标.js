//1.3 查询有多少个 char 有就返回下标数组 Array[1, 2, 3, 7] 没有就返回 []

//indexOf()

let arr = ["A", "B", "B", "B", "D", "C", "D", "B"]
//查找B的下标
        for(let i=0;i<arr.length;i++){
            if(arr[i] === "B"){
                let arr1 = arr.indexOf("B",i)
                let arr2 = Array.of(i)
                console.log(arr2)
            }
        }


//封装
    //   function SearchChar(arr, target) {
    //     let result =[]
    //     for(let i=0;i<arr.length;i++){
    //         if(arr[i] === target){
    //             let arr1 = arr.indexOf(target,i)
    //             let arr2 = Array.of(i)
    //             // console.log(arr2)
    //         }
    //     }
    //     return result
    //     console.log(result)
    //   }
    //   SearchChar(arr,"B")
//如何把获得的下标组成
      