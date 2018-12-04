/**薪资UI/UE**/
$(function() {
	$('#myCarousel').carousel({
		interval: 5000
	});
});

$(function(){
	var divs = $(".jm");
	for(var i=0;i<divs.length;i++){
		$(divs[i]).mouseover(function(){
			$(this).css("background-color","#DA0927").css("color","white").css("border-radius","5px");
		});
		
		$(divs[i]).mouseout(function(){
			$(this).css("background-color","#f0f0f0").css("color","#000").css("border-radius","5px");
		});
	}
})
