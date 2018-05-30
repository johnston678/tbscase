webpackJsonp([0], {
    569: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        n.d(t, "a", function() {
            return v
        }),
        n.d(t, "b", function() {
            return k
        });
        var i, s, c = n(1), l = (n.n(c),
        n(99)), u = n.n(l), p = n(604), f = n.n(p), d = n(232), m = n(215), h = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), v = {
            border: "border",
            center: "center"
        }, y = function(e) {
            if (window.sessionStorage)
                return window.sessionStorage[e]
        }, g = function(e, t) {
            window.sessionStorage && (window.sessionStorage[e] = t)
        }, b = 100, w = function(e) {
            function t() {
                o(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.__timer = null,
                window.addEventListener("scroll", function johnstonAddScroll() {
                    e.__timer && clearTimeout(e.__timer),
                    e.__timer = setTimeout(function johnstonScrollTimeout() {
                        return e.__onScrollEnd()
                    }, b)
                }),
                setInterval(function johnstonAddInterval() {
                    e.__timer && clearTimeout(e.__timer),
                    e.__timer = setTimeout(function johnstonIntervalTimeout() {
                        return e.__onScrollEnd()
                    }, b)
                }, 300),
                e
            }
            return a(t, e),
            h(t, [{
                key: "__onScrollEnd",
                value: function johnstonOnScrollEnd() {
                    this.emit("check")
                }
            }]),
            t
        }(u.a), _ = (new w).setMaxListeners(100), E = function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }, O = function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }, x = 0, k = (s = i = function(e) {
            function t() {
                var e, n, a, i;
                o(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = a = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                a.__domId = "" + x++,
                a.__exposed = !1,
                a.__checkExposeBindThis = a.__checkExpose.bind(a),
                i = n,
                r(a, i)
            }
            return a(t, e),
            h(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        return e.__checkExpose()
                    }, 3 * b),
                    this.__addExposeListener(),
                    this.__addClickListener(),
                    this.__addTouchListener(),
                    this.__addTouchMoveListener(),
                    this.__addTouchEndListener(),
                    this.__verifyOnceExposeKey()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.__unmounted = !0,
                    this.__removeExposeListener()
                }
            }, {
                key: "__verifyOnceExposeKey",
                value: function() {
                    var e = this.props
                      , t = e.name;
                    if (e.onceExpose && !t)
                        throw new TypeError("Action.name must be set")
                }
            }, {
                key: "__checkOnceExpose",
                value: function() {
                    var e = this.props
                      , t = e.name
                      , n = e.onceExpose;
                    if (n) {
                        var o = d.a + ".action.once.exposed"
                          , r = null;
                        try {
                            r = JSON.parse(y(o))
                        } catch (e) {
                            r = {}
                        }
                        Object(m.c)(r) ? r[t] || (r[t] = !0,
                        console.log("onceExposedCache after::::", r, r[t]),
                        g(o, JSON.stringify(r)),
                        n()) : (r = {},
                        r[t] = !0,
                        g(o, JSON.stringify(r)),
                        n())
                    }
                }
            }, {
                key: "__checkExpose",
                value: function() {
                    if (!this.__exposed && !this.__unmounted) {
                        var e = document.querySelector('[data-action-id="' + this.__domId + '"]');
                        if (!e)
                            return void console.error('Action: element [data-action-id="' + this.__domId + '"] not found');
                        var t = e.getBoundingClientRect()
                          , n = t.top
                          , o = t.bottom
                          , r = t.left
                          , a = t.right;
                        switch (this.props.exposePolicy) {
                        case v.border:
                            Math.max(0, n) <= Math.min(E(), o) && Math.max(0, r) <= Math.min(O(), a) && (this.__exposed = !0,
                            this.__removeExposeListener(),
                            this.__checkOnceExpose(),
                            this.props.onExpose());
                            break;
                        case v.center:
                            f()((n + o) / 2, 0, E()) && f()((r + a) / 2, 0, O()) && (this.__exposed = !0,
                            this.__removeExposeListener(),
                            this.__checkOnceExpose(),
                            this.props.onExpose());
                            break;
                        default:
                            console.error(new Error("Action: bad expose policy"))
                        }
                    }
                }
            }, {
                key: "__addExposeListener",
                value: function() {
                    _.on("check", this.__checkExposeBindThis)
                }
            }, {
                key: "__removeExposeListener",
                value: function() {
                    _.removeListener("check", this.__checkExposeBindThis)
                }
            }, {
                key: "__addClickListener",
                value: function() {
                    var e = this
                      , t = document.querySelector('[data-action-id="' + this.__domId + '"]');
                    t && t.addEventListener("click", function johnstonAddClick() {
                        return e.props.onClick()
                    })
                }
            }, {
                key: "__addTouchListener",
                value: function() {
                    var e = this
                      , t = document.querySelector('[data-action-id="' + this.__domId + '"]');
                    t && t.addEventListener("touchstart", function johnstonAddTouchstart(t) {
                        return e.props.onTouchStart(t)
                    })
                }
            }, {
                key: "__addTouchMoveListener",
                value: function() {
                    var e = this
                      , t = document.querySelector('[data-action-id="' + this.__domId + '"]');
                    t && t.addEventListener("touchmove", function johnstonAddTouchmove(t) {
                        return e.props.onTouchMove(t)
                    })
                }
            }, {
                key: "__addTouchEndListener",
                value: function() {
                    var e = this
                      , t = document.querySelector('[data-action-id="' + this.__domId + '"]');
                    t && (t.removeEventListener("touchmove", function johnstonRemoveTouchmove(t) {
                        return e.props.onTouchMove(t)
                    }),
                    t.removeEventListener("touchend", function johnstonRemoveTouchend(t) {
                        return e.props.onTouchEnd(t)
                    }),
                    t.addEventListener("touchend", function johnstonAddTouchend(t) {
                        return e.props.onTouchEnd(t)
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return Object(c.cloneElement)(c.Children.only(e), {
                        "data-action-id": this.__domId
                    })
                }
            }]),
            t
        }(c.Component),
        i.defaultProps = {
            onExpose: function() {},
            onClick: function() {},
            onTouchStart: function(e) {},
            onTouchMove: function(e) {},
            onTouchEnd: function(e) {},
            exposePolicy: v.border
        },
        s)
    },
    570: function(e, t, n) {
        "use strict";
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function i(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        n.d(t, "a", function() {
            return O
        });
        var s, c, l, u = n(65), p = n.n(u), f = n(1), d = (n.n(f),
        n(57)), m = n(147), h = n(666), v = n.n(h), y = n(148), g = n(643), b = n(73), w = n(23), _ = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), E = {
            type: "tab",
            tab: "news_news"
        }, O = Object(d.a)((l = c = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = o = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                o.__onClickThrottled = v()(o.__onClick, 500, {
                    leading: !0,
                    trailing: !1
                }),
                i = n,
                a(o, i)
            }
            return i(t, e),
            _(t, [{
                key: "__onExposeAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onExposeAction;
                    e.disableExposeBoss || t(n + "_exposure"),
                    o()
                }
            }, {
                key: "__onExposeOpenAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onExposeOpenAction
                      , r = e.disableExposeOpenBoss;
                    t("open_exposure"),
                    r || t(n + "_open_exposure"),
                    o()
                }
            }, {
                key: "__onExposeDownloadAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onExposeDownloadAction
                      , r = e.disableExposeDownloadBoss;
                    t("download_exposure"),
                    r || t(n + "_download_exposure"),
                    o()
                }
            }, {
                key: "__onClickAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onClickAction;
                    e.disableClickBoss || t(n + "_click"),
                    o()
                }
            }, {
                key: "__onClickOpenAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onClickOpenAction
                      , r = e.disableClickOpenBoss;
                    t("open_click"),
                    r || t("open_" + n + "_click"),
                    o()
                }
            }, {
                key: "__onClickDownloadAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onClickDownloadAction
                      , r = e.disableClickDownloadBoss;
                    t("download_click"),
                    r || t("download_" + n + "_click"),
                    o()
                }
            }, {
                key: "__onClickInstallAction",
                value: function() {
                    var e = this.props
                      , t = e.onBoss
                      , n = e.name
                      , o = e.onClickInstallAction
                      , r = e.disableClickInstallBoss;
                    t("install_click"),
                    r || t("install_" + n + "_click"),
                    o()
                }
            }, {
                key: "__onExpose",
                value: function() {
                    var e = this;
                    this.__onExposeAction();
                    var t = this.props.appName;
                    y.e.then(function() {
                        !d.b.get("appManager." + t + ".installed") ? e.__onExposeDownloadAction() : e.__onExposeOpenAction()
                    })
                }
            }, {
                key: "__onClick",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = o(p.a.mark(function e() {
                        var t, n, o, r, a, i, s, c, l, u;
                        return p.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    t = this.props,
                                    n = t.appName,
                                    o = t.onOpenApp,
                                    r = t.onBoss,
                                    a = t.options,
                                    this.__onClickAction(),
                                    i = Object(y.c)({
                                        name: n
                                    }),
                                    s = d.b.get("appManager." + n) || {},
                                    c = s.status,
                                    l = void 0 === c ? m.a.PENDING : c,
                                    u = s.installed,
                                    !u) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.__onClickOpenAction(),
                                    o(E),
                                    e.abrupt("return");
                                case 9:
                                    e.t0 = l,
                                    e.next = e.t0 === m.a.PENDING ? 12 : e.t0 === m.a.COMPLETE ? 24 : e.t0 === m.a.DOWNLOADING ? 29 : e.t0 === m.a.PAUSE ? 31 : e.t0 === m.a.INSTALLED ? 33 : 36;
                                    break;
                                case 12:
                                    if (this.__onClickDownloadAction(),
                                    i) {
                                        e.next = 16;
                                        break
                                    }
                                    return Object(b.m)({
                                        name: n,
                                        options: a
                                    }),
                                    e.abrupt("return");
                                case 16:
                                    return e.next = 18,
                                    Object(w.l)(300);
                                case 18:
                                    return g.a.call(i, m.a.DOWNLOAD, function() {
                                        r("startDownLoad_confirm")
                                    }),
                                    g.a.call(i, "__giveup", function() {
                                        r("startDownLoad_cancel")
                                    }),
                                    g.a.call(i, m.a.CANCEL, function() {
                                        r("stopDownLoad")
                                    }),
                                    g.a.call(i, m.a.COMPLETE, function() {
                                        r("succDownLoad")
                                    }),
                                    i.downloadAndInstall({
                                        options: a
                                    }),
                                    e.abrupt("break", 37);
                                case 24:
                                    return this.__onClickInstallAction(),
                                    e.next = 27,
                                    Object(w.l)(300);
                                case 27:
                                    return i.install(),
                                    e.abrupt("break", 37);
                                case 29:
                                    return i.pause(),
                                    e.abrupt("break", 37);
                                case 31:
                                    return i.resume(),
                                    e.abrupt("break", 37);
                                case 33:
                                    return this.__onClickOpenAction(),
                                    o(E),
                                    e.abrupt("break", 37);
                                case 36:
                                    return e.abrupt("break", 37);
                                case 37:
                                    e.next = 42;
                                    break;
                                case 39:
                                    e.prev = 39,
                                    e.t1 = e.catch(0),
                                    console.error(e.t1);
                                case 42:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 39]])
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.children
                      , r = d.b.get("appManager." + n) || {}
                      , a = r.status
                      , i = void 0 === a ? m.a.PENDING : a
                      , s = r.progress
                      , c = void 0 === s ? 0 : s;
                    return o({
                        status: r.installed ? m.a.INSTALLED : i,
                        progress: c,
                        onClick: function() {
                            return e.__onClickThrottled()
                        },
                        onExpose: function() {
                            return e.__onExpose()
                        }
                    })
                }
            }]),
            t
        }(f.Component),
        c.defaultProps = {
            name: "unknownDownloader",
            appName: "news",
            disableExposeBoss: !0,
            disableClickBoss: !0,
            onExposeAction: w.g,
            onOpenApp: w.g,
            onExposeOpenAction: w.g,
            onExposeDownloadAction: w.g,
            onClickAction: w.g,
            onClickDownloadAction: w.g,
            onClickInstallAction: w.g,
            onClickOpenAction: w.g,
            options: {}
        },
        s = l)) || s
    },
    571: function(e, t, n) {
        var o, r;
        !function() {
            "use strict";
            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var o = arguments[t];
                    if (o) {
                        var r = typeof o;
                        if ("string" === r || "number" === r)
                            e.push(o);
                        else if (Array.isArray(o))
                            e.push(n.apply(null, o));
                        else if ("object" === r)
                            for (var i in o)
                                a.call(o, i) && o[i] && e.push(i)
                    }
                }
                return e.join(" ")
            }
            var a = {}.hasOwnProperty;
            "undefined" !== typeof e && e.exports ? e.exports = n : (o = [],
            void 0 !== (r = function() {
                return n
            }
            .apply(t, o)) && (e.exports = r))
        }()
    },
    572: function(e, t, n) {
        "use strict";
        var o = n(1)
          , r = n.n(o)
          , a = n(668)
          , i = n.n(a)
          , s = function(e) {
            var t = e.children
              , n = void 0 === t ? null : t
              , o = e.className
              , a = void 0 === o ? "" : o
              , s = e.progress
              , c = void 0 === s ? 0 : s
              , l = e.textColor
              , u = e.backgroundColor
              , p = e.progressBarColor;
            return r.a.createElement("div", {
                className: a + " " + i.a.wrapper,
                style: {
                    backgroundColor: u
                }
            }, r.a.createElement("div", {
                className: i.a.content,
                style: {
                    color: l
                }
            }, n), r.a.createElement("div", {
                className: i.a.progress,
                style: {
                    width: c + "%",
                    backgroundColor: p
                }
            }))
        }
          , c = n(669)
          , l = n.n(c)
          , u = n(571)
          , p = n.n(u)
          , f = n(674)
          , d = n.n(f)
          , m = function(e) {
            var t = e.children
              , n = void 0 === t ? null : t
              , o = e.className
              , a = void 0 === o ? "" : o
              , i = e.contentClassName
              , s = void 0 === i ? "" : i
              , c = e.progress
              , u = void 0 === c ? 0 : c
              , f = e.textColor
              , m = e.backgroundColor
              , h = e.progressBarColor
              , v = e.progressBarTextColor;
            return r.a.createElement(l.a, null, function(e) {
                var t = e.measureRef
                  , o = e.contentRect;
                return r.a.createElement("div", {
                    ref: t,
                    className: p()(d.a.wrapper, a)
                }, r.a.createElement("div", {
                    className: p()(d.a.content, s),
                    style: {
                        color: f,
                        backgroundColor: m
                    }
                }, n), r.a.createElement("div", {
                    className: d.a.progress,
                    style: {
                        width: u + "%",
                        backgroundColor: h
                    }
                }, r.a.createElement("div", {
                    className: d.a.progressContent,
                    style: {
                        width: o.entry.width,
                        color: v
                    }
                }, n)))
            })
        };
        n.d(t, !1, function() {
            return s
        }),
        n.d(t, "a", function() {
            return m
        });
        t.b = s
    },
    573: function(e, t, n) {
        "use strict";
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "b", function() {
            return c
        }),
        n.d(t, "d", function() {
            return u
        });
        var r, a = n(147), i = {
            news: {
                textColor: "#377df8",
                backgroundColor: "#DFEDFF",
                progressBarColor: "#bbbbbb"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#bbbbbb"
            }
        }, s = {
            news: {
                textColor: "#377df8",
                backgroundColor: "#e7f0ff",
                progressBarColor: "#D7D7D7"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#D7D7D7"
            }
        }, c = {
            news: {
                textColor: "#4184f9",
                backgroundColor: "#e6f0ff",
                progressBarColor: "#4184f9",
                progressBarTextColor: "#ffffff"
            }
        };
        c.kuaibao = c.news;
        var l = (r = {},
        o(r, a.a.PENDING, "\u4e0b\u8f7d"),
        o(r, a.a.CANCEL, "\u4e0b\u8f7d"),
        o(r, a.a.INSTALLED, "\u6253\u5f00"),
        o(r, a.a.COMPLETE, "\u5b89\u88c5"),
        o(r, a.a.RESUME, "\u6b63\u5728\u4e0b\u8f7d"),
        o(r, a.a.DOWNLOADING, "\u6b63\u5728\u4e0b\u8f7d"),
        o(r, a.a.PAUSE, "\u7ee7\u7eed\u4e0b\u8f7d"),
        r)
          , u = function(e) {
            return l[e] || "\u4e0b\u8f7d"
        }
    },
    575: function(e, t, n) {
        "use strict";
        var o = n(1)
          , r = n.n(o)
          , a = n(571)
          , i = n.n(a)
          , s = n(676)
          , c = n.n(s)
          , l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , u = function(e) {
            var t = e.src
              , n = e.children
              , o = e.restStyles
              , a = void 0 === o ? {} : o
              , s = e.className;
            return r.a.createElement("div", {
                className: i()(s, c.a.placeholder)
            }, r.a.createElement("div", {
                className: c.a.img,
                style: l({
                    backgroundImage: "url(" + t + ")"
                }, a)
            }, n))
        };
        t.a = u
    },
    576: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(1)
          , r = n.n(o)
          , a = n(679)
          , i = n.n(a)
          , s = function(e) {
            var t = e.className
              , n = void 0 === t ? "" : t
              , o = e.children
              , a = e.restStyles
              , s = void 0 === a ? {} : a;
            return r.a.createElement("div", {
                className: i.a.line + " " + n,
                style: s.wrapper
            }, r.a.createElement("div", {
                className: i.a.hr,
                style: s.hr
            }), o, r.a.createElement("div", {
                className: i.a.hr,
                style: s.hr
            }))
        };
        t.b = s
    },
    577: function(e, t) {
        e.exports = {
            wrapper: "_2LgJMsEYsB9r6pqdaCsTPt",
            content: "_1yoJV7ko4Q9FDyfsJGzMMU",
            progress: "_2NpaDqF3sc_hJ1XKAmQbEf",
            downloader: "_3PRNgjbfvCK9Zupp7ZjTxW",
            downloaderText: "_2MqiqQGwEqXgNIY__A394j",
            downloaderVideoText: "_2SgBAJxYhSialSnTH-VY6W",
            news: "_19DKkCkUJfOEjLOtFRiAMC",
            kuaibao: "_2ramSqHOnUSbwFdlWKnCGO",
            chili1: "_11xuYaGeuzL08FeZ8TWTM",
            chili2: "_1CFA974un4b-q4XAPAzLPI",
            downloaderComment: "_16fUG4H0ZbiY3-cmG3DXES",
            downloaderBottom: "_3neEptByJVZkTnFTDWXcBz",
            downloaderTopTip: "_1l284zpdA9eZhewl6qJJW6",
            arrow: "_3Kl7fzk8q5ybOTEr9zsU_e",
            downloaderWeibo: "_1YDJQe5AlOmfyjvkogv4Uw",
            downloaderWenda: "mCw8-Y00-hQ2Q8XYKDGXM",
            downloaderAnswer: "a2yuHLWcQ9Eh8_SfZ4OID",
            downloaderTextParser: "_1CqOa6UUPET3R-ylneYP9W",
            downloaderSlider: "_1vGSWg8nPNWXXEumZHEmaS",
            downloaderMediaTop: "_2OhbspS-DoVeGw2yqx55h6",
            plusIcon: "HJKl8Xxfi3NZnPIpOX_3n",
            downloaderVideo: "_2C1WxuQUXVSx0xoS0W_jWx",
            videoKeyWords: "_32imWOO1okkLSQhk5gLXP0",
            videoText: "_3COPeWtBKjye5vELgE62tl",
            rightArrow: "_2WkQ9UuAw45SrazlFSJZ-s",
            downloaderVideoFix: "_2V-HOx6wrPb_D4bEW3yifI",
            videoFixText: "_1wJpEzNjMO03kcsQv09kK3",
            shareIcon: "_2X961Mm5rKouXSgA6mYYZf",
            downloaderRecommend: "_3hvQ2-mmI28stIcxrsMkyd"
        }
    },
    578: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function s(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function c(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function l(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function p(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function f(e) {
            return Array.isArray(e) ? e : Array.from(e)
        }
        function d(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function m(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function h(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function v(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function y(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function g(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function b(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function w(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function _(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function E(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function O(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function x(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function k(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function N(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function C(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function j(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function P(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function T(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function A(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function I(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function S(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function B(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function D(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function L(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function M(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function R(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function W(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function F(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function q(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function U(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function V(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function G(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function H(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function K(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function z(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function Q(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function Y(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function J(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function X(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function Z(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function $(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ee(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function te(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function ne(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function oe(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function re(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function ae(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ie(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function se(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function ce(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function le(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ue(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function pe(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function fe(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function de(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function me(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function he(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function ve(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function ye(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ge(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function be(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var we, _e, Ee, Oe, xe, ke, Ne, Ce, je, Pe, Te, Ae, Ie, Se, Be, De, Le, Me, Re, We, Fe, qe, Ue, Ve, Ge, He, Ke, ze, Qe, Ye, Je, Xe, Ze, $e, et, tt, nt = n(65), ot = n.n(nt), rt = n(1), at = n.n(rt), it = n(212), st = n.n(it), ct = n(587), lt = n(590), ut = n.n(lt), pt = n(35), ft = n.n(pt), dt = n(211), mt = n(23), ht = n(569), vt = n(102), yt = n(601), gt = n(215), bt = n(570), wt = n(667), _t = n.n(wt), Et = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Ot = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), xt = Object(ct.autoPlay)(Object(ct.virtualize)(st.a)), kt = function(e) {
            var t = e.indexState;
            return at.a.createElement("div", {
                className: _t.a["newsItemProgress" + t % 3]
            })
        }, Nt = (_e = we = function(e) {
            function t() {
                var e, n, o, r;
                a(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                o.state = {
                    indexState: 0,
                    relateVideo: []
                },
                o.__itemExposed = {},
                o.handleChangeIndex = function(e) {
                    o.__onItemExpose(e),
                    o.setState(function(t) {
                        return Et({}, t, {
                            indexState: e
                        })
                    })
                }
                ,
                r = n,
                i(o, r)
            }
            return s(t, e),
            Ot(t, [{
                key: "componentDidMount",
                value: function() {
                    this.fetchData(this.props.atype, this.props.vid, this.props.newsId)
                }
            }, {
                key: "__onItemExpose",
                value: function(e) {
                    var t = this;
                    (this.state.relateVideo[e] || []).forEach(function(n, o) {
                        var r = 2 * e + o;
                        t.__itemExposed[r] || (t.__itemExposed[r] = !0,
                        t.props.onBoss("stopfloat_video_exposure", {
                            moduleIndex: r + 1
                        }))
                    })
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e(e, n, o, r) {
                        return t.apply(this, arguments)
                    }
                    var t = r(ot.a.mark(function e(t, n, o, r) {
                        var a, i, s, c;
                        return ot.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = {
                                        atype: t,
                                        vid: n,
                                        id: o,
                                        path: "a"
                                    },
                                    i = "/getNewRelateVideo?" + ft.a.stringify(a),
                                    e.next = 4,
                                    Object(dt.a)(i);
                                case 4:
                                    s = e.sent,
                                    s.relateVideo && s.relateVideo.length % 2 === 1 && s.relateVideo.push({
                                        duration: void 0,
                                        id: void 0,
                                        title: void 0,
                                        playcount: void 0
                                    }),
                                    c = ut()(s.relateVideo, 2).slice(0, 3),
                                    this.setState(function(e) {
                                        return Et({}, e, {
                                            relateVideo: c
                                        })
                                    }),
                                    this.__onItemExpose(0);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , r = t.onOpenApp
                      , a = t.onBoss
                      , i = t.replayVideo
                      , s = o(t, ["appName", "onOpenApp", "onBoss", "replayVideo"])
                      , c = this.state
                      , l = c.indexState
                      , u = c.relateVideo
                      , p = u.length;
                    return p ? at.a.createElement(bt.a, Et({
                        name: "stopfloat_video",
                        appName: n,
                        onOpenApp: function() {
                            return r({
                                id: e.__newsIdClick
                            })
                        },
                        disableExposeBoss: !0,
                        onBoss: a,
                        disableClickBoss: !1
                    }, s), function(t) {
                        var n = (t.status,
                        t.progress,
                        t.onClick)
                          , o = t.onExpose
                          , r = function(t) {
                            var r = t.index
                              , a = (t.key,
                            (r + p) % p);
                            return u.length ? at.a.createElement("div", {
                                key: r,
                                className: _t.a.newsItemCon
                            }, u[a].map(function(t, r) {
                                return at.a.createElement(ht.b, {
                                    onExpose: o
                                }, at.a.createElement("div", {
                                    className: _t.a.newsItemConChild
                                }, at.a.createElement("div", {
                                    className: _t.a.newsItemConImg,
                                    key: t.id,
                                    onClick: function() {
                                        e.__newsIdClick = t.id,
                                        n()
                                    },
                                    style: {
                                        backgroundImage: "url(" + t.img_small + ")"
                                    }
                                }, at.a.createElement("div", {
                                    className: _t.a.newsItemDuration
                                }, at.a.createElement("span", {
                                    className: _t.a.newsItemRplay
                                }), t.duration), at.a.createElement(kt, {
                                    indexState: l
                                })), at.a.createElement("div", {
                                    className: _t.a.newsItemTitle
                                }, t.title), at.a.createElement("div", {
                                    className: _t.a.newsItemPlayCount
                                }, Object(vt.c)(t.playcount))))
                            }), at.a.createElement("div", {
                                className: _t.a.newsHr
                            })) : at.a.createElement("div", {
                                key: r
                            })
                        };
                        return at.a.createElement(ht.b, {
                            onExpose: o
                        }, at.a.createElement("div", null, at.a.createElement(xt, {
                            slideRenderer: r,
                            index: l,
                            onChangeIndex: e.handleChangeIndex,
                            interval: gt.a ? 5e7 : 5e3,
                            slideCount: 5e4,
                            overscanSlideAfter: 1,
                            overscanSlideBefore: 1,
                            disableLazyLoading: !1,
                            style: {
                                overflow: "hidden"
                            },
                            slideStyle: {
                                height: "auto",
                                overflow: "hidden"
                            }
                        }), at.a.createElement("div", {
                            className: _t.a["mnu-recommend-Actions"]
                        }, at.a.createElement(yt.a, {
                            className: _t.a.pagination,
                            dots: u.length,
                            index: l % p,
                            onChangeIndex: e.handleChangeIndex,
                            newDot: _t.a.newDot,
                            activeClassName: _t.a.activeClassName
                        }), at.a.createElement("div", {
                            className: _t.a.replay,
                            onClick: i
                        }, at.a.createElement("img", {
                            src: "http://mat1.gtimg.com/www/images/wise/icon_video_refresh.png",
                            alt: "\u5237\u65b0"
                        }), "\u91cd\u64ad"))))
                    }) : null
                }
            }]),
            t
        }(rt.PureComponent),
        we.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            onReplay: mt.g
        },
        _e), Ct = n(572), jt = n(573), Pt = n(675), Tt = n.n(Pt), At = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , It = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), St = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (-1 === e.toUpperCase().indexOf("{N}"))
                return {
                    prefix: e,
                    suffix: "",
                    disableCount: !0
                };
            var t = e.split(/\{n\}/i)
              , n = f(t);
            return {
                prefix: n[0],
                suffix: n.slice(1).join("")
            }
        }, Bt = function(e) {
            switch (e.number) {
            case 1:
                return at.a.createElement("img", {
                    key: "chili",
                    className: Tt.a.chili1,
                    src: "//mat1.gtimg.com/www/images/newsapp/mqq/comment_chili_v2.png",
                    alt: ""
                });
            case 2:
                return at.a.createElement("img", {
                    key: "chili2",
                    className: Tt.a.chili2,
                    src: "//mat1.gtimg.com/www/images/newsapp/mqq/comment_2chili_v2.png",
                    alt: ""
                });
            default:
                return null
            }
        }, Dt = function(e) {
            var t = e.count
              , n = void 0 === t ? 0 : t
              , o = Object(mt.j)(n);
            return n ? n < 50 ? "\u770b\u66f4\u591a\u7f51\u53cb\u8bc4\u8bba" : n < 1e3 ? ["\u770b", o, "\u6761\u8bc4\u8bba"] : n < 1e4 ? ["\u770b", o, at.a.createElement(Bt, {
                number: 1
            }), "\u70ed\u8bc4"] : ["\u770b", o, at.a.createElement(Bt, {
                number: 2
            }), "\u70ed\u8bc4"] : "\u53c2\u4e0e\u8bc4\u8bba\u62a2\u6c99\u53d1"
        }, Lt = function(e) {
            var t = e.count
              , n = void 0 === t ? 0 : t
              , o = e.empty
              , r = void 0 === o ? "\u53c2\u4e0e\u8bc4\u8bba\u62a2\u6c99\u53d1" : o
              , a = e.prefix
              , i = void 0 === a ? "\u770b" : a
              , s = e.suffix
              , c = void 0 === s ? "\u6761\u70ed\u8bc4" : s
              , l = e.disableCount
              , u = void 0 !== l && l
              , p = Object(mt.j)(n);
            return n ? u ? i + c : n < 1e3 ? [i, p, c] : n < 1e4 ? [i, p, at.a.createElement(Bt, {
                number: 1
            }), c] : [i, p, at.a.createElement(Bt, {
                number: 2
            }), c] : r
        }, Mt = (Oe = Ee = function(e) {
            function t() {
                return l(this, t),
                u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return p(t, e),
            It(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.onOpenApp
                      , a = e.onBoss
                      , i = e.commentCount
                      , s = e.text
                      , l = c(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss", "commentCount", "text"]);
                    return at.a.createElement(bt.a, At({
                        name: "comment",
                        appName: n,
                        onOpenApp: r,
                        onBoss: a
                    }, l), function(e) {
                        var r = e.status
                          , a = e.progress
                          , c = e.onClick
                          , l = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: l,
                            onClick: c
                        }, at.a.createElement("div", {
                            className: t
                        }, at.a.createElement(Ct.b, At({}, jt.a[n], {
                            className: Tt.a.progressBar,
                            progress: a
                        }), "news" === n && s[r] ? at.a.createElement(Lt, At({
                            count: i
                        }, St(s[r]), {
                            empty: "" + Object(jt.d)(r) + o + "\uff0c\u6211\u6765\u8bf4\u4e24\u53e5"
                        })) : at.a.createElement(rt.Fragment, null, Object(jt.d)(r), o, "\uff0c", at.a.createElement(Dt, {
                            count: i
                        })))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ee.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            text: {},
            commentCount: 0
        },
        Oe), Rt = n(575), Wt = n(677), Ft = n.n(Wt), qt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Ut = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Vt = (ke = xe = function(e) {
            function t() {
                return m(this, t),
                h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return v(t, e),
            Ut(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.onOpenApp
                      , a = e.onBoss
                      , i = e.src
                      , s = e.desc
                      , c = e.total
                      , l = d(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss", "src", "desc", "total"]);
                    return at.a.createElement(bt.a, qt({
                        name: "atlas",
                        appName: n,
                        onOpenApp: r,
                        onBoss: a
                    }, l), function(e) {
                        var r = e.status
                          , a = e.progress
                          , l = e.onClick
                          , u = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: u,
                            onClick: l
                        }, at.a.createElement("div", {
                            className: t + " " + Ft.a.group
                        }, at.a.createElement("div", {
                            className: Ft.a.groupImg
                        }, at.a.createElement(Rt.a, {
                            src: i
                        }, at.a.createElement("div", {
                            className: Ft.a.imgTag
                        }, at.a.createElement("p", null, c), at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/multi-pic-logo.png",
                            alt: ""
                        })))), at.a.createElement("div", {
                            className: Ft.a.groupInfo
                        }, at.a.createElement("div", {
                            className: Ft.a.groupDesc
                        }, s), at.a.createElement(Ct.b, qt({}, jt.a[n], {
                            className: Ft.a.progressBar,
                            progress: a
                        }), Object(jt.d)(r), o))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        xe.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            total: 0,
            desc: ""
        },
        ke), Gt = (Ce = Ne = function(e) {
            function t() {
                return m(this, t),
                h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return v(t, e),
            Ut(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.onOpenApp
                      , a = e.onBoss
                      , i = e.src
                      , s = e.desc
                      , c = e.disableText
                      , l = d(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss", "src", "desc", "disableText"]);
                    return at.a.createElement(bt.a, qt({
                        name: "mobvideo",
                        appName: n,
                        onOpenApp: r,
                        onBoss: a
                    }, l), function(e) {
                        var r = e.status
                          , a = e.progress
                          , l = e.onClick
                          , u = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: u,
                            onClick: l
                        }, at.a.createElement("div", {
                            className: t + " " + Ft.a.group
                        }, at.a.createElement("div", {
                            className: Ft.a.groupImg
                        }, at.a.createElement(Rt.a, {
                            src: i
                        }, at.a.createElement("img", {
                            className: Ft.a.videoPlay,
                            src: "//mat1.gtimg.com/www/js/news/video-" + n + ".png",
                            alt: "\u64ad\u653e"
                        }))), !c && at.a.createElement("div", {
                            className: Ft.a.groupInfo
                        }, at.a.createElement("div", {
                            className: Ft.a.groupDesc
                        }, s), at.a.createElement(Ct.b, qt({}, jt.a[n], {
                            className: Ft.a.progressBar,
                            progress: a
                        }), Object(jt.d)(r), o))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ne.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            total: 0,
            desc: ""
        },
        Ce), Ht = n(147), Kt = n(678), zt = n.n(Kt), Qt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Yt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Jt = function(e) {
            return e !== Ht.a.RESUME && e !== Ht.a.DOWNLOADING && e !== Ht.a.PAUSE
        }, Xt = {
            news: {
                textColor: "#377df8",
                backgroundColor: "#fafafa",
                progressBarColor: "#E0EDF6"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#fafafa",
                progressBarColor: "#bbbbbb"
            }
        }, Zt = (Pe = je = function(e) {
            function t() {
                return g(this, t),
                b(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return w(t, e),
            Yt(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.text
                      , a = e.onOpenApp
                      , i = e.onBoss
                      , s = y(e, ["className", "appName", "appDisplayName", "text", "onOpenApp", "onBoss"]);
                    return at.a.createElement(bt.a, Qt({
                        name: "bottom",
                        appName: n,
                        onOpenApp: a,
                        onBoss: i
                    }, s), function(e) {
                        var a = e.status
                          , i = e.progress
                          , s = e.onClick
                          , c = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: c,
                            onClick: s
                        }, at.a.createElement("div", {
                            className: t + " " + zt.a[n]
                        }, at.a.createElement(Ct.b, Qt({}, Xt[n], {
                            className: zt.a.progressBar,
                            progress: i
                        }), at.a.createElement("span", {
                            className: zt.a.downloaderText
                        }, "news" === n && r[a] ? r[a] : at.a.createElement(rt.Fragment, null, Object(jt.d)(a), o, Jt(a) ? "\u67e5\u770b\u66f4\u591a" : "")))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        je.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            text: {}
        },
        Pe), $t = n(576), en = n(680), tn = n.n(en), nn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , on = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), rn = (Ae = Te = function(e) {
            function t(e) {
                O(this, t);
                var n = x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    hotWords: []
                },
                n
            }
            return k(t, e),
            on(t, [{
                key: "componentDidMount",
                value: function() {
                    this.fetchData(6)
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = E(ot.a.mark(function e(t) {
                        var n, o;
                        return ot.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = "/searchPage?req_num=" + t,
                                    e.next = 3,
                                    Object(dt.a)(n);
                                case 3:
                                    o = e.sent,
                                    this.setState({
                                        hotWords: o.showInfo
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.onOpenApp
                      , r = e.appDisplayName
                      , a = e.onBoss
                      , i = _(e, ["className", "appName", "onOpenApp", "appDisplayName", "onBoss"])
                      , s = this.state.hotWords;
                    return !s || s.length < 2 ? null : at.a.createElement("div", {
                        className: t
                    }, at.a.createElement("div", {
                        className: tn.a.box
                    }, at.a.createElement(bt.a, nn({
                        name: "hotkey",
                        appName: n,
                        onOpenApp: o,
                        onBoss: a
                    }, i), function(e) {
                        var t = e.status
                          , n = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: n
                        }, at.a.createElement("div", null, at.a.createElement($t.b, {
                            className: tn.a.title
                        }, at.a.createElement("span", {
                            className: tn.a.statusText
                        }, Object(jt.d)(t), r), at.a.createElement("span", {
                            className: tn.a.titleText
                        }, "\u805a\u7126\u4eca\u65e5\u70ed\u70b9"))))
                    }), at.a.createElement("div", {
                        className: tn.a.content
                    }, s.map(function(e, t) {
                        return at.a.createElement("div", {
                            className: tn.a.contentCover,
                            key: t
                        }, at.a.createElement(bt.a, nn({
                            name: "hotkey",
                            appName: n,
                            onOpenApp: function() {
                                o(Ht.d.getOsInfo().os === Ht.b.ANDROID ? {
                                    type: "",
                                    chlid: "news_search",
                                    search_keyword: e.desc
                                } : {
                                    type: "act",
                                    act: "daily_hot"
                                })
                            },
                            onBoss: function(e, t) {
                                -1 !== e.indexOf("click") ? a(e, nn({}, t, {
                                    click_what: "hotkey"
                                })) : a(e, t)
                            }
                        }, i), function(t) {
                            var n = t.onClick;
                            return at.a.createElement(ht.b, {
                                onClick: n
                            }, at.a.createElement("div", {
                                className: tn.a.coverBox
                            }, at.a.createElement("div", {
                                className: tn.a.contentItem
                            }, at.a.createElement("img", {
                                src: "//mat1.gtimg.com/www/js/news/fire2.png",
                                alt: ""
                            }), at.a.createElement("div", {
                                className: tn.a.contentWords
                            }, e.desc))))
                        }))
                    }))), at.a.createElement(bt.a, nn({
                        name: "hotkey",
                        appName: n,
                        onOpenApp: function() {
                            return o({
                                type: "act",
                                act: "daily_hot"
                            })
                        },
                        onBoss: function(e, t) {
                            -1 !== e.indexOf("click") ? a(e, nn({}, t, {
                                click_what: "more"
                            })) : a(e, t)
                        }
                    }, i), function(e) {
                        var t = e.onClick
                          , o = e.progress;
                        return at.a.createElement(ht.b, {
                            onClick: t
                        }, at.a.createElement("div", null, at.a.createElement(Ct.b, nn({}, jt.c[n], {
                            className: tn.a.progressBar,
                            progress: o
                        }), at.a.createElement("span", {
                            className: tn.a.color
                        }, "\u67e5\u770b\u66f4\u591a"), at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/blue-arrow.png",
                            alt: ">"
                        }))))
                    }))
                }
            }]),
            t
        }(rt.PureComponent),
        Te.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        Ae), an = n(571), sn = n.n(an), cn = n(681), ln = n.n(cn), un = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , pn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), fn = (Se = Ie = function(e) {
            function t(e) {
                j(this, t);
                var n = P(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    topicInfo: null
                },
                n
            }
            return T(t, e),
            pn(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.topicId;
                    this.fetchData(e)
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = C(ot.a.mark(function e(t) {
                        var n, o, r;
                        return ot.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        topicid: t
                                    },
                                    o = "/getTopicInfo?" + ft.a.stringify(n),
                                    e.next = 4,
                                    Object(dt.a)(o);
                                case 4:
                                    r = e.sent,
                                    this.setState({
                                        topicInfo: r
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.onOpenApp
                      , r = e.onBoss
                      , a = N(e, ["className", "appName", "onOpenApp", "onBoss"])
                      , i = this.state.topicInfo;
                    if (!i)
                        return null;
                    var s = i.info
                      , c = void 0 === s ? {} : s
                      , l = i.userList
                      , u = void 0 === l ? [] : l
                      , p = i.joinCount
                      , f = void 0 === p ? 0 : p
                      , d = i.subCount
                      , m = void 0 === d ? 0 : d
                      , h = c.title
                      , v = void 0 === h ? "" : h;
                    return at.a.createElement(bt.a, un({
                        name: "topic",
                        appName: n,
                        onOpenApp: o,
                        onBoss: r
                    }, a), function(e) {
                        var o = (e.status,
                        e.progress)
                          , r = e.onClick
                          , a = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: a,
                            onClick: r
                        }, at.a.createElement("div", {
                            className: sn()(t, ln.a.wrap)
                        }, at.a.createElement("div", {
                            className: ln.a.title
                        }, at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/topic-icon.png",
                            alt: ""
                        }), at.a.createElement("span", null, v || "")), at.a.createElement("div", {
                            className: ln.a.info
                        }, u.map(function(e) {
                            var t = e.head;
                            return at.a.createElement("img", {
                                key: t,
                                className: ln.a.avatar,
                                src: t,
                                alt: ""
                            })
                        }), at.a.createElement("div", {
                            className: ln.a.infoText
                        }, at.a.createElement("span", null, "\u7b49", f, "\u4eba\u53c2\u4e0e"), at.a.createElement("span", null, m, "\u5173\u6ce8")), at.a.createElement(Ct.b, un({}, jt.c[n], {
                            className: ln.a.progressBar,
                            progress: o
                        }), at.a.createElement("div", {
                            className: ln.a.progressBarCover
                        }, at.a.createElement("img", {
                            className: ln.a.progressBarIcon,
                            src: "//mat1.gtimg.com/www/js/news/add-icon-" + n + ".png",
                            alt: "+"
                        }), "\u53c2\u4e0e")))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ie.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        Se), dn = n(682), mn = n.n(dn), hn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , vn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), yn = {
            news: {
                textColor: "#ffffff",
                backgroundColor: "#2883e9",
                progressBarColor: "#E0EDF6"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#D7D7D7"
            }
        }, gn = {
            news: {
                textColor: "#4a4a4a",
                backgroundColor: "#ffdb02",
                progressBarColor: "#E0EDF6"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#D7D7D7"
            }
        }, bn = (De = Be = function(e) {
            function t() {
                return I(this, t),
                S(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return B(t, e),
            vn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , o = e.onBoss
                      , r = e.followButtonCls
                      , a = e.followButtonTextCls
                      , i = e.isNewTopic
                      , s = A(e, ["appName", "onOpenApp", "onBoss", "followButtonCls", "followButtonTextCls", "isNewTopic"])
                      , c = i ? gn : yn;
                    return at.a.createElement(bt.a, hn({
                        name: "topic",
                        appName: t,
                        onOpenApp: n,
                        onBoss: o
                    }, s), function(e) {
                        var n = (e.status,
                        e.progress)
                          , o = e.onClick
                          , s = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: s,
                            onClick: o
                        }, at.a.createElement("div", {
                            className: i ? mn.a.newWrap : mn.a.wrap
                        }, at.a.createElement(Ct.b, hn({}, c[t], {
                            className: mn.a.progressBar,
                            progress: n
                        }), at.a.createElement("div", {
                            className: r || mn.a.followButton
                        }, at.a.createElement("div", {
                            className: a || mn.a.followButtonText
                        }, at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/images/wise/icon_plus.png",
                            alt: "icon_plus",
                            title: "icon_plus",
                            className: mn.a.followButtonTextImg
                        }), "\u5173\u6ce8")))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Be.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        De), wn = n(605), _n = n.n(wn), En = n(30), On = n(149), xn = n(683), kn = n.n(xn), Nn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Cn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), jn = (Me = Le = function(e) {
            function t(e) {
                M(this, t);
                var n = R(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    QAInfo: null
                },
                n
            }
            return W(t, e),
            Cn(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.cid
                      , n = e.id;
                    this.fetchData(t, n)
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = L(ot.a.mark(function e(t, n) {
                        var o, r, a;
                        return ot.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = {
                                        cid: t,
                                        id: n
                                    },
                                    r = "/getQAInfo?" + ft.a.stringify(o),
                                    e.next = 4,
                                    Object(dt.a)(r);
                                case 4:
                                    a = e.sent,
                                    this.setState({
                                        QAInfo: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , o = e.onBoss
                      , r = e.id
                      , a = e.cms_orig_info
                      , i = e.atype
                      , s = D(e, ["appName", "onOpenApp", "onBoss", "id", "cms_orig_info", "atype"])
                      , c = this.state.QAInfo;
                    if (!c)
                        return null;
                    var l = c.userList
                      , u = void 0 === l ? [] : l
                      , p = c.joinCount
                      , f = void 0 === p ? 0 : p
                      , d = c.subCount
                      , m = void 0 === d ? 0 : d;
                    return at.a.createElement(bt.a, Nn({
                        name: "wenda",
                        appName: t,
                        onOpenApp: n,
                        onBoss: o
                    }, s), function(e) {
                        var n = (e.status,
                        e.progress)
                          , s = e.onClick
                          , c = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: function() {
                                o("wenda_link_exposure"),
                                c()
                            },
                            onClick: function() {
                                o("wenda_link_click")
                            }
                        }, at.a.createElement(En.a, {
                            className: kn.a.wrap,
                            href: Object(On.a)(Object(mt.c)({
                                appName: "news",
                                path: "a",
                                id: r
                            })),
                            atype: i
                        }, at.a.createElement("div", {
                            className: kn.a.headTitle
                        }, at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/wenda.png",
                            alt: "\u95ee\u7b54"
                        })), at.a.createElement("div", {
                            className: kn.a.title
                        }, a.title || ""), at.a.createElement("div", {
                            className: kn.a.info
                        }, u.map(function(e) {
                            var t = e.head;
                            return at.a.createElement("img", {
                                key: t,
                                className: kn.a.avatar,
                                src: t,
                                alt: ""
                            })
                        }), at.a.createElement("div", {
                            className: kn.a.infoText
                        }, at.a.createElement("span", {
                            className: kn.a.join
                        }, f > 0 && u.length ? at.a.createElement(rt.Fragment, null, at.a.createElement("span", {
                            className: kn.a.user
                        }, u[0] && _n()(u[0].name)), "\u7b49", Object(mt.k)(f, 1), "\u4eba\u53c2\u4e0e") : "\u548c\u4ebf\u4e07\u7f51\u53cb\u4e00\u8d77\u53c2\u4e0e"), at.a.createElement("span", {
                            className: kn.a.follower
                        }, m > 0 && Object(mt.k)(m, 1) + "\u5173\u6ce8")), at.a.createElement("div", {
                            onClick: function(e) {
                                e.preventDefault(),
                                s()
                            }
                        }, at.a.createElement(Ct.b, Nn({}, jt.c[t], {
                            className: kn.a.progressBar,
                            progress: n
                        }), at.a.createElement("div", {
                            className: kn.a.progressBarCover
                        }, at.a.createElement("img", {
                            className: kn.a.progressBarIcon,
                            src: "//mat1.gtimg.com/www/js/news/add-icon-" + t + ".png",
                            alt: "+"
                        }), at.a.createElement("span", null, "\u53c2\u4e0e")))))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Le.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        Me), Pn = n(39), Tn = n(684), An = n.n(Tn), In = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Sn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Bn = (We = Re = function(e) {
            function t() {
                return q(this, t),
                U(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return V(t, e),
            Sn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.atype
                      , a = e.onOpenApp
                      , i = e.onBoss
                      , s = e.title
                      , c = e.jumpword
                      , l = e.relCount
                      , u = F(e, ["className", "appName", "appDisplayName", "atype", "onOpenApp", "onBoss", "title", "jumpword", "relCount"])
                      , p = Object(Pn.c)(r);
                    return at.a.createElement(bt.a, In({
                        name: "videoInfo",
                        appName: n,
                        onOpenApp: a,
                        onBoss: i
                    }, u), function(e) {
                        var r = e.status
                          , a = e.progress
                          , i = e.onClick
                          , u = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: u,
                            onClick: i
                        }, at.a.createElement("div", {
                            className: sn()(t, An.a[n], An.a.wrap)
                        }, at.a.createElement(Ct.b, {
                            textColor: "#222222",
                            backgroundColor: "white",
                            progressBarColor: "#D7D7D7",
                            className: An.a.progressBar,
                            progress: a
                        }, at.a.createElement("div", {
                            className: An.a.content
                        }, at.a.createElement("img", {
                            className: An.a["logo-" + n],
                            src: "//mat1.gtimg.com/www/js/news/logo2-" + n + ".png",
                            alt: ""
                        }), at.a.createElement("span", {
                            className: sn()(An.a.text, An.a.clamp)
                        }, r !== Ht.a.INSTALLED && "" + Object(jt.d)(r) + o + "\uff0c" + (c ? "" : "\u770b"), c || s, "\xa0"), r === Ht.a.INSTALLED && p === Pn.a.videoAlbum && [at.a.createElement("span", {
                            className: An.a.text
                        }, "\xb7\xa0"), at.a.createElement("span", {
                            className: sn()(An.a.text, An.a.themedText)
                        }, l, "\u4e2a\u89c6\u9891")], r === Ht.a.INSTALLED && p === Pn.a.video && [at.a.createElement("span", {
                            className: An.a.text
                        }, "\xb7\xa0"), at.a.createElement("span", {
                            className: sn()(An.a.text, An.a.themedText)
                        }, l, "\u4e2a\u89c6\u9891")], at.a.createElement("img", {
                            className: An.a.blueArrow,
                            src: "//mat1.gtimg.com/www/js/news/blue-arrow.png",
                            alt: ""
                        })))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Re.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            title: "",
            relCount: 0
        },
        We), Dn = n(685), Ln = n.n(Dn), Mn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Rn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Wn = {
            news: {
                textColor: "#efefef",
                backgroundColor: "rgba(85,147,255,0.90)",
                progressBarColor: "#D7D7D7"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#D7D7D7"
            }
        }, Fn = (qe = Fe = function(e) {
            function t() {
                return H(this, t),
                K(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return z(t, e),
            Rn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.onOpenApp
                      , r = e.onBoss
                      , a = e.title
                      , i = G(e, ["className", "appName", "onOpenApp", "onBoss", "title"]);
                    return at.a.createElement(bt.a, Mn({
                        name: "videoLogo",
                        appName: n,
                        onOpenApp: o,
                        onBoss: r
                    }, i), function(e) {
                        var o = (e.status,
                        e.progress)
                          , r = e.onClick
                          , i = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: i,
                            onClick: r
                        }, at.a.createElement("div", {
                            className: t
                        }, at.a.createElement(Ct.b, Mn({}, Wn[n], {
                            className: Ln.a.progressBar,
                            progress: o
                        }), at.a.createElement("div", {
                            className: Ln.a.content
                        }, at.a.createElement("img", {
                            className: Ln.a["logo-" + n],
                            src: "//mat1.gtimg.com/www/js/news/logo-" + n + "-white.png",
                            alt: ""
                        }), at.a.createElement("span", null, a)))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Fe.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            title: ""
        },
        qe), qn = n(686), Un = n.n(qn), Vn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Gn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Hn = Object(ct.autoPlay)(Object(ct.virtualize)(st.a)), Kn = (Ve = Ue = function(e) {
            function t() {
                var e, n, o, r;
                J(this, t);
                for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
                    i[s] = arguments[s];
                return n = o = X(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    indexState: 0,
                    relateVideo: []
                },
                o.__itemExposed = {},
                o.handleChangeIndex = function(e) {
                    o.__onItemExpose(e),
                    o.setState(function(t) {
                        return Vn({}, t, {
                            indexState: e
                        })
                    })
                }
                ,
                r = n,
                X(o, r)
            }
            return Z(t, e),
            Gn(t, [{
                key: "componentDidMount",
                value: function() {
                    this.fetchData(this.props.atype, this.props.vid, this.props.newsId)
                }
            }, {
                key: "__onItemExpose",
                value: function(e) {
                    var t = this;
                    (this.state.relateVideo[e] || []).forEach(function(n, o) {
                        var r = 2 * e + o;
                        t.__itemExposed[r] || (t.__itemExposed[r] = !0,
                        t.props.onBoss("videoRecommendItem_exposure", {
                            moduleIndex: r + 1
                        }))
                    })
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e(e, n, o) {
                        return t.apply(this, arguments)
                    }
                    var t = Y(ot.a.mark(function e(t, n, o) {
                        var r, a, i, s;
                        return ot.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        atype: t,
                                        vid: n,
                                        id: o
                                    },
                                    a = "/getNewRelateVideo?" + ft.a.stringify(r),
                                    e.next = 4,
                                    Object(dt.a)(a);
                                case 4:
                                    i = e.sent,
                                    i.relateVideo && i.relateVideo.length % 2 === 1 && i.relateVideo.push({
                                        duration: void 0,
                                        id: void 0,
                                        title: void 0,
                                        playcount: void 0
                                    }),
                                    s = ut()(i.relateVideo, 2).slice(0, 3),
                                    this.setState(function(e) {
                                        return Vn({}, e, {
                                            relateVideo: s
                                        })
                                    }),
                                    this.__onItemExpose(0);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.onOpenApp
                      , r = t.onBoss
                      , a = t.onReplay
                      , i = Q(t, ["appName", "onOpenApp", "onBoss", "onReplay"])
                      , s = this.state
                      , c = s.indexState
                      , l = s.relateVideo
                      , u = l.length;
                    return u ? at.a.createElement(bt.a, Vn({
                        name: "videoRecommend",
                        appName: n,
                        onOpenApp: function() {
                            return o({
                                id: e.__newsIdClick
                            })
                        },
                        onBoss: r
                    }, i), function(t) {
                        var n = (t.status,
                        t.progress,
                        t.onClick)
                          , o = t.onExpose
                          , r = function(t) {
                            var o = t.index
                              , r = (t.key,
                            (o + u) % u);
                            return l.length ? at.a.createElement("div", {
                                key: o,
                                className: Un.a.newsItemCon
                            }, l[r].map(function(t, o) {
                                return at.a.createElement("div", {
                                    className: Un.a.newsItemConChild,
                                    key: t.id,
                                    onClick: function() {
                                        e.__newsIdClick = t.id,
                                        n()
                                    }
                                }, at.a.createElement("div", {
                                    className: Un.a.newsItem,
                                    style: {
                                        backgroundImage: "url(" + t.img_small + ")"
                                    }
                                }, t.duration && at.a.createElement("div", {
                                    className: Un.a.newsItemTime
                                }, at.a.createElement("img", {
                                    src: "//mat1.gtimg.com/www/js/news/video-blue.png",
                                    alt: ">"
                                }), at.a.createElement("span", null, "00" === t.duration.slice(0, 2) && t.duration.length > 5 ? t.duration.slice(3) : t.duration))), at.a.createElement("div", {
                                    className: Un.a.newsItemTitle
                                }, t.title), t.playcount && at.a.createElement("div", {
                                    className: Un.a.playCount
                                }, Object(mt.j)(t.playcount), "\u6b21\u64ad\u653e"))
                            })) : at.a.createElement("div", {
                                key: o
                            })
                        };
                        return at.a.createElement(ht.b, {
                            onExpose: o
                        }, at.a.createElement("div", {
                            className: Un.a.videoRecommend
                        }, at.a.createElement(Hn, {
                            slideRenderer: r,
                            index: c,
                            onChangeIndex: e.handleChangeIndex,
                            interval: 5e3,
                            slideCount: 5e4,
                            overscanSlideAfter: 1,
                            overscanSlideBefore: 1,
                            style: {
                                overflow: "hidden",
                                height: "auto"
                            },
                            slideStyle: {
                                display: "flex",
                                height: "auto",
                                overflow: "hidden"
                            }
                        }), at.a.createElement(yt.a, {
                            className: Un.a.pagination,
                            dots: l.length,
                            index: c % u,
                            onChangeIndex: e.handleChangeIndex
                        }), at.a.createElement("div", {
                            className: Un.a.replay,
                            onClick: function() {
                                return a()
                            }
                        }, at.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/chongbo.png",
                            alt: ">"
                        }), at.a.createElement("span", null, "\u91cd\u64ad"))))
                    }) : null
                }
            }]),
            t
        }(rt.PureComponent),
        Ue.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            onReplay: mt.g
        },
        Ve), zn = n(687), Qn = n.n(zn), Yn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Jn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Xn = {
            news: {
                textColor: "#ffffff",
                backgroundColor: "#2883e9",
                progressBarColor: "#E0EDF6"
            }
        }, Zn = (He = Ge = function(e) {
            function t() {
                return $(this, t),
                ee(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return te(t, e),
            Jn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , o = e.onBoss;
                    return at.a.createElement(bt.a, {
                        name: "fixedFriend",
                        appName: t,
                        onOpenApp: n,
                        onBoss: o
                    }, function(e) {
                        var n = e.status
                          , o = e.progress
                          , r = e.onClick
                          , a = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: a,
                            onClick: r
                        }, at.a.createElement("div", null, at.a.createElement(Ct.b, Yn({}, Xn[t], {
                            className: Qn.a.progressBar,
                            progress: o
                        }), at.a.createElement("div", {
                            className: Qn.a.text
                        }, Object(jt.d)(n)))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ge.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        He), $n = n(688), eo = n.n($n), to = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , no = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), oo = {
            news: {
                textColor: "#ffffff",
                backgroundColor: "#2883e9",
                progressBarColor: "#E0EDF6"
            }
        }, ro = (ze = Ke = function(e) {
            function t() {
                return ne(this, t),
                oe(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return re(t, e),
            no(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , o = e.onBoss;
                    return at.a.createElement(bt.a, {
                        name: "fixed",
                        appName: t,
                        onOpenApp: n,
                        onBoss: o
                    }, function(e) {
                        var n = e.status
                          , o = e.progress
                          , r = e.onClick
                          , a = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: a,
                            onClick: r
                        }, at.a.createElement("div", null, at.a.createElement(Ct.b, to({}, oo[t], {
                            className: eo.a.progressBar,
                            progress: o
                        }), at.a.createElement("div", {
                            className: eo.a.text
                        }, Object(jt.d)(n)))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ke.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        ze), ao = n(689), io = n.n(ao), so = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), co = (Ye = Qe = function(e) {
            function t() {
                return ae(this, t),
                ie(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return se(t, e),
            so(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , o = e.onBoss;
                    return at.a.createElement(bt.a, {
                        name: "kMore",
                        appName: t,
                        onOpenApp: n,
                        onBoss: o
                    }, function(e) {
                        var t = e.onClick
                          , n = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: n,
                            onClick: t
                        }, at.a.createElement("div", {
                            className: io.a.kMore
                        }, at.a.createElement("div", null, "\u67e5\u770b\u5168\u6587"), at.a.createElement("img", {
                            className: io.a.kMoreImg,
                            src: "//mat1.gtimg.com/www/js/news/k-more.png",
                            alt: ""
                        })))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Qe.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g
        },
        Ye), lo = n(645), uo = n.n(lo), po = n(690), fo = n.n(po), mo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , ho = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), vo = function(e) {
            return e !== Ht.a.RESUME && e !== Ht.a.DOWNLOADING && e !== Ht.a.PAUSE
        }, yo = {
            news: {
                textColor: "#377df8",
                backgroundColor: "#F6FAFF;",
                progressBarColor: "#E0EDF6"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#fafafa",
                progressBarColor: "#bbbbbb"
            }
        }, go = (Xe = Je = function(e) {
            function t() {
                return le(this, t),
                ue(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return pe(t, e),
            ho(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.text
                      , a = e.onOpenApp
                      , i = e.onBoss
                      , s = e.total
                      , c = ce(e, ["className", "appName", "appDisplayName", "text", "onOpenApp", "onBoss", "total"]);
                    return at.a.createElement(bt.a, mo({
                        name: "hotpage",
                        appName: n,
                        onOpenApp: a,
                        onBoss: i,
                        disableClickBoss: !1
                    }, c), function(e) {
                        var a = e.status
                          , i = e.progress
                          , c = e.onClick
                          , l = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: l,
                            onClick: c
                        }, at.a.createElement("div", {
                            className: uo.a["hotNews-layer"]
                        }, at.a.createElement("img", {
                            src: "http://mat1.gtimg.com/www/images/wise/jiantou.png",
                            className: uo.a["hotNews-arrow"],
                            alt: "v"
                        }), at.a.createElement("div", {
                            className: sn()(t, fo.a[n], fo.a.wrap)
                        }, at.a.createElement(Ct.b, mo({}, yo[n], {
                            className: fo.a.progressBar,
                            progress: i,
                            progressBarColor: "#F6FAFF"
                        }), at.a.createElement("span", {
                            className: fo.a.downloaderText
                        }, "news" === n && r[a] ? r[a] : at.a.createElement(rt.Fragment, null, at.a.createElement("span", {
                            className: fo.a.openDownloaderText
                        }, Object(jt.d)(a), o), vo(a) ? at.a.createElement("span", {
                            className: fo.a.openDownloaderInfo
                        }, "\u67e5\u770b", at.a.createElement("span", {
                            className: fo.a.openDownloaderNum
                        }, s ? s + "\u6761" : ""), "\u6700\u65b0\u70ed\u70b9\u8d44\u8baf") : ""))))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Je.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            text: {}
        },
        Xe), bo = n(691), wo = n.n(bo), _o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Eo = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Oo = function(e) {
            return e !== Ht.a.RESUME && e !== Ht.a.DOWNLOADING && e !== Ht.a.PAUSE
        }, xo = {
            news: {
                textColor: "#377df8",
                backgroundColor: "#F6FAFF",
                progressBarColor: "#E0EDF6"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#fafafa",
                progressBarColor: "#bbbbbb"
            }
        }, ko = ($e = Ze = function(e) {
            function t() {
                return de(this, t),
                me(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return he(t, e),
            Eo(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.text
                      , a = e.onOpenApp
                      , i = e.onBoss
                      , s = fe(e, ["className", "appName", "appDisplayName", "text", "onOpenApp", "onBoss"]);
                    return at.a.createElement(bt.a, _o({
                        name: "hotpage",
                        appName: n,
                        onOpenApp: a,
                        onBoss: i,
                        disableClickBoss: !1
                    }, s), function(e) {
                        var a = e.status
                          , i = e.progress
                          , s = e.onClick
                          , c = e.onExpose;
                        return at.a.createElement(ht.b, {
                            onExpose: c,
                            onClick: s
                        }, at.a.createElement("div", {
                            className: sn()(t, wo.a[n], wo.a.wrap)
                        }, at.a.createElement(Ct.b, _o({}, xo[n], {
                            className: wo.a.progressBar,
                            progress: i
                        }), at.a.createElement("span", {
                            className: wo.a.downloaderText
                        }, "news" === n && r[a] ? r[a] : at.a.createElement(rt.Fragment, null, at.a.createElement("span", {
                            className: wo.a.openDownloaderText
                        }, Object(jt.d)(a), o), Oo(a) ? at.a.createElement("span", {
                            className: wo.a.openDownloaderInfo
                        }, "\u67e5\u770b\u4e13\u9898\u8be6\u7ec6\u5185\u5bb9") : "")))))
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        Ze.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            text: {}
        },
        $e), No = n(692), Co = n.n(No), jo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Po = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), To = {
            news: {
                textColor: "#608cdd",
                backgroundColor: "#edf5ff",
                progressBarColor: "#bbbbbb"
            },
            kuaibao: {
                textColor: "#F4770B",
                backgroundColor: "#FFF0E4",
                progressBarColor: "#bbbbbb"
            }
        }, Ao = (tt = et = function(e) {
            function t() {
                return ye(this, t),
                ge(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return be(t, e),
            Po(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , o = e.appDisplayName
                      , r = e.onOpenApp
                      , a = e.onBoss
                      , i = e.children
                      , s = ve(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss", "children"]);
                    return at.a.createElement(bt.a, jo({
                        name: "recommend",
                        appName: n,
                        onOpenApp: r,
                        onBoss: a
                    }, s), function(e) {
                        var r = e.status
                          , a = e.progress
                          , s = e.onClick
                          , c = e.onExpose;
                        return i({
                            content: at.a.createElement("div", {
                                className: t
                            }, at.a.createElement(Ct.b, jo({}, To[n], {
                                className: Co.a.progressBar,
                                progress: a
                            }), at.a.createElement("span", {
                                className: Co.a.downloaderText
                            }, Object(jt.d)(r), o))),
                            onClick: s,
                            onExpose: c
                        })
                    })
                }
            }]),
            t
        }(rt.PureComponent),
        et.defaultProps = {
            onOpenApp: mt.g,
            onBoss: mt.g,
            text: {},
            commentCount: 0
        },
        tt);
        n.d(t, !1, function() {
            return bt.a
        }),
        n.d(t, "b", function() {
            return Mt
        }),
        n.d(t, "c", function() {
            return Vt
        }),
        n.d(t, "h", function() {
            return Gt
        }),
        n.d(t, "a", function() {
            return Zt
        }),
        n.d(t, "d", function() {
            return rn
        }),
        n.d(t, "l", function() {
            return fn
        }),
        n.d(t, "m", function() {
            return bn
        }),
        n.d(t, "r", function() {
            return jn
        }),
        n.d(t, "o", function() {
            return Bn
        }),
        n.d(t, "p", function() {
            return Fn
        }),
        n.d(t, "q", function() {
            return Kn
        }),
        n.d(t, "j", function() {
            return Zn
        }),
        n.d(t, "k", function() {
            return ro
        }),
        n.d(t, "g", function() {
            return co
        }),
        n.d(t, "e", function() {
            return go
        }),
        n.d(t, "f", function() {
            return ko
        }),
        n.d(t, "i", function() {
            return Ao
        }),
        n.d(t, "n", function() {
            return Nt
        })
    },
    579: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }),
        n.d(t, "b", function() {
            return r
        });
        var o = {
            GETINTOFEEDFLOW: "getIntoFeedFlow",
            INTOFEEDFLOW: "IntoFeedFlow",
            REPORTACTUALEXPOSE: "reportActualExpose",
            GETQQNEWSUNREADLIST: "getQQNewsUnreadList",
            REPORTINTEREST: "reportInterest",
            GETSIMPLENEWS: "getSimpleNews",
            QQNEWSUP: "qqnewsUp",
            QQNEWSDOWN: "qqnewsDown",
            SHARETIMELINE: "share_timeline",
            SHAREFRIENDS: "share_friends",
            SHAREWEIBO: "share_weibo",
            SHAREOTHERS: "share_others"
        }
          , r = function(e) {
            var t = "0"
              , n = "0";
            switch (e) {
            case "w":
                t = "1702",
                n = "0";
                break;
            case "w2":
                t = "4961",
                n = "1945790414";
                break;
            case "a":
            case "people":
                t = "4960",
                n = "1638757246";
                break;
            case "q":
                t = "1817",
                n = "0";
                break;
            case "q2":
                t = "4972",
                n = "140535205";
                break;
            case "k":
                t = "5404",
                n = "2053932547";
                break;
            case "qd":
                t = "5405",
                n = "366266108";
                break;
            case "f":
                t = "5397",
                n = "2070810642";
                break;
            case "qr":
                t = "5849",
                n = "1702047288";
                break;
            case "yg":
                t = "5966",
                n = "334270151";
                break;
            case "topic":
                t = "5995",
                n = "1035832291";
                break;
            case "media":
                t = "5281",
                n = "16717952";
                break;
            case "list":
                t = "4973",
                n = "47403870";
                break;
            default:
                console.error(new Error("getBossInfoByPath: unknown path=" + e))
            }
            return {
                bossId: t,
                pwd: n
            }
        }
    },
    580: function(e, t, n) {
        "use strict";
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, "a", function() {
            return f
        });
        var a = n(65)
          , i = n.n(a)
          , s = n(35)
          , c = (n.n(s),
        n(23))
          , l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , p = "//btrace.qq.com/kvcollect"
          , f = function() {
            function e(t) {
                var n = t.BossId
                  , o = t.Pwd;
                if (r(this, e),
                this.initParams = {},
                !n || !o)
                    throw new Error("missing required param BossId & Pwd ");
                this.initParams = {
                    BossId: n,
                    Pwd: o
                }
            }
            return u(e, [{
                key: "sendByGet",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = o(i.a.mark(function e(t) {
                        var n, o;
                        return i.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = l({}, this.initParams, t, {
                                        _dc: Math.random()
                                    }),
                                    e.next = 3,
                                    Object(c.l)(0);
                                case 3:
                                    o = new Image(1,1),
                                    o.src = p + "?" + Object(s.stringify)(n);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "sendByPost",
                value: function(e) {
                    var t = l({}, this.initParams, e, {
                        _dc: Math.random()
                    });
                    fetch(p, {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: Object(s.stringify)(t)
                    }).catch(function(e) {
                        return console.error(e)
                    })
                }
            }]),
            e
        }()
    },
    581: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function s(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function l(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function d(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var m, h = n(1), v = n.n(h), y = n(216), g = n(578), b = n(693), w = n.n(b), _ = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , E = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), O = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    showRecommend: !1,
                    showLogo: !1
                },
                n
            }
            return a(t, e),
            E(t, [{
                key: "__onBegin",
                value: function() {
                    this.__setShowRecommend(!1),
                    this.__setShowLogo(!0)
                }
            }, {
                key: "__onEnd",
                value: function() {
                    this.__setShowRecommend(!0),
                    this.__setShowLogo(!1)
                }
            }, {
                key: "__setShowRecommend",
                value: function(e) {
                    this.setState(function(t) {
                        return _({}, t, {
                            showRecommend: e
                        })
                    })
                }
            }, {
                key: "__setShowLogo",
                value: function(e) {
                    this.setState(function(t) {
                        return _({}, t, {
                            showLogo: e
                        })
                    })
                }
            }, {
                key: "__replay",
                value: function() {
                    this.player && this.player.play()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.height
                      , o = t.appName
                      , r = t.onOpenApp
                      , a = t.atype
                      , i = t.vid
                      , s = t.newsId
                      , c = t.onBoss
                      , l = t.logoTitle
                      , u = t.isSensitive
                      , p = this.state
                      , f = p.showLogo
                      , d = p.showRecommend;
                    return v.a.createElement("div", {
                        className: w.a.wrap,
                        style: {
                            height: n
                        }
                    }, v.a.createElement(y.a, _({}, this.props, {
                        onBegin: function() {
                            return e.__onBegin()
                        },
                        onEnd: function() {
                            return e.__onEnd()
                        },
                        refPlayer: function(t) {
                            e.player = t
                        }
                    })), d && Boolean(!u) && v.a.createElement(g.q, {
                        appName: o,
                        atype: a,
                        vid: i,
                        newsId: s,
                        onReplay: function() {
                            return e.__replay()
                        },
                        onOpenApp: r,
                        onBoss: c
                    }), s && f && l && Boolean(!u) && v.a.createElement("div", {
                        className: w.a.logoBtn
                    }, v.a.createElement(g.p, {
                        appName: o,
                        title: l,
                        onOpenApp: function() {
                            return r({
                                id: s
                            })
                        },
                        onBoss: c
                    })))
                }
            }]),
            t
        }(h.PureComponent), x = n(605), k = n.n(x), N = n(35), C = n.n(N), j = n(586), P = n(39), T = n(30), A = n(646), I = n(699), S = n.n(I), B = function(e) {
            var t = e.meta
              , n = e.theme;
            return v.a.createElement("ul", {
                className: S.a.introdctionList + " " + S.a["theme-" + n]
            }, t.map(function(e) {
                return e.desc
            }).filter(function(e) {
                return e.length
            }).map(function(e, t) {
                return v.a.createElement("li", {
                    key: t
                }, v.a.createElement("em", null, t + 1), v.a.createElement("p", null, e))
            }))
        }, D = B, L = n(647), M = n.n(L), R = function(e) {
            var t = e.url
              , n = e.title
              , o = e.answer_abstract
              , r = e.n_follows
              , a = e.author
              , i = e.theme;
            return v.a.createElement("div", {
                className: M.a.zhihu + " "
            }, v.a.createElement("div", {
                className: M.a.title
            }, v.a.createElement("img", {
                className: M.a.zhihuImg,
                src: "//mat1.gtimg.com/www/js/news/zhihu-logo.png",
                alt: "\u77e5\u4e4elogo"
            }), v.a.createElement("div", {
                className: M.a.titleText
            }, "\u77e5\u4e4e\u95ee\u7b54"), v.a.createElement("a", {
                className: M.a.url + " " + M.a["theme-" + i],
                href: t
            }, "\u67e5\u770b\u5168\u6587", v.a.createElement("img", {
                src: "//mat1.gtimg.com/www/js/news/rightArrow-" + i + ".png",
                alt: ">"
            }))), v.a.createElement("div", {
                className: M.a.contentBox
            }, v.a.createElement("div", {
                className: M.a.contentTitle
            }, n), o && !!o.length && v.a.createElement("p", {
                className: M.a.content
            }, o), v.a.createElement("div", {
                className: M.a.author
            }, r, "\u4eba\u8d5e\u540c", v.a.createElement("div", {
                className: M.a.verticalLine
            }), !!a && !!a.length && a)))
        }, W = R, F = n(700), q = n.n(F), U = function(e, t) {
            var n = e.split("|");
            return k()(n[t])
        }, V = function(e) {
            var t = e.split("|");
            return (Math.floor(t[7] / 60) > 9 ? Math.floor(t[7] / 60) : "0" + Math.floor(t[7] / 60)) + ":" + (t[7] % 60 > 9 ? t[7] % 60 : "0" + t[7] % 60)
        }, G = function(e, t) {
            return v.a.createElement("li", {
                key: t
            }, v.a.createElement("a", {
                href: "//y.qq.com/i/song.html?songid=" + U(e.data, 0) + "&source=qqnews#wechat_redirectl"
            }, v.a.createElement("div", {
                className: q.a.musicImgWrapper
            }, v.a.createElement("img", {
                className: q.a.musicImg,
                src: e.albumpic,
                alt: "\u4e50\u7b26"
            })), v.a.createElement("div", {
                className: q.a.musicName
            }, U(e.data, 1)), v.a.createElement("div", {
                className: q.a.musicSinger
            }, U(e.data, 3)), v.a.createElement("div", {
                className: q.a.musicTime
            }, V(e.data))))
        }, H = function(e) {
            var t = e.meta;
            return v.a.createElement("div", {
                className: q.a.qqMusic + " "
            }, v.a.createElement("div", {
                className: q.a.title
            }, v.a.createElement("img", {
                className: q.a.qqMusicImg,
                src: "//mat1.gtimg.com/www/js/news/yinyue.png",
                alt: "QQ\u97f3\u4e50logo"
            }), v.a.createElement("div", {
                className: q.a.titleText
            }, "QQ\u97f3\u4e50")), v.a.createElement("ul", null, t && t.map(G.bind())))
        }, K = H, z = n(701), Q = n.n(z), Y = function() {
            return v.a.createElement("div", {
                className: Q.a.copyright + " "
            }, v.a.createElement("p", null, "\xa9\u7248\u6743\u58f0\u660e"), v.a.createElement("p", null, "\u672c\u6587\u7cfb\u817e\u8baf\u7248\u6743\u5185\u5bb9\uff0c\u8c22\u7edd\u8f6c\u8f7d\uff0c\u5426\u5219\u8ffd\u7a76\u6cd5\u5f8b\u8d23\u4efb\uff0c\u672c\u6587\u5b88\u6cd5\u5f8b\u4fdd\u62a4"))
        }, J = Y, X = n(702), Z = n.n(X), $ = n(585), ee = n(23), te = function(e) {
            var t = e.head_url
              , n = e.nick
              , o = e.reply_content
              , r = e.pub_time;
            return v.a.createElement("div", {
                className: Z.a.comment
            }, v.a.createElement("div", {
                className: "" + Z.a.commentTitle
            }, v.a.createElement("a", null, v.a.createElement("img", {
                src: t,
                alt: "\u5934\u50cf"
            })), v.a.createElement("em", null, n), v.a.createElement("span", null, Object(ee.e)(1e3 * r))), v.a.createElement("div", {
                className: "" + Z.a.commentContent
            }, v.a.createElement($.b, {
                maxRows: 3
            }, o)), v.a.createElement("div", {
                className: "" + Z.a.commentBottom
            }, v.a.createElement("span", null, "\u2014\u2014 \u6765\u81ea\u7f51\u53cb\u8bc4\u8bba \u2014\u2014")))
        }, ne = te, oe = n(149), re = function(e) {
            var t = e.cms_orig_info
              , n = e.desc
              , o = (e.pub_time,
            e.answerNum)
              , r = e.theme
              , a = e.id;
            return v.a.createElement("div", {
                className: M.a.zhihu + " "
            }, v.a.createElement("div", {
                className: M.a.title
            }, v.a.createElement("img", {
                className: M.a.zhihuImg,
                src: "//mat1.gtimg.com/www/js/news/webda-logo.png",
                alt: "\u95ee\u7b54logo"
            }), v.a.createElement("div", {
                className: M.a.titleText
            }, "\u95ee\u7b54"), v.a.createElement(T.a, {
                className: M.a.url + " " + M.a["theme-" + r],
                href: Object(oe.a)(Object(ee.c)({
                    appName: "news",
                    path: "a",
                    id: a
                })),
                atype: "88"
            }, "\u67e5\u770b\u5168\u6587", v.a.createElement("img", {
                src: "//mat1.gtimg.com/www/js/news/rightArrow-" + r + ".png",
                alt: ">"
            }))), v.a.createElement("div", {
                className: M.a.contentBox
            }, v.a.createElement("div", {
                className: M.a.contentTitle
            }, t.title), n && !!n.length && v.a.createElement("p", {
                className: M.a.content
            }, n), v.a.createElement("div", {
                className: M.a.author
            }, !!o && !!o.length && o + "\u56de\u7b54", !!o && !!o.length && v.a.createElement("div", {
                className: M.a.verticalLine
            }), !1)))
        }, ae = re, ie = n(704), se = n.n(ie), ce = function(e) {
            var t = e.title
              , n = e.media
              , o = e.content
              , r = e.url
              , a = e.theme
              , i = e.atype;
            return v.a.createElement("div", {
                className: se.a.wrap
            }, v.a.createElement("div", {
                className: se.a.title
            }, t), v.a.createElement("div", {
                className: se.a.media
            }, n.gravatar && v.a.createElement("img", {
                className: se.a.mediaGravatar,
                src: n.gravatar,
                alt: n.name
            }), n.pubtime && v.a.createElement("div", {
                className: se.a.mediaText
            }, n.pubtime), v.a.createElement("div", {
                className: se.a.mediaText
            }, n.name), "mp" === n.type && v.a.createElement("div", {
                className: se.a.mpIcon
            }, "\u5fae\u4fe1\u516c\u4f17\u53f7")), v.a.createElement("div", {
                className: se.a.content
            }, o, v.a.createElement(T.a, {
                className: se.a.url + " " + se.a["theme-" + a],
                href: r,
                atype: i
            }, "\u5168\u90e8", v.a.createElement("img", {
                src: "//mat1.gtimg.com/www/js/news/rightArrow-" + a + ".png",
                alt: ">"
            }))))
        }, le = ce, ue = n(569), pe = n(65), fe = n.n(pe), de = n(705), me = n.n(de), he = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , ve = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), ye = {
            pending: "pending",
            finished: "finished",
            living: "living",
            restricted: "restricted",
            notExists: "notExists",
            errorTime: "errorTime",
            errorUnknown: "errorUnknown"
        }, ge = (m = {},
        u(m, ye.pending, ""),
        u(m, ye.finished, "\u76f4\u64ad\u5df2\u7ed3\u675f"),
        u(m, ye.restricted, "\u7248\u6743\u9650\u5236\uff0c\u65e0\u6cd5\u89c2\u770b"),
        u(m, ye.notExists, "\u76f4\u64ad\u6e90\u4e0d\u5b58\u5728"),
        u(m, ye.errorTime, "\u83b7\u53d6\u76f4\u64ad\u6e90\u65f6\u95f4\u4fe1\u606f\u51fa\u9519"),
        m), be = function(e) {
            var t = e.retcode
              , n = e.info
              , o = Number(t);
            if (0 !== o)
                return -3 === o || -2 === o ? ye.restricted : -1 === o ? ye.notExists : ye.errorUnknown;
            var r = n.time
              , a = Object(ee.b)(r.time_start)
              , i = Object(ee.b)(r.time_end)
              , s = Object(ee.b)(r.time_curr);
            return a === i && a === s ? ye.errorTime : s > i ? ye.finished : s < a ? ye.pending : ye.living
        }, we = function(e) {
            function t() {
                var e, n, o, r;
                s(this, t);
                for (var a = arguments.length, i = Array(a), l = 0; l < a; l++)
                    i[l] = arguments[l];
                return n = o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    status: ye.pending
                },
                r = n,
                c(o, r)
            }
            return l(t, e),
            ve(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = i(fe.a.mark(function e() {
                        var t, n, o, r, a, i;
                        return fe.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props.channelId,
                                    n = document.location.pathname.split("/")[2],
                                    o = {
                                        progid: t,
                                        qtype: 1,
                                        aid: n
                                    },
                                    e.next = 5,
                                    fetch("/getVideoLiveStatus?" + C.a.stringify(o));
                                case 5:
                                    return r = e.sent,
                                    e.next = 8,
                                    r.json();
                                case 8:
                                    a = e.sent,
                                    i = be(a),
                                    this.setState(function(e) {
                                        return he({}, e, {
                                            status: i
                                        })
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.state.status;
                    if (e === ye.living)
                        return v.a.createElement(y.a, he({}, this.props, {
                            type: "live"
                        }));
                    var t = this.props.height;
                    return v.a.createElement("div", {
                        style: {
                            height: t + "px",
                            backgroundImage: "url(" + (e === ye.pending ? "//mat1.gtimg.com/www/js/news/video-live-pending.gif" : "//mat1.gtimg.com/www/js/news/video-live-normal.jpg") + ")"
                        },
                        className: me.a.content
                    }, v.a.createElement("div", {
                        className: me.a.padding
                    }), v.a.createElement("div", {
                        className: me.a.text
                    }, ge[e]))
                }
            }]),
            t
        }(h.PureComponent), _e = n(706), Ee = n.n(_e);
        n.d(t, "a", function() {
            return Le
        }),
        n.d(t, "b", function() {
            return Me
        });
        var Oe, xe, ke = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , Ne = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , Ce = function() {
            function e(e, t) {
                var n = []
                  , o = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value),
                    !t || n.length !== t); o = !0)
                        ;
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), je = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Pe = /<\/P>|\n/i, Te = /<!--\/?\w*?-->|<[^>]*?>|\n/gi, Ae = /<[^>]*?>/gi, Ie = /<(\/?\w*?)(\s[^>]*)?>/i, Se = /<!--\/?\w*?-->/gi, Be = /<!--(\/?\w*?)-->/i, De = function(e) {
            var t = e.children
              , n = t.split(/<BR(\s[^>]*)?\/?>/gi)
              , o = [];
            return n.forEach(function(e, t) {
                t && o.push(v.a.createElement("br", {
                    key: t + "-br"
                })),
                o.push(e)
            }),
            v.a.createElement("p", null, o)
        }, Le = function(e) {
            var t = e.children;
            return (void 0 === t ? "" : t).replace(Se, "").split(Pe).map(function(e) {
                return e.replace(Ae, "")
            }).filter(function(e) {
                return e.length
            }).join(" ")
        }, Me = (xe = Oe = function(e) {
            function t() {
                return p(this, t),
                f(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return d(t, e),
            je(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.useWendaExp
                      , n = e.useVideoExp
                      , o = e.theme
                      , r = e.appName
                      , a = e.appDisplayName
                      , i = e.oneParagraph
                      , s = e.nextPath
                      , c = e.metaInfo
                      , l = e.onBoss
                      , u = e.onOpenApp
                      , p = e.isGroupImg
                      , f = e.imageOverflowOffset
                      , d = e.onClickDownloadAction
                      , m = k()(this.props.children);
                    if ("string" !== typeof m)
                        return v.a.createElement("div", null, m);
                    if (i) {
                        var h = m.replace(Se, "").split(Pe).map(function(e) {
                            return e.replace(Ae, "")
                        }).filter(function(e) {
                            return e.length
                        });
                        return v.a.createElement("div", null, h.map(function(e, t) {
                            return v.a.createElement(De, {
                                key: t,
                                metaInfo: c
                            }, e)
                        }))
                    }
                    try {
                        var b = function() {
                            var e = m.match(Te);
                            if (!e)
                                return {
                                    v: v.a.createElement("div", null, m)
                                };
                            var i = m.split(Te)
                              , h = [];
                            h.push(i.shift());
                            for (var b = [h], w = function(e) {
                                b[0].push(e)
                            }, _ = [], E = function(e) {
                                _.push(e),
                                b.unshift([])
                            }, x = function(e) {
                                return _[_.length - 1] === e ? (_.pop(),
                                b.shift()) : null
                            }, k = function() {
                                return b[0].length
                            }, N = {}, I = function(e) {
                                return N[e] ? N[e]++ : N[e] = 1,
                                N[e]
                            }, S = 0; S < e.length; S++) {
                                var B = e[S]
                                  , L = i[S];
                                if (Ie.test(B)) {
                                    var M = B.match(Ie)
                                      , R = Ce(M, 2)
                                      , F = R[1]
                                      , q = void 0 === F ? "" : F
                                      , U = q.toUpperCase()
                                      , V = void 0;
                                    switch (U) {
                                    case "P":
                                        E("P");
                                        break;
                                    case "/P":
                                        V = x("P"),
                                        w(v.a.createElement("div", {
                                            key: k(),
                                            className: Ee.a.p
                                        }, V));
                                        break;
                                    case "BR":
                                        w(v.a.createElement("br", {
                                            key: k()
                                        }));
                                        break;
                                    case "STRONG":
                                    case "B":
                                        E("STRONG");
                                        break;
                                    case "/STRONG":
                                    case "/B":
                                        V = x("STRONG"),
                                        w(v.a.createElement("span", {
                                            key: k(),
                                            className: Ee.a.strong
                                        }, V));
                                        break;
                                    default:
                                        console.error("TextParser: Unknown tag ", U)
                                    }
                                } else
                                    Be.test(B) ? function() {
                                        var e = B.match(Be)
                                          , i = Ce(e, 2)
                                          , m = i[1]
                                          , h = c[m];
                                        if ("H2" === m)
                                            E("H2");
                                        else if ("/H2" === m) {
                                            var b = x("H2");
                                            w(v.a.createElement("h2", {
                                                key: k(),
                                                className: Ee.a.h2
                                            }, b))
                                        } else if ("TRUTH_BEGIN" === m)
                                            E("TRUTH_BEGIN");
                                        else if ("TRUTH_END" === m) {
                                            var _ = x("TRUTH_BEGIN");
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.truth
                                            }, v.a.createElement("img", {
                                                className: Ee.a.truthHeader,
                                                src: "//mat1.gtimg.com/www/images/newsapp/newsshare/truth_plus.png",
                                                alt: "\u4e8b\u5b9e+ \u817e\u8baf\u65b0\u95fb\u51fa\u54c1"
                                            }), v.a.createElement("div", {
                                                className: Ee.a.truthContent
                                            }, _), v.a.createElement(J, null)))
                                        } else if ("TIMELINE" === m)
                                            E("TIMELINE");
                                        else if ("/TIMELINE" === m) {
                                            var N = x("TIMELINE");
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.timeLine
                                            }, N))
                                        } else if ("TIME" === m)
                                            E("TIME");
                                        else if ("/TIME" === m) {
                                            var S = x("TIME");
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.time + " " + Ee.a["theme-" + o]
                                            }, v.a.createElement("img", {
                                                className: Ee.a.timeIcon,
                                                src: "//mat1.gtimg.com/www/js/news/timeline-" + o + ".png",
                                                alt: "L"
                                            }), v.a.createElement("span", null, S)))
                                        } else if ("EVENT" === m)
                                            E("EVENT");
                                        else if ("/EVENT" === m) {
                                            var L = x("EVENT");
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.event + " " + Ee.a["theme-" + o]
                                            }, L))
                                        } else if (m.startsWith("LIST_") && h)
                                            w(v.a.createElement(D, {
                                                key: k(),
                                                theme: o,
                                                meta: h
                                            }));
                                        else if (m.startsWith("MOBZHIHUCARD_") && h)
                                            w(v.a.createElement(W, {
                                                key: k(),
                                                url: h.url,
                                                theme: o,
                                                title: h.title,
                                                answer_abstract: h.answer_abstract,
                                                n_follows: h.n_follows,
                                                author: h.author
                                            }));
                                        else if (m.startsWith("MUSIC_") && h)
                                            w(v.a.createElement(K, {
                                                key: k(),
                                                meta: h
                                            }));
                                        else if ("SPLITLINE" === m)
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.hr
                                            }));
                                        else if (n && (m.startsWith("VIDEO_") || m.startsWith("MOBVIDEONEWS_")) && h) {
                                            var M = I("VIDEO")
                                              , R = h.cms_orig_info
                                              , F = void 0 === R ? {} : R
                                              , q = m.startsWith("VIDEO_")
                                              , U = q ? 56 : Number(h.atype) || 101
                                              , V = Object(P.c)(U)
                                              , G = V === P.a.video
                                              , H = h.videolist
                                              , z = void 0 === H ? [] : H
                                              , Q = void 0;
                                            if (G)
                                                Q = h.vid;
                                            else {
                                                var Y = Ce(z, 1)
                                                  , X = Y[0]
                                                  , Z = void 0 === X ? {} : X;
                                                Q = F.vid || Z && Z.video && Z.video.vid
                                            }
                                            var $ = h.img && h.img.imgurl640 && h.img.imgurl640.imgurl || h.cms_orig_info && h.cms_orig_info.pic
                                              , te = 1 === Number(h.type)
                                              , re = [];
                                            if (te)
                                                re.push(v.a.createElement(we, {
                                                    key: "live",
                                                    channelId: Q,
                                                    poster: $,
                                                    height: (Math.min(750, document.body.clientWidth) - 30) / 16 * 9
                                                }));
                                            else {
                                                var ie = "" + (h.asDownloader || h.cms_orig_info && h.cms_orig_info.asDownloader)
                                                  , se = "" + (h.asSensitiveNormal || h.cms_orig_info && h.cms_orig_info.asSensitiveNormal)
                                                  , ce = "0" === String(se)
                                                  , pe = !1;
                                                pe = "0" === ie || "1" === ie ? "0" === ie : G,
                                                console.log("asSensitiveNormal:::", se);
                                                var fe = h.chlid;
                                                console.log("isPlayNow::::", pe, h);
                                                var de = h.logoAid || F.logoAid || h.id || F.id;
                                                if (pe) {
                                                    var me = h.logoTitle || F.logoTitle;
                                                    me || G || (me = "\u770b\u5b8c\u6574\u5408\u8f91"),
                                                    re.push(v.a.createElement(j.b, {
                                                        key: "video" + k(),
                                                        render: function(e) {
                                                            var t = e.width;
                                                            return t ? v.a.createElement(O, {
                                                                appName: r,
                                                                atype: U,
                                                                vid: Q,
                                                                newsId: de,
                                                                logoTitle: me,
                                                                poster: $,
                                                                height: (Math.min(750, t) - 30) / 16 * 9,
                                                                isSensitive: ce,
                                                                onceBegin: function() {
                                                                    return l("modplayer_begin", {
                                                                        modulePos: M,
                                                                        moduleNewsId: Q
                                                                    })
                                                                },
                                                                onceEnd: function() {
                                                                    return l("modplayer_end", {
                                                                        modulePos: M,
                                                                        moduleNewsId: Q
                                                                    })
                                                                },
                                                                onBoss: function(e, t) {
                                                                    return l(e, Ne({
                                                                        modulePos: M,
                                                                        moduleNewsId: Q
                                                                    }, t))
                                                                },
                                                                onOpenApp: function(e) {
                                                                    return u(Ne({
                                                                        modulePos: M,
                                                                        moduleNewsId: Q,
                                                                        chlid: fe
                                                                    }, e))
                                                                }
                                                            }) : null
                                                        }
                                                    })),
                                                    re.push(v.a.createElement("div", {
                                                        className: Ee.a.imgDesc
                                                    }, h.desc))
                                                } else
                                                    re.push(v.a.createElement(g.h, {
                                                        key: k(),
                                                        disableText: !0,
                                                        appName: r,
                                                        appDisplayName: a,
                                                        src: $,
                                                        onOpenApp: function() {
                                                            return u({
                                                                id: de,
                                                                chlid: fe
                                                            })
                                                        },
                                                        onBoss: function(e, t) {
                                                            return l(e, Ne({}, t, {
                                                                moduleNewsId: de,
                                                                modulePos: M
                                                            }))
                                                        },
                                                        onClickDownloadAction: d
                                                    }));
                                                var he = h.id || h.aid;
                                                if (he && !ce) {
                                                    var ve = h.jumpword || F.jumpword
                                                      , ye = h.title || F.title
                                                      , ge = (G ? parseInt(Object(ee.h)(15, 25), 10) : z.length) || 0;
                                                    console.warn("downloaderTitle", ye),
                                                    re.push(v.a.createElement(g.o, {
                                                        atype: U,
                                                        appName: r,
                                                        key: "videologo" + k(),
                                                        appDisplayName: a,
                                                        title: ye,
                                                        jumpword: ve,
                                                        relCount: ge,
                                                        onOpenApp: function() {
                                                            return u({
                                                                id: he,
                                                                chlid: fe
                                                            })
                                                        },
                                                        onBoss: function(e, t) {
                                                            return l(e, Ne({
                                                                modulePos: M,
                                                                moduleNewsId: Q
                                                            }, t))
                                                        },
                                                        onClickDownloadAction: d
                                                    }))
                                                }
                                            }
                                            w(v.a.createElement(ue.b, {
                                                key: k(),
                                                onExpose: function() {
                                                    return l("modplayer_exposure", {
                                                        modulePos: M,
                                                        moduleNewsId: Q
                                                    })
                                                }
                                            }, v.a.createElement("div", {
                                                className: Ee.a.p
                                            }, re)))
                                        } else if (m.startsWith("VIDEO_") && h) {
                                            var be = h.vid
                                              , _e = h.img
                                              , Oe = void 0 === _e ? {} : _e
                                              , xe = h.desc
                                              , ke = h.type
                                              , je = 1 === Number(ke)
                                              , Pe = I("VIDEO");
                                            w(v.a.createElement(ue.b, {
                                                key: k(),
                                                onExpose: function() {
                                                    return l("modplayer_exposure", {
                                                        modulePos: Pe,
                                                        moduleNewsId: be
                                                    })
                                                }
                                            }, v.a.createElement("div", {
                                                className: Ee.a.p
                                            }, je ? v.a.createElement(we, {
                                                channelId: be,
                                                poster: Oe && Oe.imgurl640 && Oe.imgurl640.imgurl,
                                                height: (Math.min(750, document.body.clientWidth) - 30) / 16 * 9
                                            }) : v.a.createElement(j.b, {
                                                key: "video" + k(),
                                                render: function(e) {
                                                    var t = e.width;
                                                    return t ? v.a.createElement(y.a, {
                                                        vid: be,
                                                        poster: Oe && Oe.imgurl640 && Oe.imgurl640.imgurl,
                                                        height: (Math.min(750, t) - 30) / 16 * 9,
                                                        onceBegin: function() {
                                                            return l("modplayer_begin", {
                                                                modulePos: Pe,
                                                                moduleNewsId: be
                                                            })
                                                        },
                                                        onceEnd: function() {
                                                            return l("modplayer_end", {
                                                                modulePos: Pe,
                                                                moduleNewsId: be
                                                            })
                                                        }
                                                    }) : null
                                                }
                                            }), v.a.createElement("div", {
                                                className: Ee.a.imgDesc
                                            }, xe))))
                                        } else if (m.startsWith("IMG_") && h) {
                                            var Te = h.desc
                                              , Ae = h.img
                                              , Ie = void 0 === Ae ? {} : Ae
                                              , Se = Ie && Ie.imgurl0 && Ie.imgurl0.imgurl
                                              , De = Ie && Ie.imgurl641 && Ie.imgurl641.imgurl
                                              , Le = De || Se || h.origUrl || h.url;
                                            w(v.a.createElement("div", {
                                                key: k()
                                            }, v.a.createElement("div", {
                                                style: p ? {
                                                    marginLeft: "-" + f + "px",
                                                    marginRight: "-" + f + "px"
                                                } : {}
                                            }, v.a.createElement("img", {
                                                className: Ee.a.img,
                                                src: Le,
                                                alt: "\u56fe\u7247"
                                            })), !p && v.a.createElement("div", {
                                                className: Ee.a.imgDesc
                                            }, Te), p && 0 !== Te.length && v.a.createElement("div", {
                                                className: Ee.a.isGroupImg
                                            }, v.a.createElement("img", {
                                                className: Ee.a.groupImgLogo,
                                                src: "//mat1.gtimg.com/www/js/news/triangle.png",
                                                alt: ""
                                            }), v.a.createElement("span", null, Te))))
                                        } else if (m.startsWith("GROUPPIC_") && h) {
                                            var Me = h.cms_orig_info
                                              , Re = h.title
                                              , We = h.id
                                              , Fe = h.chlid
                                              , qe = Me.pic
                                              , Ue = Me.jumpword
                                              , Ve = Me.totalnum
                                              , Ge = I("GROUPPIC");
                                            w(v.a.createElement(g.c, {
                                                key: k(),
                                                appName: r,
                                                appDisplayName: a,
                                                src: qe,
                                                desc: Ue || Re,
                                                total: Ve,
                                                onOpenApp: function() {
                                                    return u({
                                                        id: We,
                                                        chlid: Fe
                                                    })
                                                },
                                                onBoss: function(e, t) {
                                                    return l(e, Ne({}, t, {
                                                        moduleNewsId: We,
                                                        modulePos: Ge
                                                    }))
                                                },
                                                onClickDownloadAction: d
                                            }))
                                        } else if (m.startsWith("MOBVIDEONEWS_") && h) {
                                            var He = h.cms_orig_info
                                              , Ke = void 0 === He ? {} : He
                                              , ze = h.id
                                              , Qe = h.chlid
                                              , Ye = Ke.title
                                              , Je = Ke.pic
                                              , Xe = Ke.jumpword
                                              , Ze = I("MOBVIDEONEWS");
                                            w(v.a.createElement(g.h, {
                                                key: k(),
                                                appName: r,
                                                appDisplayName: a,
                                                src: Je,
                                                desc: Xe || Ye,
                                                onOpenApp: function() {
                                                    return u({
                                                        id: ze,
                                                        chlid: Qe
                                                    })
                                                },
                                                onBoss: function(e, t) {
                                                    return l(e, Ne({}, t, {
                                                        moduleNewsId: ze,
                                                        modulePos: Ze
                                                    }))
                                                },
                                                onClickDownloadAction: d
                                            }))
                                        } else if (m.startsWith("LINK_")) {
                                            var $e = h.atype
                                              , et = h.id
                                              , tt = h.url
                                              , nt = void 0 === tt ? "" : tt
                                              , ot = h.title
                                              , rt = h.desc
                                              , at = h.cms_orig_info
                                              , it = "";
                                            it = !$e || "5" !== $e && "6" !== $e && "1001" !== $e ? at ? Object(ee.c)({
                                                appName: "news",
                                                id: et,
                                                path: s
                                            }) : nt : (at ? at.url : "") || "";
                                            var st = Object(P.c)($e)
                                              , ct = at ? at.desc : ot || rt
                                              , lt = C.a.parse(it.split("?")[1])
                                              , ut = lt.hongbao
                                              , pt = lt.zzry
                                              , ft = !!Number(ut)
                                              , dt = !!Number(pt)
                                              , mt = I("LINK");
                                            w(v.a.createElement(ue.b, {
                                                key: k(),
                                                onExpose: function() {
                                                    st === P.a.webda && l("wenda_link_exposure", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    ft && l("hongbao_link_exposure", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    dt && l("zzry_link_exposure", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    l("external_links_exposure", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    })
                                                },
                                                onClick: function() {
                                                    st === P.a.webda && l("wenda_link_click", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    ft && l("hongbao_link_click", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    dt && l("zzry_link_click", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    }),
                                                    l("external_links_click", {
                                                        modulePos: mt,
                                                        moduleNewsId: et
                                                    })
                                                }
                                            }, v.a.createElement(T.a, {
                                                className: Ee.a.a,
                                                href: Object(oe.a)(it),
                                                atype: $e,
                                                alt: ct
                                            }, ft && v.a.createElement("img", {
                                                className: Ee.a.linkLogo,
                                                src: "//mat1.gtimg.com/www/js/news/hongbao.png",
                                                alt: ""
                                            }), dt && v.a.createElement("img", {
                                                className: Ee.a.zzry,
                                                src: "//mat1.gtimg.com/www/js/news/zzry-logo.png",
                                                alt: ""
                                            }), v.a.createElement("span", {
                                                style: {
                                                    verticalAlign: ft || dt ? "middle" : void 0
                                                }
                                            }, ct))))
                                        } else if (m.startsWith("MOBARTEND_")) {
                                            var ht = h.desc;
                                            w(v.a.createElement(A.a, {
                                                introdctionDes: ht
                                            }))
                                        } else if (m.startsWith("COMMENT_") && h)
                                            h.map(function(e) {
                                                return w(v.a.createElement(ne, {
                                                    key: k(),
                                                    head_url: e.head_url,
                                                    nick: e.nick,
                                                    reply_content: e.reply_content,
                                                    pub_time: e.pub_time
                                                }))
                                            });
                                        else if (t && m.startsWith("MOBQA_") && h) {
                                            var vt = I("MOBQA");
                                            w(v.a.createElement(g.r, {
                                                key: k(),
                                                appName: r,
                                                onOpenApp: function() {
                                                    return u({
                                                        id: h.id
                                                    })
                                                },
                                                onBoss: function(e, t) {
                                                    return l(e, Ne({}, t, {
                                                        modulePos: vt,
                                                        moduleNewsId: h.id
                                                    }))
                                                },
                                                cms_orig_info: h.cms_orig_info,
                                                cid: h.cid,
                                                id: h.id,
                                                atype: h.atype
                                            }))
                                        } else if (m.startsWith("MOBQA_") && h)
                                            w(v.a.createElement(ae, {
                                                key: k(),
                                                id: h.id,
                                                theme: o,
                                                cms_orig_info: h.cms_orig_info,
                                                desc: h.desc,
                                                pub_time: h.pub_time
                                            }));
                                        else if (m.startsWith("QUOTE_")) {
                                            var yt = h.source
                                              , gt = h.text;
                                            w(v.a.createElement("div", {
                                                key: k(),
                                                className: Ee.a.quote
                                            }, v.a.createElement("div", {
                                                className: Ee.a.quoteText
                                            }, gt), v.a.createElement("div", {
                                                className: Ee.a.quoteSource
                                            }, "\u2014\u2014", yt)))
                                        } else if (m.startsWith("WXLINK_")) {
                                            var bt = h.cms_orig_info
                                              , wt = bt.title
                                              , _t = bt.content
                                              , Et = bt.url
                                              , Ot = bt.mp_name
                                              , xt = bt.mp_header;
                                            w(v.a.createElement(le, {
                                                key: k(),
                                                title: wt,
                                                theme: o,
                                                media: {
                                                    type: "mp",
                                                    gravatar: xt,
                                                    name: Ot
                                                },
                                                content: _t,
                                                url: Object(oe.a)(Et)
                                            }))
                                        } else if (m.startsWith("OUTERLINK_")) {
                                            var kt = h.atype
                                              , Nt = h.pubtime
                                              , Ct = h.cms_orig_info
                                              , jt = Ct.title
                                              , Pt = Ct.desc
                                              , Tt = Ct.url
                                              , At = Ct.source;
                                            w(v.a.createElement(le, {
                                                key: k(),
                                                title: jt,
                                                theme: o,
                                                atype: kt,
                                                media: {
                                                    type: "outer",
                                                    name: At,
                                                    pubtime: Nt.split(" ")[0]
                                                },
                                                content: Pt,
                                                url: Object(oe.a)(Tt)
                                            }))
                                        } else
                                            console.error("TextParser: Unknown attr ", m)
                                    }() : console.error("TextParser: Unknown tag ", B, B.length);
                                w(L)
                            }
                            for (b.length > 1 && console.error("TextParser: Tags not matched"); b.length > 1; ) {
                                var G = b.shift();
                                w(v.a.createElement("div", {
                                    key: k(),
                                    className: Ee.a.p
                                }, G))
                            }
                            return {
                                v: v.a.createElement("div", {
                                    className: Ee.a.wrap + " " + Ee.a["theme-" + o]
                                }, h)
                            }
                        }();
                        if ("object" === ("undefined" === typeof b ? "undefined" : ke(b)))
                            return b.v
                    } catch (e) {
                        return console.error(e),
                        null
                    }
                }
            }]),
            t
        }(h.PureComponent),
        Oe.defaultProps = {
            theme: "news",
            onlyText: !1,
            oneParagraph: !1,
            onBoss: ee.g,
            onOpenApp: ee.g,
            imageOverflowOffset: 15,
            appName: "news",
            appDisplayName: "\u817e\u8baf\u65b0\u95fb",
            nextPath: "a",
            metaInfo: {}
        },
        xe)
    },
    582: function(e, t, n) {
        "use strict";
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function i(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s, c, l = n(65), u = n.n(l), p = n(1), f = n(147), d = n(23), m = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), h = (c = s = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = o = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                o.__onShare = function(e) {
                    var t = e.target
                      , n = o.props.onBoss;
                    switch (t) {
                    case "friend":
                        n("send_app_msg");
                        break;
                    case "timeline":
                        n("share_timeline")
                    }
                }
                ,
                i = n,
                a(o, i)
            }
            return i(t, e),
            m(t, [{
                key: "componentWillMount",
                value: function() {
                    this.__setShareInfo(this.props, !0)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    Object(d.i)(this.props, e, ["title", "desc", "link", "imgUrl", "target"]) || this.__setShareInfo(e)
                }
            }, {
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.__shareInstance && this.__shareInstance.removeListener("share", this.__onShare)
                }
            }, {
                key: "__setShareInfo",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = o(u.a.mark(function e(t, n) {
                        var o, r, a, i = t.title, s = t.desc, c = t.link, l = t.imgUrl, p = t.target;
                        return u.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = this.props.onError,
                                    e.prev = 1,
                                    e.next = 4,
                                    f.d.readyAny();
                                case 4:
                                    r = e.sent,
                                    a = r.setShareInfo({
                                        title: i,
                                        desc: s,
                                        link: c,
                                        imgUrl: l,
                                        target: p
                                    }),
                                    n && (this.__shareInstance = a,
                                    a.on("share", this.__onShare)),
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(1),
                                    o(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[1, 9]])
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        }(p.Component),
        s.defaultProps = {
            onBoss: d.g,
            onError: function(e) {
                return console.error(e.message)
            }
        },
        c);
        n.d(t, "a", function() {
            return h
        })
    },
    583: function(e, t, n) {
        "use strict";
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function i(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function s(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function l(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function p(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function f(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function d(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function m(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function h(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function v(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function y(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function g(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function b(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function w(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function _(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function E(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function O(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function x(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function k(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function N(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function C(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function j(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function P(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function T(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function A(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function I(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function S(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function B(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function D(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function L(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function M(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function R(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function W(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function F(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function q(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function U(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var V, G, H, K, z, Q, Y, J, X, Z, $, ee, te, ne, oe, re, ae, ie, se, ce, le, ue, pe, fe, de, me, he, ve = n(65), ye = n.n(ve), ge = n(1), be = n.n(ge), we = n(57), _e = n(147), Ee = n(569), Oe = n(73), xe = n(148), ke = n(643), Ne = n(23), Ce = n(577), je = n.n(Ce), Pe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Te = Object(we.a)((H = G = function(e) {
            function t() {
                return r(this, t),
                a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            Pe(t, [{
                key: "click",
                value: function() {
                    this.__onClick()
                }
            }, {
                key: "expose",
                value: function() {
                    this.__onExpose()
                }
            }, {
                key: "__onExpose",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = o(ye.a.mark(function e() {
                        var t, n, o, r, a, i, s = this;
                        return ye.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t = this.props,
                                    n = t.onExposeAction,
                                    o = t.onBoss,
                                    n(),
                                    r = this.props,
                                    a = r.onExposeOpenAction,
                                    i = r.onExposeDownloadAction,
                                    xe.e.then(function() {
                                        !we.b.get("appManager." + s.props.name + ".installed") ? (o("download_exposure"),
                                        i()) : (o("open_exposure"),
                                        a())
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__onClick",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = o(ye.a.mark(function e() {
                        var t, n, o, r, a, i, s, c, l, u, p, f, d;
                        return ye.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    t = this.props,
                                    n = t.name,
                                    o = t.onClickAction,
                                    r = t.onClickDownloadAction,
                                    a = t.onClickInstallAction,
                                    i = t.onClickOpenAction,
                                    s = t.onOpenApp,
                                    c = t.onBoss,
                                    o && o(),
                                    l = Object(xe.c)({
                                        name: n
                                    }),
                                    u = we.b.get("appManager." + n) || {},
                                    p = u.status,
                                    f = void 0 === p ? _e.a.PENDING : p,
                                    d = u.installed,
                                    !d) {
                                        e.next = 10;
                                        break
                                    }
                                    return c("open_click"),
                                    i(),
                                    s(),
                                    e.abrupt("return");
                                case 10:
                                    e.t0 = f,
                                    e.next = e.t0 === _e.a.PENDING ? 13 : e.t0 === _e.a.COMPLETE ? 26 : e.t0 === _e.a.DOWNLOADING ? 32 : e.t0 === _e.a.PAUSE ? 34 : e.t0 === _e.a.INSTALLED ? 36 : 40;
                                    break;
                                case 13:
                                    if (c("download_click"),
                                    r(),
                                    l) {
                                        e.next = 18;
                                        break
                                    }
                                    return Object(Oe.m)({
                                        name: n
                                    }),
                                    e.abrupt("return");
                                case 18:
                                    return e.next = 20,
                                    Object(Ne.l)(300);
                                case 20:
                                    return ke.a.call(l, _e.a.DOWNLOAD, function() {
                                        c("startDownLoad_confirm")
                                    }),
                                    ke.a.call(l, "__giveup", function() {
                                        c("startDownLoad_cancel")
                                    }),
                                    ke.a.call(l, _e.a.CANCEL, function() {
                                        c("stopDownLoad")
                                    }),
                                    ke.a.call(l, _e.a.COMPLETE, function() {
                                        c("succDownLoad")
                                    }),
                                    l.downloadAndInstall(),
                                    e.abrupt("break", 41);
                                case 26:
                                    return c("install_click"),
                                    a(),
                                    e.next = 30,
                                    Object(Ne.l)(300);
                                case 30:
                                    return l.install(),
                                    e.abrupt("break", 41);
                                case 32:
                                    return l.pause(),
                                    e.abrupt("break", 41);
                                case 34:
                                    return l.resume(),
                                    e.abrupt("break", 41);
                                case 36:
                                    return c("open_click"),
                                    i(),
                                    s(),
                                    e.abrupt("break", 41);
                                case 40:
                                    return e.abrupt("break", 41);
                                case 41:
                                    e.next = 46;
                                    break;
                                case 43:
                                    e.prev = 43,
                                    e.t1 = e.catch(0),
                                    console.error(e.t1);
                                case 46:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 43]])
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.name
                      , o = t.className
                      , r = t.pendingComponent
                      , a = t.downloadingComponent
                      , i = t.pausingComponent
                      , s = t.installComponent
                      , c = t.installedComponent
                      , l = t.preventDefaultAction
                      , u = t.progressBarColor
                      , p = we.b.get("appManager." + n) || {}
                      , f = p.status
                      , d = void 0 === f ? _e.a.PENDING : f
                      , m = p.progress
                      , h = void 0 === m ? 0 : m
                      , v = p.installed
                      , y = void 0;
                    if (v)
                        y = c();
                    else
                        switch (d) {
                        case _e.a.PENDING:
                        case _e.a.CANCEL:
                            y = r();
                            break;
                        case _e.a.INSTALLED:
                            y = c();
                            break;
                        case _e.a.COMPLETE:
                            y = s();
                            break;
                        case _e.a.RESUME:
                        case _e.a.DOWNLOADING:
                            y = a();
                            break;
                        case _e.a.PAUSE:
                            y = i();
                            break;
                        default:
                            y = r()
                        }
                    return be.a.createElement(Ee.b, {
                        onExpose: function() {
                            return !l && e.__onExpose()
                        },
                        onClick: function() {
                            return !l && e.__onClick()
                        }
                    }, be.a.createElement("div", {
                        className: o + " " + je.a.wrapper
                    }, be.a.createElement("div", {
                        className: je.a.content
                    }, y), be.a.createElement("div", {
                        className: je.a.progress,
                        style: {
                            width: h + "%",
                            backgroundColor: u
                        }
                    })))
                }
            }]),
            t
        }(ge.Component),
        G.defaultProps = {
            progressBarColor: "#bbbbbb",
            pendingComponent: Ne.g,
            downloadingComponent: Ne.g,
            installComponent: Ne.g,
            installedComponent: Ne.g,
            onExposeAction: Ne.g,
            onOpenApp: Ne.g,
            onExposeOpenAction: Ne.g,
            onExposeDownloadAction: Ne.g,
            onClickDownloadAction: Ne.g,
            onClickInstallAction: Ne.g,
            onClickOpenAction: Ne.g,
            preventDefaultAction: !1
        },
        V = H)) || V, Ae = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ie = (z = K = function(e) {
            function t() {
                return s(this, t),
                c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return l(t, e),
            Ae(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.appDisplayName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction
                      , c = t.commentCount
                      , l = Object(Ne.j)(c)
                      , u = void 0;
                    return u = c ? c < 1e3 ? ["\u770b", l, "\u6761\u70ed\u8bc4"] : c < 1e4 ? ["\u770b", l, be.a.createElement("img", {
                        key: "chili",
                        className: je.a.chili1,
                        src: "//mat1.gtimg.com/www/images/newsapp/mqq/comment_chili_v2.png",
                        alt: ""
                    }), "\u6761\u70ed\u8bc4"] : ["\u770b", l, be.a.createElement("img", {
                        key: "chili2",
                        className: je.a.chili2,
                        src: "//mat1.gtimg.com/www/images/newsapp/mqq/comment_2chili_v2.png",
                        alt: ""
                    }), "\u6761\u70ed\u8bc4"] : ["\u6211\u6765\u8bf4\u4e24\u53e5"],
                    be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderComment,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("comment_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("comment_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("comment_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_comment_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_comment_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_comment_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d", r, "\uff0c", u)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", r, "\uff0c", u)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", r, "\uff0c", u)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5", r, "\uff0c", u)
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00", r, "\uff0c", u)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        K.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g,
            commentCount: 0
        },
        z), Se = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Be = (Y = Q = function(e) {
            function t() {
                return u(this, t),
                p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return f(t, e),
            Se(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.appDisplayName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction
                      , c = t.progressBarColor;
                    return be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderTopTip,
                        progressBarColor: c,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("toptip_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("toptipopen_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("toptip_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_toptip_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_toptip_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_toptip_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderText
                            }, "\u5df2\u66f4\u65b0\u81f3\u6700\u65b0\uff0c\u4e0b\u8f7d", r, "\u67e5\u770b\u66f4\u591a", be.a.createElement("img", {
                                className: je.a.arrow,
                                src: "//mat1.gtimg.com/www/js/news/top-tip-arrow.png",
                                alt: ""
                            }))
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", r)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", r)
                        },
                        installComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderText
                            }, "\u5df2\u66f4\u65b0\u81f3\u6700\u65b0\uff0c\u5b89\u88c5", r, "\u67e5\u770b\u66f4\u591a", be.a.createElement("img", {
                                className: je.a.arrow,
                                src: "//mat1.gtimg.com/www/js/news/top-tip-arrow.png",
                                alt: ""
                            }))
                        },
                        installedComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderText
                            }, "\u5df2\u66f4\u65b0\u81f3\u6700\u65b0\uff0c\u6253\u5f00", r, "\u67e5\u770b\u66f4\u591a", be.a.createElement("img", {
                                className: je.a.arrow,
                                src: "//mat1.gtimg.com/www/js/news/top-tip-arrow.png",
                                alt: ""
                            }))
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        Q.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g,
            progressBarColor: "#0D6AD1"
        },
        Y), De = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Le = (X = J = function(e) {
            function t() {
                return d(this, t),
                m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return h(t, e),
            De(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.appDisplayName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction
                      , c = t.progressBarColor;
                    return be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderBottom,
                        progressBarColor: c,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("bottom_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("bottom_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("bottom_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_bottom_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_bottom_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_bottom_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d", r, "\u67e5\u770b\u66f4\u591a")
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", r)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", r)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5", r, "\u67e5\u770b\u66f4\u591a")
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00", r, "\u67e5\u770b\u66f4\u591a")
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        J.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g,
            progressBarColor: "#E0EDF6"
        },
        X), Me = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Re = ($ = Z = function(e) {
            function t() {
                return v(this, t),
                y(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return g(t, e),
            Me(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.onOpenApp
                      , a = t.onBoss
                      , i = t.preventDefaultAction
                      , s = t.restCls
                      , c = void 0 === s ? {} : s
                      , l = t.options
                      , u = t.className
                      , p = t.onClickDownloadAction;
                    return be.a.createElement("div", {
                        className: je.a[n] + " " + u
                    }, be.a.createElement(Te, {
                        name: n,
                        className: je.a.downloader + " " + je.a.downloaderRecommend,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {},
                        onExposeOpenAction: function() {
                            a("open_recommend_item_exposure", l)
                        },
                        onExposeDownloadAction: function() {
                            a("download_recommend_item_exposure", l)
                        },
                        onClickOpenAction: function() {
                            return a("open_recommend_click", l)
                        },
                        onClickDownloadAction: function() {
                            p(),
                            a("download_recommend_click", l)
                        },
                        onClickInstallAction: function() {
                            return a("install_recommend_click", l)
                        },
                        onOpenApp: r,
                        onBoss: a,
                        preventDefaultAction: i,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: c.downloaderText || je.a.downloaderText
                            }, "\u4e0b\u8f7d", o)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: c.downloaderText || je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: c.downloaderText || je.a.downloaderText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", o)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: c.downloaderText || je.a.downloaderText
                            }, "\u5b89\u88c5", o)
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: c.downloaderText || je.a.downloaderText
                            }, "\u6253\u5f00", o)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        Z.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g,
            onClickDownloadAction: Ne.g
        },
        $), We = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Fe = {
            GROUPPIC: {
                sOp: "atlas",
                bossExpose: !0,
                bossExposeStatus: !0,
                bossClickStatus: !0
            },
            MOBVIDEONEWS: {
                sOp: "mobvideo",
                bossExpose: !0,
                bossExposeStatus: !0,
                bossClickStatus: !0
            }
        }, qe = (te = ee = function(e) {
            function t() {
                return b(this, t),
                w(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return _(t, e),
            We(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.type
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction
                      , c = t.options
                      , l = Fe[r]
                      , u = l.sOp
                      , p = l.bossExpose
                      , f = l.bossExposeStatus
                      , d = l.bossClick
                      , m = l.bossClickStatus;
                    return be.a.createElement("div", {
                        className: je.a[n]
                    }, be.a.createElement(Te, {
                        name: n,
                        className: je.a.downloader + " " + je.a.downloaderTextParser,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return p && i(u + "_exposure", c)
                        },
                        onExposeOpenAction: function() {
                            return f && i(u + "_open_exposure", c)
                        },
                        onExposeDownloadAction: function() {
                            return f && i(u + "_download_exposure", c)
                        },
                        onClickAction: function() {
                            return d && i(u + "_click")
                        },
                        onClickOpenAction: function() {
                            return m && i("open_" + u + "_click", c)
                        },
                        onClickDownloadAction: function() {
                            return m && i("download_" + u + "_click", c)
                        },
                        onClickInstallAction: function() {
                            return m && i("install_" + u + "_click", c)
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderVideoText
                            }, "\u4e0b\u8f7d", o)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderVideoText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderVideoText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", o)
                        },
                        installComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderVideoText
                            }, "\u5b89\u88c5", o)
                        },
                        installedComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.downloaderVideoText
                            }, "\u6253\u5f00", o)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        ee.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        te), Ue = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ve = (oe = ne = function(e) {
            function t() {
                return E(this, t),
                O(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return x(t, e),
            Ue(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = void 0 === n ? "" : n
                      , r = t.appName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[r] + " " + o
                    }, be.a.createElement(Te, {
                        name: r,
                        className: je.a.downloader + " " + je.a.downloaderSlider,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onOpenApp: a,
                        onBoss: i,
                        onExposeAction: function() {
                            return i("fixed_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("open_fixed_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("download_fixed_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_fixed_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_fixed_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_fixed_click")
                        },
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d")
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d\u4e2d")
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u7ee7\u7eed")
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5")
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00")
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        ne.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        oe), Ge = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), He = (ae = re = function(e) {
            function t() {
                return k(this, t),
                N(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return C(t, e),
            Ge(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.appDisplayText
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[n] + " " + je.a.downloaderWeibo
                    }, be.a.createElement(Te, {
                        name: n,
                        className: "" + je.a.downloader,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("weibo_bottom_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("weibo_bottom_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("weibo_bottom_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_weibo_bottom_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_weibo_bottom_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_weibo_bottom_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d", o, r)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5", o, r)
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00", o, r)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        re.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        ae), Ke = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), ze = (se = ie = function(e) {
            function t() {
                return j(this, t),
                P(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return T(t, e),
            Ke(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.appDisplayText
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[n] + " " + je.a.downloaderWenda
                    }, be.a.createElement(Te, {
                        name: n,
                        className: "" + je.a.downloader,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("qa_bottom_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("qa_bottom_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("qa_bottom_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_qa_bottom_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_qa_bottom_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_qa_bottom_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d", o, r)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5", o, r)
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00", o, r)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        ie.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        se), Qe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ye = (le = ce = function(e) {
            function t() {
                return A(this, t),
                I(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return S(t, e),
            Qe(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.appDisplayText
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[n] + " " + je.a.downloaderAnswer
                    }, be.a.createElement(Te, {
                        name: n,
                        className: "" + je.a.downloader,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("reply_bottom_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("reply_bottom_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("reply_bottom_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_reply_bottom_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_reply_bottom_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_reply_bottom_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u4e0b\u8f7d", o, r)
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6b63\u5728\u4e0b\u8f7d", o)
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u7ee7\u7eed\u4e0b\u8f7d", o)
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u5b89\u88c5", o, r)
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\u6253\u5f00", o, r)
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        ce.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        le), Je = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Xe = (pe = ue = function(e) {
            function t() {
                return B(this, t),
                D(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return L(t, e),
            Je(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.onOpenApp
                      , a = t.onBoss
                      , i = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderMediaTop,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onOpenApp: r,
                        onBoss: a,
                        onExposeAction: function() {},
                        onExposeOpenAction: function(e) {
                            a("open_follow_button_exposure", e)
                        },
                        onExposeDownloadAction: function(e) {
                            a("download_follow_button_exposure", e)
                        },
                        onClickOpenAction: function() {
                            return a("open_follow_button_click")
                        },
                        onClickDownloadAction: function() {
                            return a("download_follow_button_click")
                        },
                        onClickInstallAction: function() {
                            return a("install_follow_button_click")
                        },
                        preventDefaultAction: i,
                        pendingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\uff0b \u5173\u6ce8")
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\uff0b \u5173\u6ce8")
                        },
                        pausingComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\uff0b \u5173\u6ce8")
                        },
                        installComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\uff0b \u5173\u6ce8")
                        },
                        installedComponent: function() {
                            return be.a.createElement("span", {
                                className: je.a.downloaderText
                            }, "\uff0b \u5173\u6ce8")
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        ue.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        pe), Ze = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), $e = (de = fe = function(e) {
            function t() {
                return M(this, t),
                R(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return W(t, e),
            Ze(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.appDisplayName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction
                      , c = t.keyWords
                      , l = t.progressBarColor
                      , u = [];
                    return c.slice(0, 2).map(function(e) {
                        return u.push("\u300c" + e + "\u300d")
                    }),
                    be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderVideo,
                        ref: function(t) {
                            e.downloader = t
                        },
                        progressBarColor: l,
                        onExposeAction: function() {
                            return i("moreVideo_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("moreVideo_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("moreVideo_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_moreVideo_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_moreVideo_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_moreVideo_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoText
                            }, be.a.createElement("div", null, be.a.createElement("div", null, "\u4e0b\u8f7d", r, "\uff0c\u67e5\u770b\u66f4\u591a\u5173\u4e8e"), be.a.createElement("div", null, be.a.createElement("span", {
                                className: je.a.videoKeyWords
                            }, u), "\u7684\u89c6\u9891")), be.a.createElement("img", {
                                className: je.a.rightArrow,
                                src: "//mat1.gtimg.com/www/js/news/videoArrow.png",
                                alt: ">"
                            }))
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoText
                            }, be.a.createElement("div", null, be.a.createElement("div", null, "\u6b63\u5728\u4e0b\u8f7d", r, "\uff0c\u67e5\u770b\u66f4\u591a\u5173\u4e8e"), be.a.createElement("div", null, be.a.createElement("span", {
                                className: je.a.videoKeyWords
                            }, u), "\u7684\u89c6\u9891")), be.a.createElement("img", {
                                className: je.a.rightArrow,
                                src: "//mat1.gtimg.com/www/js/news/videoArrow.png",
                                alt: ">"
                            }))
                        },
                        pausingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoText
                            }, be.a.createElement("div", null, be.a.createElement("div", null, "\u7ee7\u7eed\u4e0b\u8f7d", r, "\uff0c\u67e5\u770b\u66f4\u591a\u5173\u4e8e"), be.a.createElement("div", null, be.a.createElement("span", {
                                className: je.a.videoKeyWords
                            }, u), "\u7684\u89c6\u9891")), be.a.createElement("img", {
                                className: je.a.rightArrow,
                                src: "//mat1.gtimg.com/www/js/news/videoArrow.png",
                                alt: ">"
                            }))
                        },
                        installComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoText
                            }, be.a.createElement("div", null, be.a.createElement("div", null, "\u5b89\u88c5", r, "\uff0c\u67e5\u770b\u66f4\u591a\u5173\u4e8e"), be.a.createElement("div", null, be.a.createElement("span", {
                                className: je.a.videoKeyWords
                            }, u), "\u7684\u89c6\u9891")), be.a.createElement("img", {
                                className: je.a.rightArrow,
                                src: "//mat1.gtimg.com/www/js/news/videoArrow.png",
                                alt: ">"
                            }))
                        },
                        installedComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoText
                            }, be.a.createElement("div", null, be.a.createElement("div", null, "\u524d\u5f80", r, "\uff0c\u67e5\u770b\u66f4\u591a\u5173\u4e8e"), be.a.createElement("div", null, be.a.createElement("span", {
                                className: je.a.videoKeyWords
                            }, u), "\u7684\u89c6\u9891")), be.a.createElement("img", {
                                className: je.a.rightArrow,
                                src: "//mat1.gtimg.com/www/js/news/videoArrow.png",
                                alt: ">"
                            }))
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        fe.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g,
            progressBarColor: "#E4F1FF"
        },
        de), et = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), tt = (he = me = function(e) {
            function t() {
                return F(this, t),
                q(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return U(t, e),
            et(t, [{
                key: "expose",
                value: function() {
                    this.downloader.expose()
                }
            }, {
                key: "click",
                value: function() {
                    this.downloader.click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.appName
                      , r = t.appDisplayName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , s = t.preventDefaultAction;
                    return be.a.createElement("div", {
                        className: je.a[o] + " " + n
                    }, be.a.createElement(Te, {
                        name: o,
                        className: je.a.downloader + " " + je.a.downloaderVideoFix,
                        ref: function(t) {
                            e.downloader = t
                        },
                        onExposeAction: function() {
                            return i("mian_video_exposure")
                        },
                        onExposeOpenAction: function() {
                            return i("mian_video_open_exposure")
                        },
                        onExposeDownloadAction: function() {
                            return i("mian_video_download_exposure")
                        },
                        onClickOpenAction: function() {
                            return i("open_mian_video_click")
                        },
                        onClickDownloadAction: function() {
                            return i("download_mian_video_click")
                        },
                        onClickInstallAction: function() {
                            return i("install_mian_video_click")
                        },
                        onOpenApp: a,
                        onBoss: i,
                        preventDefaultAction: s,
                        pendingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoFixText
                            }, be.a.createElement("img", {
                                className: je.a.shareIcon,
                                src: "//mat1.gtimg.com/www/js/news/videoIcon.png",
                                alt: ">"
                            }), be.a.createElement("div", null, "\u63d0\u53473\u500d\u6d41\u7545\u5ea6\uff0c\u4e0b\u8f7d", r))
                        },
                        downloadingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoFixText
                            }, be.a.createElement("img", {
                                className: je.a.shareIcon,
                                src: "//mat1.gtimg.com/www/js/news/videoIcon.png",
                                alt: ">"
                            }), be.a.createElement("div", null, "\u63d0\u53473\u500d\u6d41\u7545\u5ea6\uff0c\u6b63\u5728\u4e0b\u8f7d", r))
                        },
                        pausingComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoFixText
                            }, be.a.createElement("img", {
                                className: je.a.shareIcon,
                                src: "//mat1.gtimg.com/www/js/news/videoIcon.png",
                                alt: ">"
                            }), be.a.createElement("div", null, "\u63d0\u53473\u500d\u6d41\u7545\u5ea6\uff0c\u7ee7\u7eed\u4e0b\u8f7d", r))
                        },
                        installComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoFixText
                            }, be.a.createElement("img", {
                                className: je.a.shareIcon,
                                src: "//mat1.gtimg.com/www/js/news/videoIcon.png",
                                alt: ">"
                            }), be.a.createElement("div", null, "\u63d0\u53473\u500d\u6d41\u7545\u5ea6\uff0c\u5b89\u88c5", r))
                        },
                        installedComponent: function() {
                            return be.a.createElement("div", {
                                className: je.a.videoFixText
                            }, be.a.createElement("img", {
                                className: je.a.shareIcon,
                                src: "//mat1.gtimg.com/www/js/news/videoIcon.png",
                                alt: ">"
                            }), be.a.createElement("div", null, "\u63d0\u53473\u500d\u6d41\u7545\u5ea6\uff0c\u6253\u5f00", r))
                        }
                    }))
                }
            }]),
            t
        }(ge.PureComponent),
        me.defaultProps = {
            onOpenApp: Ne.g,
            onBoss: Ne.g
        },
        he);
        n.d(t, !1, function() {
            return Te
        }),
        n.d(t, "c", function() {
            return Ie
        }),
        n.d(t, "g", function() {
            return Be
        }),
        n.d(t, "b", function() {
            return Le
        }),
        n.d(t, "e", function() {
            return Re
        }),
        n.d(t, !1, function() {
            return qe
        }),
        n.d(t, "f", function() {
            return Ve
        }),
        n.d(t, "j", function() {
            return He
        }),
        n.d(t, "k", function() {
            return ze
        }),
        n.d(t, "a", function() {
            return Ye
        }),
        n.d(t, "d", function() {
            return Xe
        }),
        n.d(t, "h", function() {
            return $e
        }),
        n.d(t, "i", function() {
            return tt
        })
    },
    584: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var o = n(147)
          , r = n(73)
          , a = n(148)
          , i = n(648)
          , s = n(649)
          , c = n(650)
          , l = n(149)
          , u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , p = function() {
            function e(e, t) {
                var n = []
                  , o = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value),
                    !t || n.length !== t); o = !0)
                        ;
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , f = function(e) {
            var t = {};
            return Object.keys(e).forEach(function(n) {
                t["s_" + n] = e[n]
            }),
            t
        }
          , d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.appName
              , n = void 0 === t ? "news" : t
              , d = o.d.getOsInfo().os === o.b.IOS ? "iphone" : "android"
              , m = Object(s.a)()
              , h = m.groupid
              , v = void 0 === h ? "" : h
              , y = m.msgid
              , g = void 0 === y ? "" : y
              , b = m.dt
              , w = void 0 === b ? "" : b
              , _ = m.cv
              , E = void 0 === _ ? "" : _
              , O = m.refer
              , x = void 0 === O ? "" : O
              , k = m.n_ut
              , N = void 0 === k ? "" : k
              , C = m.bkt
              , j = void 0 === C ? "" : C
              , P = m.bat_id
              , T = m.grp_index
              , A = m.cur_pos
              , I = m.rate
              , S = m.grp_id
              , B = m.grp_type
              , D = m.pushid
              , L = m.ft
              , M = m.rg
              , R = m.cratype
              , W = N.split("_")
              , F = p(W, 2)
              , q = F[0]
              , U = F[1]
              , V = Object(r.i)()
              , G = void 0;
            return G = V ? V >= 605.007 ? 3 : V >= 605.006 ? 2 : 1 : 0,
            u({
                sIp: "",
                iQQ: Object(r.h)({
                    preferNumber: !0
                }),
                sQQ: Object(r.h)({
                    preferNumber: !1
                }),
                sBiz: "appnews.front.newsOpen",
                iSta: 0,
                iTy: 1702,
                iFlow: "",
                sOsType: d,
                sMsgId: g,
                sGroupId: v,
                sDt: w,
                sCv: E,
                sRefer: x,
                iReserved1: "kuaibao" === n ? 1 : 2,
                iReserveInt_1: "kuaibao" === n ? 1 : 2,
                iReserved2: "kuaibao" === n ? 1 : 2,
                sHitGray: 0,
                newHitGary: 0,
                ru: q,
                hm: U,
                bkt: j,
                isHitGray: 0,
                appInstallStatus: Object(a.b)(),
                network: Object(i.a)(),
                iAppFlag: G,
                tbkt: Object(l.c)(),
                bat_id: P,
                grp_index: T,
                rate: I,
                grp_id: S,
                pushid: D,
                cur_pos: A,
                ft: L,
                grp_type: B,
                rg: M,
                cratype: R
            }, f(Object(c.b)()))
        }
    },
    585: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        n.d(t, "a", function() {
            return g
        }),
        n.d(t, "b", function() {
            return b
        }),
        n.d(t, "d", function() {
            return w
        }),
        n.d(t, "c", function() {
            return _
        });
        var i, s, c = n(1), l = n.n(c), u = n(571), p = n.n(u), f = n(703), d = n.n(f), m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , h = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), v = function(e) {
            if (e) {
                var t = window.getComputedStyle(e, null)
                  , n = parseInt(t.lineHeight, 10)
                  , o = parseInt(t.height, 10);
                return {
                    lineHeight: n,
                    height: o,
                    lineCount: Math.round(o / n)
                }
            }
            return {}
        }, y = (s = i = function(e) {
            function t() {
                var e, n, a, i;
                o(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = a = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                a.state = {
                    isFull: !0,
                    height: 0
                },
                i = n,
                r(a, i)
            }
            return a(t, e),
            h(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.__checked = !1,
                    this.checkInitHeight(),
                    setTimeout(function() {
                        e.__checked = !0
                    }, 3e3)
                }
            }, {
                key: "checkInitHeight",
                value: function() {
                    var e = this;
                    if (!this.__checked) {
                        var t = this.props
                          , n = t.by
                          , o = t.maxHeight
                          , r = t.maxRows
                          , a = !1;
                        switch (n) {
                        case "height":
                            a = this.content && this.content.clientHeight > o;
                            break;
                        case "rows":
                            a = v(this.content).lineCount > r;
                            break;
                        case "force":
                            a = !0
                        }
                        a ? (this.__checked = !0,
                        this.setState(m({}, this.state, {
                            isFull: !1
                        }))) : setTimeout(function() {
                            e.checkInitHeight()
                        }, 100)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.by
                      , o = t.maxHeight
                      , r = t.maxRows
                      , a = t.onExpanded
                      , i = t.innerComponent
                      , s = t.outerComponent
                      , c = t.className
                      , u = void 0 === c ? "" : c
                      , p = t.theme
                      , f = void 0 === p ? "news" : p
                      , m = this.state.isFull
                      , h = {};
                    switch (n) {
                    case "height":
                        h = m ? {
                            maxHeight: "inherit",
                            overflowY: "inherit"
                        } : {
                            maxHeight: o + "px",
                            overflowY: "hidden"
                        };
                        break;
                    case "rows":
                        h = m ? {
                            WebkitBoxOrient: "normal",
                            WebkitLineClamp: "none"
                        } : {
                            display: "-webkit-box",
                            overflowY: "hidden",
                            textOverflow: "ellipsis",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: r
                        }
                    }
                    return l.a.createElement("div", {
                        className: u
                    }, l.a.createElement("div", {
                        ref: function(t) {
                            e.content = t
                        },
                        className: d.a.wrap,
                        style: h
                    }, this.props.children, !m && l.a.createElement(i, null)), !m && l.a.createElement("div", {
                        className: d.a.outer,
                        onClick: function() {
                            e.setState({
                                isFull: !0
                            }),
                            a()
                        }
                    }, l.a.createElement(s, {
                        theme: f
                    })))
                }
            }]),
            t
        }(c.PureComponent),
        i.defaultProps = {
            maxHeight: 300,
            maxRows: 5,
            innerComponent: function() {
                return null
            },
            outerComponent: function() {
                return null
            },
            onExpanded: function() {},
            by: "height"
        },
        s), g = function(e) {
            return l.a.createElement(y, m({}, e, {
                className: d.a.article,
                outerComponent: function() {
                    return l.a.createElement("div", null, l.a.createElement("div", {
                        className: d.a.whiteDiv
                    }), l.a.createElement("div", {
                        className: d.a.more
                    }, l.a.createElement("span", {
                        className: d.a.span + " " + d.a["theme-" + e.theme]
                    }, "\u70b9\u51fb\u67e5\u770b\u5168\u6587"), l.a.createElement("img", {
                        className: d.a.img,
                        src: "//mat1.gtimg.com/www/js/news/unfold-" + e.theme + ".png",
                        alt: ">"
                    })))
                },
                innerComponent: function() {
                    return l.a.createElement("div", {
                        className: d.a.cover
                    })
                }
            }))
        }, b = function(e) {
            return l.a.createElement(y, m({}, e, {
                className: d.a.text,
                by: "rows",
                outerComponent: function() {
                    return l.a.createElement("div", {
                        className: d.a.more
                    }, "\u5c55\u5f00")
                },
                innerComponent: function() {
                    return null
                }
            }))
        }, w = function(e) {
            return l.a.createElement(y, m({}, e, {
                className: d.a.article,
                by: "height",
                outerComponent: function() {
                    return l.a.createElement("div", null, l.a.createElement("div", {
                        className: d.a.whiteDiv
                    }), l.a.createElement("div", {
                        className: d.a.wendaMore
                    }, l.a.createElement("span", {
                        className: d.a.span
                    }, "\u5c55\u5f00\u5168\u6587"), l.a.createElement("img", {
                        className: d.a.img,
                        src: "//mat1.gtimg.com/www/js/news/more.png",
                        alt: ""
                    })))
                },
                innerComponent: function() {
                    return l.a.createElement("div", {
                        className: d.a.cover
                    })
                }
            }))
        }, _ = function(e) {
            return l.a.createElement(y, m({}, e, {
                className: d.a.article,
                by: "height",
                outerComponent: function() {
                    return l.a.createElement("div", null, l.a.createElement("div", {
                        className: d.a.whiteDiv
                    }), l.a.createElement("div", {
                        className: d.a.timelineMore
                    }, l.a.createElement("img", {
                        className: d.a.img,
                        src: "//mat1.gtimg.com/www/js/news/topic_arrow.png",
                        alt: ">"
                    })))
                },
                innerComponent: function() {
                    return l.a.createElement("div", {
                        className: p()(d.a.timelineCover, d.a.cover)
                    })
                }
            }))
        }
    },
    586: function(e, t, n) {
        "use strict";
        function o(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        function r(e, t) {
            var n = null
              , o = null
              , r = this
              , a = function() {
                e.apply(r, o),
                n = null
            };
            return function() {
                n || (o = arguments,
                n = setTimeout(a, t))
            }
        }
        n.d(t, "a", function() {
            return p
        }),
        n.d(t, "b", function() {
            return d
        });
        var a = n(1)
          , i = (n.n(a),
        Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )
          , s = (Object.assign,
        function(e) {
            return 0 === a.Children.count(e)
        }
        )
          , c = !1
          , l = function() {};
        try {
            var u = Object.defineProperty({}, "passive", {
                get: function() {
                    c = !0
                }
            });
            window.addEventListener("testPassive", l, u),
            window.removeEventListener("testPassive", l, u)
        } catch (e) {}
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    x: 0,
                    y: 0
                },
                t.handleWindowScroll = r(function() {
                    t.setState({
                        x: window.scrollX,
                        y: window.scrollY
                    })
                }, t.props.throttle),
                t
            }
            return o(t, e),
            t.prototype.componentDidMount = function() {
                this.handleWindowScroll(),
                window.addEventListener("scroll", this.handleWindowScroll, !!c && {
                    passive: !0
                })
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("scroll", this.handleWindowScroll)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
            ,
            t.defaultProps = {
                throttle: 100
            },
            t
        }(a.Component)
          , f = (Object.getOwnPropertySymbols,
        Object.prototype.propertyIsEnumerable,
        Object.getPrototypeOf)
          , d = (f && f(Object),
        Object.getOwnPropertyNames,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    acceleration: {
                        x: null,
                        y: null,
                        z: null
                    },
                    accelerationIncludingGravity: {
                        x: null,
                        y: null,
                        z: null
                    },
                    rotationRate: {
                        alpha: null,
                        beta: null,
                        gamma: null
                    },
                    interval: 0
                },
                t.handleDeviceMotion = function(e) {
                    t.setState({
                        acceleration: e.acceleration,
                        accelerationIncludingGravity: e.accelerationIncludingGravity,
                        rotationRate: e.rotationRate,
                        interval: e.interval
                    })
                }
                ,
                t
            }
            o(t, e),
            t.prototype.componentDidMount = function() {
                window.addEventListener("devicemotion", this.handleDeviceMotion, !0)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("devicemotion", this.handleDeviceMotion)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
        }(a.Component),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    alpha: null,
                    beta: null,
                    gamma: null,
                    absolute: !1
                },
                t.handleDeviceOrientation = function(e) {
                    t.setState({
                        beta: e.beta,
                        alpha: e.alpha,
                        gamma: e.gamma,
                        absolute: e.absolute
                    })
                }
                ,
                t
            }
            o(t, e),
            t.prototype.componentDidMount = function() {
                window.addEventListener("deviceorientation", this.handleDeviceOrientation, !0)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("deviceorientation", this.handleDeviceOrientation)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
        }(a.Component),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    online: !1
                },
                t.handleOnline = function() {
                    t.setState({
                        online: !0,
                        offlineAt: void 0
                    })
                }
                ,
                t.handleOffline = function() {
                    t.setState({
                        online: !1,
                        offlineAt: new Date
                    })
                }
                ,
                t
            }
            o(t, e),
            t.prototype.componentDidMount = function() {
                window.addEventListener("online", this.handleOnline),
                window.addEventListener("offline", this.handleOffline)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("online", this.handleOnline),
                window.removeEventListener("offline", this.handleOffline)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
        }(a.Component),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isLoading: !0
                },
                t.requestGeo = function() {
                    t.setState({
                        isLoading: !0
                    }),
                    t.geoId = navigator.geolocation.watchPosition(function(e) {
                        return t.setState({
                            isLoading: !1,
                            coords: {
                                latitude: e.coords.latitude,
                                longitude: e.coords.longitude
                            },
                            error: void 0
                        })
                    }, function(e) {
                        return t.setState({
                            error: e,
                            isLoading: !1
                        })
                    })
                }
                ,
                t
            }
            o(t, e),
            t.prototype.componentDidMount = function() {
                this.requestGeo()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                navigator.geolocation.clearWatch(this.geoId)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
        }(a.Component),
        n(694),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    width: 0,
                    height: 0
                },
                t.handleWindowSize = r(function() {
                    t.setState({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }, t.props.throttle),
                t
            }
            return o(t, e),
            t.prototype.componentDidMount = function() {
                this.handleWindowSize(),
                window.addEventListener("resize", this.handleWindowSize)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("resize", this.handleWindowSize)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
            ,
            t.defaultProps = {
                throttle: 100
            },
            t
        }(a.Component));
        !function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    locale: t.preferredLocales()
                },
                t.handleLanguageChange = function() {
                    t.setState({
                        locale: t.preferredLocales()
                    })
                }
                ,
                t
            }
            o(t, e),
            t.prototype.preferredLocales = function() {
                return navigator.languages && navigator.languages.length > 0 ? Intl.getCanonicalLocales(navigator.languages)[0] : Intl.getCanonicalLocales([navigator.language])[0]
            }
            ,
            t.prototype.componentDidMount = function() {
                window.addEventListener("languagechange", this.handleLanguageChange)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                window.removeEventListener("languagechange", this.handleLanguageChange)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.render
                  , n = e.component
                  , o = e.children;
                return n ? Object(a.createElement)(n, this.state) : t ? t(this.state) : o ? "function" === typeof o ? o(this.state) : s(o) ? null : a.Children.only(o) : null
            }
        }(a.Component)
    },
    587: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(653);
        Object.defineProperty(t, "autoPlay", {
            enumerable: !0,
            get: function() {
                return o(r).default
            }
        });
        var a = n(655);
        Object.defineProperty(t, "bindKeyboard", {
            enumerable: !0,
            get: function() {
                return o(a).default
            }
        });
        var i = n(664);
        Object.defineProperty(t, "virtualize", {
            enumerable: !0,
            get: function() {
                return o(i).default
            }
        })
    },
    588: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function c(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var l = n(1)
          , u = n.n(l)
          , p = n(708)
          , f = n.n(p)
          , d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , m = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.preV = {
                    x: null,
                    y: null
                },
                n.pinchStartLen = null,
                n.scale = 1,
                n.isDoubleTap = !1,
                n.delta = null,
                n.last = null,
                n.now = null,
                n.end = null,
                n.multiTouch = !1,
                n.tapTimeout = null,
                n.longTapTimeout = null,
                n.singleTapTimeout = null,
                n.swipeTimeout = null,
                n.x1 = null,
                n.x2 = null,
                n.y1 = null,
                n.y2 = null,
                n.preTapPosition = {
                    x: null,
                    y: null
                },
                n.afterLongTap = !1,
                n.afterLongTapTimeout = null,
                n
            }
            return a(t, e),
            d(t, [{
                key: "getLen",
                value: function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                }
            }, {
                key: "getAngle",
                value: function(e, t) {
                    var n = this.getLen(e) * this.getLen(t);
                    if (0 === n)
                        return 0;
                    var o = this.dot(e, t) / n;
                    return o > 1 && (o = 1),
                    Math.acos(o)
                }
            }, {
                key: "getRotateAngle",
                value: function(e, t) {
                    var n = this.getAngle(e, t);
                    return this.cross(e, t) > 0 && (n *= -1),
                    180 * n / Math.PI
                }
            }, {
                key: "dot",
                value: function(e, t) {
                    return e.x * t.x + e.y * t.y
                }
            }, {
                key: "cross",
                value: function(e, t) {
                    return e.x * t.y - t.x * e.y
                }
            }, {
                key: "_resetState",
                value: function() {
                    this.setState({
                        x: null,
                        y: null,
                        swiping: !1,
                        start: 0
                    })
                }
            }, {
                key: "_emitEvent",
                value: function(e) {
                    if (this.props[e]) {
                        for (var t, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            o[r - 1] = arguments[r];
                        (t = this.props)[e].apply(t, o)
                    }
                }
            }, {
                key: "_handleTouchStart",
                value: function(e) {
                    var t = this
                      , n = e;
                    if (n.touches) {
                        this.now = Date.now(),
                        this.x1 = n.touches[0].pageX,
                        this.y1 = n.touches[0].pageY,
                        this.delta = this.now - (this.last || this.now),
                        null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30),
                        this.preTapPosition.x = this.x1,
                        this.preTapPosition.y = this.y1,
                        this.last = this.now;
                        var o = this.preV;
                        if (n.touches.length > 1) {
                            this._cancelLongTap(),
                            this._cancelSingleTap();
                            var r = {
                                x: n.touches[1].pageX - this.x1,
                                y: n.touches[1].pageY - this.y1
                            };
                            o.x = r.x,
                            o.y = r.y,
                            this.pinchStartLen = this.getLen(o),
                            this._emitEvent("onMultipointStart", n)
                        }
                        this.longTapTimeout = setTimeout(function() {
                            t._emitEvent("onLongTap", n),
                            t.afterLongTap = !0,
                            t.afterLongTapTimeout = setTimeout(function() {
                                t.afterLongTap = !1
                            }, 1e3)
                        }, 750)
                    }
                }
            }, {
                key: "_handleTouchMove",
                value: function(e) {
                    var t = e
                      , n = this.preV
                      , o = t.touches.length
                      , r = t.touches[0].pageX
                      , a = t.touches[0].pageY;
                    if (this.isDoubleTap = !1,
                    o > 1) {
                        var i = {
                            x: t.touches[1].pageX - r,
                            y: t.touches[1].pageY - a
                        };
                        null !== n.x && (this.pinchStartLen > 0 && (t.center = {
                            x: (t.touches[1].pageX + r) / 2,
                            y: (t.touches[1].pageY + a) / 2
                        },
                        t.scale = this.getLen(i) / this.pinchStartLen,
                        this._emitEvent("onPinch", t)),
                        t.angle = this.getRotateAngle(i, n),
                        this._emitEvent("onRotate", t)),
                        n.x = i.x,
                        n.y = i.y,
                        this.multiTouch = !0
                    } else
                        null !== this.x2 ? (t.deltaX = r - this.x2,
                        t.deltaY = a - this.y2) : (t.deltaX = 0,
                        t.deltaY = 0),
                        this._emitEvent("onPressMove", t);
                    this._cancelLongTap(),
                    this.x2 = r,
                    this.y2 = a,
                    o > 1 && t.preventDefault()
                }
            }, {
                key: "_handleTouchCancel",
                value: function() {
                    clearInterval(this.singleTapTimeout),
                    clearInterval(this.tapTimeout),
                    clearInterval(this.longTapTimeout),
                    clearInterval(this.swipeTimeout)
                }
            }, {
                key: "_handleTouchEnd",
                value: function(e) {
                    var t = this
                      , n = e;
                    this.end = Date.now(),
                    this._cancelLongTap(),
                    n.touches.length < 2 && this._emitEvent("onMultipointEnd", n),
                    n.origin = [this.x1, this.y1],
                    !1 === this.multiTouch && ((this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.preV.y - this.y2) > 30) && (n.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2),
                    n.distance = Math.abs(this.x1 - this.x2),
                    this.swipeTimeout = setTimeout(function() {
                        t._emitEvent("onSwipe", n)
                    }, 0)),
                    this.afterLongTap ? (clearTimeout(this.afterLongTapTimeout),
                    this.afterLongTap = !1) : this.tapTimeout = setTimeout(function() {
                        t._emitEvent("onTap", n),
                        t.isDoubleTap ? (t._emitEvent("onDoubleTap", n),
                        clearTimeout(t.singleTapTimeout),
                        t.isDoubleTap = !1) : t.singleTapTimeout = setTimeout(function() {
                            t._emitEvent("onSingleTap", n)
                        }, 250)
                    }, 0)),
                    this.preV.x = 0,
                    this.preV.y = 0,
                    this.scale = 1,
                    this.pinchStartLen = null,
                    this.x1 = null,
                    this.x2 = null,
                    this.y1 = null,
                    this.y2 = null,
                    this.multiTouch = !1
                }
            }, {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout)
                }
            }, {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout)
                }
            }, {
                key: "_swipeDirection",
                value: function(e, t, n, o) {
                    if (Math.abs(e - t) > 80 || this.end - this.now < 250) {
                        var r = e - t > 0 ? "Left" : "Right"
                          , a = n - o > 0 ? "Up" : "Down";
                        return Math.abs(e - t) >= Math.abs(n - o) ? r : a
                    }
                    return "Nochange"
                }
            }, {
                key: "render",
                value: function() {
                    return u.a.cloneElement(u.a.Children.only(this.props.children), {
                        onTouchStart: this._handleTouchStart.bind(this),
                        onTouchMove: this._handleTouchMove.bind(this),
                        onTouchCancel: this._handleTouchCancel.bind(this),
                        onTouchEnd: this._handleTouchEnd.bind(this)
                    })
                }
            }]),
            t
        }(l.Component);
        n.d(t, "a", function() {
            return b
        });
        var h, v, y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , g = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), b = (v = h = function(e) {
            function t() {
                var e, n, o, r;
                i(this, t);
                for (var a = arguments.length, c = Array(a), l = 0; l < a; l++)
                    c[l] = arguments[l];
                return n = o = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                o.state = {
                    showFullScreen: !1,
                    activeSlide: 0
                },
                r = n,
                s(o, r)
            }
            return c(t, e),
            g(t, [{
                key: "onChildChange",
                value: function(e) {
                    var t = this.props.images
                      , n = t.length;
                    "Left" === e ? this.setState(y({}, this.state, {
                        activeSlide: Math.min(n - 1, this.state.activeSlide + 1)
                    })) : "Right" === e && this.setState(y({}, this.state, {
                        activeSlide: Math.max(0, this.state.activeSlide - 1)
                    }))
                }
            }, {
                key: "onImgClose",
                value: function() {
                    this.setState(y({}, this.state, {
                        showFullScreen: !this.state.showFullScreen
                    }))
                }
            }, {
                key: "show",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.setState(function(t) {
                        return y({}, t, {
                            showFullScreen: !0,
                            activeSlide: e
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.images
                      , o = t.imagesPreview
                      , r = t.showNav
                      , a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                      , i = this.state
                      , s = i.activeSlide
                      , c = i.showFullScreen;
                    if (!c)
                        return null;
                    var l = n.map(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments[1];
                        return u.a.createElement("div", {
                            className: f.a.wrapper,
                            style: {
                                height: a
                            },
                            key: t
                        }, u.a.createElement("div", {
                            className: f.a.scroller,
                            style: {
                                backgroundImage: "url(" + o[t] + ")",
                                lineHeight: a + "px"
                            },
                            "data-active": t === s
                        }, u.a.createElement("img", {
                            src: e,
                            alt: ""
                        })))
                    });
                    return u.a.createElement("div", {
                        className: f.a.fullScreen,
                        style: {
                            display: c ? "block" : "none"
                        }
                    }, u.a.createElement("div", {
                        className: f.a.imgFullScreen
                    }, u.a.createElement(m, {
                        onSwipe: function(t) {
                            return e.onChildChange(t.direction)
                        }
                    }, u.a.createElement("div", {
                        className: "coverDiv",
                        onClick: function(t) {
                            t.stopPropagation(),
                            t.preventDefault(),
                            e.onImgClose()
                        }
                    }, l))), r && u.a.createElement("div", {
                        className: f.a.ctrlbarNum + " " + f.a.ctrlbar
                    }, u.a.createElement("span", null, s + 1), u.a.createElement("span", null, "/", n.length)))
                }
            }]),
            t
        }(l.PureComponent),
        h.defaultProps = {
            showNav: !0,
            images: [],
            imagesPreview: []
        },
        v)
    },
    589: function(e, t, n) {
        "use strict";
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function i(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function s(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function u(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function p(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function f(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function m(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function h(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }
        function v(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function y(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function g(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function b(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function w(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function _(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function E(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function O(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function x(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var k, N, C, j, P, T, A, I, S, B, D = n(65), L = n.n(D), M = n(1), R = n.n(M), W = n(711), F = n.n(W), q = n(569), U = n(583), V = n(23), G = n(35), H = n.n(G), K = n(212), z = n.n(K), Q = n(587), Y = n(211), J = n(149), X = n(575), Z = n(601), $ = n(73), ee = n(712), te = n.n(ee), ne = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , oe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), re = Object(Q.autoPlay)(Object(Q.virtualize)(z.a)), ae = (N = k = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = o = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                o.state = {
                    recommend: [],
                    indexNum: 0
                },
                o.handleChangeIndex = function(e) {
                    var t = e % (o.state.recommend.length + 1);
                    o.setState(function(t) {
                        return ne({}, t, {
                            indexNum: e
                        })
                    }, function() {
                        var e = o.props.onExpose
                          , n = o.state
                          , r = n.ad
                          , a = n.recommend
                          , i = void 0;
                        r && r.length > 0 ? i = t < r.length ? r[t].id : a[t - 1].id : t > 0 && (i = a[t - 1].id),
                        e({
                            index: t,
                            newsId: i
                        })
                    })
                }
                ,
                i = n,
                a(o, i)
            }
            return i(t, e),
            oe(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = o(L.a.mark(function e() {
                        var t, n, o, r;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.props,
                                    n = t.newsId,
                                    o = t.onLoad,
                                    r = t.getRelated,
                                    !r) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.prev = 2,
                                    e.next = 5,
                                    this.__fetchData({
                                        newsId: n
                                    });
                                case 5:
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(2),
                                    console.error(e.t0);
                                case 10:
                                    return e.prev = 10,
                                    e.next = 13,
                                    Object(V.f)();
                                case 13:
                                    return o(this.state.recommend.length),
                                    e.finish(10);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[2, 7, 10, 15]])
                    }));
                    return e
                }()
            }, {
                key: "__fetchData",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = o(L.a.mark(function e(t) {
                        var n, o, r, a, i, s, c, l = this, u = t.newsId;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = this.props,
                                    o = n.path,
                                    r = n.onExpose,
                                    a = {
                                        id: u,
                                        alg_version: 1,
                                        source: "news",
                                        tbkt: Object(J.c)(),
                                        openid: Object($.h)({
                                            preferNumber: !1
                                        }),
                                        path: o
                                    },
                                    e.next = 4,
                                    Object(Y.a)("/getNewRelateRecomm?" + H.a.stringify(a));
                                case 4:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {};
                                case 7:
                                    i = e.t0,
                                    s = i.hot,
                                    c = i.ad,
                                    s || (s = []),
                                    c || (c = []),
                                    s && this.setState(ne({}, this.state, {
                                        recommend: s.map(function(e) {
                                            return e.imgurl = e.thumbnails_qqnews,
                                            e
                                        }),
                                        ad: c,
                                        ready: !0
                                    }), function() {
                                        var e = l.state.ad;
                                        r({
                                            index: 0,
                                            newsId: e.length > 0 ? e[0].id : void 0
                                        })
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "renderLogoCover",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments[1]
                      , n = this.props
                      , o = n.appName
                      , r = n.smallText
                      , a = "news" === o ? "\u817e\u8baf\u65b0\u95fb" : "\u5929\u5929\u5feb\u62a5"
                      , i = void 0;
                    "kuaibao" === o ? i = "\u817e\u8baf\u5174\u8da3\u9605\u8bfb\u4ea7\u54c1" : 0 !== r.length && (i = r);
                    var s = e.imgurl
                      , c = e.title;
                    return R.a.createElement("div", {
                        className: te.a.newsDiv,
                        key: t
                    }, R.a.createElement("img", {
                        className: te.a.logo,
                        src: s || "//mat1.gtimg.com/www/js/news/logo-" + o + ".png",
                        alt: " "
                    }), R.a.createElement("div", {
                        className: te.a.text
                    }, R.a.createElement("div", {
                        className: te.a.logoText
                    }, a), Boolean(c || i) && R.a.createElement("div", {
                        className: te.a.logoText2
                    }, c || i)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.indexNum
                      , o = t.recommend
                      , r = t.ad
                      , a = void 0 === r ? [] : r
                      , i = t.ready
                      , s = void 0 !== i && i
                      , c = this.props.isVideoSharePage
                      , l = o.length + 1;
                    if (1 === l)
                        return a && a.length > 0 ? this.renderLogoCover(a[0], 0) : this.renderLogoCover();
                    var u = function(t) {
                        var n = t.index
                          , r = (n + l) % l;
                        return a.length > 0 && r < a.length ? e.renderLogoCover(a[r], n) : 0 === r ? e.renderLogoCover({}, n) : R.a.createElement("div", {
                            className: te.a.newsDiv,
                            key: n
                        }, R.a.createElement("div", {
                            className: te.a.newsImg
                        }, R.a.createElement(X.a, {
                            src: o[r - 1].thumbnails_qqnews[0],
                            alt: "\u817e\u8baf\u65b0\u95fb"
                        }, R.a.createElement("div", {
                            style: {
                                display: c ? "block" : "none"
                            },
                            className: te.a["mask-container"]
                        }, R.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/big-video-play.png",
                            alt: "\u64ad\u653e",
                            className: te.a["mask-videoIcon"]
                        })))), R.a.createElement("div", {
                            className: te.a.newsTitle
                        }, o[r - 1].title))
                    };
                    return s ? R.a.createElement(M.Fragment, null, R.a.createElement(re, {
                        slideRenderer: u,
                        index: n,
                        onChangeIndex: this.handleChangeIndex,
                        interval: 3e3,
                        slideCount: 5e4,
                        overscanSlideAfter: 1,
                        overscanSlideBefore: 1,
                        style: {
                            flex: 1,
                            overflow: "hidden"
                        },
                        slideStyle: {
                            display: "flex"
                        }
                    }), R.a.createElement(Z.a, {
                        className: te.a.pagination,
                        dots: l,
                        index: n % l,
                        onChangeIndex: this.handleChangeIndex
                    })) : null
                }
            }]),
            t
        }(M.PureComponent),
        k.defaultProps = {
            onExpose: V.g,
            onLoad: V.g,
            getRelated: !0,
            smallText: ""
        },
        N), ie = n(713), se = n.n(ie), ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , le = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), ue = (j = C = function(e) {
            function t(e) {
                c(this, t);
                var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.__length = new Promise(function(e, t) {
                    n.__lengthResolveCallback = e
                }
                ),
                n.state = {
                    newsId: void 0,
                    fixedBottom: 0
                },
                n.hideSlider = n.hideSlider.bind(n),
                n.debounceShowSlider = F()(n.showSlider, 3e3).bind(n),
                n
            }
            return u(t, e),
            le(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.props.hideOnScroll && setTimeout(function() {
                        window.addEventListener("scroll", e.hideSlider),
                        window.addEventListener("scroll", e.debounceShowSlider)
                    }, 100)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.hideOnScroll && (this.__unmount = !0,
                    window.removeEventListener("scroll", this.hideSlider),
                    window.removeEventListener("scroll", this.debounceShowSlider))
                }
            }, {
                key: "hideSlider",
                value: function() {
                    this.__unmount || "-60px" !== this.state.fixedBottom && this.setState(ce({}, this.state, {
                        fixedBottom: "-60px"
                    }))
                }
            }, {
                key: "showSlider",
                value: function() {
                    this.__unmount || this.setState(ce({}, this.state, {
                        fixedBottom: 0
                    }))
                }
            }, {
                key: "__onExposeItem",
                value: function(e) {
                    var t = e.newsId;
                    this.setState(function(e) {
                        return ce({}, e, {
                            newsId: t
                        })
                    })
                }
            }, {
                key: "__onBoss",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = s(L.a.mark(function e(t, n) {
                        var o, r;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = this.props.onBoss,
                                    e.next = 3,
                                    this.__length;
                                case 3:
                                    r = e.sent,
                                    o(t, ce({}, n, {
                                        fixedLen: r
                                    }));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__onOpenApp",
                value: function() {
                    var e = this.props
                      , t = e.onOpenApp
                      , n = e.onOpenAppNews
                      , o = this.state.newsId;
                    o ? n({
                        newsId: o
                    }) : t()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.getRelated
                      , a = t.onBoss
                      , i = this.state.fixedBottom;
                    return R.a.createElement(q.b, {
                        onExpose: function() {
                            return e.downloader.expose()
                        },
                        onClick: function() {
                            return e.downloader.click()
                        }
                    }, R.a.createElement("div", {
                        className: se.a.content + " " + se.a["theme-" + n],
                        style: {
                            bottom: i
                        }
                    }, R.a.createElement(ae, ce({}, this.props, {
                        onExpose: function(t, n) {
                            return e.__onExposeItem(t, n)
                        },
                        onLoad: function(t) {
                            return e.__lengthResolveCallback(t)
                        },
                        getRelated: r
                    })), R.a.createElement("div", {
                        className: se.a.downloader
                    }, R.a.createElement(U.f, {
                        appName: n,
                        appDisplayName: o,
                        onBoss: function() {
                            return a.apply(void 0, arguments)
                        },
                        onOpenApp: function() {
                            return e.__onOpenApp()
                        },
                        preventDefaultAction: !0,
                        ref: function(t) {
                            e.downloader = t
                        }
                    })), R.a.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: "\n            body {\n              padding-bottom: 59px;\n            }\n          "
                        }
                    })))
                }
            }]),
            t
        }(M.PureComponent),
        C.defaultProps = {
            onBoss: V.g,
            onOpenApp: V.g,
            onOpenAppNews: V.g
        },
        j), pe = n(578), fe = n(714), de = n.n(fe), me = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , he = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), ve = Object(Q.autoPlay)(Object(Q.virtualize)(z.a)), ye = (T = P = function(e) {
            function t() {
                var e, n, o, r;
                f(this, t);
                for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
                    i[s] = arguments[s];
                return n = o = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    recommend: [],
                    indexNum: 0
                },
                o.handleChangeIndex = function(e) {
                    var t = e % (o.state.recommend.length + 1);
                    o.setState(function(t) {
                        return me({}, t, {
                            indexNum: e
                        })
                    }, function() {
                        var e = o.props.onExpose
                          , n = o.state
                          , r = n.ad
                          , a = n.recommend
                          , i = void 0;
                        r && r.length > 0 ? i = t < r.length ? r[t].id : a[t - 1].id : t > 0 && (i = a[t - 1].id),
                        e({
                            index: t,
                            newsId: i
                        })
                    })
                }
                ,
                r = n,
                d(o, r)
            }
            return m(t, e),
            he(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = p(L.a.mark(function e() {
                        var t, n, o, r;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.props,
                                    n = t.newsId,
                                    o = t.onLoad,
                                    r = t.getRelated,
                                    !r) {
                                        e.next = 16;
                                        break
                                    }
                                    if (e.prev = 2,
                                    "undefined" === typeof n) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6,
                                    this.__fetchData({
                                        newsId: n
                                    });
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(2),
                                    console.error(e.t0);
                                case 11:
                                    return e.prev = 11,
                                    e.next = 14,
                                    Object(V.f)();
                                case 14:
                                    return o(this.state.recommend.length),
                                    e.finish(11);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[2, 8, 11, 16]])
                    }));
                    return e
                }()
            }, {
                key: "__fetchData",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = p(L.a.mark(function e(t) {
                        var n, o, r, a, i, s, c, l = this, u = t.newsId;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = this.props,
                                    o = n.path,
                                    r = n.onExpose,
                                    a = {
                                        id: u,
                                        alg_version: 1,
                                        source: "news",
                                        tbkt: Object(J.c)(),
                                        openid: Object($.h)({
                                            preferNumber: !1
                                        }),
                                        path: o
                                    },
                                    e.next = 4,
                                    Object(Y.a)("/getNewRelateRecomm?" + H.a.stringify(a));
                                case 4:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {};
                                case 7:
                                    i = e.t0,
                                    s = i.hot,
                                    c = i.ad,
                                    s || (s = []),
                                    c || (c = []),
                                    s && this.setState(me({}, this.state, {
                                        recommend: s.map(function(e) {
                                            return e.imgurl = e.thumbnails_qqnews,
                                            e
                                        }),
                                        ad: c,
                                        ready: !0
                                    }), function() {
                                        var e = l.state.ad;
                                        r({
                                            index: 0,
                                            newsId: e.length > 0 ? e[0].id : void 0
                                        })
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "renderLogoCover",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments[1]
                      , n = this.props
                      , o = n.appName
                      , r = n.smallText
                      , a = e.imgurl
                      , i = e.title;
                    return R.a.createElement("div", {
                        className: de.a.newsDiv,
                        key: t
                    }, R.a.createElement("img", {
                        className: de.a.logo,
                        src: a || "//mat1.gtimg.com/www/js/news/logo-" + o + ".png",
                        alt: " "
                    }), R.a.createElement("div", {
                        className: de.a.text
                    }, R.a.createElement("div", {
                        className: i || r ? de.a.logoTextSmall : de.a.logoText
                    }, "\u817e\u8baf\u65b0\u95fb"), Boolean(i || r) && R.a.createElement("div", {
                        className: de.a.smallText
                    }, i || r)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.indexNum
                      , o = t.recommend
                      , r = t.ad
                      , a = void 0 === r ? [] : r
                      , i = t.ready
                      , s = void 0 !== i && i
                      , c = this.props.isVideoSharePage
                      , l = o.length + 1;
                    if (1 === l)
                        return a && a.length > 0 ? this.renderLogoCover(a[0], 0) : this.renderLogoCover();
                    var u = function(t) {
                        var n = t.index
                          , r = (n + l) % l;
                        return a.length > 0 && r < a.length ? e.renderLogoCover(a[r], n) : 0 === r ? e.renderLogoCover({}, n) : R.a.createElement("div", {
                            className: de.a.newsDiv,
                            key: n
                        }, R.a.createElement("div", {
                            className: de.a.newsImg
                        }, R.a.createElement(X.a, {
                            src: o[r - 1].thumbnails_qqnews && o[r - 1].thumbnails_qqnews[0],
                            alt: "\u817e\u8baf\u65b0\u95fb"
                        }, R.a.createElement("div", {
                            style: {
                                display: c ? "block" : "none"
                            },
                            className: de.a["mask-container"]
                        }, R.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/big-video-play.png",
                            alt: "\u64ad\u653e",
                            className: de.a["mask-videoIcon"]
                        })))), R.a.createElement("div", {
                            className: de.a.newsTitle
                        }, o[r - 1].title))
                    };
                    return s ? [R.a.createElement(ve, {
                        slideRenderer: u,
                        index: n,
                        onChangeIndex: this.handleChangeIndex,
                        interval: 3e3,
                        slideCount: 5e4,
                        overscanSlideAfter: 1,
                        overscanSlideBefore: 1,
                        style: {
                            flex: 1,
                            overflow: "hidden"
                        },
                        slideStyle: {
                            display: "flex"
                        }
                    }), R.a.createElement(Z.a, {
                        className: de.a.pagination,
                        theme: "paginationTop",
                        dots: l,
                        index: n % l,
                        onChangeIndex: this.handleChangeIndex
                    })] : null
                }
            }]),
            t
        }(M.PureComponent),
        P.defaultProps = {
            onExpose: V.g,
            onLoad: V.g,
            getRelated: !0
        },
        T), ge = n(715), be = n.n(ge), we = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , _e = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ee = (I = A = function(e) {
            function t(e) {
                v(this, t);
                var n = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    hideSliderFriend: !1
                },
                n.__length = new Promise(function(e, t) {
                    n.__lengthResolveCallback = e
                }
                ),
                n.state = {
                    newsId: void 0
                },
                n
            }
            return g(t, e),
            _e(t, [{
                key: "onSliderClose",
                value: function() {
                    this.setState({
                        hideSliderFriend: !0
                    })
                }
            }, {
                key: "__onExposeItem",
                value: function(e) {
                    var t = e.newsId;
                    this.setState(function(e) {
                        return we({}, e, {
                            newsId: t
                        })
                    })
                }
            }, {
                key: "__onBoss",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = h(L.a.mark(function e(t, n) {
                        var o, r;
                        return L.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = this.props.onBoss,
                                    e.next = 3,
                                    this.__length;
                                case 3:
                                    r = e.sent,
                                    o(t, we({}, n, {
                                        fixedLen: r
                                    }));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__onOpenApp",
                value: function() {
                    var e = this.props
                      , t = e.onOpenApp
                      , n = e.onOpenAppNews
                      , o = this.state.newsId;
                    o ? n({
                        newsId: o
                    }) : t()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , o = t.appDisplayName
                      , r = t.getRelated;
                    return this.state.hideSliderFriend ? null : R.a.createElement("div", {
                        className: be.a.content + " " + be.a["theme-" + n]
                    }, R.a.createElement(ye, we({}, this.props, {
                        onExpose: function(t, n) {
                            return e.__onExposeItem(t, n)
                        },
                        onLoad: function(t) {
                            return e.__lengthResolveCallback(t)
                        },
                        getRelated: r
                    })), R.a.createElement("div", {
                        className: be.a.downloader
                    }, R.a.createElement(pe.k, {
                        appName: n,
                        appDisplayName: o,
                        onBoss: function() {
                            return e.__onBoss.apply(e, arguments)
                        },
                        onOpenApp: function() {
                            return e.__onOpenApp()
                        }
                    })), R.a.createElement("div", {
                        onClick: function() {
                            e.onSliderClose()
                        },
                        className: be.a.exit
                    }, R.a.createElement("img", {
                        className: be.a.exitIcon,
                        src: "//mat1.gtimg.com/www/js/news/dialog-confirm-close.png",
                        alt: "x"
                    })), R.a.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: "\n          body {\n            padding-bottom: 0.55rem;\n          }\n        "
                        }
                    }))
                }
            }]),
            t
        }(M.PureComponent),
        A.defaultProps = {
            onBoss: V.g,
            onOpenApp: V.g,
            onOpenAppNews: V.g
        },
        I), Oe = n(586), xe = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        , ke = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ne = function(e) {
            function t() {
                var e, n, o, r;
                b(this, t);
                for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
                    i[s] = arguments[s];
                return n = o = w(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    scrollY: 1e5,
                    direction: "up"
                },
                r = n,
                w(o, r)
            }
            return _(t, e),
            ke(t, [{
                key: "componentWillMount",
                value: function() {
                    this.__update(this.props.y)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.__update(e.y)
                }
            }, {
                key: "__update",
                value: function(e) {
                    var t = this.state.scrollY;
                    e >= 0 && e <= document.body.offsetHeight - document.documentElement.clientHeight && (e > t ? this.setState({
                        scrollY: e,
                        direction: "down"
                    }) : e < t && this.setState({
                        scrollY: e,
                        direction: "up"
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.y;
                    return (0,
                    e.children)({
                        direction: this.state.direction,
                        y: t
                    })
                }
            }]),
            t
        }(M.PureComponent), Ce = function(e) {
            return R.a.createElement(Oe.a, {
                render: function(t) {
                    var n = t.y;
                    return R.a.createElement(Ne, xe({
                        y: n
                    }, e))
                }
            })
        }, je = Ce, Pe = n(716), Te = n.n(Pe), Ae = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), Ie = (B = S = function(e) {
            function t() {
                return E(this, t),
                O(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return x(t, e),
            Ae(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onBoss
                      , o = e.onOpenApp
                      , r = e.shareUserInfo
                      , a = Boolean(r) && r || {
                        nick: "\u60a8\u7684\u597d\u53cb",
                        head_url: "//mat1.gtimg.com/www/js/news/friend-icon.png"
                    }
                      , i = a.head_url
                      , s = a.nick;
                    return R.a.createElement(je, null, function(e) {
                        var r = e.direction;
                        e.y;
                        return R.a.createElement("div", {
                            className: Te.a.content,
                            style: {
                                top: "down" === r ? "-60px" : 0
                            }
                        }, R.a.createElement("img", {
                            className: Te.a.userIcon,
                            src: i,
                            alt: ""
                        }), R.a.createElement("div", {
                            className: Te.a.textBox
                        }, R.a.createElement("div", {
                            className: Te.a.userName
                        }, s), R.a.createElement("div", {
                            className: Te.a.guide
                        }, "\u6b63\u5728\u817e\u8baf\u65b0\u95fb\u9080\u4f60\u4e00\u8d77\u9605\u8bfb")), R.a.createElement(pe.j, {
                            appName: t,
                            onBoss: n,
                            onOpenApp: o
                        }), R.a.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n            body {\n              padding-top: 0.4rem;\n            }\n          "
                            }
                        }))
                    })
                }
            }]),
            t
        }(M.PureComponent),
        S.defaultProps = {
            onBoss: V.g,
            onOpenApp: V.g
        },
        B);
        n.d(t, "a", function() {
            return ue
        }),
        n.d(t, "c", function() {
            return Ee
        }),
        n.d(t, "b", function() {
            return Ie
        })
    },
    590: function(e, t) {
        function n(e, t, n) {
            var o = -1
              , r = e.length;
            t < 0 && (t = -t > r ? 0 : r + t),
            n = n > r ? r : n,
            n < 0 && (n += r),
            r = t > n ? 0 : n - t >>> 0,
            t >>>= 0;
            for (var a = Array(r); ++o < r; )
                a[o] = e[o + t];
            return a
        }
        function o(e, t) {
            return !!(t = null == t ? y : t) && ("number" == typeof e || C.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        function r(e, t, n) {
            if (!u(n))
                return !1;
            var r = typeof t;
            return !!("number" == r ? s(n) && o(t, n.length) : "string" == r && t in n) && i(n[t], e)
        }
        function a(e, t, o) {
            t = (o ? r(e, t, o) : void 0 === t) ? 1 : I(m(t), 0);
            var a = e ? e.length : 0;
            if (!a || t < 1)
                return [];
            for (var i = 0, s = 0, c = Array(A(a / t)); i < a; )
                c[s++] = n(e, i, i += t);
            return c
        }
        function i(e, t) {
            return e === t || e !== e && t !== t
        }
        function s(e) {
            return null != e && l(e.length) && !c(e)
        }
        function c(e) {
            var t = u(e) ? T.call(e) : "";
            return t == w || t == _
        }
        function l(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= y
        }
        function u(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function p(e) {
            return !!e && "object" == typeof e
        }
        function f(e) {
            return "symbol" == typeof e || p(e) && T.call(e) == E
        }
        function d(e) {
            if (!e)
                return 0 === e ? e : 0;
            if ((e = h(e)) === v || e === -v) {
                return (e < 0 ? -1 : 1) * g
            }
            return e === e ? e : 0
        }
        function m(e) {
            var t = d(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        function h(e) {
            if ("number" == typeof e)
                return e;
            if (f(e))
                return b;
            if (u(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = u(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(O, "");
            var n = k.test(e);
            return n || N.test(e) ? j(e.slice(2), n ? 2 : 8) : x.test(e) ? b : +e
        }
        var v = 1 / 0
          , y = 9007199254740991
          , g = 1.7976931348623157e308
          , b = NaN
          , w = "[object Function]"
          , _ = "[object GeneratorFunction]"
          , E = "[object Symbol]"
          , O = /^\s+|\s+$/g
          , x = /^[-+]0x[0-9a-f]+$/i
          , k = /^0b[01]+$/i
          , N = /^0o[0-7]+$/i
          , C = /^(?:0|[1-9]\d*)$/
          , j = parseInt
          , P = Object.prototype
          , T = P.toString
          , A = Math.ceil
          , I = Math.max;
        e.exports = a
    },
    593: function(e, t, n) {
        "use strict";
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var r, a = n(1), i = n.n(a), s = n(571), c = n.n(s), l = n(569), u = n(578), p = n(30), f = n(575), d = n(23), m = n(213), h = n(710), v = n.n(h), y = (r = {},
        o(r, m.a.multiPic, 3),
        o(r, m.a.bigVideo, 1),
        o(r, m.a.bigPic, 1),
        r), g = function(e) {
            var t = e.onExpose
              , n = void 0 === t ? d.g : t
              , o = e.onClick
              , r = void 0 === o ? d.g : o
              , a = e.onBoss
              , s = void 0 === a ? d.g : a
              , h = e.appName
              , g = void 0 === h ? "news" : h
              , b = e.appDisplayName
              , w = void 0 === b ? "\u817e\u8baf\u65b0\u95fb" : b
              , _ = e.onOpenApp
              , E = e.onClickDownloadAction
              , O = void 0 === E ? d.g : E
              , x = e.className
              , k = void 0 === x ? "" : x
              , N = e.style
              , C = void 0 === N ? {} : N
              , j = e.type
              , P = void 0 === j ? Object(m.b)(e) : j
              , T = e.url
              , A = e.visited
              , I = e.title
              , S = void 0 === I ? "" : I
              , B = e.images
              , D = void 0 === B ? [] : B
              , L = e.hideVideoTag
              , M = void 0 !== L && L
              , R = e.source
              , W = void 0 === R ? "" : R
              , F = e.hideSource
              , q = void 0 !== F && F
              , U = e.time
              , V = e.changeInfo
              , G = void 0 === V ? {} : V
              , H = e.stick
              , K = void 0 === H ? 0 : H
              , z = e.absoluteDate
              , Q = void 0 !== z && z
              , Y = e.pubtime
              , J = e.playcount
              , X = e.duration
              , Z = e.hidePlaycount
              , $ = e.hideTime
              , ee = e.videoTotalTime
              , te = e.useDownloader
              , ne = void 0 !== te && te
              , oe = e.weixinStyle
              , re = e.hideMultiPicTag
              , ae = e.isAd
              , ie = e.atype
              , se = void 0 === ie ? e.articletype : ie
              , ce = e.lineClamp
              , le = void 0 === ce ? 2 : ce
              , ue = e.forceShowBorderBottom
              , pe = void 0 !== ue && ue;
            if (P === m.a.unknown)
                return console.error("caculateType not found", e),
                null;
            var fe = G.comments
              , de = void 0 === fe ? 0 : fe
              , me = Boolean(K)
              , he = [m.a.standard, m.a.smallVideo, m.a.topic].find(function(e) {
                return e === P
            })
              , ve = [m.a.multiPic, m.a.bigVideo, m.a.bigPic].find(function(e) {
                return e === P
            })
              , ye = y[P] || 0
              , ge = ve ? D.slice(0, ye) : []
              , be = P === m.a.smallVideo || P === m.a.bigVideo
              , we = P === m.a.topic
              , _e = !1
              , Ee = !1;
            oe && (he = [m.a.standard, m.a.smallVideo, m.a.topic, m.a.multiPic].find(function(e) {
                return e === P
            }),
            ve = [m.a.bigVideo, m.a.bigPic].find(function(e) {
                return e === P
            }),
            Ee = P === m.a.multiPic,
            P === m.a.multiPic ? _e = "pics" : P === m.a.smallVideo && (_e = "video"));
            var Oe = function(e) {
                return i.a.createElement(l.b, {
                    onExpose: function() {
                        n(),
                        e && e.onExpose()
                    },
                    onClick: function() {
                        r(),
                        e && e.onClick()
                    }
                }, i.a.createElement(p.a, {
                    className: v.a.wrapper + " " + v.a["theme-" + g] + " " + k,
                    href: ne ? null : T,
                    atype: se,
                    style: C
                }, i.a.createElement("div", {
                    className: c()(v.a.content, pe && v.a.forceShowBorderBottom)
                }, i.a.createElement("div", {
                    className: c()(v.a.info, !he && v.a.fullWidth)
                }, i.a.createElement("div", {
                    className: c()(v.a.title, Boolean(A) && v.a.titleVisited),
                    style: {
                        WebkitLineClamp: le
                    }
                }, S), ve && i.a.createElement("div", {
                    className: v.a.thumb
                }, ge.map(function(e, t) {
                    return i.a.createElement("div", {
                        key: t,
                        className: [v.a.thumb_item, 1 === ye ? v.a.thumb_item_big : ""].join(" ")
                    }, be && !oe && i.a.createElement("div", {
                        className: v.a.thumb_video
                    }, i.a.createElement("img", {
                        src: "//mat1.gtimg.com/www/js/news/big-video-play.png",
                        alt: "\u64ad\u653e"
                    })), be && oe && i.a.createElement("div", {
                        className: v.a.weixinThumbVideo
                    }, i.a.createElement("img", {
                        src: "//mat1.gtimg.com/www/js/news/video-" + g + ".png",
                        alt: "\u64ad\u653e"
                    })), be && J && X && i.a.createElement("div", {
                        className: v.a.videoMark
                    }, i.a.createElement("img", {
                        className: v.a.videoMarkLogo,
                        src: "//mat1.gtimg.com/www/js/news/topic_video.png",
                        alt: ""
                    }), i.a.createElement("div", {
                        className: v.a.videoMarkText
                    }, J && Number(J) ? Number(J) : "", i.a.createElement("em", null, J && X ? " | " : ""), X)), i.a.createElement(f.a, {
                        src: e,
                        alt: S
                    }))
                })), i.a.createElement("div", {
                    className: v.a.tags
                }, Boolean(e) && i.a.createElement("div", {
                    className: v.a.tagDownload
                }, e.content), ae && i.a.createElement("span", {
                    className: v.a.tag + " " + v.a.tagBlock
                }, "\u5e7f\u544a"), me && i.a.createElement("span", {
                    className: v.a.tag + " " + v.a.tagBlock
                }, "\u7f6e\u9876"), be && !M && i.a.createElement("span", {
                    className: v.a.tag + " " + v.a.tagBlock
                }, "\u89c6\u9891"), we && i.a.createElement("span", {
                    className: v.a.tag + " " + v.a.tagBlock
                }, "\u4e13\u9898"), Ee && !re && i.a.createElement("span", {
                    className: v.a.tag + " " + v.a.tagBlock
                }, "\u7ec4\u56fe"), !q && i.a.createElement("span", {
                    className: v.a.tag
                }, W), !$ && i.a.createElement("span", {
                    className: v.a.tag
                }, Q ? Y : Object(d.e)(U)), i.a.createElement("span", {
                    className: v.a.tagFilter
                }), de > 0 && i.a.createElement("span", {
                    className: v.a.tag
                }, Object(d.j)(de) + "\u8bc4"), !Z && J > 0 && i.a.createElement("span", {
                    className: v.a.tag
                }, Object(d.j)(J) + "\u6b21\u64ad\u653e"))), he && i.a.createElement("div", {
                    className: v.a.image
                }, i.a.createElement(f.a, {
                    src: D[0],
                    alt: S
                }, be && i.a.createElement("div", {
                    className: v.a.image_video
                }, i.a.createElement("img", {
                    src: "//mat1.gtimg.com/www/js/news/small-video-play.png",
                    alt: "\u64ad\u653e"
                }), i.a.createElement("div", {
                    className: v.a.image_video_length
                }, ee)), _e && i.a.createElement("div", {
                    className: v.a.weixinImageIcon
                }, i.a.createElement("img", {
                    src: "pics" === _e ? "//mat1.gtimg.com/www/js/news/small-pics-" + g + ".png" : "//mat1.gtimg.com/www/js/news/small-video-" + g + ".png",
                    alt: ""
                })))))))
            };
            return ne ? i.a.createElement(u.i, {
                appName: g,
                appDisplayName: w,
                onBoss: s,
                onOpenApp: _,
                onClickDownloadAction: O
            }, function(e) {
                return Oe(e)
            }) : Oe()
        };
        t.a = g
    },
    601: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = n(1)
          , s = n.n(i)
          , c = n(571)
          , l = n.n(c)
          , u = n(665)
          , p = n.n(u)
          , f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , d = function(e) {
            function t() {
                var e, n, a, i;
                o(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = a = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                a.handleClick = function(e, t) {
                    a.props.onChangeIndex(t)
                }
                ,
                i = n,
                r(a, i)
            }
            return a(t, e),
            f(t, [{
                key: "render",
                value: function() {
                    for (var e = this.props, t = e.index, n = e.dots, o = e.className, r = e.theme, a = e.activeClassName, i = e.newDot, c = [], u = 0; u < n; u += 1)
                        c.push(s.a.createElement("button", {
                            className: u === t ? p.a.activeRoot : p.a.root,
                            key: u,
                            onClick: this.handleClick
                        }, s.a.createElement("div", {
                            className: u === t ? a || p.a.activeDot : i || p.a.dot
                        })));
                    return s.a.createElement("div", {
                        className: l()(o, p.a[r])
                    }, c)
                }
            }]),
            t
        }(i.Component);
        t.a = d
    },
    602: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = n(57)
          , s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , c = function() {
            function e() {
                o(this, e)
            }
            return s(e, [{
                key: "getItem",
                value: function() {
                    return null
                }
            }, {
                key: "setItem",
                value: function() {
                    return null
                }
            }]),
            e
        }()
          , l = new c;
        n.d(t, "a", function() {
            return d
        }),
        n.d(t, "b", function() {
            return h
        });
        var u, p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), f = function() {
            function e(t) {
                var n = t.storage
                  , o = t.prefix
                  , r = t.path;
                a(this, e),
                this.__storage = n,
                this.__path = r,
                this.__prefix = o,
                this.__cursor = i.b.cursor(r),
                this.__load()
            }
            return p(e, [{
                key: "__getStoragePath",
                value: function() {
                    return this.__prefix + this.__path
                }
            }, {
                key: "__load",
                value: function() {
                    try {
                        var e = this.__storage.getItem(this.__getStoragePath());
                        this.__cursor.set(null === e ? void 0 : JSON.parse(e))
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, {
                key: "__save",
                value: function() {
                    try {
                        var e = JSON.stringify(this.__cursor.get());
                        this.__storage.setItem(this.__getStoragePath(), e)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, {
                key: "get",
                value: function() {
                    var e;
                    return (e = this.__cursor).get.apply(e, arguments)
                }
            }, {
                key: "set",
                value: function() {
                    var e;
                    (e = this.__cursor).set.apply(e, arguments),
                    this.__save()
                }
            }]),
            e
        }(), d = {
            local: "local",
            session: "session",
            memory: "memory"
        }, m = (u = {},
        r(u, d.local, window.localStorage),
        r(u, d.session, window.sessionStorage),
        r(u, d.memory, l),
        u), h = function(e) {
            var t = e.prefix
              , n = void 0 === t ? "noflux_" : t
              , o = e.path
              , r = e.storageType
              , a = m[r];
            if (!a)
                throw new Error("NofluxStorage.getNofluxStorage: illegal storageType=" + r);
            if (void 0 === o)
                throw new Error("NofluxStorage.getNofluxStorage: illegal path=" + o);
            return new f({
                storage: a,
                path: o,
                prefix: n
            })
        }
    },
    604: function(e, t) {
        function n(e, t, n) {
            return e >= _(t, n) && e < w(t, n)
        }
        function o(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function r(e) {
            return !!e && "object" == typeof e
        }
        function a(e) {
            return "symbol" == typeof e || r(e) && b.call(e) == f
        }
        function i(e) {
            if (!e)
                return 0 === e ? e : 0;
            if ((e = s(e)) === l || e === -l) {
                return (e < 0 ? -1 : 1) * u
            }
            return e === e ? e : 0
        }
        function s(e) {
            if ("number" == typeof e)
                return e;
            if (a(e))
                return p;
            if (o(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(d, "");
            var n = h.test(e);
            return n || v.test(e) ? y(e.slice(2), n ? 2 : 8) : m.test(e) ? p : +e
        }
        function c(e, t, o) {
            return t = i(t),
            void 0 === o ? (o = t,
            t = 0) : o = i(o),
            e = s(e),
            n(e, t, o)
        }
        var l = 1 / 0
          , u = 1.7976931348623157e308
          , p = NaN
          , f = "[object Symbol]"
          , d = /^\s+|\s+$/g
          , m = /^[-+]0x[0-9a-f]+$/i
          , h = /^0b[01]+$/i
          , v = /^0o[0-7]+$/i
          , y = parseInt
          , g = Object.prototype
          , b = g.toString
          , w = Math.max
          , _ = Math.min;
        e.exports = c
    },
    605: function(e, t) {
        var n = {
            amp: "&",
            apos: "'",
            lt: "<",
            gt: ">",
            quot: '"',
            nbsp: "\xa0",
            ldquo: "\u201c",
            rdquo: "\u201d",
            "#032": " ",
            "#033": "!",
            "#034": '"',
            "#035": "#",
            "#036": "$",
            "#037": "%",
            "#038": "&",
            "#039": "'",
            "#040": "(",
            "#041": ")",
            "#042": "*",
            "#043": "+",
            "#044": ",",
            "#046": ".",
            "#047": "/",
            "#058": ":",
            "#059": ";",
            "#060": "<",
            "#061": "=",
            "#062": ">",
            "#063": "?",
            "#064": "@",
            "#123": "{",
            "#124": "|",
            "#124": "}"
        }
          , o = /&([a-z0-9#]+);/gi;
        e.exports = function(e) {
            return e.replace(o, function(e, t) {
                return t = t.toLowerCase(),
                n.hasOwnProperty(t) ? n[t] : e
            })
        }
    },
    643: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = this;
            this.__replaceListeners = this.__replaceListeners || {},
            this.__replaceListeners[e] || (this.__replaceListeners[e] = t,
            this.on(e, function() {
                for (var t, o = arguments.length, r = Array(o), a = 0; a < o; a++)
                    r[a] = arguments[a];
                (t = n.__replaceListeners[e]).call.apply(t, [n].concat(r))
            })),
            this.__replaceListeners[e] = t
        }
        t.a = o
    },
    644: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function s(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function c(e) {
            return function(t) {
                var n, o;
                return o = n = function(n) {
                    function o() {
                        var t, n, r, s;
                        a(this, o);
                        for (var c = arguments.length, l = Array(c), u = 0; u < c; u++)
                            l[u] = arguments[u];
                        return n = r = i(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [this].concat(l))),
                        r.state = {
                            contentRect: {
                                entry: {},
                                client: {},
                                offset: {},
                                scroll: {},
                                bounds: {},
                                margin: {}
                            }
                        },
                        r.measure = function(t) {
                            var n = (0,
                            b.default)(r._node, e || (0,
                            y.default)(r.props));
                            t && (n.entry = t[0].contentRect),
                            r.setState({
                                contentRect: n
                            }),
                            "function" === typeof r.props.onResize && r.props.onResize(n)
                        }
                        ,
                        r._handleRef = function(e) {
                            r._resizeObserver && (e ? r._resizeObserver.observe(e) : r._resizeObserver.disconnect(r._node)),
                            r._node = e,
                            "function" === typeof r.props.innerRef && r.props.innerRef(e)
                        }
                        ,
                        s = n,
                        i(r, s)
                    }
                    return s(o, n),
                    u(o, [{
                        key: "componentWillMount",
                        value: function() {
                            this._resizeObserver = new h.default(this.measure)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props
                              , n = (e.innerRef,
                            e.onResize,
                            r(e, ["innerRef", "onResize"]));
                            return (0,
                            p.createElement)(t, l({}, n, {
                                measureRef: this._handleRef,
                                measure: this.measure,
                                contentRect: this.state.contentRect
                            }))
                        }
                    }]),
                    o
                }(p.Component),
                n.propTypes = {
                    client: d.default.bool,
                    offset: d.default.bool,
                    scroll: d.default.bool,
                    bounds: d.default.bool,
                    margin: d.default.bool,
                    innerRef: d.default.func,
                    onResize: d.default.func,
                    children: d.default.func
                },
                o
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , p = n(1)
          , f = (o(p),
        n(7))
          , d = o(f)
          , m = n(671)
          , h = o(m)
          , v = n(672)
          , y = o(v)
          , g = n(673)
          , b = o(g);
        t.default = c,
        e.exports = t.default
    },
    645: function(e, t) {
        e.exports = {
            "hotNews-title": "_3EHo5cLXcu2jmabz-KhU2K",
            "hotNews-line": "BQOP-7hMsxGckCv5HyhR0",
            "hotNews-img": "_6OG6039LQpFSdDFvTPAHU",
            "hotNews-text": "_1c74-vN3VYqWve21a-o-Rf",
            "hotNews-time": "opHaK0o8yliULroGtalUo",
            "hotNews-layer": "_1a9xJ9SIwBY4uFggp3vqMw",
            "hotNews-arrow": "_12wFY0R932NJlO9z5-xyQB",
            "hotNews-padding": "_1F2IonbZ0fgSIlxriovyK8",
            "hotNews-paddingBottom": "_3Nb-mUnhHSeoqGYFIWaSBm"
        }
    },
    646: function(e, t, n) {
        "use strict";
        var o = n(1)
          , r = n.n(o)
          , a = n(698)
          , i = n.n(a)
          , s = function(e) {
            var t = e.introdctionDes;
            return t ? r.a.createElement("div", {
                className: i.a.conclusion
            }, r.a.createElement("img", {
                src: "//mat1.gtimg.com/www/js/news/quote-start.png",
                alt: ""
            }), r.a.createElement("p", null, t), r.a.createElement("img", {
                src: "//mat1.gtimg.com/www/js/news/quote-end.png",
                alt: ""
            })) : null
        };
        t.a = s
    },
    647: function(e, t) {
        e.exports = {
            title: "_3GG907RAATJgMhqkje7ev-",
            zhihuImg: "_2vUrrjvEaqXxF03zTlBxl1",
            titleText: "_2yLNaxdPfo9PHihVtpWcC2",
            url: "_1ABvF1sLLTXdkCXOw8_mmX",
            "theme-kuaibao": "_26Tor6ZkGttIwThFfxpd4y",
            "theme-news": "_25CAA_YnqGbgeOFnGEuVTF",
            contentBox: "_2RChJ2_HmVDKXgwfN6GXbb",
            contentTitle: "_2u9oZNbGyoT7OKCotOXhY",
            content: "XjkGNK3orJwv61ZMP9P47",
            author: "HpgaVzqU-3gijP-yhZNYA",
            verticalLine: "_11s9N9Q5cEypOVutZzFabf"
        }
    },
    648: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        }),
        n.d(t, "b", function() {
            return p
        });
        var o = n(65)
          , r = n.n(o)
          , a = n(147)
          , i = n(235)
          , s = n(602)
          , c = this
          , l = Object(s.b)({
            path: "jsBridge.networkType",
            storageType: s.a.local
        })
          , u = function() {
            return l.get() || "unknown"
        }
          , p = Object(i.b)(function(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a)
                              , s = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(s).then(function(e) {
                                o("next", e)
                            }, function(e) {
                                o("throw", e)
                            });
                        e(s)
                    }
                    return o("next")
                }
                )
            }
        }(r.a.mark(function e() {
            var t, n;
            return r.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        a.d.readyAny();
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        t.getNetworkType();
                    case 5:
                        n = e.sent,
                        l.set(n);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e, c)
        })));
        p()
    },
    649: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }),
        n.d(t, "b", function() {
            return a
        });
        var o = n(35)
          , r = (n.n(o),
        function() {
            return Object(o.parse)(window.location.search.slice(1))
        }
        )
          , a = function(e) {
            return -1 !== ["a", "k"].indexOf(e)
        }
    },
    650: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        n.d(t, "b", function() {
            return f
        }),
        n.d(t, "a", function() {
            return d
        });
        var i, s, c = n(1), l = (n.n(c),
        n(602)), u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }(), p = Object(l.b)({
            path: "landing",
            storageType: l.a.session
        }), f = function() {
            return p.get() || {}
        }, d = (s = i = function(e) {
            function t() {
                return o(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e),
            u(t, [{
                key: "componentWillMount",
                value: function() {
                    p.get() || p.set(this.props.data)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        }(c.PureComponent),
        i.defaultProps = {
            data: {}
        },
        s)
    },
    653: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            var t = function(t) {
                function n(e, t) {
                    (0,
                    f.default)(this, n);
                    var o = (0,
                    v.default)(this, (n.__proto__ || (0,
                    u.default)(n)).call(this, e, t));
                    return o.state = {},
                    o.timer = null,
                    o.handleInterval = function() {
                        var e = o.props
                          , t = e.children
                          , n = e.direction
                          , r = e.onChangeIndex
                          , a = e.slideCount
                          , i = o.state.index
                          , s = i;
                        "incremental" === n ? s += 1 : s -= 1,
                        (a || t) && (s = (0,
                        x.mod)(s, a || b.Children.count(t))),
                        void 0 === o.props.index && o.setState({
                            index: s
                        }),
                        r && r(s, i)
                    }
                    ,
                    o.handleChangeIndex = function(e, t) {
                        void 0 === o.props.index && o.setState({
                            index: e
                        }),
                        o.props.onChangeIndex && o.props.onChangeIndex(e, t)
                    }
                    ,
                    o.handleSwitching = function(e, t) {
                        o.timer ? (clearInterval(o.timer),
                        o.timer = null) : "end" === t && o.startInterval(),
                        o.props.onSwitching && o.props.onSwitching(e, t)
                    }
                    ,
                    o.state.index = o.props.index || 0,
                    o
                }
                return (0,
                g.default)(n, t),
                (0,
                m.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startInterval()
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = e.index;
                        "number" === typeof t && t !== this.props.index && this.setState({
                            index: t
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        !(0,
                        O.default)({
                            index: e.index,
                            interval: e.interval,
                            autoplay: e.autoplay
                        }, {
                            index: this.props.index,
                            interval: this.props.interval,
                            autoplay: this.props.autoplay
                        }) && this.startInterval()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timer)
                    }
                }, {
                    key: "startInterval",
                    value: function() {
                        var e = this.props
                          , t = e.autoplay
                          , n = e.interval;
                        clearInterval(this.timer),
                        t && (this.timer = setInterval(this.handleInterval, n))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , n = t.autoplay
                          , o = (t.direction,
                        t.interval,
                        t.index,
                        t.onChangeIndex,
                        (0,
                        c.default)(t, ["autoplay", "direction", "interval", "index", "onChangeIndex"]))
                          , r = this.state.index;
                        return n ? w.default.createElement(e, (0,
                        i.default)({
                            index: r,
                            onChangeIndex: this.handleChangeIndex,
                            onSwitching: this.handleSwitching
                        }, o)) : w.default.createElement(e, (0,
                        i.default)({
                            index: r
                        }, o))
                    }
                }]),
                n
            }(b.Component);
            return t.defaultProps = {
                autoplay: !0,
                direction: "incremental",
                interval: 3e3
            },
            t.propTypes = {},
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(224)
          , i = o(a)
          , s = n(217)
          , c = o(s)
          , l = n(218)
          , u = o(l)
          , p = n(219)
          , f = o(p)
          , d = n(220)
          , m = o(d)
          , h = n(221)
          , v = o(h)
          , y = n(222)
          , g = o(y);
        t.default = r;
        var b = n(1)
          , w = o(b)
          , _ = n(7)
          , E = (o(_),
        n(654))
          , O = o(E)
          , x = n(225)
    },
    654: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
        }
        function r(e, t) {
            if (o(e, t))
                return !0;
            if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                return !1;
            var n = Object.keys(e)
              , r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (var i = 0; i < n.length; i++)
                if (!a.call(t, n[i]) || !o(e[n[i]], t[n[i]]))
                    return !1;
            return !0
        }
        var a = Object.prototype.hasOwnProperty;
        e.exports = r
    },
    655: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            var t = function(t) {
                function n() {
                    var e, t, o, r;
                    (0,
                    f.default)(this, n);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
                        i[s] = arguments[s];
                    return t = o = (0,
                    v.default)(this, (e = n.__proto__ || (0,
                    u.default)(n)).call.apply(e, [this].concat(i))),
                    o.state = {},
                    o.handleKeyDown = function(e) {
                        var t = void 0
                          , n = o.props
                          , r = n.axis
                          , a = void 0 === r ? "x" : r
                          , i = n.children
                          , s = n.onChangeIndex
                          , c = n.slideCount;
                        switch ((0,
                        O.default)(e)) {
                        case "page down":
                        case "down":
                            "y" === a ? t = "decrease" : "y-reverse" === a && (t = "increase");
                            break;
                        case "left":
                            "x" === a ? t = "decrease" : "x-reverse" === a && (t = "increase");
                            break;
                        case "page up":
                        case "up":
                            "y" === a ? t = "increase" : "y-reverse" === a && (t = "decrease");
                            break;
                        case "right":
                            "x" === a ? t = "increase" : "x-reverse" === a && (t = "decrease")
                        }
                        if (t) {
                            var l = o.state.index
                              , u = l;
                            "increase" === t ? u += 1 : u -= 1,
                            (c || i) && (u = (0,
                            N.mod)(u, c || b.Children.count(i))),
                            void 0 === o.props.index && o.setState({
                                index: u
                            }),
                            s && s(u, l)
                        }
                    }
                    ,
                    o.handleChangeIndex = function(e, t) {
                        void 0 === o.props.index && o.setState({
                            index: e
                        }),
                        o.props.onChangeIndex && o.props.onChangeIndex(e, t)
                    }
                    ,
                    r = t,
                    (0,
                    v.default)(o, r)
                }
                return (0,
                g.default)(n, t),
                (0,
                m.default)(n, [{
                    key: "componentWillMount",
                    value: function() {
                        this.setState({
                            index: this.props.index || 0
                        })
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = e.index;
                        "number" === typeof t && t !== this.props.index && this.setState({
                            index: t
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , n = (t.index,
                        t.onChangeIndex,
                        (0,
                        c.default)(t, ["index", "onChangeIndex"]))
                          , o = this.state.index;
                        return w.default.createElement(k.default, {
                            target: "window",
                            onKeyDown: this.handleKeyDown
                        }, w.default.createElement(e, (0,
                        i.default)({
                            index: o,
                            onChangeIndex: this.handleChangeIndex
                        }, n)))
                    }
                }]),
                n
            }(b.Component);
            return t.propTypes = {},
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(224)
          , i = o(a)
          , s = n(217)
          , c = o(s)
          , l = n(218)
          , u = o(l)
          , p = n(219)
          , f = o(p)
          , d = n(220)
          , m = o(d)
          , h = n(221)
          , v = o(h)
          , y = n(222)
          , g = o(y);
        t.default = r;
        var b = n(1)
          , w = o(b)
          , _ = n(7)
          , E = (o(_),
        n(656))
          , O = o(E)
          , x = n(657)
          , k = o(x)
          , N = n(225)
    },
    656: function(e, t) {
        t = e.exports = function(e) {
            if (e && "object" === typeof e) {
                var t = e.which || e.keyCode || e.charCode;
                t && (e = t)
            }
            if ("number" === typeof e)
                return a[e];
            var r = String(e)
              , i = n[r.toLowerCase()];
            if (i)
                return i;
            var i = o[r.toLowerCase()];
            return i || (1 === r.length ? r.charCodeAt(0) : void 0)
        }
        ;
        var n = t.code = t.codes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }
          , o = t.aliases = {
            windows: 91,
            "\u21e7": 16,
            "\u2325": 18,
            "\u2303": 17,
            "\u2318": 91,
            ctl: 17,
            control: 17,
            option: 18,
            pause: 19,
            break: 19,
            caps: 20,
            return: 13,
            escape: 27,
            spc: 32,
            pgup: 33,
            pgdn: 34,
            ins: 45,
            del: 46,
            cmd: 91
        };
        for (r = 97; r < 123; r++)
            n[String.fromCharCode(r)] = r - 32;
        for (var r = 48; r < 58; r++)
            n[r - 48] = r;
        for (r = 1; r < 13; r++)
            n["f" + r] = r + 111;
        for (r = 0; r < 10; r++)
            n["numpad " + r] = r + 96;
        var a = t.names = t.title = {};
        for (r in n)
            a[n[r]] = r;
        for (var i in o)
            n[i] = o[i]
    },
    657: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            return (0,
            C.default)({}, D, e)
        }
        function a(e, t, n) {
            var o = [e, t];
            return o.push(B.passiveOption ? n : n.capture),
            o
        }
        function i(e, t, n, o) {
            B.addEventListener ? e.addEventListener.apply(e, a(t, n, o)) : B.attachEvent && e.attachEvent("on" + t, function() {
                n.call(e)
            })
        }
        function s(e, t, n, o) {
            B.removeEventListener ? e.removeEventListener.apply(e, a(t, n, o)) : B.detachEvent && e.detachEvent("on" + t, n)
        }
        function c(e, t) {
            var n = (e.children,
            e.target,
            (0,
            k.default)(e, ["children", "target"]));
            (0,
            O.default)(n).forEach(function(e) {
                if ("on" === e.substring(0, 2)) {
                    var o = n[e]
                      , a = "undefined" === typeof o ? "undefined" : (0,
                    _.default)(o)
                      , i = "object" === a
                      , s = "function" === a;
                    if (i || s) {
                        var c = "capture" === e.substr(-7).toLowerCase()
                          , l = e.substring(2).toLowerCase();
                        l = c ? l.substring(0, l.length - 7) : l,
                        i ? t(l, o.handler, o.options) : t(l, o, r({
                            capture: c
                        }))
                    }
                }
            })
        }
        function l(e, t) {
            return {
                handler: e,
                options: r(t)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(218)
          , p = o(u)
          , f = n(219)
          , d = o(f)
          , m = n(220)
          , h = o(m)
          , v = n(221)
          , y = o(v)
          , g = n(222)
          , b = o(g)
          , w = n(151)
          , _ = o(w)
          , E = n(658)
          , O = o(E)
          , x = n(217)
          , k = o(x)
          , N = n(236)
          , C = o(N);
        t.withOptions = l;
        var j = n(1)
          , P = n(7)
          , T = (o(P),
        n(661))
          , A = o(T)
          , I = n(31)
          , S = (o(I),
        n(662))
          , B = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(S)
          , D = {
            capture: !1,
            passive: !1
        }
          , L = function(e) {
            function t() {
                return (0,
                d.default)(this, t),
                (0,
                y.default)(this, (t.__proto__ || (0,
                p.default)(t)).apply(this, arguments))
            }
            return (0,
            b.default)(t, e),
            (0,
            h.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.addListeners()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !(0,
                    A.default)(this.props, e)
                }
            }, {
                key: "componentWillUpdate",
                value: function() {
                    this.removeListeners()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.addListeners()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeListeners()
                }
            }, {
                key: "addListeners",
                value: function() {
                    this.applyListeners(i)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.applyListeners(s)
                }
            }, {
                key: "applyListeners",
                value: function(e) {
                    var t = this.props.target;
                    if (t) {
                        var n = t;
                        "string" === typeof t && (n = window[t]),
                        c(this.props, e.bind(null, n))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children || null
                }
            }]),
            t
        }(j.Component);
        L.propTypes = {},
        t.default = L
    },
    658: function(e, t, n) {
        e.exports = {
            default: n(659),
            __esModule: !0
        }
    },
    659: function(e, t, n) {
        n(660),
        e.exports = n(32).Object.keys
    },
    660: function(e, t, n) {
        var o = n(101)
          , r = n(66);
        n(237)("keys", function() {
            return function(e) {
                return r(o(e))
            }
        })
    },
    661: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
        }
        function r(e, t) {
            if (o(e, t))
                return !0;
            if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                return !1;
            var n = Object.keys(e)
              , r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (var i = 0; i < n.length; i++)
                if (!a.call(t, n[i]) || !o(e[n[i]], t[n[i]]))
                    return !1;
            return !0
        }
        var a = Object.prototype.hasOwnProperty;
        e.exports = r
    },
    662: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.passiveOption = t.detachEvent = t.attachEvent = t.removeEventListener = t.addEventListener = t.canUseDOM = void 0;
        var o = n(663)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o)
          , a = t.canUseDOM = !("undefined" === typeof window || !window.document || !window.document.createElement);
        t.addEventListener = a && "addEventListener"in window,
        t.removeEventListener = a && "removeEventListener"in window,
        t.attachEvent = a && "attachEvent"in window,
        t.detachEvent = a && "detachEvent"in window,
        t.passiveOption = function() {
            var e = null;
            return function() {
                if (null !== e)
                    return e;
                var t = !1;
                try {
                    window.addEventListener("test", null, (0,
                    r.default)({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    }))
                } catch (e) {}
                return e = t,
                t
            }()
        }()
    },
    663: function(e, t, n) {
        "use strict";
        function o(e, t, n) {
            return (0,
            a.default)(e, t, n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(238)
          , a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
        t.default = o
    },
    664: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            var t = function(t) {
                function n(e, t) {
                    (0,
                    f.default)(this, n);
                    var o = (0,
                    v.default)(this, (n.__proto__ || (0,
                    u.default)(n)).call(this, e, t));
                    return o.state = {},
                    o.timer = null,
                    o.handleChangeIndex = function(e, t) {
                        var n = o.props
                          , r = n.slideCount
                          , a = n.onChangeIndex
                          , i = e - t
                          , s = o.state.index + i;
                        r && (s = (0,
                        E.mod)(s, r)),
                        void 0 === o.props.index && o.setIndex(s, e, i),
                        a && a(s, o.state.index)
                    }
                    ,
                    o.handleTransitionEnd = function() {
                        o.timer = setTimeout(function() {
                            o.setWindow()
                        }, 0),
                        o.props.onTransitionEnd && o.props.onTransitionEnd()
                    }
                    ,
                    o.state.index = o.props.index || 0,
                    o
                }
                return (0,
                g.default)(n, t),
                (0,
                m.default)(n, [{
                    key: "componentWillMount",
                    value: function() {
                        this.setWindow(this.state.index)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = e.index;
                        if ("number" === typeof t && t !== this.props.index) {
                            var n = t - this.props.index;
                            this.setIndex(t, this.state.indexContainer + n, n)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timer)
                    }
                }, {
                    key: "setIndex",
                    value: function(e, t, n) {
                        var o = {
                            index: e,
                            indexContainer: t,
                            indexStart: this.state.indexStart,
                            indexStop: this.state.indexStop
                        };
                        n > 0 && (!this.props.slideCount || o.indexStop < this.props.slideCount - 1) && (o.indexStop += 1),
                        e > o.indexStop && (o.indexStop = e);
                        var r = o.indexStart - e;
                        r > 0 && (o.indexContainer += r,
                        o.indexStart -= r),
                        this.setState(o)
                    }
                }, {
                    key: "setWindow",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.index
                          , t = this.props.slideCount
                          , n = this.props.overscanSlideBefore
                          , o = this.props.overscanSlideAfter;
                        t && (n > e && (n = e),
                        o + e > t - 1 && (o = t - e - 1)),
                        this.setState({
                            indexContainer: n,
                            indexStart: e - n,
                            indexStop: e + o
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var t = this.props, n = (t.children,
                        t.index,
                        t.onChangeIndex,
                        t.overscanSlideAfter,
                        t.overscanSlideBefore,
                        t.slideCount,
                        t.slideRenderer), o = (0,
                        c.default)(t, ["children", "index", "onChangeIndex", "overscanSlideAfter", "overscanSlideBefore", "slideCount", "slideRenderer"]), r = this.state, a = r.indexContainer, s = r.indexStart, l = r.indexStop, u = [], p = s; p <= l; p += 1)
                            u.push(n({
                                index: p,
                                key: p
                            }));
                        return w.default.createElement(e, (0,
                        i.default)({
                            index: a,
                            onChangeIndex: this.handleChangeIndex,
                            onTransitionEnd: this.handleTransitionEnd
                        }, o), u)
                    }
                }]),
                n
            }(b.PureComponent);
            return t.defaultProps = {
                overscanSlideAfter: 2,
                overscanSlideBefore: 3
            },
            t.propTypes = {},
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(224)
          , i = o(a)
          , s = n(217)
          , c = o(s)
          , l = n(218)
          , u = o(l)
          , p = n(219)
          , f = o(p)
          , d = n(220)
          , m = o(d)
          , h = n(221)
          , v = o(h)
          , y = n(222)
          , g = o(y);
        t.default = r;
        var b = n(1)
          , w = o(b)
          , _ = n(7)
          , E = (o(_),
        n(225))
    },
    665: function(e, t) {
        e.exports = {
            root: "_2rWBKwRF7LCq7rpiD2CdsI",
            activeRoot: "_19rm8AFPvWcnuU3KNb6rR4",
            dot: "_2_Fa1tGqqDOSHVV72vAi3E",
            activeDot: "_35ZUOa4oP15r5JzYOlstrZ",
            paginationTop: "_223GtblSDFhYEfWt7H25cT"
        }
    },
    666: function(e, t, n) {
        (function(t) {
            function n(e, t, n) {
                function o(t) {
                    var n = h
                      , o = v;
                    return h = v = void 0,
                    x = t,
                    g = e.apply(o, n)
                }
                function a(e) {
                    return x = e,
                    b = setTimeout(u, t),
                    k ? o(e) : g
                }
                function i(e) {
                    var n = e - w
                      , o = e - x
                      , r = t - n;
                    return N ? E(r, y - o) : r
                }
                function l(e) {
                    var n = e - w
                      , o = e - x;
                    return void 0 === w || n >= t || n < 0 || N && o >= y
                }
                function u() {
                    var e = O();
                    if (l(e))
                        return p(e);
                    b = setTimeout(u, i(e))
                }
                function p(e) {
                    return b = void 0,
                    C && h ? o(e) : (h = v = void 0,
                    g)
                }
                function f() {
                    void 0 !== b && clearTimeout(b),
                    x = 0,
                    h = w = v = b = void 0
                }
                function d() {
                    return void 0 === b ? g : p(O())
                }
                function m() {
                    var e = O()
                      , n = l(e);
                    if (h = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === b)
                            return a(w);
                        if (N)
                            return b = setTimeout(u, t),
                            o(w)
                    }
                    return void 0 === b && (b = setTimeout(u, t)),
                    g
                }
                var h, v, y, g, b, w, x = 0, k = !1, N = !1, C = !0;
                if ("function" != typeof e)
                    throw new TypeError(c);
                return t = s(t) || 0,
                r(n) && (k = !!n.leading,
                N = "maxWait"in n,
                y = N ? _(s(n.maxWait) || 0, t) : y,
                C = "trailing"in n ? !!n.trailing : C),
                m.cancel = f,
                m.flush = d,
                m
            }
            function o(e, t, o) {
                var a = !0
                  , i = !0;
                if ("function" != typeof e)
                    throw new TypeError(c);
                return r(o) && (a = "leading"in o ? !!o.leading : a,
                i = "trailing"in o ? !!o.trailing : i),
                n(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: i
                })
            }
            function r(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function a(e) {
                return !!e && "object" == typeof e
            }
            function i(e) {
                return "symbol" == typeof e || a(e) && w.call(e) == u
            }
            function s(e) {
                if ("number" == typeof e)
                    return e;
                if (i(e))
                    return l;
                if (r(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = r(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(p, "");
                var n = d.test(e);
                return n || m.test(e) ? h(e.slice(2), n ? 2 : 8) : f.test(e) ? l : +e
            }
            var c = "Expected a function"
              , l = NaN
              , u = "[object Symbol]"
              , p = /^\s+|\s+$/g
              , f = /^[-+]0x[0-9a-f]+$/i
              , d = /^0b[01]+$/i
              , m = /^0o[0-7]+$/i
              , h = parseInt
              , v = "object" == typeof t && t && t.Object === Object && t
              , y = "object" == typeof self && self && self.Object === Object && self
              , g = v || y || Function("return this")()
              , b = Object.prototype
              , w = b.toString
              , _ = Math.max
              , E = Math.min
              , O = function() {
                return g.Date.now()
            };
            e.exports = o
        }
        ).call(t, n(40))
    },
    667: function(e, t) {
        e.exports = {
            newsItemCon: "_2pttgT9OqZR0zO0jxIBiw0",
            newsItemConChild: "_3uDojjc292e0FCHqgSmPA-",
            newsHr: "_3XOvxfz4zo5hg0rdOo3VZ4",
            newsItemConImg: "_39MvmfIWjhPpPMLqXKldYx",
            newsItemTitle: "_3YU8FOz81lUVVWw1b_KK9-",
            newsItemRplay: "_1nFP3coRWeVxWpcVqBdKxA",
            newsItemDuration: "_3LohA34eXQhTJxh3tD2rLR",
            newsItemPlayCount: "rKwcNfCCi-ZHeSwAiQN2K",
            playCount: "_3aOw9_yzNxFar7phsRxdt-",
            newsItemProgress0: "yPobNaw_KWYgK7jvIS9Tt",
            "mnu-newsItemProgeress0": "_3v-zHv8zbBF3Ab-CUsScJm",
            newsItemProgress1: "_3RO9CPEU1uZOD3tjHTDs41",
            "mnu-newsItemProgeress1": "_3JAGxv-Ibmqbrm5_yhTLZg",
            newsItemProgress2: "_26OHj6SjS10n34zuI8tOsS",
            "mnu-newsItemProgeress2": "_1sR9OR4VSlPAzV-G_IWwWG",
            newsItemProgress3: "_3AaISBpurYF76PKCIqTq4d",
            newsItemProgress4: "_3rG1K6qWmzA-Sm2gbq_cPs",
            newsItemProgress5: "DPdGLAWTsbOTULt8wStm7",
            newsItemInProgress: "_2O-2MpTfwJkc1HrPAb1ZMj",
            newsItemMask: "ivjQn8fzcR66boHrmpAYt",
            "mnu-recommend-Actions": "_1uAyqA6iIrwxwaL31bsSl-",
            pagination: "_202gZG0SsOnTO2rFiL1z3-",
            newDot: "lYY2w6Gis-Qy55JLJNPwK",
            activeClassName: "_1ZcpT19Xyn3ZDeLG5VgIkt",
            replay: "E6DxHSlSwRZkh4IdWHZq5"
        }
    },
    668: function(e, t) {
        e.exports = {
            wrapper: "_1Vi6UG88WHpCHhK8F_7E5Z",
            content: "_2D-ZXiInjhxQPxrHpI4wGv",
            progress: "_1IkjKyGZ-2clqCdL1Ym_Nb"
        }
    },
    669: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.withContentRect = t.default = void 0;
        var r = n(670)
          , a = o(r)
          , i = n(644)
          , s = o(i);
        t.default = a.default,
        t.withContentRect = s.default
    },
    670: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            var t = e.measure
              , n = e.measureRef
              , o = e.contentRect;
            return (0,
            e.children)({
                measure: t,
                measureRef: n,
                contentRect: o
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1)
          , i = (o(a),
        n(644))
          , s = o(i);
        t.default = (0,
        s.default)()(r),
        e.exports = t.default
    },
    671: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            function n(e) {
                return parseFloat(e) || 0
            }
            function o(e) {
                for (var t = [], o = arguments.length - 1; o-- > 0; )
                    t[o] = arguments[o + 1];
                return t.reduce(function(t, o) {
                    return t + n(e["border-" + o + "-width"])
                }, 0)
            }
            function r(e) {
                for (var t = ["top", "right", "bottom", "left"], o = {}, r = 0, a = t; r < a.length; r += 1) {
                    var i = a[r]
                      , s = e["padding-" + i];
                    o[i] = n(s)
                }
                return o
            }
            function a(e) {
                var t = e.getBBox();
                return u(0, 0, t.width, t.height)
            }
            function i(e) {
                var t = e.clientWidth
                  , a = e.clientHeight;
                if (!t && !a)
                    return E;
                var i = _(e).getComputedStyle(e)
                  , c = r(i)
                  , l = c.left + c.right
                  , p = c.top + c.bottom
                  , f = n(i.width)
                  , d = n(i.height);
                if ("border-box" === i.boxSizing && (Math.round(f + l) !== t && (f -= o(i, "left", "right") + l),
                Math.round(d + p) !== a && (d -= o(i, "top", "bottom") + p)),
                !s(e)) {
                    var m = Math.round(f + l) - t
                      , h = Math.round(d + p) - a;
                    1 !== Math.abs(m) && (f -= m),
                    1 !== Math.abs(h) && (d -= h)
                }
                return u(c.left, c.top, f, d)
            }
            function s(e) {
                return e === _(e).document.documentElement
            }
            function c(e) {
                return f ? O(e) ? a(e) : i(e) : E
            }
            function l(e) {
                var t = e.x
                  , n = e.y
                  , o = e.width
                  , r = e.height
                  , a = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object
                  , i = Object.create(a.prototype);
                return w(i, {
                    x: t,
                    y: n,
                    width: o,
                    height: r,
                    top: n,
                    right: t + o,
                    bottom: r + n,
                    left: t
                }),
                i
            }
            function u(e, t, n, o) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: o
                }
            }
            var p = function() {
                function e(e, t) {
                    var n = -1;
                    return e.some(function(e, o) {
                        return e[0] === t && (n = o,
                        !0)
                    }),
                    n
                }
                return "undefined" !== typeof Map ? Map : function() {
                    function t() {
                        this.__entries__ = []
                    }
                    var n = {
                        size: {
                            configurable: !0
                        }
                    };
                    return n.size.get = function() {
                        return this.__entries__.length
                    }
                    ,
                    t.prototype.get = function(t) {
                        var n = e(this.__entries__, t)
                          , o = this.__entries__[n];
                        return o && o[1]
                    }
                    ,
                    t.prototype.set = function(t, n) {
                        var o = e(this.__entries__, t);
                        ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n])
                    }
                    ,
                    t.prototype.delete = function(t) {
                        var n = this.__entries__
                          , o = e(n, t);
                        ~o && n.splice(o, 1)
                    }
                    ,
                    t.prototype.has = function(t) {
                        return !!~e(this.__entries__, t)
                    }
                    ,
                    t.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }
                    ,
                    t.prototype.forEach = function(e, t) {
                        var n = this;
                        void 0 === t && (t = null);
                        for (var o = 0, r = n.__entries__; o < r.length; o += 1) {
                            var a = r[o];
                            e.call(t, a[1], a[0])
                        }
                    }
                    ,
                    Object.defineProperties(t.prototype, n),
                    t
                }()
            }()
              , f = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document
              , d = function() {
                return "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")()
            }()
              , m = function() {
                return "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(d) : function(e) {
                    return setTimeout(function() {
                        return e(Date.now())
                    }, 1e3 / 60)
                }
            }()
              , h = 2
              , v = function(e, t) {
                function n() {
                    a && (a = !1,
                    e()),
                    i && r()
                }
                function o() {
                    m(n)
                }
                function r() {
                    var e = Date.now();
                    if (a) {
                        if (e - s < h)
                            return;
                        i = !0
                    } else
                        a = !0,
                        i = !1,
                        setTimeout(o, t);
                    s = e
                }
                var a = !1
                  , i = !1
                  , s = 0;
                return r
            }
              , y = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
              , g = "undefined" !== typeof MutationObserver
              , b = function() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = v(this.refresh.bind(this), 20)
            };
            b.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_()
            }
            ,
            b.prototype.removeObserver = function(e) {
                var t = this.observers_
                  , n = t.indexOf(e);
                ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_()
            }
            ,
            b.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }
            ,
            b.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                    return e.gatherActive(),
                    e.hasActive()
                });
                return e.forEach(function(e) {
                    return e.broadcastActive()
                }),
                e.length > 0
            }
            ,
            b.prototype.connect_ = function() {
                f && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
                window.addEventListener("resize", this.refresh),
                g ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                this.mutationEventsAdded_ = !0),
                this.connected_ = !0)
            }
            ,
            b.prototype.disconnect_ = function() {
                f && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                this.mutationsObserver_ = null,
                this.mutationEventsAdded_ = !1,
                this.connected_ = !1)
            }
            ,
            b.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName;
                void 0 === t && (t = ""),
                y.some(function(e) {
                    return !!~t.indexOf(e)
                }) && this.refresh()
            }
            ,
            b.getInstance = function() {
                return this.instance_ || (this.instance_ = new b),
                this.instance_
            }
            ,
            b.instance_ = null;
            var w = function(e, t) {
                for (var n = 0, o = Object.keys(t); n < o.length; n += 1) {
                    var r = o[n];
                    Object.defineProperty(e, r, {
                        value: t[r],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    })
                }
                return e
            }
              , _ = function(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView || d
            }
              , E = u(0, 0, 0, 0)
              , O = function() {
                return "undefined" !== typeof SVGGraphicsElement ? function(e) {
                    return e instanceof _(e).SVGGraphicsElement
                }
                : function(e) {
                    return e instanceof _(e).SVGElement && "function" === typeof e.getBBox
                }
            }()
              , x = function(e) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = u(0, 0, 0, 0),
                this.target = e
            };
            x.prototype.isActive = function() {
                var e = c(this.target);
                return this.contentRect_ = e,
                e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }
            ,
            x.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width,
                this.broadcastHeight = e.height,
                e
            }
            ;
            var k = function(e, t) {
                var n = l(t);
                w(this, {
                    target: e,
                    contentRect: n
                })
            }
              , N = function(e, t, n) {
                if (this.activeObservations_ = [],
                this.observations_ = new p,
                "function" !== typeof e)
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e,
                this.controller_ = t,
                this.callbackCtx_ = n
            };
            N.prototype.observe = function(e) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" !== typeof Element && Element instanceof Object) {
                    if (!(e instanceof _(e).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new x(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh())
                }
            }
            ,
            N.prototype.unobserve = function(e) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" !== typeof Element && Element instanceof Object) {
                    if (!(e instanceof _(e).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) && (t.delete(e),
                    t.size || this.controller_.removeObserver(this))
                }
            }
            ,
            N.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }
            ,
            N.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                this.observations_.forEach(function(t) {
                    t.isActive() && e.activeObservations_.push(t)
                })
            }
            ,
            N.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var e = this.callbackCtx_
                      , t = this.activeObservations_.map(function(e) {
                        return new k(e.target,e.broadcastRect())
                    });
                    this.callback_.call(e, t, e),
                    this.clearActive()
                }
            }
            ,
            N.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }
            ,
            N.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }
            ;
            var C = "undefined" !== typeof WeakMap ? new WeakMap : new p
              , j = function(e) {
                if (!(this instanceof j))
                    throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                var t = b.getInstance()
                  , n = new N(e,t,this);
                C.set(this, n)
            };
            ["observe", "unobserve", "disconnect"].forEach(function(e) {
                j.prototype[e] = function() {
                    return (t = C.get(this))[e].apply(t, arguments);
                    var t
                }
            });
            var P = function() {
                return "undefined" !== typeof d.ResizeObserver ? d.ResizeObserver : j
            }();
            t.default = P
        }
        .call(t, n(40))
    },
    672: function(e, t, n) {
        "use strict";
        function o(e) {
            var t = [];
            return r.forEach(function(n) {
                e[n] && t.push(n)
            }),
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o;
        var r = ["client", "offset", "scroll", "bounds", "margin"];
        e.exports = t.default
    },
    673: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = {};
            if (t.indexOf("client") > -1 && (n.client = {
                top: e.clientTop,
                left: e.clientLeft,
                width: e.clientWidth,
                height: e.clientHeight
            }),
            t.indexOf("offset") > -1 && (n.offset = {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }),
            t.indexOf("scroll") > -1 && (n.scroll = {
                top: e.scrollTop,
                left: e.scrollLeft,
                width: e.scrollWidth,
                height: e.scrollHeight
            }),
            t.indexOf("bounds") > -1) {
                var o = e.getBoundingClientRect();
                n.bounds = {
                    top: o.top,
                    right: o.right,
                    bottom: o.bottom,
                    left: o.left,
                    width: o.width,
                    height: o.height
                }
            }
            if (t.indexOf("margin") > -1) {
                var r = getComputedStyle(e);
                n.margin = {
                    top: parseInt(r.marginTop),
                    right: parseInt(r.marginRight),
                    bottom: parseInt(r.marginBottom),
                    left: parseInt(r.marginLeft)
                }
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o,
        e.exports = t.default
    },
    674: function(e, t) {
        e.exports = {
            wrapper: "_1wyhE6nTngDDHQYQALCtdM",
            content: "_1QQdogj8LAPJTqtKSoQ0R-",
            progress: "F3JE8EjtwkR22kkhrxecj",
            progressContent: "_1hUbPgJYlI1-Vmob_trJQe"
        }
    },
    675: function(e, t) {
        e.exports = {
            chili1: "_17htUQBEQj7wUQ3HXeuLBg",
            chili2: "_3YoWnF7OJ0_z3NDEfUAYhw",
            progressBar: "_1CRzZCMBY4AKieQtilOduC"
        }
    },
    676: function(e, t) {
        e.exports = {
            placeholder: "_2VvmKSY0lTvv7qL7fTQs1C",
            img: "_2I9Xj37YCGo-0xbohc6y2q"
        }
    },
    677: function(e, t) {
        e.exports = {
            progressBar: "_2hGOFU03qVlGxOFm-qJESe",
            group: "_2zB1Pl4_E-qPKnhR6EZeWX",
            groupImg: "_1uVROWsU0fl6jlEd4BMfDU",
            groupInfo: "_3bFe3fyzBVQ91znT8DkMOu",
            groupDesc: "ZqNqLkNL1ndGTh4UZ7wui",
            imgTag: "_2M2NlCiA7EX2sVUrwJFU8L",
            videoPlay: "SBQgNAs_KTSJS0ZSeBFk3"
        }
    },
    678: function(e, t) {
        e.exports = {
            progressBar: "_23ANlYa-05ns61Z6uZwYWq",
            downloaderText: "_2oFl2LgCsURZ5zZDffD3nP",
            news: "ofpzeZ2Ke7So1NFJBspXb",
            kuaibao: "_2JLeDpEik5ZyuSTMVFM75A"
        }
    },
    679: function(e, t) {
        e.exports = {
            line: "F9efPzfcE5tLO0cygLjpo",
            hr: "_1rui3RTB5brFqhZq5nYylv"
        }
    },
    680: function(e, t) {
        e.exports = {
            box: "TFpMR7xIK8lH-A7vht7sP",
            title: "_2r3afQT-WUWViL6GgnfMT2",
            statusText: "_1iQays62uM8g2KRRknW2sV",
            titleText: "_3YhzG_JQBSTFhaxjjviSs9",
            content: "hNwYRSAlyuZYx9mFl_KFH",
            contentCover: "_1MGXPCXyOApSyh2HBMXJT",
            contentItem: "_1v6jsmW40tVUKnV8xHWg5f",
            contentWords: "_2aW__22HAlhOMk6gsdbTiM",
            progressBar: "_1Vz0-ANhza94zvzbFltH3T",
            color: "_2I3IwCchi0u79h511FSm5U"
        }
    },
    681: function(e, t) {
        e.exports = {
            wrap: "_3KkTMmr8CS3GqVrGuCyN1u",
            title: "_3nEuIICdx1oY3Qa_bGadeE",
            info: "_3NWsQP7K5_IwB7dlFC5csf",
            avatar: "I1MqQXWHwjxozhWAjj3Jy",
            infoText: "_1TVElao9kRzSgoWDpG5_AH",
            progressBar: "_3K5Jj-IsVDw0mJp1xuV7S",
            progressBarCover: "_2Hlcq-zoo4jiKKV1vLiojt",
            progressBarIcon: "QQM59Fsu3kn8tSKYGA_Tg"
        }
    },
    682: function(e, t) {
        e.exports = {
            wrap: "_2Cc0bFf6cqPuETO6xovnpW",
            newWrap: "_18rFj5Cjw5Vtcexja0cQRr",
            progressBar: "_35CrTNq85ITUH1EBCuRCSG",
            followButton: "OghlVWjXy9dM_jI_Qf0kP",
            followButtonText: "_1AvLBrk1tbFk7YM2WGAgUi",
            followButtonTextImg: "_4uvL8cFKJgMWRQUsEDENG"
        }
    },
    683: function(e, t) {
        e.exports = {
            wrap: "_3YjbB9GJ-Awk-nk3-zdZ3",
            headTitle: "_2EmdMUJQ1q8J-CO05mq7xL",
            title: "_2KyGWSc4yQkD4VsUPSHOwJ",
            info: "_3KWK_3wgV-wCsREWDcg_pr",
            avatar: "_1bUUQzivckxA7_1qTQG9ix",
            infoText: "_1HTVayKaxIYb2EA9ie4yAR",
            join: "_2aTjRydM2fOEj75LRTR5oa",
            user: "UBh6av03qm8H2xwk7gDc1",
            follower: "hr8-CuI1D6tIOgBNP1a05",
            progressBar: "_1izuT_dGyI_3ZRNClC5JqU",
            progressBarCover: "_239Ml0smxaeVh4yNtupVbr",
            progressBarIcon: "_3UelBVavKSg-HgT5XZdPA4"
        }
    },
    684: function(e, t) {
        e.exports = {
            wrap: "_1M522W8LWk4zc0gCIKVLfC",
            progressBar: "CxsnedrsRa4OfojQG1VTD",
            "logo-news": "_3nO5crfsnSns1coZ8Fccw",
            "logo-kuaibao": "Hnx4XX4PPup3zXkSu0v-q",
            content: "_3S3Vh-yKPCL_o4TEjO3h9B",
            text: "_2kUa5RVdq3AgKIKXNywd1h",
            clamp: "_3ZWQEoQ9QlUvM0Dd094Hb-",
            blueArrow: "_1sLRmTy-pbu6ENSn11YZ1b",
            news: "_2b9grvnpjSXZ03agJQaxwL",
            themedText: "bbpfgJoauvHMMdC7e7AYg",
            kuaibao: "_3xoOO7yIU8k2taHioAcxUR"
        }
    },
    685: function(e, t) {
        e.exports = {
            wrap: "_1cAeSQyBKtr14V68TutiY8",
            progressBar: "_2ZNnUYtZhOdwpvSdnBF24w",
            "logo-news": "K-iWxUZEsaiSSX9-XKkOX",
            "logo-kuaibao": "_1LP3e5JFo0qSd2gk736xYN",
            content: "_1DV4WFykNUtHgV1LEiTrtY"
        }
    },
    686: function(e, t) {
        e.exports = {
            videoRecommend: "_39WVyWJaALQa6E4FL5uy5r",
            newsItemCon: "_1duhKTTaukbfk_NWcJZOig",
            newsItemConChild: "_256XkPl2jy_NEbDaSGdk-0",
            newsItem: "_1VHhdnnma1nL0ssGCygnB5",
            newsItemTime: "_2yYHLmCXfzT-SE1mYIpIBI",
            newsItemTitle: "_2-4Zgom850iod5O8HXYvBs",
            playCount: "_1bgKVu7tucZrnSUtak2pJc",
            replay: "_2w2JmaJnqcvtWtmKtvQ4ZX",
            "videoRecommend-logo": "_1QcWdrWR2NlVhpBCgd7jPX",
            "videoRecommend-btnCnt": "_3CwqVq6vchd8K8plYrkSJY",
            "videoRecommend-newsItemCon": "_1KEZKM468evkA3G0SMNfQ",
            "videoRecommend-newsItemConChild": "_2ugTi-3O1K3sxhBLqBWUSy",
            pagination: "_2bKEhUxNuUjLFehFOogirp"
        }
    },
    687: function(e, t) {
        e.exports = {
            progressBar: "_20acxfBPLmwOmFNJ0Sr4H6",
            text: "_2LZOZwvn9aClhY0bDBrYKm"
        }
    },
    688: function(e, t) {
        e.exports = {
            progressBar: "_2bmY-NE5JdvfZ5JRDxS4kr",
            text: "_2dkLqKOBewk1FlpJWMLVMr"
        }
    },
    689: function(e, t) {
        e.exports = {
            kMore: "_1tipbK4a5IfEMDTIL6TUgG",
            kMoreImg: "_2oM3mVUj3f0KLCpl9i_IW2"
        }
    },
    690: function(e, t) {
        e.exports = {
            wrap: "_2gLxnzNH5yTBFFMG0_kGxZ",
            progressBar: "WYvRBZdudGFf2LS_C164z",
            downloaderText: "_2yDg9N3V_AZgX2ArhbfccU",
            openDownloaderText: "E83Kzzdjtdhm5Ivp304sI",
            openDownloaderNum: "_1ia3AejKxp1D2csm5Pfao_"
        }
    },
    691: function(e, t) {
        e.exports = {
            wrap: "IYMhU1JJYUMcMsbAeqIUd",
            progressBar: "_2v4-M9_YKDJfUIRysXwBNj",
            downloaderText: "_1ZtVQxvYRKurY1HjOjTlKy",
            openDownloaderText: "_15lXDKOuaUXoo_LUHKGrzn",
            openDownloaderNum: "_3S8k1bxpj-WL2eJkn0OOeG"
        }
    },
    692: function(e, t) {
        e.exports = {
            progressBar: "_1a5AoBmLcKjWgOKm_M5bGN",
            downloaderText: "_3I0XlLzCMDHftDjf0NWv9j"
        }
    },
    693: function(e, t) {
        e.exports = {
            wrap: "_3pYtSbUTzeL4Hq1LBKxGhY",
            logoBtn: "_25Q-oyt-pKwauOtxLdXyn1"
        }
    },
    694: function(e, t, n) {
        "use strict";
        var o = n(695)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o);
        r.default.Media = r.default,
        e.exports = r.default
    },
    695: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function i(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , c = n(1)
          , l = o(c)
          , u = n(7)
          , p = o(u)
          , f = n(696)
          , d = o(f)
          , m = function(e) {
            function t() {
                var n, o, i;
                r(this, t);
                for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                    c[l] = arguments[l];
                return n = o = a(this, e.call.apply(e, [this].concat(c))),
                o.state = {
                    matches: o.props.defaultMatches
                },
                o.updateMatches = function() {
                    return o.setState({
                        matches: o.mediaQueryList.matches
                    })
                }
                ,
                i = n,
                a(o, i)
            }
            return i(t, e),
            t.prototype.componentWillMount = function() {
                if ("object" === ("undefined" === typeof window ? "undefined" : s(window))) {
                    var e = this.props.query;
                    "string" !== typeof e && (e = (0,
                    d.default)(e)),
                    this.mediaQueryList = window.matchMedia(e),
                    this.mediaQueryList.addListener(this.updateMatches),
                    this.updateMatches()
                }
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.mediaQueryList.removeListener(this.updateMatches)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.render
                  , o = this.state.matches;
                return n ? o ? n() : null : t ? "function" === typeof t ? t(o) : (!Array.isArray(t) || t.length) && o ? l.default.Children.only(t) : null : null
            }
            ,
            t
        }(l.default.Component);
        m.propTypes = {
            defaultMatches: p.default.bool,
            query: p.default.oneOfType([p.default.string, p.default.object, p.default.arrayOf(p.default.object.isRequired)]).isRequired,
            render: p.default.func,
            children: p.default.oneOfType([p.default.node, p.default.func])
        },
        m.defaultProps = {
            defaultMatches: !0
        },
        t.default = m
    },
    696: function(e, t, n) {
        var o = n(697)
          , r = function(e) {
            return /[height|width]$/.test(e)
        }
          , a = function(e) {
            var t = ""
              , n = Object.keys(e);
            return n.forEach(function(a, i) {
                var s = e[a];
                a = o(a),
                r(a) && "number" === typeof s && (s += "px"),
                t += !0 === s ? a : !1 === s ? "not " + a : "(" + a + ": " + s + ")",
                i < n.length - 1 && (t += " and ")
            }),
            t
        }
          , i = function(e) {
            var t = "";
            return "string" === typeof e ? e : e instanceof Array ? (e.forEach(function(n, o) {
                t += a(n),
                o < e.length - 1 && (t += ", ")
            }),
            t) : a(e)
        };
        e.exports = i
    },
    697: function(e, t) {
        var n = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
            }).toLowerCase()
        };
        e.exports = n
    },
    698: function(e, t) {
        e.exports = {
            conclusion: "_2OISFnHr2MWlC6qxGlhCi"
        }
    },
    699: function(e, t) {
        e.exports = {
            introdctionList: "_3yVN86W2g-eOcwp51ZXTFu",
            "theme-kuaibao": "_2_56FW5YMEw7N1fFJheAvN",
            "theme-news": "_3y7WVLd7qm97zl6nKn4o4Q"
        }
    },
    700: function(e, t) {
        e.exports = {
            qqMusic: "_3TcotgJbrC1bgqZJw0kea2",
            title: "xYyX8BauAFfbX1HcE-uVR",
            qqMusicImg: "_1BPJzrqMIG8hP9e1SpiD_m",
            titleText: "_2bX1IBAhM160ohxC8-kqbw",
            musicImgWrapper: "_1lpARtLUL8pYekCpoNq7zc",
            musicImg: "_1rQkGBC1TUqpLUnQauvYlL",
            musicName: "_2Edn1AFMjkfctxbki7lLVi",
            musicSinger: "_1tDb2hyZ3HyXcNMkCmLkwU",
            musicTime: "_2Ys6V1_rpLDCx4Qxb3AJqs"
        }
    },
    701: function(e, t) {
        e.exports = {
            copyright: "_1zPiXRmOxPy9AvKnK2-lE1"
        }
    },
    702: function(e, t) {
        e.exports = {
            comment: "_2-gT40JdKaCMXwfU--iv_i",
            commentTitle: "_1DLdtnX3O86_XMqXCqpnIS",
            commentContent: "Mwcbt5ArE2L7UlhmG0r3C",
            commentBottom: "_2PqfwzKWqBdNCv6FusoDIp"
        }
    },
    703: function(e, t) {
        e.exports = {
            wrap: "_2uqm7t0Q1edCEWGt25AMWI",
            full: "_2w1wa7OuAjMEpgX9IG3MEX",
            outer: "_1fdJgE9col8hzvfrzqK_ig",
            article: "_26AkASahcNlbRkP0AqxNZM",
            more: "_3em8Ej2zWZAW8Nj3xKSF9c",
            span: "_3Giqh8fpa4WyMeC_aVTMs_",
            "theme-kuaibao": "_3_iZAhRdfz7CfJMnDNTQzG",
            "theme-news": "_1ABwc9anR_Ty6OIFKJhTrZ",
            wendaMore: "_3sq4tbLKUlXL5tP_ouxhVv",
            img: "_9WiN4nDY-w1TV64vBdLag",
            cover: "_2r0FGTVffk1eU4lwa7V9qo",
            whiteDiv: "_2CtiSMu0lsdyy-JZ17vR7u",
            text: "_3X8XYPOrNuv91PxR1rxuGA",
            timelineMore: "_1kUPOYKNLv30sSgCGsFyQT",
            timelineCover: "_3Fkz8SiABTf4cyWTAuGaJT"
        }
    },
    704: function(e, t) {
        e.exports = {
            wrap: "_2NBkfiBKK9pmLRXTYhF3FP",
            outerlink: "_1MCU-hiPz6Dx4n5w-fit7s",
            title: "_23HZsda5m8QSimHo7Xg8By",
            media: "_1SRA7SxyTJLDi-kC9xOtBz",
            mediaGravatar: "yN4QJx2DkUbGtFxHlOBZI",
            mediaText: "_2uGYAyHwp_x-ICTHomdYzW",
            mpIcon: "_1ZuOA7oGofyUlYiGWHShbH",
            content: "_2YDvra1KkspPWyD0ovwcIt",
            url: "_3HAx5IQS3RLHpnDVkoL-x9",
            "theme-kuaibao": "_1EK5NQKB5R0IXIvLe4Rb5H",
            "theme-news": "_19sfn0pg4p7j9a6jvfUdKm"
        }
    },
    705: function(e, t) {
        e.exports = {
            content: "_1vaM7JPrgdCNPtIQYpLv35",
            padding: "_1pIbqyhwb8NrVuLeoa-5kX",
            text: "_2_vAB6h04LQnmzbY6DY8yk"
        }
    },
    706: function(e, t) {
        e.exports = {
            wrap: "_11vzQYzE2TprUTvw0YpW9O",
            img: "_2pXgak5v8oUN3AADfbu6QU",
            imgTag: "_3xH2sL5--UPpRl3tMznz9L",
            imgDesc: "VbfvcnFQEGQAtVi3h2QEM",
            isGroupImg: "_3Fw2yUBvLUdASL4xHxdgm4",
            group: "_3eRUQcG-BEuvQJpB198PqE",
            groupImg: "_3KhJKkaac0wfPKDLDRjOJi",
            groupInfo: "_1BGcRln2l3sVSjmqbh83iQ",
            groupDesc: "_1QXjUB0QJDSByTaNEpnI0b",
            p: "_1mJz-h6XxT4oEV_s1aKlCK",
            quote: "_1Yb9aHK03o_zKO92NX59Vu",
            quoteText: "_3Nk3SJW1qHTxKryBvj-f2e",
            quoteSource: "_1zBHnkO811QL_GI26hWVBX",
            h2: "VN9pQiNDuHfcuIAKLPgrC",
            truth: "_1TigLqfsogLRarElfDWPeN",
            truthHeader: "f7-g60aaBZzuvIfsQRF7w",
            truthContent: "_2M7fiK52_P6cXAp-1jVG6c",
            hr: "_1wwdxgds_mBNQmi3FaXbBT",
            strong: "_3J3iNSz16QO03_VBd8XTFg",
            "theme-news": "_1bbMmdR1MYxkjAcL9EEUy8",
            a: "_1LAb2Tg6oJAwKNS2NviJbY",
            "theme-kuaibao": "_38fl315lclhmbu4mM5ypz5",
            timeLine: "_X6pzpfLpoeW_0sQZPdc-",
            time: "_24Gy180jDaqfpen6tT2XBT",
            timeIcon: "_1txUjzFkiEauUVJPdpSdx0",
            event: "_1ZLLzKIxreAr2IlNMRzkNJ",
            video: "yDAuzyd6UFAenhc8H526b",
            videoPlay: "_3Jai65Gr5EIZkikxVwIPxw",
            linkLogo: "_1UhFNHIb06TM9l4h8-x0yr",
            groupImgLogo: "fKBXLJt_f3WnlRmA74WMq",
            zzry: "_2o8gsCtzea8w5VbKATAK82"
        }
    },
    708: function(e, t) {
        e.exports = {
            fullScreen: "_DOJcAawgreFFHTE33_u7",
            imgFullScreen: "qcXkq0ZQN_2ZjHHv_jqPH",
            wrapper: "_3eX6iuv4R2YktyiMnvcRyi",
            scroller: "_2kj1J8IZXoauGPqY7ryRt7",
            ctrlbar: "_17v19znvTMcryXKWAi3cyK",
            ctrlbarNum: "_2KQkiCmk83JTPdTGs0t6_v"
        }
    },
    710: function(e, t) {
        e.exports = {
            wrapper: "_3bEwX0mHF9BvZuA4ENz2rR",
            content: "_2Kss9y1Ft-lZKPtHC8wosf",
            info: "_1W-wWJJDh1p2Z76_3xljMg",
            title: "_3gPHvP5USx_fhmfuOeh11Y",
            titleVisited: "DuqRswCPPSlXIAPWOjslN",
            image: "_2rSp9WSY-IMlI2I2uQjh0q",
            image_video: "_1qgCCBhyvv2l-r9KKsDahH",
            image_video_length: "_1rXBl62g7UtQOssTCtEqT1",
            thumb: "_3K6RC-AvAMwn1E075T7lIu",
            thumb_item: "_2odpazHyQ7Kbh3QAdZPq7H",
            thumb_item_big: "_2McrPBBKVH4yo9R1nGYau3",
            thumb_video: "jbl9kxwW0SjFp8QQWU5uD",
            tags: "aBy6flg6GkYe5ybBrCm8Z",
            tag: "_1ynJOggy1uYVUmFCTKZd1O",
            tagDownload: "_3r3CZdGir7rDLi48t64sFt",
            tagFilter: "_1fhrJFu9RqYkmusq8goFAA",
            tagBlock: "_3X9gynO4DzApYUkpr7btwn",
            "theme-news": "_2aYgwFz1-PC8nFHWcR5zUM",
            "theme-kuaibao": "_3Ef1FzqR3lKKPWeHfx1i94",
            fullWidth: "_1Q076Dir92pT4DvgB6PQ10",
            weixinImageIcon: "_1kwYl-ccVuFVBsJqNDGjcy",
            weixinThumbVideo: "_35dO3niEZo6V5cUl1fcq3R",
            videoMark: "_1JRoJB0dO_pGOK0sP0U9GF",
            videoMarkText: "_2u8xg3j0z5gCi6YtF4hCMA",
            videoMarkLogo: "DdsQQQggJvzhhPV_Hg6OK",
            forceShowBorderBottom: "_1J7tXXO8IOzS10d6-0WoW4"
        }
    },
    711: function(e, t, n) {
        (function(t) {
            function n(e, t, n) {
                function r(t) {
                    var n = h
                      , o = v;
                    return h = v = void 0,
                    x = t,
                    g = e.apply(o, n)
                }
                function a(e) {
                    return x = e,
                    b = setTimeout(u, t),
                    k ? r(e) : g
                }
                function c(e) {
                    var n = e - O
                      , o = e - x
                      , r = t - n;
                    return N ? _(r, y - o) : r
                }
                function l(e) {
                    var n = e - O
                      , o = e - x;
                    return void 0 === O || n >= t || n < 0 || N && o >= y
                }
                function u() {
                    var e = E();
                    if (l(e))
                        return p(e);
                    b = setTimeout(u, c(e))
                }
                function p(e) {
                    return b = void 0,
                    C && h ? r(e) : (h = v = void 0,
                    g)
                }
                function f() {
                    void 0 !== b && clearTimeout(b),
                    x = 0,
                    h = O = v = b = void 0
                }
                function d() {
                    return void 0 === b ? g : p(E())
                }
                function m() {
                    var e = E()
                      , n = l(e);
                    if (h = arguments,
                    v = this,
                    O = e,
                    n) {
                        if (void 0 === b)
                            return a(O);
                        if (N)
                            return b = setTimeout(u, t),
                            r(O)
                    }
                    return void 0 === b && (b = setTimeout(u, t)),
                    g
                }
                var h, v, y, g, b, O, x = 0, k = !1, N = !1, C = !0;
                if ("function" != typeof e)
                    throw new TypeError(s);
                return t = i(t) || 0,
                o(n) && (k = !!n.leading,
                N = "maxWait"in n,
                y = N ? w(i(n.maxWait) || 0, t) : y,
                C = "trailing"in n ? !!n.trailing : C),
                m.cancel = f,
                m.flush = d,
                m
            }
            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function r(e) {
                return !!e && "object" == typeof e
            }
            function a(e) {
                return "symbol" == typeof e || r(e) && b.call(e) == l
            }
            function i(e) {
                if ("number" == typeof e)
                    return e;
                if (a(e))
                    return c;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(u, "");
                var n = f.test(e);
                return n || d.test(e) ? m(e.slice(2), n ? 2 : 8) : p.test(e) ? c : +e
            }
            var s = "Expected a function"
              , c = NaN
              , l = "[object Symbol]"
              , u = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , f = /^0b[01]+$/i
              , d = /^0o[0-7]+$/i
              , m = parseInt
              , h = "object" == typeof t && t && t.Object === Object && t
              , v = "object" == typeof self && self && self.Object === Object && self
              , y = h || v || Function("return this")()
              , g = Object.prototype
              , b = g.toString
              , w = Math.max
              , _ = Math.min
              , E = function() {
                return y.Date.now()
            };
            e.exports = n
        }
        ).call(t, n(40))
    },
    712: function(e, t) {
        e.exports = {
            "theme-kuaibao": "_1MtIFl_iUeVHKQeTd38nxT",
            content: "upv87XeZTT2m6Tq83yqyy",
            logo: "_2C5FFNqwMqmLJK74pIArbB",
            newsDiv: "_2gKt-Wlq-Kgmxlr2U86wnY",
            newsImg: "_3I9z1Fc4866XYT25fr437k",
            newsTitle: "_1xOzDuZmcPI9ENojfs5JVP",
            text: "_1Lht0cia4ASigV8BHMxrVA",
            logoText: "mxi8UC4mkeguo161jZG2c",
            logoText2: "PP2OguqtMcWwpg8Qpe79Z",
            "mask-videoIcon": "_1h9y8Fyy7yOUMm-WuJ4kFL",
            "mask-container": "_1hCzqdwhIY0dnmIwUOtRYa",
            pagination: "_2q4IXGZwk6k_PkB0yPlOvN"
        }
    },
    713: function(e, t) {
        e.exports = {
            content: "_306smwIarqLsZopsJ4c7wH",
            downloader: "mpmjK_YPKjLdAvm-iAM1L"
        }
    },
    714: function(e, t) {
        e.exports = {
            newsDiv: "d8IQTuTp5G89aIf4XaV-Y",
            logo: "mU0oB6IbjcyEWGpUkacPh",
            newsImg: "_2TxJQ-0GA9FAmRiUN0fGjd",
            newsTitle: "_2COitHR9JVwLoVkS42hMv-",
            text: "_2Tw2jCsOEPHl6whFkPfNzc",
            logoText: "_1t4LimQ9Wrnb0LuvfBGCbQ",
            logoTextSmall: "_3T1rtRMyl5DjRfRfptQ8Qr",
            smallText: "_2gHFJ4ZF_TSxgyciqDYYdi",
            "mask-videoIcon": "_3ahSRvXVYCZOTrPvkUtBCz",
            "mask-container": "_3BBT-X2oNlg54kxBYQ3E5Q",
            pagination: "_1D7gxa2N529JraSlyJdma9"
        }
    },
    715: function(e, t) {
        e.exports = {
            content: "_3j0kQ-8WsgCmUba-Z5kG0y",
            downloader: "_1xdqrPBnuUs7ZLlm3p6r87",
            exit: "_1spN0qJI18TATTnja11QuX",
            exitIcon: "_3OdX_xyWCsGAytR0EKSIto"
        }
    },
    716: function(e, t) {
        e.exports = {
            content: "_3rdPY_PTMP0iwE8RbS6N2x",
            userIcon: "HB8XJtuQ-PDJD9fp-xf3i",
            textBox: "_1rLlFJNnkHBrWpihpbdtMC",
            userName: "dD9RoKsfMbvJAccDUIM2f",
            guide: "_1_GJKHFInO4FoMLxsvvMBF"
        }
    }
});
//# sourceMappingURL=0.491f7912.chunk.js.map/*  |xGv00|dd6047685dee8cc48a3b41e868a17c53 */
