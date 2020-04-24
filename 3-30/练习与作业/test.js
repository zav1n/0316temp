        let arr = [4, 8, 2, 10]
      function maxNumber(arr) {
        return Math.max(...arr) //Math.max(4, 8, 2, 10)
      }
      console.log(maxNumber(arr))
//********
      let maxNumber2 = arr => Math.max(...arr)
      console.log(maxNumber(arr))
/**
 * ----------------------------------------------------------------------------------------
 */ 
//做不出来
      let arr = [1, 3, 5, 7]
      let arr2 = [1, 5, 7, 9]

      //如何返回两个数组的最大值?
      function maxNumber(arr, arr2) {
          
        Math.max(...arr)
        // Math.max(...arr2)
        return arr,arr2
      }
      console.log(maxNumber(arr),maxNumber(arr2))