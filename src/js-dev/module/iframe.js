/**
 * iframe
 * **/

//

var iframe = (function($) {

	// 设置iframe 高度
	var _setHeight = function() {
		$(function() {
			set();

		});

		function set() {
			var window_h = $(document).height() + 50;
			var window_w = $(document).width();
			$(window.parent.document).find(".iframe-box").css("height", window_h);
			$(window.parent.document).find(".iframe-box").css("width", window_w);
		
		}

	}

	return {
		setHeight: _setHeight
	}

})(window.jQuery);

export {
	iframe

}