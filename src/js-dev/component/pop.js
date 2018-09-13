/*弹框模块*/

var pop = function(el) {

		var mask = $(el);
		if(mask.hasClass("active")) {
			mask.removeClass("active");
		} else {
			mask.addClass("active");
	
		}
		
		mask.off("click");
		mask.click(function(event) {
	
			if(mask.hasClass("active")) {
				mask.removeClass("active");
			} else {
			mask.addClass("active");
	
			}
			
	
		});
	
		mask.find(".pop-box").on("click", function(event) {
			event.stopPropagation()
	
		});
}
export {

	pop
}

