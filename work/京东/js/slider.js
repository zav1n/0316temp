//1. 自动轮播
//2. 手指滑动的时候 判断轮播 拿到一个手指起始的位置
//3. 手指滑动的一段距离 手指滑动的距离 方向
//4. 确定手机离开手机
//如果滑动的距离够大就切换图片 否则动都不动
//定时器中立变量
let slideTimer = null;
//中立变量来表示当前位于那张图片
let slideNow = 0;
let slide = document.querySelector(".slide");
let slideContainer = document.querySelector(".slide ul");
let containerWidth = slideContainer.clientWidth;
//初始化两个li 分别是第一个li(是最后一个li的克隆体) 和最后一个li(是第一个li的克隆体)
let firstLi = slideContainer.children[0].cloneNode(true);
let lastLi = slideContainer.children[slideContainer.children.length - 1].cloneNode(true);
//将这两个li分别插入到前后两侧
slideContainer.appendChild(firstLi)
slideContainer.insertBefore(lastLi, slideContainer.children[0])
let slideItem = document.querySelectorAll(".silde ul li");


starSlide(3000);
//封装滚动定时器
function starSlide(time) {
    slideTimer = setInterval(() => {
        slideNow++ /* 0 -> 1 */
        let n = -(slideNow * 100) + "%"
            //每次滑动前又给他补充回动画
        slideContainer.style.transition = "all .3s"
        slideContainer.style.transform = `translateX(${n})`
    }, time);
}


//过渡结束? transitionend
slideContainer.addEventListener("transitionend", function() {
    //当图片滚动到第三张(其实是第四张)
    if (slideNow === 5) {
        //悄悄摸摸的将translateX 从 -300% 转移到 0
        //slideNow 修正0
        slideNow = 0;
        slideContainer.style.transition = "none"
        slideContainer.style.transform = `translateX(0%)`
    } else if (slideNow === -1) {
        //悄悄摸摸的将translateX 从 0 转移到 -300% 
        //slideNow 修正-300%
        slideNow = 4;
        slideContainer.style.transition = "none"
        slideContainer.style.transform = `translateX(-400%)`
    }
})

//手指按下的坐标点位置
let startX;
//手指松开时候的坐标点位置
let endX;


slideContainer.addEventListener("touchstart", function(e) {
    //起始点
    startX = e.touches[0].pageX;
    //点触开始的时候停止轮播定时器
    clearInterval(slideTimer)
});
//左右滑动
function show(e) {
    // console.log("结束点触了")
    // console.log(e.changedTouches[0].pageX)
    endX = e.changedTouches[0].pageX
        //滑动4分之一个部分就动起来
        //距离不够 无事发生
        //距离够了 他俩的差值是负值 向后走
        //距离够了 他俩的差值是正值 向前走
    if (Math.abs(startX - endX) <= containerWidth / 4) {
        // console.log("我不想动")
    } else {
        if (startX - endX < 0) {
            slideNow--
            let n = -(slideNow * 100) + "%"
                //每次滑动前又给他补充回动画
            slideContainer.style.transition = "all .3s"
            slideContainer.style.transform = `translateX(${n})`
        } else {
            slideNow++
            let n = -(slideNow * 100) + "%"
                //每次滑动前又给他补充回动画
            slideContainer.style.transition = "all .3s"
            slideContainer.style.transform = `translateX(${n})`
        }
        //让定时器可以重新运动
        starSlide(3000);
    }
}
let flag = true;
slideContainer.addEventListener("touchend", function throttle(e) {
    // 节流   函数防抖
    if (flag) {
        //调用左右滑动函数
        show(e)
        flag = false;
        setTimeout(() => {
            flag = true;
        }, 500);
    }
})



//关闭打开App
let openApp = document.querySelector(".openApp")
let clsApp = document.querySelector(".close-App")
let searchTop = document.querySelector(".search-top")
clsApp.addEventListener("click", function() {
    openApp.style.display = "none"
    searchTop.style.top = "0"
});
/************boxMail列表切换**************** */
let boxMail = document.querySelector(".boxMail")
let boxMail_List_1 = document.querySelector(".boxMail-list_1")
let boxMail_List_2 = document.querySelector(".boxMail-list_2")
let boxMailPoint1 = document.querySelector(".boxMail-change-point1")
let boxMailPoint2 = document.querySelector(".boxMail-change-point2")
boxMailPoint1.style.color = "#ed7375";
boxMail.addEventListener("touchstart", function(e) {
    startX = e.touches[0].pageX;
})
boxMail.addEventListener("touchend", function(e) {
    endX = e.changedTouches[0].pageX
        // console.log('滑动结束');
        // console.log(startX);
        // console.log(endX);
    if (Math.abs(startX - endX) <= containerWidth / 4) {
        console.log("boxMail不想动")
    } else {
        if (startX - endX > 0) {
            //每次滑动前又给他补充回动画
            boxMail_List_1.style.transition = "all .3s"
            boxMail_List_2.style.transition = "all .3s"

            boxMail_List_1.style.left = "-100%"
            boxMail_List_2.style.left = "0"
            boxMailPoint1.style.color = "";
            boxMailPoint2.style.color = "#ed7375";
        } else {
            boxMail_List_1.style.left = "0"
            boxMail_List_2.style.left = "100%"
            boxMailPoint2.style.color = "";
            boxMailPoint1.style.color = "#ed7375";
        }
    }
})
boxMailPoint1.addEventListener("click", function() {
    boxMail_List_1.style.transition = "all .3s"
    boxMail_List_2.style.transition = "all .3s"
    boxMail_List_1.style.left = "0"
    boxMail_List_2.style.left = "100%"
    boxMailPoint2.style.color = "";
    boxMailPoint1.style.color = "#ed7375";
})
boxMailPoint2.addEventListener("click", function() {
    boxMail_List_1.style.transition = "all .3s"
    boxMail_List_2.style.transition = "all .3s"
    boxMail_List_1.style.left = "-100%"
    boxMail_List_2.style.left = "0"
    boxMailPoint1.style.color = "";
    boxMailPoint2.style.color = "#ed7375";
})


//----------------------------------- 倒计时
$(document).ready(function() {
    var oDate = new Date();
    var nowTime = oDate.getTime(); //现在的毫秒数
    oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
    var targetDate = new Date(oDate.toLocaleDateString()); //得到当前时间
    run(targetDate);
});

function run(enddate) {
    getDate(enddate); //得到当前时间   
    setInterval("getDate('" + enddate + "')", 500); //建立一个额定时器每5毫秒获取当前时间

}

function getDate(enddate) {
    var oDate = new Date(); //获取日期对象

    var nowTime = oDate.getTime(); //现在的毫秒数
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime(); // 截止时间的毫秒数
    var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数
    var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400; //余数代表剩下的秒数；
    var hour = Math.floor(second / 3600); //整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
    var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];

    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;

}

//----------------------------------- 京东快报新闻滚动
let jdNewsListUl = document.querySelector(".jdNews-list ul")
let ntly = -19;
let slideNow1 = 0;
setInterval(() => {
    console.log(slideNow1);
    let ntly2 = ntly - 45 * slideNow1
    slideNow1++
    jdNewsListUl.style.transform = `translateY(${ntly2}px)`
    console.log(jdNewsListUl.style.transform);
    if (slideNow1 === 4) {
        slideNow1 = 0
    }
}, 2500);
//-----------------------------------为你推荐 + JSON
let rcListGoods = document.querySelector(".recommend-list")
json.forEach(e => {
    rcListGoods.innerHTML +=
        `
            <div class="recommend-list-goods">
                <div>
                    <img src="${e.image}">
                    <span>${e.title}</span>
                    <span><em>¥</em>${e.price}</span>
                    <span>找相似</span>
                </div>
                <div>
                    <img src="${e.image2}">
                    <span>${e.title2}</span>
                    <span><em>¥</em>${e.price2}</span>
                    <span>找相似</span>
                </div>
            </div>
        `
})