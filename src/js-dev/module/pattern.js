/*pattren模块*/

var pattern = {
	init: function() {

		var vm = new Vue({
			el: ".app",
			data: {
				list: [{
						ck: false,
						id: 1,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 1,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 1,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					},
					{
						ck: false,
						id: 2,
						module: "模块名称",
						hsy: "询问事例",

					}
				]

			}

		});

		/*btn click style*/
		$(function() {

			// pattern-ttll
			$(".pattern-ttl1 a").on("click", function() {

				var p = $(this).parents(".pattern-ttl1");
				p.find("a").removeClass("active");
				$(this).addClass("active");
			});

			// pattern-ttl2
			$(".pattern-ttl2 a").on("click", function() {
				var p = $(this).parents(".pattern-ttl2");
				p.find("a").removeClass("active");
				var a = p.find("a");
				a.eq(0).css("z-index", 3);
				a.eq(1).css("z-index", 2);
				a.eq(2).css("z-index", 1);

				$(this).addClass("active");
				$(this).css("z-index", 9);

			});

		});

		/*场景总览*/
		$(".pattern-overview .pattern-ttl3 ._ck").click(function() {
			if(!$(this).hasClass("active")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}

		});

		/*滚动条*/
		$(".scroll-bar-box").each(function() {
			var p = $(this);
			$(".no-scroll-bar", p).scroll(function() {
				var obj = $(this)[0];
				var h = obj.clientHeight;
				var scroll_h = obj.scrollHeight;
				var scroll_t = obj.scrollTop;
				if(scroll_h < h) {
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
			if(scroll_h < h) {
				return;
			}

			var sp = h / scroll_h;
			var scroll_slide = $(".scroll-slide", p).height();
			$(".scroll-bar", p).height(sp * scroll_slide)
			console.log(scroll_h);

		});

	}

}

export {

	pattern
}