/**
 * 时间：2018/2/3 13:43
 * 作者：张超
 * 功能：导弹类
 */
define(["./Weapon"], function () {
    L.Missle = L.Weapon.extend({
        options: {
            type: "导弹", //固定，不可改变
            subType: "missle1",  //子类型，可选missle1、missle2、missle3、missle4
            range: "射程"
        },
        //得到用户参数的错误信息
        _getErrorOfOptionsUser: function (opts) {
            var errMsg = "";
            // if (opts.range) {
            //     if (typeof opts.range == "number") {
            //         return errMsg;
            //     } else {
            //         errMsg += "range参数必须为数字类型"
            //         return errMsg;
            //     }
            // } else {
            //     errMsg += "必须设置range参数";
            //     return errMsg;
            // }
            return errMsg;
        },
        initialize: function (optsUser) {
            //设置Missle类的type为只读，感觉这样设置不太好，因为在2处都写了“导弹”，是否可以只在一处写？
            Object.defineProperty(this.options, "type", {
                get: function () {
                    return "导弹"
                },
                set: function (v) {
                    console.warn("Missle.options.type属性为只读");
                }
            });
            if (!this._getErrorOfOptionsUser(optsUser)) {
                L.setOptions(this, optsUser);
            }
        },
        //如何用jsdoc的方式，来把这个方法中用到的args的具体参数，进行细化和量化？
        showOnMap: function (args) {
            var exampleArgs = {
                map: "必填",
                latLng: "必填"
            };
            var imgName = this._getImgOfMissle();
            var missleIcon = L.icon({
                iconUrl: "/mapGame/img/weapon/missle/" + imgName,
                iconSize: [38, 95]
            });
            L.marker(args.latLng, {icon: missleIcon}).addTo(args.map);
        },
        _getImgOfMissle: function () {
            var imgName = "";
            switch (this.options.subType) {
                case "missle1":
                    imgName = "missle1.jpg"
                    break;
                case "missle2":
                    imgName = "missle2.jpg"
                    break;
                case "missle3":
                    imgName = "missle3.jpeg"
                    break;
                case "missle4":
                    imgName = "missle4.jpg"
                    break;
                default:
                    imgName = "missle1.jpg"
                    break;
            }
            return imgName;
        }

    });
    return L.Missle;
});
