      //创建一个数组长度为1的且内容是3的数组
      let arr = [3]
      //创建一个长度为3的且内容都是空的数组
      let arr2 = new Array(3, 4, 5)
      let arr3 = Array.of(3, 4, 5);
      console.log(arr)
      console.log(arr2)
      console.log(arr3)
//--------------------------------------------------------------------------------------------------

      let arr = [1, 2, 3];
      myArray(arr, 4);
      console.log(arr) //[1, 2, 3, 4]

      function myArray(arr, item) {
        arr[arr.length] = item
      }

      let arr2 = [1, 3, 5, 7];
      // includes(item: any): boolean
      //如果有这个元素 就返回 true
      //如果没有 就返回false
      console.log(myIncludes(arr2, 2))
      console.log(myIncludes(arr2, 5))

      function myIncludes(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return true
          }
        }
        return false
      }
      //-------------------------------------------------------------------------------------
      let arr = [1, 2, 3];
      myArray(arr, 4);
      console.log(arr) //[1, 2, 3, 4]

      function myArray(arr, item) {
        arr[arr.length] = item
      }

      let arr2 = [1, 3, 5, 7];
      // includes(item: any): boolean
      //如果有这个元素 就返回 true
      //如果没有 就返回false
      console.log(myIncludes(arr2, 2))
      console.log(myIncludes(arr2, 5))

      function myIncludes(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return true
          }
        }
        return false
      }
//----------------------------------------------------------------------------------------

let arr = ["北京", "上海", "深圳", "广州"];
let arr2 = arr.slice();
console.log("arr2="+arr2)
arr2[3] = "长沙"
console.log(arr) //["北京", "上海", "深圳", "广州"]
// console.log(arr[3]) //广州
console.log(arr2[3]) //长沙
console.log(arr2) //["北京", "上海", "深圳", "广州"]