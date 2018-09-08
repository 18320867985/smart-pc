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
		
	}
		
		function set(bl) {
			var window_h = $(document).outerHeight(true);
			$(window.parent.document).find(".iframe-box").css("height", 0);
			$(window.parent.document).find(".iframe-box").css("height", window_h);		
			console.log(window_h)
		}

	return {
		setHeight: _setHeight
	}

})(window.jQuery);

export {
	iframe

}