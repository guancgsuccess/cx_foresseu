$(function(){
	var v = $(".goodChange");
	for(var i=0;i<v.length;i++){
		
		$(v[i]).mouseover(function(){
			//获取上一个兄弟节点
			$(this).prev().find("img").attr("src","../img/good1.png");
		})
		
		$(v[i]).mouseout(function(){
			//获取上一个兄弟节点
			$(this).prev().find("img").attr("src","../img/good2.png");
		})
	}
});
  $(function() {
      $("img.lazy").lazyload({effect: "fadeIn"});
  });
