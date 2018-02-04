/**
 * 时间：2017/12/20
 * 作者：张超
 * 功能：显示各种常用的底图
 */
define([], function () {
    var temp = {};
    temp.fnInitBaseMap = function (argStrMapDivId) {
        // set its view to our chosen geographical coordinates and a zoom level:
        var mymap = L.map(argStrMapDivId).setView([39.889718875996685, -243.5579681396484], 10);
        //故意把map对象暴露出来，之后在console中更容易的操作
        window.map = mymap;

        var baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        });
        baseLayer.addTo(mymap);
        return mymap;
    };

    temp.fnInitTdt = function (argStrMapDivId) {
        var mymap = L.map(argStrMapDivId, {
            zoomControl: false,
            preferCanvas: true
        });
        L.tileLayer("http://t{s}.tianditu.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
            subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
        }).addTo(mymap);
        return mymap;
    };

    temp.fnInitMapBox = function (argStrMapDivId) {
        var mapboxAccessToken = "sk.eyJ1Ijoid3p3eHdjIiwiYSI6ImNqNW5qZ2xwejNkejEzM29kZHlxOHgxZGgifQ.CWcInSCc1zYgDA9sCfUSRw";
        var map = L.map(argStrMapDivId).setView([37.8, -96], 4);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
            id: 'mapbox.light'
        }).addTo(map);
        return map;
    };

    temp.fnInitWMSofLocal = function (argStrMapDivId) {
        var map = L.map(argStrMapDivId).setView([51.505, -0.09], 4);
        L.tileLayer.wms("http://localhost:8080/geoserver/zctest/wms", {
            version: "1.1.0",
            layers: 'zctest:ne_110m_coastline',
            format: 'image/png',
            transparent: true,
            crs: L.CRS.EPSG4326,
            bounds: [[-85.60903777459774, -180.0], [83.64513, 180.00000044181039]]
        }).addTo(map);
        return map;
    };

    temp.fnInitWMS2 = function (argStrMapDivId) {
        var map = L.map(argStrMapDivId);
        L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
            layers: 'nexrad-n0r-900913',
            format: 'image/png',
            transparent: true,
            attribution: "Weather data © 2012 IEM Nexrad"
        }).addTo(map);
        return map
    };

    return temp;
});

