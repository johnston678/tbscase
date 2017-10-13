!function () {
    var t = "/member/anchorh5/mglivetool", a = function () {
        var t = navigator.userAgent.toLowerCase();
        return {
            isMobile: !!t.match(/AppleWebKit.*Mobile.*/i),
            isWX: "micromessenger" == t.match(/MicroMessenger/i),
            isWB: "weibo" == t.match(/WeiBo/i),
            isQQ: "qq" == t.match(/QQ/i) && t.indexOf("yyb_d") > -1,
            isDyAndroid: "douyu_android" == t.match(/Douyu_Android/i),
            isDyIOS: "douyu_ios" == t.match(/Douyu_IOS/i),
            isIOS: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
            isIOSHD: t.match(/ipad/i)
        }
    }(), i = !1;
    window.DYS && (DYS.sub.setPageCode("page_my"), DYS.sub.config({suburl: window.$SYS ? $SYS.fh2 || "" : ""}));
    var e = {
        tabClick: function (t) {
            window.DYS && DYS.sub({
                action_code: "click_recruit_cate",
                ct_code: "h5",
                pro_code: i ? "ios" : "android",
                ext: {cid: t}
            })
        }, appDetailClick: function (t, a) {
            window.DYS && DYS.sub({
                action_code: "click_recruit_detail",
                ct_code: "h5",
                pro_code: i ? "ios" : "android",
                ext: {cid: t, rcid: a}
            })
        }, appDownloadTool: function () {
            window.DYS && DYS.sub({
                action_code: "click_recruit_dl_tool",
                ct_code: "h5",
                pro_code: i ? "ios" : "android"
            })
        }
    };
    a.isIOS ? $(".title-tip").show() : ($(".android-tip").show(), $(".android-title").show());
    //johnstonli
    var ios_version = '2.560';
    var o = parseFloat(ios_version), n = {};
    n.doms = {
        $list: $(".app-list-content"),
        $tabBtn: $("#js-pullToggle"),
        $tabContainer: $("#js-cat-list"),
        $appDownload: $("#app-download"),
        $appListContainer: $(".app-list-content")
    }, n.nowPage = 1, n.cateId = 0, n.isShowIosNotice = 0, n.isLoadIng = !1, n.hasMoreData = !0, n.data = "", n.verSion = "", n.isIosappDownload = !1, n.getAppVersion = function () {
        var t = n.DYAppChat("getAppInfo");
        "string" == typeof t && (t = JSON.parse(t));
        var a = "0.0.0.0";
        t && t.version && (a = t.version);
        for (var i = a.replace(/\./g, "").toString(), e = "", o = 0, s = 4; s > o; o++)e += (1 === o ? "." : "") + (i.charAt(o) || "0");
        return parseFloat(e)
    }, n.DYAppChat = function (t, i) {
        try {
            if (a.isDyIOS)return i ? window.OCModel[t](i) : window.OCModel[t]()
        } catch (e) {
            return ""
        }
    }, n.getUrlParam = function (t) {
        var a = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(a);
        return null != i ? unescape(i[2]) : null
    }, n.iosPage = function () {
        var t = n.getUrlParam("aid");
        a.isIOS && n.verSion <= o && null !== o && "dytoolm2" != t && ($(".android-tip").hide(), i = !0, n.isIosappDownload = !0)
    }, n.bindEvent = function () {
        var a = document.documentElement.style.fontSize, i = $(".ul-box").innerHeight();
        a = Number(a.replace("px", "")), $(".hm-down").on("click", function () {
            e.appDownloadTool(), 0 === parseInt(n.data.error, 10) ? window.location.href = t : window.OCModel.alertToBindPhone()
        }), n.doms.$tabContainer.on("click", "li.cat-tab", function () {
            $(".cat-tab").removeClass("active"), $(this).addClass("active"), n.cateId = $(this).attr("data-catId");
            var t = $(this).attr("data-showIosNotice");
            1 == t && n.isIosappDownload ? $(".ios-tip").show() : $(".ios-tip").hide(), n.nowPage = 1, n.hasMoreData = !0, n.getPageView(n.cateId), e.tabClick(n.cateId)
        }), n.doms.$tabBtn.on("click", function () {
            var t = $(this).hasClass("pullUp");
            if (t)$(this).removeClass("pullUp"), $(".ul-box").css({height: i}); else {
                $(this).addClass("pullUp");
                var e = n.doms.$tabContainer.innerHeight();
                $(".ul-box").css({height: e / a + "rem"})
            }
        }), n.doms.$appListContainer.on("click", ".subbtn", function () {
            var t = $(this).attr("data-cid"), a = $(this).attr("data-rcid");
            e.appDetailClick(t, a), setTimeout(function () {
                window.location.href = "/member/anchorh5/recruit_detail?id=" + a
            }, 500)
        })
    }, n.isBind = function () {
        a.isIOS && $.ajax({
            url: "/member/anchorh5/checkMGlivetool",
            type: "GET",
            dataType: "json",
            success: function (t) {
                n.data = t
            }
        })
    }, n.getStatu = function (t, a) {
        if (0 === t) {
            if (a === !1)return "";
            if (0 == a)return "";
            if (1 == a)return "success";
            if (2 == a)return "fail"
        } else {
            if (a === !1)return "";
            if (0 == a)return "申请中";
            if (1 == a)return "已通过申请";
            if (2 == a)return "申请未通过"
        }
    }, n.dataTemplate = function (t) {
        for (var a = [], i = 0, e = t.length; e > i; i++) {
            var o = '<div class="app-list-item"><div class="item-info"><div class="title">' + t[i].game_name + '</span><span class="statu ' + n.getStatu(0, t[i].apply_status) + '">' + n.getStatu(1, t[i].apply_status) + '</span></div><div class="info"><p>时间：' + t[i].start_time + " 至 " + t[i].deadline + "<p>人数：" + t[i].passed_number + "/" + t[i].recruit_number + " 人</p><p>奖励：" + t[i].price + '</p><p class="recruit_cate">招募分区：' + t[i].sign_up_cate + '</p></div><div><a class="subbtn" data-rcid="' + t[i].id + '" data-cid="' + t[i].recruit_cate + '">查看详情</a></div></div><img class="game-img" alt="游戏图片" src=" ' + t[i].game_logo + ' "></div>';
            a.push(o)
        }
        return a.join("")
    }, n.getPageView = function (t) {
        !n.isLoadIng && n.hasMoreData && (n.isLoadIng = !0, 1 === n.nowPage && n.doms.$list.find(".loading-tip").length <= 0 && n.doms.$list.html('<p class="loading-tip" style="text-align:center;">数据加载中···</p>'), $.ajax({
            url: "/member/anchorh5/recruitAjax",
            type: "get",
            data: {cate_id: t, page: n.nowPage},
            success: function (t) {
                n.isLoadIng = !1;
                var a = JSON.parse(t);
                $("#list-total").html(a.totalRecord), a.data.length < 1 ? $(".app-list-blank").show() : $(".app-list-blank").hide();
                var i = n.dataTemplate(a.data);
                1 === n.nowPage ? n.doms.$list.html(i) : n.doms.$list.append(i), n.nowPage = n.nowPage + 1, (0 === a.data.length || n.nowPage > a.totalPage) && (n.hasMoreData = !1, n.nowPage > 2 && $(".app-list-nomore").show())
            },
            error: function () {
                n.isLoadIng = !1, 1 === n.nowPage && n.getPageView(t)
            }
        }))
    }, n.catlistTemplate = function (t) {
        for (var a = [], i = 0, e = t.length; e > i; i++) {
            var o;
            0 === i ? (n.cateId = t[i].cate_id, n.isShowIosNotice = t[i].show_ios_notice, o = '<li class="cat-tab active" data-showIosNotice="' + t[i].show_ios_notice + '" data-catId="' + t[i].cate_id + '">' + t[i].cate_name + "</li>") : o = '<li class="cat-tab" data-showIosNotice="' + t[i].show_ios_notice + '" data-catId="' + t[i].cate_id + '">' + t[i].cate_name + "</li>", a.push(o)
        }
        return a.join("")
    }, n.getCatList = function () {
        $.ajax({
            url: "/member/anchorh5/getCateList", type: "get", success: function (t) {
                var a = t.data.cateList;
                if (!(a.length < 1)) {
                    var i = n.catlistTemplate(a);
                    n.doms.$tabContainer.html(i), n.getPageView(n.cateId), 1 === n.isShowIosNotice && n.isIosappDownload && $(".ios-tip").show()
                }
            }
        })
    }, n.showBlankPage = function () {
        var t = '<div class="app-list-blank"><p><span class="blank-bg"></span></p><p>暂时没有招募活动哦~</p></div>';
        $(".app-list").append(t)
    }, n.showBlankPage(), n.scrollLoad = function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100 && n.hasMoreData) {
                var t = n.cateId;
                n.getPageView(t)
            }
        })
    }, n.init = function () {
        n.getCatList(), n.scrollLoad(), n.isBind(), n.bindEvent(), a.isDyAndroid && (window.backpressed = function () {
            window.Command.finish()
        })
    }, setTimeout(function () {
        n.verSion = n.getAppVersion(), n.iosPage(), n.init()
    }, 1e3)
}();