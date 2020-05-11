$(function() {
    // 1. 页面打开的一瞬间 初始list
    // todocount donecount 计数
    // todolist donelist 父元素
    // let obj = {
    //     todo: ["待办"],
    //     done: ["完成"]
    // }
    init()

    function init() {
        let obj = getTodoList()
            //清空元素
        $("#todolist,#donelist").empty();
        //待办数组
        let todoArr = obj.todo;
        //完成数组
        let doneArr = obj.done;
        //遍历本地存储待办
        todoArr.map(e => {
                $("#todolist").prepend(`
            <li>
                <input type="checkbox" />
                ${e}
                <a href="javascript:;"></a>
            </li>
            `)
            })
            //遍历本地存储的完成
        doneArr.map(e => {
                $("#donelist").prepend(`
            <li>
                <input type="checkbox" checked />
                ${e}
                <a href="javascript:;"></a>
            </li>
            `)
            })
            //计算未完成的数量
        $("#todocount").text(todoArr.length)
            //计算已经完成的数量
        $("#donecount").text(doneArr.length)
    }


    // 2. 输入内容 按下Enter 设置一个内容
    //title
    $("#title").on("keydown", function(e) {
        if (e.key === "Enter" && $.trim($(this).val()) !== "") {
            //查询之前的本地存储
            let oData = getTodoList()
                //oData的todo数组的最后 加一个字符串
            oData.todo.push($(this).val())
            setTodoList(oData)
            init()
            $(this).val("")
        }
    })

    function getTodoList() {
        //字符串类型的一个对象
        let sData = localStorage.getItem("todolist");
        let oData;
        if (!sData) {
            oData = {
                todo: [],
                done: []
            }
        } else {
            oData = JSON.parse(sData);
        }
        return oData
    }

    function setTodoList(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }
    // 3. 点击checkbox 待办 -> 完成
    $("#todolist").on("click", "input:checkbox", function() {
            let index = $("#todolist input:checkbox").index($(this));
            let oData = getTodoList();
            // todoArr中的一个元素 放到doneArr数组中
            let todoArr = oData.todo;
            let doneArr = oData.done;
            console.log(todoArr.length - 1 - index) //6 - 1 - 3 =2
                //但是他是数组的第二位
            doneArr.unshift(...todoArr.splice(todoArr.length - 1 - index, 1));
            setTodoList(oData)
            init()
        })
        // 4. 点击a 删除该项事项
    $("#todolist").on("click", "a", function() {
        let index = $("#todolist a").index($(this));
        let oData = getTodoList();
        let todoArr = oData.todo;
        todoArr.splice(todoArr.length - 1 - index, 1);
        setTodoList(oData)
        init()
    })
    $("#donelist").on("click", "a", function() {
        let index = $("#donelist a").index($(this));
        let oData = getTodoList();
        let doneArr = oData.done;
        doneArr.splice(doneArr.length - 1 - index, 1);
        setTodoList(oData)
        init()
    })
})