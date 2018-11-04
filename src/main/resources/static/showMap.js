
// var map = new AMap.Map('container',{
//     zoom: 10,  //设置地图显示的缩放级别
//     center: [116.397428, 39.90923],//设置地图中心点坐标
//     layers: [new AMap.TileLayer.Satellite()],  //设置图层,可设置成包含一个或多个图层的数组
//     mapStyle: 'amap://styles/whitesmoke',  //设置地图的显示样式
//     viewMode: '2D',  //设置地图模式
//     lang:'zh_cn',  //设置地图语言类型
// });

 
console.log(1111)
new AMap.Map('container1',{
    resizeEnable: true,
    center:[116.480983, 39.989628],
    zoom:11
});



/*AMap.plugin('AMap.ToolBar',function(){//异步加载插件
    var toolbar = new AMap.ToolBar();
    map.addControl(toolbar);
});
*/
 