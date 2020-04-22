(function() {
    let parent = document.getElementById('lesson_right_2');
    let child1 = document.getElementById('lesson_right_article');
    let child2 = document.getElementById('child2');
    child2.innerHTML = child1.innerHTML;
    console.log("child1.innerHTML=" + child1.innerHTML);
    console.log("parent.scrollTop=" + parent.scrollTop);
    console.log("child1.scrollTop=" + child1.scrollTop);
    console.log("child1.offsetTop=" + child1.offsetTop);
    console.log("scroll.scrollTop=" + child1.scrollTop);
    setInterval(function() {
        console.log("scroll.scrollTop=" + child1.scrollHeight);
        if (child1.scrollTop >= child1.scrollHeight) {
            child1.scrollTop = 0;
        } else {
            child1.scrollTop++
        }
    }, 20);
})()

let oWrapper = document.querySelector(".wrapper")
let oWrapperShow = document.querySelector(".wrapperShow")
let aSlide = document.querySelectorAll(".slide")
let nContainerWidth = oWrapper.clientWidth;
let nContainerHeight = oWrapper.clientHeight;

setInterval(() => {
    oWrapperShow.style.left = oWrapperShow.offsetLeft - 1652 + "px"
    if (oWrapperShow.offsetLeft === -4956) { //-4956
        oWrapperShow.style.left = "0px"
    }
}, 2000);


//关注按钮
let oFollow = document.querySelector(".follow")

let screenWidth = document.documentElement.clientWidth || document.body.clientWidth
let screenHeight = document.documentElement.clientHeight || document.body.clientHeight

let oMaskDiv = document.createElement("div")
let oBgMask = document.createElement("div")
document.body.appendChild(oBgMask)
document.body.appendChild(oMaskDiv)



oFollow.addEventListener("click", (e) => {
    bgMask("100%", "100%", "fixed", "rgba(0, 0, 0, .5)")
    maskDiv(200, 400, "fixed", "1px solid black", "white")
})


oBgMask.addEventListener("click", (e) => {
    oBgMask.style = ""; //相当于隐藏了遮罩的div
    oMaskDiv.style = ""; //相当于隐藏遮罩，用清除遮罩的样式来达到隐藏效果
    oMaskDiv.innerHTML = ""
});


function bgMask(width, height, position, backgroundColor) {
    oBgMask.style.position = `${position}`
    oBgMask.style.width = `${width}`
    oBgMask.style.height = `${height}`
    oBgMask.style.backgroundColor = `${backgroundColor}`
    oBgMask.style.left = 0
    oBgMask.style.top = 0
}


function maskDiv(height, width, position, border, backgroundColor) {
    oMaskDiv.style.height = `${height}px`
    oMaskDiv.style.width = `${width}px`
    oMaskDiv.style.position = `${position}`
    oMaskDiv.style.border = border
    oMaskDiv.style.backgroundColor = `${backgroundColor}`
    oMaskDiv.style.left = `41%`
    oMaskDiv.style.top = `40%`
    oMaskDiv.innerHTML =
        `
        <p>可拖拽</p>
    <form action="网易页面.html" method="get">
    <span>用户名:</span><input type="text" id="username1" name="username1" required><br>
    <span>密码:  </span><input type="password" id="pwd1" name="pwd1" required><br>
    <input type="submit" id="btn1" value="提交"><br>
    <div id="div11" style="color:red"></div>
    </form>
        `
}

oMaskDiv.addEventListener("mousedown", e => {
    //按下的时候获取到鼠标的坐标
    const iMouseX = e.x - oMaskDiv.offsetLeft;
    const iMouseY = e.y - oMaskDiv.offsetTop;
    oMaskDivMove = e => {
        oMaskDiv.style.left = e.x - iMouseX + "px"
        oMaskDiv.style.top = e.y - iMouseY + "px"
    }
    document.addEventListener("mousemove", oMaskDivMove)
    oMaskDiv.addEventListener("mouseup", e => {
        document.removeEventListener("mousemove", oMaskDivMove)
    })
})

let oIntroduce = document.getElementById("introduce")
let oInputLanguage = document.getElementById("inputLanguage")
let oShow1 = document.getElementById("show_lesson_1")
let oShow2 = document.getElementById("show_lesson_2")
oIntroduce.addEventListener("click", function() {
    oShow1.style.display = "block"
    oShow1.style.float = "left"
    oShow2.style.display = "none"


})

oInputLanguage.addEventListener("click", function() {
    oShow2.style.display = "block"
    oShow2.style.float = "left"
    oShow1.style.display = "none"
})