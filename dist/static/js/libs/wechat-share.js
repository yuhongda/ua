
window.WechatShare = function (config) {
    function make_nonceStr() {
        var alphabet = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            nonceStrArray = [];
        for (var i = 0; i < 16; i++) {
            nonceStrArray.push(alphabet[Math.floor(Math.random() * alphabet.length + 1) - 1]);
        }
        return nonceStrArray.join('');
    }

    var nonceStr = make_nonceStr(),
        timestamp = parseInt((new Date).getTime() / 1e3),
        api = 'http://www.manalife.cn/wechat-service/WeChatWebService.asmx/GetToken';
    

    $.ajax({
        url: api,
        dataType: 'jsonp',
        data: {
            url: config.shareLink.replace(/#.*$/, ""),
            timeStamp: timestamp,
            nonceStr: nonceStr
        },
        type: 'get',
        cache: false,
        timeout: 10000,
        success: function (d) {
            
            if (typeof wx == 'undefined' || typeof d == 'undefined') {
                return;
            }
            wx.config({
                debug: !1,
                appId: 'wxea81161da9af8167',
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: d.Signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage" , "hideMenuItems"]
            });
            wx.ready(function () {
                //alert('ready');
                wx.onMenuShareTimeline({
                    title: config.shareTitle,
                    link: config.shareLink || location.href,
                    imgUrl: config.shareImg,
                    success: function () {
                        //alert("Timeline success");
                    },
                    cancel: function () { },
                    complete: function (res) {
                        //alert(JSON.stringify(res));
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });
                wx.onMenuShareAppMessage({
                    title: config.shareTitle,
                    desc: config.shareDesc,
                    link: config.shareLink || location.href,
                    imgUrl: config.shareImg,
                    type: "link",
                    dataUrl: "",
                    success: function () { },
                    cancel: function () { }
                });
                config.callback && config.callback( wx );
            }),
            wx.error(function (res) {
            });
        },
        error: function (e, t) {
            //alert(t);
        },
        complete: function () {
        }
    });

};
