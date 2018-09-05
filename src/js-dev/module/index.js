/*index模块*/

var index = {
	init: function() {

		// 一级菜单点击
		$(".index-aside-nemu ._nemu-1 ._nemu-item").on("click", function(event) {
			event.preventDefault();
			$(this).siblings().removeClass("active").find("img").attr("src", "images/nemu-1-df.png");
			$(this).addClass("active").find("img").attr("src", "images/nemu-1-1.png");;

		});

		// 二级菜单点击
		$(".index-aside-nemu ._nemu-2  ._nemu-item").on("click", function(event) {
			event.preventDefault();
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			var src = $(this).find(" dt a").attr("href");
			if(src) {
				$(".iframe-box").attr("src", src);
				
			}

		});

		// 三级菜单点击
		$(".index-aside-nemu ._nemu-2 dd").on("click", function(event) {
			event.preventDefault();
			$(this).parents("._nemu-2").find("dd").removeClass("active");
			$(this).addClass("active");
			var src = $(this).attr("href") || "javascript:";
			$(".iframe-box").attr("src", src);
			
		});

	}
}

export {

	index
}