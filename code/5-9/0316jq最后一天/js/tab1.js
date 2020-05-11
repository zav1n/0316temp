(function(){

	$.fn.tab = function(config){
		
		//获取this的选择器字符串。
		let selector = this.selector;
		
		//如果没有durations，s就是0
		//如果有，s就是duration
		
		if(!$.isPlainObject(config)&&config){
			$.error('玛德制杖，参数要json对象，不要把其他的东西传进来')
		}
		
		//默认参数。
		let data = {
			duration:0
		}
		
		//用实参替换默认参数。
		$.extend(data,config);
		
		//获取参数时间。
		let {duration:s} = data;
		
		$(`${selector}>.btn`).on('click',function(){
			$(this).addClass('active').siblings('.btn').removeClass('active');
			//被点击的按钮的下标.
			let i = $(this).index(`${selector}>.btn`);
			//div切换逻辑.
			$(`${selector}>div`).eq(i).fadeIn(s).siblings('div').fadeOut(s);
		})
				
	}
	
})()
