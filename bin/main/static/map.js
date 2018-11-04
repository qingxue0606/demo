function mapSearch(obj, className) {
	$(obj).addClass("active");
	$(obj).siblings().removeClass("active");
	$("." + className).parent().children("div").hide();
	$("." + className).show();
}

function clickDomShow(obj, className) {
	var objChil = $(obj).find("." + className);
	if (objChil.is(":hidden")) {
		objChil.slideDown(250);
		$(obj).find("img").css({
			"transform" : "rotate(180deg)"
		});
	}
}

function mouseleaveDom(obj, className) {
	var objChil = $(obj).find("." + className);
	if (!objChil.is(":hidden")) {
		objChil.slideUp(250);
		$(obj).find("img").css({
			"transform" : "rotate(0deg)"
		});
	}
}

// 设定弹出框的样式
// cqMetroStyle.pointStyle = (function() {
// 	var dom = {};
// 	dom.time = null;
// 	dom.show = function(obj, url) {
// 		cqMetroStyle.pointStyle.time = setTimeout(
// 				function() {
// 					var domHtml = cqMetroStyle.ajaxRequestData(url, "GET", "",
// 							null);
// 					domHtml = "<div class='map_train_center_back' onmouseleave='cqMetroStyle.pointStyle.hide(this)' style='display:none;position:fixed;left:"
// 							+ $(obj).offset().left
// 							+ "px;top:"
// 							+ $(obj).offset().top
// 							+ "px;background:#F1FAFA;width:auto;height:auto;padding:0 1em;'>"
// 							+ domHtml.substring(5, domHtml.length - 6)
// 							+ "</div>";
// 					$("body").append(domHtml);
// 					$(".map_train_center_back").find("table").css({
// 						"margin" : "0"
// 					});
// 					$(".map_train_center_back").slideDown(150);
// 				}, 200);
// 	}
// 	dom.leave = function() {
// 		if (cqMetroStyle.pointStyle.time != null) {
// 			clearInterval(cqMetroStyle.pointStyle.time);
// 		}
// 		setTimeout(function() {
// 			$(".map_train_center_back").remove();
// 		},200);
// 	}
// 	dom.hide = function(obj) {
// 		$(obj).slideUp(150);
// 		setTimeout(function() {
// 			$(obj).remove();
// 		}, 150);
// 	}
// 	return dom;
// }(cqMetroStyle.pointStyle || {}));

// 运行监视界面
function clickMapVehicle(obj, vehicleId) {
	cqMetroStyle.pointStyle.hide($(".map_train_center_back"));
	cqMetroStyle.modelDomHide($(".model_hyx:last").children("div").eq(0));
	$("#home_map").hide();
	// var map = $("#map_info_back");
	// var domWidth = 70;
	// var domHeight = 100;
	// if (map.length == 0) {
	// $("body").append("<div id='map_info_back'>"
	// +"<div id='map_info_header'></div>"
	// +"<div id='map_info_content'></div>"
	// +"</div>")
	// $("#map_info_header").append("<div id='map_info_header_map'
	// class='center_vertically'>关闭所有</div>")
	// $("#map_info_content").append("<div class='map_info'
	// onClick='clickMapInfo(this)'>"+
	// $("#home_content").html()+"</div>");
	// $(".map_info").css({
	// "left" : "10%",
	// "top" : "5%",
	// "width" : "60%",
	// "height" : "90%",
	// "zIndex" : "90",
	// "opacity" : "0.8"
	// });
	// }
	// $(".map_info").eq(0).after("<div class='map_info1'
	// onClick='clickMapInfo(this)'></div>")
	// cqMetroStyle.ajaxPage("/states/getRunInfos/1", "map_info1");
	// $(".map_info1").css({
	// "left" : "15%",
	// "top" : "0",
	// "width" : "70%",
	// "height" : "100%",
	// "zIndex" : "100"
	// });
	// $(".map_info1").addClass("map_info");
	// $(".map_info1").removeClass("map_info1");
	// $("#map_info_header_map").after("<div class='center_vertically
	// map_info_header_click_div'>95270</div>");
	// cqMetroStyle.centerVertically();
	var mapInfo = $(".info_map");
	if ($("#vehicle_point_id").length != 0) {
		vehicleId = $.trim($("#vehicle_point_id").text());
	}
	if (mapInfo.length == 0) {
		cqMetroStyle.ajaxPage("/states/getVehicleRunDatas/1", "home_Content");
		cqMetroStyle.refreshData = {
			url : "/states/getVehicleRunDatas/1",
			className : "home_Content"
		};
	} else {
		var infoVehicleIdDom = $(".info_vehicle_id");
		for (var i = 0, size = infoVehicleIdDom.length; i < size; i++) {
			if (infoVehicleIdDom.eq(i).text() == vehicleId) {
				infoVehicleIdDom.eq(i).parent().parent().remove();
			}
		}
		cqMetroStyle.ajaxPage("/states/getRunInfos/1", "info_map");
		cqMetroStyle.refreshData = {
			url : "/states/getRunInfos/1",
			className : "info_map"
		};
	}
	vehicleIcno("/states/getVehicleIcno/1", "returnMap");
}

function clickMap(obj, url) {
	$("#home_map").css({
		"width" : "90vw",
		"height" : "100vh",
		"left" : "10vw"
	});
	cqMetroStyle.centerVertically();
	$("#home_map").show();
	$(".info_vehicle_id_click").removeClass("info_vehicle_id_click");
	$(obj).addClass("info_vehicle_id_click");
}

// 更换列车选中图标
function vehicleIcno(url, domClassName) {
	$(".info_vehicle_id_click").removeClass("info_vehicle_id_click");
	var result = cqMetroStyle.ajaxRequestData(url, "GET", "", null);
	$("." + domClassName).after(result.substring(5, result.length - 6));
	cqMetroStyle.centerVertically();
}

// 轮播图模式
/*
 * function clickMapInfo(obj) { var domWidth = 70; var domHeight = 100;
 * $(obj).css({ "width" : "70%", "height" : "100%", "left" : "15%", "top" : "0",
 * "zIndex" : "100", "opacity" : "1" }); var index = $(obj).index(); var obj =
 * $(".map_info"); var j = 0 for (var i = index + 1, size = obj.length; i <
 * size; i++) { j++; if (j > 3) { break; } obj.eq(i).css({ "width" : (domWidth -
 * i * 10) + "%", "height" : (domHeight - i * 10) + "%", "zIndex" : (100 - i *
 * 10), "left" : (i * 15 + 15) + "%", "top" : (i * 5) + "%", "opacity" : (1 - i *
 * 0.2) }); } j = 0; for (var i = index - 1; i >= 0; i--) { j++; if (j > 3) {
 * break; } obj.eq(i).css({ "width" : (domWidth - j * 10) + "%", "height" :
 * (domHeight - j * 10) + "%", "zIndex" : (100 - j * 10), "left" : (15 - j * 5) +
 * "%", "top" : (j * 5) + "%", "opacity" : (1 - j * 0.2) }); } }
 */



function isFullScreen()
{
	console.log((document.fullScreenElement && document.fullScreenElement !== null)
	         || document.mozFullScreen
	         || document.webkitIsFullScreen)
    return (document.fullScreenElement && document.fullScreenElement !== null)
         || document.mozFullScreen
         || document.webkitIsFullScreen;
}
function requestFullScreen(element) {
	document.getElementById('header').style.display="none";
	document.getElementById('header1').style.display="none";
	document.getElementById('quanping').style.value="退出";
	document.getElementById('home_content').style.height='100vh';
	document.getElementById('home_map').style.height='100vh';
	
	element = document.getElementById('map-container');
	console.log(element);
	//var element = element.path[1];
	//console.log(element.requestFullscreen());
    if (element.requestFullscreen){
        element.requestFullscreen();
        console.log(1111)
    }
    else if (element.msRequestFullscreen){
        element.msRequestFullscreen();}
    else if (element.mozRequestFullScreen){
        element.mozRequestFullScreen();}
    else if (element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();}
    document.getElementById('all').style.zIndex="99999";
    document.getElementById('map-container').style.zIndex="0";
}
                                                                                                       
function keyDown(event){
	 var element = event || window.event || arguments.callee.caller.arguments[0];
	var keyCode = element.which;
	var realkey = String.fromCharCode(element.which);
	console.log(keyCode);
}


document.onkeydown=function(e){
	console.log(e)
    var keycode = e.which;
    var realkey = String.fromCharCode(e.which);
	console.log(e.which)
		document.getElementById('header').style.display="block";
		document.getElementById('header1').style.display="block";
		document.getElementById('home_content').style.height='92vh';
		document.getElementById('home_map').style.height='92vh';
		  if (document.exitFullscreen) {
		    document.exitFullscreen();
		  } else if (document.msExitFullscreen) {
		    document.msExitFullscreen();
		  } else if (document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		  } else if (document.webkitExitFullscreen) {
		    document.webkitExitFullscreen();
		  }
		  document.getElementById('all').style.display="block";
}

