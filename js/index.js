$(function() {
	$('#myCarousel').carousel({
		interval: 2000
	});
	$('#myCarousel2').carousel({
		interval: 2000
	})
});

$(function() {
	var st;
	var v = $(".question_left_child");
	for(var i = 0; i < v.length; i++) {
		$(v[i]).mouseover(function() {
			clearTimeout(st);
			that=this;
			st = setTimeout(function() {
				//修改当前鼠标滑入样式
				$(that).css("background-color", "#DA0927").css("color", "white");

				//修改其他样式
				for(var j = 0; j < v.length; j++) {
					if($(that).index() != j) {
						$(v[j]).css("background-color", "white").css("color", "#000")
					}
				}

				//更改内容...
				var arr = $(".cc");
				var obj = arr[$(that).index()];
				for(var i = 0; i < arr.length; i++) {
					$(arr[i]).hide();
				}
				$(arr[$(that).index()]).fadeIn("1000");

				var arr2 = $(".t2");
				for(var i = 0; i < arr2.length; i++) {
					$(arr2[i]).removeClass("t2");
				}
			}, 300);
			
		});
	}
});

$(function(){
	var bulbs=$('.right_content');
	for(var i=0;i<bulbs.length;i++){
		$(bulbs[i]).on('touchstart',function(){
			$(this).css({"color":"white","background-color":"#DA0927","padding":"5px","border-radius":"5px"});
       });
       $(bulbs[i]).on('touchend',function(){
			$(this).css({"color":"#000","background-color":"white","padding-left":"15px","border-radius":"0px"});
       });
	}
});
$(function() {
	var swiper = new Swiper('.banner', {
		autoplay:{
			disableOnInteraction:false,
			delay:3000
		},
		 lazy: {
		    loadPrevNext: true
		 },
	});
	
	var swipers = new Swiper('.banner2', {
		 lazy: {
		    loadPrevNext: true,
		 },
		 pagination:{
		    el: '.swiper-pagination',
		    hideOnClick :true,
		     clickable :true
		  },
	});
	
	var swipers2 = new Swiper('.banner3', {
		autoplay:{
			disableOnInteraction:false,
			delay:3000
		},
		 lazy: {
		    loadPrevNext: true,
		  }
	});
});
	
	
  $(function() {
      $("img.lazy").lazyload({effect: "fadeIn",
      threshold: 200});
  });