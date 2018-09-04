/**
 * iframe
 * **/

//

var iframe = (function($) {
	
	// 设置iframe 高度
	var _setHeight = function() {
		$(function(){
			var windows_h=$(document).height()+50;
		$(window.parent.document).find(".iframe-box").css("height",windows_h);
		//console.log($(document).height());
		});
		
	}
		
	return {
		setHeight:_setHeight
	}

})(window.jQuery);


export{
	iframe
	
}

