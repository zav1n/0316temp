//获取样式表中的样式
function getStyle(obj ,name){
	if(obj.currentStyle)
		return obj.currentStyle[name];

	else
		return getComputedStyle(obj ,false)[name];
};

function startMove(obj ,json ,rate ,fnEnd){
	clearInterval(obj.timer)
		obj.timer = setInterval(function(){
			//定义一个布尔 表示json中的数据是否全都到了给定的值
			let bStop = true;

			for(let attr in json)
			{
				let currentValue
				if(attr === "opacity")
					currentValue = Math.round(parseFloat(getStyle(obj ,attr)) * 100);
				else
					currentValue = parseInt(getStyle(obj ,attr));

				let speed = (json[attr] - currentValue) / rate;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if(attr === "opacity")
				{
					obj.style.filter = "alpha(opacity:" + (currentValue + speed) +")";
					obj.style.opacity = (currentValue + speed) / 100;
				}
				else
					obj.style[attr] = currentValue + speed + "px";
				//如果有变量的值没到达 则不关闭定时器
				if(currentValue !== json[attr])
					bStop = false;

			};

			if(bStop)
			{
				clearInterval(obj.timer);
				if(fnEnd)
					fnEnd();
			}
		} ,30);
};