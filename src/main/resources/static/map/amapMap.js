function runstate(obj, url, className) {
	$("#home_content").html("");
	$("#home_map").css({
		"width" : "100vw",
		"height" : "92vh",
		"left" : "0"
	});
	$("#home_map").show();
	$(obj).addClass("header_menu_click");
	$(obj).siblings().removeClass("header_menu_click");
}

// 地图界面start
var emmsModule = (function(app, lib) {
	var emms = angular.module("emmsApp", [ 'amap' ]);
	emms.config([ 'amapServiceProvider', function(provider) {
		provider.setKey('b62e7b517c9b78eb2a90c1c4d0465647');
	} ]);
	emms.controller('mapCtrl', [ '$scope','$interval', function($scope,$interval) {
		// 地图配置
		$scope.options = {
			center : {
				lng : 106.502387,
				lat : 29.574582,
			},
			zoom : 13,
			layers : [ {
				type : 'default'
			} ],
			/* bounds : [ [ 102.743566, 27.42118 ], [ 110.150719, 31.742142 ] ], */
			mapStyle : 'amap://styles/b4dbe0b2d7e52af85ecf5a333bbf1073'
		};

		$scope.baseControl = {
			position : 'rb',
			theme : 'my-map-control-theme'
		};
		$scope.lines = mapData;
		$scope.zoom = 13;
		$scope.vehicles = mapVehicleData;
		var timer = $interval(function(){
			var random = Math.ceil(Math.random()*7);
			var vehicles1 = [];
			for(var i = 0,size = random;i < size;i++){
				vehicles1.push(mapVehicleData[i]);
			}
			$scope.vehicles = vehicles1;
		},10000);
		timer.then(function(){
				console.log("1");
			},
			function(){
				console.log("2");
		});
		/* $scope.vehicleGroups = mapGroup; */
		$scope.showInfo = function (number, infoWindow, map){
		  infoWindow.setContent("<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>");
		}
	}])
}(emmsModule || {}));
// 地图界面end

/*
 * var mapGroup = [ { "number" : 95270, "lng" : 106.5722429752, "lat" :
 * 29.5772363402 }, { "number" : 95271, "lng" : 106.4778614044, "lat" :
 * 29.6289055594 }, { "number" : 95272, "lng" : 106.5206936002, "lat" :
 * 29.666180019 }, { "number" : 95273, "lng" : 106.4975568652, "lat" :
 * 29.7313982293 },// { "number" : 95274, "lng" : 106.5607309341, "lat" :
 * 29.5846992833 }, { "number" : 95275, "lng" : 106.5495783091, "lat" :
 * 29.5842500388 }, { "number" : 95276, "lng" : 106.5409469604, "lat" :
 * 29.5880067437 }, { "number" : 95277, "lng" : 106.5314278007, "lat" :
 * 29.5868108924 },// { "number" : 95278, "lng" : 106.5021836758, "lat" :
 * 29.5835575079 }, { "number" : 95279, "lng" : 106.4988416433, "lat" :
 * 29.599730794 }, { "number" : 00001, "lng" : 106.4982113242, "lat" :
 * 29.6225704458 }, { "number" : 00002, "lng" : 106.4809888601, "lat" :
 * 29.623486545 },// { "number" : 00003, "lng" : 106.4779096842, "lat" :
 * 29.6289144191 }, { "number" : 00004, "lng" : 106.4914682508, "lat" :
 * 29.6823421421 }, { "number" : 00005, "lng" : 106.4873832464, "lat" :
 * 29.6927373637 }, { "number" : 00006, "lng" : 106.4964383841, "lat" :
 * 29.6927373637 },// // { "number" : 00007, "lng" : 106.4938634634, "lat" :
 * 29.719733072 }, { "number" : 00008, "lng" : 106.4971706271, "lat" :
 * 29.7327544683 }, { "number" : 00009, "lng" : 106.475943625, "lat" :
 * 29.7381659657 }, { "number" : 00010, "lng" : 106.4097681642, "lat" :
 * 29.7821844608 },// { "number" : 00011, "lng" : 106.3972958922, "lat" :
 * 29.7951930904 }, { "number" : 00012, "lng" : 106.3980764151, "lat" :
 * 29.8016506868 }, { "number" : 00013, "lng" : 106.4092826843, "lat" :
 * 29.8096585608 }, { "number" : 00014, "lng" : 106.4265587926, "lat" :
 * 29.818590353 },// { "number" : 00015, "lng" : 106.4340770245, "lat" :
 * 29.8218042532 } ];
 */

var mapVehicleStatus = {
	"95270 上" : 1,
	"95271 下" : 1,
	"95272 上" : 2,
	"95273 下" : 1,
	"95274 上" : 1,
	"95275 下" : 3,
	"95276 下" : 1,
};

var mapVehicleData = [
		{
			"number" : "95270 上",
			"lng" : 106.5722429752,
			"lat" : 29.5772363402,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ0M0JFQjRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ0M0JFQzRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1RDQzQkU5NEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1RDQzQkVBNEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dTCUYQAAAgZJREFUeNqslM1LFVEUwM+debmQ0D6MMHdBLVrYrmVgy/4AyYo+oCyNCtq0a9dCooXYQtRdEVK5FIJHyqOPhRRBEREuRCktKHvVE5N6nn7Xd27vOQyP58fAb+6cmXN+987cO1ck/WiEC5CFb7AMCvMwBpdgh9R4nID3JqjGJJypJnLQV4MoySDEacI765AFhpKyYxuQBc6uvGa9SMNvkdd89b3B3lLxDkVr56DZrv8CNbK1YkTkz34RaZU9Ip1xRU+dTjRPOw0fYRFuwTX4ZfFtciacW4k9BXhHvD1yV718PMiaSfxB28XDjthpb+R0gfiodUKSvuH6JvfV4sBpanA888J8ED4k+T5tD+1bip44nyg64sqF57k/lZBlSzLPTwmyNvhKYbsVn4RDcMOVRjMaiV6PSp0F0SvkA1Gk+1dPjmgGPsBlko/EsT7PRMo60GEr9N+pDnYiXzDhEuwrj+w/GT/MK04a8oR9/laxKHxLaQ/jt2ML9EC9luIh52RSNbn8CnJAJPeHXl9CPz0MwAQ8hkc2Qj+Lx115Igpct0QubS2+yLSKPMipHPbr7qB1s+ifwJKttXl7lrVdYpTaT8upv++IP22D6U34Uz7DrmA+tQnCi8nhDm5Adi/t/WPbNdYquwt11fbFczBVg2gGumvdtZvA/+g5m+Qg+Q5Pgb1CdqcV/hNgAP2GZ5135cJ8AAAAAElFTkSuQmCC",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95271 下",
			"lng" : 106.4778614044,
			"lat" : 29.6289055594,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODMyM0NBMTRGOTIxMUU4QUQ1QkI5OUEyQkI2Nzk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODMyM0NBMjRGOTIxMUU4QUQ1QkI5OUEyQkI2Nzk1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4MzIzQzlGNEY5MjExRThBRDVCQjk5QTJCQjY3OTU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4MzIzQ0EwNEY5MjExRThBRDVCQjk5QTJCQjY3OTU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+L/ZTlQAAAllJREFUeNqslF9IU1Ecx79nm3sYYqVFTd8CFXyYPvko6KOv0hASLbKV1YiEevTJBy2hQJ9cPtVCRj6VL9ofVmYgi5ogIXsYrcws1KkTFXTffndnt+UcY6UXPrv37J7zOb9zf79zgNzXMeGKMCksC0mBworwSrgulKLA67zwOS3IR0S4kE+khMECRNn4BGsu4dB/yEweZstaDyEzuZhapsOBku1tfEwmcda0V1TIGtKL2NvT98VFwOnUz7u7gIxBcXEmIun/fWkJLpSXwyONPzN5LoPxOBiLgd++gltb4L27YPctcGNDtwcGwJkZlWobJBLg3JziiVJ105C/NmXOM+DaGtjVpdjqVnxwX3FzE2xu1pOQ4GwY7O1Vqee/6ehQhmPKEMZNYSAAPvGDfX0ycFbx5Qvp2A6OPc0M7LykGI3ul01MKHOF6zBljY3gr5+g+5zu1NYG1teDPT06mufPwDu3wf7+jCgUsnB42MKqqn3JAW02cH4e9N4Am5qsfDdlpc8Hjo7qgcZ3stvBsjLjE+gJJCmsrFQHsm0zwvR6VUl8lRgcSuU1lU23W16sZ7JYVARIdHA4UkFgZEQhEmF2+SVUTQ2C4U9oCIeB0AfAYgHq6mTTyq6V7KGlBZDEwONR8Pu1QKJEdTWwsHBA+N7mciEQfIMGo+5qa/W/UhqYngZ2dnStrSzrd5NyVEi9YnycIsu5fceMn+PClyPYKT+EU6a5/QiEV7PD9R1C9jjX+q3pU+NfZY8Ee75zsVOIFiCKCdcKPbVPCsZGD6aPfVOyKrwVuoXTuQb+FmAACU2j+v/BuFgAAAAASUVORK5CYII=",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95272 上",
			"lng" : 106.5206936002,
			"lat" : 29.666180019,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOTJDOUU3RDRGOTIxMUU4OTBGRkM2MDQzNDc2NkE4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyOTJDOUU3RTRGOTIxMUU4OTBGRkM2MDQzNDc2NkE4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI5MkM5RTdCNEY5MjExRTg5MEZGQzYwNDM0NzY2QThCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI5MkM5RTdDNEY5MjExRTg5MEZGQzYwNDM0NzY2QThCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rqq7kwAAAgtJREFUeNqslE1IVUEUx8+ZURcWGlpk2SoQWrVsHbWJtkUUgn3Qh2RQROs2LSoXQfSdtcpF4TJo0Sf2BUVQEWFgoBlIBeWjnmVRnn7jm3t93S6PV/ouv3tnzpzznznvzIxI/q8RdsEN+AiTYPAJbkMXNEmVv3YYiAKVGIQtlYQUTlQhlKUHfJ7gyf8QS7iQFds4A7GErUmaDfAUlqbyrWVJ/IrfUVgc2z9hAuaWLcnj8V6Wh+bO8pl0h5oW1GSY/gh8g27Yh+1Lqa/d+DyK/UAR20tsTbo3CN5JxVpwKoi5Tmdugzd3zJWc12Afw4dHn6u5Q84k8+hmDRr3g2AhFbzCLL1wGF7gcItvB/RpGui2ITaUEbuuSYafJU13JQMfCF4fg9thBbaD9CcRusqqDzjTI2XiT7CdY4K2P4rDqwZeEdyl5ld58w+8yXlsl2No+J/qGG9GbDwKTtBv07+qXROWqXu0ISRup4yiUtZFlH+dio3bdBVr4SjUl2x6kfFBy26/osgy6dcfpPoYTsPZUgX1GrP3xRWGwmyaTlWLjLdq3l586GW1zJFmWTt1/JdAC3yHu/A27sNnrKieLfuV9ms4Q/um5Z224+E1D97Mwkl5BwsS5Y5ZEOzMLrdnBmK9efn7eGv8q9glqKt0L26HoSqERmB3tbf2fAgHvT9e+4nIGNyD/bAwL/C3AAMAwsplf+LLS0EAAAAASUVORK5CYII=",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95273 下",
			"lng" : 106.4975568652,
			"lat" : 29.7313982293,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ0M0JFQjRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ0M0JFQzRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1RDQzQkU5NEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1RDQzQkVBNEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dTCUYQAAAgZJREFUeNqslM1LFVEUwM+debmQ0D6MMHdBLVrYrmVgy/4AyYo+oCyNCtq0a9dCooXYQtRdEVK5FIJHyqOPhRRBEREuRCktKHvVE5N6nn7Xd27vOQyP58fAb+6cmXN+987cO1ck/WiEC5CFb7AMCvMwBpdgh9R4nID3JqjGJJypJnLQV4MoySDEacI765AFhpKyYxuQBc6uvGa9SMNvkdd89b3B3lLxDkVr56DZrv8CNbK1YkTkz34RaZU9Ip1xRU+dTjRPOw0fYRFuwTX4ZfFtciacW4k9BXhHvD1yV718PMiaSfxB28XDjthpb+R0gfiodUKSvuH6JvfV4sBpanA888J8ED4k+T5tD+1bip44nyg64sqF57k/lZBlSzLPTwmyNvhKYbsVn4RDcMOVRjMaiV6PSp0F0SvkA1Gk+1dPjmgGPsBlko/EsT7PRMo60GEr9N+pDnYiXzDhEuwrj+w/GT/MK04a8oR9/laxKHxLaQ/jt2ML9EC9luIh52RSNbn8CnJAJPeHXl9CPz0MwAQ8hkc2Qj+Lx115Igpct0QubS2+yLSKPMipHPbr7qB1s+ifwJKttXl7lrVdYpTaT8upv++IP22D6U34Uz7DrmA+tQnCi8nhDm5Adi/t/WPbNdYquwt11fbFczBVg2gGumvdtZvA/+g5m+Qg+Q5Pgb1CdqcV/hNgAP2GZ5135cJ8AAAAAElFTkSuQmCC",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95274 上",
			"lng" : 106.5975568652,
			"lat" : 29.6313982293,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ0M0JFQjRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ0M0JFQzRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1RDQzQkU5NEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1RDQzQkVBNEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dTCUYQAAAgZJREFUeNqslM1LFVEUwM+debmQ0D6MMHdBLVrYrmVgy/4AyYo+oCyNCtq0a9dCooXYQtRdEVK5FIJHyqOPhRRBEREuRCktKHvVE5N6nn7Xd27vOQyP58fAb+6cmXN+987cO1ck/WiEC5CFb7AMCvMwBpdgh9R4nID3JqjGJJypJnLQV4MoySDEacI765AFhpKyYxuQBc6uvGa9SMNvkdd89b3B3lLxDkVr56DZrv8CNbK1YkTkz34RaZU9Ip1xRU+dTjRPOw0fYRFuwTX4ZfFtciacW4k9BXhHvD1yV718PMiaSfxB28XDjthpb+R0gfiodUKSvuH6JvfV4sBpanA888J8ED4k+T5tD+1bip44nyg64sqF57k/lZBlSzLPTwmyNvhKYbsVn4RDcMOVRjMaiV6PSp0F0SvkA1Gk+1dPjmgGPsBlko/EsT7PRMo60GEr9N+pDnYiXzDhEuwrj+w/GT/MK04a8oR9/laxKHxLaQ/jt2ML9EC9luIh52RSNbn8CnJAJPeHXl9CPz0MwAQ8hkc2Qj+Lx115Igpct0QubS2+yLSKPMipHPbr7qB1s+ifwJKttXl7lrVdYpTaT8upv++IP22D6U34Uz7DrmA+tQnCi8nhDm5Adi/t/WPbNdYquwt11fbFczBVg2gGumvdtZvA/+g5m+Qg+Q5Pgb1CdqcV/hNgAP2GZ5135cJ8AAAAAElFTkSuQmCC",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95275 下",
			"lng" : 106.4275568652,
			"lat" : 29.7013982293,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ0M0JFQjRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ0M0JFQzRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1RDQzQkU5NEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1RDQzQkVBNEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dTCUYQAAAgZJREFUeNqslM1LFVEUwM+debmQ0D6MMHdBLVrYrmVgy/4AyYo+oCyNCtq0a9dCooXYQtRdEVK5FIJHyqOPhRRBEREuRCktKHvVE5N6nn7Xd27vOQyP58fAb+6cmXN+987cO1ck/WiEC5CFb7AMCvMwBpdgh9R4nID3JqjGJJypJnLQV4MoySDEacI765AFhpKyYxuQBc6uvGa9SMNvkdd89b3B3lLxDkVr56DZrv8CNbK1YkTkz34RaZU9Ip1xRU+dTjRPOw0fYRFuwTX4ZfFtciacW4k9BXhHvD1yV718PMiaSfxB28XDjthpb+R0gfiodUKSvuH6JvfV4sBpanA888J8ED4k+T5tD+1bip44nyg64sqF57k/lZBlSzLPTwmyNvhKYbsVn4RDcMOVRjMaiV6PSp0F0SvkA1Gk+1dPjmgGPsBlko/EsT7PRMo60GEr9N+pDnYiXzDhEuwrj+w/GT/MK04a8oR9/laxKHxLaQ/jt2ML9EC9luIh52RSNbn8CnJAJPeHXl9CPz0MwAQ8hkc2Qj+Lx115Igpct0QubS2+yLSKPMipHPbr7qB1s+ifwJKttXl7lrVdYpTaT8upv++IP22D6U34Uz7DrmA+tQnCi8nhDm5Adi/t/WPbNdYquwt11fbFczBVg2gGumvdtZvA/+g5m+Qg+Q5Pgb1CdqcV/hNgAP2GZ5135cJ8AAAAAElFTkSuQmCC",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		},
		{
			"number" : "95276 下",
			"lng" : 106.6975568652,
			"lat" : 29.3313982293,
			"image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ0M0JFQjRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ0M0JFQzRGOTIxMUU4OURDOUJGRjlBMkU2NUQyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1RDQzQkU5NEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1RDQzQkVBNEY5MjExRTg5REM5QkZGOUEyRTY1RDJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dTCUYQAAAgZJREFUeNqslM1LFVEUwM+debmQ0D6MMHdBLVrYrmVgy/4AyYo+oCyNCtq0a9dCooXYQtRdEVK5FIJHyqOPhRRBEREuRCktKHvVE5N6nn7Xd27vOQyP58fAb+6cmXN+987cO1ck/WiEC5CFb7AMCvMwBpdgh9R4nID3JqjGJJypJnLQV4MoySDEacI765AFhpKyYxuQBc6uvGa9SMNvkdd89b3B3lLxDkVr56DZrv8CNbK1YkTkz34RaZU9Ip1xRU+dTjRPOw0fYRFuwTX4ZfFtciacW4k9BXhHvD1yV718PMiaSfxB28XDjthpb+R0gfiodUKSvuH6JvfV4sBpanA888J8ED4k+T5tD+1bip44nyg64sqF57k/lZBlSzLPTwmyNvhKYbsVn4RDcMOVRjMaiV6PSp0F0SvkA1Gk+1dPjmgGPsBlko/EsT7PRMo60GEr9N+pDnYiXzDhEuwrj+w/GT/MK04a8oR9/laxKHxLaQ/jt2ML9EC9luIh52RSNbn8CnJAJPeHXl9CPz0MwAQ8hkc2Qj+Lx115Igpct0QubS2+yLSKPMipHPbr7qB1s+ifwJKttXl7lrVdYpTaT8upv++IP22D6U34Uz7DrmA+tQnCi8nhDm5Adi/t/WPbNdYquwt11fbFczBVg2gGumvdtZvA/+g5m+Qg+Q5Pgb1CdqcV/hNgAP2GZ5135cJ8AAAAAElFTkSuQmCC",
			"labelOffset" : {
				"x" : 2,
				"y" : 20
			},
			"markerOffset" : {
				"x" : -10,
				"y" : -10
			},
			"info" : "<table class='table' style='margin: 0 1em 0;background:#F1FAFA;'>"
					+ "<thead><tr><th colspan='4' th:text='95270' class='text-center'>95270</th></tr>"
					+ "</thead><tbody><tr style='border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>驾驶模式:</td><td>人工</td><td>车门状态:</td><td>锁死</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'><td>"
					+ "下一站:</td><td>尖顶坡</td><td>当前站:</td><td>大学城</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>速度:</td><td>54km/h</td><td>离站距离:</td><td>1326m</td></tr><tr style='"
					+ "border-right: 0.01em solid #DDDDDD; border-left: 0.01em solid #DDDDDD;'>"
					+ "<td>轻微故障:</td><td>2个</td><td>严重故障:</td><td>0个</td></tr><tr>"
					+ "<td onClick='clickMapVehicle(this,`95270`)' colspan='4' class='text-center'"
					+ "style='cursor: pointer; color: #3C3CF8; font-weight: 600; font-size: 1.3em;'>"
					+ "运行状态</td></tr></tbody></table>"
		}];

var mapData = [ {
	"id" : 3,
	"name" : "六号线",
	"stations" : [ {
		"id" : 49,
		"name" : "茶园站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.6438962086,
				"lat" : 29.4882191985
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6436077671,
				"lat" : 29.4873694167
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6429693855,
				"lat" : 29.4881762506
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.642601523,
				"lat" : 29.4878495091
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.6438962086,
				"lat" : 29.4882191985
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6436077671,
				"lat" : 29.4873694167
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6429693855,
				"lat" : 29.4881762506
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.642601523,
				"lat" : 29.4878495091
			}
		} ],
		"origin" : {
			"lng" : 106.643313,
			"lat" : 29.48786102
		},
		"isShow" : true,
		"distance" : 412
	}, {
		"id" : 50,
		"name" : "邱家湾站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.6498707878,
				"lat" : 29.497518842
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.650559906,
				"lat" : 29.4980250678
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6502609389,
				"lat" : 29.4988773257
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.649398876,
				"lat" : 29.4977517856
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6498707878,
				"lat" : 29.497518842
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.650559906,
				"lat" : 29.4980250678
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6502609389,
				"lat" : 29.4988773257
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.649398876,
				"lat" : 29.4977517856
			}
		} ],
		"origin" : {
			"lng" : 106.6500634,
			"lat" : 29.4981783
		},
		"isShow" : true,
		"distance" : 1730
	}, {
		"id" : 51,
		"name" : "长生桥站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.6584090311,
				"lat" : 29.510418655
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.6592183257,
				"lat" : 29.5117549965
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6583360203,
				"lat" : 29.5120815623
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.6575040377,
				"lat" : 29.511358645
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6584090311,
				"lat" : 29.510418655
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.6592183257,
				"lat" : 29.5117549965
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6583360203,
				"lat" : 29.5120815623
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.6575040377,
				"lat" : 29.511358645
			}
		} ],
		"origin" : {
			"lng" : 106.6584258,
			"lat" : 29.51119883
		},
		"isShow" : true,
		"distance" : 9250
	}, {
		"id" : 52,
		"name" : "刘家坪站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.6561870152,
				"lat" : 29.5246040319
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6559900379,
				"lat" : 29.5242547637
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6560664858,
				"lat" : 29.5251469631
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.6561870152,
				"lat" : 29.5246040319
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.6559900379,
				"lat" : 29.5242547637
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.6560664858,
				"lat" : 29.5251469631
			}
		} ],
		"origin" : {
			"lng" : 106.6561291,
			"lat" : 29.52488329
		},
		"isShow" : true,
		"distance" : 10692
	}, {
		"id" : 53,
		"name" : "上新街站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.5969941772,
				"lat" : 29.556631195
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.5969941772,
				"lat" : 29.556631195
			}
		} ],
		"origin" : {
			"lng" : 106.5975241,
			"lat" : 29.55630856
		},
		"isShow" : true,
		"distance" : 12585
	}, {
		"id" : 54,
		"name" : "小什字站",
		"exits" : [ {
			"name" : "6",
			"origin" : {
				"lng" : 106.5823719748,
				"lat" : 29.5606154386
			}
		}, {
			"name" : "7",
			"origin" : {
				"lng" : 106.5844078278,
				"lat" : 29.559670903
			}
		}, {
			"name" : "8",
			"origin" : {
				"lng" : 106.5856025282,
				"lat" : 29.560093875
			}
		}, {
			"name" : "9",
			"origin" : {
				"lng" : 106.5824419262,
				"lat" : 29.5609892282
			}
		}, {
			"name" : "6",
			"origin" : {
				"lng" : 106.5823719748,
				"lat" : 29.5606154386
			}
		}, {
			"name" : "7",
			"origin" : {
				"lng" : 106.5844078278,
				"lat" : 29.559670903
			}
		}, {
			"name" : "8",
			"origin" : {
				"lng" : 106.5856025282,
				"lat" : 29.560093875
			}
		}, {
			"name" : "9",
			"origin" : {
				"lng" : 106.5824419262,
				"lat" : 29.5609892282
			}
		} ],
		"origin" : {
			"lng" : 106.5838763,
			"lat" : 29.5602866
		},
		"isShow" : true,
		"distance" : 13978
	}, {
		"id" : 55,
		"name" : "大剧院站",
		"exits" : [ {
			"name" : "3",
			"origin" : {
				"lng" : 106.5769999347,
				"lat" : 29.5701351977
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5768925207,
				"lat" : 29.57009856
			}
		}, {
			"name" : "5",
			"origin" : {
				"lng" : 106.577463511,
				"lat" : 29.5687306833
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5769999347,
				"lat" : 29.5701351977
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5768925207,
				"lat" : 29.57009856
			}
		}, {
			"name" : "5",
			"origin" : {
				"lng" : 106.577463511,
				"lat" : 29.5687306833
			}
		} ],
		"origin" : {
			"lng" : 106.5774612,
			"lat" : 29.56908915
		},
		"isShow" : true,
		"distance" : 15195
	}, {
		"id" : 56,
		"name" : "江北城站",
		"exits" : [ {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5719498407,
				"lat" : 29.575946402
			}
		}, {
			"name" : "4A",
			"origin" : {
				"lng" : 106.5719037017,
				"lat" : 29.5763836251
			}
		}, {
			"name" : "5A",
			"origin" : {
				"lng" : 106.5719186036,
				"lat" : 29.57500086
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5719544347,
				"lat" : 29.5766480297
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5717967419,
				"lat" : 29.5769106011
			}
		}, {
			"name" : "6A",
			"origin" : {
				"lng" : 106.5723158878,
				"lat" : 29.5764285797
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5719498407,
				"lat" : 29.575946402
			}
		}, {
			"name" : "4A",
			"origin" : {
				"lng" : 106.5719037017,
				"lat" : 29.5763836251
			}
		}, {
			"name" : "5A",
			"origin" : {
				"lng" : 106.5719186036,
				"lat" : 29.57500086
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5719544347,
				"lat" : 29.5766480297
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5717967419,
				"lat" : 29.5769106011
			}
		}, {
			"name" : "6A",
			"origin" : {
				"lng" : 106.5723158878,
				"lat" : 29.5764285797
			}
		} ],
		"origin" : {
			"lng" : 106.5721466,
			"lat" : 29.57585145
		},
		"isShow" : true,
		"distance" : 16156
	}, {
		"id" : 57,
		"name" : "五里店站",
		"exits" : [ {
			"name" : "3",
			"origin" : {
				"lng" : 106.5589862228,
				"lat" : 29.5893562778
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5607560437,
				"lat" : 29.5894734166
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5647366713,
				"lat" : 29.5850205495
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5666349459,
				"lat" : 29.5852345528
			}
		} ],
		"origin" : {
			"lng" : 106.5654433,
			"lat" : 29.58535016
		},
		"isShow" : true,
		"distance" : 17582
	}, {
		"id" : 58,
		"name" : "红土地站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5530884818,
				"lat" : 29.5845216362
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5530498048,
				"lat" : 29.5842031254
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5487160219,
				"lat" : 29.5842380821
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5488462231,
				"lat" : 29.5847051471
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5530884818,
				"lat" : 29.5845216362
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5530498048,
				"lat" : 29.5842031254
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5487160219,
				"lat" : 29.5842380821
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5488462231,
				"lat" : 29.5847051471
			}
		} ],
		"origin" : {
			"lng" : 106.5510338,
			"lat" : 29.58414792
		},
		"isShow" : true,
		"distance" : 18560
	}, {
		"id" : 59,
		"name" : "黄泥滂站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5395680669,
				"lat" : 29.588550186
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5391166277,
				"lat" : 29.5882208547
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5366588802,
				"lat" : 29.5888294438
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5366292525,
				"lat" : 29.5884790393
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5395680669,
				"lat" : 29.588550186
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5391166277,
				"lat" : 29.5882208547
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5366588802,
				"lat" : 29.5888294438
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5366292525,
				"lat" : 29.5884790393
			}
		} ],
		"origin" : {
			"lng" : 106.5380349,
			"lat" : 29.58852349
		},
		"isShow" : true,
		"distance" : 19940
	}, {
		"id" : 60,
		"name" : "红旗沟站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.5262073476,
				"lat" : 29.5862001746
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.433491724,
				"lat" : 29.6452274752
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4312244387,
				"lat" : 29.6457366711
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.4312026497,
				"lat" : 29.6453931373
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5262073476,
				"lat" : 29.5862001746
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.5256095607,
				"lat" : 29.5860699506
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5267160509,
				"lat" : 29.5851759065
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5258854163,
				"lat" : 29.5849495931
			}
		} ],
		"origin" : {
			"lng" : 106.5262887,
			"lat" : 29.5853435
		},
		"isShow" : true,
		"distance" : 21155
	}, {
		"id" : 61,
		"name" : "花卉园站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5141962952,
				"lat" : 29.5834434278
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5142049681,
				"lat" : 29.5831355219
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5121416612,
				"lat" : 29.5830591551
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.5115738698,
				"lat" : 29.5829550136
			}
		}, {
			"name" : "2C",
			"origin" : {
				"lng" : 106.5113517969,
				"lat" : 29.5830682496
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5114512054,
				"lat" : 29.5834949936
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5141962952,
				"lat" : 29.5834434278
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5142049681,
				"lat" : 29.5831355219
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5121416612,
				"lat" : 29.5830591551
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.5115738698,
				"lat" : 29.5829550136
			}
		}, {
			"name" : "2C",
			"origin" : {
				"lng" : 106.5113517969,
				"lat" : 29.5830682496
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5114512054,
				"lat" : 29.5834949936
			}
		} ],
		"origin" : {
			"lng" : 106.5128702,
			"lat" : 29.58324799
		},
		"isShow" : true,
		"distance" : 22481
	}, {
		"id" : 62,
		"name" : "大龙山站",
		"exits" : [ {
			"name" : "4",
			"origin" : {
				"lng" : 106.4897939179,
				"lat" : 29.5944591826
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4893193208,
				"lat" : 29.5955707545
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4904264138,
				"lat" : 29.5963727064
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4909831755,
				"lat" : 29.5957686994
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4908907706,
				"lat" : 29.5954133171
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4904335149,
				"lat" : 29.5944672104
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.4982700273,
				"lat" : 29.5887532677
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4978267708,
				"lat" : 29.5898640925
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.498916933,
				"lat" : 29.5905865196
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.499411924,
				"lat" : 29.5899795785
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4993145735,
				"lat" : 29.5896149424
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4988344571,
				"lat" : 29.5887588124
			}
		} ],
		"origin" : {
			"lng" : 106.4985738,
			"lat" : 29.58954245
		},
		"isShow" : true,
		"distance" : 24324
	}, {
		"id" : 63,
		"name" : "冉家坝站",
		"exits" : [ {
			"name" : "6",
			"origin" : {
				"lng" : 106.4983406175,
				"lat" : 29.5971658317
			}
		}, {
			"name" : "7",
			"origin" : {
				"lng" : 106.4988156726,
				"lat" : 29.5970819733
			}
		}, {
			"name" : "5",
			"origin" : {
				"lng" : 106.4974110221,
				"lat" : 29.5983985364
			}
		}, {
			"name" : "8",
			"origin" : {
				"lng" : 106.5007693942,
				"lat" : 29.5984086193
			}
		} ],
		"origin" : {
			"lng" : 106.4987137,
			"lat" : 29.59859505
		},
		"isShow" : true,
		"distance" : 25330
	}, {
		"id" : 64,
		"name" : "光电园站",
		"exits" : [ {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5005902902,
				"lat" : 29.6159179091
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.5004343812,
				"lat" : 29.6164417212
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.4978614796,
				"lat" : 29.6156262596
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.4984278245,
				"lat" : 29.6161523995
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.5005902902,
				"lat" : 29.6159179091
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.5004343812,
				"lat" : 29.6164417212
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.4978614796,
				"lat" : 29.6156262596
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.4984278245,
				"lat" : 29.6161523995
			}
		} ],
		"origin" : {
			"lng" : 106.4992075,
			"lat" : 29.6159519
		},
		"isShow" : true,
		"distance" : 27259
	}, {
		"id" : 65,
		"name" : "竹林公园站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.4998234796,
				"lat" : 29.6158261125
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4783174345,
				"lat" : 29.6277138196
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4778610809,
				"lat" : 29.6276791508
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4777750062,
				"lat" : 29.6283551358
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4781680128,
				"lat" : 29.6284579881
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4998234796,
				"lat" : 29.6158261125
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4783174345,
				"lat" : 29.6277138196
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4778610809,
				"lat" : 29.6276791508
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4777750062,
				"lat" : 29.6283551358
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4781680128,
				"lat" : 29.6284579881
			}
		} ],
		"origin" : {
			"lng" : 106.4780341,
			"lat" : 29.62805197
		},
		"isShow" : true,
		"distance" : 30379
	}, {
		"id" : 66,
		"name" : "大竹林站",
		"exits" : [ {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4784511584,
				"lat" : 29.634534542
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4785919842,
				"lat" : 29.635048961
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4788008441,
				"lat" : 29.6339773254
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4793045669,
				"lat" : 29.635776192
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4784511584,
				"lat" : 29.634534542
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4785919842,
				"lat" : 29.635048961
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4788008441,
				"lat" : 29.6339773254
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4793045669,
				"lat" : 29.635776192
			}
		} ],
		"origin" : {
			"lng" : 106.4787164,
			"lat" : 29.63477383
		},
		"isShow" : true,
		"distance" : 31136
	}, {
		"id" : 67,
		"name" : "黄桷坪站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4823885072,
				"lat" : 29.6535131467
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4823380458,
				"lat" : 29.6540468605
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4829505551,
				"lat" : 29.6535474656
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4828989748,
				"lat" : 29.6540861821
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4823885072,
				"lat" : 29.6535131467
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4823380458,
				"lat" : 29.6540468605
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4829505551,
				"lat" : 29.6535474656
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4828989748,
				"lat" : 29.6540861821
			}
		} ],
		"origin" : {
			"lng" : 106.4826499,
			"lat" : 29.65379959
		},
		"isShow" : true,
		"distance" : 33295
	}, {
		"id" : 68,
		"name" : "礼嘉站",
		"exits" : [ {
			"name" : "3",
			"origin" : {
				"lng" : 106.4886532557,
				"lat" : 29.6657669894
			}
		}, {
			"name" : "4A",
			"origin" : {
				"lng" : 106.489698903,
				"lat" : 29.6678720505
			}
		}, {
			"name" : "4B",
			"origin" : {
				"lng" : 106.4895427173,
				"lat" : 29.6684366418
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.487172048,
				"lat" : 29.6673681781
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4886532557,
				"lat" : 29.6657669894
			}
		}, {
			"name" : "4A",
			"origin" : {
				"lng" : 106.489698903,
				"lat" : 29.6678720505
			}
		}, {
			"name" : "4B",
			"origin" : {
				"lng" : 106.4895427173,
				"lat" : 29.6684366418
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.487172048,
				"lat" : 29.6673681781
			}
		} ],
		"origin" : {
			"lng" : 106.4884179,
			"lat" : 29.66693459
		},
		"isShow" : true,
		"distance" : 34901
	}, {
		"id" : 69,
		"name" : "金山寺站",
		"exits" : [ {
			"name" : "3",
			"origin" : {
				"lng" : 112.7031838319,
				"lat" : 29.6705002096
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4926781643,
				"lat" : 29.6798340536
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4926668249,
				"lat" : 29.6794954523
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4914036513,
				"lat" : 29.6782945215
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4918221256,
				"lat" : 29.6779667737
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 112.7031838319,
				"lat" : 29.6705002096
			}
		}, {
			"name" : "2B",
			"origin" : {
				"lng" : 106.4926781643,
				"lat" : 29.6798340536
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4926668249,
				"lat" : 29.6794954523
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4914036513,
				"lat" : 29.6782945215
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4918221256,
				"lat" : 29.6779667737
			}
		} ],
		"origin" : {
			"lng" : 106.4919225,
			"lat" : 29.67948235
		},
		"isShow" : true,
		"distance" : 36404
	}, {
		"id" : 70,
		"name" : "曹家湾站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.4940471496,
				"lat" : 29.7196390596
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4933098874,
				"lat" : 29.7206214434
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4943424396,
				"lat" : 29.7214705642
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4940471496,
				"lat" : 29.7196390596
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4933098874,
				"lat" : 29.7206214434
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4943424396,
				"lat" : 29.7214705642
			}
		} ],
		"origin" : {
			"lng" : 106.4942129,
			"lat" : 29.72061242
		},
		"isShow" : true,
		"distance" : 41549
	}, {
		"id" : 71,
		"name" : "蔡家站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.4916873586,
				"lat" : 29.7362335425
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4922568997,
				"lat" : 29.7358140721
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.4928672553,
				"lat" : 29.7352454346
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4914740418,
				"lat" : 29.7355074896
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4916873586,
				"lat" : 29.7362335425
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4922568997,
				"lat" : 29.7358140721
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.4928672553,
				"lat" : 29.7352454346
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4914740418,
				"lat" : 29.7355074896
			}
		} ],
		"origin" : {
			"lng" : 106.4922798,
			"lat" : 29.73560744
		},
		"isShow" : true,
		"distance" : 43553
	}, {
		"id" : 72,
		"name" : "向家岗站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.4723649763,
				"lat" : 29.7391696663
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4739509357,
				"lat" : 29.7394720689
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4730789057,
				"lat" : 29.7379587536
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4723649763,
				"lat" : 29.7391696663
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4739509357,
				"lat" : 29.7394720689
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4730789057,
				"lat" : 29.7379587536
			}
		} ],
		"origin" : {
			"lng" : 106.4731237,
			"lat" : 29.7387841
		},
		"isShow" : true,
		"distance" : 45443
	}, {
		"id" : 73,
		"name" : "龙凤溪站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.4035628886,
				"lat" : 29.7888554331
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4039117051,
				"lat" : 29.7888767443
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.4035628886,
				"lat" : 29.7888554331
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4039117051,
				"lat" : 29.7888767443
			}
		} ],
		"origin" : {
			"lng" : 106.4036384,
			"lat" : 29.78891895
		},
		"isShow" : true,
		"distance" : 54222
	}, {
		"id" : 74,
		"name" : "北碚站",
		"exits" : [],
		"origin" : {
			"lng" : 106.3986854,
			"lat" : 29.80248757
		},
		"isShow" : true,
		"distance" : 59023
	}, {
		"id" : 75,
		"name" : "天生站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4226813597,
				"lat" : 29.8141426948
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4228879863,
				"lat" : 29.8151832393
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4244896499,
				"lat" : 29.8165343913
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4226813597,
				"lat" : 29.8141426948
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4228879863,
				"lat" : 29.8151832393
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4244896499,
				"lat" : 29.8165343913
			}
		} ],
		"origin" : {
			"lng" : 106.4235768,
			"lat" : 29.81544873
		},
		"isShow" : true,
		"distance" : 59001
	}, {
		"id" : 76,
		"name" : "五路口站",
		"exits" : [ {
			"name" : "4A",
			"origin" : {
				"lng" : 106.4366079731,
				"lat" : 29.8250492631
			}
		}, {
			"name" : "4B",
			"origin" : {
				"lng" : 106.4368185709,
				"lat" : 29.8255073925
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4385593809,
				"lat" : 29.8256024683
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4377123921,
				"lat" : 29.8243648042
			}
		}, {
			"name" : "4A",
			"origin" : {
				"lng" : 106.4366079731,
				"lat" : 29.8250492631
			}
		}, {
			"name" : "4B",
			"origin" : {
				"lng" : 106.4368185709,
				"lat" : 29.8255073925
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4385593809,
				"lat" : 29.8256024683
			}
		}, {
			"name" : "2A",
			"origin" : {
				"lng" : 106.4377123921,
				"lat" : 29.8243648042
			}
		} ],
		"origin" : {
			"lng" : 106.4378046,
			"lat" : 29.82490792
		},
		"isShow" : true,
		"distance" : 60781
	} ],
	"routes" : [ {
		"name" : "六号线上行",
		"curves" : [ {
			"lng" : 106.6412696242,
			"lat" : 29.4846011425
		}, {
			"lng" : 106.6469103098,
			"lat" : 29.4939437706
		}, {
			"lng" : 106.6476854682,
			"lat" : 29.4951453901
		}, {
			"lng" : 106.6485196352,
			"lat" : 29.4962961018
		}, {
			"lng" : 106.6562980413,
			"lat" : 29.5063939766
		}, {
			"lng" : 106.6566923261,
			"lat" : 29.5069658855
		}, {
			"lng" : 106.6569954157,
			"lat" : 29.5075377911
		}, {
			"lng" : 106.6572287679,
			"lat" : 29.5081349038
		}, {
			"lng" : 106.6576042771,
			"lat" : 29.5094834132
		}, {
			"lng" : 106.6578134894,
			"lat" : 29.5100590394
		}, {
			"lng" : 106.6587710381,
			"lat" : 29.5120636683
		}, {
			"lng" : 106.6595166922,
			"lat" : 29.5135108606
		}, {
			"lng" : 106.6611474752,
			"lat" : 29.5168829717
		}, {
			"lng" : 106.6613057256,
			"lat" : 29.5172638939
		}, {
			"lng" : 106.6614291072,
			"lat" : 29.5176359452
		}, {
			"lng" : 106.6615256667,
			"lat" : 29.5180142971
		}, {
			"lng" : 106.6615927219,
			"lat" : 29.5184061851
		}, {
			"lng" : 106.6616302729,
			"lat" : 29.5187742644
		}, {
			"lng" : 106.6616383195,
			"lat" : 29.51913464
		}, {
			"lng" : 106.6616222262,
			"lat" : 29.5194945475
		}, {
			"lng" : 106.6615793109,
			"lat" : 29.5198619226
		}, {
			"lng" : 106.6615095735,
			"lat" : 29.5202264955
		}, {
			"lng" : 106.6614156961,
			"lat" : 29.5205775299
		}, {
			"lng" : 106.6612949967,
			"lat" : 29.5209313639
		}, {
			"lng" : 106.6611474752,
			"lat" : 29.5212781947
		}, {
			"lng" : 106.6609784961,
			"lat" : 29.5216159218
		}, {
			"lng" : 106.6607880592,
			"lat" : 29.5219359096
		}, {
			"lng" : 106.6605734825,
			"lat" : 29.5222451602
		}, {
			"lng" : 106.6603347659,
			"lat" : 29.5225495085
		}, {
			"lng" : 106.6600719094,
			"lat" : 29.522840319
		}, {
			"lng" : 106.6597956419,
			"lat" : 29.523109423
		}, {
			"lng" : 106.6594952345,
			"lat" : 29.5233696573
		}, {
			"lng" : 106.659168005,
			"lat" : 29.5236182212
		}, {
			"lng" : 106.6587898135,
			"lat" : 29.5238688851
		}, {
			"lng" : 106.6583901644,
			"lat" : 29.5240957425
		}, {
			"lng" : 106.657974422,
			"lat" : 29.524297393
		}, {
			"lng" : 106.6575425863,
			"lat" : 29.52447337
		}, {
			"lng" : 106.6498526931,
			"lat" : 29.5271244254
		}, {
			"lng" : 106.6490453482,
			"lat" : 29.5274324932
		}, {
			"lng" : 106.6486537457,
			"lat" : 29.5276138326
		}, {
			"lng" : 106.6482245922,
			"lat" : 29.527834847
		}, {
			"lng" : 106.6438579559,
			"lat" : 29.5302185969
		}, {
			"lng" : 106.6431793571,
			"lat" : 29.5306321417
		}, {
			"lng" : 106.6425570846,
			"lat" : 29.5310949271
		}, {
			"lng" : 106.6420930624,
			"lat" : 29.5315056678
		}, {
			"lng" : 106.6400545835,
			"lat" : 29.5334351933
		}, {
			"lng" : 106.6396173835,
			"lat" : 29.5338319223
		}, {
			"lng" : 106.6389575601,
			"lat" : 29.5343539687
		}, {
			"lng" : 106.6382521391,
			"lat" : 29.5348249049
		}, {
			"lng" : 106.6055345535,
			"lat" : 29.5537242534
		}, {
			"lng" : 106.6046816111,
			"lat" : 29.5541857666
		}, {
			"lng" : 106.6042873263,
			"lat" : 29.5543647248
		}, {
			"lng" : 106.6038823128,
			"lat" : 29.554525017
		}, {
			"lng" : 106.6034772992,
			"lat" : 29.5546631434
		}, {
			"lng" : 106.6030347347,
			"lat" : 29.5547921701
		}, {
			"lng" : 106.5974611044,
			"lat" : 29.5562543833
		}, {
			"lng" : 106.6023051739,
			"lat" : 29.5549853599
		}, {
			"lng" : 106.5966618061,
			"lat" : 29.5564697354
		}, {
			"lng" : 106.5956130624,
			"lat" : 29.5567807469
		}, {
			"lng" : 106.5861073136,
			"lat" : 29.5592765036
		}, {
			"lng" : 106.5857800841,
			"lat" : 29.5593880261
		}, {
			"lng" : 106.5854743123,
			"lat" : 29.5595196132
		}, {
			"lng" : 106.5844604373,
			"lat" : 29.5600111967
		}, {
			"lng" : 106.5840286016,
			"lat" : 29.5602029766
		}, {
			"lng" : 106.5834572911,
			"lat" : 29.5604152873
		}, {
			"lng" : 106.5821537375,
			"lat" : 29.5608268421
		}, {
			"lng" : 106.5818023682,
			"lat" : 29.5609838577
		}, {
			"lng" : 106.5814885497,
			"lat" : 29.5611719029
		}, {
			"lng" : 106.5811854601,
			"lat" : 29.5614045092
		}, {
			"lng" : 106.5809252858,
			"lat" : 29.561661612
		}, {
			"lng" : 106.5807053447,
			"lat" : 29.5619448442
		}, {
			"lng" : 106.5805229545,
			"lat" : 29.5622577053
		}, {
			"lng" : 106.5771514177,
			"lat" : 29.5697175564
		}, {
			"lng" : 106.5769958496,
			"lat" : 29.5700315598
		}, {
			"lng" : 106.5768349171,
			"lat" : 29.5702837416
		}, {
			"lng" : 106.5766766667,
			"lat" : 29.5704841336
		}, {
			"lng" : 106.5764996409,
			"lat" : 29.5706714612
		}, {
			"lng" : 106.5763011575,
			"lat" : 29.5708438583
		}, {
			"lng" : 106.576089263,
			"lat" : 29.5710001586
		}, {
			"lng" : 106.575756669,
			"lat" : 29.5712012489
		}, {
			"lng" : 106.5739193559,
			"lat" : 29.5722293231
		}, {
			"lng" : 106.5734821558,
			"lat" : 29.5725167248
		}, {
			"lng" : 106.5732353926,
			"lat" : 29.5727224777
		}, {
			"lng" : 106.5729993582,
			"lat" : 29.5729618225
		}, {
			"lng" : 106.5727981925,
			"lat" : 29.5732125973
		}, {
			"lng" : 106.5726211667,
			"lat" : 29.5734873992
		}, {
			"lng" : 106.5724790096,
			"lat" : 29.5737677989
		}, {
			"lng" : 106.5723690391,
			"lat" : 29.5740673266
		}, {
			"lng" : 106.572291255,
			"lat" : 29.5743752513
		}, {
			"lng" : 106.5722510219,
			"lat" : 29.5746880739
		}, {
			"lng" : 106.5722376108,
			"lat" : 29.5750571146
		}, {
			"lng" : 106.5722429752,
			"lat" : 29.5772363402
		}, {
			"lng" : 106.5723288059,
			"lat" : 29.5788374882
		}, {
			"lng" : 106.572277844,
			"lat" : 29.5792760266
		}, {
			"lng" : 106.5721464157,
			"lat" : 29.5797015004
		}, {
			"lng" : 106.5719747543,
			"lat" : 29.5800492959
		}, {
			"lng" : 106.57037884,
			"lat" : 29.582938448
		}, {
			"lng" : 106.5701910853,
			"lat" : 29.5832498445
		}, {
			"lng" : 106.5700140595,
			"lat" : 29.5834931296
		}, {
			"lng" : 106.5696895123,
			"lat" : 29.5838423115
		}, {
			"lng" : 106.5692925453,
			"lat" : 29.5841595366
		}, {
			"lng" : 106.5683752298,
			"lat" : 29.5847608619
		}, {
			"lng" : 106.56812042,
			"lat" : 29.5849003464
		}, {
			"lng" : 106.5678548813,
			"lat" : 29.5850186049
		}, {
			"lng" : 106.5676027536,
			"lat" : 29.5851049079
		}, {
			"lng" : 106.5673264861,
			"lat" : 29.585176516
		}, {
			"lng" : 106.567042172,
			"lat" : 29.5852254987
		}, {
			"lng" : 106.5667632222,
			"lat" : 29.585250923
		}, {
			"lng" : 106.5638637543,
			"lat" : 29.5852821786
		}, {
			"lng" : 106.5633460879,
			"lat" : 29.5852754143
		}, {
			"lng" : 106.5628954768,
			"lat" : 29.5852329627
		}, {
			"lng" : 106.5624395013,
			"lat" : 29.5851447938
		}, {
			"lng" : 106.5620371699,
			"lat" : 29.5850272352
		}, {
			"lng" : 106.561101079,
			"lat" : 29.5846901865
		}, {
			"lng" : 106.560741663,
			"lat" : 29.5845754264
		}, {
			"lng" : 106.5602990985,
			"lat" : 29.5844741948
		}, {
			"lng" : 106.5598484874,
			"lat" : 29.5844156484
		}, {
			"lng" : 106.5592905879,
			"lat" : 29.5843967549
		}, {
			"lng" : 106.5562275052,
			"lat" : 29.5844189139
		}, {
			"lng" : 106.5555113554,
			"lat" : 29.584405152
		}, {
			"lng" : 106.55480057,
			"lat" : 29.5843459058
		}, {
			"lng" : 106.5531885624,
			"lat" : 29.5841149852
		}, {
			"lng" : 106.5525689721,
			"lat" : 29.5840622699
		}, {
			"lng" : 106.5519681573,
			"lat" : 29.5840587711
		}, {
			"lng" : 106.5496721864,
			"lat" : 29.5841126526
		}, {
			"lng" : 106.5489989519,
			"lat" : 29.5841520724
		}, {
			"lng" : 106.5485134721,
			"lat" : 29.5842344108
		}, {
			"lng" : 106.5479984879,
			"lat" : 29.5843752957
		}, {
			"lng" : 106.5452572703,
			"lat" : 29.5852506897
		}, {
			"lng" : 106.5448173881,
			"lat" : 29.5854095334
		}, {
			"lng" : 106.5444365144,
			"lat" : 29.5855721089
		}, {
			"lng" : 106.5439456701,
			"lat" : 29.5858221526
		}, {
			"lng" : 106.5434736013,
			"lat" : 29.5861130143
		}, {
			"lng" : 106.5416416526,
			"lat" : 29.5874380921
		}, {
			"lng" : 106.5413171053,
			"lat" : 29.5876599086
		}, {
			"lng" : 106.5408959985,
			"lat" : 29.5878919874
		}, {
			"lng" : 106.5404587984,
			"lat" : 29.5880753175
		}, {
			"lng" : 106.5399599075,
			"lat" : 29.5882222613
		}, {
			"lng" : 106.53945297,
			"lat" : 29.5883125267
		}, {
			"lng" : 106.537079215,
			"lat" : 29.5885641964
		}, {
			"lng" : 106.5364784002,
			"lat" : 29.5886005823
		}, {
			"lng" : 106.5360331535,
			"lat" : 29.5885875207
		}, {
			"lng" : 106.5355825424,
			"lat" : 29.5885362072
		}, {
			"lng" : 106.5351399779,
			"lat" : 29.5884466418
		}, {
			"lng" : 106.5347081423,
			"lat" : 29.5883199905
		}, {
			"lng" : 106.5343862772,
			"lat" : 29.588197071
		}, {
			"lng" : 106.5340644121,
			"lat" : 29.5880491942
		}, {
			"lng" : 106.5325060487,
			"lat" : 29.5871628618
		}, {
			"lng" : 106.5320822597,
			"lat" : 29.5869536396
		}, {
			"lng" : 106.5316262841,
			"lat" : 29.586758645
		}, {
			"lng" : 106.5311703086,
			"lat" : 29.5865916398
		}, {
			"lng" : 106.5306821465,
			"lat" : 29.5864416614
		}, {
			"lng" : 106.5292096138,
			"lat" : 29.5860397742
		}, {
			"lng" : 106.5285712481,
			"lat" : 29.5858865295
		}, {
			"lng" : 106.5301993489,
			"lat" : 29.586260894
		}, {
			"lng" : 106.5272381902,
			"lat" : 29.5855786399
		}, {
			"lng" : 106.5197387338,
			"lat" : 29.5835416466
		}, {
			"lng" : 106.5189635754,
			"lat" : 29.5833823335
		}, {
			"lng" : 106.5181723237,
			"lat" : 29.5832883316
		}, {
			"lng" : 106.5173140168,
			"lat" : 29.5832542763
		}, {
			"lng" : 106.5046432614,
			"lat" : 29.5830697711
		}, {
			"lng" : 106.5040209889,
			"lat" : 29.5830777018
		}, {
			"lng" : 106.503495276,
			"lat" : 29.5831250527
		}, {
			"lng" : 106.5028381348,
			"lat" : 29.5832461124
		}, {
			"lng" : 106.5025109053,
			"lat" : 29.5833331166
		}, {
			"lng" : 106.5021809936,
			"lat" : 29.5834406472
		}, {
			"lng" : 106.5015748143,
			"lat" : 29.5836941951
		}, {
			"lng" : 106.5010088682,
			"lat" : 29.584008155
		}, {
			"lng" : 106.5004885197,
			"lat" : 29.5843783279
		}, {
			"lng" : 106.5000191331,
			"lat" : 29.5847991152
		}, {
			"lng" : 106.4996087551,
			"lat" : 29.5852723821
		}, {
			"lng" : 106.4992681146,
			"lat" : 29.5857771355
		}, {
			"lng" : 106.4991232753,
			"lat" : 29.5860458386
		}, {
			"lng" : 106.498991847,
			"lat" : 29.5863301687
		}, {
			"lng" : 106.4988818765,
			"lat" : 29.586621029
		}, {
			"lng" : 106.4987933636,
			"lat" : 29.5869170198
		}, {
			"lng" : 106.4987263083,
			"lat" : 29.5872085781
		}, {
			"lng" : 106.4986780286,
			"lat" : 29.5875208944
		}, {
			"lng" : 106.4986512065,
			"lat" : 29.5881322291
		}, {
			"lng" : 106.4987182617,
			"lat" : 29.594704602
		}, {
			"lng" : 106.4988040924,
			"lat" : 29.5973773704
		}, {
			"lng" : 106.4990481734,
			"lat" : 29.6137699668
		}, {
			"lng" : 106.4992466569,
			"lat" : 29.619311686
		}, {
			"lng" : 106.4992251992,
			"lat" : 29.6198241968
		}, {
			"lng" : 106.4991420507,
			"lat" : 29.6203229481
		}, {
			"lng" : 106.4989998937,
			"lat" : 29.620820531
		}, {
			"lng" : 106.498798728,
			"lat" : 29.6213027224
		}, {
			"lng" : 106.4986485243,
			"lat" : 29.6215890516
		}, {
			"lng" : 106.4984714985,
			"lat" : 29.621873981
		}, {
			"lng" : 106.4982783794,
			"lat" : 29.6221407227
		}, {
			"lng" : 106.4980611205,
			"lat" : 29.6224034999
		}, {
			"lng" : 106.4978304505,
			"lat" : 29.6226466906
		}, {
			"lng" : 106.4975756407,
			"lat" : 29.6228828858
		}, {
			"lng" : 106.497310102,
			"lat" : 29.6230980957
		}, {
			"lng" : 106.497015059,
			"lat" : 29.6233091083
		}, {
			"lng" : 106.496720016,
			"lat" : 29.6234926072
		}, {
			"lng" : 106.4964035153,
			"lat" : 29.6236637483
		}, {
			"lng" : 106.4960843325,
			"lat" : 29.6238127386
		}, {
			"lng" : 106.4957544208,
			"lat" : 29.6239437754
		}, {
			"lng" : 106.495424509,
			"lat" : 29.624053128
		}, {
			"lng" : 106.4950704575,
			"lat" : 29.6241496566
		}, {
			"lng" : 106.4947083592,
			"lat" : 29.624225667
		}, {
			"lng" : 106.4943408966,
			"lat" : 29.6242809261
		}, {
			"lng" : 106.4938768744,
			"lat" : 29.6243205634
		}, {
			"lng" : 106.4934101701,
			"lat" : 29.6243270919
		}, {
			"lng" : 106.4929568768,
			"lat" : 29.6243014442
		}, {
			"lng" : 106.492484808,
			"lat" : 29.6242408225
		}, {
			"lng" : 106.4919295907,
			"lat" : 29.6241307706
		}, {
			"lng" : 106.4871257544,
			"lat" : 29.6230605564
		}, {
			"lng" : 106.4865061641,
			"lat" : 29.6229535344
		}, {
			"lng" : 106.4858999848,
			"lat" : 29.6228940776
		}, {
			"lng" : 106.4853313565,
			"lat" : 29.6228786888
		}, {
			"lng" : 106.4847627282,
			"lat" : 29.622901772
		}, {
			"lng" : 106.4821502566,
			"lat" : 29.6231647804
		}, {
			"lng" : 106.4818122983,
			"lat" : 29.623211413
		}, {
			"lng" : 106.4815092087,
			"lat" : 29.623274367
		}, {
			"lng" : 106.4812141657,
			"lat" : 29.6233590051
		}, {
			"lng" : 106.4809298515,
			"lat" : 29.6234653272
		}, {
			"lng" : 106.4805757999,
			"lat" : 29.6236339035
		}, {
			"lng" : 106.4802458882,
			"lat" : 29.6238353553
		}, {
			"lng" : 106.4799427986,
			"lat" : 29.6240671177
		}, {
			"lng" : 106.4796558022,
			"lat" : 29.6243401489
		}, {
			"lng" : 106.4794439077,
			"lat" : 29.6245947597
		}, {
			"lng" : 106.4792615175,
			"lat" : 29.6248663905
		}, {
			"lng" : 106.4788082242,
			"lat" : 29.6257551895
		}, {
			"lng" : 106.4785775542,
			"lat" : 29.6262660355
		}, {
			"lng" : 106.4783763885,
			"lat" : 29.626777112
		}, {
			"lng" : 106.4781993628,
			"lat" : 29.6273135997
		}, {
			"lng" : 106.4780598879,
			"lat" : 29.6278393596
		}, {
			"lng" : 106.4779472351,
			"lat" : 29.6283704791
		}, {
			"lng" : 106.4778614044,
			"lat" : 29.6289055594
		}, {
			"lng" : 106.4778077602,
			"lat" : 29.6294434347
		}, {
			"lng" : 106.4777836204,
			"lat" : 29.6300008915
		}, {
			"lng" : 106.4777943492,
			"lat" : 29.6306129013
		}, {
			"lng" : 106.477842629,
			"lat" : 29.6312412275
		}, {
			"lng" : 106.4779311419,
			"lat" : 29.6318574264
		}, {
			"lng" : 106.4780625701,
			"lat" : 29.6324773518
		}, {
			"lng" : 106.4822012186,
			"lat" : 29.6474119932
		}, {
			"lng" : 106.4823889732,
			"lat" : 29.6481775137
		}, {
			"lng" : 106.4825391769,
			"lat" : 29.6489402312
		}, {
			"lng" : 106.4826464653,
			"lat" : 29.6496724065
		}, {
			"lng" : 106.4827162027,
			"lat" : 29.6503985159
		}, {
			"lng" : 106.4827537537,
			"lat" : 29.6511446665
		}, {
			"lng" : 106.4827564359,
			"lat" : 29.6518824201
		}, {
			"lng" : 106.4827188849,
			"lat" : 29.6527094436
		}, {
			"lng" : 106.4824050665,
			"lat" : 29.6563703629
		}, {
			"lng" : 106.4823782444,
			"lat" : 29.657035822
		}, {
			"lng" : 106.4823997021,
			"lat" : 29.6574670278
		}, {
			"lng" : 106.4824560285,
			"lat" : 29.6578872768
		}, {
			"lng" : 106.4825391769,
			"lat" : 29.6582942385
		}, {
			"lng" : 106.4826598763,
			"lat" : 29.6587130856
		}, {
			"lng" : 106.4828073978,
			"lat" : 29.6591067583
		}, {
			"lng" : 106.4829897881,
			"lat" : 29.6594992642
		}, {
			"lng" : 106.4831936359,
			"lat" : 29.659872423
		}, {
			"lng" : 106.483437717,
			"lat" : 29.6602493096
		}, {
			"lng" : 106.4914897084,
			"lat" : 29.6716939179
		}, {
			"lng" : 106.4917257428,
			"lat" : 29.6720942983
		}, {
			"lng" : 106.4919161797,
			"lat" : 29.6725030669
		}, {
			"lng" : 106.4920637012,
			"lat" : 29.6729248844
		}, {
			"lng" : 106.4921656251,
			"lat" : 29.6733562552
		}, {
			"lng" : 106.4922326803,
			"lat" : 29.6739018165
		}, {
			"lng" : 106.4922299981,
			"lat" : 29.6744504044
		}, {
			"lng" : 106.4917847514,
			"lat" : 29.6804021813
		}, {
			"lng" : 106.4917445183,
			"lat" : 29.680841443
		}, {
			"lng" : 106.4916935563,
			"lat" : 29.6811802674
		}, {
			"lng" : 106.4916157722,
			"lat" : 29.6815244503
		}, {
			"lng" : 106.4915138483,
			"lat" : 29.6818546504
		}, {
			"lng" : 106.4913207293,
			"lat" : 29.6823297917
		}, {
			"lng" : 106.491073966,
			"lat" : 29.6827951438
		}, {
			"lng" : 106.4907708764,
			"lat" : 29.6832455801
		}, {
			"lng" : 106.4904275537,
			"lat" : 29.6836615271
		}, {
			"lng" : 106.4901298285,
			"lat" : 29.6839621263
		}, {
			"lng" : 106.4898106456,
			"lat" : 29.6842431508
		}, {
			"lng" : 106.4882791042,
			"lat" : 29.6854145439
		}, {
			"lng" : 106.4878606796,
			"lat" : 29.6857636057
		}, {
			"lng" : 106.487608552,
			"lat" : 29.6860127018
		}, {
			"lng" : 106.4873805642,
			"lat" : 29.6862687878
		}, {
			"lng" : 106.4871767163,
			"lat" : 29.6865295334
		}, {
			"lng" : 106.4869835973,
			"lat" : 29.6868168422
		}, {
			"lng" : 106.4867797494,
			"lat" : 29.687180579
		}, {
			"lng" : 106.4866054058,
			"lat" : 29.6875659849
		}, {
			"lng" : 106.4864712954,
			"lat" : 29.6879625738
		}, {
			"lng" : 106.4863720536,
			"lat" : 29.6883764042
		}, {
			"lng" : 106.4863184094,
			"lat" : 29.6887604073
		}, {
			"lng" : 106.486299634,
			"lat" : 29.6891467392
		}, {
			"lng" : 106.4863103628,
			"lat" : 29.6895153608
		}, {
			"lng" : 106.4863613248,
			"lat" : 29.6901794355
		}, {
			"lng" : 106.4864042401,
			"lat" : 29.6906004799
		}, {
			"lng" : 106.4864659309,
			"lat" : 29.6909562808
		}, {
			"lng" : 106.4865598083,
			"lat" : 29.6913158086
		}, {
			"lng" : 106.4866805077,
			"lat" : 29.6916597238
		}, {
			"lng" : 106.486838758,
			"lat" : 29.6920117929
		}, {
			"lng" : 106.4870211482,
			"lat" : 29.6923442886
		}, {
			"lng" : 106.4872384071,
			"lat" : 29.6926716571
		}, {
			"lng" : 106.4874851704,
			"lat" : 29.6929836465
		}, {
			"lng" : 106.4877963066,
			"lat" : 29.6933191679
		}, {
			"lng" : 106.488161087,
			"lat" : 29.6936502613
		}, {
			"lng" : 106.4940994978,
			"lat" : 29.6986016191
		}, {
			"lng" : 106.4946815372,
			"lat" : 29.6991258416
		}, {
			"lng" : 106.4949443936,
			"lat" : 29.6994047269
		}, {
			"lng" : 106.4951857924,
			"lat" : 29.6996968915
		}, {
			"lng" : 106.495411098,
			"lat" : 29.700009325
		}, {
			"lng" : 106.4956122637,
			"lat" : 29.7003334068
		}, {
			"lng" : 106.4957866073,
			"lat" : 29.7006598173
		}, {
			"lng" : 106.4959421754,
			"lat" : 29.7010032346
		}, {
			"lng" : 106.4960682392,
			"lat" : 29.7013457187
		}, {
			"lng" : 106.4961755276,
			"lat" : 29.7017119657
		}, {
			"lng" : 106.4962801337,
			"lat" : 29.7022617998
		}, {
			"lng" : 106.4963257313,
			"lat" : 29.7028176882
		}, {
			"lng" : 106.4963123202,
			"lat" : 29.7033749715
		}, {
			"lng" : 106.4962345362,
			"lat" : 29.703928291
		}, {
			"lng" : 106.4933082461,
			"lat" : 29.7161306004
		}, {
			"lng" : 106.4932331443,
			"lat" : 29.7164937652
		}, {
			"lng" : 106.4931875467,
			"lat" : 29.7168238503
		}, {
			"lng" : 106.4931607246,
			"lat" : 29.7171737348
		}, {
			"lng" : 106.4931580424,
			"lat" : 29.717515232
		}, {
			"lng" : 106.4931875467,
			"lat" : 29.7179461784
		}, {
			"lng" : 106.4932519197,
			"lat" : 29.7183738617
		}, {
			"lng" : 106.4933538437,
			"lat" : 29.7187961856
		}, {
			"lng" : 106.4934906363,
			"lat" : 29.7192022018
		}, {
			"lng" : 106.4937266707,
			"lat" : 29.7197493777
		}, {
			"lng" : 106.4949658513,
			"lat" : 29.7223400953
		}, {
			"lng" : 106.4952018857,
			"lat" : 29.7229063545
		}, {
			"lng" : 106.495411098,
			"lat" : 29.7234898474
		}, {
			"lng" : 106.4972752333,
			"lat" : 29.7298975643
		}, {
			"lng" : 106.4973503351,
			"lat" : 29.7302420462
		}, {
			"lng" : 106.4973932505,
			"lat" : 29.73059957
		}, {
			"lng" : 106.4974066615,
			"lat" : 29.7309410215
		}, {
			"lng" : 106.497387886,
			"lat" : 29.7313001732
		}, {
			"lng" : 106.4973369241,
			"lat" : 29.731647911
		}, {
			"lng" : 106.4972537756,
			"lat" : 29.7319912222
		}, {
			"lng" : 106.4971411228,
			"lat" : 29.7323280108
		}, {
			"lng" : 106.4969989657,
			"lat" : 29.7326559477
		}, {
			"lng" : 106.4967548847,
			"lat" : 29.7330924188
		}, {
			"lng" : 106.4964571595,
			"lat" : 29.7335032683
		}, {
			"lng" : 106.4961111546,
			"lat" : 29.7338838382
		}, {
			"lng" : 106.4957275987,
			"lat" : 29.7342238811
		}, {
			"lng" : 106.4953038096,
			"lat" : 29.7345264252
		}, {
			"lng" : 106.4948371053,
			"lat" : 29.7347931011
		}, {
			"lng" : 106.4943489432,
			"lat" : 29.7350108664
		}, {
			"lng" : 106.4938366413,
			"lat" : 29.7351825165
		}, {
			"lng" : 106.4932599664,
			"lat" : 29.7353236559
		}, {
			"lng" : 106.4839714766,
			"lat" : 29.7373533863
		}, {
			"lng" : 106.4830031991,
			"lat" : 29.7375429655
		}, {
			"lng" : 106.482450664,
			"lat" : 29.7376174928
		}, {
			"lng" : 106.4818632603,
			"lat" : 29.7376698948
		}, {
			"lng" : 106.4759033918,
			"lat" : 29.7380516134
		}, {
			"lng" : 106.4753508568,
			"lat" : 29.7381135639
		}, {
			"lng" : 106.4748331904,
			"lat" : 29.738210216
		}, {
			"lng" : 106.4740258455,
			"lat" : 29.7384361253
		}, {
			"lng" : 106.4684146643,
			"lat" : 29.74021427
		}, {
			"lng" : 106.4677387476,
			"lat" : 29.7404408734
		}, {
			"lng" : 106.4670574665,
			"lat" : 29.7407070678
		}, {
			"lng" : 106.4664083719,
			"lat" : 29.7410035371
		}, {
			"lng" : 106.4657780528,
			"lat" : 29.7413330759
		}, {
			"lng" : 106.4651557803,
			"lat" : 29.7417047664
		}, {
			"lng" : 106.4643108845,
			"lat" : 29.742286054
		}, {
			"lng" : 106.4120104909,
			"lat" : 29.7801055864
		}, {
			"lng" : 106.4113131166,
			"lat" : 29.7806286846
		}, {
			"lng" : 106.4109483361,
			"lat" : 29.7809334165
		}, {
			"lng" : 106.4105889201,
			"lat" : 29.7812567713
		}, {
			"lng" : 106.4099773765,
			"lat" : 29.7818785686
		}, {
			"lng" : 106.4109510183,
			"lat" : 29.7809995309
		}, {
			"lng" : 106.4107069373,
			"lat" : 29.7811811124
		}, {
			"lng" : 106.4104574919,
			"lat" : 29.7813955179
		}, {
			"lng" : 106.4099317789,
			"lat" : 29.7819286195
		}, {
			"lng" : 106.4058145881,
			"lat" : 29.7867510818
		}, {
			"lng" : 106.4052915573,
			"lat" : 29.7873207017
		}, {
			"lng" : 106.4048007131,
			"lat" : 29.7877820752
		}, {
			"lng" : 106.3985672593,
			"lat" : 29.7933642468
		}, {
			"lng" : 106.3980093598,
			"lat" : 29.7939070609
		}, {
			"lng" : 106.3977599144,
			"lat" : 29.7941933639
		}, {
			"lng" : 106.3975211978,
			"lat" : 29.7944994512
		}, {
			"lng" : 106.3973119855,
			"lat" : 29.794809029
		}, {
			"lng" : 106.397113502,
			"lat" : 29.7951446754
		}, {
			"lng" : 106.3969418406,
			"lat" : 29.7954817173
		}, {
			"lng" : 106.3967916369,
			"lat" : 29.795835517
		}, {
			"lng" : 106.3966709375,
			"lat" : 29.7961793066
		}, {
			"lng" : 106.3965663314,
			"lat" : 29.7965459057
		}, {
			"lng" : 106.3964644074,
			"lat" : 29.7970863749
		}, {
			"lng" : 106.3964134455,
			"lat" : 29.7976417378
		}, {
			"lng" : 106.3964214921,
			"lat" : 29.7981896494
		}, {
			"lng" : 106.3964831829,
			"lat" : 29.7987259202
		}, {
			"lng" : 106.3965985179,
			"lat" : 29.7992645157
		}, {
			"lng" : 106.3967701793,
			"lat" : 29.7998010134
		}, {
			"lng" : 106.396998167,
			"lat" : 29.800321914
		}, {
			"lng" : 106.3972663879,
			"lat" : 29.8008076664
		}, {
			"lng" : 106.3975211978,
			"lat" : 29.8011884462
		}, {
			"lng" : 106.3978993893,
			"lat" : 29.8016709359
		}, {
			"lng" : 106.4018180966,
			"lat" : 29.806296947
		}, {
			"lng" : 106.4021989703,
			"lat" : 29.8067002815
		}, {
			"lng" : 106.4026039839,
			"lat" : 29.8070838317
		}, {
			"lng" : 106.4030277729,
			"lat" : 29.8074403831
		}, {
			"lng" : 106.4034891129,
			"lat" : 29.807786693
		}, {
			"lng" : 106.4039424062,
			"lat" : 29.8080878513
		}, {
			"lng" : 106.4044117928,
			"lat" : 29.808366899
		}, {
			"lng" : 106.404889226,
			"lat" : 29.8086187161
		}, {
			"lng" : 106.4054015279,
			"lat" : 29.8088556378
		}, {
			"lng" : 106.405916512,
			"lat" : 29.809063933
		}, {
			"lng" : 106.4064449072,
			"lat" : 29.8092473254
		}, {
			"lng" : 106.4069867134,
			"lat" : 29.8094051171
		}, {
			"lng" : 106.407533884,
			"lat" : 29.8095370755
		}, {
			"lng" : 106.40835464,
			"lat" : 29.8096832302
		}, {
			"lng" : 106.409188807,
			"lat" : 29.8097712022
		}, {
			"lng" : 106.4148643613,
			"lat" : 29.8100372124
		}, {
			"lng" : 106.41536057,
			"lat" : 29.8100714236
		}, {
			"lng" : 106.4158111811,
			"lat" : 29.8101223913
		}, {
			"lng" : 106.4166104794,
			"lat" : 29.8102680797
		}, {
			"lng" : 106.4173829556,
			"lat" : 29.8104782337
		}, {
			"lng" : 106.4181339741,
			"lat" : 29.8107565766
		}, {
			"lng" : 106.4188501239,
			"lat" : 29.811097755
		}, {
			"lng" : 106.4193597436,
			"lat" : 29.8113916887
		}, {
			"lng" : 106.4198479056,
			"lat" : 29.8117230905
		}, {
			"lng" : 106.420301199,
			"lat" : 29.8120791599
		}, {
			"lng" : 106.4207276702,
			"lat" : 29.8124696713
		}, {
			"lng" : 106.4211648703,
			"lat" : 29.8129255762
		}, {
			"lng" : 106.4264890552,
			"lat" : 29.8186994937
		}, {
			"lng" : 106.4269316196,
			"lat" : 29.8191383825
		}, {
			"lng" : 106.4274036884,
			"lat" : 29.8195295644
		}, {
			"lng" : 106.4278382063,
			"lat" : 29.8198341779
		}, {
			"lng" : 106.4282888174,
			"lat" : 29.82010435
		}, {
			"lng" : 106.4287823439,
			"lat" : 29.8203524143
		}, {
			"lng" : 106.4292865992,
			"lat" : 29.8205625472
		}, {
			"lng" : 106.4296889305,
			"lat" : 29.8207024027
		}, {
			"lng" : 106.4301207662,
			"lat" : 29.8208268997
		}, {
			"lng" : 106.4326822758,
			"lat" : 29.8214591554
		}, {
			"lng" : 106.4332428575,
			"lat" : 29.8216155316
		}, {
			"lng" : 106.4336264133,
			"lat" : 29.8217495682
		}, {
			"lng" : 106.4339911938,
			"lat" : 29.8219012899
		}, {
			"lng" : 106.434353292,
			"lat" : 29.8220779105
		}, {
			"lng" : 106.434699297,
			"lat" : 29.8222747757
		}, {
			"lng" : 106.435187459,
			"lat" : 29.8226068395
		}, {
			"lng" : 106.4356648922,
			"lat" : 29.8230042907
		}, {
			"lng" : 106.4405867457,
			"lat" : 29.827585104
		} ]
	}, {
		"name" : "六号线下行",
		"curves" : [ {
			"lng" : 106.6413876414,
			"lat" : 29.4845465074
		}, {
			"lng" : 106.6469424963,
			"lat" : 29.4937455615
		}, {
			"lng" : 106.6477230191,
			"lat" : 29.4949546541
		}, {
			"lng" : 106.6485437751,
			"lat" : 29.4960822558
		}, {
			"lng" : 106.6564106941,
			"lat" : 29.5063001366
		}, {
			"lng" : 106.6568103433,
			"lat" : 29.5068799827
		}, {
			"lng" : 106.6571134329,
			"lat" : 29.5074523556
		}, {
			"lng" : 106.6573467851,
			"lat" : 29.508058806
		}, {
			"lng" : 106.6577249765,
			"lat" : 29.50941642
		}, {
			"lng" : 106.6579207778,
			"lat" : 29.5099759403
		}, {
			"lng" : 106.6581192613,
			"lat" : 29.5104122099
		}, {
			"lng" : 106.658988297,
			"lat" : 29.5122146908
		}, {
			"lng" : 106.6595596075,
			"lat" : 29.5134812167
		}, {
			"lng" : 106.6612279415,
			"lat" : 29.5169375893
		}, {
			"lng" : 106.661375463,
			"lat" : 29.517302873
		}, {
			"lng" : 106.6614934802,
			"lat" : 29.5176672217
		}, {
			"lng" : 106.6615819931,
			"lat" : 29.5180371709
		}, {
			"lng" : 106.6616490483,
			"lat" : 29.5184204228
		}, {
			"lng" : 106.6616812348,
			"lat" : 29.518788502
		}, {
			"lng" : 106.6616892815,
			"lat" : 29.5191579803
		}, {
			"lng" : 106.6616731882,
			"lat" : 29.5195178877
		}, {
			"lng" : 106.6616275907,
			"lat" : 29.5198852627
		}, {
			"lng" : 106.6615578532,
			"lat" : 29.5202493688
		}, {
			"lng" : 106.6614639759,
			"lat" : 29.5206004031
		}, {
			"lng" : 106.6613432765,
			"lat" : 29.5209456013
		}, {
			"lng" : 106.6611984372,
			"lat" : 29.5212921986
		}, {
			"lng" : 106.6610267758,
			"lat" : 29.5216301591
		}, {
			"lng" : 106.6608309746,
			"lat" : 29.5219583157
		}, {
			"lng" : 106.6606190801,
			"lat" : 29.5222675662
		}, {
			"lng" : 106.6603803635,
			"lat" : 29.5225721479
		}, {
			"lng" : 106.6601255536,
			"lat" : 29.5228561898
		}, {
			"lng" : 106.659835875,
			"lat" : 29.523139064
		}, {
			"lng" : 106.659540832,
			"lat" : 29.52339323
		}, {
			"lng" : 106.6592162848,
			"lat" : 29.5236427275
		}, {
			"lng" : 106.6588702798,
			"lat" : 29.523873553
		}, {
			"lng" : 106.6585108638,
			"lat" : 29.5240845396
		}, {
			"lng" : 106.6581353545,
			"lat" : 29.5242749874
		}, {
			"lng" : 106.6577357054,
			"lat" : 29.5244479304
		}, {
			"lng" : 106.6571724415,
			"lat" : 29.5246549482
		}, {
			"lng" : 106.6517168283,
			"lat" : 29.5265383939
		}, {
			"lng" : 106.6510489583,
			"lat" : 29.5268077214
		}, {
			"lng" : 106.6485115886,
			"lat" : 29.5279090628
		}, {
			"lng" : 106.6479697824,
			"lat" : 29.528155982
		}, {
			"lng" : 106.6474145651,
			"lat" : 29.5284379079
		}, {
			"lng" : 106.6439411044,
			"lat" : 29.5303324852
		}, {
			"lng" : 106.6432732344,
			"lat" : 29.5307418288
		}, {
			"lng" : 106.6426590085,
			"lat" : 29.5311990127
		}, {
			"lng" : 106.6421949863,
			"lat" : 29.5316095196
		}, {
			"lng" : 106.6401618719,
			"lat" : 29.5335325087
		}, {
			"lng" : 106.6397246718,
			"lat" : 29.5339294707
		}, {
			"lng" : 106.6390675306,
			"lat" : 29.5344519833
		}, {
			"lng" : 106.638354063,
			"lat" : 29.5349287533
		}, {
			"lng" : 106.6055908799,
			"lat" : 29.5538528147
		}, {
			"lng" : 106.6047486663,
			"lat" : 29.5543094274
		}, {
			"lng" : 106.6043436527,
			"lat" : 29.554492352
		}, {
			"lng" : 106.6039198637,
			"lat" : 29.554659177
		}, {
			"lng" : 106.6035041213,
			"lat" : 29.5547991697
		}, {
			"lng" : 106.6030132771,
			"lat" : 29.5549400956
		}, {
			"lng" : 106.5970051289,
			"lat" : 29.556514999
		}, {
			"lng" : 106.5956237912,
			"lat" : 29.5568348764
		}, {
			"lng" : 106.586099267,
			"lat" : 29.5593352979
		}, {
			"lng" : 106.5857800841,
			"lat" : 29.5594412209
		}, {
			"lng" : 106.5854904056,
			"lat" : 29.5595613757
		}, {
			"lng" : 106.5844202042,
			"lat" : 29.5600776898
		}, {
			"lng" : 106.5838998556,
			"lat" : 29.560300033
		}, {
			"lng" : 106.5834519267,
			"lat" : 29.5604617156
		}, {
			"lng" : 106.5824353695,
			"lat" : 29.5607731814
		}, {
			"lng" : 106.5821000934,
			"lat" : 29.5608931013
		}, {
			"lng" : 106.5818077326,
			"lat" : 29.5610293526
		}, {
			"lng" : 106.581518054,
			"lat" : 29.5612029327
		}, {
			"lng" : 106.581223011,
			"lat" : 29.5614290063
		}, {
			"lng" : 106.580965519,
			"lat" : 29.5616858757
		}, {
			"lng" : 106.5807509422,
			"lat" : 29.5619614088
		}, {
			"lng" : 106.5805658698,
			"lat" : 29.5622740365
		}, {
			"lng" : 106.5771567822,
			"lat" : 29.5698178696
		}, {
			"lng" : 106.5769985318,
			"lat" : 29.5701400377
		}, {
			"lng" : 106.5768375993,
			"lat" : 29.570391986
		}, {
			"lng" : 106.5766847134,
			"lat" : 29.5705849126
		}, {
			"lng" : 106.5764996409,
			"lat" : 29.5707792386
		}, {
			"lng" : 106.5763038397,
			"lat" : 29.5709514022
		}, {
			"lng" : 106.5760812163,
			"lat" : 29.5711130678
		}, {
			"lng" : 106.575756669,
			"lat" : 29.5713080926
		}, {
			"lng" : 106.5739193559,
			"lat" : 29.572336399
		}, {
			"lng" : 106.5734821558,
			"lat" : 29.5726238003
		}, {
			"lng" : 106.5732219815,
			"lat" : 29.5728426167
		}, {
			"lng" : 106.5729993582,
			"lat" : 29.5730688976
		}, {
			"lng" : 106.5727981925,
			"lat" : 29.5733196721
		}, {
			"lng" : 106.5726265311,
			"lat" : 29.573586309
		}, {
			"lng" : 106.5724763274,
			"lat" : 29.5738832711
		}, {
			"lng" : 106.5723636746,
			"lat" : 29.5741918962
		}, {
			"lng" : 106.5722858906,
			"lat" : 29.5745089183
		}, {
			"lng" : 106.5722483397,
			"lat" : 29.5748313047
		}, {
			"lng" : 106.5722456574,
			"lat" : 29.5773074873
		}, {
			"lng" : 106.5722751617,
			"lat" : 29.5776305646
		}, {
			"lng" : 106.57240659,
			"lat" : 29.5784966865
		}, {
			"lng" : 106.5724253654,
			"lat" : 29.5788202265
		}, {
			"lng" : 106.5724146366,
			"lat" : 29.5790539585
		}, {
			"lng" : 106.5723797679,
			"lat" : 29.579286057
		}, {
			"lng" : 106.5723207593,
			"lat" : 29.5795144228
		}, {
			"lng" : 106.5722376108,
			"lat" : 29.579746287
		}, {
			"lng" : 106.5720391273,
			"lat" : 29.5801421344
		}, {
			"lng" : 106.5702930093,
			"lat" : 29.5832491447
		}, {
			"lng" : 106.5701133013,
			"lat" : 29.5835437459
		}, {
			"lng" : 106.5699470043,
			"lat" : 29.5837707025
		}, {
			"lng" : 106.5696331859,
			"lat" : 29.5840939923
		}, {
			"lng" : 106.5692657232,
			"lat" : 29.5843708639
		}, {
			"lng" : 106.5682142973,
			"lat" : 29.5849626246
		}, {
			"lng" : 106.5677395463,
			"lat" : 29.585184913
		}, {
			"lng" : 106.567479372,
			"lat" : 29.5852735483
		}, {
			"lng" : 106.5672111511,
			"lat" : 29.5853416575
		}, {
			"lng" : 106.5669375658,
			"lat" : 29.5853883076
		}, {
			"lng" : 106.5666586161,
			"lat" : 29.5854137319
		}, {
			"lng" : 106.5639147162,
			"lat" : 29.5854438212
		}, {
			"lng" : 106.5634077787,
			"lat" : 29.5854372902
		}, {
			"lng" : 106.5629464388,
			"lat" : 29.5853929726
		}, {
			"lng" : 106.5624931455,
			"lat" : 29.5853027047
		}, {
			"lng" : 106.5620908141,
			"lat" : 29.5851823472
		}, {
			"lng" : 106.5610983968,
			"lat" : 29.5848194081
		}, {
			"lng" : 106.5607309341,
			"lat" : 29.5846992833
		}, {
			"lng" : 106.5602695942,
			"lat" : 29.5845917541
		}, {
			"lng" : 106.5598082542,
			"lat" : 29.5845318082
		}, {
			"lng" : 106.5593039989,
			"lat" : 29.584514081
		}, {
			"lng" : 106.5561765432,
			"lat" : 29.5845388058
		}, {
			"lng" : 106.5555033088,
			"lat" : 29.5845269099
		}, {
			"lng" : 106.5547308326,
			"lat" : 29.5844592666
		}, {
			"lng" : 106.5531483293,
			"lat" : 29.584228113
		}, {
			"lng" : 106.5525797009,
			"lat" : 29.5841886932
		}, {
			"lng" : 106.5495783091,
			"lat" : 29.5842500388
		}, {
			"lng" : 106.5489694476,
			"lat" : 29.5842873593
		}, {
			"lng" : 106.5484812856,
			"lat" : 29.5843689978
		}, {
			"lng" : 106.5479689837,
			"lat" : 29.5845096492
		}, {
			"lng" : 106.5453243256,
			"lat" : 29.5853540198
		}, {
			"lng" : 106.5449032187,
			"lat" : 29.5855056326
		}, {
			"lng" : 106.5445035696,
			"lat" : 29.5856756718
		}, {
			"lng" : 106.5440046787,
			"lat" : 29.5859306136
		}, {
			"lng" : 106.5435487032,
			"lat" : 29.5862114453
		}, {
			"lng" : 106.5416926146,
			"lat" : 29.5875535487
		}, {
			"lng" : 106.5413680673,
			"lat" : 29.5877751317
		}, {
			"lng" : 106.5409469604,
			"lat" : 29.5880067437
		}, {
			"lng" : 106.5404990315,
			"lat" : 29.5881928726
		}, {
			"lng" : 106.5400081873,
			"lat" : 29.5883358511
		}, {
			"lng" : 106.5395012498,
			"lat" : 29.5884251834
		}, {
			"lng" : 106.5370470285,
			"lat" : 29.5886854827
		}, {
			"lng" : 106.5364354849,
			"lat" : 29.5887221019
		}, {
			"lng" : 106.5359392762,
			"lat" : 29.5887043754
		}, {
			"lng" : 106.5354591608,
			"lat" : 29.588642566
		}, {
			"lng" : 106.534987092,
			"lat" : 29.5885376066
		}, {
			"lng" : 106.5345311165,
			"lat" : 29.5883904301
		}, {
			"lng" : 106.5342226624,
			"lat" : 29.5882626125
		}, {
			"lng" : 106.5339356661,
			"lat" : 29.5881205669
		}, {
			"lng" : 106.5326589346,
			"lat" : 29.5873846789
		}, {
			"lng" : 106.5321063995,
			"lat" : 29.5870989523
		}, {
			"lng" : 106.5314278007,
			"lat" : 29.5868108924
		}, {
			"lng" : 106.530700922,
			"lat" : 29.5865713472
		}, {
			"lng" : 106.5254545212,
			"lat" : 29.5851394291
		}, {
			"lng" : 106.5234455466,
			"lat" : 29.5846673278
		}, {
			"lng" : 106.5197896957,
			"lat" : 29.5836764677
		}, {
			"lng" : 106.5189743042,
			"lat" : 29.5835045591
		}, {
			"lng" : 106.5185558796,
			"lat" : 29.5834448458
		}, {
			"lng" : 106.5181428194,
			"lat" : 29.5834044927
		}, {
			"lng" : 106.5172845125,
			"lat" : 29.583370904
		}, {
			"lng" : 106.5046459436,
			"lat" : 29.5831868655
		}, {
			"lng" : 106.5040236712,
			"lat" : 29.5831947962
		}, {
			"lng" : 106.5034872293,
			"lat" : 29.5832433133
		}, {
			"lng" : 106.5028220415,
			"lat" : 29.5833678716
		}, {
			"lng" : 106.5021836758,
			"lat" : 29.5835575079
		}, {
			"lng" : 106.5015774965,
			"lat" : 29.5838110555
		}, {
			"lng" : 106.5010035038,
			"lat" : 29.5841303799
		}, {
			"lng" : 106.5004885197,
			"lat" : 29.5844949543
		}, {
			"lng" : 106.5000164509,
			"lat" : 29.5849225053
		}, {
			"lng" : 106.4996087551,
			"lat" : 29.5853890074
		}, {
			"lng" : 106.4992707968,
			"lat" : 29.5858937602
		}, {
			"lng" : 106.4989998937,
			"lat" : 29.586429999
		}, {
			"lng" : 106.4988067746,
			"lat" : 29.5869897928
		}, {
			"lng" : 106.4986887574,
			"lat" : 29.5875659107
		}, {
			"lng" : 106.4986485243,
			"lat" : 29.5881676822
		}, {
			"lng" : 106.4986914396,
			"lat" : 29.5908056382
		}, {
			"lng" : 106.4988228679,
			"lat" : 29.5924763079
		}, {
			"lng" : 106.49884969,
			"lat" : 29.5932049286
		}, {
			"lng" : 106.4988818765,
			"lat" : 29.5955906349
		}, {
			"lng" : 106.4988094568,
			"lat" : 29.5974802216
		}, {
			"lng" : 106.4988416433,
			"lat" : 29.599730794
		}, {
			"lng" : 106.4988657832,
			"lat" : 29.6002975106
		}, {
			"lng" : 106.4989757538,
			"lat" : 29.601527018
		}, {
			"lng" : 106.4990079403,
			"lat" : 29.6021116817
		}, {
			"lng" : 106.4991661906,
			"lat" : 29.6126613998
		}, {
			"lng" : 106.4994075894,
			"lat" : 29.6194361998
		}, {
			"lng" : 106.4993861318,
			"lat" : 29.6199666641
		}, {
			"lng" : 106.4993056655,
			"lat" : 29.6204745083
		}, {
			"lng" : 106.4991635084,
			"lat" : 29.6209723236
		}, {
			"lng" : 106.4989596605,
			"lat" : 29.6214631415
		}, {
			"lng" : 106.4988014102,
			"lat" : 29.6217571647
		}, {
			"lng" : 106.4986297488,
			"lat" : 29.6220339329
		}, {
			"lng" : 106.4984366298,
			"lat" : 29.6223006741
		}, {
			"lng" : 106.4982113242,
			"lat" : 29.6225704458
		}, {
			"lng" : 106.4979806542,
			"lat" : 29.6228129366
		}, {
			"lng" : 106.4977258444,
			"lat" : 29.6230486651
		}, {
			"lng" : 106.4974522591,
			"lat" : 29.6232692374
		}, {
			"lng" : 106.4971625805,
			"lat" : 29.6234737211
		}, {
			"lng" : 106.4968594909,
			"lat" : 29.6236614166
		}, {
			"lng" : 106.4965429902,
			"lat" : 29.6238313916
		}, {
			"lng" : 106.4962211251,
			"lat" : 29.6239792159
		}, {
			"lng" : 106.4958831668,
			"lat" : 29.6241123509
		}, {
			"lng" : 106.4955425262,
			"lat" : 29.6242228691
		}, {
			"lng" : 106.4951777458,
			"lat" : 29.6243191644
		}, {
			"lng" : 106.4948129654,
			"lat" : 29.6243921436
		}, {
			"lng" : 106.4944455028,
			"lat" : 29.6244443715
		}, {
			"lng" : 106.4939922094,
			"lat" : 29.6244793455
		}, {
			"lng" : 106.4935362339,
			"lat" : 29.6244830761
		}, {
			"lng" : 106.4930722117,
			"lat" : 29.6244539311
		}, {
			"lng" : 106.4926108718,
			"lat" : 29.6243919105
		}, {
			"lng" : 106.4920771122,
			"lat" : 29.6242844235
		}, {
			"lng" : 106.4869219065,
			"lat" : 29.6231351687
		}, {
			"lng" : 106.4863237739,
			"lat" : 29.623028613
		}, {
			"lng" : 106.4857390523,
			"lat" : 29.622965892
		}, {
			"lng" : 106.4851596951,
			"lat" : 29.6229451405
		}, {
			"lng" : 106.484580338,
			"lat" : 29.6229642599
		}, {
			"lng" : 106.4822039008,
			"lat" : 29.6232004543
		}, {
			"lng" : 106.4818444848,
			"lat" : 29.6232480196
		}, {
			"lng" : 106.4815628529,
			"lat" : 29.623304445
		}, {
			"lng" : 106.4812758565,
			"lat" : 29.6233834872
		}, {
			"lng" : 106.4809888601,
			"lat" : 29.623486545
		}, {
			"lng" : 106.4806321263,
			"lat" : 29.6236516238
		}, {
			"lng" : 106.4802914858,
			"lat" : 29.6238558735
		}, {
			"lng" : 106.4799883962,
			"lat" : 29.6240860037
		}, {
			"lng" : 106.4797148108,
			"lat" : 29.6243443458
		}, {
			"lng" : 106.4794921875,
			"lat" : 29.6246047856
		}, {
			"lng" : 106.4793097973,
			"lat" : 29.6248757169
		}, {
			"lng" : 106.4788672328,
			"lat" : 29.6257393348
		}, {
			"lng" : 106.4786338806,
			"lat" : 29.6262494814
		}, {
			"lng" : 106.4784300327,
			"lat" : 29.6267689516
		}, {
			"lng" : 106.4782530069,
			"lat" : 29.627304973
		}, {
			"lng" : 106.4781081676,
			"lat" : 29.6278304998
		}, {
			"lng" : 106.4779955149,
			"lat" : 29.628370246
		}, {
			"lng" : 106.4779096842,
			"lat" : 29.6289144191
		}, {
			"lng" : 106.47785604,
			"lat" : 29.6294613871
		}, {
			"lng" : 106.4778319001,
			"lat" : 29.6300099842
		}, {
			"lng" : 106.477842629,
			"lat" : 29.6306308535
		}, {
			"lng" : 106.4778935909,
			"lat" : 29.631250087
		}, {
			"lng" : 106.4779794216,
			"lat" : 29.6318574264
		}, {
			"lng" : 106.4781081676,
			"lat" : 29.6324682592
		}, {
			"lng" : 106.4822414517,
			"lat" : 29.647385419
		}, {
			"lng" : 106.4824211597,
			"lat" : 29.6481064166
		}, {
			"lng" : 106.4825686812,
			"lat" : 29.6488334697
		}, {
			"lng" : 106.4826786518,
			"lat" : 29.6495647134
		}, {
			"lng" : 106.4827564359,
			"lat" : 29.6502905905
		}, {
			"lng" : 106.4827993512,
			"lat" : 29.6510185602
		}, {
			"lng" : 106.4828073978,
			"lat" : 29.6517563147
		}, {
			"lng" : 106.4827698469,
			"lat" : 29.6526553656
		}, {
			"lng" : 106.4825043082,
			"lat" : 29.655778089
		}, {
			"lng" : 106.4824801683,
			"lat" : 29.6564614996
		}, {
			"lng" : 106.4825069904,
			"lat" : 29.6568747603
		}, {
			"lng" : 106.482565999,
			"lat" : 29.6573034029
		}, {
			"lng" : 106.4826571941,
			"lat" : 29.6577187579
		}, {
			"lng" : 106.4827752113,
			"lat" : 29.658119427
		}, {
			"lng" : 106.4829227328,
			"lat" : 29.6585037788
		}, {
			"lng" : 106.4830997586,
			"lat" : 29.6588874299
		}, {
			"lng" : 106.4833036065,
			"lat" : 29.659251967
		}, {
			"lng" : 106.4835450053,
			"lat" : 29.6596286229
		}, {
			"lng" : 106.4916586876,
			"lat" : 29.6711574336
		}, {
			"lng" : 106.4918920398,
			"lat" : 29.6715494263
		}, {
			"lng" : 106.4920824766,
			"lat" : 29.671957498
		}, {
			"lng" : 106.4922353625,
			"lat" : 29.6723874746
		}, {
			"lng" : 106.4923399687,
			"lat" : 29.6728186146
		}, {
			"lng" : 106.4923882484,
			"lat" : 29.6731486102
		}, {
			"lng" : 106.4924123883,
			"lat" : 29.6734809352
		}, {
			"lng" : 106.4924097061,
			"lat" : 29.6738046364
		}, {
			"lng" : 106.492382884,
			"lat" : 29.6742537148
		}, {
			"lng" : 106.491894722,
			"lat" : 29.6807170052
		}, {
			"lng" : 106.4918115735,
			"lat" : 29.6812970148
		}, {
			"lng" : 106.4916613698,
			"lat" : 29.6818572137
		}, {
			"lng" : 106.4914682508,
			"lat" : 29.6823421421
		}, {
			"lng" : 106.4912214875,
			"lat" : 29.6828170481
		}, {
			"lng" : 106.4909210801,
			"lat" : 29.6832688825
		}, {
			"lng" : 106.4905723929,
			"lat" : 29.6836934512
		}, {
			"lng" : 106.4903122187,
			"lat" : 29.6839616603
		}, {
			"lng" : 106.4899635315,
			"lat" : 29.6842799683
		}, {
			"lng" : 106.4884024858,
			"lat" : 29.6854758279
		}, {
			"lng" : 106.4879947901,
			"lat" : 29.6858195301
		}, {
			"lng" : 106.4877480268,
			"lat" : 29.6860621015
		}, {
			"lng" : 106.4875119925,
			"lat" : 29.6863251779
		}, {
			"lng" : 106.4873054624,
			"lat" : 29.6865940789
		}, {
			"lng" : 106.4871123433,
			"lat" : 29.6868818535
		}, {
			"lng" : 106.4869058132,
			"lat" : 29.6872544447
		}, {
			"lng" : 106.486736834,
			"lat" : 29.6876405493
		}, {
			"lng" : 106.4866054058,
			"lat" : 29.6880292156
		}, {
			"lng" : 106.4865088463,
			"lat" : 29.6884432786
		}, {
			"lng" : 106.4864578843,
			"lat" : 29.6888184271
		}, {
			"lng" : 106.4864391088,
			"lat" : 29.6891956713
		}, {
			"lng" : 106.4864981174,
			"lat" : 29.6902195128
		}, {
			"lng" : 106.486543715,
			"lat" : 29.6906587316
		}, {
			"lng" : 106.4866054058,
			"lat" : 29.6910142993
		}, {
			"lng" : 106.4866966009,
			"lat" : 29.6913652057
		}, {
			"lng" : 106.4868226647,
			"lat" : 29.691726363
		}, {
			"lng" : 106.4869728684,
			"lat" : 29.6920616557
		}, {
			"lng" : 106.4871606231,
			"lat" : 29.6924025393
		}, {
			"lng" : 106.4873832464,
			"lat" : 29.6927373637
		}, {
			"lng" : 106.487621963,
			"lat" : 29.6930418968
		}, {
			"lng" : 106.4879411459,
			"lat" : 29.6933841751
		}, {
			"lng" : 106.4883086085,
			"lat" : 29.6937150352
		}, {
			"lng" : 106.494217515,
			"lat" : 29.6986412272
		}, {
			"lng" : 106.4948129654,
			"lat" : 29.6991782637
		}, {
			"lng" : 106.4950758219,
			"lat" : 29.6994573818
		}, {
			"lng" : 106.4953145385,
			"lat" : 29.6997500123
		}, {
			"lng" : 106.495539844,
			"lat" : 29.7000626786
		}, {
			"lng" : 106.4957436919,
			"lat" : 29.7003869932
		}, {
			"lng" : 106.4959153533,
			"lat" : 29.7007134035
		}, {
			"lng" : 106.496065557,
			"lat" : 29.7010484332
		}, {
			"lng" : 106.4961969852,
			"lat" : 29.7013995375
		}, {
			"lng" : 106.4962989092,
			"lat" : 29.7017571641
		}, {
			"lng" : 106.4964061975,
			"lat" : 29.7022979116
		}, {
			"lng" : 106.4964517951,
			"lat" : 29.7028537999
		}, {
			"lng" : 106.4964383841,
			"lat" : 29.703411083
		}, {
			"lng" : 106.4963632822,
			"lat" : 29.7039646353
		}, {
			"lng" : 106.493447721,
			"lat" : 29.7161229131
		}, {
			"lng" : 106.4933699369,
			"lat" : 29.7165037819
		}, {
			"lng" : 106.4933243394,
			"lat" : 29.7168250151
		}, {
			"lng" : 106.4933001995,
			"lat" : 29.7171751324
		}, {
			"lng" : 106.4932975173,
			"lat" : 29.7175166296
		}, {
			"lng" : 106.4933297038,
			"lat" : 29.7179473431
		}, {
			"lng" : 106.4933913946,
			"lat" : 29.7183573228
		}, {
			"lng" : 106.4934906363,
			"lat" : 29.7187707949
		}, {
			"lng" : 106.493627429,
			"lat" : 29.719185896
		}, {
			"lng" : 106.4938634634,
			"lat" : 29.719733072
		}, {
			"lng" : 106.4950919151,
			"lat" : 29.722299099
		}, {
			"lng" : 106.4953306317,
			"lat" : 29.722873744
		}, {
			"lng" : 106.4955425262,
			"lat" : 29.7234572371
		}, {
			"lng" : 106.4974415302,
			"lat" : 29.7299956218
		}, {
			"lng" : 106.4975193143,
			"lat" : 29.730349187
		}, {
			"lng" : 106.4975622296,
			"lat" : 29.7306885431
		}, {
			"lng" : 106.4975756407,
			"lat" : 29.731039078
		}, {
			"lng" : 106.4975568652,
			"lat" : 29.7313982293
		}, {
			"lng" : 106.4975085855,
			"lat" : 29.7317371161
		}, {
			"lng" : 106.4974281192,
			"lat" : 29.7320806599
		}, {
			"lng" : 106.4973154664,
			"lat" : 29.7324176811
		}, {
			"lng" : 106.4971706271,
			"lat" : 29.7327544683
		}, {
			"lng" : 106.4969319105,
			"lat" : 29.7331830201
		}, {
			"lng" : 106.4966341853,
			"lat" : 29.7335948009
		}, {
			"lng" : 106.4962908626,
			"lat" : 29.7339763021
		}, {
			"lng" : 106.49589926,
			"lat" : 29.7343233318
		}, {
			"lng" : 106.4954674244,
			"lat" : 29.7346316982
		}, {
			"lng" : 106.4950087667,
			"lat" : 29.7348932499
		}, {
			"lng" : 106.494512558,
			"lat" : 29.7351152073
		}, {
			"lng" : 106.4940002561,
			"lat" : 29.7352863914
		}, {
			"lng" : 106.4934235811,
			"lat" : 29.7354272977
		}, {
			"lng" : 106.484105587,
			"lat" : 29.7374633143
		}, {
			"lng" : 106.4831346273,
			"lat" : 29.7376524275
		}, {
			"lng" : 106.4825820923,
			"lat" : 29.7377267218
		}, {
			"lng" : 106.4819946885,
			"lat" : 29.737778658
		}, {
			"lng" : 106.475943625,
			"lat" : 29.7381659657
		}, {
			"lng" : 106.4753991365,
			"lat" : 29.7382258201
		}, {
			"lng" : 106.4748841524,
			"lat" : 29.7383208418
		}, {
			"lng" : 106.4742216468,
			"lat" : 29.7384997059
		}, {
			"lng" : 106.4714375138,
			"lat" : 29.7393765547
		}, {
			"lng" : 106.4695841074,
			"lat" : 29.7398898512
		}, {
			"lng" : 106.4678755403,
			"lat" : 29.7404411063
		}, {
			"lng" : 106.4671647549,
			"lat" : 29.7407131229
		}, {
			"lng" : 106.4664834738,
			"lat" : 29.741018675
		}, {
			"lng" : 106.4658263326,
			"lat" : 29.7413600911
		}, {
			"lng" : 106.4651933312,
			"lat" : 29.7417359734
		}, {
			"lng" : 106.4647185802,
			"lat" : 29.7420531667
		}, {
			"lng" : 106.4641177654,
			"lat" : 29.7424805144
		}, {
			"lng" : 106.4120399952,
			"lat" : 29.7801391094
		}, {
			"lng" : 106.4113345742,
			"lat" : 29.780668493
		}, {
			"lng" : 106.4107391238,
			"lat" : 29.7811797156
		}, {
			"lng" : 106.4101758599,
			"lat" : 29.7817316749
		}, {
			"lng" : 106.4097681642,
			"lat" : 29.7821844608
		}, {
			"lng" : 106.4086711407,
			"lat" : 29.7834708736
		}, {
			"lng" : 106.4084002376,
			"lat" : 29.7838107483
		}, {
			"lng" : 106.4081668854,
			"lat" : 29.7841392151
		}, {
			"lng" : 106.4074641466,
			"lat" : 29.7852705668
		}, {
			"lng" : 106.4072415233,
			"lat" : 29.7856050813
		}, {
			"lng" : 106.4069759846,
			"lat" : 29.7859477422
		}, {
			"lng" : 106.406672895,
			"lat" : 29.7862785298
		}, {
			"lng" : 106.4062222838,
			"lat" : 29.7867008005
		}, {
			"lng" : 106.3987791538,
			"lat" : 29.7933668072
		}, {
			"lng" : 106.3984492421,
			"lat" : 29.7936761558
		}, {
			"lng" : 106.3981837034,
			"lat" : 29.7939505883
		}, {
			"lng" : 106.3979288936,
			"lat" : 29.7942457363
		}, {
			"lng" : 106.3977009058,
			"lat" : 29.7945455388
		}, {
			"lng" : 106.3974916935,
			"lat" : 29.7948562803
		}, {
			"lng" : 106.3972958922,
			"lat" : 29.7951930904
		}, {
			"lng" : 106.3971322775,
			"lat" : 29.7955229164
		}, {
			"lng" : 106.396984756,
			"lat" : 29.795868802
		}, {
			"lng" : 106.3968640566,
			"lat" : 29.7962214365
		}, {
			"lng" : 106.3967674971,
			"lat" : 29.7965710438
		}, {
			"lng" : 106.3966628909,
			"lat" : 29.7971205906
		}, {
			"lng" : 106.3966172934,
			"lat" : 29.7976671085
		}, {
			"lng" : 106.39662534,
			"lat" : 29.7982147872
		}, {
			"lng" : 106.3966870308,
			"lat" : 29.7987510578
		}, {
			"lng" : 106.396805048,
			"lat" : 29.7992896531
		}, {
			"lng" : 106.3969740272,
			"lat" : 29.7998173062
		}, {
			"lng" : 106.3972020149,
			"lat" : 29.8003382066
		}, {
			"lng" : 106.3974702358,
			"lat" : 29.8008239589
		}, {
			"lng" : 106.3977411389,
			"lat" : 29.8012273155
		}, {
			"lng" : 106.3980764151,
			"lat" : 29.8016506868
		}, {
			"lng" : 106.4019280672,
			"lat" : 29.8061968695
		}, {
			"lng" : 106.4023089409,
			"lat" : 29.8065997389
		}, {
			"lng" : 106.4027220011,
			"lat" : 29.806989108
		}, {
			"lng" : 106.4031538367,
			"lat" : 29.8073507799
		}, {
			"lng" : 106.4036017656,
			"lat" : 29.8076842897
		}, {
			"lng" : 106.404055059,
			"lat" : 29.8079845173
		}, {
			"lng" : 106.4045163989,
			"lat" : 29.8082579797
		}, {
			"lng" : 106.4049938321,
			"lat" : 29.8085095644
		}, {
			"lng" : 106.405506134,
			"lat" : 29.8087462536
		}, {
			"lng" : 106.4060211182,
			"lat" : 29.8089540835
		}, {
			"lng" : 106.4065414667,
			"lat" : 29.8091339852
		}, {
			"lng" : 106.4070805907,
			"lat" : 29.8092920098
		}, {
			"lng" : 106.4076197147,
			"lat" : 29.8094218737
		}, {
			"lng" : 106.4084404707,
			"lat" : 29.8095689596
		}, {
			"lng" : 106.4092826843,
			"lat" : 29.8096585608
		}, {
			"lng" : 106.4149394631,
			"lat" : 29.809923873
		}, {
			"lng" : 106.4154329896,
			"lat" : 29.8099580843
		}, {
			"lng" : 106.4158862829,
			"lat" : 29.8100095176
		}, {
			"lng" : 106.4166855812,
			"lat" : 29.8101556716
		}, {
			"lng" : 106.4174553752,
			"lat" : 29.810366524
		}, {
			"lng" : 106.4182063937,
			"lat" : 29.8106453326
		}, {
			"lng" : 106.4189252257,
			"lat" : 29.8109869768
		}, {
			"lng" : 106.4194402099,
			"lat" : 29.8112864964
		}, {
			"lng" : 106.4199203253,
			"lat" : 29.8116130112
		}, {
			"lng" : 106.4203816652,
			"lat" : 29.8119755974
		}, {
			"lng" : 106.4208000898,
			"lat" : 29.812360291
		}, {
			"lng" : 106.4212372899,
			"lat" : 29.8128164292
		}, {
			"lng" : 106.4265587926,
			"lat" : 29.818590353
		}, {
			"lng" : 106.4270094037,
			"lat" : 29.8190362236
		}, {
			"lng" : 106.4274814725,
			"lat" : 29.8194271731
		}, {
			"lng" : 106.4279159904,
			"lat" : 29.8197320196
		}, {
			"lng" : 106.4283773303,
			"lat" : 29.8200068461
		}, {
			"lng" : 106.4288601279,
			"lat" : 29.8202502566
		}, {
			"lng" : 106.4293643832,
			"lat" : 29.8204603896
		}, {
			"lng" : 106.4297667146,
			"lat" : 29.8206002454
		}, {
			"lng" : 106.4302012324,
			"lat" : 29.8207247424
		}, {
			"lng" : 106.432749331,
			"lat" : 29.8213546718
		}, {
			"lng" : 106.4333206415,
			"lat" : 29.8215138406
		}, {
			"lng" : 106.4336961508,
			"lat" : 29.8216443867
		}, {
			"lng" : 106.4340770245,
			"lat" : 29.8218042532
		}, {
			"lng" : 106.4344391227,
			"lat" : 29.821981572
		}, {
			"lng" : 106.4347743988,
			"lat" : 29.8221740161
		}, {
			"lng" : 106.4352652431,
			"lat" : 29.8225063129
		}, {
			"lng" : 106.4357426763,
			"lat" : 29.8229042299
		}, {
			"lng" : 106.4406913519,
			"lat" : 29.8275113417
		} ]
	} ],
	"option" : {
		"strokeColor" : "#E879DA",
		"strokeWeight" : 3,
		"enableMassClear" : false
	}
}, {
	"id" : 4,
	"name" : "国博支线",
	"stations" : [ {
		"id" : 77,
		"name" : "礼嘉站",
		"exits" : [ {
			"name" : "3",
			"origin" : {
				"lng" : 106.4875351842,
				"lat" : 29.6658314706
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4897197402,
				"lat" : 29.6678701456
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4898487147,
				"lat" : 29.6684324918
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4874851383,
				"lat" : 29.6679300449
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.4875351842,
				"lat" : 29.6658314706
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.4897197402,
				"lat" : 29.6678701456
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.4898487147,
				"lat" : 29.6684324918
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.4874851383,
				"lat" : 29.6679300449
			}
		} ],
		"origin" : {
			"lng" : 106.4884179,
			"lat" : 29.66693459
		},
		"isShow" : false,
		"distance" : 81
	}, {
		"id" : 78,
		"name" : "平场站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.5075115766,
				"lat" : 29.6686430208
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5091845529,
				"lat" : 29.667784255
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5075115766,
				"lat" : 29.6686430208
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5091845529,
				"lat" : 29.667784255
			}
		} ],
		"origin" : {
			"lng" : 106.5084977,
			"lat" : 29.66889732
		},
		"isShow" : true,
		"distance" : 2459
	}, {
		"id" : 79,
		"name" : "黄茅坪站",
		"exits" : [ {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5322193438,
				"lat" : 29.6769477976
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5324960913,
				"lat" : 29.676736034
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5315756368,
				"lat" : 29.6763425525
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5313633788,
				"lat" : 29.675625905
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5308838326,
				"lat" : 29.675019978
			}
		}, {
			"name" : "1A",
			"origin" : {
				"lng" : 106.5322193438,
				"lat" : 29.6769477976
			}
		}, {
			"name" : "1B",
			"origin" : {
				"lng" : 106.5324960913,
				"lat" : 29.676736034
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5315756368,
				"lat" : 29.6763425525
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5313633788,
				"lat" : 29.675625905
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5308838326,
				"lat" : 29.675019978
			}
		} ],
		"origin" : {
			"lng" : 106.5314641,
			"lat" : 29.67597102
		},
		"isShow" : true,
		"distance" : 5259
	}, {
		"id" : 80,
		"name" : "高义口站",
		"exits" : [ {
			"name" : "2",
			"origin" : {
				"lng" : 106.5277920073,
				"lat" : 29.7018188897
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5288871199,
				"lat" : 29.7030936024
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5292150023,
				"lat" : 29.7027154428
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5277920073,
				"lat" : 29.7018188897
			}
		}, {
			"name" : "3B",
			"origin" : {
				"lng" : 106.5288871199,
				"lat" : 29.7030936024
			}
		}, {
			"name" : "3A",
			"origin" : {
				"lng" : 106.5292150023,
				"lat" : 29.7027154428
			}
		} ],
		"origin" : {
			"lng" : 106.5281029,
			"lat" : 29.70274905
		},
		"isShow" : true,
		"distance" : 8697
	}, {
		"id" : 81,
		"name" : "会展中心站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.5447410929,
				"lat" : 29.7156412038
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5455667291,
				"lat" : 29.7156950057
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5461512481,
				"lat" : 29.7167690487
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5458659946,
				"lat" : 29.7173653689
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.5447410929,
				"lat" : 29.7156412038
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.5455667291,
				"lat" : 29.7156950057
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5461512481,
				"lat" : 29.7167690487
			}
		}, {
			"name" : "4",
			"origin" : {
				"lng" : 106.5458659946,
				"lat" : 29.7173653689
			}
		} ],
		"origin" : {
			"lng" : 106.5455273,
			"lat" : 29.71636611
		},
		"isShow" : true,
		"distance" : 11018
	}, {
		"id" : 82,
		"name" : "悦来站",
		"exits" : [ {
			"name" : "1",
			"origin" : {
				"lng" : 106.5478376043,
				"lat" : 29.7242523619
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.548377188,
				"lat" : 29.7247643814
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5482350337,
				"lat" : 29.7260252824
			}
		}, {
			"name" : "1",
			"origin" : {
				"lng" : 106.5478376043,
				"lat" : 29.7242523619
			}
		}, {
			"name" : "2",
			"origin" : {
				"lng" : 106.548377188,
				"lat" : 29.7247643814
			}
		}, {
			"name" : "3",
			"origin" : {
				"lng" : 106.5482350337,
				"lat" : 29.7260252824
			}
		} ],
		"origin" : {
			"lng" : 106.5479318,
			"lat" : 29.72538939
		},
		"isShow" : true,
		"distance" : 12093
	} ],
	"routes" : [ {
		"name" : "国博支线上行",
		"curves" : [ {
			"lng" : 106.4859348536,
			"lat" : 29.6635398407
		}, {
			"lng" : 106.4909210801,
			"lat" : 29.6706137219
		}, {
			"lng" : 106.4912965894,
			"lat" : 29.6710987045
		}, {
			"lng" : 106.4916962385,
			"lat" : 29.6715242568
		}, {
			"lng" : 106.492138803,
			"lat" : 29.6719153159
		}, {
			"lng" : 106.4926296473,
			"lat" : 29.6722742126
		}, {
			"lng" : 106.4931473136,
			"lat" : 29.6725860322
		}, {
			"lng" : 106.4937186241,
			"lat" : 29.6728621945
		}, {
			"lng" : 106.4942952991,
			"lat" : 29.6730828908
		}, {
			"lng" : 106.4949041605,
			"lat" : 29.6732576763
		}, {
			"lng" : 106.4955317974,
			"lat" : 29.6733814242
		}, {
			"lng" : 106.4961674809,
			"lat" : 29.6734529696
		}, {
			"lng" : 106.4965805411,
			"lat" : 29.6734709142
		}, {
			"lng" : 106.4970043302,
			"lat" : 29.6734662533
		}, {
			"lng" : 106.4974281192,
			"lat" : 29.6734385207
		}, {
			"lng" : 106.497849226,
			"lat" : 29.6733877165
		}, {
			"lng" : 106.4982542396,
			"lat" : 29.6733159381
		}, {
			"lng" : 106.4986753464,
			"lat" : 29.6732173591
		}, {
			"lng" : 106.4990669489,
			"lat" : 29.6731017676
		}, {
			"lng" : 106.4994692802,
			"lat" : 29.6729582103
		}, {
			"lng" : 106.5000835061,
			"lat" : 29.6726983616
		}, {
			"lng" : 106.5144762397,
			"lat" : 29.6663091361
		}, {
			"lng" : 106.5149885416,
			"lat" : 29.6660947177
		}, {
			"lng" : 106.5154311061,
			"lat" : 29.6659392641
		}, {
			"lng" : 106.5159729123,
			"lat" : 29.6657896368
		}, {
			"lng" : 106.5165495872,
			"lat" : 29.6656770666
		}, {
			"lng" : 106.5171128511,
			"lat" : 29.6656104101
		}, {
			"lng" : 106.5177029371,
			"lat" : 29.6655854722
		}, {
			"lng" : 106.5182715654,
			"lat" : 29.6656038843
		}, {
			"lng" : 106.518856287,
			"lat" : 29.6656668118
		}, {
			"lng" : 106.5194249153,
			"lat" : 29.665772157
		}, {
			"lng" : 106.5199774504,
			"lat" : 29.6659192206
		}, {
			"lng" : 106.520344913,
			"lat" : 29.6660425114
		}, {
			"lng" : 106.5206936002,
			"lat" : 29.666180019
		}, {
			"lng" : 106.521050334,
			"lat" : 29.6663436295
		}, {
			"lng" : 106.5213802457,
			"lat" : 29.666515863
		}, {
			"lng" : 106.5217021108,
			"lat" : 29.6667090718
		}, {
			"lng" : 106.5220052004,
			"lat" : 29.6669127681
		}, {
			"lng" : 106.522294879,
			"lat" : 29.6671311468
		}, {
			"lng" : 106.5225845575,
			"lat" : 29.667376327
		}, {
			"lng" : 106.5335226059,
			"lat" : 29.6780788397
		}, {
			"lng" : 106.5338042378,
			"lat" : 29.6783789896
		}, {
			"lng" : 106.5340563655,
			"lat" : 29.6786863626
		}, {
			"lng" : 106.5342843533,
			"lat" : 29.6790074837
		}, {
			"lng" : 106.5344801545,
			"lat" : 29.6793246422
		}, {
			"lng" : 106.5346571803,
			"lat" : 29.6796599762
		}, {
			"lng" : 106.5348100662,
			"lat" : 29.6800043974
		}, {
			"lng" : 106.5349414945,
			"lat" : 29.6803737516
		}, {
			"lng" : 106.5350407362,
			"lat" : 29.6807323851
		}, {
			"lng" : 106.5351131558,
			"lat" : 29.6810956779
		}, {
			"lng" : 106.5351587534,
			"lat" : 29.681480175
		}, {
			"lng" : 106.5351775289,
			"lat" : 29.6818488247
		}, {
			"lng" : 106.5351668,
			"lat" : 29.6822263281
		}, {
			"lng" : 106.5351319313,
			"lat" : 29.682584722
		}, {
			"lng" : 106.5350675583,
			"lat" : 29.6829582612
		}, {
			"lng" : 106.5349763632,
			"lat" : 29.6833187496
		}, {
			"lng" : 106.5348529816,
			"lat" : 29.6836904219
		}, {
			"lng" : 106.534678638,
			"lat" : 29.6841042698
		}, {
			"lng" : 106.5344613791,
			"lat" : 29.6845216113
		}, {
			"lng" : 106.5342092514,
			"lat" : 29.6849149501
		}, {
			"lng" : 106.5339249372,
			"lat" : 29.6852903448
		}, {
			"lng" : 106.5278416872,
			"lat" : 29.692084723
		}, {
			"lng" : 106.5273159742,
			"lat" : 29.6927417907
		}, {
			"lng" : 106.5270745754,
			"lat" : 29.69308873
		}, {
			"lng" : 106.5268519521,
			"lat" : 29.6934445222
		}, {
			"lng" : 106.5265247226,
			"lat" : 29.6940556802
		}, {
			"lng" : 106.5262430906,
			"lat" : 29.6947031821
		}, {
			"lng" : 106.5257415175,
			"lat" : 29.6960370834
		}, {
			"lng" : 106.5256288648,
			"lat" : 29.6964019519
		}, {
			"lng" : 106.5255483985,
			"lat" : 29.6967453836
		}, {
			"lng" : 106.5254572034,
			"lat" : 29.6973879754
		}, {
			"lng" : 106.5254464746,
			"lat" : 29.6980349898
		}, {
			"lng" : 106.5255108476,
			"lat" : 29.6986619631
		}, {
			"lng" : 106.5256556869,
			"lat" : 29.699296854
		}, {
			"lng" : 106.5258514881,
			"lat" : 29.6998555547
		}, {
			"lng" : 106.5261143446,
			"lat" : 29.700403535
		}, {
			"lng" : 106.5264308453,
			"lat" : 29.7009188948
		}, {
			"lng" : 106.5268090367,
			"lat" : 29.7014128175
		}, {
			"lng" : 106.528801918,
			"lat" : 29.7036100453
		}, {
			"lng" : 106.5304085612,
			"lat" : 29.7052571774
		}, {
			"lng" : 106.5323719382,
			"lat" : 29.7074056309
		}, {
			"lng" : 106.532715261,
			"lat" : 29.7077532184
		}, {
			"lng" : 106.5330505371,
			"lat" : 29.7080469896
		}, {
			"lng" : 106.533434093,
			"lat" : 29.7083367994
		}, {
			"lng" : 106.5338551998,
			"lat" : 29.7086112328
		}, {
			"lng" : 106.5342923999,
			"lat" : 29.7088518855
		}, {
			"lng" : 106.5347591043,
			"lat" : 29.7090664456
		}, {
			"lng" : 106.5351185203,
			"lat" : 29.7092055251
		}, {
			"lng" : 106.5355074406,
			"lat" : 29.7093327232
		}, {
			"lng" : 106.5372535586,
			"lat" : 29.7098151894
		}, {
			"lng" : 106.5377792716,
			"lat" : 29.7099784959
		}, {
			"lng" : 106.5384095907,
			"lat" : 29.7102300945
		}, {
			"lng" : 106.5389969945,
			"lat" : 29.7105317791
		}, {
			"lng" : 106.5396621823,
			"lat" : 29.7109606588
		}, {
			"lng" : 106.5430766344,
			"lat" : 29.7133715298
		}, {
			"lng" : 106.5433904529,
			"lat" : 29.7136203245
		}, {
			"lng" : 106.5436774492,
			"lat" : 29.7138789026
		}, {
			"lng" : 106.5439537168,
			"lat" : 29.7141591446
		}, {
			"lng" : 106.5442031622,
			"lat" : 29.7144466073
		}, {
			"lng" : 106.5444633365,
			"lat" : 29.7147930057
		}, {
			"lng" : 106.544726193,
			"lat" : 29.7152006688
		}, {
			"lng" : 106.5477919579,
			"lat" : 29.72030284
		}, {
			"lng" : 106.5480574965,
			"lat" : 29.7208008603
		}, {
			"lng" : 106.5482398868,
			"lat" : 29.7212972475
		}, {
			"lng" : 106.548320353,
			"lat" : 29.7216408271
		}, {
			"lng" : 106.5483659506,
			"lat" : 29.7219890642
		}, {
			"lng" : 106.5483766794,
			"lat" : 29.7223484809
		}, {
			"lng" : 106.5483552217,
			"lat" : 29.7226894946
		}, {
			"lng" : 106.5482828021,
			"lat" : 29.7231346276
		}, {
			"lng" : 106.547652483,
			"lat" : 29.7263981771
		} ]
	}, {
		"name" : "国博支线下行",
		"curves" : [ {
			"lng" : 106.4860662818,
			"lat" : 29.6634694536
		}, {
			"lng" : 106.4909934998,
			"lat" : 29.6704587413
		}, {
			"lng" : 106.4913770556,
			"lat" : 29.6709507163
		}, {
			"lng" : 106.4917767048,
			"lat" : 29.671375104
		}, {
			"lng" : 106.4922273159,
			"lat" : 29.6717712907
		}, {
			"lng" : 106.4927127957,
			"lat" : 29.6721229634
		}, {
			"lng" : 106.4932519197,
			"lat" : 29.6724429402
		}, {
			"lng" : 106.4938044548,
			"lat" : 29.6727081497
		}, {
			"lng" : 106.4943918586,
			"lat" : 29.6729304776
		}, {
			"lng" : 106.49500072,
			"lat" : 29.6731031659
		}, {
			"lng" : 106.4956176281,
			"lat" : 29.6732229523
		}, {
			"lng" : 106.4962559938,
			"lat" : 29.6732926334
		}, {
			"lng" : 106.496669054,
			"lat" : 29.6733096458
		}, {
			"lng" : 106.4971035719,
			"lat" : 29.6733035866
		}, {
			"lng" : 106.4975166321,
			"lat" : 29.6732751548
		}, {
			"lng" : 106.4979270101,
			"lat" : 29.6732245836
		}, {
			"lng" : 106.4983320236,
			"lat" : 29.6731523389
		}, {
			"lng" : 106.4987504482,
			"lat" : 29.6730535268
		}, {
			"lng" : 106.4991527796,
			"lat" : 29.6729342064
		}, {
			"lng" : 106.4995443821,
			"lat" : 29.6727932123
		}, {
			"lng" : 106.5001505613,
			"lat" : 29.672537092
		}, {
			"lng" : 106.5144869685,
			"lat" : 29.666172561
		}, {
			"lng" : 106.5150019526,
			"lat" : 29.66595721
		}, {
			"lng" : 106.5154418349,
			"lat" : 29.6658005909
		}, {
			"lng" : 106.5159836411,
			"lat" : 29.6656493319
		}, {
			"lng" : 106.5165495872,
			"lat" : 29.6655367616
		}, {
			"lng" : 106.5171021223,
			"lat" : 29.6654687066
		}, {
			"lng" : 106.5176814795,
			"lat" : 29.6654405057
		}, {
			"lng" : 106.5182393789,
			"lat" : 29.6654542565
		}, {
			"lng" : 106.5188160539,
			"lat" : 29.6655111244
		}, {
			"lng" : 106.5193739533,
			"lat" : 29.6656087787
		}, {
			"lng" : 106.519921124,
			"lat" : 29.665746986
		}, {
			"lng" : 106.5202885866,
			"lat" : 29.6658658489
		}, {
			"lng" : 106.5206587315,
			"lat" : 29.6660068526
		}, {
			"lng" : 106.5210181475,
			"lat" : 29.6661669674
		}, {
			"lng" : 106.5213561058,
			"lat" : 29.6663408327
		}, {
			"lng" : 106.5216913819,
			"lat" : 29.6665366056
		}, {
			"lng" : 106.5220052004,
			"lat" : 29.6667440312
		}, {
			"lng" : 106.5223029256,
			"lat" : 29.6669668384
		}, {
			"lng" : 106.5225845575,
			"lat" : 29.667204328
		}, {
			"lng" : 106.5230485797,
			"lat" : 29.6676413167
		}, {
			"lng" : 106.532728672,
			"lat" : 29.6771257181
		}, {
			"lng" : 106.533742547,
			"lat" : 29.6782394014
		}, {
			"lng" : 106.5341958404,
			"lat" : 29.6787986852
		}, {
			"lng" : 106.5344157815,
			"lat" : 29.6791249327
		}, {
			"lng" : 106.5346089005,
			"lat" : 29.6794628307
		}, {
			"lng" : 106.5347778797,
			"lat" : 29.6798109811
		}, {
			"lng" : 106.5349200368,
			"lat" : 29.6801677523
		}, {
			"lng" : 106.5350487828,
			"lat" : 29.680575789
		}, {
			"lng" : 106.5351399779,
			"lat" : 29.6809817267
		}, {
			"lng" : 106.5351989865,
			"lat" : 29.6813832353
		}, {
			"lng" : 106.5352231264,
			"lat" : 29.6817963936
		}, {
			"lng" : 106.5352150798,
			"lat" : 29.6822100162
		}, {
			"lng" : 106.5351721644,
			"lat" : 29.682631094
		}, {
			"lng" : 106.5350943804,
			"lat" : 29.6830484417
		}, {
			"lng" : 106.534987092,
			"lat" : 29.6834508741
		}, {
			"lng" : 106.5348100662,
			"lat" : 29.6839304353
		}, {
			"lng" : 106.5345901251,
			"lat" : 29.6843869251
		}, {
			"lng" : 106.5343165398,
			"lat" : 29.6848410827
		}, {
			"lng" : 106.5340027213,
			"lat" : 29.6852651787
		}, {
			"lng" : 106.5336245298,
			"lat" : 29.6857048851
		}, {
			"lng" : 106.5278658271,
			"lat" : 29.6921254986
		}, {
			"lng" : 106.5273347497,
			"lat" : 29.6927911871
		}, {
			"lng" : 106.5268814564,
			"lat" : 29.6934873942
		}, {
			"lng" : 106.5265595913,
			"lat" : 29.694091096
		}, {
			"lng" : 106.5262806416,
			"lat" : 29.6947306758
		}, {
			"lng" : 106.5257817507,
			"lat" : 29.6960648097
		}, {
			"lng" : 106.5256744623,
			"lat" : 29.6964124366
		}, {
			"lng" : 106.5255966783,
			"lat" : 29.6967472476
		}, {
			"lng" : 106.5255108476,
			"lat" : 29.697372132
		}, {
			"lng" : 106.5255028009,
			"lat" : 29.6980014393
		}, {
			"lng" : 106.5255725384,
			"lat" : 29.6986277138
		}, {
			"lng" : 106.5257200599,
			"lat" : 29.6992525865
		}, {
			"lng" : 106.5259078145,
			"lat" : 29.6997670202
		}, {
			"lng" : 106.5261518955,
			"lat" : 29.7002725978
		}, {
			"lng" : 106.5264523029,
			"lat" : 29.7007558065
		}, {
			"lng" : 106.5268063545,
			"lat" : 29.7012199083
		}, {
			"lng" : 106.532318294,
			"lat" : 29.7072830896
		}, {
			"lng" : 106.5327125788,
			"lat" : 29.7076884535
		}, {
			"lng" : 106.5330827236,
			"lat" : 29.7080157721
		}, {
			"lng" : 106.5334716439,
			"lat" : 29.7083111732
		}, {
			"lng" : 106.5338873863,
			"lat" : 29.7085797825
		}, {
			"lng" : 106.5343245864,
			"lat" : 29.7088199693
		}, {
			"lng" : 106.5347832441,
			"lat" : 29.7090301032
		}, {
			"lng" : 106.5351426601,
			"lat" : 29.7091689498
		}, {
			"lng" : 106.5355288982,
			"lat" : 29.709295682
		}, {
			"lng" : 106.5372750163,
			"lat" : 29.7097781484
		}, {
			"lng" : 106.5378114581,
			"lat" : 29.7099451824
		}, {
			"lng" : 106.5384417772,
			"lat" : 29.7101977129
		}, {
			"lng" : 106.5390372276,
			"lat" : 29.7105052216
		}, {
			"lng" : 106.5396943688,
			"lat" : 29.7109292093
		}, {
			"lng" : 106.5433582664,
			"lat" : 29.7135154954
		}, {
			"lng" : 106.5436720848,
			"lat" : 29.7137640567
		}, {
			"lng" : 106.5439671278,
			"lat" : 29.7140286912
		}, {
			"lng" : 106.5442299843,
			"lat" : 29.7142949557
		}, {
			"lng" : 106.5444847941,
			"lat" : 29.7145891736
		}, {
			"lng" : 106.5447449684,
			"lat" : 29.7149351056
		}, {
			"lng" : 106.5450158715,
			"lat" : 29.7153504555
		}, {
			"lng" : 106.5479663014,
			"lat" : 29.720261377
		}, {
			"lng" : 106.5482318401,
			"lat" : 29.7207682491
		}, {
			"lng" : 106.5484142303,
			"lat" : 29.7212741869
		}, {
			"lng" : 106.5484920144,
			"lat" : 29.7216182324
		}, {
			"lng" : 106.5485349298,
			"lat" : 29.721957851
		}, {
			"lng" : 106.5485456586,
			"lat" : 29.7223084163
		}, {
			"lng" : 106.5485188365,
			"lat" : 29.7226491973
		}, {
			"lng" : 106.5484517813,
			"lat" : 29.7230766276
		}, {
			"lng" : 106.5478053689,
			"lat" : 29.726428923
		} ]
	} ],
	"option" : {
		"strokeColor" : "#E879DA",
		"strokeWeight" : 3,
		"enableMassClear" : false
	}
} ];
