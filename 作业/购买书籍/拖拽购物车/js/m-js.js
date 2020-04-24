window.onload = function() {
    let aItems = document.querySelectorAll(".shop-list li");
    let oGoods = document.getElementById("goods");
    let totalPrice = document.querySelector(".total-price");
    // 当前购物车中的数据
    let shopCarData = [];
    // 存储当前选中的元素数据
    let current;
    // 获取拖拽元素的全部文本
    for (let i = 0; i < aItems.length; i++) {
        aItems[i].addEventListener("dragstart", function() {
            // 将文本分割为字符串存储进全局数组中
            current = this.innerText.split("\n");
        })
    }
    // 要先阻止dragover事件的默认行为才能使用drop事件
    oGoods.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    oGoods.addEventListener("drop", function() {
        let obj = {};
        let flag = false;
        // 将拖拽元素的信息存入一个临时对象
        obj["items-name"] = current[0];
        obj["items-price"] = current[1].slice(1);

        if (shopCarData.length !== 0) {
            shopCarData.forEach((element, index) => {
                    // 如果购物车数组里已经存在该对象则该对象的count+1
                    if (element["items-name"] === obj["items-name"]) {
                        element["items-count"] += 1;
                        flag = true;
                    }
                })
                // 如果不存在则添加进购物车数组
            if (!flag) {
                obj["items-count"] = 1;
                shopCarData.push(obj);
            }
        }
        // 如果购物车数组为空则直接添加
        else {
            obj["items-count"] = 1;
            shopCarData.push(obj);
        }
        // 计算总价
        totalPrice.innerText = "￥" + initShopCar(oGoods, shopCarData);
    });
    // 点击购物车中的物品则数量减一
    oGoods.addEventListener("click", function(ev) {
            if (ev.target.nodeName.toLowerCase() === "span") {
                // 根据自定义属性取到点击元素的下标
                let clickIndex = ev.target.parentNode["arr-index"];

                shopCarData[clickIndex]["items-count"]--;
                // 如果购物车中的物品数量已经小于0 则移除该项
                if (shopCarData[clickIndex]["items-count"] <= 0) {
                    shopCarData.splice(clickIndex, 1);
                }
                // 计算总价
                totalPrice.innerText = "￥" + initShopCar(oGoods, shopCarData);
            }
        })
        // 重绘购物车函数
    function initShopCar(parent, json) {
        // 记录总价
        let result = 0;
        // 每次重绘都先清空内容
        parent.innerHTML = "";

        json.forEach((element, index) => {
            let oItems = document.createElement("div");
            oItems.className = "items";
            // 用一个自定义属性标记该元素在数组对象中的下标,以便后续删除使用
            oItems["arr-index"] = index;
            oItems.style.opacity = 0;
            // 计算总价
            result += element["items-price"] * element["items-count"];

            for (let attr in element) {
                let oSpan = document.createElement("span");

                oSpan.className = attr;
                oSpan.innerText = element[attr];

                oItems.appendChild(oSpan);
            }
            startMove(oItems, { "opacity": 100 }, 10);
            parent.appendChild(oItems);
        })
        return result;
    }
};