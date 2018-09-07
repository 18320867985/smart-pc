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

					}
				]

			}

		});

		/*btn click style*/
		$(function() {
			
			// pattern-ttll
			$(".pattern-ttl1 a").on("click", function() {
				
				var p=$(this).parents(".pattern-ttl1");
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
		$(".pattern-overview .pattern-ttl3 ._ck").click(function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
			
		});
		

	}

}

export {

	pattern
}