(function(){
	
	//this指向谁 -> 谁调用它,它指向谁
	//哪个对象调用this所在的函数,这个this就指向这个对象.
	//this指向函数调用前面的那个对象.
	
	$.fn.tab = function(){
		
//		this指向tab调用前面的$('#tab1'),这时它是jq对象

//		缓存$('#tab1')
		let _this = this;

		this.find('.btn').on('click',function(){
			$(this).addClass('active').siblings('.btn').removeClass('active');
			//被点击的按钮的下标.
			let i = _this.find('.btn').index(this);
			//div切换逻辑.
			$(this).siblings('div').eq(i).show().siblings('div').hide();
		})
	}
	
})()
