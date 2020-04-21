let obj = {
    name: "laoma",
    arr: ["a", "b", "c"]
  }
  
  let obj2 = obj;   //obj2 = {name: "laoma", arr: ["a", "b", "c"] }
  let arr = obj.arr;  //arr=["a", "b", "c"]
  
  obj2.arr = ["a", "b", "c", "d"];  //obj2.arr = {name: "laoma", ["a", "b", "c", "d"]}
  obj2.name = "laohu"              //obj2.arr = {name: "laohu", ["a", "b", "c", "d"]}
  
  console.log(arr)         //["a", "b", "c"]
  console.log(obj.name)     //laoma             //做错了   正确答案:laohu
  console.log(obj === obj2)  //false            //做错了   正确答案:true
  console.log(obj.arr === obj2.arr)  //true
  console.log(obj.arr === arr)  //false
  
  //抽个同学分析一下