/*公共模块*/

var common = (function() {
	$(function() {

		/*单击选择的全局样式  [data-click]*/
		$("[data-click]").on("click", function(event) {

			var isHasClass = $(this).hasClass("active");
			if(isHasClass) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}

		});
		$("[data-focus]").on("focus", function(event) {
			$(this).parent().addClass("active");
			$(this).parents(".form-gp").addClass("active");
			
		});

		$("[data-blur]").on("blur", function(event) {
			$(this).parent().removeClass("active");
			$(this).parents(".form-gp").removeClass("active");

		});

	})

})();

export {

	common
}