$(document).ready(function() {
	metroMap();
});

var metroMap = (function() {
	var map = function() {
		// 谷歌地图
		var googleMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
			maxZoom : 18,
			minZoom : 9
		});
		// 高德地图
		var gaodeMap = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
			maxZoom : 18,
			minZoom : 9
		});
		var baseLayers = {
			"谷歌地图" : googleMap,
			"高德地图" : gaodeMap
		}
		var map = L.map("cqmetroMap", {
			center : [ 29.634582, 106.502387, 50 ],
			zoom : 13,
			layers : [ googleMap ],
			zoomControl : false
		});
		L.control.layers(baseLayers, null).addTo(map);
		L.control.zoom({
			zoomInTitle : '放大',
			zoomOutTitle : '缩小'
		}).addTo(map);
	}
	return map;
}(metroMap || {}));