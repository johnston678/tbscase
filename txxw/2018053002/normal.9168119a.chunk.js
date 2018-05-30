webpackJsonp([1], {
    574: function(e, t) {
        e.exports = {
            introTitle: "_2e0CvbwDTK-QS5vCNEaOYz",
            commentList: "_2-eqCpoKrfhf28r2Yq-s4X",
            commentTitle: "_38pXJRaf_t4jPE-DoF0Q-_",
            commentContent: "m83JhV88W4C_BGvlKG4li",
            weiboComment: "_1_2tblYBhpBbDZVXOJJbJy",
            commentBottom: "_3c24xBvfb8cYKAG2F2qQhV",
            Title: "_1Lr4tlNVBrlgUDDc-dLFFW",
            TitleBorder: "_GMNo4xMWOBpO3y6Nw-lq",
            hasPic: "_1z1fOcVsbMRDACVtwFMM-P",
            commentSwipeBox: "qgRYbV4rvI7n5-_CfW0hK",
            comment: "_1RGl13ULYOlQYrAIJanUh6",
            commentSwipeContent: "_13gIUmH5Z8hloHLsT65H3x",
            commentReplyText: "_32plHq5Of9Zm-RAW9vrYCT"
        }
    },
    591: function(e, t, n) {
        "use strict";
        function r(e) {
            return Array.isArray(e) ? e : Array.from(e)
        }
        function o(e, t) {
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
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
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
        function l(e, t) {
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
        function d(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
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
        function y(e, t) {
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
        var b, v, w, _, g = n(65), O = n.n(g), E = n(1), x = n.n(E), j = n(35), k = n.n(j), N = n(211), P = n(73), C = n(149), T = n(23), A = n(576), S = n(588), B = n(586), D = n(574), I = n.n(D), L = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), M = function(e) {
            function t() {
                return o(this, t),
                a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            L(t, [{
                key: "onShow",
                value: function() {
                    this.carousel.show(0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.data
                      , n = r(t)
                      , o = n[0]
                      , a = n.slice(1)
                      , i = o.pic && Boolean(o.pic.length);
                    return x.a.createElement("div", null, x.a.createElement("div", {
                        className: I.a.commentTitle
                    }, x.a.createElement("a", null, x.a.createElement("img", {
                        src: o.head_url,
                        alt: "\u5934\u50cf"
                    })), x.a.createElement("em", null, o.nick), x.a.createElement("span", null, Object(T.e)(1e3 * o.pub_time))), x.a.createElement("div", {
                        className: "" + I.a.commentContent
                    }, x.a.createElement(B.b, {
                        maxRows: 3
                    }, o.reply_content, a.map(function(e) {
                        return "//@" + e.nick + "\uff1a" + e.reply_content
                    }), i && x.a.createElement("span", {
                        className: I.a.hasPic,
                        onClick: function() {
                            return e.onShow()
                        }
                    }, x.a.createElement("img", {
                        src: "//mat1.gtimg.com/www/js/news/comment-image.png",
                        alt: ""
                    }), "\u67e5\u770b\u56fe\u7247")), i && x.a.createElement(S.a, {
                        ref: function(t) {
                            e.carousel = t
                        },
                        images: o.pic.map(function(e) {
                            return e.url
                        }),
                        showNav: !1
                    })))
                }
            }]),
            t
        }(E.PureComponent), R = function(e) {
            var t = e.className
              , n = e.commentList
              , r = e.hideLine;
            return x.a.createElement("div", {
                className: t
            }, n && !!n.length && x.a.createElement("div", null, !r && x.a.createElement(A.b, {
                className: I.a.comment
            }, x.a.createElement("div", {
                className: I.a.introTitle
            }, "\u7528\u6237\u70ed\u8bc4")), r && x.a.createElement("div", {
                className: I.a.introTitle
            }, "\u7528\u6237\u70ed\u8bc4"), x.a.createElement("ul", {
                className: I.a.commentList
            }, n.map(function(e, t) {
                return x.a.createElement("li", {
                    key: t
                }, x.a.createElement(M, {
                    data: e.reverse()
                }))
            }))))
        }, V = n(212), q = n.n(V), z = n(587), H = n(590), W = n.n(H), U = n(585), F = n(569), K = n(570), Q = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
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
        }(), G = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), J = (v = b = function(e) {
            function t() {
                return c(this, t),
                s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return u(t, e),
            G(t, [{
                key: "render",
                value: function() {
                    var e = this.props.data
                      , t = Q(e, 1)
                      , n = t[0];
                    return x.a.createElement("div", null, x.a.createElement("div", {
                        className: I.a.commentTitle
                    }, x.a.createElement("a", null, x.a.createElement("img", {
                        src: n.head_url,
                        alt: "\u5934\u50cf"
                    })), x.a.createElement("em", null, n.nick), x.a.createElement("span", null, Object(T.e)(1e3 * n.pub_time)), x.a.createElement("div", {
                        className: I.a.commentReplyText
                    }, "\u56de\u590dTA")), x.a.createElement("div", {
                        className: I.a.commentSwipeContent
                    }, n.reply_content))
                }
            }]),
            t
        }(E.PureComponent),
        b.defaultProps = {
            onOpenApp: T.g,
            onBoss: T.g
        },
        v), X = n(592), Z = n.n(X), Y = n(575), $ = function(e) {
            var t = e.appName
              , n = e.onBoss
              , r = void 0 === n ? T.g : n
              , o = e.onOpenApp
              , a = void 0 === o ? T.g : o
              , i = e.isPlaceholder
              , c = e.commentList;
            return x.a.createElement(K.a, {
                name: "commentReply",
                appName: t,
                onOpenApp: a,
                onBoss: r
            }, function(e) {
                var n = e.onClick
                  , o = e.onExpose;
                return x.a.createElement(F.b, {
                    onClick: n,
                    onExpose: o,
                    exposePolicy: F.a.center
                }, x.a.createElement("div", null, i ? x.a.createElement(Y.a, {
                    className: Z.a.wrap,
                    src: "//mat1.gtimg.com/www/js/news/comment-placeholder.png"
                }, x.a.createElement("div", {
                    className: Z.a.placeholderText
                }, "\u67e5\u770b\u66f4\u591a\u5b8c\u6574\u7cbe\u5f69\u8bc4\u8bba")) : x.a.createElement("div", {
                    className: Z.a.wrap
                }, x.a.createElement("div", {
                    className: Z.a.list
                }, c.map(function(e, n) {
                    return x.a.createElement("div", {
                        key: n,
                        className: Z.a.item
                    }, x.a.createElement(J, {
                        data: e.reverse(),
                        appName: t,
                        onOpenApp: a,
                        onBoss: r
                    }))
                })))))
            })
        }, ee = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , te = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), ne = Object(z.autoPlay)(Object(z.virtualize)(q.a)), re = (_ = w = function(e) {
            function t() {
                var e, n, r, o;
                l(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    indexState: 0,
                    autoplay: !1
                },
                r.onSwitching = function(e) {
                    r.setState(function(e) {
                        return ee({}, e, {
                            autoplay: !1
                        })
                    })
                }
                ,
                r.handleChangeIndex = function(e) {
                    r.setState(function(t) {
                        return ee({}, t, {
                            indexState: e
                        })
                    })
                }
                ,
                o = n,
                p(r, o)
            }
            return f(t, e),
            te(t, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , r = t.commentList
                      , o = t.appName
                      , a = t.onOpenApp
                      , i = t.onBoss
                      , c = W()(r, 2).filter(function(e) {
                        return 2 === e.length
                    }).slice(0, 3)
                      , s = c.length
                      , u = this.state
                      , l = u.indexState
                      , p = u.autoplay
                      , f = function(e) {
                        var t = e.index
                          , n = (e.key,
                        (t + s + 1) % (s + 1))
                          , r = n === s
                          , u = t < s + 1
                          , l = function(e, t) {
                            (u || -1 === e.indexOf("exposure")) && i(e, ee({}, t, {
                                modulePos: n + 1
                            }))
                        };
                        return x.a.createElement($, {
                            appName: o,
                            onOpenApp: a,
                            onBoss: l,
                            key: t,
                            isPlaceholder: r,
                            commentList: !r && c[n]
                        })
                    };
                    return x.a.createElement("div", {
                        className: n
                    }, r && !!r.length && x.a.createElement(U.b, {
                        render: function(t) {
                            t.width;
                            return x.a.createElement("div", {
                                className: I.a.commentSwipeBox
                            }, x.a.createElement(A.b, {
                                className: I.a.comment
                            }, x.a.createElement("div", {
                                className: I.a.introTitle
                            }, "\u7528\u6237\u70ed\u8bc4")), x.a.createElement(F.b, {
                                onExpose: function() {
                                    e.handleChangeIndex(l + 1),
                                    setTimeout(function() {
                                        e.setState({
                                            autoplay: !0
                                        })
                                    }, 3e3)
                                },
                                exposePolicy: F.a.center
                            }, x.a.createElement(ne, {
                                slideRenderer: f,
                                index: l,
                                onChangeIndex: e.handleChangeIndex,
                                onSwitching: e.onSwitching,
                                interval: 3e3,
                                autoplay: s > 1 && p,
                                slideCount: 5e4,
                                overscanSlideAfter: s > 1 ? 10 : 0,
                                overscanSlideBefore: s > 1 ? 10 : 0,
                                springConfig: {
                                    duration: "0.5s",
                                    easeFunction: "cubic-bezier(.42, 0, .58, 1)",
                                    delay: "0s"
                                },
                                style: {
                                    overflow: "hidden",
                                    padding: "0 12.5px"
                                },
                                slideStyle: {
                                    overflow: "hidden",
                                    padding: "0 2.5px",
                                    boxSizing: "border-box"
                                }
                            })))
                        }
                    }))
                }
            }]),
            t
        }(E.PureComponent),
        w.defaultProps = {
            onOpenApp: T.g,
            onBoss: T.g
        },
        _);
        n.d(t, "b", function() {
            return se
        }),
        n.d(t, "a", function() {
            return R
        });
        var oe, ae, ie = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , ce = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), se = (ae = oe = function(e) {
            function t() {
                var e, n, r, o;
                m(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    ready: !1
                },
                o = n,
                h(r, o)
            }
            return y(t, e),
            ce(t, [{
                key: "componentWillMount",
                value: function() {
                    this.__updateData()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.commendId !== e.commendId && this.__updateData()
                }
            }, {
                key: "__updateData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = d(O.a.mark(function e() {
                        var t, n, r, o, a, i, c, s, u, l;
                        return O.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    this.setState({
                                        ready: !1
                                    }),
                                    t = this.props,
                                    n = t.commentId,
                                    r = t.hotCount,
                                    o = t.addNew,
                                    a = void 0 === o ? 0 : o,
                                    i = t.fetchedCb,
                                    c = void 0 === i ? function() {}
                                    : i,
                                    s = {
                                        comment_id: n,
                                        from: "share",
                                        lcount: "" + r,
                                        v: Object(N.b)(),
                                        addNew: a,
                                        uniqueid: Object(P.h)({
                                            preferNumber: !0
                                        }),
                                        tbkt: Object(C.c)()
                                    },
                                    e.next = 6,
                                    Object(N.a)("/getQQNewsComment?" + k.a.stringify(s));
                                case 6:
                                    u = e.sent,
                                    l = u.comments.list || u.comments.hot || [],
                                    l.length > 0 && c({
                                        hasBottomDownloader: !0
                                    }),
                                    this.setState(ie({}, this.state, {
                                        ready: !0,
                                        commentList: l
                                    })),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    console.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 12]])
                    }));
                    return e
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.ready
                      , n = e.commentList
                      , r = this.props
                      , o = r.className
                      , a = r.isWeiboComment
                      , i = r.appName
                      , c = r.onOpenApp
                      , s = r.onBoss
                      , u = r.hideLine
                      , l = r.hitCommentSwipe;
                    return t ? a ? x.a.createElement("div", {
                        className: o + " " + I.a.weiboComment
                    }, n && !!n.length && x.a.createElement("div", null, x.a.createElement("div", {
                        className: I.a.Title
                    }, "\u70ed\u95e8\u8bc4\u8bba"), x.a.createElement("div", {
                        className: I.a.TitleBorder
                    }), x.a.createElement("ul", {
                        className: I.a.commentList
                    }, n.map(function(e, t) {
                        var n = e.reverse();
                        return x.a.createElement("li", {
                            key: t
                        }, x.a.createElement("div", {
                            className: "" + I.a.commentTitle
                        }, x.a.createElement("a", null, x.a.createElement("img", {
                            src: n[0].head_url,
                            alt: "\u5934\u50cf"
                        })), x.a.createElement("em", null, n[0].nick)), x.a.createElement("div", {
                            className: "" + I.a.commentContent
                        }, n[0].reply_content, n.slice(1).map(function(e) {
                            return "//@" + e.nick + "\uff1a" + e.reply_content
                        })), x.a.createElement("div", {
                            className: "" + I.a.commentBottom
                        }, x.a.createElement("span", null, n[0].agree_count, "\u8d5e"), x.a.createElement("span", null, Object(T.e)(1e3 * n[0].pub_time))))
                    })))) : l ? x.a.createElement(re, {
                        className: o,
                        commentList: n,
                        appName: i,
                        onOpenApp: c,
                        onBoss: s
                    }) : x.a.createElement(R, {
                        className: o,
                        commentList: n,
                        hideLine: u
                    }) : x.a.createElement("div", null)
                }
            }]),
            t
        }(E.PureComponent),
        oe.defaultProps = {
            className: "",
            onOpenApp: T.g,
            onBoss: T.g
        },
        ae)
    },
    592: function(e, t) {
        e.exports = {
            wrap: "_1s9qO6ElTxkkfYmk-DoMaF",
            list: "_3BEzfkBXOzfZ7zBoLHdlu",
            item: "_2SzjyKAEjYIT1rKsoXVVPR",
            placeholderText: "_277q8TBTX3mE3Y_7x_unSL"
        }
    },
    594: function(e, t) {
        e.exports = {
            padding: "_1VrZV2Bp2pIOcr_po0CoGH",
            recommendText: "IFTLEd73DH92SC7AxggQQ",
            hotnewsText: "_1eBfDARixvnpyCYd7UYONP",
            recommendDesc: "_2ydOBZTDyuAmJrdWXkNz6r",
            hotnewsDesc: "_1JYoW3K3_49YEVGCfBPKIU",
            relatedList: "_1DCjU1rbnsS4n5gISUGOew",
            leftRelated: "_2HO6GZm0G4pU-73RE5-QpT",
            rightRelated: "_3URAzzRvdZcKWFw3kFX56W"
        }
    },
    603: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , c = n(1)
          , s = n(227)
          , u = n(622)
          , l = n(623)
          , p = 0
          , f = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var c = arguments.length, s = Array(c), u = 0; u < c; u++)
                    s[u] = arguments[u];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.originalStyles = {},
                a.listenerOptions = {
                    capture: !1,
                    passive: !1
                },
                i = n,
                o(a, i)
            }
            return a(t, e),
            i(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (s.canUseDOM) {
                        var t = this.props
                          , n = t.accountForScrollbars
                          , r = t.touchScrollTarget
                          , o = document.body
                          , a = o && o.style;
                        if (n && u.STYLE_KEYS.forEach(function(t) {
                            var n = a && a[t];
                            e.originalStyles[t] = n
                        }),
                        n && p < 1) {
                            var i = parseInt(this.originalStyles.paddingRight, 10)
                              , c = document.body ? document.body.clientWidth : 0
                              , f = window.innerWidth - c + i || 0;
                            Object.keys(u.LOCK_STYLES).forEach(function(e) {
                                var t = u.LOCK_STYLES[e];
                                a && (a[e] = t)
                            }),
                            a && (a.paddingRight = f + "px")
                        }
                        o && (0,
                        l.isTouchDevice)() && (o.addEventListener("touchmove", l.preventTouchMove, this.listenerOptions),
                        r && (r.addEventListener("touchstart", l.preventInertiaScroll, this.listenerOptions),
                        r.addEventListener("touchmove", l.allowTouchMove, this.listenerOptions))),
                        p += 1
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this;
                    if (s.canUseDOM) {
                        var t = this.props
                          , n = t.accountForScrollbars
                          , r = t.touchScrollTarget
                          , o = document.body
                          , a = o && o.style;
                        p = Math.max(p - 1, 0),
                        n && p < 1 && u.STYLE_KEYS.forEach(function(t) {
                            var n = e.originalStyles[t];
                            a && (a[t] = n)
                        }),
                        o && (0,
                        l.isTouchDevice)() && (o.removeEventListener("touchmove", l.preventTouchMove, this.listenerOptions),
                        r && (r.removeEventListener("touchstart", l.preventInertiaScroll, this.listenerOptions),
                        r.removeEventListener("touchmove", l.allowTouchMove, this.listenerOptions)))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        }(c.Component);
        f.defaultProps = {
            accountForScrollbars: !0
        },
        t.default = f
    },
    606: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function o(e, t) {
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
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
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
        function l(e, t) {
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
        function d(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
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
        function y(e, t) {
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
        var b, v, w, _, g, O, E = n(65), x = n.n(E), j = n(1), k = n.n(j), N = n(35), P = n.n(N), C = n(607), T = n.n(C), A = n(602), S = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
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
        }(), B = 0, D = function() {
            return B++
        }, I = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.method
              , r = void 0 === n ? "GET" : n
              , o = t.body
              , a = void 0 === o ? "" : o;
            return new Promise(function(t, n) {
                var o = D()
                  , i = void 0
                  , c = "fetch-iframe-iframe-" + o
                  , s = document.createElement("iframe");
                s.name = c,
                s.style.display = "none";
                var u = 0;
                s.addEventListener("load", function() {
                    1 !== ++u && (i.remove(),
                    s.remove(),
                    t())
                }),
                s.addEventListener("error", function(e) {
                    n(e)
                }),
                i = document.createElement("form"),
                i.style.display = "none",
                i.method = r,
                i.target = c,
                i.action = e,
                a.split("&").forEach(function(e) {
                    var t = e.split("=")
                      , n = S(t, 2)
                      , r = n[0]
                      , o = n[1]
                      , a = void 0 === o ? "" : o
                      , c = document.createElement("input");
                    c.name = decodeURIComponent(r),
                    c.value = decodeURIComponent(a),
                    i.appendChild(c)
                }),
                document.body.appendChild(s),
                document.body.appendChild(i),
                i.submit()
            }
            )
        }, L = I, M = n(23), R = n(571), V = n.n(R), q = n(575), z = n(608), H = n.n(z), W = function(e) {
            var t = e.className
              , n = e.checked
              , r = [H.a.checkbox];
            return t && r.push(t),
            n && r.push(H.a.checked),
            k.a.createElement("div", {
                className: V()(r)
            })
        }, U = W, F = n(609), K = n.n(F), Q = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), G = (v = b = function(e) {
            function t() {
                var e, n, r, i;
                o(this, t);
                for (var c = arguments.length, s = Array(c), u = 0; u < c; u++)
                    s[u] = arguments[u];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                r.state = {
                    checked: {}
                },
                i = n,
                a(r, i)
            }
            return i(t, e),
            Q(t, [{
                key: "componentWillMount",
                value: function() {
                    var e = this.props.voted
                      , t = {};
                    e.forEach(function(e) {
                        t[e] = !0
                    }),
                    this.setState({
                        checked: t
                    })
                }
            }, {
                key: "__onChange",
                value: function() {
                    var e = this
                      , t = this.props.onChange
                      , n = this.state.checked
                      , r = Object.keys(n).filter(function(t) {
                        return e.state.checked[t]
                    });
                    t({
                        selected: r,
                        valid: r.length > 0
                    })
                }
            }, {
                key: "__onClickOption",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = n.type
                      , a = n.onToast;
                    if (!n.showResult)
                        if ("single" === o)
                            this.state.checked = r({}, e, !0),
                            this.forceUpdate(),
                            this.__onChange();
                        else if ("multi" === o) {
                            var i = this.props.maxSelected
                              , c = Object.keys(this.state.checked).filter(function(e) {
                                return t.state.checked[e]
                            }).length;
                            if (this.state.checked[e] ? c-- : c++,
                            c > i)
                                return void a("\u672c\u9898\u6700\u591a\u53ef\u9009\u62e9" + i + "\u4e2a\u9009\u9879");
                            this.state.checked[e] = !this.state.checked[e],
                            this.forceUpdate(),
                            this.__onChange()
                        }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.type
                      , o = t.title
                      , a = t.options
                      , i = t.countTotal
                      , c = t.showResult
                      , s = t.disabled
                      , u = t.submited
                      , l = this.state.checked
                      , p = Math.max(1, i)
                      , f = a.reduce(function(e, t) {
                        return Math.max(e, t.total)
                    }, 0)
                      , d = function(e) {
                        return e.total === f
                    };
                    return k.a.createElement("div", {
                        className: K.a.question
                    }, k.a.createElement("div", {
                        className: K.a.title
                    }, o), k.a.createElement("span", {
                        className: K.a.tip
                    }, "single" === n ? "\u5355\u9009" : "\u591a\u9009", " ", Number(i) + Number(Boolean(u)), "\u4eba\u53c2\u4e0e"), k.a.createElement("div", {
                        className: K.a.options
                    }, a.map(function(t) {
                        return k.a.createElement("div", {
                            className: K.a.option,
                            onClick: function() {
                                return !s && e.__onClickOption(t.id)
                            }
                        }, t.image && k.a.createElement(q.a, {
                            className: K.a.image,
                            alt: "",
                            src: t.image
                        }), k.a.createElement("div", {
                            className: K.a.info
                        }, k.a.createElement("div", {
                            className: K.a.title
                        }, t.title), c && k.a.createElement("div", {
                            className: K.a.percent
                        }, k.a.createElement("div", {
                            className: V()(K.a.progress, r({}, K.a.isMax, d(t))),
                            style: {
                                width: t.total / p * 100 + "%"
                            }
                        }), k.a.createElement("div", {
                            className: V()(K.a.percentage, r({}, K.a.isMax, d(t)))
                        }, Math.round(t.total / p * 100), "%"))), (!c || c && l[t.id]) && k.a.createElement(U, {
                            className: K.a.checkbox,
                            checked: Boolean(l[t.id])
                        }))
                    })))
                }
            }]),
            t
        }(j.PureComponent),
        b.defaultProps = {
            onToast: M.g,
            onChange: M.g,
            voted: []
        },
        v), J = n(610), X = n.n(J), Z = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Y = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), $ = (_ = w = function(e) {
            function t() {
                var e, n, r, o;
                c(this, t);
                for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)
                    i[u] = arguments[u];
                return n = r = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    message: null,
                    className: ""
                },
                o = n,
                s(r, o)
            }
            return u(t, e),
            Y(t, [{
                key: "toast",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , r = n.delay
                      , o = n.timeout;
                    this.setState(Z({}, this.state, {
                        message: e
                    })),
                    setTimeout(function() {
                        t.setState(Z({}, t.state, {
                            className: X.a.show
                        }))
                    }, Math.min(r / 10), 100),
                    setTimeout(function() {
                        return t.hide()
                    }, o)
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this
                      , t = this.props.delay;
                    this.setState(Z({}, this.state, {
                        className: X.a.hide
                    })),
                    setTimeout(function() {
                        e.setState(Z({}, e.state, {
                            message: null
                        }))
                    }, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.message
                      , r = t.className
                      , o = this.props.delay;
                    return n ? k.a.createElement("div", {
                        className: X.a.wrap,
                        onClick: function() {
                            return e.hide()
                        }
                    }, k.a.createElement("div", {
                        ref: function(t) {
                            e.ref = t
                        },
                        className: X.a.toast + " " + r,
                        style: {
                            transition: "opacity " + o / 1e3 + "s ease-in-out"
                        }
                    }, n)) : null
                }
            }]),
            t
        }(j.PureComponent),
        w.defaultProps = {
            delay: 500,
            timeout: 3e3
        },
        _), ee = n(611), te = n.n(ee), ne = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , re = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), oe = (O = g = function(e) {
            function t() {
                var e, n, r, o;
                l(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    selected: {},
                    valid: {},
                    submited: !1
                },
                o = n,
                p(r, o)
            }
            return f(t, e),
            re(t, [{
                key: "__canQuickSubmit",
                value: function() {
                    var e = this.props
                      , t = e.quickSubmit
                      , n = e.questions;
                    return t && 1 === n.length && "single" === n[0].type
                }
            }, {
                key: "__onChangeQuestion",
                value: function(e) {
                    var t = e.id
                      , n = e.selected
                      , r = e.valid;
                    this.state.selected[t] = n,
                    this.state.valid[t] = r,
                    this.__canQuickSubmit() && this.__onSubmit()
                }
            }, {
                key: "__onSubmit",
                value: function() {
                    for (var e = this.props.questions, t = {}, n = 0; n < e.length; n++) {
                        var r = e[n].id;
                        if (!this.state.valid[r])
                            return void this.__onToast("\u8bf7\u5b8c\u6210\u5fc5\u9009\u9898\u540e\u518d\u63d0\u4ea4");
                        t[r] = this.state.selected[r]
                    }
                    this.props.onSubmit(t),
                    this.setState(ne({}, this.state, {
                        showResult: !0,
                        submited: !0
                    }))
                }
            }, {
                key: "__onToast",
                value: function(e) {
                    this.toast.toast(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , r = t.status
                      , o = t.questions
                      , a = t.isVoted
                      , i = t.voted
                      , c = this.state.submited;
                    c = c || a;
                    var s = "\u6295\u7968"
                      , u = !1
                      , l = !1;
                    "end" === r && (s = "\u5df2\u7ed3\u675f",
                    u = !0,
                    l = !0),
                    c && (s = "\u5df2\u6295\u7968",
                    u = !0,
                    l = !0),
                    "begin" === r && (s = "\u6295\u7968\u672a\u5f00\u59cb",
                    u = !0,
                    l = !1);
                    var p = !(this.__canQuickSubmit() && "normal" === r && !c);
                    return k.a.createElement("div", {
                        className: te.a.wrap + " " + n
                    }, k.a.createElement($, {
                        ref: function(t) {
                            e.toast = t
                        }
                    }), k.a.createElement("div", {
                        className: te.a.content
                    }, k.a.createElement("div", {
                        className: te.a.questions
                    }, o.map(function(t, n) {
                        return k.a.createElement(G, ne({}, t, {
                            key: n,
                            submited: c,
                            voted: i[t.id],
                            showResult: l,
                            disabled: u,
                            onChange: function(n) {
                                var r = n.selected
                                  , o = n.valid;
                                e.__onChangeQuestion({
                                    id: t.id,
                                    selected: r,
                                    valid: o
                                })
                            },
                            onToast: function(t) {
                                return e.__onToast(t)
                            }
                        }))
                    })), p && k.a.createElement("div", {
                        className: te.a.submit + " " + (u ? te.a.disabled : ""),
                        onClick: function() {
                            return !u && e.__onSubmit()
                        }
                    }, s)))
                }
            }]),
            t
        }(j.PureComponent),
        g.defaultProps = {
            className: "",
            onSubmit: M.g,
            quickSubmit: !1,
            voted: {}
        },
        O);
        n.d(t, "a", function() {
            return le
        });
        var ae, ie, ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , se = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), ue = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.code
              , n = e.data
              , r = arguments[1];
            if (console.log(n),
            0 !== Number(t))
                return null;
            var o = "normal"
              , a = n.starttime
              , i = n.endtime;
            Date.now() > new Date(i.replace(/-/g, "/")).getTime() && (o = "end"),
            Date.now() < new Date(a.replace(/-/g, "/")).getTime() && (o = "begin");
            var c = n.votecount || 0
              , s = n.voteid
              , u = r[s]
              , l = Boolean(u)
              , p = n.subject;
            return {
                id: s,
                status: o,
                isVoted: l,
                voted: u,
                total: c,
                questions: (void 0 === p ? [] : p).map(function(e) {
                    var t = e.subjectid
                      , n = e.title
                      , r = e.answertype
                      , o = e.selectmax
                      , a = e.optiontype
                      , i = e.option
                      , c = void 0 === i ? [] : i
                      , s = c.map(function(e) {
                        var t = e.optionid
                          , n = e.title
                          , r = e.selected
                          , o = e.theme;
                        return {
                            id: t,
                            title: n,
                            total: Number(r),
                            image: o && o.length ? o : null
                        }
                    })
                      , u = s.map(function(e) {
                        return e.total
                    }).reduce(function(e, t) {
                        return e + t
                    });
                    return {
                        id: t,
                        title: n,
                        required: 2 === Number(r),
                        maxSelected: Number(o) || 1 / 0,
                        type: 1 === Number(a) ? "single" : "multi",
                        options: s,
                        countTotal: u
                    }
                })
            }
        }, le = (ie = ae = function(e) {
            function t() {
                var e, n, r, o;
                m(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    ready: !1
                },
                r.__storage = Object(A.b)({
                    path: "vote",
                    storageType: A.a.local
                }),
                o = n,
                h(r, o)
            }
            return y(t, e),
            se(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = d(x.a.mark(function e() {
                        return x.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.__getVoteData();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.id !== e.id && this.__getVoteData()
                }
            }, {
                key: "__getVoteData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = d(x.a.mark(function e() {
                        var t, n, r, o;
                        return x.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.setState(ce({}, this.state, {
                                        ready: !1
                                    })),
                                    t = this.props.id,
                                    e.next = 4,
                                    T()("//panshi.qq.com/v2/vote/" + t);
                                case 4:
                                    return n = e.sent,
                                    e.next = 7,
                                    n.json();
                                case 7:
                                    r = e.sent,
                                    o = ue(r, this.__storage.get() || {}),
                                    o && this.setState(ce({}, this.state, o, {
                                        ready: !0
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__onSubmit",
                value: function(e) {
                    this.__storage.get() || this.__storage.set({}),
                    this.__storage.set("" + this.state.id, e);
                    var t = [];
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t["sbj_" + n] = e[n]);
                    var r = P.a.stringify(ce({
                        result: 1,
                        fmt: "json",
                        PjtID: this.props.id
                    }, t)).replace(/%5B\d+%5D/g, "%5B%5D");
                    L("//input.vote.qq.com/survey.php", {
                        method: "POST",
                        mode: "cors",
                        body: r
                    }).catch(function(e) {
                        return console.error(e)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.ready
                      , r = t.status
                      , o = t.isVoted
                      , a = t.voted
                      , i = t.total
                      , c = t.questions
                      , s = this.props.className;
                    return n ? k.a.createElement(oe, {
                        className: s,
                        status: r,
                        total: i,
                        isVoted: o,
                        voted: a,
                        questions: c,
                        quickSubmit: !0,
                        onSubmit: function(t) {
                            return e.__onSubmit(t)
                        }
                    }) : k.a.createElement("div", null)
                }
            }]),
            t
        }(j.PureComponent),
        ae.defaultProps = {
            className: ""
        },
        ie)
    },
    607: function(e, t, n) {
        var r, o, a;
        !function(n, i) {
            o = [t, e],
            r = i,
            void 0 !== (a = "function" === typeof r ? r.apply(t, o) : r) && (e.exports = a)
        }(0, function(e, t) {
            "use strict";
            function n() {
                return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
            }
            function r(e) {
                try {
                    delete window[e]
                } catch (t) {
                    window[e] = void 0
                }
            }
            function o(e) {
                var t = document.getElementById(e);
                document.getElementsByTagName("head")[0].removeChild(t)
            }
            function a(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , a = e
                  , c = t.timeout || i.timeout
                  , s = t.jsonpCallback || i.jsonpCallback
                  , u = void 0;
                return new Promise(function(i, l) {
                    var p = t.jsonpCallbackFunction || n()
                      , f = s + "_" + p;
                    window[p] = function(e) {
                        i({
                            ok: !0,
                            json: function() {
                                return Promise.resolve(e)
                            }
                        }),
                        u && clearTimeout(u),
                        o(f),
                        r(p)
                    }
                    ,
                    a += -1 === a.indexOf("?") ? "?" : "&";
                    var d = document.createElement("script");
                    d.setAttribute("src", "" + a + s + "=" + p),
                    t.charset && d.setAttribute("charset", t.charset),
                    d.id = f,
                    document.getElementsByTagName("head")[0].appendChild(d),
                    u = setTimeout(function() {
                        l(new Error("JSONP request to " + e + " timed out")),
                        r(p),
                        o(f)
                    }, c)
                }
                )
            }
            var i = {
                timeout: 5e3,
                jsonpCallback: "callback",
                jsonpCallbackFunction: null
            };
            t.exports = a
        })
    },
    608: function(e, t) {
        e.exports = {
            checkbox: "_3W-a37MNxriR4Rl_5w0oMD",
            checked: "Y4Wfyz093N_8D9wpMcjTq"
        }
    },
    609: function(e, t) {
        e.exports = {
            questions: "BJSqDPhJcySN0QbJlNCPL",
            question: "e1x_RSp7atpePT-UCNeFc",
            title: "_1_phcxMbpPDyIyJEmBZ-4Y",
            tip: "dvoHxHmhQ_hpw2kL3VVqm",
            options: "_3ENOha9Fu_fcYh57xrRFB3",
            option: "_2DXu_jr2ZwQtaPw26EeWOx",
            image: "_1lukM0CmYTBSto0XdqJtf4",
            info: "I9oM08hGcHghqTs9RVGnf",
            percent: "_3WpXCNa46GyNjAmKqxTAgu",
            progress: "_3UxFC2fpXp35IlTAIcD9LP",
            isMax: "_2LGV9P2wCz4AZjbwq5rKOO",
            percentage: "_1vuamgwPfaLwtMUaPTwq_p",
            checkbox: "_3bqAPfFERE7wLsJ0aAYSKz"
        }
    },
    610: function(e, t) {
        e.exports = {
            wrap: "_1oQljYRWTZQjakFDDeEQXl",
            toast: "_2i71B20O_dC9KDlKznkMKI",
            show: "_2sHHq9qwXi1pU8f1C9paV2",
            hide: "_3trAIB9kAryMFPwKi4o0u"
        }
    },
    611: function(e, t) {
        e.exports = {
            wrap: "_2lLQaty5qSHEOR1vKHZg43",
            content: "_1Uq3V0l0XuRZIW9MVaTjmC",
            submit: "WqQwwpdVi26Nho8Nz9SE8",
            disabled: "_2vCsub87I6nQ3vOjNC74zJ"
        }
    },
    612: function(e, t, n) {
        "use strict";
        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function o(e, t) {
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
        function c(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function s(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
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
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
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
        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function b(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function v(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function w(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function _(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function g(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function O(e, t) {
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
        function x(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function j(e, t) {
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
        function k(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function P(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function C(e, t) {
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
        var A, S, B, D, I, L, M, R, V, q, z, H, W = n(65), U = n.n(W), F = n(1), K = n.n(F), Q = n(604), G = n.n(Q), J = n(75), X = n(576), Z = n(583), Y = n(214), $ = n.n(Y), ee = n(215), te = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments[1]
              , n = arguments[2];
            if (!Object(ee.c)(e))
                return console.error("source\u4e3a" + e + ",\u4e0d\u662f\u5bf9\u8c61"),
                n;
            if (!Object(ee.c)(t))
                return console.error("rules\u4e3a" + t + ",\u4e0d\u662f\u5bf9\u8c61"),
                n;
            try {
                var r = Object.keys(t)
                  , o = t._extraInfo || {}
                  , a = {}
                  , i = $()({
                    target: a
                })
                  , c = $()({
                    target: e
                });
                return r.forEach(function(e, n) {
                    i.set(e, "undefined" === typeof c.get(e) ? c.get(t[e]) : c.get(e))
                }),
                Object.assign(e, a, o)
            } catch (e) {
                return console.error("\u8bf7\u68c0\u67e5source\u548crules\u914d\u7f6e\uff0c\u4e24\u8005\u90fd\u5fc5\u987b\u4e3a\u5bf9\u8c61!"),
                n
            }
        }, ne = n(74), re = n(149), oe = n(211), ae = n(35), ie = n.n(ae), ce = n(23), se = n(569), ue = n(73), le = n(613), pe = n.n(le), fe = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , de = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), me = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    ready: !1,
                    showNum: 20
                },
                n.__onItemClick = n.__onItemClick.bind(n),
                n.__onItemExpose = n.__onItemExpose.bind(n),
                n
            }
            return i(t, e),
            de(t, [{
                key: "componentWillMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = r(U.a.mark(function e() {
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.__fetchData();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "componentWillReceiveProps",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = r(U.a.mark(function e(t) {
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t.newsId !== this.props.newsId && this.__fetchData();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__fetchData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = r(U.a.mark(function e() {
                        var t, n, r, o, a, i, c, s, u, l;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props,
                                    n = t.newsId,
                                    r = t.path,
                                    o = t.atype,
                                    a = t.isAlbum,
                                    i = t.fetchedCb,
                                    c = {
                                        id: n,
                                        alg_version: 1,
                                        source: "news",
                                        tbkt: Object(re.c)(),
                                        openid: Object(ue.h)({
                                            preferNumber: !1
                                        }),
                                        path: r
                                    },
                                    e.next = 4,
                                    Object(oe.a)("/getNewRelateRecomm?" + Object(ae.stringify)(c));
                                case 4:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {};
                                case 7:
                                    s = e.t0,
                                    u = s.info,
                                    l = null,
                                    u || (u = []),
                                    l = u.map(function(e, t) {
                                        return te(e, {
                                            _extraInfo: a ? {
                                                showType: 9
                                            } : {
                                                url: Object(ce.c)({
                                                    appName: "news",
                                                    id: e.id,
                                                    path: r
                                                }),
                                                path: r,
                                                showType: 9,
                                                atype: o
                                            }
                                        })
                                    }),
                                    this.setState({
                                        videoList: l,
                                        ready: !0,
                                        showNum: s.showNum || this.state.showNum
                                    }, function() {
                                        "function" === typeof i && i({
                                            hasBottomDownloader: 0,
                                            hot: Array.isArray(s.hot) ? s.hot : []
                                        })
                                    });
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__onItemExpose",
                value: function(e) {
                    var t = e.index
                      , n = e.id
                      , r = e.algorithm;
                    (0,
                    this.props.onBoss)("recommend_item_exposure", {
                        modulePos: t + 1,
                        moduleNewsId: n,
                        algorithm: r
                    }),
                    this.downloaders && this.downloaders[t] && this.downloaders[t].expose()
                }
            }, {
                key: "__onItemClick",
                value: function(e) {
                    var t = e.index
                      , n = e.id
                      , r = e.algorithm
                      , o = this.props.onBoss
                      , a = this.props.apiType;
                    Object(ne.d)(a + ".recommend.visitedList", n),
                    o("recommend_item_click", {
                        modulePos: t + 1,
                        moduleNewsId: n,
                        algorithm: r
                    }),
                    this.downloaders && this.downloaders[t] && this.downloaders[t].click()
                }
            }, {
                key: "hasDownloader",
                value: function(e) {
                    var t = e.index
                      , n = e.downloaderNumber;
                    return e.isAlbum ? G()(t, 1, n + 1) : G()(t, 0, n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = void 0 === n ? [] : n
                      , o = t.isAlbum
                      , a = t.onClickItem
                      , i = t.headerTitle
                      , c = t.atype
                      , s = t.appName
                      , u = t.appDisplayName
                      , l = t.onBoss
                      , p = t.currentId
                      , f = t.onOpenApp
                      , d = t.downloaderNumber
                      , m = void 0 === d ? 0 : d
                      , h = t.articleType
                      , y = this.state
                      , b = y.videoList
                      , v = void 0 === b ? r : b
                      , w = y.ready
                      , _ = y.showNum;
                    return w ? K.a.createElement("div", {
                        className: pe.a.recommendCon
                    }, K.a.createElement(X.a, {
                        restStyles: {
                            hr: {
                                borderBottom: "0.005rem solid #E7EBEE"
                            }
                        }
                    }, K.a.createElement("span", {
                        className: pe.a.recommendTitle
                    }, i)), K.a.createElement("ul", {
                        className: pe.a["feed-ul"]
                    }, v.slice(0, _).map(function(t, n) {
                        return K.a.createElement(se.b, {
                            key: n,
                            onExpose: function() {
                                e.__onItemExpose({
                                    index: n,
                                    id: t.id,
                                    algorithm: "0"
                                })
                            },
                            onClick: function() {
                                e.__onItemClick({
                                    index: n,
                                    id: t.id,
                                    algorithm: "0"
                                }),
                                console.warn("videoItem.id", t.id)
                            }
                        }, K.a.createElement(J.f, fe({}, t, {
                            isAlbum: o,
                            onClickItem: a,
                            currentId: p,
                            articleType: h,
                            atype: c,
                            downloader: e.hasDownloader({
                                index: n,
                                isAlbum: o,
                                downloaderNumber: m
                            }) ? function(r) {
                                return K.a.createElement(Z.e, fe({}, r, {
                                    className: pe.a.downloader,
                                    restCls: {
                                        downloaderText: pe.a.downloaderText
                                    },
                                    ref: function(t) {
                                        e.downloaders || (e.downloaders = {}),
                                        e.downloaders[n] = t
                                    },
                                    appName: s,
                                    appDisplayName: u,
                                    onBoss: l,
                                    onOpenApp: function() {
                                        return f({
                                            id: t.id
                                        })
                                    },
                                    options: {
                                        modulePos: n + 1,
                                        moduleNewsId: t.id
                                    }
                                }))
                            }
                            : null,
                            restCls: {
                                icon: "isPlaying"
                            },
                            restStyles: {
                                title: {
                                    color: "#2883E9"
                                }
                            }
                        })))
                    }))) : null
                }
            }]),
            t
        }(F.Component), he = n(57), ye = n(577), be = n(99), ve = n.n(be), we = this, _e = function() {
            var e = c(U.a.mark(function e(t) {
                var n = t.src
                  , r = t.async;
                return U.a.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            throw new Error("loadScript: src must be set");
                        case 2:
                            if (!r) {
                                e.next = 5;
                                break
                            }
                            return e.next = 5,
                            Object(ce.l)(0);
                        case 5:
                            return e.next = 7,
                            new Promise(function(e, t) {
                                var r = document.createElement("script");
                                r.src = n,
                                r.async = !0,
                                r.onload = e,
                                r.onreadystatechange = function() {
                                    "complete" === we.readyState && e()
                                }
                                ,
                                document.getElementsByTagName("head")[0].appendChild(r)
                            }
                            );
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e, we)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ge = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Oe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Ee = {
            weixin: "//mat1.gtimg.com/www/js/newsapp/wechat/ad/dia-min-20170607.js",
            mqq: "//h5.ssp.qq.com/static/web/websites/dia-mqq-min-20171227.js"
        }, xe = function(e) {
            function t(e) {
                var n = e.type;
                u(this, t);
                var r = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.__type = n,
                r
            }
            return p(t, e),
            Oe(t, [{
                key: "__init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = s(U.a.mark(function e() {
                        var t, n, r = this;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        hotNewsReady: function(e) {
                                            return e()
                                        },
                                        setHotNewsAd: function(e) {
                                            var t = e.data
                                              , n = e.callback;
                                            r.emit("data:" + t.loc, {
                                                data: t,
                                                callback: n
                                            })
                                        }
                                    },
                                    n = "weixin" === this.__type ? "openAppController" : "newsApi",
                                    window[n] = t,
                                    e.next = 5,
                                    _e({
                                        src: Ee[this.__type],
                                        async: !0
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
                key: "ready",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = s(U.a.mark(function e() {
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.__ready || (this.__ready = this.__init()),
                                    e.abrupt("return", this.__ready);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getAd",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = s(U.a.mark(function e(t) {
                        var n, r, o, a, i, c, s = this;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.ready();
                                case 2:
                                    return n = new window.Dia,
                                    n.create(ge({
                                        hasad: !0
                                    }, t, {
                                        callback: function() {}
                                    })),
                                    e.next = 6,
                                    new Promise(function(e, n) {
                                        s.once("data:" + t.locid, function(t) {
                                            e(t)
                                        })
                                    }
                                    );
                                case 6:
                                    if (r = e.sent,
                                    o = r.data,
                                    a = r.callback,
                                    i = o.hasAd,
                                    c = void 0 === i ? 1 : i,
                                    c) {
                                        e.next = 13;
                                        break
                                    }
                                    return a && a({
                                        ret: 1,
                                        msg: "ok",
                                        id: o.loc,
                                        ready_time: (new Date).getTime()
                                    }),
                                    e.abrupt("return", null);
                                case 13:
                                    return a && a({
                                        ret: 0,
                                        msg: "ok",
                                        id: o.loc,
                                        ready_time: (new Date).getTime()
                                    }),
                                    e.abrupt("return", o);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }]),
            t
        }(ve.a), je = {
            weixin: new xe({
                type: "weixin"
            }),
            mqq: new xe({
                type: "mqq"
            })
        }, ke = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Ne = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Pe = (S = A = function(e) {
            function t() {
                var e, n, r, o;
                d(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    ready: !1
                },
                o = n,
                m(r, o)
            }
            return h(t, e),
            Ne(t, [{
                key: "componentDidMount",
                value: function() {
                    this.__init()
                }
            }, {
                key: "__getLocid",
                value: function() {
                    return "weixin" === this.props.type ? "App_WX_Hot_Stream" : "App_QQ_Hot_Stream"
                }
            }, {
                key: "__init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = f(U.a.mark(function e() {
                        var t, n, r, o;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props,
                                    n = t.type,
                                    r = t.newsId,
                                    e.next = 3,
                                    je[n].getAd({
                                        locid: this.__getLocid(),
                                        contentid: r,
                                        js_loadtime: (new Date).getTime(),
                                        bgcolor: "#f6f6f6",
                                        inittime: (new Date).getTime(),
                                        appversion: 1,
                                        seq: 6
                                    });
                                case 3:
                                    o = e.sent,
                                    o && this.setState(ke({}, this.state, {
                                        ready: !0,
                                        data: o
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
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.ready
                      , n = e.data
                      , r = this.props.children;
                    return K.a.createElement("div", {
                        id: this.__getLocid()
                    }, t && r({
                        data: n
                    }))
                }
            }]),
            t
        }(F.PureComponent),
        A.defaultProps = {
            type: "weixin"
        },
        S), Ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Te = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Ae = {
            weixin: "//h5.ssp.qq.com/static/web/websites/newsplugin/ssp_ad_20180124.js",
            mqq: "//h5.ssp.qq.com/static/web/websites/dia-mqq-min-20171227.js"
        }, Se = function() {
            function e(t) {
                var n = t.type;
                v(this, e),
                this.__type = n
            }
            return Te(e, [{
                key: "__init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = b(U.a.mark(function e() {
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    _e({
                                        src: Ae[this.__type],
                                        async: !0
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "ready",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = b(U.a.mark(function e() {
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.__ready || (this.__ready = this.__init()),
                                    e.abrupt("return", this.__ready);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getAd",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = b(U.a.mark(function e(t) {
                        var n, r, o;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.ready();
                                case 2:
                                    return n = ie.a.parse(document.location.search.replace(/\?/, "")),
                                    r = n.wuid,
                                    o = void 0 === r ? "" : r,
                                    e.abrupt("return", new Promise(function(e) {
                                        window.SSPAd.create(Ce({
                                            hasad: !0,
                                            wuid: o,
                                            appversion: 1,
                                            callback: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                                                  , n = arguments[1]
                                                  , r = t.reduce(function(e, t) {
                                                    return Ce({}, e, y({}, t.loid, t))
                                                }, {});
                                                e([r, function() {
                                                    return n(t)
                                                }
                                                ])
                                            }
                                        }, t))
                                    }
                                    ));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }]),
            e
        }(), Be = {
            weixin: new Se({
                type: "weixin"
            }),
            mqq: new Se({
                type: "mqq"
            })
        }, De = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Ie = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
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
        }(), Le = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Me = (D = B = function(e) {
            function t() {
                var e, n, r, o;
                _(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = g(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    ready: !1
                },
                o = n,
                g(r, o)
            }
            return O(t, e),
            Le(t, [{
                key: "componentDidMount",
                value: function() {
                    this.__init()
                }
            }, {
                key: "__init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = w(U.a.mark(function e() {
                        var t, n, r, o, a, i;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = "10",
                                    n = this.props.type,
                                    e.next = 4,
                                    Be[n].getAd({
                                        loid: t
                                    });
                                case 4:
                                    r = e.sent,
                                    o = Ie(r, 2),
                                    a = o[0],
                                    i = o[1],
                                    a && this.setState(De({}, this.state, {
                                        ready: !0,
                                        data: a[t]
                                    }), function() {
                                        return i()
                                    });
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
                    var e = this.state
                      , t = e.ready
                      , n = e.data
                      , r = this.props.children;
                    if (!t)
                        return null;
                    var o = n.locDomId
                      , a = n.navTitle
                      , i = n.longTitle
                      , c = n.resource_url0
                      , s = n.oid;
                    return Number(s) <= 100 ? K.a.createElement("div", {
                        id: o
                    }) : K.a.createElement("div", {
                        id: o
                    }, r({
                        data: {
                            source: a,
                            title: i,
                            images: [c]
                        }
                    }))
                }
            }]),
            t
        }(F.PureComponent),
        B.defaultProps = {
            type: "weixin"
        },
        D), Re = n(593), Ve = n(213), qe = n(148), ze = n(230), He = n(594), We = n.n(He), Ue = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Fe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Ke = this, Qe = function(e) {
            var t = (e.id,
            e.atype)
              , n = e.ext
              , r = e.imgurl
              , o = e.news_ext
              , a = Ve.a.noPic
              , i = n && n.action && n.action.lsImgExpType;
            switch (Number(i)) {
            case 1:
                a = Ve.a.standard;
                break;
            case 3:
                a = Ve.a.multiPic;
                break;
            case 4:
                a = Ve.a.noPic;
                break;
            default:
                a = 1 === Number(t) ? Ve.a.multiPic : Ve.a.standard
            }
            var c = r ? [r] : [];
            return o && o.ext && o.ext.action && o.ext.action.lsImgExpType && (c = [o.imgurl]),
            c.length || (a = Ve.a.noPic),
            {
                images: c,
                type: a
            }
        }, Ge = function() {
            var e = k(U.a.mark(function e(t) {
                return U.a.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch("/g2/exposure?" + ie.a.stringify(t));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e, Ke)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), Je = (I = Object(ze.b)(),
        Object(he.a)((V = R = function(e) {
            function t() {
                var e, n, r, o;
                E(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = x(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    recommend: [],
                    maxRecommendLength: null
                },
                r.__bossWithExt = function(e) {
                    return function(t, n) {
                        (0,
                        r.props.onBoss)(t, Ue({}, n, e))
                    }
                }
                ,
                r.downloaders = {},
                o = n,
                x(r, o)
            }
            return j(t, e),
            Fe(t, [{
                key: "componentWillMount",
                value: function() {
                    this.__fetchData()
                }
            }, {
                key: "__fetchData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = k(U.a.mark(function e() {
                        var t, n, r, o, a, i, c, s, u;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.props,
                                    n = t.newsId,
                                    r = t.apiType,
                                    o = t.path,
                                    e.prev = 1,
                                    "weixinHotNews" !== r) {
                                        e.next = 11;
                                        break
                                    }
                                    return a = ie.a.parse(window.location.search.slice(1)),
                                    i = {
                                        openid: Object(ue.h)({
                                            preferNumber: !1
                                        }),
                                        newsid: n,
                                        cur_pos: a.cur_pos,
                                        v: Object(oe.b)(),
                                        pad_chl: 3033,
                                        tbkt: Object(re.c)(),
                                        path: o
                                    },
                                    e.next = 7,
                                    Object(oe.a)("/weixinHotNews?" + ie.a.stringify(i));
                                case 7:
                                    c = e.sent,
                                    this.setState(Ue({}, this.state, {
                                        recommend: c.info,
                                        maxRecommendLength: c.showNum || this.state.maxRecommendLength,
                                        hotVideo: c.hotVideo
                                    })),
                                    e.next = 17;
                                    break;
                                case 11:
                                    if ("getRelateRecomm" !== r) {
                                        e.next = 17;
                                        break
                                    }
                                    return s = {
                                        id: n,
                                        alg_version: 1,
                                        source: "news",
                                        tbkt: Object(re.c)(),
                                        openid: Object(ue.h)({
                                            preferNumber: !1
                                        }),
                                        path: o
                                    },
                                    e.next = 15,
                                    Object(oe.a)("/getNewRelateRecomm?" + ie.a.stringify(s));
                                case 15:
                                    u = e.sent,
                                    this.setState(Ue({}, this.state, {
                                        recommend: u.info && u.info.map(function(e) {
                                            return e.imgurl = e.thumbnails_qqnews,
                                            e
                                        }),
                                        hotVideo: u.hotVideo && u.hotVideo.map(function(e) {
                                            return e.imgurl = e.img_big,
                                            e
                                        })[0],
                                        maxRecommendLength: u.showNum || this.state.maxRecommendLength,
                                        cate: u.cate
                                    }));
                                case 17:
                                    e.next = 23;
                                    break;
                                case 19:
                                    e.prev = 19,
                                    e.t0 = e.catch(1),
                                    console.error("ArticleRecommend: fetch failed", n, r),
                                    console.error(e.t0);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[1, 19]])
                    }));
                    return e
                }()
            }, {
                key: "__onAdLoad",
                value: function() {
                    (0,
                    this.props.onBoss)("wx_ad_load")
                }
            }, {
                key: "__onItemExpose",
                value: function(e) {
                    var t = e.index;
                    this.downloaders[t] && this.downloaders[t].expose()
                }
            }, {
                key: "__onItemClick",
                value: function(e) {
                    var t = e.index
                      , n = e.id
                      , r = this.props.apiType;
                    Object(ne.d)(r + ".recommend.visitedList", n),
                    this.downloaders[t] && this.downloaders[t].click()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , r = t.title
                      , o = t.appName
                      , a = t.appDisplayName
                      , i = t.downloaderNumber
                      , c = t.onBoss
                      , s = t.onOpenApp
                      , u = t.onOpenAppTopic
                      , l = t.apiType
                      , p = t.path
                      , f = t.nextPath
                      , d = t.showAd
                      , m = t.hotNewsBlock
                      , h = t.appTransferInfo
                      , y = t.relNews
                      , b = t.topicId
                      , v = t.onClickDownloadAction
                      , w = this.state
                      , _ = w.maxRecommendLength
                      , g = w.hotVideo
                      , O = []
                      , E = function(e) {
                        var t = O.length
                          , n = e({
                            index: t,
                            isDownloader: t < i
                        });
                        O.push(n)
                    }
                      , x = !m && this.state.hotVideo ? "1" : "0";
                    if (h && !g) {
                        var j = h.art_title
                          , k = h.imgurl
                          , N = h.aid;
                        N && E(function(t) {
                            var n = t.index
                              , r = t.isDownloader
                              , i = e.__bossWithExt({
                                modulePos: n + 1,
                                moduleNewsId: N,
                                algorithm: "0",
                                isBigVideo: "0",
                                hasBigVideo: x
                            });
                            return K.a.createElement(Re.a, {
                                key: n,
                                appName: o,
                                appDisplayName: a,
                                useDownloader: r,
                                onBoss: i,
                                onOpenApp: function() {
                                    return s({
                                        id: N
                                    })
                                },
                                onClickDownloadAction: v,
                                onExpose: function() {
                                    i("recommend_item_exposure"),
                                    e.__onItemExpose({
                                        index: n,
                                        id: N
                                    })
                                },
                                onClick: function() {
                                    i("recommend_item_click"),
                                    e.__onItemClick({
                                        index: n,
                                        id: N
                                    })
                                },
                                type: Ve.a.bigVideo,
                                title: j,
                                images: [k],
                                hidePlaycount: !0,
                                hideTime: !0,
                                hideVideoTag: !0,
                                hideMultiPicTag: r,
                                weixinStyle: !0,
                                url: Object(ce.a)(Object(ce.c)({
                                    appName: o,
                                    id: N,
                                    path: f
                                }), {
                                    refer: "wx_hot"
                                }),
                                visited: Object(ne.c)(l + ".recommend.visitedList", N),
                                lineClamp: 3
                            })
                        })
                    }
                    if (!m && this.state.hotVideo && null !== _ && O.length < _) {
                        var P = this.state.hotVideo
                          , C = P.source
                          , T = P.imgurl
                          , A = P.id
                          , S = P.reason;
                        E(function(t) {
                            var n = t.index
                              , r = t.isDownloader
                              , i = e.__bossWithExt({
                                modulePos: n + 1,
                                moduleNewsId: A,
                                algorithm: "1",
                                isBigVideo: "1",
                                hasBigVideo: x,
                                reason: S
                            });
                            return K.a.createElement(Re.a, Ue({
                                key: n,
                                appName: o,
                                appDisplayName: a,
                                useDownloader: r,
                                onBoss: i,
                                onOpenApp: function() {
                                    return s({
                                        id: A
                                    })
                                },
                                onClickDownloadAction: v,
                                onExpose: function() {
                                    i("recommend_item_exposure"),
                                    e.__onItemExpose({
                                        index: n,
                                        id: A
                                    })
                                },
                                onClick: function() {
                                    i("recommend_item_click"),
                                    e.__onItemClick({
                                        index: n,
                                        id: A
                                    })
                                }
                            }, P, {
                                source: C,
                                visited: Object(ne.c)(l + ".recommend.visitedList", A),
                                type: Ve.a.bigVideo,
                                hideMultiPicTag: !0,
                                url: "",
                                images: [T],
                                hidePlaycount: !0,
                                hideTime: !0,
                                hideVideoTag: !0,
                                weixinStyle: !0,
                                lineClamp: 3
                            }))
                        })
                    }
                    for (var B = 0; B < y.length; B++)
                        !function(t) {
                            var n = y[t]
                              , r = Ue({}, n, n.news_ext)
                              , i = r.src
                              , c = void 0 === i ? n.chlname : i
                              , u = r.id
                              , p = Qe(n)
                              , d = p.type
                              , m = p.images;
                            E(function(t) {
                                var r = t.index
                                  , i = t.isDownloader
                                  , p = e.__bossWithExt({
                                    modulePos: r + 1,
                                    moduleNewsId: u,
                                    algorithm: "0",
                                    isBigVideo: "0",
                                    hasBigVideo: x
                                });
                                return K.a.createElement(Re.a, Ue({
                                    key: r,
                                    appName: o,
                                    appDisplayName: a,
                                    useDownloader: i,
                                    onBoss: p,
                                    onOpenApp: function() {
                                        return s({
                                            id: u
                                        })
                                    },
                                    onClickDownloadAction: v,
                                    onExpose: function() {
                                        p("recommend_item_exposure"),
                                        e.__onItemExpose({
                                            index: r,
                                            id: u
                                        })
                                    },
                                    onClick: function() {
                                        p("recommend_item_click"),
                                        e.__onItemClick({
                                            index: r,
                                            id: u
                                        })
                                    }
                                }, n, {
                                    visited: Object(ne.c)(l + ".recommend.visitedList", u),
                                    source: c,
                                    type: d,
                                    images: m,
                                    hidePlaycount: !0,
                                    hideTime: !0,
                                    hideVideoTag: !0,
                                    hideMultiPicTag: i,
                                    weixinStyle: !0,
                                    url: Object(ce.a)(Object(ce.c)({
                                        appName: o,
                                        id: u,
                                        path: f
                                    }), {
                                        refer: "wx_hot"
                                    }),
                                    lineClamp: 3
                                }))
                            })
                        }(B);
                    if (m || null !== _ && O.length < _ && function() {
                        for (var t = e.state.recommend || [], n = e.state.cate, r = 0; r < t.length; r++) {
                            if ("break" === function(r) {
                                var i = t[r]
                                  , c = i.src
                                  , u = i.imgurl
                                  , p = i.id
                                  , d = void 0;
                                if (d = u ? u.length > 1 ? Ve.a.multiPic : 1 === u.length ? Ve.a.standard : Ve.a.noPic : Ve.a.noPic,
                                E(function(t) {
                                    var r = t.index
                                      , m = t.isDownloader
                                      , h = e.__bossWithExt({
                                        modulePos: r + 1,
                                        moduleNewsId: p,
                                        algorithm: "1",
                                        isBigVideo: "0",
                                        hasBigVideo: x
                                    });
                                    return K.a.createElement(Re.a, Ue({
                                        key: r,
                                        appName: o,
                                        appDisplayName: a,
                                        useDownloader: m,
                                        onBoss: h,
                                        onOpenApp: function() {
                                            return s({
                                                id: p
                                            })
                                        },
                                        onClickDownloadAction: v,
                                        onExpose: function() {
                                            h("recommend_item_exposure"),
                                            e.__onItemExpose({
                                                index: r,
                                                id: p
                                            }),
                                            i.needExposure && Ge({
                                                id: i.id,
                                                openid: Object(ue.h)({
                                                    preferNumber: !1
                                                }),
                                                cate: n
                                            })
                                        },
                                        onClick: function() {
                                            h("recommend_item_click"),
                                            e.__onItemClick({
                                                index: r,
                                                id: p
                                            })
                                        }
                                    }, i, {
                                        source: c,
                                        visited: Object(ne.c)(l + ".recommend.visitedList", p),
                                        type: d,
                                        hideMultiPicTag: m,
                                        url: Object(ce.a)(Object(ce.c)({
                                            appName: o,
                                            id: p,
                                            path: f
                                        }), {
                                            refer: "wx_hot"
                                        }),
                                        images: u,
                                        hidePlaycount: !0,
                                        hideTime: !0,
                                        hideVideoTag: !0,
                                        weixinStyle: !0,
                                        lineClamp: 3
                                    }))
                                }),
                                O.length === _)
                                    return "break"
                            }(r))
                                break
                        }
                    }(),
                    !m && d) {
                        this.__onAdLoad();
                        O.splice(5, 0, "w" === p ? K.a.createElement(Me, {
                            key: "ad",
                            type: "w" === p ? "weixin" : "mqq"
                        }, function(e) {
                            var t = e.data;
                            return K.a.createElement(Re.a, Ue({}, t, {
                                type: Ve.a.standard,
                                isAd: !0,
                                lineClamp: 3,
                                hidePlaycount: !0,
                                hideTime: !0,
                                hideVideoTag: !0,
                                weixinStyle: !0,
                                forceShowBorderBottom: 5 < O.length
                            }))
                        }) : K.a.createElement(Pe, {
                            key: "ad",
                            type: "w" === p ? "weixin" : "mqq",
                            newsId: this.props.newsId
                        }, function(e) {
                            var t = e.data
                              , n = t.fodder && t.fodder[0] || {}
                              , r = n.info
                              , a = n.resource_url
                              , i = n.text;
                            return K.a.createElement(Re.a, {
                                source: r,
                                title: i,
                                type: Ve.a.standard,
                                images: [a],
                                isAd: !0,
                                lineClamp: 3,
                                hidePlaycount: !0,
                                hideTime: !0,
                                hideVideoTag: !0,
                                weixinStyle: !0,
                                appName: o,
                                forceShowBorderBottom: 5 < O.length
                            })
                        }))
                    }
                    return b && "news" === o && O.unshift(K.a.createElement(ye.l, {
                        topicId: b,
                        key: b,
                        appName: o,
                        appDisplayName: a,
                        onBoss: c,
                        onOpenApp: function() {
                            return u({
                                topicId: b,
                                tabId: "comment"
                            })
                        }
                    })),
                    O.length ? K.a.createElement(se.b, {
                        onExpose: function() {
                            c("recommend_exposure"),
                            qe.e.then(function() {
                                c(he.b.get("appManager." + o + ".installed") ? "recommend_open_exposure" : "recommend_download_exposure")
                            })
                        },
                        onClick: function() {
                            return c("recommend_click")
                        }
                    }, K.a.createElement("div", {
                        className: n
                    }, K.a.createElement("div", {
                        className: We.a.padding
                    }, K.a.createElement(X.b, {
                        className: We.a.recommendText
                    }, K.a.createElement("div", {
                        className: We.a.recommendDesc
                    }, r))), O)) : null
                }
            }]),
            t
        }(F.Component),
        R.defaultProps = {
            className: "",
            title: "\u70ed\u95e8\u63a8\u8350",
            onBoss: ce.g,
            onOpenApp: ce.g,
            onOpenAppTopic: ce.g,
            showAd: !0,
            topicData: ce.g,
            downloaderNumber: 0,
            onClickDownloadAction: ce.g
        },
        M = V,
        function(e, t, n, r, o) {
            var a = {};
            return Object.keys(r).forEach(function(e) {
                a[e] = r[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = n.slice().reverse().reduce(function(n, r) {
                return r(e, t, n) || n
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(e, t, a),
            a = null),
            a
        }(M.prototype, "__onAdLoad", [I], Object.getOwnPropertyDescriptor(M.prototype, "__onAdLoad"), M.prototype),
        L = M)) || L), Xe = n(39), Ze = n(571), Ye = n.n(Ze), $e = n(575), et = n(30), tt = n(614), nt = n.n(tt), rt = function(e) {
            var t = e.appName
              , n = e.atype
              , r = e.type
              , o = void 0 === r ? Ve.a.standard : r
              , a = e.title
              , i = void 0 === a ? "" : a
              , c = e.isVisited
              , s = e.images
              , u = void 0 === s ? [] : s
              , l = e.source
              , p = void 0 === l ? "" : l
              , f = e.lineClamp
              , d = void 0 === f ? 3 : f
              , m = e.url
              , h = e.comments
              , y = void 0 === h ? 0 : h;
            return K.a.createElement(et.a, {
                className: nt.a.content,
                href: m,
                atype: n
            }, o !== Ve.a.noPic && K.a.createElement($e.a, {
                className: nt.a.image,
                src: u[0],
                alt: ""
            }, (o === Ve.a.smallVideo || o === Ve.a.multiPic) && K.a.createElement("div", {
                className: nt.a.imageIcon
            }, K.a.createElement("img", {
                src: o === Ve.a.multiPic ? "//mat1.gtimg.com/www/js/news/small-pics-" + t + ".png" : "//mat1.gtimg.com/www/js/news/small-video-" + t + ".png",
                alt: ""
            }))), K.a.createElement("div", {
                className: Ye()(nt.a.title, N({}, nt.a.isVisited, c)),
                style: {
                    WebkitLineClamp: d
                }
            }, i), K.a.createElement("div", {
                className: nt.a.info
            }, K.a.createElement("span", {
                className: nt.a.source
            }, p), Boolean(y) && K.a.createElement("span", {
                className: nt.a.comments
            }, Object(ce.k)(y, 1), "\u8bc4")))
        }, ot = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , at = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), it = function(e) {
            var t = (e.id,
            e.atype)
              , n = e.ext
              , r = e.imgurl
              , o = e.news_ext
              , a = e.cms_orig_info
              , i = Ve.a.noPic
              , c = n && n.action && n.action.lsImgExpType;
            switch (Number(c)) {
            case 1:
                i = Ve.a.standard;
                break;
            case 3:
                i = Ve.a.multiPic;
                break;
            case 4:
                i = Ve.a.noPic;
                break;
            default:
                i = 1 === Number(t) ? Ve.a.multiPic : Ve.a.standard
            }
            var s = a && a.imgurl || r
              , u = s ? [s] : [];
            o && o.ext && o.ext.action && o.ext.action.lsImgExpType && (u = [o.imgurl]),
            u.length || (i = Ve.a.noPic);
            var l = Object(Xe.c)(t);
            return l === Xe.a.video || l === Xe.a.videoAlbum ? {
                images: u,
                type: Ve.a.smallVideo
            } : {
                images: u,
                type: i
            }
        }, ct = Object(he.a)((H = z = function(e) {
            function t() {
                var e, n, r, o;
                P(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.downloaders = {},
                o = n,
                C(r, o)
            }
            return T(t, e),
            at(t, [{
                key: "__onItemExpose",
                value: function(e) {
                    var t = e.index
                      , n = e.id
                      , r = e.algorithm;
                    (0,
                    this.props.onBoss)("related_item_exposure", {
                        modulePos: t + 1,
                        moduleNewsId: n,
                        algorithm: r
                    }),
                    this.downloaders[t] && this.downloaders[t].expose()
                }
            }, {
                key: "__onItemClick",
                value: function(e) {
                    var t = e.index
                      , n = e.id
                      , r = e.algorithm
                      , o = this.props.onBoss;
                    Object(ne.d)("related.recommend.visitedList", n),
                    o("related_item_click", {
                        modulePos: t + 1,
                        moduleNewsId: n,
                        algorithm: r
                    }),
                    this.downloaders[t] && this.downloaders[t].click()
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = this, t = this.props, n = t.className, r = t.title, o = t.appName, a = t.onBoss, i = t.nextPath, c = t.relNews, s = [], u = function(e) {
                        var t = s.length
                          , n = e({
                            index: t
                        });
                        s.push(n)
                    }, l = Array.from(c), p = !l.slice(0, 2).find(function(e) {
                        return it(e).type === Ve.a.noPic
                    }), f = 0; f < Math.min(l.length, 2); f++)
                        !function(t) {
                            var n = l[t]
                              , r = ot({}, n, n.news_ext)
                              , a = r.src
                              , c = void 0 === a ? n.chlname : a
                              , s = r.id
                              , f = r.comments
                              , d = it(n)
                              , m = d.type
                              , h = d.images;
                            u(function(r) {
                                var a = r.index;
                                return K.a.createElement(se.b, {
                                    key: a,
                                    onExpose: function() {
                                        return e.__onItemExpose({
                                            index: a,
                                            id: s,
                                            algorithm: "0"
                                        })
                                    },
                                    onClick: function() {
                                        return e.__onItemClick({
                                            index: a,
                                            id: s,
                                            algorithm: "0"
                                        })
                                    }
                                }, K.a.createElement("div", {
                                    className: 0 === t ? We.a.leftRelated : We.a.rightRelated
                                }, K.a.createElement(rt, {
                                    appName: o,
                                    atype: n.atype,
                                    title: n.title,
                                    comments: f,
                                    source: c,
                                    type: p ? m : Ve.a.noPic,
                                    images: h,
                                    isVisited: Object(ne.c)("related.recommend.visitedList", s),
                                    url: Object(ce.a)(Object(ce.c)({
                                        appName: o,
                                        id: s,
                                        path: i
                                    }), {
                                        refer: "wx_hot"
                                    }),
                                    lineClamp: 3
                                })))
                            })
                        }(f);
                    return s.length ? K.a.createElement(se.b, {
                        onExpose: function() {
                            a("related_exposure"),
                            qe.e.then(function() {
                                a(he.b.get("appManager." + o + ".installed") ? "related_open_exposure" : "related_download_exposure")
                            })
                        },
                        onClick: function() {
                            return a("related_click")
                        }
                    }, K.a.createElement("div", {
                        className: n
                    }, K.a.createElement("div", {
                        className: We.a.padding
                    }, K.a.createElement(X.b, {
                        className: We.a.recommendText
                    }, K.a.createElement("div", {
                        className: We.a.recommendDesc
                    }, r)), K.a.createElement("div", {
                        className: We.a.relatedList
                    }, s)))) : null
                }
            }]),
            t
        }(F.Component),
        z.defaultProps = {
            className: "",
            title: "\u70ed\u95e8\u63a8\u8350",
            onBoss: ce.g
        },
        q = H)) || q;
        n.d(t, "c", function() {
            return me
        }),
        n.d(t, "a", function() {
            return Je
        }),
        n.d(t, "b", function() {
            return ct
        })
    },
    613: function(e, t) {
        e.exports = {
            "feed-ul": "_2p-RWNKzaRnP7yqr4uMzMZ",
            recommendCon: "_3TIySLH562KnckgqvV9s9_",
            downloader: "_2jjoE_Esk2Mfoyq2WDaMgK",
            downloaderText: "_1Dv_KZPFgbnw_9ILtzmz7C",
            recommendTitle: "_2ZeGQKtw7ohBw_2RN0I1wL"
        }
    },
    614: function(e, t) {
        e.exports = {
            content: "wfp4h4DBgqznn7zr-rmz",
            image: "_20K90kS3LJUzvzCpCslJSe",
            title: "_30REf6Q4DjG7Bh6ruGpsvO",
            isVisited: "_3zsLqHGzudRlvOTNSWicMH",
            info: "_2ZMHxzL6sRmNRPfeafF_k2",
            source: "_2I0dLNqz5AhSk7B_EGgVRJ",
            comments: "UNIVAP4PdNDz0XPNI1Dmq",
            imageIcon: "_1faWFASeMeDG94n8WgPL9O"
        }
    },
    615: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "b", function() {
            return u
        });
        var o, a = n(147), i = n(23), c = {
            news: "news",
            newsOfficial: "newsOfficial",
            newsOfficialHongbao: "newsOfficialHongbao",
            newsLite: "newsLite"
        }, s = (o = {},
        r(o, c.news, "http://mat1.gtimg.com/www/images/newsapp/wechat/news_icon_1.png"),
        r(o, c.newsOfficial, "https://mat1.gtimg.com/www/js/news/apk-logo.png"),
        r(o, c.newsOfficialHongbao, "https://mat1.gtimg.com/www/js/news/official-hongbao.png"),
        r(o, c.newsLite, "https://mat1.gtimg.com/www/js/news/apk-logo-lite-54.png"),
        o), u = function(e) {
            var t, n = e.downloadUrl, o = e.downloadMd5, u = e.size, l = e.type;
            if (void 0 === c[l])
                throw new TypeError("getAdaptiveInfo: type not found type=" + l);
            return {
                downloadMd5: o,
                url: n ? (t = {
                    default: n
                },
                r(t, a.b.IOS, Object(i.a)(n, {
                    ostype: "iphone"
                })),
                r(t, a.b.ANDROID, Object(i.a)(n, {
                    ostype: "android"
                })),
                t) : void 0,
                size: u,
                thumbUrl: s[l],
                title: l === c.news ? "\u817e\u8baf\u65b0\u95fb" : "\u817e\u8baf\u65b0\u95fb\uff0c\u4e8b\u5b9e\u6d3e"
            }
        }
    },
    616: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.StickyContainer = t.Sticky = void 0;
        var o = n(617)
          , a = r(o)
          , i = n(618)
          , c = r(i);
        t.Sticky = a.default,
        t.StickyContainer = c.default,
        t.default = a.default
    },
    617: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , s = n(1)
          , u = r(s)
          , l = n(97)
          , p = r(l)
          , f = n(7)
          , d = r(f)
          , m = function(e) {
            function t() {
                var e, n, r, i;
                o(this, t);
                for (var c = arguments.length, s = Array(c), u = 0; u < c; u++)
                    s[u] = arguments[u];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                r.state = {
                    isSticky: !1,
                    wasSticky: !1,
                    style: {}
                },
                r.handleContainerEvent = function(e) {
                    var t = e.distanceFromTop
                      , n = e.distanceFromBottom
                      , o = e.eventSource
                      , a = r.context.getParent()
                      , i = !1;
                    r.props.relative && (i = o !== a,
                    t = -(o.scrollTop + o.offsetTop) + r.placeholder.offsetTop);
                    var c = r.placeholder.getBoundingClientRect()
                      , s = r.content.getBoundingClientRect()
                      , u = s.height
                      , l = n - r.props.bottomOffset - u + (r.props._selfOverflow ? u : 0)
                      , p = !!r.state.isSticky
                      , f = i ? p : t <= -r.props.topOffset && n > (r.props._selfOverflow ? 0 : -r.props.bottomOffset);
                    n = (r.props.relative ? a.scrollHeight - a.scrollTop : n) - u;
                    var d = f ? {
                        position: "fixed",
                        top: l > 0 ? r.props.relative ? a.offsetTop - a.offsetParent.scrollTop : 0 : l,
                        left: c.left,
                        width: c.width
                    } : {};
                    r.props.disableHardwareAcceleration || (d.transform = "translateZ(0)"),
                    r.setState({
                        isSticky: f,
                        wasSticky: p,
                        distanceFromTop: t,
                        distanceFromBottom: n,
                        calculatedHeight: u,
                        style: d
                    })
                }
                ,
                i = n,
                a(r, i)
            }
            return i(t, e),
            c(t, [{
                key: "componentWillMount",
                value: function() {
                    if (!this.context.subscribe)
                        throw new TypeError("Expected Sticky to be mounted within StickyContainer");
                    this.context.subscribe(this.handleContainerEvent)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.context.unsubscribe(this.handleContainerEvent)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : (this.state.isSticky ? this.state.calculatedHeight : 0) + "px"
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = u.default.cloneElement(this.props.children({
                        isSticky: this.state.isSticky,
                        wasSticky: this.state.wasSticky,
                        distanceFromTop: this.state.distanceFromTop,
                        distanceFromBottom: this.state.distanceFromBottom,
                        calculatedHeight: this.state.calculatedHeight,
                        style: this.state.style
                    }), {
                        ref: function(t) {
                            e.content = p.default.findDOMNode(t)
                        }
                    });
                    return u.default.createElement("div", null, u.default.createElement("div", {
                        ref: function(t) {
                            return e.placeholder = t
                        }
                    }), t)
                }
            }]),
            t
        }(s.Component);
        m.propTypes = {
            topOffset: d.default.number,
            bottomOffset: d.default.number,
            relative: d.default.bool,
            children: d.default.func.isRequired
        },
        m.defaultProps = {
            relative: !1,
            topOffset: 0,
            bottomOffset: 0,
            disableCompensation: !1,
            disableHardwareAcceleration: !1
        },
        m.contextTypes = {
            subscribe: d.default.func,
            unsubscribe: d.default.func,
            getParent: d.default.func
        },
        t.default = m
    },
    618: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , u = n(1)
          , l = r(u)
          , p = n(7)
          , f = r(p)
          , d = n(619)
          , m = r(d)
          , h = function(e) {
            function t() {
                var e, n, r, i;
                o(this, t);
                for (var c = arguments.length, s = Array(c), u = 0; u < c; u++)
                    s[u] = arguments[u];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                r.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"],
                r.subscribers = [],
                r.subscribe = function(e) {
                    r.subscribers = r.subscribers.concat(e)
                }
                ,
                r.unsubscribe = function(e) {
                    r.subscribers = r.subscribers.filter(function(t) {
                        return t !== e
                    })
                }
                ,
                r.notifySubscribers = function(e) {
                    if (!r.framePending) {
                        var t = e.currentTarget;
                        (0,
                        m.default)(function() {
                            r.framePending = !1;
                            var e = r.node.getBoundingClientRect()
                              , n = e.top
                              , o = e.bottom;
                            r.subscribers.forEach(function(e) {
                                return e({
                                    distanceFromTop: n,
                                    distanceFromBottom: o,
                                    eventSource: t === window ? document.body : r.node
                                })
                            })
                        }),
                        r.framePending = !0
                    }
                }
                ,
                r.getParent = function() {
                    return r.node
                }
                ,
                i = n,
                a(r, i)
            }
            return i(t, e),
            s(t, [{
                key: "getChildContext",
                value: function() {
                    return {
                        subscribe: this.subscribe,
                        unsubscribe: this.unsubscribe,
                        getParent: this.getParent
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.events.forEach(function(t) {
                        return window.addEventListener(t, e.notifySubscribers)
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this;
                    this.events.forEach(function(t) {
                        return window.removeEventListener(t, e.notifySubscribers)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return l.default.createElement("div", c({}, this.props, {
                        ref: function(t) {
                            return e.node = t
                        },
                        onScroll: this.notifySubscribers,
                        onTouchStart: this.notifySubscribers,
                        onTouchMove: this.notifySubscribers,
                        onTouchEnd: this.notifySubscribers
                    }))
                }
            }]),
            t
        }(u.PureComponent);
        h.childContextTypes = {
            subscribe: f.default.func,
            unsubscribe: f.default.func,
            getParent: f.default.func
        },
        t.default = h
    },
    619: function(e, t, n) {
        (function(t) {
            for (var r = n(620), o = "undefined" === typeof window ? t : window, a = ["moz", "webkit"], i = "AnimationFrame", c = o["request" + i], s = o["cancel" + i] || o["cancelRequest" + i], u = 0; !c && u < a.length; u++)
                c = o[a[u] + "Request" + i],
                s = o[a[u] + "Cancel" + i] || o[a[u] + "CancelRequest" + i];
            if (!c || !s) {
                var l = 0
                  , p = 0
                  , f = [];
                c = function(e) {
                    if (0 === f.length) {
                        var t = r()
                          , n = Math.max(0, 1e3 / 60 - (t - l));
                        l = n + t,
                        setTimeout(function() {
                            var e = f.slice(0);
                            f.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                    try {
                                        e[t].callback(l)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 0)
                                    }
                        }, Math.round(n))
                    }
                    return f.push({
                        handle: ++p,
                        callback: e,
                        cancelled: !1
                    }),
                    p
                }
                ,
                s = function(e) {
                    for (var t = 0; t < f.length; t++)
                        f[t].handle === e && (f[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return c.call(o, e)
            }
            ,
            e.exports.cancel = function() {
                s.apply(o, arguments)
            }
            ,
            e.exports.polyfill = function(e) {
                e || (e = o),
                e.requestAnimationFrame = c,
                e.cancelAnimationFrame = s
            }
        }
        ).call(t, n(40))
    },
    620: function(e, t, n) {
        (function(t) {
            (function() {
                var n, r, o, a, i, c;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                }
                : "undefined" !== typeof t && null !== t && t.hrtime ? (e.exports = function() {
                    return (n() - i) / 1e6
                }
                ,
                r = t.hrtime,
                n = function() {
                    var e;
                    return e = r(),
                    1e9 * e[0] + e[1]
                }
                ,
                a = n(),
                c = 1e9 * t.uptime(),
                i = a - c) : Date.now ? (e.exports = function() {
                    return Date.now() - o
                }
                ,
                o = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - o
                }
                ,
                o = (new Date).getTime())
            }
            ).call(this)
        }
        ).call(t, n(621))
    },
    621: function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (l === setTimeout)
                return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout)
                return l = setTimeout,
                setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }
        function a(e) {
            if (p === clearTimeout)
                return clearTimeout(e);
            if ((p === r || !p) && clearTimeout)
                return p = clearTimeout,
                clearTimeout(e);
            try {
                return p(e)
            } catch (t) {
                try {
                    return p.call(null, e)
                } catch (t) {
                    return p.call(this, e)
                }
            }
        }
        function i() {
            h && d && (h = !1,
            d.length ? m = d.concat(m) : y = -1,
            m.length && c())
        }
        function c() {
            if (!h) {
                var e = o(i);
                h = !0;
                for (var t = m.length; t; ) {
                    for (d = m,
                    m = []; ++y < t; )
                        d && d[y].run();
                    y = -1,
                    t = m.length
                }
                d = null,
                h = !1,
                a(e)
            }
        }
        function s(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var l, p, f = e.exports = {};
        !function() {
            try {
                l = "function" === typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                p = "function" === typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                p = r
            }
        }();
        var d, m = [], h = !1, y = -1;
        f.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            m.push(new s(e,t)),
            1 !== m.length || h || o(c)
        }
        ,
        s.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        f.title = "browser",
        f.browser = !0,
        f.env = {},
        f.argv = [],
        f.version = "",
        f.versions = {},
        f.on = u,
        f.addListener = u,
        f.once = u,
        f.off = u,
        f.removeListener = u,
        f.removeAllListeners = u,
        f.emit = u,
        f.prependListener = u,
        f.prependOnceListener = u,
        f.listeners = function(e) {
            return []
        }
        ,
        f.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        f.cwd = function() {
            return "/"
        }
        ,
        f.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        f.umask = function() {
            return 0
        }
    },
    622: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        t.LOCK_STYLES = {
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
            height: "100%"
        }
    },
    623: function(e, t, n) {
        "use strict";
        function r(e) {
            e.preventDefault()
        }
        function o(e) {
            e.stopPropagation()
        }
        function a() {
            var e = this.scrollTop
              , t = this.scrollHeight
              , n = e + this.offsetHeight;
            0 === e ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1)
        }
        function i() {
            return "ontouchstart"in window || navigator.maxTouchPoints
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.preventTouchMove = r,
        t.allowTouchMove = o,
        t.preventInertiaScroll = a,
        t.isTouchDevice = i
    },
    708: function(e, t) {
        e.exports = {
            content: "_1PgoakIM6yoElVvNmFVyaK"
        }
    },
    710: function(e, t) {
        e.exports = {
            wrapper: "H78at0CxqbE2qpdrpBzV0",
            copyrightWording: "gxN9-Ey4sapxGi_LGe5cP",
            copyright: "duUOJjPJyH25iSrsbHqt9"
        }
    },
    718: function(e, t, n) {
        (function(t) {
            function n(e, t) {
                for (var n = -1, r = e ? e.length : 0, o = Array(r); ++n < r; )
                    o[n] = t(e[n], n, e);
                return o
            }
            function r(e) {
                return e.split("")
            }
            function o(e, t) {
                for (var n = -1, r = Array(e); ++n < e; )
                    r[n] = t(n);
                return r
            }
            function a(e, t) {
                return n(t, function(t) {
                    return e[t]
                })
            }
            function i(e, t) {
                return null == e ? void 0 : e[t]
            }
            function c(e) {
                return be.test(e)
            }
            function s(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                    try {
                        t = !!(e + "")
                    } catch (e) {}
                return t
            }
            function u(e) {
                for (var t, n = []; !(t = e.next()).done; )
                    n.push(t.value);
                return n
            }
            function l(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach(function(e, r) {
                    n[++t] = [r, e]
                }),
                n
            }
            function p(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = e
                }),
                n
            }
            function f(e) {
                return c(e) ? d(e) : r(e)
            }
            function d(e) {
                return e.match(ye) || []
            }
            function m(e, t) {
                var n = Qe(e) || C(e) ? o(e.length, String) : []
                  , r = n.length
                  , a = !!r;
                for (var i in e)
                    !t && !Ne.call(e, i) || a && ("length" == i || O(i, r)) || n.push(i);
                return n
            }
            function h(e, t, n) {
                return e === e && (void 0 !== n && (e = e <= n ? e : n),
                void 0 !== t && (e = e >= t ? e : t)),
                e
            }
            function y(e) {
                return Pe.call(e)
            }
            function b(e) {
                return !(!D(e) || x(e)) && (S(e) || s(e) ? Ce : ae).test(k(e))
            }
            function v(e) {
                if (!j(e))
                    return De(e);
                var t = [];
                for (var n in Object(e))
                    Ne.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
            function w(e, t) {
                return e + Be(Ie() * (t - e + 1))
            }
            function _(e, t) {
                var n = -1
                  , r = e.length;
                for (t || (t = Array(r)); ++n < r; )
                    t[n] = e[n];
                return t
            }
            function g(e, t) {
                var n = i(e, t);
                return b(n) ? n : void 0
            }
            function O(e, t) {
                return !!(t = null == t ? F : t) && ("number" == typeof e || ce.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            function E(e, t, n) {
                if (!D(n))
                    return !1;
                var r = typeof t;
                return !!("number" == r ? T(n) && O(t, n.length) : "string" == r && t in n) && P(n[t], e)
            }
            function x(e) {
                return !!je && je in e
            }
            function j(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || Ee)
            }
            function k(e) {
                if (null != e) {
                    try {
                        return ke.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
            function N(e, t, n) {
                var r = -1
                  , o = R(e)
                  , a = o.length
                  , i = a - 1;
                for (t = (n ? E(e, t, n) : void 0 === t) ? 1 : h(q(t), 0, a); ++r < t; ) {
                    var c = w(r, i)
                      , s = o[c];
                    o[c] = o[r],
                    o[r] = s
                }
                return o.length = t,
                o
            }
            function P(e, t) {
                return e === t || e !== e && t !== t
            }
            function C(e) {
                return A(e) && Ne.call(e, "callee") && (!Se.call(e, "callee") || Pe.call(e) == G)
            }
            function T(e) {
                return null != e && B(e.length) && !S(e)
            }
            function A(e) {
                return I(e) && T(e)
            }
            function S(e) {
                var t = D(e) ? Pe.call(e) : "";
                return t == J || t == X
            }
            function B(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= F
            }
            function D(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function I(e) {
                return !!e && "object" == typeof e
            }
            function L(e) {
                return "string" == typeof e || !Qe(e) && I(e) && Pe.call(e) == $
            }
            function M(e) {
                return "symbol" == typeof e || I(e) && Pe.call(e) == ee
            }
            function R(e) {
                if (!e)
                    return [];
                if (T(e))
                    return L(e) ? f(e) : _(e);
                if (Ae && e[Ae])
                    return u(e[Ae]());
                var t = Ke(e);
                return (t == Z ? l : t == Y ? p : W)(e)
            }
            function V(e) {
                if (!e)
                    return 0 === e ? e : 0;
                if ((e = z(e)) === U || e === -U) {
                    return (e < 0 ? -1 : 1) * K
                }
                return e === e ? e : 0
            }
            function q(e) {
                var t = V(e)
                  , n = t % 1;
                return t === t ? n ? t - n : t : 0
            }
            function z(e) {
                if ("number" == typeof e)
                    return e;
                if (M(e))
                    return Q;
                if (D(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = D(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(ne, "");
                var n = oe.test(e);
                return n || ie.test(e) ? ve(e.slice(2), n ? 2 : 8) : re.test(e) ? Q : +e
            }
            function H(e) {
                return T(e) ? m(e) : v(e)
            }
            function W(e) {
                return e ? a(e, H(e)) : []
            }
            var U = 1 / 0
              , F = 9007199254740991
              , K = 1.7976931348623157e308
              , Q = NaN
              , G = "[object Arguments]"
              , J = "[object Function]"
              , X = "[object GeneratorFunction]"
              , Z = "[object Map]"
              , Y = "[object Set]"
              , $ = "[object String]"
              , ee = "[object Symbol]"
              , te = /[\\^$.*+?()[\]{}|]/g
              , ne = /^\s+|\s+$/g
              , re = /^[-+]0x[0-9a-f]+$/i
              , oe = /^0b[01]+$/i
              , ae = /^\[object .+?Constructor\]$/
              , ie = /^0o[0-7]+$/i
              , ce = /^(?:0|[1-9]\d*)$/
              , se = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]"
              , ue = "\\ud83c[\\udffb-\\udfff]"
              , le = "(?:\\ud83c[\\udde6-\\uddff]){2}"
              , pe = "[\\ud800-\\udbff][\\udc00-\\udfff]"
              , fe = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?"
              , de = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", le, pe].join("|") + ")[\\ufe0e\\ufe0f]?" + fe + ")*"
              , me = "[\\ufe0e\\ufe0f]?" + fe + de
              , he = "(?:" + ["[^\\ud800-\\udfff]" + se + "?", se, le, pe, "[\\ud800-\\udfff]"].join("|") + ")"
              , ye = RegExp(ue + "(?=" + ue + ")|" + he + me, "g")
              , be = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]")
              , ve = parseInt
              , we = "object" == typeof t && t && t.Object === Object && t
              , _e = "object" == typeof self && self && self.Object === Object && self
              , ge = we || _e || Function("return this")()
              , Oe = Function.prototype
              , Ee = Object.prototype
              , xe = ge["__core-js_shared__"]
              , je = function() {
                var e = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }()
              , ke = Oe.toString
              , Ne = Ee.hasOwnProperty
              , Pe = Ee.toString
              , Ce = RegExp("^" + ke.call(Ne).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , Te = ge.Symbol
              , Ae = Te ? Te.iterator : void 0
              , Se = Ee.propertyIsEnumerable
              , Be = Math.floor
              , De = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.keys, Object)
              , Ie = Math.random
              , Le = g(ge, "DataView")
              , Me = g(ge, "Map")
              , Re = g(ge, "Promise")
              , Ve = g(ge, "Set")
              , qe = g(ge, "WeakMap")
              , ze = k(Le)
              , He = k(Me)
              , We = k(Re)
              , Ue = k(Ve)
              , Fe = k(qe)
              , Ke = y;
            (Le && "[object DataView]" != Ke(new Le(new ArrayBuffer(1))) || Me && Ke(new Me) != Z || Re && "[object Promise]" != Ke(Re.resolve()) || Ve && Ke(new Ve) != Y || qe && "[object WeakMap]" != Ke(new qe)) && (Ke = function(e) {
                var t = Pe.call(e)
                  , n = "[object Object]" == t ? e.constructor : void 0
                  , r = n ? k(n) : void 0;
                if (r)
                    switch (r) {
                    case ze:
                        return "[object DataView]";
                    case He:
                        return Z;
                    case We:
                        return "[object Promise]";
                    case Ue:
                        return Y;
                    case Fe:
                        return "[object WeakMap]"
                    }
                return t
            }
            );
            var Qe = Array.isArray;
            e.exports = N
        }
        ).call(t, n(40))
    },
    719: function(e, t) {
        e.exports = {
            cover: "_582g3-mOb0wwBH7p7BtTT"
        }
    },
    720: function(e, t) {
        e.exports = {
            wrap: "_2n5dwAhA5qT1E_Va2wABMa",
            progressBar: "_1vS7yAovgnbVW_F8ZfexCd",
            progressBarContent: "_25WQuzNSmu9GWkw7k1Bt1j",
            size: "_17Q1aGNjZjtYSL37sZQDzX"
        }
    },
    721: function(e, t) {
        e.exports = {
            wrap: "slNP6VAk-idpUNs00frRB",
            progressBar: "_1WWc67YPMsJBtCT9ALb2kc",
            progressBarContent: "_1iT6j0yqpFtXcF4cJVC1ld"
        }
    },
    722: function(e, t) {
        e.exports = {
            progressBar: "BAFg39ccUAhU7O8BNXWHW",
            content: "_1Qf7axQOLxiUOVb-OLazno"
        }
    },
    723: function(e, t) {
        e.exports = {
            newsBox: "_3RkJeFHTwbR-JR4bsefo7k",
            title: "bdXA30yBx-9ZL7iFArhg0",
            content: "XCa39aPsAXFaFprtgq7vh",
            abstract: "_1eToafrRPDvTCPnAGfRHnz",
            image: "_1yBAgn0kqmKQz6jdjf2eLy",
            tags: "fEbvDrnnJWK5spQ_7u7kE",
            tag: "_2tRYQLBhPDBbjkvujqJrWM",
            downloaderDiv: "_268UtGJMA6-4M4Vt5QuVK0",
            progressBar: "_3Z5j8AMwxnXxEa0PZiBs7c"
        }
    },
    724: function(e, t) {
        e.exports = {
            speedTextBox: "x4EHUK_SVaxeDO1wAayz5",
            speedText: "_Hx4AgkwdKTssS1-OupYG",
            speedSize: "_1H_cXzRugJkji8EhGbtCD3"
        }
    },
    725: function(e, t) {
        e.exports = {
            wrapper: "NlS7StTv7TjWRnVpnME0g",
            content: "_3VOn41rR3FKh5T4TCVXOCT",
            exitButton: "_3rVOVPkX9-RwGs5lPQ_wPz",
            logo: "_3jrGtPhLOhP3tQ0-zy6rf6",
            text: "_2N_z-OQPKr0kAg0FA6cmR8",
            buttons: "_10FqAQ33-JW74KhGgTLlmU",
            cancelButton: "_2i83tHT30rBNnPbQR7B4xt",
            confirmButton: "_3kmyJ4WbEwzRr5RLgpWc4Q"
        }
    },
    726: function(e, t) {
        e.exports = {
            wrapper: "_1jDGf8g0feZY9oi3dsy18h",
            content: "I3nHV6xTtG9oRgedaWDKw",
            exitButton: "PNPQ9SgdSOfE4_w1Qx6nK",
            desc: "_3y1luXndMjUAzovpN_Q3zH",
            logo: "_1Gz3huP44jsgfniZ3AhV6m",
            text: "K5yA_r7pjvoTsID3IKDy",
            textBlock: "_3ft1CoKvNGewVb0svyT5Sb",
            cash: "_3YKkt0n7QOwki6OMphm0X8",
            unit: "_2p7LkhGs_LSspciOHtsZyE",
            lite: "_14pnF0RpE90qnVOnrDk_gq",
            flex1: "_6UBR16_TiQ8TwQT4WqoDV",
            buttons: "FWe4i-GlRYE4A-6V8pIQk",
            cancelButton: "_1CKJa762k2myPM6zm_4OrQ",
            confirmButton: "_3DQ-0xFKdYwjB43sJbvAXL"
        }
    },
    727: function(e, t) {
        e.exports = {
            padding: "_3D8r2jnHkQ37086HyTtNYQ",
            sticky: "_2pvXBQbdIvoGfZDIqhC4oX",
            dialogTop: "_3NPl4l7hWtTWDC0gUltWvq",
            dialogVideo: "_2szxKNl2XoD8aScAkIKjKm",
            dialogTopLogo: "_3VhxnZJ6g4zDvJueOiXxOK",
            logoNameBox: "_3P1z-QTQKMSqElm_UAsmOH",
            logoName: "JhzxkoSKRuyk1esygXmtu",
            logoNameTag: "_2WHv58x-7_CVCxkGI031q6",
            hidden: "_3xh30Q1qb65DnM2O_2sZoP",
            avatar: "_1LMLqqIAZhi2LXrHKd9UZ2",
            logoTextBox: "_2rpB2niMLpxZjbAwEw-lEz",
            downloaderDialogTop: "_1lAAEIR9bMUo_-uxvpU1PR",
            dialogTopMini: "_2Ub2onp4Q9b5qIUmnLrfVK",
            dialogTopLogoMini: "_1k7NIUP6I1IOiwSq3fC9PO",
            logoNameMini: "_3LzANfsq0ffxzT1gHp8oNN",
            logoNameTagMini: "_2ww3nvozln2BYjf0kEkujZ",
            brMini: "_35fYVHOBhP0O5KN-Xedi8E",
            downloaderDialogTopMini: "_106VMF1kODIp3mRb07fewx",
            videoText: "_1fn9zNbchNCAkcACMs-pvP",
            videoTitle: "yWkxbhThmTsZKq9m9UiGK",
            downloaderDialogVideo: "_4-Hl1oDypZJDQFY4ov1Ge",
            videoNumber: "_1Z6wIElrfyxwoVmWz3jn8O",
            downloaderDialogBottom: "_3sNUNWyKb1EaGbRc-_sgQn"
        }
    },
    728: function(e, t) {
        e.exports = {
            wrapper: "_2XdhHtUndG-_UTSx-9hmP0",
            padding: "Nfgz6aIyFCi3vZUoFGKEr",
            banner: "dD3njEs1Q2vWfT8taXg5G",
            title: "_1jtAcgMtb9rZTnQnpjqCRW",
            desc: "_366eSVyE3jAh2d1guvpMJF",
            OMDesc: "_1VbXHapYInSQFvNsmQf0VX",
            OMIcon: "_1qaUtU1XlSylINq0sh6j64",
            OMText: "_3XpC1FO7oUoUN0idqSuTNT",
            whiteMargin: "_3s3vx_23V1zYsifDMvJEjy",
            recommend: "_4l9HCryiEbUHtuIiH7iz",
            hotnews: "_2JTw_ObKVrBs_CsY-bUhbE",
            comment: "_2Dlp4X_qspqflZByGQZq_a",
            downloaderComment: "_3fWUgph1xjLThvHdKAazsb",
            hotnewsList: "yy3qr9JyA8ApQqkzbx1Jd",
            hotnewsItem: "_3VUi3ctedy7Hd6WtwdEqv2",
            hotnewsContent: "_1HdKyr3uS9owznqeu2U6NT",
            hotnewsDesc: "_3LUXvoZxGEALDMKXjGpvNV",
            hotnewsOrder: "_3kWIsVllxlp-DJxNNAUhCZ",
            "theme-kuaibao": "_1SsY2J_vo06fv1LJBZMy7I",
            "theme-news": "_3v5G4kKkaKw8K2W_pZU7IQ",
            hotnewsTitle: "_14hoN4QTPZVgTk_aRxUMFg",
            headImg: "_1VBjQAmuTVuaSklL3BHfre",
            vote: "_2upo_efAIid6C0-HU34E7G",
            downloaderCommentGroupExp: "_1ijNvE7xBCk2jo5mZ5znLk",
            downloaderCommentExp: "_1XX7EZF42KBO7OEOvfmrz1",
            downloaderCommentEditExp: "_3dxjl5oBrp9JviLFBdf3AO"
        }
    },
    745: function(e, t, n) {
        "use strict";
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function o(e, t) {
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
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
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
        function l(e, t) {
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
        function y(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function b(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function v(e, t) {
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
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function g(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function O(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function E(e, t) {
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
        function x(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function j(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function k(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function N(e, t) {
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
        function P(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function C(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function T(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function A(e, t) {
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
        function S(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
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
        function I(e, t) {
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
        function L(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
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
        function q(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function z(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function H(e, t) {
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
        function U(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function F(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function K(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function Q(e, t) {
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
        function G(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
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
        function Y(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
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
        function ne(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function re(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function oe(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function ae(e, t) {
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
        function ie(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ce(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function se(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ue(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function le(e, t) {
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
        function pe(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a)
                              , c = i.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!i.done)
                            return Promise.resolve(c).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                        e(c)
                    }
                    return r("next")
                }
                )
            }
        }
        function fe(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function de(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
        function me(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var he, ye, be = n(65), ve = n.n(be), we = n(1), _e = n.n(we), ge = n(57), Oe = n(223), Ee = n(30), xe = n(581), je = n(586), ke = n(23), Ne = n(708), Pe = n.n(Ne), Ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Te = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Ae = (ye = he = function(e) {
            function t() {
                return o(this, t),
                a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            Te(t, [{
                key: "componentWillMount",
                value: function() {
                    this.__resetCheck()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.__checkIntent()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function() {
                    this.__resetCheck()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.__needCheck && this.__checkIntent()
                }
            }, {
                key: "__resetCheck",
                value: function() {
                    this.__needCheck = !0,
                    this.setState(function(e) {
                        return Ce({}, e, {
                            intentNeedBreakLine: !1
                        })
                    })
                }
            }, {
                key: "__checkIntent",
                value: function() {
                    var e = this;
                    if (this.__needCheck) {
                        this.__needCheck = !1;
                        var t = this.elmContent;
                        if (t) {
                            var n = [].concat(r(t.getClientRects()));
                            if (!(n.length <= 1)) {
                                var o = n.map(function(e) {
                                    return e.bottom
                                }).reduce(function(e, t) {
                                    return Math.max(e, t)
                                })
                                  , a = n.filter(function(e) {
                                    return e.bottom === o
                                }).length
                                  , i = this.props.intent;
                                a !== n.length && a < i && Object(ke.f)(function() {
                                    e.setState(function(e) {
                                        return Ce({}, e, {
                                            intentNeedBreakLine: !0
                                        })
                                    })
                                })
                            }
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.children
                      , r = t.intent
                      , o = this.state.intentNeedBreakLine
                      , a = _e.a.Children.toArray(n).join("")
                      , i = a.split("").map(function(e) {
                        return " " === e ? "\xa0" : e
                    }).map(function(e, t) {
                        return _e.a.createElement("span", {
                            key: t
                        }, e)
                    });
                    return o && i.splice(i.length - r, 0, _e.a.createElement("br", {
                        key: "br"
                    })),
                    _e.a.createElement("span", {
                        ref: function(t) {
                            e.elmContent = t
                        },
                        className: Pe.a.content
                    }, i)
                }
            }]),
            t
        }(we.PureComponent),
        he.defaultProps = {
            intent: 3
        },
        ye), Se = n(576), Be = n(646), De = n(591), Ie = n(710), Le = n.n(Ie), Me = function(e) {
            var t = e.copyright
              , n = e.copyrightWording;
            return _e.a.createElement("div", {
                className: Le.a.wrapper
            }, _e.a.createElement("div", {
                className: Le.a.copyrightWording
            }, n), _e.a.createElement("div", {
                className: Le.a.copyright
            }, t))
        }, Re = Me, Ve = n(606), qe = n(39), ze = n(579), He = n(582), We = n(214), Ue = n.n(We), Fe = n(149), Ke = n(73), Qe = n(148), Ge = n(569), Je = n(612), Xe = n(577), Ze = n(589), Ye = n(580), $e = n(584), et = function(e) {
            if (!e)
                return !1;
            var t = 1 === parseInt(e.ext && e.ext.action && e.ext.action.hotNewsBlock, 10)
              , n = 1 === parseInt(e.ext && e.ext.action && e.ext.action.politicalOption, 10)
              , r = 1 === parseInt(e.ext && e.ext.action && e.ext.action.isSensitive, 10)
              , o = 1 === parseInt(e.ext && e.ext.action && e.ext.action.isSensitiveArticle, 10)
              , a = e.relate_modules && e.relate_modules.rel_news_ext && "hidden" === e.relate_modules.rel_news_ext;
            return t || n || r || o || a
        }, tt = n(650), nt = n(147), rt = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
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
        }(), ot = function(e) {
            if (e)
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return void console.error(e)
                }
        }, at = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "{}"
              , t = {
                comment: {},
                bottom: {}
            };
            if (!e)
                return {};
            try {
                var n = JSON.parse(e)
                  , r = n.hasdata
                  , o = n.data;
                if (!r)
                    return {};
                var a = rt(o, 2)
                  , i = rt(a[0], 2)
                  , c = i[0]
                  , s = i[1]
                  , u = rt(a[1], 2)
                  , l = u[0]
                  , p = u[1];
                t.comment[nt.a.INSTALLED] = ot(c),
                t.comment[nt.a.PENDING] = ot(s),
                t.bottom[nt.a.INSTALLED] = ot(l),
                t.bottom[nt.a.PENDING] = ot(p)
            } catch (e) {
                return console.error(e),
                {}
            }
            return t
        }, it = function(e) {
            try {
                if (e && e.content && e.content.ext && e.content.ext.action && e.content.ext.action.FcommentList) {
                    return JSON.parse(e.content.ext.action.FcommentList)
                }
            } catch (e) {
                console.error(e)
            }
            return []
        }, ct = n(7), st = n.n(ct), ut = n(648), lt = n(615), pt = n(97), ft = n.n(pt), dt = !("undefined" === typeof window || !window.document || !window.document.createElement), mt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), ht = function(e) {
            function t() {
                return c(this, t),
                s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return u(t, e),
            mt(t, [{
                key: "componentWillUnmount",
                value: function() {
                    this.defaultNode && document.body.removeChild(this.defaultNode),
                    this.defaultNode = null
                }
            }, {
                key: "render",
                value: function() {
                    return dt ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"),
                    document.body.appendChild(this.defaultNode)),
                    Object(pt.createPortal)(this.props.children, this.props.node || this.defaultNode)) : null
                }
            }]),
            t
        }(_e.a.Component);
        ht.propTypes = {
            children: st.a.node.isRequired,
            node: st.a.any
        };
        var yt = ht
          , bt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , vt = function(e) {
            function t() {
                return l(this, t),
                p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return f(t, e),
            bt(t, [{
                key: "componentDidMount",
                value: function() {
                    this.renderPortal()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.renderPortal()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.defaultNode && document.body.removeChild(this.defaultNode),
                    this.defaultNode = null,
                    this.portal = null
                }
            }, {
                key: "renderPortal",
                value: function(e) {
                    this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"),
                    document.body.appendChild(this.defaultNode));
                    var t = this.props.children;
                    "function" === typeof this.props.children.type && (t = _e.a.cloneElement(this.props.children)),
                    this.portal = ft.a.unstable_renderSubtreeIntoContainer(this, t, this.props.node || this.defaultNode)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        }(_e.a.Component)
          , wt = vt;
        vt.propTypes = {
            children: st.a.node.isRequired,
            node: st.a.any
        };
        var _t = void 0;
        _t = ft.a.createPortal ? yt : wt;
        var gt = _t
          , Ot = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , Et = {
            ESCAPE: 27
        }
          , xt = function(e) {
            function t(e) {
                d(this, t);
                var n = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.portalNode = null,
                n.state = {
                    active: !!e.defaultOpen
                },
                n.openPortal = n.openPortal.bind(n),
                n.closePortal = n.closePortal.bind(n),
                n.wrapWithPortal = n.wrapWithPortal.bind(n),
                n.handleOutsideMouseClick = n.handleOutsideMouseClick.bind(n),
                n.handleKeydown = n.handleKeydown.bind(n),
                n
            }
            return h(t, e),
            Ot(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.closeOnEsc && document.addEventListener("keydown", this.handleKeydown),
                    this.props.closeOnOutsideClick && document.addEventListener("click", this.handleOutsideMouseClick)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.closeOnEsc && document.removeEventListener("keydown", this.handleKeydown),
                    this.props.closeOnOutsideClick && document.removeEventListener("click", this.handleOutsideMouseClick)
                }
            }, {
                key: "openPortal",
                value: function(e) {
                    this.state.active || (e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation(),
                    this.setState({
                        active: !0
                    }, this.props.onOpen))
                }
            }, {
                key: "closePortal",
                value: function() {
                    this.state.active && this.setState({
                        active: !1
                    }, this.props.onClose)
                }
            }, {
                key: "wrapWithPortal",
                value: function(e) {
                    var t = this;
                    return this.state.active ? _e.a.createElement(gt, {
                        node: this.props.node,
                        key: "react-portal",
                        ref: function(e) {
                            return t.portalNode = e
                        }
                    }, e) : null
                }
            }, {
                key: "handleOutsideMouseClick",
                value: function(e) {
                    if (this.state.active) {
                        var t = this.portalNode.props.node || this.portalNode.defaultNode;
                        !t || t.contains(e.target) || e.button && 0 !== e.button || this.closePortal()
                    }
                }
            }, {
                key: "handleKeydown",
                value: function(e) {
                    e.keyCode === Et.ESCAPE && this.state.active && this.closePortal()
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children({
                        openPortal: this.openPortal,
                        closePortal: this.closePortal,
                        portal: this.wrapWithPortal,
                        isOpen: this.state.active
                    })
                }
            }]),
            t
        }(_e.a.Component);
        xt.propTypes = {
            children: st.a.func.isRequired,
            defaultOpen: st.a.bool,
            node: st.a.any,
            openByClickOn: st.a.element,
            closeOnEsc: st.a.bool,
            closeOnOutsideClick: st.a.bool,
            onOpen: st.a.func,
            onClose: st.a.func
        },
        xt.defaultProps = {
            onOpen: function() {},
            onClose: function() {}
        };
        var jt, kt, Nt, Pt, Ct, Tt, At, St, Bt, Dt, It, Lt, Mt, Rt, Vt, qt, zt, Ht, Wt, Ut, Ft, Kt, Qt = n(571), Gt = n.n(Qt), Jt = n(718), Xt = n.n(Jt), Zt = n(616), Yt = n(570), $t = n(573), en = n(719), tn = n.n(en), nn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , rn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), on = (kt = jt = function(e) {
            function t() {
                return b(this, t),
                v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return w(t, e),
            rn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , r = e.appDisplayName
                      , o = e.onOpenApp
                      , a = e.onBoss
                      , i = y(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss"]);
                    return _e.a.createElement(Yt.a, nn({
                        name: "dialogVideo",
                        appName: n,
                        onOpenApp: o,
                        onBoss: a
                    }, i), function(e) {
                        var n = e.status
                          , o = (e.progress,
                        e.onClick)
                          , a = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: a,
                            onClick: o
                        }, _e.a.createElement("div", {
                            className: Gt()(t, tn.a.cover)
                        }, _e.a.createElement("span", null, Object($t.d)(n), r, "\u770b\u66f4\u591a\u89c6\u9891"), _e.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/black_bg_arrow.png",
                            alt: ">"
                        })))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        jt.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g
        },
        kt), an = n(572), cn = n(720), sn = n.n(cn), un = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , ln = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), pn = (Pt = Nt = function(e) {
            function t() {
                return g(this, t),
                O(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return E(t, e),
            ln(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , r = e.appDisplayName
                      , o = e.onOpenApp
                      , a = e.onBoss
                      , i = e.size
                      , c = e.text
                      , s = _(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss", "size", "text"]);
                    return _e.a.createElement(Yt.a, un({
                        name: "dialogTop",
                        appName: n,
                        onOpenApp: o,
                        onBoss: a
                    }, s), function(e) {
                        var o = e.status
                          , a = e.progress
                          , s = e.onClick
                          , u = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: u,
                            onClick: s
                        }, _e.a.createElement("div", {
                            className: Gt()(t, sn.a.wrap)
                        }, _e.a.createElement(an.a, un({}, $t.b[n], {
                            className: sn.a.progressBar,
                            contentClassName: sn.a.progressBarContent,
                            progress: a
                        }), c && c[o] ? _e.a.createElement("span", null, c[o]) : _e.a.createElement(we.Fragment, null, _e.a.createElement("span", null, Object($t.d)(o), r), o === nt.a.PENDING && _e.a.createElement("span", {
                            className: sn.a.size
                        }, "\uff08", i, "\uff09")))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        Nt.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g
        },
        Pt), fn = n(721), dn = n.n(fn), mn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , hn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), yn = (Tt = Ct = function(e) {
            function t() {
                return j(this, t),
                k(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return N(t, e),
            hn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , r = e.onOpenApp
                      , o = e.onBoss
                      , a = x(e, ["className", "appName", "onOpenApp", "onBoss"]);
                    return _e.a.createElement(Yt.a, mn({
                        name: "dialogTopMini",
                        appName: n,
                        onOpenApp: r,
                        onBoss: o
                    }, a), function(e) {
                        var r = e.status
                          , o = e.progress
                          , a = e.onClick
                          , i = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: i,
                            onClick: a
                        }, _e.a.createElement("div", {
                            className: Gt()(t, dn.a.wrap)
                        }, _e.a.createElement(an.a, mn({}, $t.b[n], {
                            className: dn.a.progressBar,
                            contentClassName: dn.a.progressBarContent,
                            progress: o
                        }), _e.a.createElement("span", null, Object($t.d)(r)))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        Ct.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g
        },
        Tt), bn = n(722), vn = n.n(bn), wn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , _n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), gn = (St = At = function(e) {
            function t() {
                return C(this, t),
                T(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return A(t, e),
            _n(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.appName
                      , r = e.appDisplayName
                      , o = e.onOpenApp
                      , a = e.onBoss
                      , i = P(e, ["className", "appName", "appDisplayName", "onOpenApp", "onBoss"]);
                    return _e.a.createElement(Yt.a, wn({
                        name: "dialogBottom",
                        appName: n,
                        onOpenApp: o,
                        onBoss: a
                    }, i), function(e) {
                        var o = e.status
                          , a = e.progress
                          , i = e.onClick
                          , c = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: c,
                            onClick: i
                        }, _e.a.createElement("div", {
                            className: t
                        }, _e.a.createElement(an.b, wn({}, $t.c[n], {
                            className: vn.a.progressBar,
                            progress: a
                        }), _e.a.createElement("div", {
                            className: vn.a.content
                        }, Object($t.d)(o), _e.a.createElement("span", null, r), "\u770b\u5b8c\u6574\u5185\u5bb9", _e.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/black_arrow.png",
                            alt: ">"
                        })))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        At.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g,
            commentCount: 0
        },
        St), On = n(575), En = n(723), xn = n.n(En), jn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , kn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Nn = (Dt = Bt = function(e) {
            function t() {
                return B(this, t),
                D(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return I(t, e),
            kn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.appDisplayName
                      , r = e.onOpenApp
                      , o = e.onBoss
                      , a = e.newsData
                      , i = S(e, ["appName", "appDisplayName", "onOpenApp", "onBoss", "newsData"])
                      , c = a.title
                      , s = a.abstract
                      , u = a.img_small
                      , l = a.source;
                    return _e.a.createElement(Yt.a, jn({
                        name: "dialogNews",
                        appName: t,
                        onOpenApp: r,
                        onBoss: o
                    }, i), function(e) {
                        var r = e.status
                          , o = e.progress
                          , a = e.onClick
                          , i = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: i,
                            onClick: a
                        }, _e.a.createElement("div", {
                            className: xn.a.newsBox
                        }, _e.a.createElement("div", {
                            className: xn.a.title
                        }, c), _e.a.createElement("div", {
                            className: xn.a.content
                        }, _e.a.createElement("div", {
                            className: xn.a.abstract
                        }, s), _e.a.createElement(On.a, {
                            src: u,
                            alt: c,
                            className: xn.a.image,
                            restStyles: {
                                width: "1rem",
                                height: "1rem",
                                borderRadius: "0.02rem"
                            }
                        })), _e.a.createElement("div", {
                            className: xn.a.tags
                        }, _e.a.createElement("span", {
                            className: xn.a.tag
                        }, l), _e.a.createElement("div", {
                            className: xn.a.downloaderDiv
                        }, _e.a.createElement(an.b, jn({}, $t.c[t], {
                            className: xn.a.progressBar,
                            progress: o
                        }), Object($t.d)(r), n)))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        Bt.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g
        },
        Dt), Pn = n(724), Cn = n.n(Pn), Tn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , An = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Sn = (Lt = It = function(e) {
            function t() {
                return M(this, t),
                R(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return V(t, e),
            An(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , r = e.onBoss
                      , o = e.isLite
                      , a = e.size
                      , i = L(e, ["appName", "onOpenApp", "onBoss", "isLite", "size"]);
                    return _e.a.createElement(Yt.a, Tn({
                        name: "dialogLite",
                        appName: t,
                        onOpenApp: n,
                        onBoss: r
                    }, i), function(e) {
                        var t = e.status
                          , n = (e.progress,
                        e.onClick)
                          , r = e.onExpose;
                        return _e.a.createElement(Ge.b, {
                            onExpose: r,
                            onClick: n
                        }, _e.a.createElement("div", {
                            style: {
                                display: t === nt.a.PENDING ? void 0 : "none"
                            },
                            className: Cn.a.speedTextBox
                        }, _e.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/speed-small.png",
                            alt: ""
                        }), _e.a.createElement("span", {
                            className: Cn.a.speedText
                        }, "\u4e0b\u8f7d", o ? "\u6781\u901f\u7248" : "\u5b8c\u6574\u7248"), _e.a.createElement("span", {
                            className: Cn.a.speedSize
                        }, "\uff08", a, "\uff09")))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        It.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g,
            commentCount: 0
        },
        Lt), Bn = n(603), Dn = n.n(Bn), In = n(725), Ln = n.n(In), Mn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Rn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Vn = (Rt = Mt = function(e) {
            function t() {
                return z(this, t),
                H(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return W(t, e),
            Rn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , r = e.onBoss
                      , o = e.onClose
                      , a = e.onCancel
                      , i = e.onConfirm
                      , c = e.isLite
                      , s = e.size
                      , u = q(e, ["appName", "onOpenApp", "onBoss", "onClose", "onCancel", "onConfirm", "isLite", "size"]);
                    return _e.a.createElement(Yt.a, Mn({
                        name: "dialogConfirm",
                        appName: t,
                        onOpenApp: n,
                        onBoss: r
                    }, u), function(e) {
                        var t = (e.status,
                        e.progress,
                        e.onClick)
                          , n = e.onExpose;
                        return _e.a.createElement(gt, null, _e.a.createElement(Dn.a, null), _e.a.createElement(Ge.b, {
                            onExpose: n
                        }, _e.a.createElement("div", {
                            className: Ln.a.wrapper
                        }, _e.a.createElement("div", {
                            className: Ln.a.content
                        }, _e.a.createElement("div", {
                            className: Ln.a.exitButton,
                            onClick: function() {
                                return o()
                            }
                        }, _e.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/dialog-confirm-close.png",
                            alt: "X"
                        })), _e.a.createElement("img", {
                            className: Ln.a.logo,
                            src: "//mat1.gtimg.com/www/js/news/speed-big.png",
                            alt: ""
                        }), _e.a.createElement("div", {
                            className: Ln.a.text
                        }, c ? "\u6bcf\u5929\u5341\u5206\u949f\uff0c\u5c3d\u77e5\u5929\u4e0b\u4e8b" : "\u62c5\u5fc3\u6d41\u91cf\uff1f \u8bd5\u8bd5" + s + "\u6781\u901f\u7248"), _e.a.createElement("div", {
                            className: Ln.a.buttons
                        }, _e.a.createElement("span", {
                            className: Ln.a.cancelButton,
                            onClick: function() {
                                r("dialogConfirm_cancel"),
                                a()
                            }
                        }, "\u6b8b\u5fcd\u62d2\u7edd"), _e.a.createElement("span", {
                            className: Ln.a.confirmButton,
                            onClick: function() {
                                t(),
                                i()
                            }
                        }, "\u7ee7\u7eed\u4e0b\u8f7d"))))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        Mt.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g,
            onClose: ke.g,
            onCancel: ke.g,
            onConfirm: ke.g
        },
        Rt), qn = n(726), zn = n.n(qn), Hn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , Wn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Un = (qt = Vt = function(e) {
            function t() {
                return F(this, t),
                K(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return Q(t, e),
            Wn(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.appName
                      , n = e.onOpenApp
                      , r = e.onBoss
                      , o = e.onClose
                      , a = e.onCancel
                      , i = e.onConfirm
                      , c = e.downloaderHongbaoOptions
                      , s = e.downloaderLiteOptions
                      , u = U(e, ["appName", "onOpenApp", "onBoss", "onClose", "onCancel", "onConfirm", "downloaderHongbaoOptions", "downloaderLiteOptions"]);
                    return _e.a.createElement(Yt.a, Hn({
                        name: "dialogConfirm",
                        appName: t,
                        onOpenApp: n,
                        onBoss: r,
                        options: c
                    }, u), function(e) {
                        var c = (e.status,
                        e.progress,
                        e.onClick)
                          , l = e.onExpose;
                        return _e.a.createElement(gt, null, _e.a.createElement(Dn.a, null), _e.a.createElement(Ge.b, {
                            onExpose: l
                        }, _e.a.createElement("div", {
                            className: zn.a.wrapper
                        }, _e.a.createElement("div", {
                            className: zn.a.content
                        }, _e.a.createElement("div", {
                            className: zn.a.exitButton,
                            onClick: function() {
                                return o()
                            }
                        }, _e.a.createElement("img", {
                            src: "//mat1.gtimg.com/www/js/news/dialog-confirm-hongbao-close.png",
                            alt: "X"
                        })), _e.a.createElement("div", {
                            className: zn.a.desc
                        }, "\u7acb\u5373\u4e0b\u8f7d\uff0c\u9001\u73b0\u91d1\u7ea2\u5305"), _e.a.createElement("a", {
                            onClick: function() {
                                c(),
                                i({
                                    isHongbao: !0
                                })
                            }
                        }, _e.a.createElement("img", {
                            className: zn.a.logo,
                            src: "//mat1.gtimg.com/www/js/news/dialog-confirm-hongbao-open.png",
                            alt: ""
                        })), _e.a.createElement("div", {
                            className: zn.a.text
                        }, _e.a.createElement("div", {
                            className: zn.a.textBlock
                        }, "\u3000"), _e.a.createElement("div", {
                            className: zn.a.cash
                        }, "1.0~9.9"), _e.a.createElement("div", {
                            className: zn.a.unit
                        }, "\u5143")), _e.a.createElement(Yt.a, Hn({
                            name: "dialogConfirmLite",
                            appName: t,
                            onOpenApp: n,
                            onBoss: r,
                            options: s
                        }, u), function(e) {
                            var t = e.onClick
                              , n = e.onExpose;
                            return _e.a.createElement(Ge.b, {
                                onExpose: n
                            }, _e.a.createElement("div", {
                                className: zn.a.lite,
                                onClick: function() {
                                    t(),
                                    i({
                                        isHongbao: !1
                                    })
                                }
                            }, _e.a.createElement("span", null, "\u62c5\u5fc3\u6d41\u91cf\uff1f\u8bd5\u8bd5", s.size, "\u6781\u901f\u7248"), _e.a.createElement("img", {
                                src: "//mat1.gtimg.com/www/js/news/lite-hongbao.png",
                                alt: ""
                            })))
                        }), _e.a.createElement("div", {
                            className: zn.a.flex1
                        }), _e.a.createElement("div", {
                            className: zn.a.buttons
                        }, _e.a.createElement("span", {
                            className: zn.a.cancelButton,
                            onClick: function() {
                                r("dialogConfirm_cancel"),
                                a()
                            }
                        }, "\u6b8b\u5fcd\u62d2\u7edd"), _e.a.createElement("span", {
                            className: zn.a.confirmButton,
                            onClick: function() {
                                c(),
                                i({
                                    isHongbao: !0
                                })
                            }
                        }, "\u7ee7\u7eed\u4e0b\u8f7d"))))))
                    })
                }
            }]),
            t
        }(we.PureComponent),
        Vt.defaultProps = {
            onOpenApp: ke.g,
            onBoss: ke.g,
            onClose: ke.g,
            onCancel: ke.g,
            onConfirm: ke.g
        },
        qt), Fn = n(585), Kn = n(216), Qn = n(35), Gn = n.n(Qn), Jn = n(211), Xn = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o)
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
        }(), Zn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Yn = /<!--\/?(VIDEO|MOBVIDEONEWS)_\w*?-->/gi, $n = /<!--(\/?\w*?)-->/i, er = (Ht = zt = function(e) {
            function t() {
                var e, n, r, o;
                J(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = X(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = null,
                o = n,
                X(r, o)
            }
            return Z(t, e),
            Zn(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = G(ve.a.mark(function e() {
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = this,
                                    e.next = 3,
                                    this.__getUnshownVideo(this.props);
                                case 3:
                                    e.t1 = e.sent,
                                    e.t0.setState.call(e.t0, e.t1);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__getUnshownVideo",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = G(ve.a.mark(function e(t) {
                        var n, r, o, a, i, c, s, u, l;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.data) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 3:
                                    if (!this.__isHotNewsBlock(n)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 5:
                                    if (r = n.cnt_html,
                                    o = n.cnt_attr,
                                    !(a = r.match(Yn))) {
                                        e.next = 11;
                                        break
                                    }
                                    return i = a[0].match($n),
                                    c = Xn(i, 2),
                                    s = c[1],
                                    u = void 0 === s ? "" : s,
                                    l = o[u],
                                    e.abrupt("return", u.startsWith("VIDEO_") ? this.__getViaVideo(l) : this.__getViaVideoAlbum(l));
                                case 11:
                                    return e.abrupt("return", this.__getViaTransfer(n));
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__isHotNewsBlock",
                value: function(e) {
                    return 1 === parseInt(e.ext && e.ext.action && e.ext.action.hotNewsBlock, 10)
                }
            }, {
                key: "__getViaVideo",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = G(ve.a.mark(function e(t) {
                        var n, r, o, a, i, c;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t.vid,
                                    r = t.aid,
                                    o = {
                                        atype: 56,
                                        vid: n,
                                        id: r
                                    },
                                    a = "/getNewRelateVideo?" + Gn.a.stringify(o),
                                    e.next = 5,
                                    Object(Jn.a)(a);
                                case 5:
                                    if (i = e.sent,
                                    (c = i.relateVideo) && c.length) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 9:
                                    return e.abrupt("return", {
                                        vid: c[0].vid,
                                        poster: c[0].img_small,
                                        title: "\u76f8\u5173\u89c6\u9891\uff1a" + c[0].title,
                                        id: c[0].id
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__getViaVideoAlbum",
                value: function(e) {
                    var t = e.videolist
                      , n = e.cms_orig_info
                      , r = void 0 === n ? {} : n;
                    if (!t || t.length < 2)
                        return null;
                    var o = t[1].video;
                    return {
                        vid: o.vid,
                        poster: o.img,
                        title: e.title || r.title,
                        length: t.length,
                        id: e.id
                    }
                }
            }, {
                key: "__getViaTransfer",
                value: function(e) {
                    var t = e.video_data;
                    if (!t)
                        return null;
                    var n = t.atype;
                    switch (Object(qe.c)(n)) {
                    case qe.a.video:
                        return this.__getViaVideo(t);
                    case qe.a.videoAlbum:
                        return this.__getViaVideoAlbum(t);
                    default:
                        return null
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return this.state ? e(this.state) : null
                }
            }]),
            t
        }(we.PureComponent),
        zt.defaultProps = {
            children: function() {
                return null
            }
        },
        Ht), tr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , nr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), rr = function(e) {
            function t(e) {
                $(this, t);
                var n = ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    newslist: null
                },
                n
            }
            return te(t, e),
            nr(t, [{
                key: "componentDidMount",
                value: function() {
                    this.fetchData()
                }
            }, {
                key: "fetchData",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = Y(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = "/getTwentyFourHourNews?for=download",
                                    e.next = 3,
                                    Object(Jn.a)(t);
                                case 3:
                                    n = e.sent,
                                    this.setState({
                                        newslist: n.newslist
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
                      , t = e.appName
                      , n = e.appDisplayName
                      , r = e.onBoss
                      , o = e.onOpenApp
                      , a = this.state.newslist;
                    return a ? a.map(function(e, a) {
                        return _e.a.createElement(Nn, {
                            key: "dialogNews" + a,
                            appName: t,
                            newsData: e,
                            appDisplayName: n,
                            onBoss: function(t, n) {
                                return r(t, tr({}, n, {
                                    moduleNewsId: e.id
                                }))
                            },
                            onOpenApp: function() {
                                return o({
                                    id: e.id,
                                    chlid: "news_news_top"
                                })
                            }
                        })
                    }) : null
                }
            }]),
            t
        }(we.PureComponent), or = n(727), ar = n.n(or), ir = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), cr = (Wt = {},
        ie(Wt, nt.a.COMPLETE, "\u7acb\u5373\u5b89\u88c5\u9886\u53d6\u73b0\u91d1\u7ea2\u5305"),
        ie(Wt, nt.a.INSTALLED, "\u7acb\u5373\u6253\u5f00\u9886\u53d6\u73b0\u91d1\u7ea2\u5305"),
        Wt), sr = function(e) {
            function t() {
                var e, n, r, o;
                re(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = oe(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    showConfirm: !1,
                    isDownloadingHongbao: !1
                },
                r.avater = Xt()([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3),
                r.__showConfirm = function() {
                    r.setState({
                        showConfirm: !0
                    })
                }
                ,
                r.__hideConfirm = function() {
                    r.setState({
                        showConfirm: !1
                    })
                }
                ,
                o = n,
                oe(r, o)
            }
            return ae(t, e),
            ir(t, [{
                key: "componentWillMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = ne(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props.appName,
                                    e.next = 3,
                                    Object(Qe.d)({
                                        name: t
                                    });
                                case 3:
                                    n = e.sent,
                                    n.addListener(nt.a.CANCEL, this.__showConfirm);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "componentWillUnmount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = ne(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props.appName,
                                    e.next = 3,
                                    Object(Qe.d)({
                                        name: t
                                    });
                                case 3:
                                    n = e.sent,
                                    n.removeListener(nt.a.CANCEL, this.__showConfirm);
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
                    var e = this
                      , t = this.props
                      , n = t.appName
                      , r = t.appDisplayName
                      , o = t.preferLite
                      , a = t.data
                      , i = t.onBoss
                      , c = t.onOpenApp
                      , s = t.downloaderOptions
                      , u = t.downloaderLiteOptions
                      , l = t.downloaderHongbaoOptions
                      , p = t.useHongbao
                      , f = this.state
                      , d = f.showConfirm
                      , m = f.isDownloadingHongbao
                      , h = void 0
                      , y = void 0;
                    return o ? (h = u,
                    y = s) : (h = s,
                    y = u),
                    _e.a.createElement(gt, null, _e.a.createElement(Zt.StickyContainer, null, _e.a.createElement(Zt.Sticky, {
                        disableCompensation: !0
                    }, function(t) {
                        var a = t.distanceFromTop
                          , s = t.calculatedHeight;
                        return _e.a.createElement("div", {
                            className: ar.a.sticky
                        }, _e.a.createElement("div", {
                            className: ar.a.dialogTopMini,
                            style: {
                                top: a - 50 <= -s ? 0 : "-0.5rem"
                            }
                        }, _e.a.createElement("img", {
                            className: ar.a.dialogTopLogoMini,
                            src: "//mat1.gtimg.com/www/js/news/dialog-news-small.png",
                            alt: ""
                        }), _e.a.createElement("span", {
                            className: ar.a.logoNameMini
                        }, r), _e.a.createElement("span", {
                            className: ar.a.logoNameTagMini
                        }, "\u5b98\u65b9"), _e.a.createElement("div", {
                            className: ar.a.brMini
                        }), _e.a.createElement(yn, {
                            className: ar.a.downloaderDialogTopMini,
                            appName: n,
                            onBoss: i,
                            onOpenApp: c,
                            options: h
                        })), _e.a.createElement("div", {
                            className: Gt()(ar.a.dialogTop, ar.a.padding)
                        }, _e.a.createElement("img", {
                            className: ar.a.dialogTopLogo,
                            src: "//mat1.gtimg.com/www/js/news/dialog-news-big.png",
                            alt: ""
                        }), _e.a.createElement("div", {
                            className: ar.a.logoNameBox
                        }, _e.a.createElement("span", {
                            className: ar.a.logoName
                        }, r), _e.a.createElement("span", {
                            className: ar.a.logoNameTag
                        }, "\u5b98\u65b9")), _e.a.createElement("div", {
                            className: ar.a.logoTextBox
                        }, e.avater.map(function(e) {
                            return _e.a.createElement("img", {
                                key: "user_avater" + e,
                                className: ar.a.avatar,
                                src: "//mat1.gtimg.com/www/js/news/user_avater" + e + ".JPG",
                                alt: ""
                            })
                        }), _e.a.createElement("span", null, "1\u4ebf\u4eba\u90fd\u5728\u7528\u7684\u65b0\u95fb\u5e94\u7528")), _e.a.createElement(pn, {
                            className: ar.a.downloaderDialogTop,
                            appName: n,
                            appDisplayName: r,
                            onBoss: i,
                            onOpenApp: c,
                            isLite: o,
                            text: p && m ? cr : null,
                            size: h.size,
                            options: h
                        }), _e.a.createElement(Sn, {
                            appName: n,
                            appDisplayName: r,
                            onBoss: i,
                            onOpenApp: c,
                            isLite: !o,
                            size: y.size,
                            options: y
                        })))
                    }), _e.a.createElement("div", {
                        className: ar.a.padding
                    }, _e.a.createElement("div", {
                        className: ar.a.dialogVideo
                    }, _e.a.createElement(Fn.b, {
                        render: function(e) {
                            var t = e.width;
                            return Boolean(t) && _e.a.createElement(er, {
                                data: a.content
                            }, function(e) {
                                var o = e.vid
                                  , a = e.poster
                                  , s = e.title
                                  , u = e.length
                                  , l = e.id;
                                return _e.a.createElement(we.Fragment, null, _e.a.createElement("div", {
                                    className: ar.a.videoText
                                }, _e.a.createElement("span", {
                                    className: ar.a.videoTitle
                                }, s), !!u && _e.a.createElement("span", {
                                    className: ar.a.videoNumber
                                }, "\uff08", u, "\u4e2a\u89c6\u9891\uff09")), _e.a.createElement(Kn.a, {
                                    vid: o,
                                    poster: a,
                                    height: (Math.min(750, t) - 30) / 16 * 9
                                }), _e.a.createElement(on, {
                                    className: ar.a.downloaderDialogVideo,
                                    appName: n,
                                    appDisplayName: r,
                                    onBoss: i,
                                    onOpenApp: function() {
                                        return c({
                                            id: l,
                                            chlid: "news_news_top"
                                        })
                                    },
                                    options: h
                                }))
                            })
                        }
                    })), _e.a.createElement(rr, {
                        appName: n,
                        appDisplayName: r,
                        onBoss: i,
                        onOpenApp: c,
                        options: h
                    }), _e.a.createElement(gn, {
                        className: ar.a.downloaderDialogBottom,
                        appName: n,
                        appDisplayName: r,
                        onBoss: i,
                        onOpenApp: c,
                        options: h
                    })), d && !p && _e.a.createElement(Vn, {
                        appName: n,
                        onBoss: i,
                        onOpenApp: c,
                        onClose: function() {
                            return e.__hideConfirm()
                        },
                        onCancel: function() {
                            return e.__hideConfirm()
                        },
                        onConfirm: function() {
                            return e.__hideConfirm()
                        },
                        isLite: o,
                        size: u.size,
                        options: u
                    }), d && p && _e.a.createElement(Un, {
                        appName: n,
                        onBoss: i,
                        onOpenApp: c,
                        onClose: function() {
                            return e.__hideConfirm()
                        },
                        onCancel: function() {
                            return e.__hideConfirm()
                        },
                        onConfirm: function(t) {
                            t.isHongbao && e.setState({
                                isDownloadingHongbao: !0
                            }),
                            e.__hideConfirm()
                        },
                        downloaderHongbaoOptions: l,
                        downloaderLiteOptions: u
                    })))
                }
            }]),
            t
        }(we.PureComponent), ur = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), lr = Object(ge.a)((Kt = Ft = function(e) {
            function t() {
                return se(this, t),
                ue(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return le(t, e),
            ur(t, [{
                key: "componentWillMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = ce(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props.data,
                                    e.next = 3,
                                    this.__isAndroidWeixinExp();
                                case 3:
                                    if (!(n = e.sent)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 7,
                                    Object(ut.b)();
                                case 7:
                                    return "wifi" !== Object(ut.a)() ? Object(Ke.n)("news", Object(lt.b)({
                                        type: lt.a.newsLite,
                                        downloadUrl: t.view.downloadeLiteUrl_1,
                                        downloadMd5: t.view.downloadLiteMd5_1
                                    })) : Object(Ke.n)("news", Object(lt.b)({
                                        type: lt.a.newsOfficial,
                                        downloadUrl: t.view.downloadeUrl_1,
                                        downloadMd5: t.view.downloadMd5_1
                                    })),
                                    e.abrupt("return");
                                case 9:
                                    Object(Ke.n)("news", Object(lt.b)({
                                        type: lt.a.news,
                                        downloadUrl: t.view.downloadeUrl,
                                        downloadMd5: t.view.downloadMd5
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__isAndroidWeixinExp",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = ce(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.props.path,
                                    e.next = 3,
                                    nt.d.readyAny();
                                case 3:
                                    return n = e.sent,
                                    e.abrupt("return", Boolean("w" === t && "news" === Object(Fe.b)(t) && n.getOs() === nt.b.ANDROID && "weixin" === n.type && this.props.query && "B6" !== Object(Fe.c)()));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "__useHongbaoApk",
                value: function() {
                    return "B6" !== Object(Fe.c)()
                }
            }, {
                key: "__getDownloaderOptions",
                value: function(e) {
                    var t = this.props.data.view
                      , n = void 0 === t ? {} : t;
                    return e === lt.a.newsLite ? Object(lt.b)({
                        type: lt.a.newsLite,
                        downloadUrl: n.downloadeLiteUrl,
                        downloadMd5: n.downloadLiteMd5,
                        size: n.downloadLiteSize
                    }) : e === lt.a.newsOfficialHongbao ? Object(lt.b)({
                        type: lt.a.newsOfficialHongbao,
                        downloadUrl: n.downloadeRedUrl,
                        downloadMd5: n.downloadRedMd5,
                        size: n.downloadSize
                    }) : Object(lt.b)({
                        type: lt.a.newsOfficial,
                        downloadUrl: n.downloadeUrl_2,
                        downloadMd5: n.downloadMd5_2,
                        size: n.downloadSize_2
                    })
                }
            }, {
                key: "__onDownload",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = ce(ve.a.mark(function e() {
                        var t, n;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.__isAndroidWeixinExp();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return n = this.props.location,
                                    e.next = 8,
                                    Object(ke.l)(800);
                                case 8:
                                    this.context.router.history.push("" + n.pathname + n.search + "&dialog=1");
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
                      , n = t.children
                      , r = t.location
                      , o = t.appName
                      , a = t.appDisplayName
                      , i = t.data
                      , c = t.onBoss
                      , s = t.onOpenApp
                      , u = -1 !== r.search.indexOf("dialog=1");
                    return _e.a.createElement(we.Fragment, null, u && _e.a.createElement(sr, {
                        appName: o,
                        appDisplayName: a,
                        data: i,
                        preferLite: "wifi" !== Object(ut.a)(),
                        useHongbao: this.__useHongbaoApk(),
                        onBoss: c,
                        onOpenApp: function(e) {
                            return s(e)
                        },
                        downloaderOptions: this.__getDownloaderOptions(lt.a.newsOfficial),
                        downloaderLiteOptions: this.__getDownloaderOptions(lt.a.newsLite),
                        downloaderHongbaoOptions: this.__getDownloaderOptions(lt.a.newsOfficialHongbao)
                    }), _e.a.createElement("div", {
                        style: {
                            display: u ? "none" : void 0
                        }
                    }, n({
                        isDialogOpen: u,
                        onDownload: function() {
                            return e.__onDownload()
                        }
                    })))
                }
            }]),
            t
        }(we.Component),
        Ft.contextTypes = {
            router: st.a.object
        },
        Ft.defaultProps = {
            appName: "news",
            appDisplayName: "\u817e\u8baf\u65b0\u95fb",
            onBoss: ke.g,
            onOpenApp: ke.g,
            data: {},
            location: {},
            query: {}
        },
        Ut = Kt)) || Ut, pr = n(728), fr = n.n(pr);
        n.d(t, "default", function() {
            return br
        });
        var dr, mr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , hr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), yr = {
            news: "\u817e\u8baf\u65b0\u95fb",
            kuaibao: "\u5929\u5929\u5feb\u62a5"
        }, br = Object(ge.a)(dr = function(e) {
            function t() {
                var e, n, r, o;
                fe(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++)
                    i[c] = arguments[c];
                return n = r = de(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.state = {
                    showMore: !1
                },
                o = n,
                de(r, o)
            }
            return me(t, e),
            hr(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = pe(ve.a.mark(function e() {
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.__initScroll();
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    e.prev = 5,
                                    e.t0 = e.catch(0),
                                    console.error(e.t0);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 5]])
                    }));
                    return e
                }()
            }, {
                key: "__getShareInfo",
                value: function() {
                    var e = this.props.data
                      , t = e.content
                      , n = t.title
                      , r = t.second_title
                      , o = t.imgurl
                      , a = t.ext;
                    a = void 0 === a ? {} : a;
                    var i = a.action;
                    i = void 0 === i ? {} : i;
                    var c = i.Fimgurl15;
                    return {
                        title: n,
                        desc: r,
                        link: document.location.href,
                        imgUrl: c || o
                    }
                }
            }, {
                key: "__initScroll",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = pe(ve.a.mark(function e() {
                        var t;
                        return ve.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(ke.f)();
                                case 2:
                                    t = this.props.initScrollY,
                                    window.scrollTo(0, t);
                                case 4:
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.type
                      , n = e.id
                      , r = e.iscomment
                      , o = e.chlid
                      , a = e.tab
                      , i = e.act
                      , c = e.topic_id
                      , s = e.tabid
                      , u = e.search_keyword
                      , l = this.props.path
                      , p = Object(Ke.f)({
                        name: Object(Fe.b)(l),
                        type: t,
                        path: l,
                        options: {
                            nm: n,
                            iscomment: r,
                            chlid: o,
                            tab: a,
                            act: i,
                            topic_id: c,
                            tabid: s,
                            search_keyword: u
                        }
                    });
                    Object(Ke.l)({
                        name: Object(Fe.b)(l),
                        schemeUrl: p
                    })
                }
            }, {
                key: "__bossSOp",
                value: function(e, t) {
                    var n = this.props
                      , r = n.path
                      , o = n.newsId
                      , a = n.data
                      , i = void 0 === a ? {} : a
                      , c = i.content.atype;
                    if (!this.__boss) {
                        var s = Object(ze.b)(r)
                          , u = s.bossId
                          , l = s.pwd;
                        this.__boss = new Ye.a({
                            BossId: u,
                            Pwd: l
                        })
                    }
                    console.warn("boss", e, t);
                    var p = Object($e.a)({
                        appName: Object(Fe.b)(r)
                    })
                      , f = mr({}, p, {
                        sOp: e,
                        path: r,
                        atype: Object(qe.c)(c),
                        sNewsId: o
                    }, t);
                    this.__boss.sendByGet(f)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.path
                      , r = t.newsId
                      , o = t.data
                      , a = t.type
                      , i = t.location
                      , c = t.query
                      , s = Object(Fe.b)(n)
                      , u = yr[s] || "\u817e\u8baf\u65b0\u95fb"
                      , l = o.content
                      , p = l.title
                      , f = l.src
                      , d = l.pubtime
                      , m = l.cnt_html
                      , h = void 0 === m ? "" : m
                      , y = l.cnt_attr
                      , b = l.htmlIntro
                      , v = l.cnt_html_today
                      , w = void 0 === v ? [] : v
                      , _ = l.atype
                      , g = l.chlid
                      , O = l.ext
                      , E = void 0 === O ? {} : O
                      , x = l.shareUserInfo
                      , j = l.cardInfo
                      , k = void 0 === j ? {} : j
                      , N = w.map(function(e) {
                        return y[e]
                    })
                      , P = !!N && !!N.length
                      , C = Ue()({
                        target: E || {},
                        prefix: "action",
                        path: ["Fimgurl38", "hotNewsBlock", "Fdownloadword", "copyright", "copyright_wording", "appTransferInfo", "Fwxtopicid"],
                        success: function() {
                            return {
                                Fimgurl38: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                hotNewsBlock: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                Fdownloadword: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "{}",
                                copyright: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                copyright_wording: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "\xa9\ufe0f \u7248\u6743\u58f0\u660e",
                                appTransferInfo: arguments[5],
                                Fwxtopicid: arguments[6]
                            }
                        }
                    })
                      , T = "news_news_mil" !== g && "news_news_ssh" !== g && C.Fimgurl38
                      , A = function(e, t) {
                        return "plugin" === a ? e : t
                    }
                      , S = 1 === parseInt(C.hotNewsBlock, 10)
                      , B = -1 !== h.indexOf("\x3c!--$$$--\x3e")
                      , D = this.state.showMore
                      , I = B && !D ? h.split("\x3c!--$$$--\x3e")[0] : h.replace("\x3c!--$$$--\x3e", "")
                      , L = at(C.Fdownloadword)
                      , M = it(o)
                      , R = Object(Fe.f)(n);
                    return _e.a.createElement(we.Fragment, null, _e.a.createElement(tt.a, {
                        data: {
                            path: n,
                            type: "normal"
                        }
                    }), _e.a.createElement(Qe.a, {
                        onBoss: function(t, n) {
                            return e.__bossSOp(t, n)
                        }
                    }), _e.a.createElement(He.a, mr({}, this.__getShareInfo(), {
                        onBoss: function(t, n) {
                            return e.__bossSOp(t, n)
                        }
                    })), _e.a.createElement(Oe.Helmet, null, _e.a.createElement("title", null, "a" === n ? p : "\u817e\u8baf\u65b0\u95fb")), _e.a.createElement(lr, {
                        appName: s,
                        appDisplayName: u,
                        data: o,
                        location: i,
                        query: c,
                        path: n,
                        onBoss: function(t, n) {
                            return e.__bossSOp(t, n)
                        },
                        onOpenApp: function(t) {
                            return e.__onOpenApp(t)
                        }
                    }, function(t) {
                        var i = t.onDownload;
                        return _e.a.createElement(Ge.b, {
                            onExpose: function() {
                                return e.__bossSOp("pageView")
                            }
                        }, _e.a.createElement("div", {
                            className: fr.a.wrapper + " " + fr.a["theme-" + s]
                        }, !!T && !!T.length && _e.a.createElement("div", {
                            className: fr.a.headImg
                        }, _e.a.createElement("img", {
                            src: T,
                            alt: ""
                        })), _e.a.createElement("div", {
                            className: fr.a.padding
                        }, _e.a.createElement("div", {
                            className: fr.a.title
                        }, _e.a.createElement(Ae, {
                            intent: 3
                        }, p)), "k" !== n && _e.a.createElement(Se.b, null, _e.a.createElement("div", {
                            className: fr.a.desc
                        }, f, " ", d)), "k" === n && _e.a.createElement("div", {
                            className: fr.a.OMDesc
                        }, k.icon && _e.a.createElement("img", {
                            className: fr.a.OMIcon,
                            src: k.icon,
                            alt: ""
                        }), _e.a.createElement("span", {
                            className: fr.a.OMText
                        }, f, " ", d), _e.a.createElement(Xe.g, {
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function(t) {
                                return e.__onOpenApp({
                                    chlid: g,
                                    id: r
                                })
                            }
                        })), "share" === a && _e.a.createElement(Be.a, {
                            introdctionDes: b
                        })), _e.a.createElement("div", {
                            className: fr.a.content
                        }, _e.a.createElement(je.a, {
                            theme: s,
                            by: B ? "force" : "height",
                            onExpanded: function() {
                                return e.setState({
                                    showMore: !0
                                })
                            },
                            maxHeight: "plugin" === a || "yg" === n || "k" === n ? 1 / 0 : 2 * window.innerHeight
                        }, _e.a.createElement("div", {
                            className: fr.a.padding
                        }, _e.a.createElement(xe.b, {
                            useWendaExp: R,
                            useVideoExp: R,
                            appName: s,
                            appDisplayName: u,
                            metaInfo: y,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function(t) {
                                return e.__onOpenApp({
                                    id: t.id,
                                    chlid: t.chlid
                                })
                            },
                            onClickDownloadAction: i,
                            theme: s,
                            isGroupImg: Object(qe.c)(_) === qe.a.groupPic,
                            imageOverflowOffset: 15,
                            nextPath: Object(qe.d)(n)
                        }, I), o.content.voteId && _e.a.createElement(Ve.a, {
                            className: fr.a.vote,
                            id: o.content.voteId
                        }), Boolean(C.copyright) && _e.a.createElement(Re, {
                            copyright: C.copyright,
                            copyrightWording: C.copyright_wording
                        })))), _e.a.createElement("div", {
                            className: fr.a.padding
                        }, "share" === a && _e.a.createElement(De.b, {
                            className: fr.a.comment,
                            commentId: o.content.cid,
                            hotCount: Object(Fe.d)() ? 4 : 2,
                            hitCommentSwipe: Object(Fe.d)(),
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    iscomment: 1,
                                    chlid: g,
                                    id: r
                                })
                            }
                        }), "plugin" === a && R && _e.a.createElement(De.a, {
                            className: fr.a.comment,
                            commentList: M
                        }), "yg" !== n && _e.a.createElement(Xe.b, {
                            className: fr.a.downloaderComment,
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    iscomment: 1,
                                    chlid: g,
                                    id: r
                                })
                            },
                            commentCount: o.view.comment_count || 0,
                            text: L.comment,
                            onClickDownloadAction: i
                        })), "plugin" === a && R && _e.a.createElement(Je.b, {
                            className: fr.a.recommend,
                            title: "\u5ef6\u5c55\u9605\u8bfb",
                            newsId: r,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            appName: s,
                            appDisplayName: u,
                            path: n,
                            nextPath: Object(qe.d)(n),
                            relNews: o.content.rel_news || []
                        }), "k" !== n && "yg" !== n && !P && _e.a.createElement(Je.a, {
                            className: fr.a.recommend,
                            title: A("\u70ed\u95e8\u63a8\u8350", "\u5ef6\u5c55\u9605\u8bfb"),
                            newsId: r,
                            apiType: "plugin" === a ? "weixinHotNews" : "getRelateRecomm",
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            downloaderNumber: A(1, 3),
                            appName: s,
                            appDisplayName: u,
                            onOpenApp: function(t) {
                                return e.__onOpenApp({
                                    id: t.id,
                                    chlid: g
                                })
                            },
                            onOpenAppTopic: function(t) {
                                var n = t.topicId
                                  , r = t.tabId;
                                return e.__onOpenApp({
                                    type: "act",
                                    act: "topic",
                                    topic_id: n,
                                    tabid: r
                                })
                            },
                            onClickDownloadAction: i,
                            path: n,
                            nextPath: Object(qe.d)(n),
                            showAd: "plugin" === a,
                            hotNewsBlock: S,
                            appTransferInfo: "plugin" === a ? C.appTransferInfo : null,
                            relNews: "plugin" !== a || R ? [] : o.content.rel_news || [],
                            topicId: !1
                        }), "k" !== n && "yg" !== n && P && _e.a.createElement(Ge.b, {
                            onExpose: function() {
                                return e.__bossSOp("hotnews_exposure")
                            },
                            onClick: function() {
                                return e.__bossSOp("hotnews_click")
                            }
                        }, _e.a.createElement("div", {
                            className: fr.a.hotnews
                        }, _e.a.createElement("div", {
                            className: fr.a.padding
                        }, _e.a.createElement(Se.b, {
                            className: fr.a.hotnewsText
                        }, _e.a.createElement("div", {
                            className: fr.a.hotnewsDesc
                        }, "\u70ed\u70b9\u8d44\u8baf"))), _e.a.createElement("div", {
                            className: fr.a.hotnewsList
                        }, N.map(function(t, r) {
                            var o = t.title
                              , a = (t.link,
                            t.id)
                              , i = t.atype
                              , c = t.cms_orig_info;
                            return _e.a.createElement(Ge.b, {
                                key: a,
                                onExpose: function() {
                                    return e.__bossSOp("hotnews_item_exposure", {
                                        modulePos: r + 1,
                                        moduleNewsId: a
                                    })
                                },
                                onClick: function() {
                                    return e.__bossSOp("hotnews_item_click", {
                                        modulePos: r + 1,
                                        moduleNewsId: a
                                    })
                                }
                            }, _e.a.createElement(Ee.a, {
                                className: fr.a.hotnewsItem,
                                atype: i,
                                href: Object(ke.a)(Object(ke.c)({
                                    appName: s,
                                    id: a,
                                    path: Object(qe.d)(n)
                                }), {
                                    refer: "wx_hot"
                                })
                            }, _e.a.createElement("div", {
                                className: fr.a.hotnewsContent
                            }, _e.a.createElement("div", {
                                className: fr.a.hotnewsOrder + " " + fr.a["theme-" + s]
                            }, r + 1), _e.a.createElement("div", {
                                className: fr.a.hotnewsTitle
                            }, c.desc || o))))
                        })))), "a" !== n && "k" !== n && "yg" !== n && (S ? _e.a.createElement("div", {
                            className: fr.a.whiteMargin
                        }) : _e.a.createElement(Xe.a, {
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    type: "tab",
                                    tab: "news_news"
                                })
                            },
                            text: L.bottom,
                            onClickDownloadAction: i
                        })), !S && "a" === n && !Object(Fe.g)() && _e.a.createElement(Ze.a, {
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    chlid: g,
                                    id: r
                                })
                            },
                            onOpenAppNews: function(t) {
                                var n = t.newsId;
                                return e.__onOpenApp({
                                    id: n,
                                    chlid: g
                                })
                            },
                            path: n,
                            hotnews: N,
                            newsId: r
                        }), !S && "a" === n && Object(Fe.g)() && _e.a.createElement(Ze.c, {
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    chlid: g,
                                    id: r
                                })
                            },
                            onOpenAppNews: function(t) {
                                var n = t.newsId;
                                return e.__onOpenApp({
                                    id: n,
                                    chlid: g
                                })
                            },
                            path: n,
                            hotnews: N,
                            newsId: r
                        }), !et(o.content) && "a" === n && Object(Fe.g)() && _e.a.createElement(Ze.b, {
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function() {
                                return e.__onOpenApp({
                                    chlid: g,
                                    id: r
                                })
                            },
                            shareUserInfo: x
                        }), !et(o.content) && "a" === n && Object(Fe.e)() && _e.a.createElement(Xe.d, {
                            className: fr.a.padding,
                            appName: s,
                            appDisplayName: u,
                            onBoss: function(t, n) {
                                return e.__bossSOp(t, n)
                            },
                            onOpenApp: function(t) {
                                return e.__onOpenApp(t)
                            }
                        })))
                    }))
                }
            }]),
            t
        }(we.Component)) || dr
    }
});
//# sourceMappingURL=normal.9168119a.chunk.js.map/*  |xGv00|6e33b34907cadbc1f5da19ae26b0dc04 */



