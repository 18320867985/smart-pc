/**
 * iframe
 * **/

//

var iframe = (function($) {

	// 设置iframe 高度
	var _setHeight = function() {
		$(function() {
			set(true);

		});
		
	}
		
		function set(bl) {
			var p_w=$(window.parent.document).find(".index-cont-iframe").height()-4;
			$(window.parent.document).find(".iframe-box").css("height", p_w);
			$(window.parent.document).find(".iframe-box").css("width", 0);
			var window_h = $("body").height();
			var window_w = $("body").width();
			
			if(window_h>p_w&&bl){
				
				$(window.parent.document).find(".iframe-box").css("height", window_h);
				$(window.parent.document).find(".iframe-box").css("width", window_w);
			}else{
				$(window.parent.document).find(".iframe-box").css("height", 0);
				$(window.parent.document).find(".iframe-box").css("height", window_h);
				$(window.parent.document).find(".iframe-box").css("width", window_w);
			}
			
			console.log(window_h)
		}

	

	return {
		setHeight: _setHeight
	}

})(window.jQuery);

export {
	iframe

}