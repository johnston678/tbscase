/*! version:1.0.8; time:Fri May 22 2020 15:09:29 GMT+0800 (China Standard Time) */ !(function (
  e
) {
  function t(t) {
    for (
      var o, i, s = t[0], u = t[1], l = t[2], c = 0, p = [];
      c < s.length;
      c++
    )
      (i = s[c]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]),
        (a[i] = 0);
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    for (d && d(t); p.length; ) p.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== a[u] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    i = { 0: 0 },
    a = { 0: 0 },
    r = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [];
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        { 1: 1, 18: 1 }[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var o = "css/" + ({}[e] || e) + ".css",
                a = s.p + o,
                r = document.getElementsByTagName("link"),
                u = 0;
              u < r.length;
              u++
            ) {
              var l =
                (d = r[u]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === o || l === a)) return t();
            }
            var c = document.getElementsByTagName("style");
            for (u = 0; u < c.length; u++) {
              var d;
              if ((l = (d = c[u]).getAttribute("data-href")) === o || l === a)
                return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var o = (t && t.target && t.target.src) || a,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = o),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  n(r);
              }),
              (p.href = a),
              document.getElementsByTagName("head")[0].appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, o) {
          n = a[e] = [t, o];
        });
        t.push((n[2] = o));
        var r,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          s.nc && u.setAttribute("nonce", s.nc),
          (u.src = (function (e) {
            return s.p + "js/" + ({}[e] || e) + ".js";
          })(e));
        var l = new Error();
        r = function (t) {
          (u.onerror = u.onload = null), clearTimeout(c);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = o),
                (l.request = i),
                n[1](l);
            }
            a[e] = void 0;
          }
        };
        var c = setTimeout(function () {
          r({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = r), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = o),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "//a.msstatic.com/huya/mobile/main/1.0.8/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var c = 0; c < u.length; c++) t(u[c]);
  var d = l;
  r.push(["+Hik", 15]), n();
})({
  "+Hik": function (e, t, n) {
    "use strict";
    n.r(t);
    n("seQc"), n("IyxK");
    var o = n("Jhi/"),
      i = n.n(o),
      a = n("mwMJ"),
      r = n("CCAU"),
      s = n.n(r),
      u = n("yH+z"),
      l = n.n(u),
      c = n("VvI3"),
      d = n.n(c),
      p = n("mwJZ"),
      f = n.n(p),
      h = (n("j6mM"), n("fpg6")),
      m = 0;
    if (window.liveLineUrl) {
      window.liveLineUrl = Object(h.default)(window.liveLineUrl);
      var y = '<video autoplay="true" src='.concat(
        window.liveLineUrl,
        ' id="html5player-video" preload="auto" x5-video-player-type="h5" x-webkit-airplay="true" -webkit-playsinline="true" playsinline="true" ></video>'
      );
      $("#video").html(y);
    }
    function g() {
      if ((Object(a.report)(f.a, "watchvedio=0"), window.ISLIVE)) {
        new i.a(), new l.a();
        var e = {
          type: "noraml",
          topsid: window.TOPSID || "99425467",
          subsid: window.SUBSID || "2337216815",
          yyuid: window.STATINFO.ayyuid || "73274903",
          totalCount: window.STATINFO.totalCount || 0,
          ISDEBUG: CONFIG.debug,
        };
        d()(e);
      }
      var t = _.once(function () {
        $(".match-iframe-wrap").addClass("match-iframe-wrap-show");
      });
      $.on("liveTab", function (e, n) {
        2 == n && t();
      }),
        $(".live_tab li").click(function () {
          if (!$(this).hasClass("on")) {
            var e = $(this).index();
            $(this).addClass("on").siblings().removeClass("on"),
              $(".live-tab-item").eq(e).show().siblings().hide(),
              $.emit("liveTab", e);
          }
        }),
        new s.a(f.a);
    }
    function v() {
      var e = new Date();
      $(
        '<img src="//ylog.huya.com/d.gif?rid=ods_action_log&pro=huyasp_wap&act=webhuyawap2&uid=&time=' +
          e.getTime() +
          "&ui=0.9597643008455634&lt=" +
          m +
          '&type=2">'
      ),
        m++;
    }
    CONFIG.debug &&
      TT.getScript(
        "http://wechatfe.github.io/vconsole/lib/vconsole.min.js?v=3.0.0.0",
        function () {
          new window.VConsole();
        }
      ),
      $(function () {
        setTimeout(g, 100),
          (function () {
            function e() {
              $(".wrapper").css({ minHeight: "none" });
            }
            "baidu" == getQueryString("platFrom") && e(),
              "baidumatch" == getQueryString("platFrom") &&
                $(".huya-header").hide(),
              "Dazhong" == getQueryString("platFrom") && e(),
              $(".match-iframe-wrap").length > 0 &&
                window.addEventListener(
                  "message",
                  function (e) {
                    if (/huya\.com/.test(e.origin)) {
                      var t = e.data;
                      if (-1 != t.indexOf("iframeHeight")) {
                        var n = t.split("=")[1];
                        $("#matchIframe").height(n);
                      }
                      if (-1 != t.indexOf("gameId")) {
                        var o = t.split("=")[1];
                        openApp({ gid: o });
                      }
                      if (-1 != t.indexOf("vid")) {
                        var i = t.split("=")[1];
                        window.location.href =
                          "http://v.huya.com/m/play/" + i + ".html";
                      }
                      -1 != t.indexOf("openApp") && openApp({ home: !0 });
                    }
                  },
                  !1
                );
          })(),
          v(),
          setInterval(v, 6e4);
      }),
      $(window).on("load", function () {
        n.e(1).then(n.bind(null, "sMRD")),
          n.e(16).then(n.t.bind(null, "SvyB", 7)),
          "baidu" == getQueryString("platFrom") &&
            n.e(18).then(n.t.bind(null, "geRs", 7));
      });
  },
  ANhw: function (e, t) {
    var n, o;
    (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
      (o = {
        rotl: function (e, t) {
          return (e << t) | (e >>> (32 - t));
        },
        rotr: function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        },
        endian: function (e) {
          if (e.constructor == Number)
            return (16711935 & o.rotl(e, 8)) | (4278255360 & o.rotl(e, 24));
          for (var t = 0; t < e.length; t++) e[t] = o.endian(e[t]);
          return e;
        },
        randomBytes: function (e) {
          for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
          return t;
        },
        bytesToWords: function (e) {
          for (var t = [], n = 0, o = 0; n < e.length; n++, o += 8)
            t[o >>> 5] |= e[n] << (24 - (o % 32));
          return t;
        },
        wordsToBytes: function (e) {
          for (var t = [], n = 0; n < 32 * e.length; n += 8)
            t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
          return t;
        },
        bytesToHex: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
          return t.join("");
        },
        hexToBytes: function (e) {
          for (var t = [], n = 0; n < e.length; n += 2)
            t.push(parseInt(e.substr(n, 2), 16));
          return t;
        },
        bytesToBase64: function (e) {
          for (var t = [], o = 0; o < e.length; o += 3)
            for (
              var i = (e[o] << 16) | (e[o + 1] << 8) | e[o + 2], a = 0;
              a < 4;
              a++
            )
              8 * o + 6 * a <= 8 * e.length
                ? t.push(n.charAt((i >>> (6 * (3 - a))) & 63))
                : t.push("=");
          return t.join("");
        },
        base64ToBytes: function (e) {
          e = e.replace(/[^A-Z0-9+\/]/gi, "");
          for (var t = [], o = 0, i = 0; o < e.length; i = ++o % 4)
            0 != i &&
              t.push(
                ((n.indexOf(e.charAt(o - 1)) & (Math.pow(2, -2 * i + 8) - 1)) <<
                  (2 * i)) |
                  (n.indexOf(e.charAt(o)) >>> (6 - 2 * i))
              );
          return t;
        },
      }),
      (e.exports = o);
  },
  BEtg: function (e, t) {
    function n(e) {
      return (
        !!e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return (
        null != e &&
        (n(e) ||
          (function (e) {
            return (
              "function" == typeof e.readFloatLE &&
              "function" == typeof e.slice &&
              n(e.slice(0, 0))
            );
          })(e) ||
          !!e._isBuffer)
      );
    };
  },
  CCAU: function (e, t, n) {
    var o = n("kM1k"),
      i = n("KOHk"),
      a = n("CKej"),
      r = i.get("stopPlayVideoTime"),
      s = CONFIG.isProd ? 2 : 15;
    console.log(i);
    var u = function (e) {
        this.init(e);
      },
      l = navigator.userAgent.toLowerCase(),
      c = getQueryString("platFrom"),
      d = getQueryString("vm"),
      p = getQueryString("autoplay"),
      f = /ipod|iphone|ipad/g.test(l) && /qq/g.test(l),
      h = c || d,
      m = !1;
    (u.prototype = {
      init: function (e) {
        var t,
          n,
          o = this;
        if (
          ((o.$video = $("#html5player-video")), 0 != o.$video.length) &&
          ((o.oVideo = o.$video[0]),
          (o.$playBtn = $("#playbtn")),
          (o.$playBtnInPause = $("#playbtnInPause")),
          (o.statInfo = e),
          (o.$videoLoading = $(".video-loading")),
          (o.statInfo.eid = "click/liveroom/play"),
          (o.statInfo.eid_desc = "点击/直播间/播放点击"),
          (o.$videoBar = $("#videoBar")),
          (o.$pauseBtn = $("#videoPause")),
          (o.$fullScreenBtn = $("#videoFS")),
          (o.$videoUiOuter = $(".video_ui")),
          (o.$replayBtn = $(".js-replay")),
          (o.$blueRayBtn = $("#videoBlueBtn")),
          (o.$blueRayLayer = $("#js-blueRayWrap")),
          (o.$pauseLayer = $("#js-pauseWrap")),
          (window.heartBeatUpisPlaying = o.isPlaying = !1),
          (o.isFirstPlay = !0),
          (o.isFirstTouchPlay = !0),
          (o.hasReportError = !1),
          (o.hasReportBuffer = !1),
          (o.isShowedBar = !1),
          (o.barTimmer = null),
          (o.toolBar =
            ((t = 1),
            (n = $.Callbacks()),
            {
              getState: function () {
                return t;
              },
              setState: function (e) {
                (t = e), n.fire(t);
              },
              show: function () {
                this.setState(1);
              },
              hide: function () {
                this.setState(0);
              },
              change: function (e) {
                n.add(e);
              },
            })),
          o.toolBar.change(function (e) {
            e ? o.$videoBar.removeClass("hide") : o.$videoBar.addClass("hide");
          }),
          window.ya &&
            ya.reportProductEvent({
              eid: "pageview/gamelive/player/definitiondl",
              eid_desc: "展示/游戏直播间/播放器/清晰度设置入口",
            }),
          o.bindEvent(),
          p)
        ) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            function () {
              o.oVideo.play();
            },
            !1
          );
          try {
            o.oVideo.play();
          } catch (e) {
            console.log(e);
          }
        }
      },
      bindEvent: function () {
        var e,
          t,
          n = this,
          i = 0;
        n.oVideo.addEventListener("play", function () {
          if ((n.$playBtn.hide(), !f && !h && (!r || r < s) && !m))
            return (
              (m = !0),
              (a = this),
              (u = r),
              void setTimeout(function () {
                $.emit("stopVideoPlay", a, u);
              }, 100)
            );
          var a, u;
          (e = Date.now()),
            n.$pauseLayer.hide(),
            n.$videoBar.show(),
            clearTimeout(n.barTimmer),
            (n.barTimmer = setTimeout(function () {
              n.toolBar.hide();
            }, 5e3)),
            n.$videoLoading.show(),
            n.isFirstTouchPlay &&
              window.ISLIVE &&
              (o.tafReport({
                sMetricName: "wap.hls.play",
                guid: window.Guid || 0,
                auid: n.statInfo.ayyuid,
                errorCode: 0,
              }),
              (n.isFirstTouchPlay = !1)),
            $(".clickstat").attr("stat-ext-parma-watchvedio", "watchvedio=1"),
            ya.setExtParam("watchvedio=1"),
            ya.reportProductEvent(n.statInfo),
            (t = setInterval(function () {
              (i += 1e3) > 1e4 &&
                !n.hasReportError &&
                window.ISLIVE &&
                (o.tafReport({
                  sMetricName: "wap.hls.error",
                  guid: window.Guid || 0,
                  auid: n.statInfo.ayyuid,
                  errorCode: 0,
                }),
                (n.hasReportError = !0));
            }, 1e3));
        }),
          n.oVideo.addEventListener("playing", function (i) {
            if (
              (console.log("video_playing事件"),
              $.emit("video_playing"),
              (window.heartBeatUpisPlaying = n.isPlaying = !0),
              (o.checkStatus.isPause = !1),
              n.$videoLoading.hide(),
              window.ISLIVE &&
                this.currentTime &&
                o.checkVideoBuffer({
                  videoDom: this,
                  guid: window.Guid || 0,
                  auid: n.statInfo.ayyuid,
                }),
              n.isFirstPlay &&
                window.performanceInfo &&
                void 0 !== performanceInfo._hmt)
            ) {
              var a = {
                m: [{ path: "video-load-time", value: Date.now() - e }],
              };
              performanceInfo._hmt.push(["reportCustomData", a]),
                (n.isFirstPlay = !1);
            }
            clearInterval(t);
          }),
          n.oVideo.addEventListener("pause", function () {
            $.emit("video_pause"),
              (o.checkStatus.isPause = !0),
              (window.heartBeatUpisPlaying = n.isPlaying = !1);
          }),
          n.oVideo.addEventListener("pause", function () {
            n.$videoLoading.hide(),
              n.$pauseLayer.show(),
              n.$blueRayLayer.hide(),
              n.toolBar.hide();
          }),
          n.oVideo.addEventListener("error", function (e) {
            if (
              (console.log("视频出错"),
              !n.hasReportError &&
                window.ISLIVE &&
                (o.tafReport({
                  sMetricName: "wap.hls.error",
                  guid: window.Guid || 0,
                  auid: n.statInfo.ayyuid,
                  errorCode: 0,
                }),
                (n.hasReportError = !0)),
              !CONFIG.debug)
            ) {
              var t = navigator.userAgent;
              window.performanceInfo &&
                void 0 !== performanceInfo._hmt &&
                performanceInfo._hmt.push([
                  "reportApiMess",
                  "wap_video_error",
                  t,
                  404,
                ]);
            }
          }),
          a.change(function (e) {
            e && n.oVideo.pause();
          }),
          n.$videoBar.on("touchend", function () {
            n.isPlaying &&
              (1 == n.toolBar.getState()
                ? (clearTimeout(n.barTimmer), n.toolBar.hide())
                : (n.toolBar.show(),
                  clearTimeout(n.barTimmer),
                  (n.barTimmer = setTimeout(function () {
                    n.toolBar.hide();
                  }, 5e3))));
          }),
          n.$replayBtn.on("click", function (e) {
            return (
              n.oVideo.play(),
              n.$video
                .attr("controls", "controls")
                .css("visibility", "visible"),
              $(".replay_video_ui").hide(),
              $(this).parent().hide(),
              !1
            );
          }),
          n.$blueRayBtn.on("touchend", function (e) {
            n.$blueRayLayer.show(),
              window.ya &&
                (ya.reportProductEvent({
                  eid: $(this).attr("eid"),
                  eid_desc: $(this).attr("eid_desc"),
                }),
                ya.reportProductEvent({
                  eid: "pageview/gamelive/player/definitionsetting",
                  eid_desc: "展示/游戏直播间/播放器/清晰度设置页",
                })),
              e.stopPropagation();
          }),
          $("#js-blueRayBtn").on("touchend", function (e) {
            e.stopPropagation();
          }),
          n.$blueRayLayer.on("touchend", ".dtip", function (e) {
            e.stopPropagation();
          }),
          n.$blueRayLayer.on("touchend", function (e) {
            $(this).hide(), e.stopPropagation();
          }),
          n.$playBtn.on("click", function (e) {
            n.oVideo.play(), e.stopPropagation();
          }),
          n.$playBtnInPause.on("touchend", function (e) {
            n.oVideo.play(), n.$pauseLayer.hide(), e.stopPropagation();
          }),
          n.$pauseBtn.on("touchend", function (e) {
            n.oVideo.pause(),
              window.ya &&
                ya.reportProductEvent({
                  eid: "pageview/gamelive/player/pause",
                  eid_desc: "展示/游戏直播间/播放器/暂停页",
                }),
              e.stopPropagation();
          }),
          n.$fullScreenBtn.on("touchend", function (e) {
            e.stopPropagation(),
              n.oVideo.requestFullscreen
                ? n.oVideo.requestFullscreen()
                : n.oVideo.webkitRequestFullscreen
                ? n.oVideo.webkitRequestFullscreen()
                : n.oVideo.webkitEnterFullscreen &&
                  n.oVideo.webkitEnterFullscreen();
          });
      },
    }),
      (e.exports = u);
  },
  CKej: function (e, t) {
    var n, o;
    void 0 !== document.hidden
      ? ((n = "hidden"), (o = "visibilitychange"))
      : void 0 !== document.webkitHidden &&
        ((n = "webkitHidden"), (o = "webkitvisibilitychange")),
      (e.exports = {
        state: function () {
          return !!n && document[n];
        },
        change: function (e) {
          o &&
            "function" == typeof e &&
            document.addEventListener(o, function (t) {
              e(document[n]);
            });
        },
      });
  },
  IDmW: function (e, t) {
    var n = [
        { key: "dx", alt: "[大笑]" },
        { key: "sh", alt: "[送花]" },
        { key: "tx", alt: "[偷笑]" },
        { key: "dk", alt: "[大哭]" },
        { key: "hh", alt: "[嘿哈]" },
        { key: "66", alt: "[666]" },
        { key: "gd", alt: "[感动]" },
        { key: "yw", alt: "[疑问]" },
        { key: "xh", alt: "[喜欢]" },
        { key: "jx", alt: "[奸笑]" },
        { key: "zan", alt: "[赞]" },
        { key: "ka", alt: "[可爱]" },
        { key: "am", alt: "[傲慢]" },
        { key: "kx", alt: "[开心]" },
        { key: "88", alt: "[拜拜]" },
        { key: "hx", alt: "[害羞]" },
        { key: "zs", alt: "[衰]" },
        { key: "pu", alt: "[吐血]" },
        { key: "zc", alt: "[嘴馋]" },
        { key: "sq", alt: "[生气]" },
        { key: "fe", alt: "[扶额]" },
        { key: "bz", alt: "[闭嘴]" },
        { key: "kw", alt: "[枯萎]" },
        { key: "xu", alt: "[嘘]" },
        { key: "xk", alt: "[笑哭]" },
        { key: "lh", alt: "[流汗]" },
        { key: "bk", alt: "[不看]" },
        { key: "hq", alt: "[哈欠]" },
        { key: "tp", alt: "[调皮]" },
        { key: "gl", alt: "[鬼脸]" },
        { key: "cl", alt: "[戳脸]" },
        { key: "dg", alt: "[大哥]" },
        { key: "kun", alt: "[困]" },
        { key: "yb", alt: "[拥抱]" },
        { key: "zt", alt: "[猪头]" },
        { key: "kl", alt: "[骷髅]" },
        { key: "cc", alt: "[臭臭]" },
        { key: "xd", alt: "[心动]" },
        { key: "dao", alt: "[刀]" },
      ],
      o = [
        { key: "wx", alt: "[微笑]" },
        { key: "ll", alt: "[流泪]" },
        { key: "dy", alt: "[得意]" },
        { key: "jy", alt: "[惊讶]" },
        { key: "pz", alt: "[撇嘴]" },
        { key: "yun", alt: "[晕]" },
        { key: "ng", alt: "[难过]" },
        { key: "se", alt: "[色]" },
        { key: "cy", alt: "[抽烟]" },
        { key: "qd", alt: "[敲打]" },
        { key: "mg", alt: "[玫瑰]" },
        { key: "wen", alt: "[吻]" },
        { key: "xs", alt: "[心碎]" },
        { key: "zd", alt: "[炸弹]" },
        { key: "sj", alt: "[睡觉]" },
        { key: "hk", alt: "[很酷]" },
        { key: "by", alt: "[白眼]" },
        { key: "ot", alt: "[呕吐]" },
        { key: "fd", alt: "[奋斗]" },
        { key: "kz", alt: "[口罩]" },
        { key: "hp", alt: "[害怕]" },
        { key: "dai", alt: "[发呆]" },
        { key: "fn", alt: "[发怒]" },
        { key: "ruo", alt: "[弱]" },
        { key: "ws", alt: "[握手]" },
        { key: "sl", alt: "[胜利]" },
        { key: "lw", alt: "[礼物]" },
        { key: "sd", alt: "[闪电]" },
        { key: "gz", alt: "[鼓掌]" },
        { key: "qq", alt: "[亲亲]" },
        { key: "kb", alt: "[抠鼻]" },
        { key: "wq", alt: "[委屈]" },
        { key: "yx", alt: "[阴险]" },
        { key: "kel", alt: "[可怜]" },
        { key: "bs", alt: "[鄙视]" },
        { key: "zk", alt: "[抓狂]" },
        { key: "bq", alt: "[抱拳]" },
        { key: "ok", alt: "[OK]" },
      ],
      i = {},
      a = {},
      r = [],
      s = [];
    $.each(n, function (e, t) {
      (t.code = "/{" + t.key),
        (t.img = "//a.msstatic.com/huya/mobile/img/emots@3/" + t.key + ".png"),
        (i[t.key] = t),
        r.push(t.key),
        s.push(t.alt);
    }),
      $.each(o, function (e, t) {
        (t.code = "/{" + t.key), (a[t.key] = t), r.push(t.key), s.push(t.alt);
      });
    var u = new RegExp("/{(" + r.join("|") + ")", "g"),
      l = new RegExp(
        s.join("|").replace(/\[/g, "\\[").replace(/\]/g, "\\]"),
        "g"
      ),
      c = function (e, t) {
        return ("string" == typeof e ? e : "").replace(u, function (e, n) {
          var o = !!a[n];
          return t(e, i[n] || a[n], o);
        });
      };
    function d(e) {
      this.faces = e;
    }
    (d.faces = n),
      (d.faceMap = i),
      (d.parse = c),
      (d.replace = function (e) {
        return c(e, function (e, t, n) {
          return t
            ? n
              ? t.alt
              : '<img src="' + t.img + '" alt="' + t.alt + '" />'
            : e;
        });
      }),
      (d.parseAlt = function (e, t) {
        return ("string" == typeof e ? e : "").replace(l, function (e) {
          var i = null;
          return (
            $.each(n.concat(o), function (t, n) {
              if (n.alt == e) return (i = n), !1;
            }),
            t(e, i)
          );
        });
      }),
      (e.exports = d);
  },
  IyxK: function (e, t, n) {},
  J66h: function (module, exports, __webpack_require__) {
    (function (global) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      !(function (e, t) {
        module.exports = t(e);
      })(
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== global
          ? global
          : this,
        function (global) {
          "use strict";
          global = global || {};
          var _Base64 = global.Base64,
            version = "2.5.2",
            buffer;
          if (module.exports)
            try {
              buffer = eval("require('buffer').Buffer");
            } catch (e) {
              buffer = void 0;
            }
          var b64chars =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            b64tab = (function (e) {
              for (var t = {}, n = 0, o = e.length; n < o; n++)
                t[e.charAt(n)] = n;
              return t;
            })(b64chars),
            fromCharCode = String.fromCharCode,
            cb_utob = function (e) {
              if (e.length < 2)
                return (t = e.charCodeAt(0)) < 128
                  ? e
                  : t < 2048
                  ? fromCharCode(192 | (t >>> 6)) + fromCharCode(128 | (63 & t))
                  : fromCharCode(224 | ((t >>> 12) & 15)) +
                    fromCharCode(128 | ((t >>> 6) & 63)) +
                    fromCharCode(128 | (63 & t));
              var t =
                65536 +
                1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320);
              return (
                fromCharCode(240 | ((t >>> 18) & 7)) +
                fromCharCode(128 | ((t >>> 12) & 63)) +
                fromCharCode(128 | ((t >>> 6) & 63)) +
                fromCharCode(128 | (63 & t))
              );
            },
            re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            utob = function (e) {
              return e.replace(re_utob, cb_utob);
            },
            cb_encode = function (e) {
              var t = [0, 2, 1][e.length % 3],
                n =
                  (e.charCodeAt(0) << 16) |
                  ((e.length > 1 ? e.charCodeAt(1) : 0) << 8) |
                  (e.length > 2 ? e.charCodeAt(2) : 0);
              return [
                b64chars.charAt(n >>> 18),
                b64chars.charAt((n >>> 12) & 63),
                t >= 2 ? "=" : b64chars.charAt((n >>> 6) & 63),
                t >= 1 ? "=" : b64chars.charAt(63 & n),
              ].join("");
            },
            btoa = global.btoa
              ? function (e) {
                  return global.btoa(e);
                }
              : function (e) {
                  return e.replace(/[\s\S]{1,3}/g, cb_encode);
                },
            _encode = function (e) {
              return "[object Uint8Array]" === Object.prototype.toString.call(e)
                ? e.toString("base64")
                : btoa(utob(String(e)));
            },
            encode = function (e, t) {
              return t
                ? _encode(String(e))
                    .replace(/[+\/]/g, function (e) {
                      return "+" == e ? "-" : "_";
                    })
                    .replace(/=/g, "")
                : _encode(e);
            },
            encodeURI = function (e) {
              return encode(e, !0);
            },
            re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
            cb_btou = function (e) {
              switch (e.length) {
                case 4:
                  var t =
                    (((7 & e.charCodeAt(0)) << 18) |
                      ((63 & e.charCodeAt(1)) << 12) |
                      ((63 & e.charCodeAt(2)) << 6) |
                      (63 & e.charCodeAt(3))) -
                    65536;
                  return (
                    fromCharCode(55296 + (t >>> 10)) +
                    fromCharCode(56320 + (1023 & t))
                  );
                case 3:
                  return fromCharCode(
                    ((15 & e.charCodeAt(0)) << 12) |
                      ((63 & e.charCodeAt(1)) << 6) |
                      (63 & e.charCodeAt(2))
                  );
                default:
                  return fromCharCode(
                    ((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1))
                  );
              }
            },
            btou = function (e) {
              return e.replace(re_btou, cb_btou);
            },
            cb_decode = function (e) {
              var t = e.length,
                n = t % 4,
                o =
                  (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) |
                  (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) |
                  (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) |
                  (t > 3 ? b64tab[e.charAt(3)] : 0),
                i = [
                  fromCharCode(o >>> 16),
                  fromCharCode((o >>> 8) & 255),
                  fromCharCode(255 & o),
                ];
              return (i.length -= [0, 0, 2, 1][n]), i.join("");
            },
            _atob = global.atob
              ? function (e) {
                  return global.atob(e);
                }
              : function (e) {
                  return e.replace(/\S{1,4}/g, cb_decode);
                },
            atob = function (e) {
              return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
            },
            _decode = buffer
              ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                ? function (e) {
                    return (e.constructor === buffer.constructor
                      ? e
                      : buffer.from(e, "base64")
                    ).toString();
                  }
                : function (e) {
                    return (e.constructor === buffer.constructor
                      ? e
                      : new buffer(e, "base64")
                    ).toString();
                  }
              : function (e) {
                  return btou(_atob(e));
                },
            decode = function (e) {
              return _decode(
                String(e)
                  .replace(/[-_]/g, function (e) {
                    return "-" == e ? "+" : "/";
                  })
                  .replace(/[^A-Za-z0-9\+\/]/g, "")
              );
            },
            noConflict = function () {
              var e = global.Base64;
              return (global.Base64 = _Base64), e;
            };
          if (
            ((global.Base64 = {
              VERSION: version,
              atob: atob,
              btoa: btoa,
              fromBase64: decode,
              toBase64: encode,
              utob: utob,
              encode: encode,
              encodeURI: encodeURI,
              btou: btou,
              decode: decode,
              noConflict: noConflict,
              __buffer__: buffer,
            }),
            "function" == typeof Object.defineProperty)
          ) {
            var noEnum = function (e) {
              return {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              };
            };
            global.Base64.extendString = function () {
              Object.defineProperty(
                String.prototype,
                "fromBase64",
                noEnum(function () {
                  return decode(this);
                })
              ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64",
                  noEnum(function (e) {
                    return encode(this, e);
                  })
                ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64URI",
                  noEnum(function () {
                    return encode(this, !0);
                  })
                );
            };
          }
          return (
            global.Meteor && (Base64 = global.Base64),
            module.exports
              ? (module.exports.Base64 = global.Base64)
              : ((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return global.Base64;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),
            { Base64: global.Base64 }
          );
        }
      );
    }.call(this, __webpack_require__("yLpj")));
  },
  JA6y: function (e, t) {
    var n = {},
      o = {},
      i = new $.Deferred();
    function a(e) {
      e = $.extend(
        {
          id: "",
          displayDelay: 0,
          count: 1,
          offDelay: 3e4,
          displayCallback: function () {},
          offCallback: function () {},
        },
        e
      );
      var t = TT.debounce(r, e.offDelay),
        n = TT.debounce(a, e.displayDelay),
        o = 0,
        i = [];
      function a() {
        i.length && (n.cancel(), e.displayCallback(o, i), (i = []));
      }
      function r() {
        t.cancel(), a(), e.offCallback();
      }
      return {
        id: e.id,
        add: function (r) {
          t(),
            (o = r.iItemGroup),
            i.push(r),
            1 == o || o % e.count == 0 ? a() : n();
        },
        off: r,
      };
    }
    function r(e, t) {
      var o = e.iItemType;
      if (n[o]) {
        var i = {
            nick: e.sSenderNick,
            icon: n[o].propIcon,
            count: e.iItemCount,
          },
          a = "";
        (a += '<li class="prop">'),
          (a += '<span class="nick">' + i.nick + "</span> "),
          (a += '<span class="send">送出</span> '),
          (a += '<img  src="' + TT.removeHTTP(i.icon) + '"/> '),
          (a += '<span class="count">' + i.count + "</span>"),
          (a += t > 1 ? '<span class="comb">' + t + "连击</span>" : ""),
          (a += "</li>"),
          $.emit("receiveGiftMsg", a);
      }
    }
    $.on(
      "danMuSetPropList",
      function (e, t) {
        !(function (e) {
          var t = e.vPropsItemList.value;
          $.each(t, function (e, t) {
            n[t.iPropsId] = {
              propId: t.iPropsId,
              iDisplayCd: t.iDisplayCd,
              iCount: t.iCount,
              propName: t.sPropsName,
              propIcon:
                t.vPropsIdentity &&
                t.vPropsIdentity.value.length &&
                t.vPropsIdentity.value[0].sPropsPic108.split("&")[0],
            };
          }),
            i.resolve();
        })(t);
      },
      !0
    ),
      i.done(function () {
        $.on(
          "danMuReceiveGift",
          function (e, t) {
            !(function (e) {
              var t = n[e.iItemType],
                i = e.lSenderUid,
                s = o[i];
              if (t)
                if (t.iCount > 0) {
                  var u = e.iItemType + "x" + e.iItemCount;
                  s && s.id == u
                    ? s.add(e)
                    : (s && s.off(),
                      (o[i] = new a({
                        id: u,
                        displayDelay: 1e3 * t.iDisplayCd,
                        count: t.iCount,
                        displayCallback: function (e, t) {
                          r(t.pop(), e);
                        },
                        offCallback: function () {
                          o[i] = null;
                        },
                      })),
                      o[i].add(e));
                } else s && s.off(), r(e);
              else s && s.off(), r(e);
            })(t);
          },
          !0
        );
      });
  },
  "Jhi/": function (e, t, n) {
    n("aGpO");
    var o = function (e) {
      this.init();
    };
    (o.prototype = {
      init: function () {
        this.setChatHeight(), this.bindEvent();
      },
      bindEvent: function () {
        $.on(
          "setRoomViewers",
          function (e, t) {
            var n = t.iAttendeeCount,
              o = 1 == window.hasLiveActivity ? TT.formatNumber(n, "W") : n;
            $("#liveCount").text(n),
              $("#tabLiveCount").text(o),
              $("#videoHdCount").text(parseInt(n).toLocaleString());
          },
          !0
        );
      },
      setChatHeight: function (e) {
        var t =
            0 == $(".huya-header").length ? 0 : $(".huya-header").outerHeight(),
          n =
            document.documentElement.clientHeight -
            t -
            $(".video0").height() -
            $(".start-btn").outerHeight() -
            $(".live_tab").outerHeight();
        $("#chatArea").css("height", n),
          $(".match-iframe-wrap").length > 0 &&
            $(".match-iframe-wrap").height(n);
      },
    }),
      (e.exports = o);
  },
  KOHk: function (e, t) {
    var n = t,
      o = decodeURIComponent,
      i = encodeURIComponent;
    function a(e) {
      return "string" == typeof e;
    }
    function r(e) {
      return a(e) && "" !== e;
    }
    function s(e) {
      if (!r(e)) throw new TypeError("Cookie name must be a non-empty string");
    }
    function u(e) {
      return e;
    }
    (n.get = function (e, t) {
      s(e), (t = "function" == typeof t ? { converter: t } : t || {});
      var n = (function (e, t) {
        var n = {};
        if (a(e) && e.length > 0)
          for (
            var i,
              r,
              s,
              l = t ? o : u,
              c = e.split(/;\s/g),
              d = 0,
              p = c.length;
            d < p;
            d++
          ) {
            if ((s = c[d].match(/([^=]+)=/i)) instanceof Array)
              try {
                (i = o(s[1])), (r = l(c[d].substring(s[1].length + 1)));
              } catch (e) {}
            else (i = o(c[d])), (r = "");
            i && (n[i] = r);
          }
        return n;
      })(document.cookie, !t.raw);
      return (t.converter || u)(n[e]);
    }),
      (n.set = function (e, t, n) {
        s(e);
        var o = (n = n || {}).expires,
          a = n.domain,
          u = n.path;
        n.raw || (t = i(String(t)));
        var l = e + "=" + t,
          c = o;
        return (
          "number" == typeof c && (c = new Date()).setDate(c.getDate() + o),
          c instanceof Date && (l += "; expires=" + c.toUTCString()),
          r(a) && (l += "; domain=" + a),
          r(u) && (l += "; path=" + u),
          n.secure && (l += "; secure"),
          (document.cookie = l),
          l
        );
      }),
      (n.remove = function (e, t) {
        return ((t = t || {}).expires = new Date(0)), this.set(e, "", t);
      });
  },
  VvI3: function (e, t, n) {
    var o = n("KOHk");
    e.exports = window.TafHandler
      ? function (e) {
          var t = new TafHandler({ ISDEBUG: e.ISDEBUG || !1 }),
            n = new HUYA.UserId(),
            i = "yanzhi" == e.type;
          function a(e) {
            console.log("上报" + e);
            var n = new HUYA.JumpLiveEventReq(),
              o = new HUYA.UserId();
            (o.sHuYaUA = "webh5&1.0.0&websocket"),
              (n.tId = o),
              (n.sFrom = "wap-wap"),
              (n.sFromUrl = location.href),
              (n.lLiveId = ""),
              (n.lTopCid = ""),
              (n.lSubCid = ""),
              t.sendWup("mobileui", "reportJumpLiveEvent", n);
          }
          function r(n) {
            var o = new HUYA.UserHeartBeatReq(),
              i = new HUYA.UserId(),
              a = navigator.userAgent.toLowerCase();
            (i.sHuYaUA = /android/g.test(a) ? "adr_wap" : "ios_wap"),
              (o.tId = i),
              (o.lTid = e.topsid),
              (o.lSid = e.subsid),
              (o.lShortTid = 0),
              (o.lPid = e.yyuid),
              (o.bWatchVideo = n),
              (o.eLineType = 1),
              (o.iFps = 0),
              (o.iAttendee = e.totalCount),
              (o.iBandwidth = 0),
              (o.iLastHeartElapseTime = 0),
              t.sendWup("onlineui", "OnUserHeartBeat", o);
          }
          t.addListener("WEBSOCKET_CONNECTED", function () {
            var e;
            (n.lUid = 0),
              (n.sGuid = o.get("guid")),
              (n.sToken = ""),
              (n.sHuYaUA = "waph5&1.0.0&websocket"),
              (n.sCookie = document.cookie),
              r(window.heartBeatUpisPlaying),
              setInterval(function () {
                r(window.heartBeatUpisPlaying);
              }, 6e4),
              ((e = new HUYA.LiveLaunchReq()).tId = n),
              (e.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA),
              t.sendWup("liveui", "doLaunch", e),
              (function () {
                var e = new HUYA.GetPropsListReq();
                (e.tUserId = n),
                  (e.sMd5 = ""),
                  (e.iTemplateType = i
                    ? HUYA.EClientTemplateType.TPL_MIRROR
                    : HUYA.EClientTemplateType.TPL_WEB),
                  (e.sVersion = ""),
                  t.sendWup("PropsUIServer", "getPropsList", e);
              })(),
              (function () {
                var e = getQueryString("share_fm"),
                  o = getQueryString("share_by");
                if (e && o) {
                  var i = {
                    weixin: 2,
                    pengyouquan: 1,
                    weibo: 3,
                    qq: 4,
                    kongjian: 5,
                    tieba: 6,
                    lianjie: 7,
                  };
                  !(function (e) {
                    var o = new HUYA.UserEventReq();
                    (o.tId = n),
                      (o.tId.lUid = 0),
                      (o.lTid = window.TOPSID || 0),
                      (o.lSid = window.SUBSID || 0),
                      (o.lPid = (window.STATINFO && STATINFO.ayyuid) || 0),
                      (o.eOp = 1),
                      (o.bWatchVideo = !0),
                      (o.bAnonymous = !0),
                      (o.sTraceSource = "share-" + e),
                      t.sendWup("onlineui", "OnUserEvent", o);
                  })(i[e] || 0),
                    window.localStorage.setItem(
                      "live_room_report_ref",
                      "share-" + i[e]
                    );
                }
              })(),
              getQueryString("shareUid") &&
                (function () {
                  var e = new Date(),
                    t = e.getFullYear(),
                    n = e.getMonth() + 1,
                    o = e.getDate(),
                    i = "" + t + n + o,
                    r = JSON.parse(localStorage.getItem("hyAppShareDate"));
                  if (r && r.date == i)
                    r.value < 3 &&
                      (a(r.value),
                      r.value++,
                      localStorage.setItem(
                        "hyAppShareDate",
                        JSON.stringify(r)
                      ));
                  else {
                    a(0);
                    var s = { date: i, value: 1 };
                    localStorage.setItem("hyAppShareDate", JSON.stringify(s));
                  }
                })(),
              (function () {
                var e = new HUYA.GetLivingInfoReq();
                (e.tId = n),
                  (e.lTopSid = window.TOPSID || 0),
                  (e.lSubSid = window.SUBSID || 0),
                  (e.lPresenterUid = (window.STATINFO && STATINFO.ayyuid) || 0),
                  (e.sTraceSource =
                    window.localStorage.getItem("live_room_report_ref") || ""),
                  t.sendWup("liveui", "getLivingInfo", e);
              })();
          }),
            t.addListener("OnUserEvent", function (e) {
              console.log("OnUserEvent----o%", e);
            }),
            t.addListener("doLaunch", function (i) {
              var a, r;
              (window.Guid = n.sGuid = i.sGuid),
                o.set("guid", window.Guid, { expires: 1 }),
                ((a = new HUYA.WSUserInfo()).lUid = e.yyuid),
                (a.bAnonymous = 0 == e.yyuid),
                (a.sGuid = n.sGuid),
                (a.sToken = ""),
                (a.lTid = e.topsid),
                (a.lSid = e.subsid),
                (a.lGroupId = 0),
                (a.lGroupType = 0),
                t.sendRegister(a),
                ((r = new HUYA.UserChannelReq()).tId = n),
                (r.lTopcid = e.topsid),
                (r.lSubcid = e.subsid),
                (r.sSendContent = ""),
                t.sendWup("liveui", "userIn", r);
            }),
            t.addListener("WSRegisterRsp", function (e) {}),
            t.addListener("8006", function (e) {
              $.emit("setRoomViewers", e);
            }),
            t.addListener("1400", function (e) {
              $.emit("danMuReceiveMsg", e);
            }),
            t.addListener("6501", function (e) {
              $.emit("danMuReceiveGift", e);
            }),
            t.addListener("getPropsList", function (e) {
              $.emit("danMuSetPropList", e);
            });
        }
      : $.noop;
  },
  aCH8: function (e, t, n) {
    var o, i, a, r, s;
    (o = n("ANhw")),
      (i = n("mmNF").utf8),
      (a = n("BEtg")),
      (r = n("mmNF").bin),
      ((s = function (e, t) {
        e.constructor == String
          ? (e =
              t && "binary" === t.encoding
                ? r.stringToBytes(e)
                : i.stringToBytes(e))
          : a(e)
          ? (e = Array.prototype.slice.call(e, 0))
          : Array.isArray(e) || (e = e.toString());
        for (
          var n = o.bytesToWords(e),
            u = 8 * e.length,
            l = 1732584193,
            c = -271733879,
            d = -1732584194,
            p = 271733878,
            f = 0;
          f < n.length;
          f++
        )
          n[f] =
            (16711935 & ((n[f] << 8) | (n[f] >>> 24))) |
            (4278255360 & ((n[f] << 24) | (n[f] >>> 8)));
        (n[u >>> 5] |= 128 << u % 32), (n[14 + (((u + 64) >>> 9) << 4)] = u);
        var h = s._ff,
          m = s._gg,
          y = s._hh,
          g = s._ii;
        for (f = 0; f < n.length; f += 16) {
          var v = l,
            _ = c,
            w = d,
            b = p;
          (l = h(l, c, d, p, n[f + 0], 7, -680876936)),
            (p = h(p, l, c, d, n[f + 1], 12, -389564586)),
            (d = h(d, p, l, c, n[f + 2], 17, 606105819)),
            (c = h(c, d, p, l, n[f + 3], 22, -1044525330)),
            (l = h(l, c, d, p, n[f + 4], 7, -176418897)),
            (p = h(p, l, c, d, n[f + 5], 12, 1200080426)),
            (d = h(d, p, l, c, n[f + 6], 17, -1473231341)),
            (c = h(c, d, p, l, n[f + 7], 22, -45705983)),
            (l = h(l, c, d, p, n[f + 8], 7, 1770035416)),
            (p = h(p, l, c, d, n[f + 9], 12, -1958414417)),
            (d = h(d, p, l, c, n[f + 10], 17, -42063)),
            (c = h(c, d, p, l, n[f + 11], 22, -1990404162)),
            (l = h(l, c, d, p, n[f + 12], 7, 1804603682)),
            (p = h(p, l, c, d, n[f + 13], 12, -40341101)),
            (d = h(d, p, l, c, n[f + 14], 17, -1502002290)),
            (l = m(
              l,
              (c = h(c, d, p, l, n[f + 15], 22, 1236535329)),
              d,
              p,
              n[f + 1],
              5,
              -165796510
            )),
            (p = m(p, l, c, d, n[f + 6], 9, -1069501632)),
            (d = m(d, p, l, c, n[f + 11], 14, 643717713)),
            (c = m(c, d, p, l, n[f + 0], 20, -373897302)),
            (l = m(l, c, d, p, n[f + 5], 5, -701558691)),
            (p = m(p, l, c, d, n[f + 10], 9, 38016083)),
            (d = m(d, p, l, c, n[f + 15], 14, -660478335)),
            (c = m(c, d, p, l, n[f + 4], 20, -405537848)),
            (l = m(l, c, d, p, n[f + 9], 5, 568446438)),
            (p = m(p, l, c, d, n[f + 14], 9, -1019803690)),
            (d = m(d, p, l, c, n[f + 3], 14, -187363961)),
            (c = m(c, d, p, l, n[f + 8], 20, 1163531501)),
            (l = m(l, c, d, p, n[f + 13], 5, -1444681467)),
            (p = m(p, l, c, d, n[f + 2], 9, -51403784)),
            (d = m(d, p, l, c, n[f + 7], 14, 1735328473)),
            (l = y(
              l,
              (c = m(c, d, p, l, n[f + 12], 20, -1926607734)),
              d,
              p,
              n[f + 5],
              4,
              -378558
            )),
            (p = y(p, l, c, d, n[f + 8], 11, -2022574463)),
            (d = y(d, p, l, c, n[f + 11], 16, 1839030562)),
            (c = y(c, d, p, l, n[f + 14], 23, -35309556)),
            (l = y(l, c, d, p, n[f + 1], 4, -1530992060)),
            (p = y(p, l, c, d, n[f + 4], 11, 1272893353)),
            (d = y(d, p, l, c, n[f + 7], 16, -155497632)),
            (c = y(c, d, p, l, n[f + 10], 23, -1094730640)),
            (l = y(l, c, d, p, n[f + 13], 4, 681279174)),
            (p = y(p, l, c, d, n[f + 0], 11, -358537222)),
            (d = y(d, p, l, c, n[f + 3], 16, -722521979)),
            (c = y(c, d, p, l, n[f + 6], 23, 76029189)),
            (l = y(l, c, d, p, n[f + 9], 4, -640364487)),
            (p = y(p, l, c, d, n[f + 12], 11, -421815835)),
            (d = y(d, p, l, c, n[f + 15], 16, 530742520)),
            (l = g(
              l,
              (c = y(c, d, p, l, n[f + 2], 23, -995338651)),
              d,
              p,
              n[f + 0],
              6,
              -198630844
            )),
            (p = g(p, l, c, d, n[f + 7], 10, 1126891415)),
            (d = g(d, p, l, c, n[f + 14], 15, -1416354905)),
            (c = g(c, d, p, l, n[f + 5], 21, -57434055)),
            (l = g(l, c, d, p, n[f + 12], 6, 1700485571)),
            (p = g(p, l, c, d, n[f + 3], 10, -1894986606)),
            (d = g(d, p, l, c, n[f + 10], 15, -1051523)),
            (c = g(c, d, p, l, n[f + 1], 21, -2054922799)),
            (l = g(l, c, d, p, n[f + 8], 6, 1873313359)),
            (p = g(p, l, c, d, n[f + 15], 10, -30611744)),
            (d = g(d, p, l, c, n[f + 6], 15, -1560198380)),
            (c = g(c, d, p, l, n[f + 13], 21, 1309151649)),
            (l = g(l, c, d, p, n[f + 4], 6, -145523070)),
            (p = g(p, l, c, d, n[f + 11], 10, -1120210379)),
            (d = g(d, p, l, c, n[f + 2], 15, 718787259)),
            (c = g(c, d, p, l, n[f + 9], 21, -343485551)),
            (l = (l + v) >>> 0),
            (c = (c + _) >>> 0),
            (d = (d + w) >>> 0),
            (p = (p + b) >>> 0);
        }
        return o.endian([l, c, d, p]);
      })._ff = function (e, t, n, o, i, a, r) {
        var s = e + ((t & n) | (~t & o)) + (i >>> 0) + r;
        return ((s << a) | (s >>> (32 - a))) + t;
      }),
      (s._gg = function (e, t, n, o, i, a, r) {
        var s = e + ((t & o) | (n & ~o)) + (i >>> 0) + r;
        return ((s << a) | (s >>> (32 - a))) + t;
      }),
      (s._hh = function (e, t, n, o, i, a, r) {
        var s = e + (t ^ n ^ o) + (i >>> 0) + r;
        return ((s << a) | (s >>> (32 - a))) + t;
      }),
      (s._ii = function (e, t, n, o, i, a, r) {
        var s = e + (n ^ (t | ~o)) + (i >>> 0) + r;
        return ((s << a) | (s >>> (32 - a))) + t;
      }),
      (s._blocksize = 16),
      (s._digestsize = 16),
      (e.exports = function (e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var n = o.wordsToBytes(s(e, t));
        return t && t.asBytes
          ? n
          : t && t.asString
          ? r.bytesToString(n)
          : o.bytesToHex(n);
      });
  },
  aGpO: function (e, t) {
    function n(e) {
      var t = "",
        n = "",
        o = (e = e || {}).ele,
        i = TT.getQueryString("shareid");
      o &&
        ((t = o && (o.getAttribute("eid") || $(o).attr("eid"))),
        (n = o && (o.getAttribute("eid_desc") || $(o).attr("eid_desc"))),
        t &&
          (i && ya.setExtParam("shareid=" + i),
          ya.reportProductEvent({
            ayyuid: window.STATINFO ? STATINFO.ayyuid : "",
            game_id: window.STATINFO ? STATINFO.gameid : "",
            eid: t,
            eid_desc: n,
          })));
    }
    function o(e) {
      var t = (e = e || {}).ele,
        n = t ? t.getAttribute("eid") : "",
        o = n ? "huya_wap/" + n : "",
        i = navigator.userAgent.toLowerCase(),
        a = /micromessenger/g.test(i) ? "zhibo/weixin/openapp" : o || "";
      openApp({
        id: t
          ? t.getAttribute("data-chTopId") || window.TOPSID
          : window.TOPSID || "",
        sid: t
          ? t.getAttribute("data-subChId") || window.SUBSID
          : window.SUBSID || "",
        eid: t ? t.getAttribute("data-eventId") : "",
        gid: t ? t.getAttribute("data-sectionId") : "",
        uid: window.STATINFO
          ? window.STATINFO.ayyuid
          : t
          ? t.getAttribute("data-uid")
          : "",
        home: !!t && t.getAttribute("data-jumpIndex"),
        vid: t ? t.getAttribute("data-vid") : "",
        url: t ? t.getAttribute("data-blogUrl") : "",
        screenType: window.SCREENTYPE || "",
        liveSourceType: window.LIVESOURCETYPE || "",
        source: a,
        key: t ? t.getAttribute("key") : "",
        ct: t ? t.getAttribute("ct") : "",
      });
    }
    function i() {
      var e,
        t = location.search.slice(1);
      $("a").each(function (n, o) {
        (e = $(o).attr("href")) &&
          -1 == e.indexOf("javascript") &&
          t &&
          (-1 == e.indexOf("?") ? (e += "?") : (e += "&"),
          $(o).attr("href", e + t));
      });
    }
    $(document).on("click", ".u-btn-down", function () {
      var e;
      TT.getQueryString("appChannel");
      window.ppAJSClient
        ? ((e = JSON.stringify({
            key_method_id: 209,
            key_data: {
              key_app_id: 2180653,
              key_res_name: "com.duowan.kiwi",
              key_res_type: "0",
              key_from: "huya",
            },
            key_js_callback: 0,
          })),
          window.ppAJSClient.callAndroidMethod(e))
        : o({ ele: this }),
        n({ ele: this });
    }),
      (function () {
        document.addEventListener("touchstart", function (e) {
          e.touches.length > 1 && e.preventDefault();
        });
        var e = 0;
        document.addEventListener(
          "touchend",
          function (t) {
            var n = new Date().getTime();
            n - e <= 300 && t.preventDefault(), (e = n);
          },
          !1
        );
      })(),
      $(document).on("click", "a", function (e) {
        var t,
          n = location.search;
        if ((t = $(this).attr("href")) && -1 == t.indexOf("javascript") && n) {
          e.preventDefault(), -1 == t.indexOf("?") ? (t += "?") : (t += "&");
          var o =
            t +
            n
              .replace(/[\?|&]m=([^&]*)/, "")
              .replace(/[\?|&]do=([^&]*)/, "")
              .replace(/\?/g, "");
          window.location.href = o;
        }
      }),
      (window.linkAddChannel = i),
      (e.exports.downLoadApp = o),
      (e.exports.linkAddChannel = i),
      (e.exports.downLoadReport = n);
  },
  ddIf: function (e, t, n) {},
  fpg6: function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n("J66h"),
      i = n("aCH8"),
      a = n.n(i);
    t.default = function (e, t = 0) {
      const n = (function (e) {
          var t = e.split("?")[1];
          t = t.split("&");
          var n = {};
          for (let e = 0; e < t.length; e++) {
            let o = t[e].split("=");
            2 === o.length && (n[o[0]] = o[1]);
          }
          return n;
        })(e),
        i = e.split("?")[0],
        r = i.split("/"),
        s = r[r.length - 1].replace(/.(flv|m3u8)/g, "");
      let { fm: u, wsTime: l, wsSecret: c, ...d } = n;
      if (!u) return null;
      u = o.Base64.decode(decodeURIComponent(u));
      const p = u.split("_")[0],
        f = parseInt(1e4 * new Date().getTime() + 1e4 * Math.random());
      let h = `${p}_${t}_${s}_${f}_${l}`,
        m = a()(h),
        y = "";
      return (
        Object.keys(d).forEach((e) => {
          y += `&${e}=${d[e]}`;
        }),
        `${i}?wsSecret=${m}&wsTime=${l}&u=${t}&seqid=${f}${y}`
      );
    };
  },
  j6mM: function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n("jhBR"),
      i = n.n(o),
      a = (n("ddIf"), $(".more_nav li"));
    TT.removeHTTP(window.mainHost);
    function r(e) {
      return (e = parseInt(e)) < 10 ? "0" + e : e;
    }
    a.on("click", function (e) {
      if (!$(this).hasClass("on")) {
        $(this).addClass("on").siblings().removeClass("on");
        var t = $(this).index();
        $(".more_content").find(".g-list-main").hide(),
          $(".more_content")
            .find("[data-recnum=" + t + "]")
            .show();
      }
    }),
      window.isHuyaVideo &&
        (function () {
          var e = $("#recentLiveInfoStartTime").html();
          if (e) {
            var t = parseInt(e);
            $("#recentLiveInfoStartTime")
              .html(
                (function (e) {
                  if (!e) return;
                  new Date();
                  var t = new Date(1e3 * e),
                    n = new Date().setHours(0, 0, 0, 0) / 1e3,
                    o = r(t.getHours()),
                    i = r(t.getMinutes());
                  if (e >= n) return "今天 " + o + ":" + i;
                  if (e >= n - 86400 && e < n) return "昨天 " + o + ":" + i;
                  if (e < n - 86400 && e >= n - 2592e3) {
                    var a = (n - e) / 86400;
                    return Math.floor(a + 1) + "天前";
                  }
                  if (e < n - 2592e3)
                    return (
                      t.getFullYear() +
                      "年" +
                      (t.getMonth() + 1) +
                      "月" +
                      t.getDate() +
                      "日"
                    );
                })(t)
              )
              .show();
          }
          $.getJSON(
            "//v.huya.com/index.php?callback=?",
            { r: "api/getlistbyuid", channel: TOPSID, uid: STATINFO.ayyuid },
            function (e) {
              if (e && e.length > 0) {
                var t = "http://m.v.huya.com/play/" + e[0].vid + ".html";
                $(".anchor_video") &&
                  $(".anchor_video_play_btn").attr("href", t);
                for (var n = e.slice(0, 8), o = "", a = 0; a < n.length; a++) {
                  var r = n[a];
                  o += i()({
                    data: {
                      linkUrl: "http://m.v.huya.com/play/" + r.vid + ".html",
                      gameName: "",
                      isShowGameName: !1,
                      nick: r.user_nickname,
                      relate: !0,
                      count: r.video_play_num,
                      title: r.video_title,
                      imgUrl: TT.removeHTTP(r.video_cover),
                      eid: "Click/Live/shipingcard",
                      eid_desc: "点击/直播间/主播视频卡片",
                    },
                  });
                }
                $(".huya-video").html(o);
              }
            }
          );
        })();
  },
  jhBR: function (module, exports) {
    module.exports = function anonymous(locals, escapeFn, include, rethrow) {
      (rethrow =
        rethrow ||
        function (e, t, n, o, i) {
          var a = t.split("\n"),
            r = Math.max(o - 3, 0),
            s = Math.min(a.length, o + 3),
            u = i(n),
            l = a
              .slice(r, s)
              .map(function (e, t) {
                var n = t + r + 1;
                return (n == o ? " >> " : "    ") + n + "| " + e;
              })
              .join("\n");
          throw (
            ((e.path = u),
            (e.message =
              (u || "ejs") + ":" + o + "\n" + l + "\n\n" + e.message),
            e)
          );
        }),
        (escapeFn =
          escapeFn ||
          function (e) {
            return null == e ? "" : String(e).replace(_MATCH_HTML, encode_char);
          });
      var _ENCODE_HTML_RULES = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&#34;",
          "'": "&#39;",
        },
        _MATCH_HTML = /[&<>'"]/g;
      function encode_char(e) {
        return _ENCODE_HTML_RULES[e] || e;
      }
      var __line = 1,
        __lines =
          '<a class="clickstat g-link" href="<%= data.linkUrl %>" <% if(data.ref){ %>  ref="<%= data.ref %>" <%}%>  <% if(data.eid){ %> eid="<%= data.eid %>" eid_desc="<%=  data.eid_desc %>" <%} %> >\n    <div class="g-item">\n        <div class="g-pic">\n            <% if (data.isShowGameName) { %>\n            <span class="game-name"><%=  data.gameName %></span>\n            <% }%>\n            <div class="pic">\n               <img class="pic-con" src="<%= data.imgUrl %>" onerror="this.src=\'//a.msstatic.com/huya/mobile/img/default_live_353d12e.jpg\',this.onerror=null;">\n            </div>\n        </div>\n        <p class="title"><%= TT.xssFilter(data.title) %></p>\n        <div class="info">\n            <% if (data.nick) { %>\n            <span class="nick"><%= TT.xssFilter(data.nick) %></span>\n            <% } %>\n            <div class="viewer-wrap">\n                <% if (data.relate){ %>\n                <i class="viewer-relate-icon"></i>\n                <% } else { %>\n                <i class="viewer-icon"></i>\n                <% } %>\n                <span class="viewer-count"><%= data.count %></span>\n            </div>\n        </div>\n        <% if(data.room_id){ %>\n            <p class="room room-live">房间号 : <%= data.room_id %></p>\n        <% } %>\n    </div>\n</a>\n ',
        __filename = "src/assets/templates/card.tmpl";
      try {
        var __output = [],
          __append = __output.push.bind(__output);
        with (locals || {})
          __append('<a class="clickstat g-link" href="'),
            __append(escapeFn(data.linkUrl)),
            __append('" '),
            data.ref &&
              (__append('  ref="'),
              __append(escapeFn(data.ref)),
              __append('" ')),
            __append("  "),
            data.eid &&
              (__append(' eid="'),
              __append(escapeFn(data.eid)),
              __append('" eid_desc="'),
              __append(escapeFn(data.eid_desc)),
              __append('" ')),
            __append(
              ' >\n    <div class="g-item">\n        <div class="g-pic">\n            '
            ),
            (__line = 4),
            data.isShowGameName &&
              (__append('\n            <span class="game-name">'),
              (__line = 5),
              __append(escapeFn(data.gameName)),
              __append("</span>\n            "),
              (__line = 6)),
            __append(
              '\n            <div class="pic">\n               <img class="pic-con" src="'
            ),
            (__line = 8),
            __append(escapeFn(data.imgUrl)),
            __append(
              '" onerror="this.src=\'//a.msstatic.com/huya/mobile/img/default_live_353d12e.jpg\',this.onerror=null;">\n            </div>\n        </div>\n        <p class="title">'
            ),
            (__line = 11),
            __append(escapeFn(TT.xssFilter(data.title))),
            __append('</p>\n        <div class="info">\n            '),
            (__line = 13),
            data.nick &&
              (__append('\n            <span class="nick">'),
              (__line = 14),
              __append(escapeFn(TT.xssFilter(data.nick))),
              __append("</span>\n            "),
              (__line = 15)),
            __append(
              '\n            <div class="viewer-wrap">\n                '
            ),
            (__line = 17),
            data.relate
              ? (__append(
                  '\n                <i class="viewer-relate-icon"></i>\n                '
                ),
                (__line = 19))
              : (__append(
                  '\n                <i class="viewer-icon"></i>\n                '
                ),
                (__line = 21)),
            __append('\n                <span class="viewer-count">'),
            (__line = 22),
            __append(escapeFn(data.count)),
            __append("</span>\n            </div>\n        </div>\n        "),
            (__line = 25),
            data.room_id &&
              (__append('\n            <p class="room room-live">房间号 : '),
              (__line = 26),
              __append(escapeFn(data.room_id)),
              __append("</p>\n        "),
              (__line = 27)),
            __append("\n    </div>\n</a>\n "),
            (__line = 30);
        return __output.join("");
      } catch (e) {
        rethrow(e, __lines, __filename, __line, escapeFn);
      }
    };
  },
  kM1k: function (e, t) {
    function n(e) {
      console.log(e);
      var t = new HUYA.UserId();
      e = e || {};
      t.sGuid = e.guid || "111111111";
      var n = new HUYA.MetricSet();
      n.tId = t;
      var o = new HUYA.Metric();
      (o.sMetricName = e.sMetricName || ""),
        (o.iTS = new Date().getTime()),
        (o.iSuccess = e.errorCode),
        (o.eUnit = 15);
      var i = new HUYA.Dimension();
      (i.sName = "anchoruid"),
        (i.sValue = e.auid || 111111111),
        o.vDimension.value.push(i),
        n.vMetric.value.push(o),
        (function (e, t, n) {
          var o = new Taf.Wup();
          o.setServant(e), o.setFunc(t), o.writeStruct("tReq", n);
          var i = o.encode().getBuffer(),
            a = new Date().getTime();
          Taf.Util.ajax(
            "//statwup.huya.com?timestamp=" + a,
            i,
            function (e) {
              console.log("tafHttp sucess");
            },
            function (e) {
              console.error("tafHttp fail");
            }
          );
        })("metric", "report", n);
    }
    var o,
      i,
      a,
      r,
      s = { isPause: !1 },
      u =
        ((o = null),
        (i = null),
        (a = !1),
        (r = 0),
        function (e) {
          console.log("20S之后才开始检测"),
            i && clearInterval(i),
            (r = 0),
            (i = setInterval(function () {
              if (s.isPause)
                return (
                  clearInterval(o),
                  clearInterval(i),
                  void console.log("检测已停止...")
                );
              a &&
                (n({
                  sMetricName: "wap.hls.buffer",
                  guid: e.guid,
                  auid: e.auid,
                  errorCode: r > 0 ? 100 : 0,
                }),
                console.log(
                  "执行上报:" +
                    (r > 0 ? "卡顿(本次采集的卡顿数为" + r + ")" : "无卡顿")
                )),
                (r = 0),
                console.log("采集开始"),
                (function (e) {
                  var t = 0,
                    n = 0;
                  o && clearInterval(o),
                    (o = setInterval(function () {
                      (n = e.videoDom.currentTime),
                        console.log("检查中..."),
                        n < t + 0.7 &&
                          !e.videoDom.paused &&
                          (console.log("缓冲中..."),
                          r++,
                          "function" == typeof e.reportCallback &&
                            e.reportCallback()),
                        (t = n);
                    }, 1e3));
                })(e),
                (a = !0);
            }, 2e4));
        });
    e.exports = { tafReport: n, checkVideoBuffer: u, checkStatus: s };
  },
  mmNF: function (e, t) {
    var n = {
      utf8: {
        stringToBytes: function (e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
        },
        bytesToString: function (e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)));
        },
      },
      bin: {
        stringToBytes: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push(255 & e.charCodeAt(n));
          return t;
        },
        bytesToString: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push(String.fromCharCode(e[n]));
          return t.join("");
        },
      },
    };
    e.exports = n;
  },
  mwJZ: function (e, t) {
    var n = window.STATINFO || {};
    window.ISLIVE
      ? ((n.eid = "pageview/gamelive"), (n.eid_desc = "展示/游戏直播间"))
      : ((n.eid = "pageview/notlive"), (n.eid_desc = "展示/未开播直播间")),
      (n.ayyuid = window.STATINFO ? STATINFO.ayyuid : ""),
      (e.exports = n);
  },
  "yH+z": function (e, t, n) {
    var o = n("IDmW");
    n("JA6y");
    function i() {
      this.init();
    }
    (i.prototype = {
      init: function () {
        var e = this;
        (e.tanmuUl = $("#chatArea ul")),
          (e.isGotoBottom = !0),
          (e.msgCount = 0),
          (e.propsInfo = {}),
          (e.tanmuScroll = new IScroll("#chatArea", {
            scrollbars: !1,
            mouseWheel: !0,
            interactiveScrollbars: !0,
            shrinkScrollbars: "scale",
            fadeScrollbars: !0,
          })),
          e.bindEvent();
      },
      bindEvent: function () {
        var e = this;
        e.tanmuScroll.on("scrollStart", function (t) {
          e.isGotoBottom = !1;
        }),
          e.tanmuScroll.on("scrollEnd", function (t) {
            this.y > this.maxScrollY + 60
              ? (e.isGotoBottom = !1)
              : (e.isGotoBottom = !0);
          }),
          $.on(
            "danMuReceiveMsg",
            function (t, n) {
              e.receiveMsg(n);
            },
            !0
          ),
          $.on(
            "receiveGiftMsg",
            function (t, n) {
              e.appendList(n);
            },
            !0
          );
      },
      isGoToBottom: function () {},
      receiveMsg: function (e) {
        var t = {
            nick: TT.xssFilter(e.tUserInfo.sNickName),
            msg: TT.xssFilter(e.sContent),
          },
          n =
            '<li class="normal"><span class="nick">' +
            t.nick +
            "</span> " +
            o.replace(t.msg) +
            "</li>";
        this.appendList(n);
      },
      appendList: function (e) {
        var t = this;
        (t.blankHtml += e),
          t.msgCount++,
          t.timer ||
            (t.timer = setTimeout(function () {
              t.tanmuUl.append(t.blankHtml),
                (t.timer = null),
                (t.blankHtml = ""),
                t.msgCount >= 100 &&
                  (t.tanmuUl.find("li").slice(0, 50).remove(),
                  (t.msgCount = t.msgCount - 50),
                  (t.isGotoBottom = !0)),
                t.tanmuScroll.refresh(),
                t.isGotoBottom &&
                  t.tanmuScroll.scrollTo(0, t.tanmuScroll.maxScrollY, 0, null);
            }, 100));
      },
      blankHtml: "",
      timer: null,
    }),
      (e.exports = window.IScroll ? i : $.noop);
  },
  yLpj: function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
});
