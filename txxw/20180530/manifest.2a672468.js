!function(e) {
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    var r = window.webpackJsonp;
    window.webpackJsonp = function(t, c, a) {
        for (var i, u, f, d = 0, s = []; d < t.length; d++)
            u = t[d],
            o[u] && s.push(o[u][0]),
            o[u] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        for (r && r(t, c, a); s.length; )
            s.shift()();
        if (a)
            for (d = 0; d < a.length; d++)
                f = n(n.s = a[d]);
        return f
    }
    ;
    var t = {}
      , o = {
        15: 0
    };
    n.e = function(e) {
        function r() {
            i.onerror = i.onload = null,
            clearTimeout(u);
            var n = o[e];
            0 !== n && (n && n[1](new Error("Loading chunk " + e + " failed.")),
            o[e] = void 0)
        }
        var t = o[e];
        if (0 === t)
            return new Promise(function(e) {
                e()
            }
            );
        if (t)
            return t[2];
        var c = new Promise(function(n, r) {
            t = o[e] = [n, r]
        }
        );
        t[2] = c;
        var a = document.getElementsByTagName("head")[0]
          , i = document.createElement("script");
        i.type = "text/javascript",
        i.charset = "utf-8",
        i.async = !0,
        i.timeout = 12e4,
        n.nc && i.setAttribute("nonce", n.nc),
        i.src = n.p + "" + ({
            1: "normal",
            2: "video",
            3: "project",
            4: "people",
            5: "media",
            6: "topic",
            7: "mobileqq",
            8: "weibo",
            9: "wenda",
            10: "wenda-answer",
            11: "feed",
            12: "hotnews",
            13: "vendors",
            14: "main"
        }[e] || e) + "." + {
            0: "491f7912",
            1: "823a316f",
            2: "67428bee",
            3: "71ee44d4",
            4: "897316b4",
            5: "46d2651b",
            6: "24ed32ec",
            7: "d40e0ddf",
            8: "a66a0b67",
            9: "8c879161",
            10: "f8c70544",
            11: "b80243d8",
            12: "d94d5a31",
            13: "c6f772c9",
            14: "c19cf5a9"
        }[e] + ".chunk.js";
        var u = setTimeout(r, 12e4);
        return i.onerror = i.onload = r,
        a.appendChild(i),
        c
    }
    ,
    n.m = e,
    n.c = t,
    n.d = function(e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }
    ,
    n.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(r, "a", r),
        r
    }
    ,
    n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    n.p = "//mat1.gtimg.com/pingjs/js/tnfe/works/news/",
    n.oe = function(e) {
        throw console.error(e),
        e
    }
}([]);
//# sourceMappingURL=manifest.2a672468.js.map/*  |xGv00|b3066dc306faf3fe80e9f7f6aa34cec4 */
