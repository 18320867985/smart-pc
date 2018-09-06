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

	}
}

export {

	pattern
}