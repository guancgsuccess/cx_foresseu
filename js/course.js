(function($) {
	$.fn.scrollTop = function(options) {
		var defaults = {
			speed: 30
		}
		var opts = $.extend(defaults, options);
		this.each(function() {
			var $timer;
			var scroll_top = 0;
			var obj = $(this);
			var $height = obj.find("ul.bc").height();
			obj.find("ul.bc").clone().appendTo(obj);
			obj.hover(function() {
				clearInterval($timer);
			}, function() {
				$timer = setInterval(function() {
					scroll_top++;
					if(scroll_top > $height) {
						scroll_top = 0;
					}
					obj.find("ul.bc").first().css("margin-top", -scroll_top);
				}, opts.speed);
			}).trigger("mouseleave");
		})
	}
})(jQuery);

$(function() {
	$(".box").scrollTop({
		speed: 30 //数值越大 速度越慢
	});
});


$(function(){
	var bulbs = $(".bulb");
	
	for(var i=0;i<bulbs.length;i++){
		$(bulbs[i]).mouseover(function(){
			$(this).find("img").attr("src","../img/bulb2.png");
		})
		
		$(bulbs[i]).mouseout(function(){
			$(this).find("img").attr("src","../img/bulb1.png");
		})
	}
});

$(function(){
	var bulbs=$('.bulb_div');
	for(var i=0;i<bulbs.length;i++){
		$(bulbs[i]).on('touchstart',function(){
			$(this).css({"color":"white","background-color":"#DA0927","padding":"5px","border-radius":"5px"});
       });
       $(bulbs[i]).on('touchend',function(){
			$(this).css({"color":"#000","background-color":"white","padding-left":"15px","border-radius":"0px"});
       });
	}
})
