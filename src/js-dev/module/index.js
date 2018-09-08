/*index模块*/

var index = {
	init: function() {

		// 菜单height
		resetWindowHeight();
		$(window).resize(function(){
			resetWindowHeight();
		})

		function resetWindowHeight() {
			var window_h = $(window).height();
			var logo = $(".index-aside-logo").outerHeight();
			var nemu = $(".index-aside-nemu").outerHeight(window_h - logo);
			//console.log(window_h);
			
			
			var con_top = $(".index-cont-top").outerHeight();
			var cont_nav = $(".index-nav").outerHeight();
			var iframe_h=window_h -( con_top+cont_nav);
			$(".index-cont-iframe").height(iframe_h);
			//console.log(con_top+cont_nav);
			
			
		}

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
			if(src && src != "javascript:;") {
				$(".iframe-box").attr("src", src);
				$(this).parents("._nemu-2").find("dd").removeClass("active");

			}

		});

		// 三级菜单点击
		$(".index-aside-nemu ._nemu-2 dd").on("click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parents("._nemu-2").find("dd").removeClass("active");
			$(this).addClass("active");
			var src = $(this).find("a").attr("href") || "javascript:";
			$(".iframe-box").attr("src", src);

		});

	}
}

export {

	index
}