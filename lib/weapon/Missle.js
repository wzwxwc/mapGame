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
            if (!this._getErrorOfOptionsUser(optsUser)) {
                //我不希望用户修改type类型值，这样是否会导致用户可以修改默认的、本应固定的type值？
                L.setOptions(this.options, optsUser);
            }
        },
        showOnMap: function (map) {
            var imgName = this._getImgOfMissle();
            var missleIcon = L.icon({
                iconUrl: "/mapGame/img/weapon/missle/" + imgName,
                iconSize: [38, 95]
            });
            L.marker([37.30027528134433, -259.27734375000006], {icon: missleIcon}).addTo(map);
        },
        _getImgOfMissle: function () {
            var imgName = "";
            switch (this.subType) {
                case "missle1":
                    imgName = "missle1.jpg"
                    break;
                case "missle2":
                    imgName = "missle2.jpg"
                    break;
                case "missle3":
                    imgName = "missle3.jpg"
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
