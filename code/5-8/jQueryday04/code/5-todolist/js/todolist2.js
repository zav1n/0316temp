// 1. 键盘事件 记录下 enter按钮
$(function () {
  //每次进来的时候 总要先调用init方法 拿到obj 同时根据obj来选中待办和进行中
  //每次页面开始读取的时候 要先初始化一次 拿到上次未解决或已经解决的任务
  init()

  //按下键盘的Enter的时候 存入内容
  $("#title").on("keydown", function (e) {
    //为了监听 确定键
    if (e.key === "Enter") {
      //为了确定 空字符串不能作为任务
      if ($.trim($(this).val()) === "") {
        alert("不要逗我了")
      } else {
        // 存储内容
        let obj = {
          title: $(this).val(),
          done: false
        }
        setTodoList(obj, "add")
        init()
        //初始化文本框
        $(this).val("")
      }
    }
  })

  //为所有的checkbox都绑定一个能够完成的事件
  $("#todolist").on("click", "input", function () {
    //先拿取 整个json数据
    let data = getTodoList();
    let index = $(this).attr("input-id")
    console.log(index);
    //被操作的那个checkbox对应的json对象
    let obj = data[index]
    setTodoList(obj, "replace", index)
    init()
  })

  //为所有的a标签 绑定删除事件
  $("#todolist, #donelist").on("click", "a", function () {
    let index = $(this).attr("a-id");
    setTodoList(null, "remove", index)
    init();
  })
  //拿到本地存储
  function getTodoList() {
    //判断这个玩意是不是空的
    if (!localStorage.getItem("todolist")) {
      //如果他本身是空的 我们需要手动的为他提供空数组
      localStorage.setItem("todolist", "[]");
    }
    return JSON.parse(localStorage.getItem("todolist")) //自动做了一反序列化
  }

  //设置本地存储
  function setTodoList(obj, option, index) {
    // 本地存储 不支持对象 需要先将这个数据序列化
    //先拿取原先有的todolist
    let arrdata = getTodoList(); //[]
    switch (option) {
      case "add":
        arrdata.push(obj) //[{}]
        break;
      case "replace":
        obj.done = true;
        arrdata.splice(index, 1, obj);
        break;
      case "remove":
        arrdata.splice(index, 1);
        break;
    }
    //对todolist数据做一次更新
    localStorage.setItem("todolist", JSON.stringify(arrdata)); //"[{}]"
  }
  //加载这个本地存储对象
  function init() {
    arr = getTodoList()
    //先对整个todolist和donelist做清空操作
    $("#donelist").empty();
    $("#todolist").empty();
    //遍历todolist这个变量的本地存储
    //再遍历的时候 对内容进行计数
    let donecount = 0, //已经完成的任务个数
      todocount = 0; //正在完成的任务个数
    arr.map((e, i) => {
      //e 都是单独一个任务
      //如果是已经完成的就加到完成地方
      if (e.done) {
        // todo 已经完成
        // todo donelist
        $("#donelist").append($(`<li>
          <input type="checkbox" input-id="${i}" checked>
          ${e.title}
          <a href="javascript:;" a-id="${i}"></a>
        </li>`))
        donecount++
      } else {
        //反之 就加到正在进行中
        // todo 正在进行
        // todolist
        $("#todolist").append($(`<li>
          <input type="checkbox" input-id="${i}">
          ${e.title}
          <a href="javascript:;" a-id="${i}"></a>
        </li>`))
        todocount++
      }
    })
    //遍历完毕之后 展示他的任务数
    $("#donecount").text(donecount)
    $("#todocount").text(todocount)
  }
})