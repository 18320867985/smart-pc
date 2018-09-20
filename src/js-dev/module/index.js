/*index模块*/

var index = {
	init: function() {

		// 菜单height
		resetWindowHeight();
		$(window).resize(function() {
			resetWindowHeight();
		})

		function resetWindowHeight() {
			var window_h = $(window).height();
			var logo = $(".index-aside-logo").outerHeight();
			var nemu = $(".index-aside-nemu,.index-aside-nemu ._nemu-2 ").outerHeight(window_h - logo);
			//console.log(window_h);

			var con_top = $(".index-cont-top").outerHeight();
			var cont_nav = $(".index-nav").outerHeight();
			var iframe_h = window_h - (con_top + cont_nav);
			$(".index-cont-iframe").height(iframe_h);
			//console.log(con_top+cont_nav);

		}

		// 一级菜单点击
		$(".index-aside-nemu ._nemu-1 ._nemu-item").on("click", function(event) {
				
			event.preventDefault();
			$(this).siblings().removeClass("active").find("img").attr("src", "images/nemu-1-df.png");
			$(this).addClass("active").find("img").attr("src", "images/nemu-1-1.png");
		

		});
		
		$(".index-aside-nemu ._nemu-1 ._nemu-item").on('shown.bs.tab', function (e) {
			setrScroll();
		})

		// 二级菜单点击
		$(".index-aside-nemu ._nemu-2  ._nemu-item").on("click", function(event) {
			event.preventDefault();
			if($(this).hasClass("active")){
				$(this).siblings().removeClass("active");
				$(this).removeClass("active");
			}else{
				$(this).siblings().removeClass("active");
				$(this).addClass("active");
			}
			
//			var src = $(this).find(" dt a").attr("href");
//			if(src && src != "javascript:;") {
//				$(".iframe-box").attr("src", src);
//				$(this).parents("._nemu-2").find("dd").removeClass("active");
//
//			}
			setrScroll();

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

		/*滚动条*/
		setrScroll();
		$(window).resize(function() {
			setrScroll();
		});

		function setrScroll() {

			$(".no-scroll-box").each(function() {
				var p = $(this);
				$(".no-scroll-bar", p).scroll(function() {
					var obj = $(this)[0];
					h = obj.clientHeight;
					scroll_h = obj.scrollHeight;
					scroll_t = obj.scrollTop;
					if(scroll_h <= h) {
						$(".scroll-slide", p).hide()
						return;
					} else {
						$(".scroll-slide", p).show();
					}

					var slide_h = scroll_h - h;
					var slide_sp = scroll_t / slide_h;
					var scroll_slide = $(".scroll-slide", p).height();
					var scroll_el_h = scroll_slide - $(".scroll-bar", p).height();

					$(".scroll-bar", p).css("top", scroll_el_h * slide_sp);

				});

				var obj = $(".no-scroll-bar", p)[0];
				var h = obj.clientHeight;
				var scroll_h = obj.scrollHeight;
				var scroll_t = obj.scrollTop;
				console.log(h)
				if(scroll_h <= h) {
					$(".scroll-slide", p).hide();
					return;
				} else {
					$(".scroll-slide", p).show();
				}

				var sp = h / scroll_h;
				var scroll_slide = $(".scroll-slide", p).height();
				$(".scroll-bar", p).height(sp * scroll_slide);

				var slide_h = scroll_h - h;
				var slide_sp = scroll_t / slide_h;
				var scroll_slide = $(".scroll-slide", p).height();
				var scroll_el_h = scroll_slide - $(".scroll-bar", p).height();

				$(".scroll-bar", p).css("top", scroll_el_h * slide_sp);

			});

		}

	}
}

export {

	index
}