let str = "hello";
// "olleh"
// split("") -> reverse() => join("")
let fn = str => str.split("").reverse().join("");
//for
console.log(fn(str))


let str = "北京欢迎您";
      // let arr = ["北", "京", "欢", "迎", "您"]
      //依空字符串作为分割符 将字符串会分成5份
      let arr = str.split(",")
      console.log(arr)

      let str2 = "北京,深圳,上海"
      let arr2 = str2.split(",")
      console.log(arr2)

      let str3 = "北京+深圳+上海+广州"
      console.log(str3.split("+"))

      let arr4 = ["长沙", "南昌", "武汉"]
      //长沙123南昌123武汉
      let str4 = arr4.join("123")
      console.log("str4="+str4)