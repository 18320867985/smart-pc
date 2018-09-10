/*status模块*/

var status = {
	init: function() {

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
				if(scroll_h <= h) {
					$(".scroll-slide", p).hide();
					return;
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

	status
}