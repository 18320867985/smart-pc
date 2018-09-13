/*公共模块*/

var common = (function() {
	$(function() {

		/*单击div选择的全局样式  [data-click]*/
		$("[data-click]").on("click", function(event) {
			event.preventDefault();
			var isHasClass = $(this).hasClass("active");
			if(isHasClass) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}

		});
		$("[data-focus]").on("focus", function(event) {
			event.preventDefault();
			$(this).parent().addClass("active");
			$(this).parents(".form-gp").addClass("active");

		});

		$("[data-blur]").on("blur", function(event) {
			event.preventDefault();
			$(this).parent().removeClass("active");
			$(this).parents(".form-gp").removeClass("active");

		});

		/*  单击按钮 选择的全局样式  [data-btn-click]*/
		$("[data-btn-click]").on("click", function(event) {

			event.preventDefault();
			
			var isHasClass = $(this).hasClass("active");
			if(isHasClass) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}

			var primary = $(this).hasClass("btn-primary");
			if(isHasClass) {
				$(this).removeClass("btn-primary").addClass("btn-default");

			} else {
				$(this).removeClass("btn-default").addClass("btn-primary");
			}

		});

	})

})();

export {

	common
}