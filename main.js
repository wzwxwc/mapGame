require.config({
    paths: {
        css: "./deps/requirejsPlugin/css",
        leaflet: "./deps/leaflet/leaflet-src",

        //文件夹
        lib: "./lib"
    },
    shim: {
        "*": {
            deps: ["leaflet"]
        },
        "lib": {
            deps: ["leaflet"]
        },
        "//": "上述2种方法设置依赖都失败",
        leaflet: {
            deps: ["css!./deps/leaflet/leaflet"]
        },
        "lib/weapon/Missle": {
            deps: ["leaflet"]
        }
    }
});

require(["lib/util/BaseMapUtil", "lib/weapon/Missle", "leaflet"], function (baseMapUtil, Missle) {
    window.map = baseMapUtil.fnInitTdt("divMapGame");
    map.setView([37.30027528134433, -259.27734375000006], 4);

    var missle = new L.Missle({
        subType: "missle3"
    });
    missle.showOnMap({
        map: map,
        latLng: [37.30027528134433, -259.27734375000006]
    });

});

/*
* 像jquery、leaflet这种被几乎所有模块都依赖的模块
* 该怎么处理，让他们被设置为所有模块都依赖的呢？
* 1、requirejs本身的一些设置（这个需要研究）
* 2、直接把他们作为全局js来加载！
*
* */