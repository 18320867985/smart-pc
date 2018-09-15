/*弹框模块*/

var pop = function(el) {

	var mask = $(el);
	mask.toggleClass("active");

	mask.off("click");
	mask.click(function(event) {

		mask.toggleClass("active");

	});

	mask.find(".pop-box").on("click", function(event) {
		event.stopPropagation()

	});
}
export {

	pop
}