(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.umd = {})));
}(this, (function (exports) {

/*自动执行 rollup打包umd格式js模块
 
 * <script   data-parent="umd" data-umd="test" src="./js/all.js" type="text/javascript" charset="utf-8"></script>
 * */

(function () {
	window.onload = function () {
		var el_umds = document.querySelectorAll("script[data-umd]");
		for (var i = 0; i < el_umds.length; i++) {

			var parent = "umd";
			var el_umd = el_umds[i];
			if (el_umd) {

				var umd_str = el_umd.getAttribute("data-umd") || "";
				parent = el_umd.getAttribute("data-parent") || "umd";
				var arrs = umd_str.split(".");
				var prop1 = "";
				var prop2 = "";
				if (arrs.length >= 0) {
					prop1 = arrs[0];
				}

				if (arrs.length === 1) {
					prop2 = "init";
				} else if (arrs.length === 2) {
					prop2 = arrs[1];
				}

				var obj = window[parent];

				var fn = obj[prop1][prop2];

				if (typeof fn === "function") {
					fn();
				}
			}
		}
	};
})();

// src/foo.js

var test = {

	init: function init() {

		console.log("init");
	}
};

// src/foo2.js

function test3() {

	return function () {

		return "test000000";
	};
}

// src/foo2.js
function test2() {

	return test3;
}

exports.test = test;
exports.test2 = test2;

Object.defineProperty(exports, '__esModule', { value: true });

})));
