$(function() {
    //点击全选
    let flat = true
    $("input[class='checkall']").click(function() {
        if (flat) {
            flat = false
            $("input[class='j-checkbox']").prop("checked", true)
            let obj = getChatItem($(this))
            changeSum(obj.$count, obj.$price, obj.$sum)
            calcTotal()
        } else {
            flat = true
            $("input[class='j-checkbox']").prop("checked", false)

            $(".price-sum em").text(`¥0`)
        }
    });
    //单点商品的选择框
    $(".j-checkbox").click(function() {
            console.log('点击了');
            let obj = getChatItem($(this))
            changeSum(obj.$count, obj.$price, obj.$sum)
            calcTotal()
        })
        //点击增加 + 
    $(".increment").click(function() {
        //在+的同级找到文本框的值，val有两个参数,i不能删掉，因为要获取当前哪个文本框
        $(this).siblings(".itxt").val(function(i, v) {
            return ++v
        })
        let obj = getChatItem($(this))
        changeSum(obj.$count, obj.$price, obj.$sum)
    });
    //点击减少 - 
    $(".decrement").click(function() {
        //在+的同级找到文本框的值，val有两个参数
        $(this).siblings(".itxt").val(function(i, v) {
            if (v > 1) return --v
            return v
        })
        let obj = getChatItem($(this))
        changeSum(obj.$count, obj.$price, obj.$sum)
    });
    //输入框数量监听
    $(".itxt").change(function() {
        let obj = getChatItem($(this))
        changeSum(obj.$count, obj.$price, obj.$sum)
    })

    function changeSum($count, $price, $sum) {
        let sum = getSum(getCount($count), getPrice($price))
        calcTotal()
        $sum.text(`¥${sum.toFixed(2)}`)
    }
    //得到数量
    function getCount($count) {
        return $count.val()
    }
    //得到价格
    function getPrice($price) {
        return $price.text().slice(1)
    }
    //得到总价
    function getSum(count, price) {
        return Number((count * price).toFixed(2))
    }

    //计算总价

    function calcTotal() {
        let total = 0;
        $(".cart-item").has(".j-checkbox:checked").each(function(index, domEle) {
                let obj = getChatItem($(domEle)); //所有的对象
                let sum = getSum(getCount(obj.$count), getPrice(obj.$price)) //小记价格
                total += sum
            })
            // 渲染总价
        $(".price-sum em").text(`¥${total.toFixed(2)}`)
    }

    //删除按钮
    $(".p-action a").click(function() {
        let obj = getChatItem($(this))
        $(obj.$parent).remove();
        calcTotal()
    });
    //清空购物车
    $(".clear-all").click(function() {
        $(".cart-item-list").empty()
        calcTotal()
    });
    //删除选中的商品
    $(".remove-batch").click(function() {
            $(".cart-item input:checkbox:checked").parents(".cart-item").remove();
            calcTotal()
        })
        //选中商品
    $(".cart-item").click(function() {
        $(this).addClass("check-cart-item").siblings().removeClass("check-cart-item")
    })

    function getChatItem($ele) {
        let $parent;
        if ($ele.hasClass("cart-item")) {
            $parent = $ele
        } else {
            $parent = $(".cart-item").has($ele)
        }
        return {
            $parent: $(".cart-item").has($ele),
            $price: $parent.children(".p-price"),
            $count: $parent.find(".itxt"),
            $decrement: $parent.find(".decrement"),
            $increment: $parent.find(".increment"),
            $sum: $parent.find(".p-sum"),
            $delete: $parent.find(".p-action a"),
            $checkInput: $parent.find(".cart-item .j-checkbox")
        }
    }
})