function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}

function delCookie(name) {
	var date = new Date();
	date.setTime(date.getTime() - 10000);
	document.cookie = name + "=a  ; expires=" + date.toGMTString();
}

if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
} else {

	var isclose = getCookie('isclose');

	$(".tanchang .tc_close").one("click", function() {
		$(".tanchang").hide();
	});

	if(isclose != null && isclose != "") {
		$(".tanchang").stop().animate({
			"width": "280px",
			"height": "188px",
			"right": 0,
			"margin-right": "5px",
			"bottom": 0,
			"margin-bottom": "5px"
		}, 600);
		//		$(".tanchang .tc_close").one("click", function(){
		//			$(".tanchang").hide();
		//		});
	} else {
		setTimeout(function() {
			$(".tanchang").stop().animate({
				"margin-bottom": "-252px"
			}, 800);
		}, 1000)
	}
	$(".tanchang .tc_close").click(function() {
		setCookie("isclose", 1, 1);
		$(".tanchang").stop().animate({
			"width": "280px",
			"height": "188px",
			"right": 0,
			"margin-right": "5px",
			"bottom": 0,
			"margin-bottom": "5px"
		}, 600);
	});
	setTimeout(function() {
		setCookie("isclose", 1, 1);
		$(".tanchang").stop().animate({
			"width": "280px",
			"height": "188px",
			"right": 0,
			"margin-right": "5px",
			"bottom": 0,
			"margin-bottom": "5px"
		}, 600);
	}, 3000)
}