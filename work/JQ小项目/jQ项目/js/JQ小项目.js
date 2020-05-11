//1. 导航栏菜单----------------------------------------------------------------------------------------------------------------

//移进去就改变样式并且有下拉菜单
$("#nav>ul>li").hover(function() {
    $(this).find("div").stop(true, false).slideDown();
}, function() {
    $(this).find("div").stop(true, false).slideUp();
})

$('#login').on('click', function() {
    $('body').prepend('<div id="mask"></div>');
    $('#login_w').fadeIn(1000);
});

$('#close').on('click', function() {
    $('#login_w').fadeOut(1000);
    $('#mask').fadeOut(1000);
})

//2.轮播图

//3.con-Tab 点击切换

//4.con-item 鼠标浮上去会切换
$("#con-item>ul>li").mouseover(function() {
    if ($(this).next().hasClass("active")) {
        return
    } else {
        $("#con-item div:animated").stop(true, true);
        $(".item-con.active").animate({ "width": 0 }, 700).removeClass("active");
        $(this).next().animate({ "width": itemW }, 700).addClass("active");
    }
})