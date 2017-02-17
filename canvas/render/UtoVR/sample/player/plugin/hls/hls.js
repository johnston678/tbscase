!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Hls = e()
    }
}(function () {
    return function s(e, t, r) {
        function i(a, d) {
            if (!t[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!d && l)return l(a, !0);
                    if (n)return n(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var o = t[a] = {exports: {}};
                e[a][0].call(o.exports, function (t) {
                    var r = e[a][1][t];
                    return i(r ? r : t)
                }, o, o.exports, s, e, t, r)
            }
            return t[a].exports
        }

        for (var n = "function" == typeof require && require, a = 0; a < r.length; a++)i(r[a]);
        return i
    }({
        1: [function (s, a, o) {
            function e() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function t(e) {
                return "function" == typeof e
            }

            function n(e) {
                return "number" == typeof e
            }

            function r(e) {
                return "object" == typeof e && null !== e
            }

            function i(e) {
                return void 0 === e
            }

            a.exports = e, e.EventEmitter = e, e.prototype._events = void 0, e.prototype._maxListeners = void 0, e.defaultMaxListeners = 10, e.prototype.setMaxListeners = function (e) {
                if (!n(e) || 0 > e || isNaN(e))throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, e.prototype.emit = function (l) {
                var s, e, u, a, n, o;
                if (this._events || (this._events = {}), "error" === l && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
                    if (s = arguments[1], s instanceof Error)throw s;
                    throw TypeError('Uncaught, unspecified "error" event.')
                }
                if (e = this._events[l], i(e))return !1;
                if (t(e))switch (arguments.length) {
                    case 1:
                        e.call(this);
                        break;
                    case 2:
                        e.call(this, arguments[1]);
                        break;
                    case 3:
                        e.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), e.apply(this, a)
                } else if (r(e))for (a = Array.prototype.slice.call(arguments, 1), o = e.slice(), u = o.length, n = 0; u > n; n++)o[n].apply(this, a);
                return !0
            }, e.prototype.addListener = function (a, n) {
                var s;
                if (!t(n))throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, t(n.listener) ? n.listener : n), this._events[a] ? r(this._events[a]) ? this._events[a].push(n) : this._events[a] = [this._events[a], n] : this._events[a] = n, r(this._events[a]) && !this._events[a].warned && (s = i(this._maxListeners) ? e.defaultMaxListeners : this._maxListeners, s && s > 0 && this._events[a].length > s && (this._events[a].warned = !0, "function" == typeof console.trace)), this
            }, e.prototype.on = e.prototype.addListener, e.prototype.once = function (i, e) {
                function r() {
                    this.removeListener(i, r), a || (a = !0, e.apply(this, arguments))
                }

                if (!t(e))throw TypeError("listener must be a function");
                var a = !1;
                return r.listener = e, this.on(i, r), this
            }, e.prototype.removeListener = function (a, i) {
                var e, s, o, n;
                if (!t(i))throw TypeError("listener must be a function");
                if (!this._events || !this._events[a])return this;
                if (e = this._events[a], o = e.length, s = -1, e === i || t(e.listener) && e.listener === i)delete this._events[a], this._events.removeListener && this.emit("removeListener", a, i); else if (r(e)) {
                    for (n = o; n-- > 0;)if (e[n] === i || e[n].listener && e[n].listener === i) {
                        s = n;
                        break
                    }
                    if (0 > s)return this;
                    1 === e.length ? (e.length = 0, delete this._events[a]) : e.splice(s, 1), this._events.removeListener && this.emit("removeListener", a, i)
                }
                return this
            }, e.prototype.removeAllListeners = function (r) {
                var i, e;
                if (!this._events)return this;
                if (!this._events.removeListener)return 0 === arguments.length ? this._events = {} : this._events[r] && delete this._events[r], this;
                if (0 === arguments.length) {
                    for (i in this._events)"removeListener" !== i && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (e = this._events[r], t(e))this.removeListener(r, e); else if (e)for (; e.length;)this.removeListener(r, e[e.length - 1]);
                return delete this._events[r], this
            }, e.prototype.listeners = function (e) {
                var r;
                return r = this._events && this._events[e] ? t(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, e.prototype.listenerCount = function (r) {
                if (this._events) {
                    var e = this._events[r];
                    if (t(e))return 1;
                    if (e)return e.length
                }
                return 0
            }, e.listenerCount = function (e, t) {
                return e.listenerCount(t)
            }
        }, {}], 2: [function (n, i, s) {
            var a = arguments[3], e = arguments[4], r = arguments[5], t = JSON.stringify;
            i.exports = function (l) {
                for (var i, s = Object.keys(r), n = 0, d = s.length; d > n; n++) {
                    var o = s[n], u = r[o].exports;
                    if (u === l || u.default === l) {
                        i = o;
                        break
                    }
                }
                if (!i) {
                    i = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var h = {}, n = 0, d = s.length; d > n; n++) {
                        var o = s[n];
                        h[o] = o
                    }
                    e[i] = [Function(["require", "module", "exports"], "(" + l + ")(self)"), h]
                }
                var f = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), c = {};
                c[i] = i, e[f] = [Function(["require"], "var f = require(" + t(i) + ");(f.default ? f.default : f)(self);"), c];
                var v = "(" + a + ")({" + Object.keys(e).map(function (r) {
                        return t(r) + ":[" + e[r][0] + "," + t(e[r][1]) + "]"
                    }).join(",") + "},{},[" + t(f) + "])", g = window.URL || window.webkitURL || window.mozURL || window.msURL;
                return new Worker(g.createObjectURL(new Blob([v], {type: "text/javascript"})))
            }
        }, {}], 3: [function (e, m, o) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function c(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function v(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(o, "__esModule", {value: !0});
            var g = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = e(26), r = i(l), d = e(25), a = i(d), f = e(28), n = i(f), s = e(24), t = e(43), p = e(8), u = i(p), y = function (i) {
                function e(i) {
                    c(this, e);
                    var t = h(this, Object.getPrototypeOf(e).call(this, i, r.default.FRAG_LOADING, r.default.FRAG_LOADED, r.default.ERROR));
                    return t.lastLoadedFragLevel = 0, t._autoLevelCapping = -1, t._nextAutoLevel = -1, t.hls = i, t.onCheck = t.abandonRulesCheck.bind(t), t
                }

                return v(e, i), g(e, [{
                    key: "destroy", value: function () {
                        this.clearTimer(), a.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onFragLoading", value: function (a) {
                        var n = a.frag;
                        if ("main" === n.type) {
                            if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this.bwEstimator) {
                                var t = this.hls, s = a.frag.level, o = t.levels[s].details.live, e = t.config, r = void 0, i = void 0;
                                o ? (r = e.abrEwmaFastLive, i = e.abrEwmaSlowLive) : (r = e.abrEwmaFastVoD, i = e.abrEwmaSlowVoD), this.bwEstimator = new u.default(t, i, r, e.abrEwmaDefaultEstimate)
                            }
                            this.fragCurrent = n
                        }
                    }
                }, {
                    key: "abandonRulesCheck", value: function () {
                        var o = this.hls, s = o.media, e = this.fragCurrent, l = e.loader;
                        if (!l || l.stats && l.stats.aborted)return t.logger.warn("frag loader destroy or aborted, disarm abandonRulesCheck"), void this.clearTimer();
                        var i = l.stats;
                        if (s && (!s.paused && 0 !== s.playbackRate || !s.readyState) && e.autoLevel && e.level) {
                            var h = performance.now() - i.trequest, f = Math.abs(s.playbackRate);
                            if (h > 500 * e.duration / f) {
                                var p = o.levels, v = Math.max(1, i.bw ? i.bw / 8 : 1e3 * i.loaded / h), y = i.total ? i.total : Math.max(i.loaded, Math.round(e.duration * p[e.level].bitrate / 8)), g = s.currentTime, c = (y - i.loaded) / v, u = (n.default.bufferInfo(s, g, o.config.maxBufferHole).end - g) / f;
                                if (u < 2 * e.duration / f && c > u) {
                                    var d = void 0, a = void 0;
                                    for (a = e.level - 1; a >= 0 && (d = e.duration * p[a].bitrate / (6.4 * v), t.logger.log("fragLoadedDelay/bufferStarvationDelay/fragLevelNextLoadedDelay[" + a + "] :" + c.toFixed(1) + "/" + u.toFixed(1) + "/" + d.toFixed(1)), !(u > d)); a--);
                                    c > d && (a = Math.max(0, a), o.nextLoadLevel = a, this.bwEstimator.sample(h, i.loaded), t.logger.warn("loading too slow, abort fragment loading and switch to level " + a), e.loader.abort(), this.clearTimer(), o.trigger(r.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                        frag: e,
                                        stats: i
                                    }))
                                }
                            }
                        }
                    }
                }, {
                    key: "onFragLoaded", value: function (r) {
                        var e = r.frag;
                        if ("main" === e.type) {
                            var t = r.stats;
                            if (void 0 === t.aborted && 1 === e.loadCounter) {
                                var i = t.tload - t.trequest;
                                this.bwEstimator.sample(i, t.loaded), e.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                            }
                            this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1
                        }
                    }
                }, {
                    key: "onError", value: function (e) {
                        switch (e.details) {
                            case s.ErrorDetails.FRAG_LOAD_ERROR:
                            case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                this.clearTimer()
                        }
                    }
                }, {
                    key: "clearTimer", value: function () {
                        this.timer && (clearInterval(this.timer), this.timer = null)
                    }
                }, {
                    key: "findBestLevel", value: function (g, h, s, v, u, c, f, l) {
                        for (var e = v; e >= 0; e--) {
                            var d = l[e], n = d.details, o = n ? n.totalduration / n.fragments.length : h, r = void 0;
                            r = g >= e ? c * s : f * s;
                            var a = l[e].bitrate, i = a * o / r;
                            if (t.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + e + "/" + Math.round(r) + "/" + a + "/" + o + "/" + u + "/" + i), r > a && (!i || u > i))return e
                        }
                        return -1
                    }
                }, {
                    key: "autoLevelCapping", get: function () {
                        return this._autoLevelCapping
                    }, set: function (e) {
                        this._autoLevelCapping = e
                    }
                }, {
                    key: "nextAutoLevel", get: function () {
                        var e = this._nextAutoLevel, r = this.bwEstimator;
                        if (!(-1 === e || r && r.canEstimate()))return Math.min(e, this.maxAutoLevel);
                        var t = this.nextABRAutoLevel;
                        return -1 !== e && (t = Math.min(e, t)), t
                    }, set: function (e) {
                        this._nextAutoLevel = e
                    }
                }, {
                    key: "maxAutoLevel", get: function () {
                        var r, e = this.hls.levels, t = this._autoLevelCapping;
                        return r = -1 === t && e && e.length ? e.length - 1 : t
                    }
                }, {
                    key: "nextABRAutoLevel", get: function () {
                        var a = this.hls, u = this.maxAutoLevel, c = a.levels, e = a.config, r = a.media, f = this.lastLoadedFragLevel, h = this.fragCurrent ? this.fragCurrent.duration : 0, v = r ? r.currentTime : 0, g = r && 0 !== r.playbackRate ? Math.abs(r.playbackRate) : 1, d = this.bwEstimator ? this.bwEstimator.getEstimate() : e.abrEwmaDefaultEstimate, l = (n.default.bufferInfo(r, v, e.maxBufferHole).end - v) / g, i = this.findBestLevel(f, h, d, u, l, e.abrBandWidthFactor, e.abrBandWidthUpFactor, c);
                        if (i >= 0)return i;
                        t.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var s = e.maxStarvationDelay;
                        if (0 === l) {
                            var o = this.bitrateTestDelay;
                            o && (s -= o, t.logger.trace("bitrate test took " + Math.round(1e3 * o) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * s) + " ms"))
                        }
                        return i = this.findBestLevel(f, h, d, u, l + s, e.abrBandWidthFactor, e.abrBandWidthUpFactor, c), Math.max(i, 0)
                    }
                }]), e
            }(a.default);
            o.default = y
        }, {24: 24, 25: 25, 26: 26, 28: 28, 43: 43, 8: 8}], 4: [function (i, A, s) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function g(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function k(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(s, "__esModule", {value: !0});
            var _ = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = i(39), u = n(l), d = i(28), h = n(d), f = i(20), T = n(f), v = i(26), t = n(v), p = i(25), o = n(p), m = i(29), E = n(m), b = i(45), R = n(b), a = i(24), r = i(43), e = {
                STOPPED: "STOPPED",
                STARTING: "STARTING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_TRACK: "WAITING_TRACK",
                PARSING: "PARSING",
                PARSED: "PARSED",
                ENDED: "ENDED",
                ERROR: "ERROR"
            }, c = function (n) {
                function i(r) {
                    g(this, i);
                    var e = y(this, Object.getPrototypeOf(i).call(this, r, t.default.MEDIA_ATTACHED, t.default.MEDIA_DETACHING, t.default.AUDIO_TRACKS_UPDATED, t.default.AUDIO_TRACK_SWITCH, t.default.AUDIO_TRACK_LOADED, t.default.KEY_LOADED, t.default.FRAG_LOADED, t.default.FRAG_PARSING_INIT_SEGMENT, t.default.FRAG_PARSING_DATA, t.default.FRAG_PARSED, t.default.ERROR, t.default.BUFFER_CREATED, t.default.BUFFER_APPENDED, t.default.BUFFER_FLUSHED));
                    return e.config = r.config, e.audioCodecSwap = !1, e.ticks = 0, e.ontick = e.tick.bind(e), e
                }

                return k(i, n), _(i, [{
                    key: "destroy", value: function () {
                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), o.default.prototype.destroy.call(this), this.state = e.STOPPED
                    }
                }, {
                    key: "startLoad", value: function (t) {
                        if (this.tracks) {
                            var a = this.media, i = this.lastCurrentTime;
                            this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, a && i ? (r.logger.log("configure startPosition @" + i), this.state = e.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = e.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                        } else this.startPosition = t, this.state = e.STOPPED
                    }
                }, {
                    key: "stopLoad", value: function () {
                        var t = this.fragCurrent;
                        t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = e.STOPPED
                    }
                }, {
                    key: "tick", value: function () {
                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                    }
                }, {
                    key: "doTick", value: function () {
                        var g, v, n, f = this.hls, d = f.config;
                        switch (this.state) {
                            case e.ERROR:
                            case e.PAUSED:
                                break;
                            case e.STARTING:
                                this.state = e.WAITING_TRACK, this.loadedmetadata = !1;
                                break;
                            case e.IDLE:
                                if (!this.media && (this.startFragRequested || !d.startFragPrefetch))break;
                                g = this.loadedmetadata ? this.media.currentTime : this.nextLoadPosition;
                                var c = this.mediaBuffer ? this.mediaBuffer : this.media, E = h.default.bufferInfo(c, g, d.maxBufferHole), T = E.len, o = E.end, l = this.fragPrevious, A = d.maxMaxBufferLength;
                                if (A > T && this.trackId < this.tracks.length) {
                                    if (n = this.tracks[this.trackId].details, "undefined" == typeof n) {
                                        this.state = e.WAITING_TRACK;
                                        break
                                    }
                                    if (!n.live && l && l.sn === n.endSN && (!this.media.seeking || this.media.duration - o < l.duration / 2)) {
                                        this.hls.trigger(t.default.BUFFER_EOS, {type: "audio"}), this.state = e.ENDED;
                                        break
                                    }
                                    var s = n.fragments, p = s.length, y = s[0].start, m = s[p - 1].start + s[p - 1].duration, i = void 0;
                                    if (y > o ? i = s[0] : !function () {
                                            var e = void 0, t = d.maxFragLookUpTolerance;
                                            m > o ? (o > m - t && (t = 0), e = u.default.search(s, function (e) {
                                                return e.start + e.duration - t <= o ? 1 : e.start - t > o ? -1 : 0
                                            })) : e = s[p - 1], e && (i = e, y = e.start, l && i.level === l.level && i.sn === l.sn && (i.sn < n.endSN ? (i = s[i.sn + 1 - n.startSN], r.logger.log("SN just loaded, load next one: " + i.sn)) : i = null))
                                        }(), i)if (null != i.decryptdata.uri && null == i.decryptdata.key)r.logger.log("Loading key for " + i.sn + " of [" + n.startSN + " ," + n.endSN + "],track " + this.trackId), this.state = e.KEY_LOADING, f.trigger(t.default.KEY_LOADING, {frag: i}); else {
                                        if (r.logger.log("Loading " + i.sn + " of [" + n.startSN + " ," + n.endSN + "],track " + this.trackId + ", currentTime:" + g + ",bufferEnd:" + o.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, i.loadCounter) {
                                            i.loadCounter++;
                                            var b = d.fragLoadingLoopThreshold;
                                            if (i.loadCounter > b && Math.abs(this.fragLoadIdx - i.loadIdx) < b)return void f.trigger(t.default.ERROR, {
                                                type: a.ErrorTypes.MEDIA_ERROR,
                                                details: a.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                                fatal: !1,
                                                frag: i
                                            })
                                        } else i.loadCounter = 1;
                                        i.loadIdx = this.fragLoadIdx, this.fragCurrent = i, this.startFragRequested = !0, f.trigger(t.default.FRAG_LOADING, {frag: i}), this.state = e.FRAG_LOADING
                                    }
                                }
                                break;
                            case e.WAITING_TRACK:
                                v = this.tracks[this.trackId], v && v.details && (this.state = e.IDLE);
                                break;
                            case e.FRAG_LOADING_WAITING_RETRY:
                                var _ = performance.now(), R = this.retryDate;
                                c = this.media;
                                var k = c && c.seeking;
                                (!R || _ >= R || k) && (r.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = e.IDLE);
                                break;
                            case e.STOPPED:
                            case e.FRAG_LOADING:
                            case e.PARSING:
                            case e.PARSED:
                            case e.ENDED:
                        }
                    }
                }, {
                    key: "onMediaAttached", value: function (r) {
                        var e = this.media = this.mediaBuffer = r.media;
                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
                        var t = this.config;
                        this.tracks && t.autoStartLoad && this.startLoad(t.startPosition)
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        var e = this.media;
                        e && e.ended && (r.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                        var t = this.tracks;
                        t && t.forEach(function (e) {
                            e.details && e.details.fragments.forEach(function (e) {
                                e.loadCounter = void 0
                            })
                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = null, this.loadedmetadata = !1, this.stopLoad()
                    }
                }, {
                    key: "onMediaSeeking", value: function () {
                        this.state === e.ENDED && (this.state = e.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                    }
                }, {
                    key: "onMediaEnded", value: function () {
                        this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onAudioTracksUpdated", value: function (e) {
                        r.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                    }
                }, {
                    key: "onAudioTrackSwitch", value: function (r) {
                        var i = !!r.url;
                        this.trackId = r.id, this.state = e.IDLE, this.fragCurrent = null, this.state = e.PAUSED, i ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.hls.trigger(t.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), this.tick()
                    }
                }, {
                    key: "onAudioTrackLoaded", value: function (a) {
                        var t = a.details, n = a.id, s = this.tracks[n], o = t.totalduration;
                        if (r.logger.log("track " + n + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + o), t.PTSKnown = !1, s.details = t, !this.startFragRequested) {
                            if (-1 === this.startPosition) {
                                var i = t.startTimeOffset;
                                isNaN(i) ? this.startPosition = 0 : (r.logger.log("start time offset found in playlist, adjust startPosition to " + i), this.startPosition = i)
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === e.WAITING_TRACK && (this.state = e.IDLE), this.tick()
                    }
                }, {
                    key: "onKeyLoaded", value: function () {
                        this.state === e.KEY_LOADING && (this.state = e.IDLE, this.tick())
                    }
                }, {
                    key: "onFragLoaded", value: function (i) {
                        var t = this.fragCurrent;
                        if (this.state === e.FRAG_LOADING && t && "audio" === i.frag.type && i.frag.level === t.level && i.frag.sn === t.sn) {
                            this.state = e.PARSING, this.stats = i.stats;
                            var n = this.tracks[this.trackId], a = n.details, l = a.totalduration, u = t.start, s = t.level, o = t.sn, d = this.config.defaultAudioCodec || n.audioCodec;
                            this.pendingAppending = 0, this.demuxer || (this.demuxer = new T.default(this.hls, "audio")), r.logger.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);
                            var h = a.PTSKnown || !a.live;
                            this.demuxer.push(i.payload, d, null, u, t.cc, s, o, l, t.decryptdata, h)
                        }
                        this.fragLoadError = 0
                    }
                }, {
                    key: "onFragParsingInitSegment", value: function (a) {
                        var n = this.fragCurrent;
                        if (n && "audio" === a.id && a.sn === n.sn && a.level === n.level && this.state === e.PARSING) {
                            var s = a.tracks, i = void 0;
                            if (i = s.audio) {
                                i.levelCodec = "mp4a.40.2", i.id = a.id, this.hls.trigger(t.default.BUFFER_CODECS, s), r.logger.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                var o = i.initSegment;
                                o && (this.pendingAppending++, this.hls.trigger(t.default.BUFFER_APPENDING, {
                                    type: "audio",
                                    data: o,
                                    parent: "audio",
                                    content: "initSegment"
                                })), this.tick()
                            }
                        }
                    }
                }, {
                    key: "onFragParsingData", value: function (i) {
                        var n = this, a = this.fragCurrent;
                        if (a && "audio" === i.id && i.sn === a.sn && i.level === a.level && this.state === e.PARSING) {
                            var s = this.tracks[this.trackId], o = this.fragCurrent;
                            r.logger.log("parsed " + i.type + ",PTS:[" + i.startPTS.toFixed(3) + "," + i.endPTS.toFixed(3) + "],DTS:[" + i.startDTS.toFixed(3) + "/" + i.endDTS.toFixed(3) + "],nb:" + i.nb), E.default.updateFragPTSDTS(s.details, o.sn, i.startPTS, i.endPTS), [i.data1, i.data2].forEach(function (e) {
                                e && (n.pendingAppending++, n.hls.trigger(t.default.BUFFER_APPENDING, {
                                    type: i.type,
                                    data: e,
                                    parent: "audio",
                                    content: "data"
                                }))
                            }), this.nextLoadPosition = i.endPTS, this.tick()
                        }
                    }
                }, {
                    key: "onFragParsed", value: function (t) {
                        var r = this.fragCurrent;
                        r && "audio" === t.id && t.sn === r.sn && t.level === r.level && this.state === e.PARSING && (this.stats.tparsed = performance.now(), this.state = e.PARSED, this._checkAppendedParsed())
                    }
                }, {
                    key: "onBufferCreated", value: function (t) {
                        var e = t.tracks.audio;
                        e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0)
                    }
                }, {
                    key: "onBufferAppended", value: function (t) {
                        if ("audio" === t.parent)switch (this.state) {
                            case e.PARSING:
                            case e.PARSED:
                                this.pendingAppending--, this._checkAppendedParsed()
                        }
                    }
                }, {
                    key: "_checkAppendedParsed", value: function () {
                        if (this.state === e.PARSED && 0 === this.pendingAppending) {
                            var i = this.fragCurrent, a = this.stats;
                            if (i) {
                                this.fragPrevious = i, a.tbuffered = performance.now(), this.hls.trigger(t.default.FRAG_BUFFERED, {
                                    stats: a,
                                    frag: i,
                                    id: "audio"
                                });
                                var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                r.logger.log("audio buffered : " + R.default.toString(n.buffered)), this.state = e.IDLE
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onError", value: function (i) {
                        var s = i.frag;
                        if (!s || "audio" === s.type)switch (i.details) {
                            case a.ErrorDetails.FRAG_LOAD_ERROR:
                            case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                if (!i.fatal) {
                                    var n = this.fragLoadError;
                                    n ? n++ : n = 1;
                                    var o = this.config;
                                    if (n <= o.fragLoadingMaxRetry) {
                                        this.fragLoadError = n, s.loadCounter = 0;
                                        var l = Math.min(Math.pow(2, n - 1) * o.fragLoadingRetryDelay, o.fragLoadingMaxRetryTimeout);
                                        r.logger.warn("audioStreamController: frag loading failed, retry in " + l + " ms"), this.retryDate = performance.now() + l, this.state = e.FRAG_LOADING_WAITING_RETRY
                                    } else r.logger.error("audioStreamController: " + i.details + " reaches max retry, redispatch as fatal ..."), i.fatal = !0, this.hls.trigger(t.default.ERROR, i), this.state = e.ERROR
                                }
                                break;
                            case a.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                            case a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                            case a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                            case a.ErrorDetails.KEY_LOAD_ERROR:
                            case a.ErrorDetails.KEY_LOAD_TIMEOUT:
                                this.state !== e.ERROR && (this.state = i.fatal ? e.ERROR : e.IDLE, r.logger.warn("audioStreamController: " + i.details + " while loading frag,switch to " + this.state + " state ..."))
                        }
                    }
                }, {
                    key: "onBufferFlushed", value: function () {
                        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = e.IDLE, this.fragPrevious = null, this.tick()
                    }
                }]), i
            }(o.default);
            s.default = c
        }, {20: 20, 24: 24, 25: 25, 26: 26, 28: 28, 29: 29, 39: 39, 43: 43, 45: 45}], 5: [function (r, c, i) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function u(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var f = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = r(26), e = a(l), d = r(25), n = a(d), t = r(43), o = function (i) {
                function r(t) {
                    return u(this, r), h(this, Object.getPrototypeOf(r).call(this, t, e.default.MANIFEST_LOADING, e.default.MANIFEST_LOADED, e.default.AUDIO_TRACK_LOADED))
                }

                return s(r, i), f(r, [{
                    key: "destroy", value: function () {
                        n.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        this.tracks = [], this.trackId = -1
                    }
                }, {
                    key: "onManifestLoaded", value: function (n) {
                        var s = this, r = n.audioTracks || [], i = !1;
                        this.tracks = r, this.hls.trigger(e.default.AUDIO_TRACKS_UPDATED, {audioTracks: r});
                        var a = 0;
                        r.forEach(function (e) {
                            return e.default ? (s.audioTrack = a, void(i = !0)) : void a++
                        }), i === !1 && r.length && (t.logger.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                    }
                }, {
                    key: "onAudioTrackLoaded", value: function (e) {
                        e.id < this.tracks.length && (t.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * e.details.targetduration)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                    }
                }, {
                    key: "setAudioTrackInternal", value: function (r) {
                        if (r >= 0 && r < this.tracks.length) {
                            this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = r, t.logger.log("switching to audioTrack " + r);
                            var i = this.tracks[r], s = i.type, a = i.url;
                            this.hls.trigger(e.default.AUDIO_TRACK_SWITCH, {id: r, type: s, url: a});
                            var n = i.details;
                            !a || void 0 !== n && n.live !== !0 || (t.logger.log("(re)loading playlist for audioTrack " + r), this.hls.trigger(e.default.AUDIO_TRACK_LOADING, {
                                url: a,
                                id: r
                            }))
                        }
                    }
                }, {
                    key: "audioTracks", get: function () {
                        return this.tracks
                    }
                }, {
                    key: "audioTrack", get: function () {
                        return this.trackId
                    }, set: function (e) {
                        this.trackId === e && void 0 !== this.tracks[e].details || this.setAudioTrackInternal(e)
                    }
                }]), r
            }(n.default);
            i.default = o
        }, {25: 25, 26: 26, 43: 43}], 6: [function (i, v, a) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function u(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function f(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(a, "__esModule", {value: !0});
            var c = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = i(26), t = n(l), d = i(25), s = n(d), e = i(43), r = i(24), o = function (a) {
                function i(r) {
                    u(this, i);
                    var e = h(this, Object.getPrototypeOf(i).call(this, r, t.default.MEDIA_ATTACHING, t.default.MEDIA_DETACHING, t.default.MANIFEST_PARSED, t.default.BUFFER_RESET, t.default.BUFFER_APPENDING, t.default.BUFFER_CODECS, t.default.BUFFER_EOS, t.default.BUFFER_FLUSHING, t.default.LEVEL_UPDATED));
                    return e._msDuration = null, e._levelDuration = null, e.onsbue = e.onSBUpdateEnd.bind(e), e.onsbe = e.onSBUpdateError.bind(e), e.pendingTracks = {}, e
                }

                return f(i, a), c(i, [{
                    key: "destroy", value: function () {
                        s.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onManifestParsed", value: function (r) {
                        var i = r.audio, a = r.video, t = 0;
                        (i || a) && (t = (i ? 1 : 0) + (a ? 1 : 0), e.logger.log(t + " sourceBuffer(s) expected")), this.sourceBufferNb = t
                    }
                }, {
                    key: "onMediaAttaching", value: function (r) {
                        var t = this.media = r.media;
                        if (t) {
                            var e = this.mediaSource = new MediaSource;
                            this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), e.addEventListener("sourceopen", this.onmso), e.addEventListener("sourceended", this.onmse), e.addEventListener("sourceclose", this.onmsc), t.src = URL.createObjectURL(e)
                        }
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        e.logger.log("media source detaching");
                        var r = this.mediaSource;
                        if (r) {
                            if ("open" === r.readyState)try {
                                r.endOfStream()
                            } catch (t) {
                                e.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                            }
                            r.removeEventListener("sourceopen", this.onmso), r.removeEventListener("sourceended", this.onmse), r.removeEventListener("sourceclose", this.onmsc), this.media && (this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                        }
                        this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(t.default.MEDIA_DETACHED)
                    }
                }, {
                    key: "onMediaSourceOpen", value: function () {
                        e.logger.log("media source opened"), this.hls.trigger(t.default.MEDIA_ATTACHED, {media: this.media});
                        var r = this.mediaSource;
                        r && r.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                    }
                }, {
                    key: "checkPendingTracks", value: function () {
                        var e = this.pendingTracks, t = Object.keys(e).length;
                        !t || this.sourceBufferNb !== t && 0 !== this.sourceBufferNb || (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending())
                    }
                }, {
                    key: "onMediaSourceClose", value: function () {
                        e.logger.log("media source closed")
                    }
                }, {
                    key: "onMediaSourceEnded", value: function () {
                        e.logger.log("media source ended")
                    }
                }, {
                    key: "onSBUpdateEnd", value: function () {
                        this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1, this.hls.trigger(t.default.BUFFER_APPENDED, {parent: this.parent}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                    }
                }, {
                    key: "onSBUpdateError", value: function (i) {
                        e.logger.error("sourceBuffer error:" + i), this.hls.trigger(t.default.ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            details: r.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                }, {
                    key: "onBufferReset", value: function () {
                        var t = this.sourceBuffer;
                        for (var r in t) {
                            var e = t[r];
                            try {
                                this.mediaSource.removeSourceBuffer(e), e.removeEventListener("updateend", this.onsbue), e.removeEventListener("error", this.onsbe)
                            } catch (e) {
                            }
                        }
                        this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    }
                }, {
                    key: "onBufferCodecs", value: function (e) {
                        if (0 === Object.keys(this.sourceBuffer).length) {
                            for (var t in e)this.pendingTracks[t] = e[t];
                            var r = this.mediaSource;
                            r && "open" === r.readyState && this.checkPendingTracks()
                        }
                    }
                }, {
                    key: "createSourceBuffers", value: function (a) {
                        var l = this.sourceBuffer, u = this.mediaSource;
                        for (var n in a)if (!l[n]) {
                            var i = a[n], d = i.levelCodec || i.codec, s = i.container + ";codecs=" + d;
                            e.logger.log("creating sourceBuffer with mimeType:" + s);
                            try {
                                var o = l[n] = u.addSourceBuffer(s);
                                o.addEventListener("updateend", this.onsbue), o.addEventListener("error", this.onsbe), i.buffer = o
                            } catch (i) {
                                e.logger.error("error while trying to add sourceBuffer:" + i.message), this.hls.trigger(t.default.ERROR, {
                                    type: r.ErrorTypes.MEDIA_ERROR,
                                    details: r.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    err: i,
                                    mimeType: s
                                })
                            }
                        }
                        this.hls.trigger(t.default.BUFFER_CREATED, {tracks: a})
                    }
                }, {
                    key: "onBufferAppending", value: function (e) {
                        this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                    }
                }, {
                    key: "onBufferAppendFail", value: function (i) {
                        e.logger.error("sourceBuffer error:" + i.event), this.hls.trigger(t.default.ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            details: r.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1,
                            frag: this.fragCurrent
                        })
                    }
                }, {
                    key: "onBufferEos", value: function (a) {
                        var r = this.sourceBuffer, i = a.type;
                        for (var t in r)i && t !== i || r[t].ended || (r[t].ended = !0, e.logger.log(t + " sourceBuffer now EOS"));
                        this.checkEos()
                    }
                }, {
                    key: "checkEos", value: function () {
                        var t = this.sourceBuffer, r = this.mediaSource;
                        if (!r || "open" !== r.readyState)return void(this._needsEos = !1);
                        for (var i in t) {
                            if (!t[i].ended)return;
                            if (t[i].updating)return void(this._needsEos = !0)
                        }
                        e.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment"), r.endOfStream(), this._needsEos = !1
                    }
                }, {
                    key: "onBufferFlushing", value: function (e) {
                        this.flushRange.push({
                            start: e.startOffset,
                            end: e.endOffset,
                            type: e.type
                        }), this.flushBufferCounter = 0, this.doFlush()
                    }
                }, {
                    key: "onLevelUpdated", value: function (t) {
                        var e = t.details;
                        0 !== e.fragments.length && (this._levelDuration = e.totalduration + e.fragments[0].start, this.updateMediaElementDuration())
                    }
                }, {
                    key: "updateMediaElementDuration", value: function () {
                        if (null !== this._levelDuration) {
                            var i = this.media, t = this.mediaSource, r = this.sourceBuffer;
                            if (i && t && r && 0 !== i.readyState && "open" === t.readyState) {
                                for (var a in r)if (r[a].updating)return;
                                null === this._msDuration && (this._msDuration = t.duration), this._levelDuration > this._msDuration && (e.logger.log("Updating mediasource duration to " + this._levelDuration), t.duration = this._levelDuration, this._msDuration = this._levelDuration)
                            }
                        }
                    }
                }, {
                    key: "doFlush", value: function () {
                        for (; this.flushRange.length;) {
                            var e = this.flushRange[0];
                            if (!this.flushBuffer(e.start, e.end, e.type))return void(this._needsFlush = !0);
                            this.flushRange.shift(), this.flushBufferCounter = 0
                        }
                        if (0 === this.flushRange.length) {
                            this._needsFlush = !1;
                            var r = 0, i = this.sourceBuffer;
                            for (var a in i)r += i[a].buffered.length;
                            this.appended = r, this.hls.trigger(t.default.BUFFER_FLUSHED)
                        }
                    }
                }, {
                    key: "doAppending", value: function () {
                        var a = this.hls, s = this.sourceBuffer, n = this.segments;
                        if (Object.keys(s).length) {
                            if (this.media.error)return this.segments = [], void e.logger.error("trying to append although a media error occured, flush segment and abort");
                            if (this.appending)return;
                            if (n && n.length) {
                                var o = n.shift();
                                try {
                                    var l = o.type;
                                    s[l] ? (s[l].ended = !1, this.parent = o.parent, s[l].appendBuffer(o.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                                } catch (s) {
                                    e.logger.error("error while trying to append buffer:" + s.message), n.unshift(o);
                                    var i = {type: r.ErrorTypes.MEDIA_ERROR};
                                    if (22 === s.code)return this.segments = [], i.details = r.ErrorDetails.BUFFER_FULL_ERROR, void a.trigger(t.default.ERROR, i);
                                    if (this.appendError ? this.appendError++ : this.appendError = 1, i.details = r.ErrorDetails.BUFFER_APPEND_ERROR, i.frag = this.fragCurrent, this.appendError > a.config.appendErrorMaxRetry)return e.logger.log("fail " + a.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), n = [], i.fatal = !0, void a.trigger(t.default.ERROR, i);
                                    i.fatal = !1, a.trigger(t.default.ERROR, i)
                                }
                            }
                        }
                    }
                }, {
                    key: "flushBuffer", value: function (l, n, h) {
                        var t, r, o, s, i, a, u = this.sourceBuffer;
                        if (Object.keys(u).length) {
                            if (e.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime + "/" + l + "/" + n), this.flushBufferCounter < this.appended) {
                                for (var d in u)if (!h || d === h) {
                                    if (t = u[d], t.ended = !1, t.updating)return e.logger.warn("cannot flush, sb updating in progress"), !1;
                                    for (r = 0; r < t.buffered.length; r++)if (o = t.buffered.start(r), s = t.buffered.end(r), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && n === Number.POSITIVE_INFINITY ? (i = l, a = n) : (i = Math.max(o, l), a = Math.min(s, n)), Math.min(a, s) - i > .5)return this.flushBufferCounter++, e.logger.log("flush " + d + " [" + i + "," + a + "], of [" + o + "," + s + "], pos:" + this.media.currentTime), t.remove(i, a), !1
                                }
                            } else e.logger.warn("abort flushing too many retries");
                            e.logger.log("buffer flushed")
                        }
                        return !0
                    }
                }]), i
            }(s.default);
            a.default = o
        }, {24: 24, 25: 25, 26: 26, 43: 43}], 7: [function (t, f, r) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function h(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = t(26), e = i(l), d = t(25), s = i(d), u = function (r) {
                function t(r) {
                    return a(this, t), n(this, Object.getPrototypeOf(t).call(this, r, e.default.FPS_DROP_LEVEL_CAPPING, e.default.MEDIA_ATTACHING, e.default.MANIFEST_PARSED))
                }

                return h(t, r), o(t, [{
                    key: "destroy", value: function () {
                        this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                    }
                }, {
                    key: "onFpsDropLevelCapping", value: function (e) {
                        this.restrictedLevels || (this.restrictedLevels = []), this.isLevelRestricted(e.droppedLevel) || this.restrictedLevels.push(e.droppedLevel)
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.media = e.media instanceof HTMLVideoElement ? e.media : null
                    }
                }, {
                    key: "onManifestParsed", value: function (e) {
                        this.hls.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, this.hls.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                    }
                }, {
                    key: "detectPlayerSize", value: function () {
                        if (this.media) {
                            var e = this.levels ? this.levels.length : 0;
                            e && (this.hls.autoLevelCapping = this.getMaxLevel(e - 1), this.hls.autoLevelCapping > this.autoLevelCapping && this.hls.streamController.nextLevelSwitch(), this.autoLevelCapping = this.hls.autoLevelCapping)
                        }
                    }
                }, {
                    key: "getMaxLevel", value: function (n) {
                        var r = 0, e = void 0, t = void 0, s = this.mediaWidth, o = this.mediaHeight, i = 0, a = 0;
                        for (e = 0; n >= e && (t = this.levels[e], !this.isLevelRestricted(e)) && (r = e, i = t.width, a = t.height, !(i >= s || a >= o)); e++);
                        return r
                    }
                }, {
                    key: "isLevelRestricted", value: function (e) {
                        return !(!this.restrictedLevels || -1 === this.restrictedLevels.indexOf(e))
                    }
                }, {
                    key: "contentScaleFactor", get: function () {
                        var e = 1;
                        try {
                            e = window.devicePixelRatio
                        } catch (e) {
                        }
                        return e
                    }
                }, {
                    key: "mediaWidth", get: function () {
                        var e = void 0;
                        return this.media && (e = this.media.width || this.media.clientWidth || this.media.offsetWidth, e *= this.contentScaleFactor), e
                    }
                }, {
                    key: "mediaHeight", get: function () {
                        var e = void 0;
                        return this.media && (e = this.media.height || this.media.clientHeight || this.media.offsetHeight, e *= this.contentScaleFactor), e
                    }
                }]), t
            }(s.default);
            r.default = u
        }, {25: 25, 26: 26}], 8: [function (r, l, e) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var n = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), s = r(42), t = i(s), o = function () {
                function e(r, i, n, s) {
                    a(this, e), this.hls = r, this.defaultEstimate_ = s, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new t.default(i), this.fast_ = new t.default(n)
                }

                return n(e, [{
                    key: "sample", value: function (e, i) {
                        e = Math.max(e, this.minDelayMs_);
                        var t = 8e3 * i / e, r = e / 1e3;
                        this.fast_.sample(r, t), this.slow_.sample(r, t)
                    }
                }, {
                    key: "canEstimate", value: function () {
                        var e = this.fast_;
                        return e && e.getTotalWeight() >= this.minWeight_
                    }
                }, {
                    key: "getEstimate", value: function () {
                        return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                    }
                }, {
                    key: "destroy", value: function () {
                    }
                }]), e
            }();
            e.default = o
        }, {42: 42}], 9: [function (e, c, r) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var f = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = e(26), t = i(l), d = e(25), h = i(d), o = e(43), u = function (r) {
                function e(r) {
                    return a(this, e), n(this, Object.getPrototypeOf(e).call(this, r, t.default.MEDIA_ATTACHING))
                }

                return s(e, r), f(e, [{
                    key: "destroy", value: function () {
                        this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.hls.config.capLevelOnFPSDrop && (this.video = e.media instanceof HTMLVideoElement ? e.media : null, "function" == typeof this.video.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), this.hls.config.fpsDroppedMonitoringPeriod))
                    }
                }, {
                    key: "checkFPS", value: function (d, r, i) {
                        var n = performance.now();
                        if (r) {
                            if (this.lastTime) {
                                var l = n - this.lastTime, a = i - this.lastDroppedFrames, s = r - this.lastDecodedFrames, u = 1e3 * a / l;
                                if (this.hls.trigger(t.default.FPS_DROP, {
                                        currentDropped: a,
                                        currentDecoded: s,
                                        totalDroppedFrames: i
                                    }), u > 0 && a > this.hls.config.fpsDroppedMonitoringThreshold * s) {
                                    var e = this.hls.currentLevel;
                                    o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e), e > 0 && (-1 === this.hls.autoLevelCapping || this.hls.autoLevelCapping >= e) && (e -= 1, this.hls.trigger(t.default.FPS_DROP_LEVEL_CAPPING, {
                                        level: e,
                                        droppedLevel: this.hls.currentLevel
                                    }), this.hls.autoLevelCapping = e, this.hls.streamController.nextLevelSwitch())
                                }
                            }
                            this.lastTime = n, this.lastDroppedFrames = i, this.lastDecodedFrames = r
                        }
                    }
                }, {
                    key: "checkFPSInterval", value: function () {
                        if (this.video)if (this.isVideoPlaybackQualityAvailable) {
                            var e = this.video.getVideoPlaybackQuality();
                            this.checkFPS(this.video, e.totalVideoFrames, e.droppedVideoFrames)
                        } else this.checkFPS(this.video, this.video.webkitDecodedFrameCount, this.video.webkitDroppedFrameCount)
                    }
                }]), e
            }(h.default);
            r.default = u
        }, {25: 25, 26: 26, 43: 43}], 10: [function (i, v, a) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function u(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(a, "__esModule", {value: !0});
            var c = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = i(26), t = n(l), d = i(25), h = n(d), r = i(43), e = i(24), o = function (a) {
                function i(r) {
                    u(this, i);
                    var e = f(this, Object.getPrototypeOf(i).call(this, r, t.default.MANIFEST_LOADED, t.default.LEVEL_LOADED, t.default.ERROR));
                    return e.ontick = e.tick.bind(e), e._manualLevel = e._autoLevelCapping = -1, e
                }

                return s(i, a), c(i, [{
                    key: "destroy", value: function () {
                        this.timer && (clearTimeout(this.timer), this.timer = null), this._manualLevel = -1
                    }
                }, {
                    key: "startLoad", value: function () {
                        this.canload = !0, this.timer && this.tick()
                    }
                }, {
                    key: "stopLoad", value: function () {
                        this.canload = !1
                    }
                }, {
                    key: "onManifestLoaded", value: function (d) {
                        var s, a, n = [], i = [], h = {}, o = !1, l = !1, u = this.hls;
                        if (d.levels.forEach(function (e) {
                                e.videoCodec && (o = !0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (l = !0);
                                var t = h[e.bitrate];
                                void 0 === t ? (h[e.bitrate] = n.length, e.url = [e.url], e.urlId = 0, n.push(e)) : n[t].url.push(e.url)
                            }), o && l ? n.forEach(function (e) {
                                e.videoCodec && i.push(e)
                            }) : i = n, i = i.filter(function (e) {
                                var i = function (e) {
                                    return MediaSource.isTypeSupported("audio/mp4;codecs=" + e)
                                }, a = function (e) {
                                    return MediaSource.isTypeSupported("video/mp4;codecs=" + e)
                                }, t = e.audioCodec, r = e.videoCodec;
                                return (!t || i(t)) && (!r || a(r))
                            }), i.length) {
                            for (s = i[0].bitrate, i.sort(function (e, t) {
                                return e.bitrate - t.bitrate
                            }), this._levels = i, a = 0; a < i.length; a++)if (i[a].bitrate === s) {
                                this._firstLevel = a, r.logger.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + s);
                                break
                            }
                            u.trigger(t.default.MANIFEST_PARSED, {
                                levels: this._levels,
                                firstLevel: this._firstLevel,
                                stats: d.stats,
                                audio: l,
                                video: o
                            })
                        } else u.trigger(t.default.ERROR, {
                            type: e.ErrorTypes.MEDIA_ERROR,
                            details: e.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: u.url,
                            reason: "no level with compatible codecs found in manifest"
                        })
                    }
                }, {
                    key: "setLevelInternal", value: function (i) {
                        var s = this._levels;
                        if (i >= 0 && i < s.length) {
                            this.timer && (clearTimeout(this.timer), this.timer = null), this._level = i, r.logger.log("switching to level " + i), this.hls.trigger(t.default.LEVEL_SWITCH, {level: i});
                            var a = s[i], n = a.details;
                            if (!n || n.live === !0 && performance.now() - n.tload > 1e3) {
                                r.logger.log("(re)loading playlist for level " + i);
                                var o = a.urlId;
                                this.hls.trigger(t.default.LEVEL_LOADING, {url: a.url[o], level: i, id: o})
                            }
                        } else this.hls.trigger(t.default.ERROR, {
                            type: e.ErrorTypes.OTHER_ERROR,
                            details: e.ErrorDetails.LEVEL_SWITCH_ERROR,
                            level: i,
                            fatal: !1,
                            reason: "invalid level idx"
                        })
                    }
                }, {
                    key: "onError", value: function (n) {
                        if (!n.fatal) {
                            var a = n.details, o = this.hls, s = void 0, i = void 0, l = !1;
                            switch (a) {
                                case e.ErrorDetails.FRAG_LOAD_ERROR:
                                case e.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                case e.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                case e.ErrorDetails.KEY_LOAD_ERROR:
                                case e.ErrorDetails.KEY_LOAD_TIMEOUT:
                                    s = n.frag.level;
                                    break;
                                case e.ErrorDetails.LEVEL_LOAD_ERROR:
                                case e.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    s = n.context.level, l = !0
                            }
                            if (void 0 !== s)if (i = this._levels[s], i.urlId < i.url.length - 1)i.urlId++, i.details = void 0, r.logger.warn("level controller," + a + " for level " + s + ": switching to redundant stream id " + i.urlId); else {
                                var u = -1 === this._manualLevel && s;
                                u ? (r.logger.warn("level controller," + a + ": emergency switch-down for next fragment"), o.abrController.nextAutoLevel = 0) : i && i.details && i.details.live ? (r.logger.warn("level controller," + a + " on live stream, discard"), l && (this._level = void 0)) : a !== e.ErrorDetails.FRAG_LOAD_ERROR && a !== e.ErrorDetails.FRAG_LOAD_TIMEOUT && a !== e.ErrorDetails.FRAG_LOOP_LOADING_ERROR && (r.logger.error("cannot recover " + a + " error"), this._level = void 0, this.timer && (clearTimeout(this.timer), this.timer = null), n.fatal = !0, o.trigger(t.default.ERROR, n))
                            }
                        }
                    }
                }, {
                    key: "onLevelLoaded", value: function (i) {
                        if (i.level === this._level) {
                            var t = i.details;
                            if (t.live) {
                                var e = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration), n = this._levels[i.level], a = n.details;
                                a && t.endSN === a.endSN && (e /= 2, r.logger.log("same live playlist, reload twice faster")), e -= performance.now() - i.stats.trequest, e = Math.max(1e3, Math.round(e)), r.logger.log("live playlist, reload in " + e + " ms"), this.timer = setTimeout(this.ontick, e)
                            } else this.timer = null
                        }
                    }
                }, {
                    key: "tick", value: function () {
                        var e = this._level;
                        if (void 0 !== e && this.canload) {
                            var r = this._levels[e], i = r.urlId;
                            this.hls.trigger(t.default.LEVEL_LOADING, {url: r.url[i], level: e, id: i})
                        }
                    }
                }, {
                    key: "levels", get: function () {
                        return this._levels
                    }
                }, {
                    key: "level", get: function () {
                        return this._level
                    }, set: function (e) {
                        var t = this._levels;
                        t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e))
                    }
                }, {
                    key: "manualLevel", get: function () {
                        return this._manualLevel
                    }, set: function (e) {
                        this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
                    }
                }, {
                    key: "firstLevel", get: function () {
                        return this._firstLevel
                    }, set: function (e) {
                        this._firstLevel = e
                    }
                }, {
                    key: "startLevel", get: function () {
                        if (void 0 === this._startLevel) {
                            var e = this.hls.config.startLevel;
                            return void 0 !== e ? e : this._firstLevel
                        }
                        return this._startLevel
                    }, set: function (e) {
                        this._startLevel = e
                    }
                }, {
                    key: "nextLoadLevel", get: function () {
                        return -1 !== this._manualLevel ? this._manualLevel : this.hls.abrController.nextAutoLevel
                    }, set: function (e) {
                        this.level = e, -1 === this._manualLevel && (this.hls.abrController.nextAutoLevel = e)
                    }
                }]), i
            }(h.default);
            a.default = o
        }, {24: 24, 25: 25, 26: 26, 43: 43}], 11: [function (a, A, d) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function c(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function _(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function k(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(d, "__esModule", {value: !0});
            var E = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), y = a(39), g = n(y), f = a(28), s = n(f), m = a(20), u = n(m), v = a(26), r = n(v), p = a(25), l = n(p), h = a(29), o = n(h), b = a(45), R = n(b), i = a(24), t = a(43), e = {
                STOPPED: "STOPPED",
                STARTING: "STARTING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_LEVEL: "WAITING_LEVEL",
                PARSING: "PARSING",
                PARSED: "PARSED",
                ENDED: "ENDED",
                ERROR: "ERROR"
            }, T = function (n) {
                function a(t) {
                    c(this, a);
                    var e = _(this, Object.getPrototypeOf(a).call(this, t, r.default.MEDIA_ATTACHED, r.default.MEDIA_DETACHING, r.default.MANIFEST_LOADING, r.default.MANIFEST_PARSED, r.default.LEVEL_LOADED, r.default.KEY_LOADED, r.default.FRAG_LOADED, r.default.FRAG_LOAD_EMERGENCY_ABORTED, r.default.FRAG_PARSING_INIT_SEGMENT, r.default.FRAG_PARSING_DATA, r.default.FRAG_PARSED, r.default.ERROR, r.default.AUDIO_TRACK_SWITCH, r.default.BUFFER_CREATED, r.default.BUFFER_APPENDED, r.default.BUFFER_FLUSHED));
                    return e.config = t.config, e.audioCodecSwap = !1, e.ticks = 0, e.ontick = e.tick.bind(e), e
                }

                return k(a, n), E(a, [{
                    key: "destroy", value: function () {
                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), l.default.prototype.destroy.call(this), this.state = e.STOPPED
                    }
                }, {
                    key: "startLoad", value: function (a) {
                        if (this.levels) {
                            var r = this.media, i = this.lastCurrentTime;
                            this.stopLoad(), this.demuxer = new u.default(this.hls, "main"), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, r && i > 0 ? (t.logger.log("configure startPosition @" + i), this.lastPaused || (t.logger.log("resuming video"), r.play())) : this.lastCurrentTime = this.startPosition ? this.startPosition : a, this.state = this.startFragRequested ? e.IDLE : e.STARTING, this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                        } else t.logger.warn("cannot start loading as manifest not parsed yet"), this.state = e.STOPPED
                    }
                }, {
                    key: "stopLoad", value: function () {
                        var t = this.fragCurrent;
                        t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = e.STOPPED
                    }
                }, {
                    key: "tick", value: function () {
                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                    }
                }, {
                    key: "doTick", value: function () {
                        switch (this.state) {
                            case e.STARTING:
                                var i = this.hls, r = i.startLevel;
                                -1 === r && (r = 0, this.fragBitrateTest = !0), this.level = i.nextLoadLevel = r, this.state = e.WAITING_LEVEL, this.loadedmetadata = !1;
                                break;
                            case e.IDLE:
                                if (!this._doTickIdle())return;
                                break;
                            case e.WAITING_LEVEL:
                                var a = this.levels[this.level];
                                a && a.details && (this.state = e.IDLE);
                                break;
                            case e.FRAG_LOADING_WAITING_RETRY:
                                var s = performance.now(), n = this.retryDate;
                                (!n || s >= n || this.media && this.media.seeking) && (t.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = e.IDLE);
                                break;
                            case e.ERROR:
                            case e.PAUSED:
                            case e.STOPPED:
                            case e.FRAG_LOADING:
                            case e.PARSING:
                            case e.PARSED:
                            case e.ENDED:
                        }
                        this._checkBuffer(), this._checkFragmentChanged()
                    }
                }, {
                    key: "_doTickIdle", value: function () {
                        var d = this.hls, a = d.config, o = this.media;
                        if (!o && (this.startFragRequested || !a.startFragPrefetch))return !0;
                        var f = void 0;
                        f = this.loadedmetadata ? o.currentTime : this.nextLoadPosition;
                        var i = d.nextLoadLevel, n = void 0;
                        n = this.levels[i].hasOwnProperty("bitrate") ? Math.max(8 * a.maxBufferSize / this.levels[i].bitrate, a.maxBufferLength) : a.maxBufferLength, n = Math.min(n, a.maxMaxBufferLength);
                        var u = s.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : o, f, a.maxBufferHole), c = u.len;
                        if (c >= n)return !0;
                        t.logger.trace("buffer length of " + c.toFixed(3) + " is below max of " + n.toFixed(3) + ". checking for more payload ..."), d.nextLoadLevel = i, this.level = i;
                        var l = this.levels[i].details;
                        if ("undefined" == typeof l || l.live && this.levelLastLoaded !== i)return this.state = e.WAITING_LEVEL, !0;
                        var h = this.fragPrevious;
                        if (!l.live && h && h.sn === l.endSN && (!o.seeking && u.len || o.duration - u.end <= h.duration / 2)) {
                            var v = {};
                            return this.altAudio && (v.type = "video"), this.hls.trigger(r.default.BUFFER_EOS, v), this.state = e.ENDED, !0
                        }
                        return this._fetchPayloadOrEos({pos: f, bufferInfo: u, levelDetails: l})
                    }
                }, {
                    key: "_fetchPayloadOrEos", value: function (s) {
                        var h = s.pos, u = s.bufferInfo, r = s.levelDetails, o = this.fragPrevious, d = this.level, e = r.fragments, i = e.length;
                        if (0 === i)return !1;
                        var n = e[0].start, l = e[i - 1].start + e[i - 1].duration, a = u.end, t = void 0;
                        if (r.live) {
                            if (t = this._ensureFragmentAtLivePoint({
                                    levelDetails: r,
                                    bufferEnd: a,
                                    start: n,
                                    end: l,
                                    fragPrevious: o,
                                    fragments: e,
                                    fragLen: i
                                }), null === t)return !1
                        } else n > a && (t = e[0]);
                        return t || (t = this._findFragment({
                            start: n,
                            fragPrevious: o,
                            fragLen: i,
                            fragments: e,
                            bufferEnd: a,
                            end: l,
                            levelDetails: r
                        })), t ? this._loadFragmentOrKey({
                            frag: t,
                            level: d,
                            levelDetails: r,
                            pos: h,
                            bufferEnd: a
                        }) : !0
                    }
                }, {
                    key: "_ensureFragmentAtLivePoint", value: function (e) {
                        var r = e.levelDetails, n = e.bufferEnd, f = e.start, h = e.end, d = e.fragPrevious, u = e.fragments, c = e.fragLen, o = this.hls.config, a = this.media, i = void 0, v = void 0 !== o.liveMaxLatencyDuration ? o.liveMaxLatencyDuration : o.liveMaxLatencyDurationCount * r.targetduration;
                        if (n < Math.max(f, h - v)) {
                            var s = this.liveSyncPosition = this.computeLivePosition(f, r);
                            t.logger.log("buffer end: " + n + " is located too far from the end of live sliding playlist, reset currentTime to : " + s.toFixed(3)), n = s, a && a.readyState && a.duration > s && (a.currentTime = s)
                        }
                        if (r.PTSKnown && n > h && a && a.readyState)return null;
                        if (this.startFragRequested && !r.PTSKnown) {
                            if (d) {
                                var l = d.sn + 1;
                                l >= r.startSN && l <= r.endSN && (i = u[l - r.startSN], t.logger.log("live playlist, switching playlist, load frag with next SN: " + i.sn))
                            }
                            i || (i = u[Math.min(c - 1, Math.round(c / 2))], t.logger.log("live playlist, switching playlist, unknown, load middle frag : " + i.sn))
                        }
                        return i
                    }
                }, {
                    key: "_findFragment", value: function (r) {
                        var c = r.start, i = r.fragPrevious, v = r.fragLen, s = r.fragments, o = r.bufferEnd, d = r.end, f = r.levelDetails, u = this.hls.config, e = void 0, a = void 0, n = u.maxFragLookUpTolerance;
                        if (d > o ? (o > d - n && (n = 0), a = g.default.search(s, function (e) {
                                return e.start + e.duration - n <= o ? 1 : e.start - n > o && e.start ? -1 : 0
                            })) : a = s[v - 1], a && (e = a, c = a.start, i && e.level === i.level && e.sn === i.sn))if (e.sn < f.endSN) {
                            var h = i.deltaPTS, l = e.sn - f.startSN;
                            h && h > u.maxBufferHole && i.dropped && l ? (e = s[l - 1], t.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), i.loadCounter--) : (e = s[l + 1], t.logger.log("SN just loaded, load next one: " + e.sn))
                        } else e = null;
                        return e
                    }
                }, {
                    key: "_loadFragmentOrKey", value: function (n) {
                        var a = n.frag, l = n.level, o = n.levelDetails, d = n.pos, h = n.bufferEnd, s = this.hls, f = s.config;
                        if (null == a.decryptdata.uri || null != a.decryptdata.key) {
                            if (t.logger.log("Loading " + a.sn + " of [" + o.startSN + " ," + o.endSN + "],level " + l + ", currentTime:" + d + ",bufferEnd:" + h.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, a.loadCounter) {
                                a.loadCounter++;
                                var u = f.fragLoadingLoopThreshold;
                                if (a.loadCounter > u && Math.abs(this.fragLoadIdx - a.loadIdx) < u)return s.trigger(r.default.ERROR, {
                                    type: i.ErrorTypes.MEDIA_ERROR,
                                    details: i.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                    fatal: !1,
                                    frag: a
                                }), !1
                            } else a.loadCounter = 1;
                            return a.loadIdx = this.fragLoadIdx, this.fragCurrent = a, this.startFragRequested = !0, a.autoLevel = s.autoLevelEnabled, a.bitrateTest = this.fragBitrateTest, s.trigger(r.default.FRAG_LOADING, {frag: a}), this.state = e.FRAG_LOADING, !0
                        }
                        t.logger.log("Loading key for " + a.sn + " of [" + o.startSN + " ," + o.endSN + "],level " + l), this.state = e.KEY_LOADING, s.trigger(r.default.KEY_LOADING, {frag: a})
                    }
                }, {
                    key: "getBufferRange", value: function (i) {
                        var e, t, r = this.bufferRange;
                        if (r)for (e = r.length - 1; e >= 0; e--)if (t = r[e], i >= t.start && i <= t.end)return t;
                        return null
                    }
                }, {
                    key: "followingBufferRange", value: function (e) {
                        return e ? this.getBufferRange(e.end + .5) : null
                    }
                }, {
                    key: "isBuffered", value: function (r) {
                        var i = this.media;
                        if (i)for (var t = i.buffered, e = 0; e < t.length; e++)if (r >= t.start(e) && r <= t.end(e))return !0;
                        return !1
                    }
                }, {
                    key: "_checkFragmentChanged", value: function () {
                        var i, e, t = this.media;
                        if (t && t.readyState && t.seeking === !1 && (e = t.currentTime, e > t.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), this.isBuffered(e) ? i = this.getBufferRange(e) : this.isBuffered(e + .1) && (i = this.getBufferRange(e + .1)), i)) {
                            var a = i.frag;
                            a !== this.fragPlaying && (this.fragPlaying = a, this.hls.trigger(r.default.FRAG_CHANGED, {frag: a}))
                        }
                    }
                }, {
                    key: "immediateLevelSwitch", value: function () {
                        if (t.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                            this.immediateSwitch = !0;
                            var i = this.media, a = void 0;
                            i ? (a = i.paused, i.pause()) : a = !0, this.previouslyPaused = a
                        }
                        var n = this.fragCurrent;
                        n && n.loader && n.loader.abort(), this.fragCurrent = null, this.state = e.PAUSED, this.hls.trigger(r.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY
                        })
                    }
                }, {
                    key: "immediateLevelSwitchEnd", value: function () {
                        var e = this.media;
                        e && e.buffered.length && (this.immediateSwitch = !1, this.isBuffered(e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                    }
                }, {
                    key: "nextLevelSwitch", value: function () {
                        var t = this.media;
                        if (t && t.readyState) {
                            var n = void 0, a = void 0, i = void 0;
                            if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, a = this.getBufferRange(t.currentTime), a && a.start > 1 && (this.state = e.PAUSED, this.hls.trigger(r.default.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: a.start - 1
                                })), t.paused)n = 0; else {
                                var l = this.hls.nextLoadLevel, u = this.levels[l], o = this.fragLastKbps;
                                n = o && this.fragCurrent ? this.fragCurrent.duration * u.bitrate / (1e3 * o) + 1 : 0
                            }
                            if (i = this.getBufferRange(t.currentTime + n), i && (i = this.followingBufferRange(i))) {
                                var s = this.fragCurrent;
                                s && s.loader && s.loader.abort(), this.fragCurrent = null, this.state = e.PAUSED, this.hls.trigger(r.default.BUFFER_FLUSHING, {
                                    startOffset: i.start,
                                    endOffset: Number.POSITIVE_INFINITY
                                })
                            }
                        }
                    }
                }, {
                    key: "onMediaAttached", value: function (r) {
                        var e = this.media = this.mediaBuffer = r.media;
                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
                        var t = this.config;
                        this.levels && t.autoStartLoad && this.hls.startLoad(t.startPosition)
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        var e = this.media;
                        e && e.ended && (t.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                        var r = this.levels;
                        r && r.forEach(function (e) {
                            e.details && e.details.fragments.forEach(function (e) {
                                e.loadCounter = void 0
                            })
                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = null, this.loadedmetadata = !1, this.stopLoad()
                    }
                }, {
                    key: "onMediaSeeking", value: function () {
                        var a = this.media, i = a ? a.currentTime : void 0;
                        if (t.logger.log("media seeking to " + i), this.state === e.FRAG_LOADING) {
                            var o = s.default.bufferInfo(a, i, this.config.maxBufferHole), r = this.fragCurrent;
                            if (0 === o.len && r) {
                                var n = this.config.maxFragLookUpTolerance, l = r.start - n, u = r.start + r.duration + n;
                                l > i || i > u ? (r.loader && (t.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), r.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = e.IDLE) : t.logger.log("seeking outside of buffer but within currently loaded fragment range")
                            }
                        } else this.state === e.ENDED && (this.state = e.IDLE);
                        a && (this.lastCurrentTime = i), this.state !== e.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                    }
                }, {
                    key: "onMediaSeeked", value: function () {
                        t.logger.log("media seeked to " + this.media.currentTime), this.tick()
                    }
                }, {
                    key: "onMediaEnded", value: function () {
                        t.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        t.logger.log("trigger BUFFER_RESET"), this.hls.trigger(r.default.BUFFER_RESET), this.bufferRange = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onManifestParsed", value: function (r) {
                        var e, i = !1, a = !1;
                        r.levels.forEach(function (t) {
                            e = t.audioCodec, e && (-1 !== e.indexOf("mp4a.40.2") && (i = !0), -1 !== e.indexOf("mp4a.40.5") && (a = !0))
                        }), this.audioCodecSwitch = i && a, this.audioCodecSwitch && t.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = r.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;
                        var n = this.config;
                        n.autoStartLoad && this.hls.startLoad(n.startPosition)
                    }
                }, {
                    key: "onLevelLoaded", value: function (u) {
                        var i = u.details, s = u.level, d = this.levels[s], h = i.totalduration, n = 0;
                        if (t.logger.log("level " + s + " loaded [" + i.startSN + "," + i.endSN + "],duration:" + h), this.levelLastLoaded = s, i.live) {
                            var l = d.details;
                            l && i.fragments.length > 0 ? (o.default.mergeDetails(l, i), n = i.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(n, l), i.PTSKnown ? t.logger.log("live playlist sliding:" + n.toFixed(3)) : t.logger.log("live playlist - outdated PTS, unknown sliding")) : (i.PTSKnown = !1, t.logger.log("live playlist - first load, unknown sliding"))
                        } else i.PTSKnown = !1;
                        if (d.details = i, this.hls.trigger(r.default.LEVEL_UPDATED, {
                                details: i,
                                level: s
                            }), this.startFragRequested === !1) {
                            if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                var a = i.startTimeOffset;
                                isNaN(a) ? i.live ? (this.startPosition = this.computeLivePosition(n, i), t.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (0 > a && (t.logger.log("negative start time offset " + a + ", count from end of last fragment"), a = n + h + a), t.logger.log("start time offset found in playlist, adjust startPosition to " + a), this.startPosition = a)
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === e.WAITING_LEVEL && (this.state = e.IDLE), this.tick()
                    }
                }, {
                    key: "onKeyLoaded", value: function () {
                        this.state === e.KEY_LOADING && (this.state = e.IDLE, this.tick())
                    }
                }, {
                    key: "onFragLoaded", value: function (l) {
                        var i = this.fragCurrent, s = l.frag;
                        if (this.state === e.FRAG_LOADING && i && "main" === s.type && s.level === i.level && s.sn === i.sn) {
                            var o = l.stats;
                            if (t.logger.log("Loaded  " + i.sn + " of level " + i.level), this.fragBitrateTest = !1, s.bitrateTest === !0 && this.hls.nextLoadLevel)this.state = e.IDLE, this.startFragRequested = !1, o.tparsed = o.tbuffered = performance.now(), this.hls.trigger(r.default.FRAG_BUFFERED, {
                                stats: o,
                                frag: i,
                                id: "main"
                            }), this.tick(); else {
                                this.state = e.PARSING, this.stats = o;
                                var d = this.levels[this.level], n = d.details, p = n.totalduration, g = void 0 !== i.startDTS ? i.startDTS : i.start, f = i.level, c = i.sn, a = this.config.defaultAudioCodec || d.audioCodec;
                                this.audioCodecSwap && (t.logger.log("swapping playlist audio codec"), void 0 === a && (a = this.lastAudioCodec), a && (a = -1 !== a.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingAppending = 0, t.logger.log("Demuxing " + c + " of [" + n.startSN + " ," + n.endSN + "],level " + f + ", cc " + i.cc);
                                var h = this.demuxer;
                                h || (h = this.demuxer = new u.default(this.hls, "main"));
                                var v = n.PTSKnown || !n.live;
                                h.push(l.payload, a, d.videoCodec, g, i.cc, f, c, p, i.decryptdata, v)
                            }
                        }
                        this.fragLoadError = 0
                    }
                }, {
                    key: "onFragParsingInitSegment", value: function (n) {
                        var u = this.fragCurrent;
                        if (u && "main" === n.id && n.sn === u.sn && n.level === u.level && this.state === e.PARSING) {
                            var l, i, a = n.tracks;
                            if (a.audio && this.altAudio && delete a.audio, i = a.audio) {
                                var s = this.levels[this.level].audioCodec, d = navigator.userAgent.toLowerCase();
                                s && this.audioCodecSwap && (t.logger.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === d.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== d.indexOf("android") && (s = "mp4a.40.2", t.logger.log("Android: force audio codec to" + s)), i.levelCodec = s, i.id = n.id
                            }
                            if (i = a.video, i && (i.levelCodec = this.levels[this.level].videoCodec, i.id = n.id), n.unique) {
                                var o = {codec: "", levelCodec: ""};
                                for (l in n.tracks)i = a[l], o.container = i.container, o.codec && (o.codec += ",", o.levelCodec += ","), i.codec && (o.codec += i.codec), i.levelCodec && (o.levelCodec += i.levelCodec);
                                a = {audiovideo: o}
                            }
                            this.hls.trigger(r.default.BUFFER_CODECS, a);
                            for (l in a) {
                                i = a[l], t.logger.log("main track:" + l + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                var h = i.initSegment;
                                h && (this.pendingAppending++, this.hls.trigger(r.default.BUFFER_APPENDING, {
                                    type: l,
                                    data: h,
                                    parent: "main",
                                    content: "initSegment"
                                }))
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onFragParsingData", value: function (i) {
                        var u = this, a = this.fragCurrent;
                        if (a && "main" === i.id && i.sn === a.sn && i.level === a.level && ("audio" !== i.type || "AUDIO" !== this.audioTrackType) && this.state === e.PARSING) {
                            var s = this.levels[this.level], n = this.fragCurrent;
                            t.logger.log("parsed " + i.type + ",PTS:[" + i.startPTS.toFixed(3) + "," + i.endPTS.toFixed(3) + "],DTS:[" + i.startDTS.toFixed(3) + "/" + i.endDTS.toFixed(3) + "],nb:" + i.nb + ",dropped:" + (i.dropped || 0));
                            var d = o.default.updateFragPTSDTS(s.details, n.sn, i.startPTS, i.endPTS, i.startDTS, i.endDTS), l = this.hls;
                            l.trigger(r.default.LEVEL_PTS_UPDATED, {
                                details: s.details,
                                level: this.level,
                                drift: d
                            }), "video" === i.type && (n.dropped = i.dropped), [i.data1, i.data2].forEach(function (e) {
                                e && (u.pendingAppending++, l.trigger(r.default.BUFFER_APPENDING, {
                                    type: i.type,
                                    data: e,
                                    parent: "main",
                                    content: "data"
                                }))
                            }), this.nextLoadPosition = i.endPTS, this.bufferRange.push({
                                type: i.type,
                                start: i.startPTS,
                                end: i.endPTS,
                                frag: n
                            }), this.tick()
                        }
                    }
                }, {
                    key: "onFragParsed", value: function (t) {
                        var r = this.fragCurrent;
                        r && "main" === t.id && t.sn === r.sn && t.level === r.level && this.state === e.PARSING && (this.stats.tparsed = performance.now(), this.state = e.PARSED, this._checkAppendedParsed())
                    }
                }, {
                    key: "onAudioTrackSwitch", value: function (a) {
                        var r = !!a.url;
                        if (r)this.videoBuffer && this.mediaBuffer !== this.videoBuffer && (t.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = this.videoBuffer); else if (this.mediaBuffer !== this.media) {
                            t.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            var i = this.fragCurrent;
                            i.loader && (t.logger.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = e.IDLE
                        }
                        this.altAudio = r
                    }
                }, {
                    key: "onBufferCreated", value: function (o) {
                        var r = o.tracks, i = void 0, a = void 0, n = !1;
                        for (var e in r) {
                            var s = r[e];
                            "main" === s.id ? (a = e, i = s, "video" === e && (this.videoBuffer = r[e].buffer)) : n = !0
                        }
                        n && i ? (t.logger.log("alternate track found, use " + a + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
                    }
                }, {
                    key: "onBufferAppended", value: function (t) {
                        if ("main" === t.parent)switch (this.state) {
                            case e.PARSING:
                            case e.PARSED:
                                this.pendingAppending--, this._checkAppendedParsed()
                        }
                    }
                }, {
                    key: "_checkAppendedParsed", value: function () {
                        if (this.state === e.PARSED && 0 === this.pendingAppending) {
                            var a = this.fragCurrent, i = this.stats;
                            if (a) {
                                this.fragPrevious = a, i.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * i.total / (i.tbuffered - i.tfirst)), this.hls.trigger(r.default.FRAG_BUFFERED, {
                                    stats: i,
                                    frag: a,
                                    id: "main"
                                });
                                var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                t.logger.log("main buffered : " + R.default.toString(n.buffered)), this.state = e.IDLE
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onError", value: function (a) {
                        var n = a.frag || this.fragCurrent;
                        if (!n || "main" === n.type) {
                            var o = this.media, l = o && this.isBuffered(o.currentTime) && this.isBuffered(o.currentTime + .4);
                            switch (a.details) {
                                case i.ErrorDetails.FRAG_LOAD_ERROR:
                                case i.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    if (!a.fatal) {
                                        var s = this.fragLoadError;
                                        s ? s++ : s = 1;
                                        var u = this.config;
                                        if (s <= u.fragLoadingMaxRetry || l) {
                                            this.fragLoadError = s, n.loadCounter = 0;
                                            var d = Math.min(Math.pow(2, s - 1) * u.fragLoadingRetryDelay, u.fragLoadingMaxRetryTimeout);
                                            t.logger.warn("mediaController: frag loading failed, retry in " + d + " ms"), this.retryDate = performance.now() + d, this.state = e.FRAG_LOADING_WAITING_RETRY
                                        } else t.logger.error("mediaController: " + a.details + " reaches max retry, redispatch as fatal ..."), a.fatal = !0, this.hls.trigger(r.default.ERROR, a), this.state = e.ERROR
                                    }
                                    break;
                                case i.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                    a.fatal || (l ? (this._reduceMaxMaxBufferLength(n.duration), this.state = e.IDLE) : n.autoLevel && 0 !== n.level || (a.fatal = !0, this.hls.trigger(r.default.ERROR, a), this.state = e.ERROR));
                                    break;
                                case i.ErrorDetails.LEVEL_LOAD_ERROR:
                                case i.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                case i.ErrorDetails.KEY_LOAD_ERROR:
                                case i.ErrorDetails.KEY_LOAD_TIMEOUT:
                                    this.state !== e.ERROR && (this.state = a.fatal ? e.ERROR : e.IDLE, t.logger.warn("mediaController: " + a.details + " while loading frag,switch to " + this.state + " state ..."));
                                    break;
                                case i.ErrorDetails.BUFFER_FULL_ERROR:
                                    this.state !== e.PARSING && this.state !== e.PARSED || (l ? (this._reduceMaxMaxBufferLength(n.duration), this.state = e.IDLE) : (t.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.state = e.PAUSED, this.hls.trigger(r.default.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY
                                    })))
                            }
                        }
                    }
                }, {
                    key: "_reduceMaxMaxBufferLength", value: function (r) {
                        var e = this.config;
                        e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, t.logger.warn("reduce max buffer length to " + e.maxMaxBufferLength + "s and switch to IDLE state"), this.fragLoadIdx += 2 * e.fragLoadingLoopThreshold)
                    }
                }, {
                    key: "_checkBuffer", value: function () {
                        var e = this.media;
                        if (e && e.readyState) {
                            var n = e.currentTime, d = e.buffered;
                            if (!this.loadedmetadata && d.length) {
                                this.loadedmetadata = !0;
                                var a = this.startPosition, h = this.isBuffered(a);
                                n === a && h || (t.logger.log("target start position:" + a), h || (a = d.start(0), t.logger.log("target start position not buffered, seek to buffered.start(0) " + a)), t.logger.log("adjust currentTime from " + n + " to " + a), e.currentTime = a)
                            } else if (this.immediateSwitch)this.immediateLevelSwitchEnd(); else {
                                var l = s.default.bufferInfo(e, n, 0), g = !(e.paused || e.ended || 0 === e.buffered.length), u = .4, f = n > e.playbackRate * this.lastCurrentTime;
                                if (this.stalled && f && (this.stalled = !1, t.logger.log("playback not stuck anymore @" + n)), g && l.len <= u && (f ? (u = 0, this.seekHoleNudgeDuration = 0) : this.stalled ? this.seekHoleNudgeDuration += this.config.seekHoleNudgeDuration : (this.seekHoleNudgeDuration = 0, t.logger.log("playback seems stuck @" + n), this.hls.trigger(r.default.ERROR, {
                                        type: i.ErrorTypes.MEDIA_ERROR,
                                        details: i.ErrorDetails.BUFFER_STALLED_ERROR,
                                        fatal: !1
                                    }), this.stalled = !0), l.len <= u)) {
                                    var o = l.nextStart, c = o - n;
                                    if (o && c < this.config.maxSeekHole && c > 0) {
                                        t.logger.log("adjust currentTime from " + e.currentTime + " to next buffered @ " + o + " + nudge " + this.seekHoleNudgeDuration);
                                        var v = o + this.seekHoleNudgeDuration - e.currentTime;
                                        e.currentTime = o + this.seekHoleNudgeDuration, this.hls.trigger(r.default.ERROR, {
                                            type: i.ErrorTypes.MEDIA_ERROR,
                                            details: i.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                            fatal: !1,
                                            hole: v
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "onFragLoadEmergencyAborted", value: function () {
                        this.state = e.IDLE, this.loadedmetadata || (this.startFragRequested = !1), this.tick()
                    }
                }, {
                    key: "onBufferFlushed", value: function () {
                        var t, r, i = [];
                        for (r = 0; r < this.bufferRange.length; r++)t = this.bufferRange[r], this.isBuffered((t.start + t.end) / 2) && i.push(t);
                        this.bufferRange = i, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = e.IDLE, this.fragPrevious = null
                    }
                }, {
                    key: "swapAudioCodec", value: function () {
                        this.audioCodecSwap = !this.audioCodecSwap
                    }
                }, {
                    key: "computeLivePosition", value: function (t, e) {
                        var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
                        return t + Math.max(0, e.totalduration - r)
                    }
                }, {
                    key: "state", set: function (e) {
                        if (this.state !== e) {
                            var i = this.state;
                            this._state = e, t.logger.log("engine state transition from " + i + " to " + e), this.hls.trigger(r.default.STREAM_STATE_TRANSITION, {
                                previousState: i,
                                nextState: e
                            })
                        }
                    }, get: function () {
                        return this._state
                    }
                }, {
                    key: "currentLevel", get: function () {
                        if (this.media) {
                            var e = this.getBufferRange(this.media.currentTime);
                            if (e)return e.frag.level
                        }
                        return -1
                    }
                }, {
                    key: "nextBufferRange", get: function () {
                        return this.media ? this.followingBufferRange(this.getBufferRange(this.media.currentTime)) : null
                    }
                }, {
                    key: "nextLevel", get: function () {
                        var e = this.nextBufferRange;
                        return e ? e.frag.level : -1
                    }
                }, {
                    key: "liveSyncPosition", get: function () {
                        return this._liveSyncPosition
                    }, set: function (e) {
                        this._liveSyncPosition = e
                    }
                }]), a
            }(l.default);
            d.default = T
        }, {20: 20, 24: 24, 25: 25, 26: 26, 28: 28, 29: 29, 39: 39, 43: 43, 45: 45}], 12: [function (t, v, i) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function h(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var c = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = t(26), e = r(l), d = t(25), a = r(d), f = t(40), o = r(f), u = function (r) {
                function t(a) {
                    h(this, t);
                    var i = n(this, Object.getPrototypeOf(t).call(this, a, e.default.MEDIA_ATTACHING, e.default.MEDIA_DETACHING, e.default.FRAG_PARSING_USERDATA, e.default.MANIFEST_LOADING, e.default.FRAG_LOADED, e.default.LEVEL_SWITCH));
                    if (i.hls = a, i.config = a.config, i.enabled = !0, i.Cues = a.config.cueHandler, i.config.enableCEA708Captions) {
                        var r = i, s = {
                            newCue: function (i, a, n) {
                                if (!r.textTrack1) {
                                    var e = r.getExistingTrack("1");
                                    if (e) {
                                        r.textTrack1 = e, r.clearCurrentCues(r.textTrack1);
                                        var t = new window.Event("addtrack");
                                        t.track = r.textTrack1, r.media.dispatchEvent(t)
                                    } else r.textTrack1 = r.createTextTrack("captions", "English", "en"), r.textTrack1.textTrack1 = !0
                                }
                                r.Cues.newCue(r.textTrack1, i, a, n)
                            }
                        }, l = {
                            newCue: function (i, a, n) {
                                if (!r.textTrack2) {
                                    var e = r.getExistingTrack("2");
                                    if (e) {
                                        r.textTrack2 = e, r.clearCurrentCues(r.textTrack2);
                                        var t = new window.Event("addtrack");
                                        t.track = r.textTrack2, r.media.dispatchEvent(t)
                                    } else r.textTrack2 = r.createTextTrack("captions", "Spanish", "es"), r.textTrack2.textTrack2 = !0
                                }
                                r.Cues.newCue(r.textTrack2, i, a, n)
                            }
                        };
                        i.cea608Parser = new o.default(0, s, l)
                    }
                    return i
                }

                return s(t, r), c(t, [{
                    key: "clearCurrentCues", value: function (e) {
                        if (e && e.cues)for (; e.cues.length > 0;)e.removeCue(e.cues[0])
                    }
                }, {
                    key: "getExistingTrack", value: function (i) {
                        var e = this.media;
                        if (e)for (var t = 0; t < e.textTracks.length; t++) {
                            var r = e.textTracks[t], a = "textTrack" + i;
                            if (r[a] === !0)return r
                        }
                        return null
                    }
                }, {
                    key: "createTextTrack", value: function (e, t, r) {
                        return this.media ? this.media.addTextTrack(e, t, r) : void 0
                    }
                }, {
                    key: "destroy", value: function () {
                        a.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.media = e.media
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        this.lastPts = Number.NEGATIVE_INFINITY
                    }
                }, {
                    key: "onLevelSwitch", value: function () {
                        "NONE" === this.hls.currentLevel.closedCaptions ? this.enabled = !1 : this.enabled = !0
                    }
                }, {
                    key: "onFragLoaded", value: function (e) {
                        if ("main" === e.frag.type) {
                            var t = e.frag.start;
                            t <= this.lastPts && (this.clearCurrentCues(this.textTrack1), this.clearCurrentCues(this.textTrack2)), this.lastPts = t
                        }
                    }
                }, {
                    key: "onFragParsingUserdata", value: function (t) {
                        if (this.enabled)for (var e = 0; e < t.samples.length; e++) {
                            var r = this.extractCea608Data(t.samples[e].bytes);
                            this.cea608Parser.addData(t.samples[e].pts, r)
                        }
                    }
                }, {
                    key: "extractCea608Data", value: function (e) {
                        for (var t, r, i, s, o, u = 31 & e[0], a = 2, n = [], l = 0; u > l; l++)t = e[a++], r = 127 & e[a++], i = 127 & e[a++], s = 0 !== (4 & t), o = 3 & t, 0 === r && 0 === i || s && 0 === o && (n.push(r), n.push(i));
                        return n
                    }
                }]), t
            }(a.default);
            i.default = u
        }, {25: 25, 26: 26, 40: 40}], 13: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e(h) {
                    t(this, e), this._tables = [[[], [], [], [], []], [[], [], [], [], []]], this._precompute();
                    var i, s, r, o, l, n = this._tables[0][4], u = this._tables[1], a = h.length, d = 1;
                    if (4 !== a && 6 !== a && 8 !== a)throw new Error("Invalid aes key size=" + a);
                    for (o = h.slice(0), l = [], this._key = [o, l], i = a; 4 * a + 28 > i; i++)r = o[i - 1], (i % a === 0 || 8 === a && i % a === 4) && (r = n[r >>> 24] << 24 ^ n[r >> 16 & 255] << 16 ^ n[r >> 8 & 255] << 8 ^ n[255 & r], i % a === 0 && (r = r << 8 ^ r >>> 24 ^ d << 24, d = d << 1 ^ 283 * (d >> 7))), o[i] = o[i - a] ^ r;
                    for (s = 0; i; s++, i--)r = o[3 & s ? i : i - 4], 4 >= i || 4 > s ? l[s] = r : l[s] = u[0][n[r >>> 24]] ^ u[1][n[r >> 16 & 255]] ^ u[2][n[r >> 8 & 255]] ^ u[3][n[255 & r]]
                }

                return r(e, [{
                    key: "_precompute", value: function () {
                        var e, i, r, u, h, d, t, s, l, n = this._tables[0], o = this._tables[1], f = n[4], v = o[4], a = [], c = [];
                        for (e = 0; 256 > e; e++)c[(a[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                        for (i = r = 0; !f[i]; i ^= u || 1, r = c[r] || 1)for (t = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4, t = t >> 8 ^ 255 & t ^ 99, f[i] = t, v[t] = i, d = a[h = a[u = a[i]]], l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * i, s = 257 * a[t] ^ 16843008 * t, e = 0; 4 > e; e++)n[e][i] = s = s << 24 ^ s >>> 8, o[e][t] = l = l << 24 ^ l >>> 8;
                        for (e = 0; 5 > e; e++)n[e] = n[e].slice(0), o[e] = o[e].slice(0)
                    }
                }, {
                    key: "decrypt", value: function (k, p, R, b, E, m) {
                        var f, g, v, n, e = this._key[1], t = k ^ e[0], i = b ^ e[1], a = R ^ e[2], r = p ^ e[3], y = e.length / 4 - 2, s = 4, o = this._tables[1], h = o[0], d = o[1], u = o[2], l = o[3], c = o[4];
                        for (n = 0; y > n; n++)f = h[t >>> 24] ^ d[i >> 16 & 255] ^ u[a >> 8 & 255] ^ l[255 & r] ^ e[s], g = h[i >>> 24] ^ d[a >> 16 & 255] ^ u[r >> 8 & 255] ^ l[255 & t] ^ e[s + 1], v = h[a >>> 24] ^ d[r >> 16 & 255] ^ u[t >> 8 & 255] ^ l[255 & i] ^ e[s + 2], r = h[r >>> 24] ^ d[t >> 16 & 255] ^ u[i >> 8 & 255] ^ l[255 & a] ^ e[s + 3], s += 4, t = f, i = g, a = v;
                        for (n = 0; 4 > n; n++)E[(3 & -n) + m] = c[t >>> 24] << 24 ^ c[i >> 16 & 255] << 16 ^ c[a >> 8 & 255] << 8 ^ c[255 & r] ^ e[s++], f = t, t = i, i = a, a = r, r = f
                    }
                }]), e
            }();
            e.default = i
        }, {}], 14: [function (t, l, e) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var a = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), n = t(13), s = r(n), o = function () {
                function e(t, r) {
                    i(this, e), this.key = t, this.iv = r
                }

                return a(e, [{
                    key: "ntoh", value: function (e) {
                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                    }
                }, {
                    key: "doDecrypt", value: function (i, g, a) {
                        var u, f, o, h, l, c, d, n, e, r = new Int32Array(i.buffer, i.byteOffset, i.byteLength >> 2), p = new s.default(Array.prototype.slice.call(g)), v = new Uint8Array(i.byteLength), t = new Int32Array(v.buffer);
                        for (u = ~~a[0], f = ~~a[1], o = ~~a[2], h = ~~a[3], e = 0; e < r.length; e += 4)l = ~~this.ntoh(r[e]), c = ~~this.ntoh(r[e + 1]), d = ~~this.ntoh(r[e + 2]), n = ~~this.ntoh(r[e + 3]), p.decrypt(l, c, d, n, t, e), t[e] = this.ntoh(t[e] ^ u), t[e + 1] = this.ntoh(t[e + 1] ^ f), t[e + 2] = this.ntoh(t[e + 2] ^ o), t[e + 3] = this.ntoh(t[e + 3] ^ h), u = l, f = c, o = d, h = n;
                        return v
                    }
                }, {
                    key: "localDecrypt", value: function (e, t, r, i) {
                        var a = this.doDecrypt(e, t, r);
                        i.set(a, e.byteOffset)
                    }
                }, {
                    key: "decrypt", value: function (n) {
                        var r = 32e3, t = new Int32Array(n), i = new Uint8Array(n.byteLength), e = 0, s = this.key, a = this.iv;
                        for (this.localDecrypt(t.subarray(e, e + r), s, a, i), e = r; e < t.length; e += r)a = new Uint32Array([this.ntoh(t[e - 4]), this.ntoh(t[e - 3]), this.ntoh(t[e - 2]), this.ntoh(t[e - 1])]), this.localDecrypt(t.subarray(e, e + r), s, a, i);
                        return i
                    }
                }]), e
            }();
            e.default = o
        }, {13: 13}], 15: [function (t, d, r) {
            "use strict";
            function l(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var u = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), s = t(14), o = l(s), i = t(24), e = t(43), n = function () {
                function t(r) {
                    a(this, t), this.hls = r;
                    try {
                        var e = window ? window.crypto : crypto;
                        this.subtle = e.subtle || e.webkitSubtle, this.disableWebCrypto = !this.subtle
                    } catch (e) {
                        this.disableWebCrypto = !0
                    }
                }

                return u(t, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "decrypt", value: function (e, t, r, i) {
                        this.disableWebCrypto && this.hls.config.enableSoftwareAES ? this.decryptBySoftware(e, t, r, i) : this.decryptByWebCrypto(e, t, r, i)
                    }
                }, {
                    key: "decryptByWebCrypto", value: function (t, r, i, a) {
                        var n = this;
                        e.logger.log("decrypting by WebCrypto API"), this.subtle.importKey("raw", r, {
                            name: "AES-CBC",
                            length: 128
                        }, !1, ["decrypt"]).then(function (e) {
                            n.subtle.decrypt({name: "AES-CBC", iv: i.buffer}, e, t).then(a).catch(function (e) {
                                n.onWebCryptoError(e, t, r, i, a)
                            })
                        }).catch(function (e) {
                            n.onWebCryptoError(e, t, r, i, a)
                        })
                    }
                }, {
                    key: "decryptBySoftware", value: function (r, i, a, n) {
                        e.logger.log("decrypting by JavaScript Implementation");
                        var t = new DataView(i.buffer), s = new Uint32Array([t.getUint32(0), t.getUint32(4), t.getUint32(8), t.getUint32(12)]);
                        t = new DataView(a.buffer);
                        var l = new Uint32Array([t.getUint32(0), t.getUint32(4), t.getUint32(8), t.getUint32(12)]), u = new o.default(s, l);
                        n(u.decrypt(r).buffer)
                    }
                }, {
                    key: "onWebCryptoError", value: function (t, r, a, n, s) {
                        this.hls.config.enableSoftwareAES ? (e.logger.log("disabling to use WebCrypto API"), this.disableWebCrypto = !0, this.decryptBySoftware(r, a, n, s)) : (e.logger.error("decrypting error : " + t.message), this.hls.trigger(Event.ERROR, {
                            type: i.ErrorTypes.MEDIA_ERROR,
                            details: i.ErrorDetails.FRAG_DECRYPT_ERROR,
                            fatal: !0,
                            reason: t.message
                        }))
                    }
                }]), t
            }();
            r.default = n
        }, {14: 14, 24: 24, 43: 43}], 16: [function (e, h, r) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function l(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var n = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), d = e(17), o = i(d), t = e(43), u = e(22), a = i(u), s = function () {
                function e(t, r, a, i) {
                    l(this, e), this.observer = t, this.id = r, this.remuxerClass = a, this.config = i, this.remuxer = new this.remuxerClass(t, r, i), this.insertDiscontinuity()
                }

                return n(e, [{
                    key: "insertDiscontinuity", value: function () {
                        this._aacTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0
                        }
                    }
                }, {
                    key: "push", value: function (r, b, T, R, y, d, g, _, k) {
                        var i, n, s, p, f, e, l, c, u, m, h = new a.default(r), v = 90 * h.timeStamp, E = !1;
                        for (y !== this.lastCC ? (t.logger.log(this.id + " discontinuity detected"), this.lastCC = y, this.insertDiscontinuity(), this.remuxer.switchLevel(), this.remuxer.insertDiscontinuity()) : d !== this.lastLevel ? (t.logger.log("audio track switch detected"), this.lastLevel = d, this.remuxer.switchLevel(), this.insertDiscontinuity()) : g === this.lastSN + 1 && (E = !0), i = this._aacTrack, this.lastSN = g, this.lastLevel = d, e = h.length, u = r.length; u - 1 > e && (255 !== r[e] || 240 !== (240 & r[e + 1])); e++);
                        for (i.audiosamplerate || (n = o.default.getAudioConfig(this.observer, r, e, b), i.config = n.config, i.audiosamplerate = n.samplerate, i.channelCount = n.channelCount, i.codec = n.codec, i.duration = _, t.logger.log("parsed codec:" + i.codec + ",rate:" + n.samplerate + ",nb channel:" + n.channelCount)), f = 0, p = 9216e4 / i.audiosamplerate; u > e + 5 && (l = 1 & r[e + 1] ? 7 : 9, s = (3 & r[e + 3]) << 11 | r[e + 4] << 3 | (224 & r[e + 5]) >>> 5, s -= l, s > 0 && u >= e + l + s);)for (c = v + f * p, m = {
                            unit: r.subarray(e + l, e + l + s),
                            pts: c,
                            dts: c
                        }, i.samples.push(m), i.len += s, e += s + l, f++; u - 1 > e && (255 !== r[e] || 240 !== (240 & r[e + 1])); e++);
                        this.remuxer.remux(d, g, this._aacTrack, {samples: []}, {
                            samples: [{
                                pts: v,
                                dts: v,
                                unit: h.payload
                            }]
                        }, {samples: []}, R, E, k)
                    }
                }, {
                    key: "destroy", value: function () {
                    }
                }], [{
                    key: "probe", value: function (t) {
                        var e, r, i = new a.default(t);
                        if (i.hasTimeStamp)for (e = i.length, r = t.length; r - 1 > e; e++)if (255 === t[e] && 240 === (240 & t[e + 1]))return !0;
                        return !1
                    }
                }]), e
            }();
            r.default = s
        }, {17: 17, 22: 22, 43: 43}], 17: [function (e, o, t) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), n = e(43), r = e(24), s = function () {
                function e() {
                    i(this, e)
                }

                return a(e, null, [{
                    key: "getAudioConfig", value: function (f, u, l, a) {
                        var i, e, s, o, t, h = navigator.userAgent.toLowerCase(), d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                        return i = ((192 & u[l + 2]) >>> 6) + 1, e = (60 & u[l + 2]) >>> 2, e > d.length - 1 ? void f.trigger(Event.ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            details: r.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "invalid ADTS sampling index:" + e
                        }) : (o = (1 & u[l + 2]) << 2, o |= (192 & u[l + 3]) >>> 6, n.logger.log("manifest codec:" + a + ",ADTS data:type:" + i + ",sampleingIndex:" + e + "[" + d[e] + "Hz],channelConfig:" + o), /firefox|OPR/i.test(h) ? e >= 6 ? (i = 5, t = new Array(4), s = e - 3) : (i = 2, t = new Array(2), s = e) : -1 !== h.indexOf("android") ? (i = 2, t = new Array(2), s = e) : (i = 5, t = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && e >= 6 ? s = e - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && e >= 6 && 1 === o || !a && 1 === o) && (i = 2, t = new Array(2)), s = e)), t[0] = i << 3, t[0] |= (14 & e) >> 1, t[1] |= (1 & e) << 7, t[1] |= o << 3, 5 === i && (t[1] |= (14 & s) >> 1, t[2] = (1 & s) << 7, t[2] |= 8, t[3] = 0), {
                            config: t,
                            samplerate: d[e],
                            channelCount: o,
                            codec: "mp4a.40." + i
                        })
                    }
                }]), e
            }();
            t.default = s
        }, {24: 24, 43: 43}], 18: [function (e, y, i) {
            "use strict";
            function t(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function d(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var f = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), v = e(26), o = t(v), a = e(24), p = e(16), n = t(p), h = e(23), r = t(h), c = e(36), s = t(c), g = e(37), u = t(g), l = function () {
                function e(t, r, i) {
                    var a = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3];
                    d(this, e), this.hls = t, this.id = r, this.config = this.hls.config || a, this.typeSupported = i
                }

                return f(e, [{
                    key: "destroy", value: function () {
                        var e = this.demuxer;
                        e && e.destroy()
                    }
                }, {
                    key: "push", value: function (l, f, p, g, d, h, y, c, v) {
                        var e = this.demuxer;
                        if (!e) {
                            var i = this.hls, t = this.id;
                            if (r.default.probe(l))e = this.typeSupported.mp2t === !0 ? new r.default(i, t, u.default, this.config) : new r.default(i, t, s.default, this.config); else {
                                if (!n.default.probe(l))return void i.trigger(o.default.ERROR, {
                                    type: a.ErrorTypes.MEDIA_ERROR,
                                    id: t,
                                    details: a.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                });
                                e = new n.default(i, t, s.default, this.config)
                            }
                            this.demuxer = e
                        }
                        e.push(l, f, p, g, d, h, y, c, v)
                    }
                }]), e
            }();
            i.default = l
        }, {16: 16, 23: 23, 24: 24, 26: 26, 36: 36, 37: 37}], 19: [function (t, h, i) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var a = t(18), n = r(a), d = t(26), e = r(d), l = t(43), u = t(1), s = r(u), o = function (r) {
                var t = new s.default;
                t.trigger = function (i) {
                    for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), e = 1; r > e; e++)a[e - 1] = arguments[e];
                    t.emit.apply(t, [i, i].concat(a))
                }, t.off = function (a) {
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), e = 1; r > e; e++)i[e - 1] = arguments[e];
                    t.removeListener.apply(t, [a].concat(i))
                }, r.addEventListener("message", function (a) {
                    var e = a.data;
                    switch (e.cmd) {
                        case"init":
                            var i = JSON.parse(e.config);
                            r.demuxer = new n.default(t, e.id, e.typeSupported, i);
                            try {
                                (0, l.enableLogs)(i.debug)
                            } catch (e) {
                            }
                            break;
                        case"demux":
                            r.demuxer.push(new Uint8Array(e.data), e.audioCodec, e.videoCodec, e.timeOffset, e.cc, e.level, e.sn, e.duration, e.accurateTimeOffset)
                    }
                });
                var i = function (e, t) {
                    r.postMessage({event: e, data: t})
                };
                t.on(e.default.FRAG_PARSING_INIT_SEGMENT, i), t.on(e.default.FRAG_PARSED, i), t.on(e.default.ERROR, i), t.on(e.default.FRAG_PARSING_METADATA, i), t.on(e.default.FRAG_PARSING_USERDATA, i), t.on(e.default.FRAG_PARSING_DATA, function (a, e) {
                    var t = e.data1.buffer, i = e.data2.buffer;
                    delete e.data1, delete e.data2, r.postMessage({event: a, data: e, data1: t, data2: i}, [t, i])
                })
            };
            i.default = o
        }, {1: 1, 18: 18, 26: 26, 43: 43}], 20: [function (e, p, r) {
            "use strict";
            function t(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function l(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var u = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), f = e(26), i = t(f), g = e(18), n = t(g), d = e(19), h = t(d), s = e(43), c = e(15), v = t(c), a = e(24), o = function () {
                function t(r, o) {
                    l(this, t), this.hls = r, this.id = o;
                    var u = {
                        mp4: MediaSource.isTypeSupported("video/mp4"),
                        mp2t: r.config.enableMP2TPassThrough && MediaSource.isTypeSupported("video/mp2t")
                    };
                    if (r.config.enableWorker && "undefined" != typeof Worker) {
                        s.logger.log("demuxing in webworker");
                        try {
                            var f = e(2), d = this.w = f(h.default);
                            this.onwmsg = this.onWorkerMessage.bind(this), d.addEventListener("message", this.onwmsg), d.onerror = function (e) {
                                r.trigger(i.default.ERROR, {
                                    type: a.ErrorTypes.OTHER_ERROR,
                                    details: a.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {message: e.message + " (" + e.filename + ":" + e.lineno + ")"}
                                })
                            }, d.postMessage({cmd: "init", typeSupported: u, id: o, config: JSON.stringify(r.config)})
                        } catch (e) {
                            s.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), this.demuxer = new n.default(r, o, u)
                        }
                    } else this.demuxer = new n.default(r, o, u);
                    this.demuxInitialized = !0
                }

                return u(t, [{
                    key: "destroy", value: function () {
                        var e = this.w;
                        if (e)e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null; else {
                            var t = this.demuxer;
                            t && (t.destroy(), this.demuxer = null)
                        }
                        var r = this.decrypter;
                        r && (r.destroy(), this.decrypter = null)
                    }
                }, {
                    key: "pushDecrypted", value: function (e, n, r, i, a, d, s, o, l) {
                        var u = this.w;
                        if (u)u.postMessage({
                            cmd: "demux",
                            data: e,
                            audioCodec: n,
                            videoCodec: r,
                            timeOffset: i,
                            cc: a,
                            level: d,
                            sn: s,
                            duration: o,
                            accurateTimeOffset: l
                        }, [e]); else {
                            var t = this.demuxer;
                            t && t.push(new Uint8Array(e), n, r, i, a, d, s, o, l)
                        }
                    }
                }, {
                    key: "push", value: function (t, n, r, i, a, l, s, o, e, u) {
                        if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
                            null == this.decrypter && (this.decrypter = new v.default(this.hls));
                            var d = this;
                            this.decrypter.decrypt(t, e.key, e.iv, function (e) {
                                d.pushDecrypted(e, n, r, i, a, l, s, o, u)
                            })
                        } else this.pushDecrypted(t, n, r, i, a, l, s, o, u)
                    }
                }, {
                    key: "onWorkerMessage", value: function (t) {
                        var e = t.data, r = this.hls;
                        switch (e.event) {
                            case i.default.FRAG_PARSING_DATA:
                                e.data.data1 = new Uint8Array(e.data1), e.data.data2 = new Uint8Array(e.data2);
                            default:
                                r.trigger(e.event, e.data)
                        }
                    }
                }]), t
            }();
            r.default = o
        }, {15: 15, 18: 18, 19: 19, 2: 2, 24: 24, 26: 26, 43: 43}], 21: [function (t, s, e) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var i = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), a = t(43), n = function () {
                function e(t) {
                    r(this, e), this.data = t, this.bytesAvailable = this.data.byteLength, this.word = 0, this.bitsAvailable = 0
                }

                return i(e, [{
                    key: "loadWord", value: function () {
                        var t = this.data.byteLength - this.bytesAvailable, r = new Uint8Array(4), e = Math.min(4, this.bytesAvailable);
                        if (0 === e)throw new Error("no bytes available");
                        r.set(this.data.subarray(t, t + e)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * e, this.bytesAvailable -= e
                    }
                }, {
                    key: "skipBits", value: function (e) {
                        var t;
                        this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                    }
                }, {
                    key: "readBits", value: function (t) {
                        var e = Math.min(this.bitsAvailable, t), r = this.word >>> 32 - e;
                        return t > 32 && a.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), e = t - e, e > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                    }
                }, {
                    key: "skipLZ", value: function () {
                        var e;
                        for (e = 0; e < this.bitsAvailable; ++e)if (0 !== (this.word & 2147483648 >>> e))return this.word <<= e, this.bitsAvailable -= e, e;
                        return this.loadWord(), e + this.skipLZ()
                    }
                }, {
                    key: "skipUEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "skipEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "readUEG", value: function () {
                        var e = this.skipLZ();
                        return this.readBits(e + 1) - 1
                    }
                }, {
                    key: "readEG", value: function () {
                        var e = this.readUEG();
                        return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                    }
                }, {
                    key: "readBoolean", value: function () {
                        return 1 === this.readBits(1)
                    }
                }, {
                    key: "readUByte", value: function () {
                        return this.readBits(8)
                    }
                }, {
                    key: "readUShort", value: function () {
                        return this.readBits(16)
                    }
                }, {
                    key: "readUInt", value: function () {
                        return this.readBits(32)
                    }
                }, {
                    key: "skipScalingList", value: function (a) {
                        var t, i, r = 8, e = 8;
                        for (t = 0; a > t; t++)0 !== e && (i = this.readEG(), e = (r + i + 256) % 256), r = 0 === e ? r : e
                    }
                }, {
                    key: "readSPS", value: function () {
                        var t, g, p, l, a, n, i, o, r, s = 0, d = 0, h = 0, f = 0, c = 1;
                        if (this.readUByte(), t = this.readUByte(), g = this.readBits(5), this.skipBits(3), p = this.readUByte(), this.skipUEG(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
                            var v = this.readUEG();
                            if (3 === v && this.skipBits(1), this.skipUEG(), this.skipUEG(), this.skipBits(1), this.readBoolean())for (o = 3 !== v ? 8 : 12, r = 0; o > r; r++)this.readBoolean() && (6 > r ? this.skipScalingList(16) : this.skipScalingList(64))
                        }
                        this.skipUEG();
                        var u = this.readUEG();
                        if (0 === u)this.readUEG(); else if (1 === u)for (this.skipBits(1), this.skipEG(), this.skipEG(), l = this.readUEG(), r = 0; l > r; r++)this.skipEG();
                        if (this.skipUEG(), this.skipBits(1), a = this.readUEG(), n = this.readUEG(), i = this.readBits(1), 0 === i && this.skipBits(1), this.skipBits(1), this.readBoolean() && (s = this.readUEG(), d = this.readUEG(), h = this.readUEG(), f = this.readUEG()), this.readBoolean() && this.readBoolean()) {
                            var e = void 0, y = this.readUByte();
                            switch (y) {
                                case 1:
                                    e = [1, 1];
                                    break;
                                case 2:
                                    e = [12, 11];
                                    break;
                                case 3:
                                    e = [10, 11];
                                    break;
                                case 4:
                                    e = [16, 11];
                                    break;
                                case 5:
                                    e = [40, 33];
                                    break;
                                case 6:
                                    e = [24, 11];
                                    break;
                                case 7:
                                    e = [20, 11];
                                    break;
                                case 8:
                                    e = [32, 11];
                                    break;
                                case 9:
                                    e = [80, 33];
                                    break;
                                case 10:
                                    e = [18, 11];
                                    break;
                                case 11:
                                    e = [15, 11];
                                    break;
                                case 12:
                                    e = [64, 33];
                                    break;
                                case 13:
                                    e = [160, 99];
                                    break;
                                case 14:
                                    e = [4, 3];
                                    break;
                                case 15:
                                    e = [3, 2];
                                    break;
                                case 16:
                                    e = [2, 1];
                                    break;
                                case 255:
                                    e = [this.readUByte() << 8 | this.readUByte(), this.readUByte() << 8 | this.readUByte()]
                            }
                            e && (c = e[0] / e[1])
                        }
                        return {
                            width: Math.ceil((16 * (a + 1) - 2 * s - 2 * d) * c),
                            height: (2 - i) * (n + 1) * 16 - (i ? 2 : 4) * (h + f)
                        }
                    }
                }, {
                    key: "readSliceType", value: function () {
                        return this.readUByte(), this.readUEG(), this.readUEG()
                    }
                }]), e
            }();
            e.default = n
        }, {43: 43}], 22: [function (r, s, t) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), e = r(43), n = function () {
                function t(a) {
                    i(this, t), this._hasTimeStamp = !1;
                    for (var l, u, d, h, f, s, o, n, r = 0; ;)if (o = this.readUTF(a, r, 3), r += 3, "ID3" === o)r += 3, l = 127 & a[r++], u = 127 & a[r++], d = 127 & a[r++], h = 127 & a[r++], f = (l << 21) + (u << 14) + (d << 7) + h, s = r + f, this._parseID3Frames(a, r, s), r = s; else {
                        if ("3DI" !== o)return r -= 3, n = r, void(n && (this.hasTimeStamp || e.logger.warn("ID3 tag found, but no timestamp"), this._length = n, this._payload = a.subarray(0, n)));
                        r += 7, e.logger.log("3DI footer found, end: " + r)
                    }
                }

                return a(t, [{
                    key: "readUTF", value: function (i, e, a) {
                        var t = "", r = e, n = e + a;
                        do t += String.fromCharCode(i[r++]); while (n > r);
                        return t
                    }
                }, {
                    key: "_parseID3Frames", value: function (r, t, n) {
                        for (var a, s, o, l, i; n >= t + 8;)switch (a = this.readUTF(r, t, 4), t += 4, s = r[t++] << 24 + r[t++] << 16 + r[t++] << 8 + r[t++], l = r[t++] << 8 + r[t++], o = t, a) {
                            case"PRIV":
                                if ("com.apple.streaming.transportStreamTimestamp" === this.readUTF(r, t, 44)) {
                                    t += 44, t += 4;
                                    var u = 1 & r[t++];
                                    this._hasTimeStamp = !0, i = ((r[t++] << 23) + (r[t++] << 15) + (r[t++] << 7) + r[t++]) / 45, u && (i += 47721858.84), i = Math.round(i), e.logger.trace("ID3 timestamp found: " + i), this._timeStamp = i
                                }
                        }
                    }
                }, {
                    key: "hasTimeStamp", get: function () {
                        return this._hasTimeStamp
                    }
                }, {
                    key: "timeStamp", get: function () {
                        return this._timeStamp
                    }
                }, {
                    key: "length", get: function () {
                        return this._length
                    }
                }, {
                    key: "payload", get: function () {
                        return this._payload
                    }
                }]), t
            }();
            t.default = n
        }, {43: 43}], 23: [function (t, v, a) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function u(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(a, "__esModule", {value: !0});
            var h = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), f = t(17), c = i(f), l = t(26), n = i(l), d = t(21), s = i(d), e = t(43), r = t(24), o = function () {
                function t(e, r, a, i) {
                    u(this, t), this.observer = e, this.id = r, this.remuxerClass = a, this.config = i, this.lastCC = 0, this.remuxer = new this.remuxerClass(e, r, i)
                }

                return h(t, [{
                    key: "switchLevel", value: function () {
                        this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = {
                            container: "video/mp2t",
                            type: "video",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0,
                            dropped: 0
                        }, this._aacTrack = {
                            container: "video/mp2t",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0
                        }, this._id3Track = {
                            type: "id3",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0
                        }, this._txtTrack = {
                            type: "text", id: -1, sequenceNumber: 0, samples: [], len: 0
                        }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.remuxer.switchLevel()
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                        this.switchLevel(), this.remuxer.insertDiscontinuity()
                    }
                }, {
                    key: "push", value: function (i, U, M, k, _, v, p, x, F) {
                        var t, c, S, A, a, s, m = i.length, P = this.remuxer.passthrough, b = !1;
                        this.audioCodec = U, this.videoCodec = M, this._duration = x, this.contiguous = !1, this.accurateTimeOffset = F, _ !== this.lastCC && (e.logger.log("discontinuity detected"), this.insertDiscontinuity(), this.lastCC = _), v !== this.lastLevel ? (e.logger.log("level switch detected"), this.switchLevel(), this.lastLevel = v) : p === this.lastSN + 1 && (this.contiguous = !0), this.lastSN = p;
                        var T = this.pmtParsed, d = this._avcTrack, h = this._aacTrack, g = this._id3Track, R = d.id, E = h.id, L = g.id, D = this._pmtId, u = d.pesData, o = h.pesData, l = g.pesData, N = this._parsePAT, C = this._parsePMT, f = this._parsePES, I = this._parseAVCPES.bind(this), w = this._parseAACPES.bind(this), O = this._parseID3PES.bind(this);
                        for (m -= m % 188, t = 0; m > t; t += 188)if (71 === i[t]) {
                            if (c = !!(64 & i[t + 1]), S = ((31 & i[t + 1]) << 8) + i[t + 2], A = (48 & i[t + 3]) >> 4, A > 1) {
                                if (a = t + 5 + i[t + 4], a === t + 188)continue
                            } else a = t + 4;
                            switch (S) {
                                case R:
                                    if (c) {
                                        if (u && (s = f(u)) && (I(s, !1), P && d.codec && (-1 === E || h.codec)))return void this.remux(v, p, i, k);
                                        u = {data: [], size: 0}
                                    }
                                    u && (u.data.push(i.subarray(a, t + 188)), u.size += t + 188 - a);
                                    break;
                                case E:
                                    if (c) {
                                        if (o && (s = f(o)) && (w(s), P && h.codec && (-1 === R || d.codec)))return void this.remux(v, p, i, k);
                                        o = {data: [], size: 0}
                                    }
                                    o && (o.data.push(i.subarray(a, t + 188)), o.size += t + 188 - a);
                                    break;
                                case L:
                                    c && (l && (s = f(l)) && O(s), l = {
                                        data: [],
                                        size: 0
                                    }), l && (l.data.push(i.subarray(a, t + 188)), l.size += t + 188 - a);
                                    break;
                                case 0:
                                    c && (a += i[a] + 1), D = this._pmtId = N(i, a);
                                    break;
                                case D:
                                    c && (a += i[a] + 1);
                                    var y = C(i, a);
                                    R = d.id = y.avc, E = h.id = y.aac, L = g.id = y.id3, b && !T && (e.logger.log("reparse from beginning"), b = !1, t = -188), T = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    b = !0
                            }
                        } else this.observer.trigger(n.default.ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            id: this.id,
                            details: r.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                        u && (s = f(u)) ? (I(s, !0), d.pesData = null) : d.pesData = u, o && (s = f(o)) ? (w(s), h.pesData = null) : (o && o.size && e.logger.log("last AAC PES packet truncated,might overlap between fragments"), h.pesData = o), l && (s = f(l)) ? (O(s), g.pesData = null) : g.pesData = l, this.remux(v, p, null, k)
                    }
                }, {
                    key: "remux", value: function (r, i, a, n) {
                        var e = this._avcTrack, s = e.samples, t = s.reduce(function (t, r) {
                            var e = r.units.units.reduce(function (e, t) {
                                return {len: e.len + t.data.length, nbNalu: e.nbNalu + 1}
                            }, {len: 0, nbNalu: 0});
                            return r.length = e.len, {len: t.len + e.len, nbNalu: t.nbNalu + e.nbNalu}
                        }, {len: 0, nbNalu: 0});
                        e.len = t.len, e.nbNalu = t.nbNalu, this.remuxer.remux(r, i, this._aacTrack, this._avcTrack, this._id3Track, this._txtTrack, n, this.contiguous, this.accurateTimeOffset, a)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.switchLevel(), this._initPTS = this._initDTS = void 0, this._duration = 0
                    }
                }, {
                    key: "_parsePAT", value: function (e, t) {
                        return (31 & e[t + 10]) << 8 | e[t + 11]
                    }
                }, {
                    key: "_parsePMT", value: function (r, t) {
                        var n, s, o, a, i = {aac: -1, avc: -1, id3: -1};
                        for (n = (15 & r[t + 1]) << 8 | r[t + 2], s = t + 3 + n - 4, o = (15 & r[t + 10]) << 8 | r[t + 11], t += 12 + o; s > t;) {
                            switch (a = (31 & r[t + 1]) << 8 | r[t + 2], r[t]) {
                                case 15:
                                    -1 === i.aac && (i.aac = a);
                                    break;
                                case 21:
                                    -1 === i.id3 && (i.id3 = a);
                                    break;
                                case 27:
                                    -1 === i.avc && (i.avc = a);
                                    break;
                                case 36:
                                    e.logger.warn("HEVC stream type found, not supported for now");
                                    break;
                                default:
                                    e.logger.log("unkown stream type:" + r[t])
                            }
                            t += ((15 & r[t + 3]) << 8 | r[t + 4]) + 5
                        }
                        return i
                    }
                }, {
                    key: "_parsePES", value: function (i) {
                        var e, d, f, a, u, l, s, n, r, c = 0, t = i.data;
                        if (!i || 0 === i.size)return null;
                        for (; t[0].length < 19 && t.length > 1;) {
                            var h = new Uint8Array(t[0].length + t[1].length);
                            h.set(t[0]), h.set(t[1], t[0].length), t[0] = h, t.splice(1, 1)
                        }
                        if (e = t[0], f = (e[0] << 16) + (e[1] << 8) + e[2], 1 === f) {
                            if (a = (e[4] << 8) + e[5], a && a !== i.size - 6)return null;
                            for (d = e[7], 192 & d && (s = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & d ? (n = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2, n > 4294967295 && (n -= 8589934592)) : n = s), u = e[8], r = u + 9, i.size -= r, l = new Uint8Array(i.size); t.length;) {
                                e = t.shift();
                                var o = e.byteLength;
                                if (r) {
                                    if (r > o) {
                                        r -= o;
                                        continue
                                    }
                                    e = e.subarray(r), o -= r, r = 0
                                }
                                l.set(e, c), c += o
                            }
                            return a && (a -= u + 3), {data: l, pts: s, dts: n, len: a}
                        }
                        return null
                    }
                }, {
                    key: "pushAccesUnit", value: function (t, r) {
                        t.units.units.length && (!this.config.forceKeyFrameOnDiscontinuity || t.key === !0 || r.sps && (r.samples.length || this.contiguous) ? r.samples.push(t) : r.dropped++), t.debug.length && e.logger.log(t.pts + "/" + t.dts + ":" + t.debug + "," + t.units.length)
                    }
                }, {
                    key: "_parseAVCPES", value: function (o, u) {
                        var t, a, r, n = this, i = this._avcTrack, d = this._parseAVCNALu(o.data), l = !1, e = this.avcSample;
                        o.data = null, d.forEach(function (u) {
                            switch (u.type) {
                                case 1:
                                    a = !0, l && e && (e.debug += "NDR ");
                                    break;
                                case 5:
                                    a = !0, e || (e = n.avcSample = n._createAVCSample(!0, o.pts, o.dts, "")), l && (e.debug += "IDR "), e.key = !0;
                                    break;
                                case 6:
                                    a = !0, l && e && (e.debug += "SEI "), t = new s.default(n.discardEPB(u.data)), t.readUByte();
                                    for (var v = 0, h = 0, m = !1, d = 0; !m && t.bytesAvailable > 1;) {
                                        v = 0;
                                        do d = t.readUByte(), v += d; while (255 === d);
                                        h = 0;
                                        do d = t.readUByte(), h += d; while (255 === d);
                                        if (4 === v && 0 !== t.bytesAvailable) {
                                            m = !0;
                                            var A = t.readUByte();
                                            if (181 === A) {
                                                var T = t.readUShort();
                                                if (49 === T) {
                                                    var k = t.readUInt();
                                                    if (1195456820 === k) {
                                                        var R = t.readUByte();
                                                        if (3 === R) {
                                                            var y = t.readUByte(), E = t.readUByte(), b = 31 & y, c = [y, E];
                                                            for (r = 0; b > r; r++)c.push(t.readUByte()), c.push(t.readUByte()), c.push(t.readUByte());
                                                            n._insertSampleInOrder(n._txtTrack.samples, {
                                                                type: 3,
                                                                pts: o.pts,
                                                                bytes: c
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (h < t.bytesAvailable)for (r = 0; h > r; r++)t.readUByte()
                                    }
                                    break;
                                case 7:
                                    if (a = !0, l && e && (e.debug += "SPS "), !i.sps) {
                                        t = new s.default(u.data);
                                        var p = t.readSPS();
                                        i.width = p.width, i.height = p.height, i.sps = [u.data], i.duration = n._duration;
                                        var _ = u.data.subarray(1, 4), g = "avc1.";
                                        for (r = 0; 3 > r; r++) {
                                            var f = _[r].toString(16);
                                            f.length < 2 && (f = "0" + f), g += f
                                        }
                                        i.codec = g
                                    }
                                    break;
                                case 8:
                                    a = !0, l && e && (e.debug += "PPS "), i.pps || (i.pps = [u.data]);
                                    break;
                                case 9:
                                    a = !1, e && n.pushAccesUnit(e, i), e = n.avcSample = n._createAVCSample(!1, o.pts, o.dts, l ? "AUD " : "");
                                    break;
                                case 12:
                                    a = !1;
                                    break;
                                default:
                                    a = !1, e && (e.debug += "unknown NAL " + u.type + " ")
                            }
                            if (e && a) {
                                var S = e.units;
                                S.units.push(u)
                            }
                        }), u && e && (this.pushAccesUnit(e, i), this.avcSample = null)
                    }
                }, {
                    key: "_createAVCSample", value: function (e, t, r, i) {
                        return {key: e, pts: t, dts: r, units: {units: [], length: 0}, debug: i}
                    }
                }, {
                    key: "_insertSampleInOrder", value: function (e, t) {
                        var i = e.length;
                        if (i > 0) {
                            if (t.pts >= e[i - 1].pts)e.push(t); else for (var r = i - 1; r >= 0; r--)if (t.pts < e[r].pts) {
                                e.splice(r, 0, t);
                                break
                            }
                        } else e.push(t)
                    }
                }, {
                    key: "_getLastNalUnit", value: function () {
                        var e = this.avcSample, t = void 0;
                        if (!e || 0 === e.units.units.length) {
                            var a = this._avcTrack, r = a.samples;
                            e = r[r.length - 1]
                        }
                        if (e) {
                            var i = e.units.units;
                            t = i[i.length - 1]
                        }
                        return t
                    }
                }, {
                    key: "_parseAVCNALu", value: function (r) {
                        for (var a, l, u, g, o, i = 0, f = r.byteLength, p = this._avcTrack, e = p.naluState || 0, c = e, d = [], n = -1; f > i;)switch (a = r[i++], e) {
                            case 0:
                                0 === a && (e = 1);
                                break;
                            case 1:
                                e = 0 === a ? 2 : 0;
                                break;
                            case 2:
                            case 3:
                                if (0 === a)e = 3; else if (1 === a) {
                                    if (n >= 0)u = {data: r.subarray(n, i - e - 1), type: o}, d.push(u); else {
                                        var t = this._getLastNalUnit();
                                        if (t && (c && 4 - c >= i && t.state && (t.data = t.data.subarray(0, t.data.byteLength - c)), l = i - e - 1, l > 0)) {
                                            var v = new Uint8Array(t.data.byteLength + l);
                                            v.set(t.data, 0), v.set(r.subarray(0, l), t.data.byteLength), t.data = v
                                        }
                                    }
                                    f > i ? (g = 31 & r[i], n = i, o = g, e = 0) : e = -1
                                } else e = 0;
                                break;
                            case-1:
                                n = 0, o = 31 & a, e = 0
                        }
                        if (n >= 0 && e >= 0 && (u = {
                                data: r.subarray(n, f),
                                type: o,
                                state: e
                            }, d.push(u)), 0 === d.length) {
                            var s = this._getLastNalUnit();
                            if (s) {
                                var h = new Uint8Array(s.data.byteLength + r.byteLength);
                                h.set(s.data, 0), h.set(r, s.data.byteLength), s.data = h
                            }
                        }
                        return p.naluState = e, d
                    }
                }, {
                    key: "discardEPB", value: function (t) {
                        for (var a, n, s = t.byteLength, r = [], e = 1; s - 2 > e;)0 === t[e] && 0 === t[e + 1] && 3 === t[e + 2] ? (r.push(e + 2), e += 2) : e++;
                        if (0 === r.length)return t;
                        a = s - r.length, n = new Uint8Array(a);
                        var i = 0;
                        for (e = 0; a > e; i++, e++)i === r[0] && (i++, r.shift()), n[e] = t[i];
                        return n
                    }
                }, {
                    key: "_parseAACPES", value: function (k) {
                        var o, u, p, y, t, d, h, s, R, a = this._aacTrack, i = k.data, f = k.pts, _ = 0, l = this.aacOverFlow, b = this.aacLastPTS;
                        if (l) {
                            var E = new Uint8Array(l.byteLength + i.byteLength);
                            E.set(l, 0), E.set(i, l.byteLength), i = E
                        }
                        for (t = _, s = i.length; s - 1 > t && (255 !== i[t] || 240 !== (240 & i[t + 1])); t++);
                        if (t) {
                            var v, g;
                            if (s - 1 > t ? (v = "AAC PES did not start with ADTS header,offset:" + t, g = !1) : (v = "no ADTS header found in AAC PES", g = !0), e.logger.warn("parsing error:" + v), this.observer.trigger(n.default.ERROR, {
                                    type: r.ErrorTypes.MEDIA_ERROR,
                                    id: this.id,
                                    details: r.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: g,
                                    reason: v
                                }), g)return
                        }
                        if (a.audiosamplerate || (o = c.default.getAudioConfig(this.observer, i, t, this.audioCodec), a.config = o.config, a.audiosamplerate = o.samplerate, a.channelCount = o.channelCount, a.codec = o.codec, a.duration = this._duration, e.logger.log("parsed codec:" + a.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)), y = 0, p = 9216e4 / a.audiosamplerate, l && b) {
                            var m = b + p;
                            Math.abs(m - f) > 1 && (e.logger.log("AAC: align PTS for overlapping frames by " + Math.round((m - f) / 90)), f = m)
                        }
                        for (; s > t + 5 && (d = 1 & i[t + 1] ? 7 : 9, u = (3 & i[t + 3]) << 11 | i[t + 4] << 3 | (224 & i[t + 5]) >>> 5, u -= d, u > 0 && s >= t + d + u);)for (h = f + y * p, R = {
                            unit: i.subarray(t + d, t + d + u),
                            pts: h,
                            dts: h
                        }, a.samples.push(R), a.len += u, t += u + d, y++; s - 1 > t && (255 !== i[t] || 240 !== (240 & i[t + 1])); t++);
                        l = s > t ? i.subarray(t, s) : null, this.aacOverFlow = l, this.aacLastPTS = h
                    }
                }, {
                    key: "_parseID3PES", value: function (e) {
                        this._id3Track.samples.push(e)
                    }
                }], [{
                    key: "probe", value: function (e) {
                        return e.length >= 564 && 71 === e[0] && 71 === e[188] && 71 === e[376]
                    }
                }]), t
            }();
            a.default = o
        }, {17: 17, 21: 21, 24: 24, 26: 26, 43: 43}], 24: [function (t, r, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            e.ErrorTypes = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                OTHER_ERROR: "otherError"
            }, e.ErrorDetails = {
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                INTERNAL_EXCEPTION: "internalException"
            }
        }, {}], 25: [function (e, h, t) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, d = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), o = e(43), r = e(24), u = e(26), s = i(u), l = function () {
                function e(n) {
                    a(this, e), this.hls = n, this.onEvent = this.onEvent.bind(this);
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), t = 1; r > t; t++)i[t - 1] = arguments[t];
                    this.handledEvents = i, this.useGenericHandler = !0, this.registerListeners()
                }

                return d(e, [{
                    key: "destroy", value: function () {
                        this.unregisterListeners()
                    }
                }, {
                    key: "isEventHandler", value: function () {
                        return "object" === n(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                    }
                }, {
                    key: "registerListeners", value: function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (e) {
                            if ("hlsEventGeneric" === e)throw new Error("Forbidden event name: " + e);
                            this.hls.on(e, this.onEvent)
                        }.bind(this))
                    }
                }, {
                    key: "unregisterListeners", value: function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (e) {
                            this.hls.off(e, this.onEvent)
                        }.bind(this))
                    }
                }, {
                    key: "onEvent", value: function (e, t) {
                        this.onEventGeneric(e, t)
                    }
                }, {
                    key: "onEventGeneric", value: function (e, t) {
                        var i = function (t, r) {
                            var e = "on" + t.replace("hls", "");
                            if ("function" != typeof this[e])throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + e + ")");
                            return this[e].bind(this, r)
                        };
                        try {
                            i.call(this, e, t).call()
                        } catch (t) {
                            o.logger.error("internal error happened while processing " + e + ":" + t.message), this.hls.trigger(s.default.ERROR, {
                                type: r.ErrorTypes.OTHER_ERROR,
                                details: r.ErrorDetails.INTERNAL_EXCEPTION,
                                fatal: !1,
                                event: e,
                                err: t
                            })
                        }
                    }
                }]), e
            }();
            t.default = l
        }, {24: 24, 26: 26, 43: 43}], 26: [function (t, e, r) {
            "use strict";
            e.exports = {
                MEDIA_ATTACHING: "hlsMediaAttaching",
                MEDIA_ATTACHED: "hlsMediaAttached",
                MEDIA_DETACHING: "hlsMediaDetaching",
                MEDIA_DETACHED: "hlsMediaDetached",
                BUFFER_RESET: "hlsBufferReset",
                BUFFER_CODECS: "hlsBufferCodecs",
                BUFFER_CREATED: "hlsBufferCreated",
                BUFFER_APPENDING: "hlsBufferAppending",
                BUFFER_APPENDED: "hlsBufferAppended",
                BUFFER_EOS: "hlsBufferEos",
                BUFFER_FLUSHING: "hlsBufferFlushing",
                BUFFER_FLUSHED: "hlsBufferFlushed",
                MANIFEST_LOADING: "hlsManifestLoading",
                MANIFEST_LOADED: "hlsManifestLoaded",
                MANIFEST_PARSED: "hlsManifestParsed",
                LEVEL_LOADING: "hlsLevelLoading",
                LEVEL_LOADED: "hlsLevelLoaded",
                LEVEL_UPDATED: "hlsLevelUpdated",
                LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                LEVEL_SWITCH: "hlsLevelSwitch",
                AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
                AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                FRAG_LOADING: "hlsFragLoading",
                FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                FRAG_LOADED: "hlsFragLoaded",
                FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                FRAG_PARSING_DATA: "hlsFragParsingData",
                FRAG_PARSED: "hlsFragParsed",
                FRAG_BUFFERED: "hlsFragBuffered",
                FRAG_CHANGED: "hlsFragChanged",
                FPS_DROP: "hlsFpsDrop",
                FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                ERROR: "hlsError",
                DESTROYING: "hlsDestroying",
                KEY_LOADING: "hlsKeyLoading",
                KEY_LOADED: "hlsKeyLoaded",
                STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
            }
        }, {}], 27: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e() {
                    t(this, e)
                }

                return r(e, null, [{
                    key: "getSilentFrame", value: function (e) {
                        return 1 === e ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === e ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null
                    }
                }]), e
            }();
            e.default = i
        }, {}], 28: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e() {
                    t(this, e)
                }

                return r(e, null, [{
                    key: "bufferInfo", value: function (r, a, n) {
                        if (r) {
                            var e, t = r.buffered, i = [];
                            for (e = 0; e < t.length; e++)i.push({start: t.start(e), end: t.end(e)});
                            return this.bufferedInfo(i, a, n)
                        }
                        return {len: 0, start: 0, end: 0, nextStart: void 0}
                    }
                }, {
                    key: "bufferedInfo", value: function (r, i, s) {
                        var o, l, a, f, e, t = [];
                        for (r.sort(function (e, t) {
                            var r = e.start - t.start;
                            return r ? r : t.end - e.end
                        }), e = 0; e < r.length; e++) {
                            var u = t.length;
                            if (u) {
                                var d = t[u - 1].end;
                                r[e].start - d < s ? r[e].end > d && (t[u - 1].end = r[e].end) : t.push(r[e])
                            } else t.push(r[e])
                        }
                        for (e = 0, o = 0, l = a = i; e < t.length; e++) {
                            var n = t[e].start, h = t[e].end;
                            if (i + s >= n && h > i)l = n, a = h, o = a - i; else if (n > i + s) {
                                f = n;
                                break
                            }
                        }
                        return {len: o, start: l, end: a, nextStart: f}
                    }
                }]), e
            }();
            e.default = i
        }, {}], 29: [function (r, s, t) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), e = r(43), n = function () {
                function t() {
                    i(this, t)
                }

                return a(t, null, [{
                    key: "mergeDetails", value: function (o, i) {
                        var a, c = Math.max(o.startSN, i.startSN) - i.startSN, f = Math.min(o.endSN, i.endSN) - i.startSN, u = i.startSN - o.startSN, h = o.fragments, l = i.fragments, d = 0;
                        if (c > f)return void(i.PTSKnown = !1);
                        for (var r = c; f >= r; r++) {
                            var s = h[u + r], n = l[r];
                            n && s && (d = s.cc - n.cc, isNaN(s.startPTS) || (n.start = n.startPTS = s.startPTS, n.endPTS = s.endPTS, n.duration = s.duration, a = n))
                        }
                        if (d)for (e.logger.log("discontinuity sliding from playlist, take drift into account"), r = 0; r < l.length; r++)l[r].cc += d;
                        if (a)t.updateFragPTSDTS(i, a.sn, a.startPTS, a.endPTS, a.startDTS, a.endDTS); else if (u >= 0 && u < h.length) {
                            var v = h[u].start;
                            for (r = 0; r < l.length; r++)l[r].start += v
                        }
                        i.PTSKnown = o.PTSKnown
                    }
                }, {
                    key: "updateFragPTSDTS", value: function (a, l, i, s, d, u) {
                        var o, n, e, r;
                        if (l < a.startSN || l > a.endSN)return 0;
                        if (o = l - a.startSN, n = a.fragments, e = n[o], !isNaN(e.startPTS)) {
                            var h = Math.abs(e.startPTS - i);
                            isNaN(e.deltaPTS) ? e.deltaPTS = h : e.deltaPTS = Math.max(h, e.deltaPTS), i = Math.min(i, e.startPTS), s = Math.max(s, e.endPTS), d = Math.min(d, e.startDTS), u = Math.max(u, e.endDTS)
                        }
                        var f = i - e.start;
                        for (e.start = e.startPTS = i, e.endPTS = s, e.startDTS = d, e.endDTS = u, e.duration = s - i, r = o; r > 0; r--)t.updatePTS(n, r, r - 1);
                        for (r = o; r < n.length - 1; r++)t.updatePTS(n, r, r + 1);
                        return a.PTSKnown = !0, f
                    }
                }, {
                    key: "updatePTS", value: function (s, i, a) {
                        var t = s[i], r = s[a], n = r.startPTS;
                        isNaN(n) ? a > i ? r.start = t.start + t.duration : r.start = t.start - r.duration : a > i ? (t.duration = n - t.start, t.duration < 0 && e.logger.error("negative duration computed for frag " + t.sn + ",level " + t.level + ", there should be some duration drift between playlist and fragment!")) : (r.duration = t.start - n, r.duration < 0 && e.logger.error("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!"))
                    }
                }]), t
            }();
            t.default = n
        }, {43: 43}], 30: [function (e, B, a) {
            "use strict";
            function t(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(a, "__esModule", {value: !0});
            var n = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), P = e(26), i = t(P), s = e(24), u = e(34), d = t(u), h = e(32), f = t(h), c = e(3), v = t(c), g = e(6), p = t(g), y = e(7), m = t(y), E = e(4), G = t(E), R = e(11), k = t(R), _ = e(10), T = t(_), A = e(12), S = t(A), L = e(9), D = t(L), O = e(5), w = t(O), r = e(43), I = e(47), C = t(I), M = e(1), N = t(M), x = e(33), F = t(x), U = e(41), b = t(U), l = function () {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    o(this, e);
                    var n = e.DefaultConfig;
                    if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    for (var a in n)a in t || (t[a] = n[a]);
                    if (void 0 !== t.liveMaxLatencyDurationCount && t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (void 0 !== t.liveMaxLatencyDuration && (t.liveMaxLatencyDuration <= t.liveSyncDuration || void 0 === t.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    (0, r.enableLogs)(t.debug), this.config = t;
                    var i = this.observer = new N.default;
                    i.trigger = function (r) {
                        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), e = 1; t > e; e++)a[e - 1] = arguments[e];
                        i.emit.apply(i, [r, r].concat(a))
                    }, i.off = function (a) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; t > e; e++)r[e - 1] = arguments[e];
                        i.removeListener.apply(i, [a].concat(r))
                    }, this.on = i.on.bind(i), this.off = i.off.bind(i), this.trigger = i.trigger.bind(i), this.playlistLoader = new d.default(this), this.fragmentLoader = new f.default(this), this.levelController = new T.default(this), this.abrController = new t.abrController(this), this.bufferController = new t.bufferController(this), this.capLevelController = new t.capLevelController(this), this.fpsController = new t.fpsController(this), this.streamController = new t.streamController(this), this.audioStreamController = new t.audioStreamController(this), this.timelineController = new t.timelineController(this), this.audioTrackController = new w.default(this), this.keyLoader = new F.default(this)
                }

                return n(e, null, [{
                    key: "isSupported", value: function () {
                        return window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                    }
                }, {
                    key: "version", get: function () {
                        return "0.6.6"
                    }
                }, {
                    key: "Events", get: function () {
                        return i.default
                    }
                }, {
                    key: "ErrorTypes", get: function () {
                        return s.ErrorTypes
                    }
                }, {
                    key: "ErrorDetails", get: function () {
                        return s.ErrorDetails
                    }
                }, {
                    key: "DefaultConfig", get: function () {
                        return e.defaultConfig || (e.defaultConfig = {
                            autoStartLoad: !0,
                            startPosition: -1,
                            defaultAudioCodec: void 0,
                            debug: !1,
                            capLevelOnFPSDrop: !1,
                            capLevelToPlayerSize: !1,
                            maxBufferLength: 30,
                            maxBufferSize: 6e7,
                            maxBufferHole: .5,
                            maxSeekHole: 2,
                            seekHoleNudgeDuration: .01,
                            stalledInBufferedNudgeThreshold: 10,
                            maxFragLookUpTolerance: .2,
                            liveSyncDurationCount: 3,
                            liveMaxLatencyDurationCount: 1 / 0,
                            liveSyncDuration: void 0,
                            liveMaxLatencyDuration: void 0,
                            maxMaxBufferLength: 600,
                            enableWorker: !0,
                            enableSoftwareAES: !0,
                            manifestLoadingTimeOut: 1e4,
                            manifestLoadingMaxRetry: 1,
                            manifestLoadingRetryDelay: 1e3,
                            manifestLoadingMaxRetryTimeout: 64e3,
                            startLevel: void 0,
                            levelLoadingTimeOut: 1e4,
                            levelLoadingMaxRetry: 4,
                            levelLoadingRetryDelay: 1e3,
                            levelLoadingMaxRetryTimeout: 64e3,
                            fragLoadingTimeOut: 2e4,
                            fragLoadingMaxRetry: 6,
                            fragLoadingRetryDelay: 1e3,
                            fragLoadingMaxRetryTimeout: 64e3,
                            fragLoadingLoopThreshold: 3,
                            startFragPrefetch: !1,
                            fpsDroppedMonitoringPeriod: 5e3,
                            fpsDroppedMonitoringThreshold: .2,
                            appendErrorMaxRetry: 3,
                            loader: C.default,
                            fLoader: void 0,
                            pLoader: void 0,
                            xhrSetup: void 0,
                            fetchSetup: void 0,
                            abrController: v.default,
                            bufferController: p.default,
                            capLevelController: m.default,
                            fpsController: D.default,
                            streamController: k.default,
                            audioStreamController: G.default,
                            timelineController: S.default,
                            cueHandler: b.default,
                            enableCEA708Captions: !0,
                            enableMP2TPassThrough: !1,
                            stretchShortVideoTrack: !1,
                            forceKeyFrameOnDiscontinuity: !0,
                            abrEwmaFastLive: 5,
                            abrEwmaSlowLive: 9,
                            abrEwmaFastVoD: 4,
                            abrEwmaSlowVoD: 15,
                            abrEwmaDefaultEstimate: 5e5,
                            abrBandWidthFactor: .8,
                            abrBandWidthUpFactor: .7,
                            maxStarvationDelay: 4
                        }), e.defaultConfig
                    }, set: function (t) {
                        e.defaultConfig = t
                    }
                }]), n(e, [{
                    key: "destroy", value: function () {
                        r.logger.log("destroy"), this.trigger(i.default.DESTROYING), this.detachMedia(), this.playlistLoader.destroy(), this.fragmentLoader.destroy(), this.levelController.destroy(), this.abrController.destroy(), this.bufferController.destroy(), this.capLevelController.destroy(), this.fpsController.destroy(), this.streamController.destroy(), this.audioStreamController.destroy(), this.timelineController.destroy(), this.audioTrackController.destroy(), this.keyLoader.destroy(), this.url = null, this.observer.removeAllListeners()
                    }
                }, {
                    key: "attachMedia", value: function (e) {
                        r.logger.log("attachMedia"), this.media = e, this.trigger(i.default.MEDIA_ATTACHING, {media: e})
                    }
                }, {
                    key: "detachMedia", value: function () {
                        r.logger.log("detachMedia"), this.trigger(i.default.MEDIA_DETACHING), this.media = null
                    }
                }, {
                    key: "loadSource", value: function (e) {
                        r.logger.log("loadSource:" + e), this.url = e, this.trigger(i.default.MANIFEST_LOADING, {url: e})
                    }
                }, {
                    key: "startLoad", value: function () {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0];
                        r.logger.log("startLoad"), this.levelController.startLoad(), this.streamController.startLoad(e), this.audioStreamController.startLoad(e)
                    }
                }, {
                    key: "stopLoad", value: function () {
                        r.logger.log("stopLoad"), this.levelController.stopLoad(), this.streamController.stopLoad(), this.audioStreamController.stopLoad()
                    }
                }, {
                    key: "swapAudioCodec", value: function () {
                        r.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                    }
                }, {
                    key: "recoverMediaError", value: function () {
                        r.logger.log("recoverMediaError");
                        var e = this.media;
                        this.detachMedia(), this.attachMedia(e)
                    }
                }, {
                    key: "levels", get: function () {
                        return this.levelController.levels
                    }
                }, {
                    key: "currentLevel", get: function () {
                        return this.streamController.currentLevel
                    }, set: function (e) {
                        r.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                    }
                }, {
                    key: "nextLevel", get: function () {
                        return this.streamController.nextLevel
                    }, set: function (e) {
                        r.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                    }
                }, {
                    key: "loadLevel", get: function () {
                        return this.levelController.level
                    }, set: function (e) {
                        r.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                    }
                }, {
                    key: "nextLoadLevel", get: function () {
                        return this.levelController.nextLoadLevel
                    }, set: function (e) {
                        this.levelController.nextLoadLevel = e
                    }
                }, {
                    key: "firstLevel", get: function () {
                        return this.levelController.firstLevel
                    }, set: function (e) {
                        r.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                    }
                }, {
                    key: "startLevel", get: function () {
                        return this.levelController.startLevel
                    }, set: function (e) {
                        r.logger.log("set startLevel:" + e), this.levelController.startLevel = e
                    }
                }, {
                    key: "autoLevelCapping", get: function () {
                        return this.abrController.autoLevelCapping
                    }, set: function (e) {
                        r.logger.log("set autoLevelCapping:" + e), this.abrController.autoLevelCapping = e
                    }
                }, {
                    key: "autoLevelEnabled", get: function () {
                        return -1 === this.levelController.manualLevel
                    }
                }, {
                    key: "manualLevel", get: function () {
                        return this.levelController.manualLevel
                    }
                }, {
                    key: "audioTracks", get: function () {
                        return this.audioTrackController.audioTracks
                    }
                }, {
                    key: "audioTrack", get: function () {
                        return this.audioTrackController.audioTrack
                    }, set: function (e) {
                        this.audioTrackController.audioTrack = e
                    }
                }, {
                    key: "liveSyncPosition", get: function () {
                        return this.streamController.liveSyncPosition
                    }
                }]), e
            }();
            a.default = l
        }, {
            1: 1,
            10: 10,
            11: 11,
            12: 12,
            24: 24,
            26: 26,
            3: 3,
            32: 32,
            33: 33,
            34: 34,
            4: 4,
            41: 41,
            43: 43,
            47: 47,
            5: 5,
            6: 6,
            7: 7,
            9: 9
        }], 31: [function (e, t, r) {
            "use strict";
            t.exports = e(30).default
        }, {30: 30}], 32: [function (t, v, i) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function h(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var c = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = t(26), e = a(l), d = t(25), n = a(d), r = t(24), o = t(43), u = function (i) {
                function t(i) {
                    h(this, t);
                    var r = f(this, Object.getPrototypeOf(t).call(this, i, e.default.FRAG_LOADING));
                    return r.loaders = {}, r
                }

                return s(t, i), c(t, [{
                    key: "destroy", value: function () {
                        for (var t in this.loaders) {
                            var e = this.loaders[t];
                            e && e.destroy()
                        }
                        this.loaders = {}, n.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onFragLoading", value: function (d) {
                        var e = d.frag, a = e.type, r = this.loaders[a], t = this.hls.config;
                        e.loaded = 0, r && (o.logger.warn("abort previous fragment loader for type:" + a), r.abort()), r = this.loaders[a] = e.loader = "undefined" != typeof t.fLoader ? new t.fLoader(t) : new t.loader(t);
                        var i = void 0, n = void 0, s = void 0;
                        i = {url: e.url, frag: e, responseType: "arraybuffer", progressData: !1};
                        var l = e.byteRangeStartOffset, u = e.byteRangeEndOffset;
                        isNaN(l) || isNaN(u) || (i.rangeStart = l, i.rangeEnd = u), n = {
                            timeout: t.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: t.fragLoadingMaxRetryTimeout
                        }, s = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this),
                            onProgress: this.loadprogress.bind(this)
                        }, r.load(i, n, s)
                    }
                }, {
                    key: "loadsuccess", value: function (r, i, a) {
                        var n = r.data, t = a.frag;
                        t.loader = void 0, this.loaders[t.type] = void 0, this.hls.trigger(e.default.FRAG_LOADED, {
                            payload: n,
                            frag: t,
                            stats: i
                        })
                    }
                }, {
                    key: "loaderror", value: function (a, t) {
                        var i = t.loader;
                        i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(e.default.ERROR, {
                            type: r.ErrorTypes.NETWORK_ERROR,
                            details: r.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t.frag,
                            response: a
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (a, t) {
                        var i = t.loader;
                        i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(e.default.ERROR, {
                            type: r.ErrorTypes.NETWORK_ERROR,
                            details: r.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t.frag
                        })
                    }
                }, {
                    key: "loadprogress", value: function (t, i, a) {
                        var r = i.frag;
                        r.loaded = t.loaded, this.hls.trigger(e.default.FRAG_LOAD_PROGRESS, {frag: r, stats: t})
                    }
                }]), t
            }(n.default);
            i.default = u
        }, {24: 24, 25: 25, 26: 26, 43: 43}], 33: [function (t, v, i) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function h(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var c = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), l = t(26), e = a(l), d = t(25), n = a(d), r = t(24), o = t(43), u = function (i) {
                function t(i) {
                    h(this, t);
                    var r = f(this, Object.getPrototypeOf(t).call(this, i, e.default.KEY_LOADING));
                    return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r
                }

                return s(t, i), c(t, [{
                    key: "destroy", value: function () {
                        for (var t in this.loaders) {
                            var e = this.loaders[t];
                            e && e.destroy()
                        }
                        this.loaders = {}, n.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onKeyLoading", value: function (h) {
                        var t = h.frag, i = t.type, n = this.loaders[i], s = t.decryptdata, a = s.uri;
                        if (a !== this.decrypturl || null === this.decryptkey) {
                            var r = this.hls.config;
                            n && (o.logger.warn("abort previous fragment loader for type:" + i), n.abort()), t.loader = this.loaders[i] = new r.loader(r), this.decrypturl = a, this.decryptkey = null;
                            var l = void 0, u = void 0, d = void 0;
                            l = {url: a, frag: t, responseType: "arraybuffer"}, u = {
                                timeout: r.fragLoadingTimeOut,
                                maxRetry: r.fragLoadingMaxRetry,
                                retryDelay: r.fragLoadingRetryDelay,
                                maxRetryDelay: r.fragLoadingMaxRetryTimeout
                            }, d = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this)
                            }, t.loader.load(l, u, d)
                        } else this.decryptkey && (s.key = this.decryptkey, this.hls.trigger(e.default.KEY_LOADED, {frag: t}))
                    }
                }, {
                    key: "loadsuccess", value: function (i, a, r) {
                        var t = r.frag;
                        this.decryptkey = t.decryptdata.key = new Uint8Array(i.data), t.loader = void 0, this.loaders[r.type] = void 0, this.hls.trigger(e.default.KEY_LOADED, {frag: t})
                    }
                }, {
                    key: "loaderror", value: function (n, t) {
                        var i = t.frag, a = i.loader;
                        a && a.abort(), this.loaders[t.type] = void 0, this.hls.trigger(e.default.ERROR, {
                            type: r.ErrorTypes.NETWORK_ERROR,
                            details: r.ErrorDetails.KEY_LOAD_ERROR,
                            fatal: !1,
                            frag: i,
                            response: n
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (n, t) {
                        var i = t.frag, a = i.loader;
                        a && a.abort(), this.loaders[t.type] = void 0,
                            this.hls.trigger(e.default.ERROR, {
                                type: r.ErrorTypes.NETWORK_ERROR,
                                details: r.ErrorDetails.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: i
                            })
                    }
                }]), t
            }(n.default);
            i.default = u
        }, {24: 24, 25: 25, 26: 26, 43: 43}], 34: [function (r, m, o) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function h(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function p(t, e) {
                if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            Object.defineProperty(o, "__esModule", {value: !0});
            var f = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), u = r(26), t = i(u), d = r(25), s = i(d), e = r(24), l = r(46), v = i(l), g = r(38), n = i(g), a = r(43), y = function (i) {
                function r(i) {
                    h(this, r);
                    var e = c(this, Object.getPrototypeOf(r).call(this, i, t.default.MANIFEST_LOADING, t.default.LEVEL_LOADING, t.default.AUDIO_TRACK_LOADING));
                    return e.loaders = {}, e
                }

                return p(r, i), f(r, [{
                    key: "destroy", value: function () {
                        for (var t in this.loaders) {
                            var e = this.loaders[t];
                            e && e.destroy()
                        }
                        this.loaders = {}, s.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onManifestLoading", value: function (e) {
                        this.load(e.url, {type: "manifest"})
                    }
                }, {
                    key: "onLevelLoading", value: function (e) {
                        this.load(e.url, {type: "level", level: e.level, id: e.id})
                    }
                }, {
                    key: "onAudioTrackLoading", value: function (e) {
                        this.load(e.url, {type: "audioTrack", id: e.id})
                    }
                }, {
                    key: "load", value: function (l, t) {
                        var n, s, o, i, e = this.hls.config;
                        "manifest" === t.type ? (n = e.manifestLoadingMaxRetry, s = e.manifestLoadingTimeOut, o = e.manifestLoadingRetryDelay, i = e.manifestLoadingMaxRetryTimeOut) : (n = e.levelLoadingMaxRetry, s = e.levelLoadingTimeOut, o = e.levelLoadingRetryDelay, i = e.levelLoadingMaxRetryTimeOut);
                        var r = this.loaders[t.type];
                        if (r) {
                            var u = r.context;
                            if (u && u.url === l)return void a.logger.warn("playlist request ongoing");
                            a.logger.warn("abort previous loader for type:" + t.type), r.abort()
                        }
                        r = this.loaders[t.type] = t.loader = "undefined" != typeof e.pLoader ? new e.pLoader(e) : new e.loader(e), t.url = l, t.responseType = "";
                        var d = void 0, h = void 0;
                        d = {
                            timeout: s,
                            maxRetry: n,
                            retryDelay: o,
                            maxRetryDelay: i
                        }, h = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        }, r.load(t, d, h)
                    }
                }, {
                    key: "resolve", value: function (e, t) {
                        return v.default.buildAbsoluteURL(t, e)
                    }
                }, {
                    key: "parseMasterPlaylist", value: function (h, u) {
                        for (var l = [], i = void 0, d = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g; null != (i = d.exec(h));) {
                            var e = {}, r = e.attrs = new n.default(i[1]);
                            e.url = this.resolve(i[2], u);
                            var s = r.decimalResolution("RESOLUTION");
                            s && (e.width = s.width, e.height = s.height), e.bitrate = r.decimalInteger("AVERAGE-BANDWIDTH") || r.decimalInteger("BANDWIDTH"), e.name = r.NAME;
                            var t = r.CODECS;
                            if (t) {
                                t = t.split(",");
                                for (var o = 0; o < t.length; o++) {
                                    var a = t[o];
                                    -1 !== a.indexOf("avc1") ? e.videoCodec = this.avc1toavcoti(a) : e.audioCodec = a
                                }
                            }
                            l.push(e)
                        }
                        return l
                    }
                }, {
                    key: "parseMasterPlaylistMedia", value: function (s, o, r) {
                        for (var i = void 0, a = [], l = /#EXT-X-MEDIA:(.*)/g; null != (i = l.exec(s));) {
                            var e = {}, t = new n.default(i[1]);
                            t.TYPE === r && (e.groupId = t["GROUP-ID"], e.name = t.NAME, e.type = r, e.default = "YES" === t.DEFAULT, e.autoselect = "YES" === t.AUTOSELECT, e.forced = "YES" === t.FORCED, t.URI && (e.url = this.resolve(t.URI, o)), e.lang = t.LANGUAGE, e.name || (e.name = e.lang), a.push(e))
                        }
                        return a
                    }
                }, {
                    key: "createInitializationVector", value: function (r) {
                        for (var t = new Uint8Array(16), e = 12; 16 > e; e++)t[e] = r >> 8 * (15 - e) & 255;
                        return t
                    }
                }, {
                    key: "fragmentDecryptdataFromLevelkey", value: function (e, r) {
                        var t = e;
                        return e && e.method && e.uri && !e.iv && (t = this.cloneObj(e), t.iv = this.createInitializationVector(r)), t
                    }
                }, {
                    key: "avc1toavcoti", value: function (r) {
                        var e, t = r.split(".");
                        return t.length > 2 ? (e = t.shift() + ".", e += parseInt(t.shift()).toString(16), e += ("000" + parseInt(t.shift()).toString(16)).substr(-4)) : e = r, e
                    }
                }, {
                    key: "cloneObj", value: function (e) {
                        return JSON.parse(JSON.stringify(e))
                    }
                }, {
                    key: "parseLevelPlaylist", value: function (P, f, L, S) {
                        var b, e, _, h = 0, o = 0, t = {
                            type: null,
                            version: null,
                            url: f,
                            fragments: [],
                            live: !0,
                            startSN: 0
                        }, i = {
                            method: null,
                            key: null,
                            iv: null,
                            uri: null
                        }, m = 0, g = null, r = null, l = null, v = null, c = null, u = null, s = [];
                        for (_ = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE):(\d+))|(?:#EXT-X-(TARGETDURATION):(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF):(\d+(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE):(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g; null !== (e = _.exec(P));)switch (e.shift(), e = e.filter(function (e) {
                            return void 0 !== e
                        }), e[0]) {
                            case"PLAYLIST-TYPE":
                                t.type = e[1].toUpperCase();
                                break;
                            case"MEDIA-SEQUENCE":
                                h = t.startSN = parseInt(e[1]);
                                break;
                            case"TARGETDURATION":
                                t.targetduration = parseFloat(e[1]);
                                break;
                            case"VERSION":
                                t.version = parseInt(e[1]);
                                break;
                            case"EXTM3U":
                                break;
                            case"ENDLIST":
                                t.live = !1;
                                break;
                            case"DIS":
                                m++, s.push(e);
                                break;
                            case"BYTERANGE":
                                var p = e[1].split("@");
                                u = 1 === p.length ? c : parseInt(p[1]), c = parseInt(p[0]) + u;
                                break;
                            case"INF":
                                l = parseFloat(e[1]), v = e[2] ? e[2] : null, s.push(e);
                                break;
                            case"":
                                if (!isNaN(l)) {
                                    var k = h++;
                                    b = this.fragmentDecryptdataFromLevelkey(i, k);
                                    var A = e[1] ? this.resolve(e[1], f) : null;
                                    r = {
                                        url: A,
                                        type: S,
                                        duration: l,
                                        title: v,
                                        start: o,
                                        sn: k,
                                        level: L,
                                        cc: m,
                                        decryptdata: b,
                                        programDateTime: g,
                                        tagList: s
                                    }, null !== u && (r.byteRangeStartOffset = u, r.byteRangeEndOffset = c), t.fragments.push(r), o += l, l = null, v = null, u = null, g = null, s = []
                                }
                                break;
                            case"KEY":
                                var T = e[1], y = new n.default(T), d = y.enumeratedString("METHOD"), R = y.URI, D = y.hexadecimalInteger("IV");
                                d && (i = {
                                    method: null,
                                    key: null,
                                    iv: null,
                                    uri: null
                                }, R && "AES-128" === d && (i.method = d, i.uri = this.resolve(R, f), i.key = null, i.iv = D));
                                break;
                            case"START":
                                var O = e[1], w = new n.default(O), E = w.decimalFloatingPoint("TIME-OFFSET");
                                isNaN(E) || (t.startTimeOffset = E);
                                break;
                            case"PROGRAM-DATE-TIME":
                                g = new Date(Date.parse(e[1])), s.push(e);
                                break;
                            case"#":
                                e.shift(), s.push(e);
                                break;
                            default:
                                a.logger.warn("line parsed but not handled: " + e)
                        }
                        return r && !r.url && (t.fragments.pop(), o -= r.duration), t.totalduration = o, t.averagetargetduration = o / t.fragments.length, t.endSN = h - 1, t
                    }
                }, {
                    key: "loadsuccess", value: function (g, i, u) {
                        var s = g.data, r = g.url, c = u.type, f = u.id, v = u.level, n = this.hls;
                        if (this.loaders[c] = void 0, void 0 !== r && 0 !== r.indexOf("data:") || (r = u.url), i.tload = performance.now(), 0 === s.indexOf("#EXTM3U"))if (s.indexOf("#EXTINF:") > 0) {
                            var h = "audioTrack" !== c, l = this.parseLevelPlaylist(s, r, (h ? v : f) || 0, h ? "main" : "audio");
                            l.tload = i.tload, "manifest" === c && n.trigger(t.default.MANIFEST_LOADED, {
                                levels: [{
                                    url: r,
                                    details: l
                                }], url: r, stats: i
                            }), i.tparsed = performance.now(), h ? n.trigger(t.default.LEVEL_LOADED, {
                                details: l,
                                level: v || 0,
                                id: f || 0,
                                stats: i
                            }) : n.trigger(t.default.AUDIO_TRACK_LOADED, {details: l, id: f, stats: i})
                        } else {
                            var o = this.parseMasterPlaylist(s, r);
                            if (o.length) {
                                var d = this.parseMasterPlaylistMedia(s, r, "AUDIO");
                                if (d.length) {
                                    var p = !1;
                                    d.forEach(function (e) {
                                        e.url || (p = !0)
                                    }), p === !1 && o[0].audioCodec && !o[0].attrs.AUDIO && (a.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), d.unshift({
                                        type: "main",
                                        name: "main"
                                    }))
                                }
                                n.trigger(t.default.MANIFEST_LOADED, {levels: o, audioTracks: d, url: r, stats: i})
                            } else n.trigger(t.default.ERROR, {
                                type: e.ErrorTypes.NETWORK_ERROR,
                                details: e.ErrorDetails.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: r,
                                reason: "no level found in manifest"
                            })
                        } else n.trigger(t.default.ERROR, {
                            type: e.ErrorTypes.NETWORK_ERROR,
                            details: e.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: r,
                            reason: "no EXTM3U delimiter"
                        })
                    }
                }, {
                    key: "loaderror", value: function (s, r) {
                        var i, a, n = r.loader;
                        switch (r.type) {
                            case"manifest":
                                i = e.ErrorDetails.MANIFEST_LOAD_ERROR, a = !0;
                                break;
                            case"level":
                                i = e.ErrorDetails.LEVEL_LOAD_ERROR, a = !1;
                                break;
                            case"audioTrack":
                                i = e.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, a = !1
                        }
                        n && (n.abort(), this.loaders[r.type] = void 0), this.hls.trigger(t.default.ERROR, {
                            type: e.ErrorTypes.NETWORK_ERROR,
                            details: i,
                            fatal: a,
                            url: n.url,
                            loader: n,
                            response: s,
                            context: r
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (s, r) {
                        var i, a, n = r.loader;
                        switch (r.type) {
                            case"manifest":
                                i = e.ErrorDetails.MANIFEST_LOAD_TIMEOUT, a = !0;
                                break;
                            case"level":
                                i = e.ErrorDetails.LEVEL_LOAD_TIMEOUT, a = !1;
                                break;
                            case"audioTrack":
                                i = e.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, a = !1
                        }
                        n && (n.abort(), this.loaders[r.type] = void 0), this.hls.trigger(t.default.ERROR, {
                            type: e.ErrorTypes.NETWORK_ERROR,
                            details: i,
                            fatal: a,
                            url: n.url,
                            loader: n,
                            context: r
                        })
                    }
                }]), r
            }(s.default);
            o.default = y
        }, {24: 24, 25: 25, 26: 26, 38: 38, 43: 43, 46: 46}], 35: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e() {
                    t(this, e)
                }

                return r(e, null, [{
                    key: "init", value: function () {
                        e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        };
                        var t;
                        for (t in e.types)e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                        e.HDLR_TYPES = {video: i, audio: a};
                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                        e.STTS = e.STSC = e.STCO = s, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                        var r = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
                        e.FTYP = e.box(e.types.ftyp, r, l, r, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, n))
                    }
                }, {
                    key: "box", value: function (a) {
                        for (var t, i = Array.prototype.slice.call(arguments, 1), e = 8, r = i.length, n = r; r--;)e += i[r].byteLength;
                        for (t = new Uint8Array(e), t[0] = e >> 24 & 255, t[1] = e >> 16 & 255, t[2] = e >> 8 & 255, t[3] = 255 & e, t.set(a, 4), r = 0, e = 8; n > r; r++)t.set(i[r], e), e += i[r].byteLength;
                        return t
                    }
                }, {
                    key: "hdlr", value: function (t) {
                        return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                    }
                }, {
                    key: "mdat", value: function (t) {
                        return e.box(e.types.mdat, t)
                    }
                }, {
                    key: "mdhd", value: function (t, r) {
                        return r *= t, e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0]))
                    }
                }, {
                    key: "mdia", value: function (t) {
                        return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                    }
                }, {
                    key: "mfhd", value: function (t) {
                        return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                    }
                }, {
                    key: "minf", value: function (t) {
                        return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                    }
                }, {
                    key: "moof", value: function (t, r, i) {
                        return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
                    }
                }, {
                    key: "moov", value: function (t) {
                        for (var r = t.length, i = []; r--;)i[r] = e.trak(t[r]);
                        return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
                    }
                }, {
                    key: "mvex", value: function (r) {
                        for (var t = r.length, i = []; t--;)i[t] = e.trex(r[t]);
                        return e.box.apply(null, [e.types.mvex].concat(i))
                    }
                }, {
                    key: "mvhd", value: function (t, r) {
                        r *= t;
                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                        return e.box(e.types.mvhd, i)
                    }
                }, {
                    key: "sdtp", value: function (n) {
                        var r, t, i = n.samples || [], a = new Uint8Array(4 + i.length);
                        for (t = 0; t < i.length; t++)r = i[t].flags, a[t + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                        return e.box(e.types.sdtp, a)
                    }
                }, {
                    key: "stbl", value: function (t) {
                        return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                    }
                }, {
                    key: "avc1", value: function (t) {
                        var r, a, n, i = [], s = [];
                        for (r = 0; r < t.sps.length; r++)a = t.sps[r], n = a.byteLength, i.push(n >>> 8 & 255), i.push(255 & n), i = i.concat(Array.prototype.slice.call(a));
                        for (r = 0; r < t.pps.length; r++)a = t.pps[r], n = a.byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(a));
                        var u = e.box(e.types.avcC, new Uint8Array([1, i[3], i[4], i[5], 255, 224 | t.sps.length].concat(i).concat([t.pps.length]).concat(s))), o = t.width, l = t.height;
                        return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), u, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                    }
                }, {
                    key: "esds", value: function (t) {
                        var e = t.config.length;
                        return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                    }
                }, {
                    key: "mp4a", value: function (t) {
                        var r = t.audiosamplerate;
                        return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
                    }
                }, {
                    key: "stsd", value: function (t) {
                        return "audio" === t.type ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                    }
                }, {
                    key: "tkhd", value: function (t) {
                        var r = t.id, i = t.duration * t.timescale, a = t.width, n = t.height;
                        return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                    }
                }, {
                    key: "traf", value: function (i, t) {
                        var a = e.sdtp(i), r = i.id;
                        return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])), e.trun(i, a.length + 16 + 16 + 8 + 16 + 8 + 8), a)
                    }
                }, {
                    key: "trak", value: function (t) {
                        return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                    }
                }, {
                    key: "trex", value: function (r) {
                        var t = r.id;
                        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                    }
                }, {
                    key: "trun", value: function (f, o) {
                        var i, a, n, s, t, l, d = f.samples || [], r = d.length, h = 12 + 16 * r, u = new Uint8Array(h);
                        for (o += 8 + h, u.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o], 0), i = 0; r > i; i++)a = d[i], n = a.duration, s = a.size, t = a.flags, l = a.cts, u.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, t.isLeading << 2 | t.dependsOn, t.isDependedOn << 6 | t.hasRedundancy << 4 | t.paddingValue << 1 | t.isNonSync, 61440 & t.degradPrio, 15 & t.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                        return e.box(e.types.trun, u)
                    }
                }, {
                    key: "initSegment", value: function (i) {
                        e.types || e.init();
                        var t, r = e.moov(i);
                        return t = new Uint8Array(e.FTYP.byteLength + r.byteLength), t.set(e.FTYP), t.set(r, e.FTYP.byteLength), t
                    }
                }]), e
            }();
            e.default = i
        }, {}], 36: [function (r, v, s) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function h(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(s, "__esModule", {value: !0});
            var l = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), u = r(27), a = n(u), d = r(26), t = n(d), e = r(43), f = r(35), i = n(f), o = r(24);
            r(44);
            var c = function () {
                function r(e, t, i) {
                    h(this, r), this.observer = e, this.id = t, this.config = i, this.ISGenerated = !1, this.PES2MP4SCALEFACTOR = 4, this.PES_TIMESCALE = 9e4, this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR
                }

                return l(r, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                        this._initPTS = this._initDTS = void 0
                    }
                }, {
                    key: "switchLevel", value: function () {
                        this.ISGenerated = !1
                    }
                }, {
                    key: "remux", value: function (f, d, r, i, l, o, e, a, h) {
                        if (this.level = f, this.sn = d, this.ISGenerated || this.generateIS(r, i, e), this.ISGenerated)if (r.samples.length) {
                            var n = this.remuxAudio(r, e, a, h);
                            if (i.samples.length) {
                                var u = void 0;
                                n && (u = n.endPTS - n.startPTS), this.remuxVideo(i, e, a, u)
                            }
                        } else {
                            var s = void 0;
                            i.samples.length && (s = this.remuxVideo(i, e, a)), s && r.codec && this.remuxEmptyAudio(r, e, a, s)
                        }
                        l.samples.length && this.remuxID3(l, e), o.samples.length && this.remuxText(o, e), this.observer.trigger(t.default.FRAG_PARSED, {
                            id: this.id,
                            level: this.level,
                            sn: this.sn
                        })
                    }
                }, {
                    key: "generateIS", value: function (r, a, f) {
                        var n, s, c = this.observer, v = r.samples, d = a.samples, h = this.PES_TIMESCALE, l = {}, g = {
                            id: this.id,
                            level: this.level,
                            sn: this.sn,
                            tracks: l,
                            unique: !1
                        }, u = void 0 === this._initPTS;
                        u && (n = s = 1 / 0), r.config && v.length && (r.timescale = r.audiosamplerate, r.timescale * r.duration > Math.pow(2, 32) && !function () {
                            var e = function r(t, e) {
                                return e ? r(e, t % e) : t
                            };
                            r.timescale = r.audiosamplerate / e(r.audiosamplerate, 1024)
                        }(), e.logger.log("audio mp4 timescale :" + r.timescale), l.audio = {
                            container: "audio/mp4",
                            codec: r.codec,
                            initSegment: i.default.initSegment([r]),
                            metadata: {channelCount: r.channelCount}
                        }, u && (n = s = v[0].pts - h * f)), a.sps && a.pps && d.length && (a.timescale = this.MP4_TIMESCALE, l.video = {
                            container: "video/mp4",
                            codec: a.codec,
                            initSegment: i.default.initSegment([a]),
                            metadata: {width: a.width, height: a.height}
                        }, u && (n = Math.min(n, d[0].pts - h * f), s = Math.min(s, d[0].dts - h * f))), Object.keys(l).length ? (c.trigger(t.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, u && (this._initPTS = n, this._initDTS = s)) : c.trigger(t.default.ERROR, {
                            type: o.ErrorTypes.MEDIA_ERROR,
                            id: this.id,
                            details: o.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "no audio/video samples found"
                        })
                    }
                }, {
                    key: "remuxVideo", value: function (s, H, I, P) {
                        var a, g, N, f, l, V, k, E, m = 8, v = this.PES_TIMESCALE, n = this.PES2MP4SCALEFACTOR, r = s.samples, p = [], L = r.reduce(function (t, e) {
                            return Math.max(Math.min(t, e.pts - e.dts), -18e3)
                        }, 0);
                        if (0 > L) {
                            e.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(L / 90) + " ms to overcome this issue");
                            for (var A = 0; A < r.length; A++)r[A].dts += L
                        }
                        var d = void 0;
                        d = I ? this.nextAvcDts : H * v;
                        var y = r[0];
                        l = Math.max(this._PTSNormalize(y.dts - this._initDTS, d), 0), f = Math.max(this._PTSNormalize(y.pts - this._initDTS, d), 0);
                        var c = Math.round((l - d) / 90);
                        I && c && (c > 1 ? e.logger.log("AVC:" + c + " ms hole between fragments detected,filling it") : -1 > c && e.logger.log("AVC:" + -c + " ms overlapping between fragments detected"), l = d, r[0].dts = l + this._initDTS, f = Math.max(f - c, d), r[0].pts = f + this._initDTS, e.logger.log("Video/PTS/DTS adjusted: " + Math.round(f / 90) + "/" + Math.round(l / 90) + ",delta:" + c + " ms")), V = l, y = r[r.length - 1], E = Math.max(this._PTSNormalize(y.dts - this._initDTS, d), 0), k = Math.max(this._PTSNormalize(y.pts - this._initDTS, d), 0), k = Math.max(k, E);
                        var w = navigator.vendor, M = navigator.userAgent, O = w && w.indexOf("Apple") > -1 && M && !M.match("CriOS");
                        O && (a = Math.round((E - l) / (n * (r.length - 1))));
                        for (var _ = 0; _ < r.length; _++) {
                            var u = r[_];
                            O ? u.dts = l + _ * n * a : (u.dts = Math.max(this._PTSNormalize(u.dts - this._initDTS, d), l), u.dts = Math.round(u.dts / n) * n), u.pts = Math.max(this._PTSNormalize(u.pts - this._initDTS, d), u.dts), u.pts = Math.round(u.pts / n) * n
                        }
                        g = new Uint8Array(s.len + 4 * s.nbNalu + 8);
                        var U = new DataView(g.buffer);
                        U.setUint32(0, g.byteLength), g.set(i.default.types.mdat, 4);
                        for (var h = 0; h < r.length; h++) {
                            for (var o = r[h], C = 0, S = void 0; o.units.units.length;) {
                                var R = o.units.units.shift();
                                U.setUint32(m, R.data.byteLength), m += 4, g.set(R.data, m), m += R.data.byteLength, C += 4 + R.data.byteLength
                            }
                            if (O)S = Math.max(0, a * Math.round((o.pts - o.dts) / (n * a))); else {
                                if (h < r.length - 1)a = r[h + 1].dts - o.dts; else {
                                    var D = this.config, b = o.dts - r[h > 0 ? h - 1 : h].dts;
                                    if (D.stretchShortVideoTrack) {
                                        var G = D.maxBufferHole, B = D.maxSeekHole, j = Math.floor(Math.min(G, B) * v), T = (P ? f + P * v : this.nextAacPts) - o.pts;
                                        T > j ? (a = T - b, 0 > a && (a = b), e.logger.log("It is approximately " + T / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = b
                                    } else a = b
                                }
                                a /= n, S = Math.round((o.pts - o.dts) / n)
                            }
                            p.push({
                                size: C,
                                duration: a,
                                cts: S,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: o.key ? 2 : 1,
                                    isNonSync: o.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = E + a * n;
                        var K = s.dropped;
                        if (s.len = 0, s.nbNalu = 0, s.dropped = 0, p.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var x = p[0].flags;
                            x.dependsOn = 2, x.isNonSync = 0
                        }
                        s.samples = p, N = i.default.moof(s.sequenceNumber++, l / n, s), s.samples = [];
                        var F = {
                            id: this.id,
                            level: this.level,
                            sn: this.sn,
                            data1: N,
                            data2: g,
                            startPTS: f / v,
                            endPTS: (k + n * a) / v,
                            startDTS: l / v,
                            endDTS: this.nextAvcDts / v,
                            type: "video",
                            nb: p.length,
                            dropped: K
                        };
                        return this.observer.trigger(t.default.FRAG_PARSING_DATA, F), F
                    }
                }, {
                    key: "remuxAudio", value: function (r, M, O, K) {
                        var N, S, E, p, g, x, G, C, k, P, I, c, v, n, y, f = this.PES_TIMESCALE, V = r.timescale, R = f / V, H = 1024 * r.timescale / r.audiosamplerate, A = 8, b = [], u = [];
                        r.samples.sort(function (e, t) {
                            return e.pts - t.pts
                        }), u = r.samples, O |= u.length && this.nextAacPts && Math.abs(M - this.nextAacPts / f) < .1;
                        var d = O ? this.nextAacPts : M * f, s = H * R, h = d;
                        if (K)for (var l = 0; l < u.length;) {
                            var o = u[l], j = this._PTSNormalize(o.pts - this._initDTS, d), m = j - h;
                            if (-s >= m)e.logger.warn("Dropping 1 audio frame @ " + Math.round(h / 90) / 1e3 + "s due to " + Math.round(Math.abs(m / 90)) + " ms overlap."), u.splice(l, 1), r.len -= o.unit.length; else if (m >= s) {
                                var F = Math.round(m / s);
                                e.logger.warn("Injecting " + F + " audio frame @ " + Math.round(h / 90) / 1e3 + "s due to " + Math.round(m / 90) + " ms gap.");
                                for (var U = 0; F > U; U++)y = h + this._initDTS, y = Math.max(y, this._initDTS), n = a.default.getSilentFrame(r.channelCount), n || (e.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), n = o.unit.slice(0)), u.splice(l, 0, {
                                    unit: n,
                                    pts: y,
                                    dts: y
                                }), r.len += n.length, h += s, l += 1;
                                o.pts = o.dts = h + this._initDTS, h += s, l += 1
                            } else Math.abs(m) > .1 * s, h += s, 0 === l ? o.pts = o.dts = this._initDTS + d : o.pts = o.dts = u[l - 1].pts + s, l += 1
                        }
                        for (; u.length;) {
                            if (S = u.shift(), p = S.unit, P = S.pts - this._initDTS, I = S.dts - this._initDTS, void 0 !== k)c = this._PTSNormalize(P, k), v = this._PTSNormalize(I, k), E.duration = Math.round((v - k) / R); else {
                                c = this._PTSNormalize(P, d), v = this._PTSNormalize(I, d);
                                var T = Math.round(1e3 * (c - d) / f), _ = 0;
                                if (O && T) {
                                    if (T > 0)_ = Math.round((c - d) / s), e.logger.log(T + " ms hole between AAC samples detected,filling it"), _ > 0 && (n = a.default.getSilentFrame(r.channelCount), n || (n = p.slice(0)), r.len += _ * n.length); else if (-12 > T) {
                                        e.logger.log(-T + " ms overlapping between AAC samples detected, drop frame"), r.len -= p.byteLength;
                                        continue
                                    }
                                    c = v = d
                                }
                                if (G = Math.max(0, c), C = Math.max(0, v), !(r.len > 0))return;
                                g = new Uint8Array(r.len + 8), N = new DataView(g.buffer), N.setUint32(0, g.byteLength), g.set(i.default.types.mdat, 4);
                                for (var w = 0; _ > w; w++)y = c - (_ - w) * s, n = a.default.getSilentFrame(r.channelCount), n || (e.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), n = p.slice(0)), g.set(n, A), A += n.byteLength, E = {
                                    size: n.byteLength,
                                    cts: 0,
                                    duration: 1024,
                                    flags: {
                                        isLeading: 0,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradPrio: 0,
                                        dependsOn: 1
                                    }
                                }, b.push(E)
                            }
                            g.set(p, A), A += p.byteLength, E = {
                                size: p.byteLength,
                                cts: 0,
                                duration: 0,
                                flags: {isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1}
                            }, b.push(E), k = v
                        }
                        var D = 0, L = b.length;
                        if (L >= 2 && (D = b[L - 2].duration, E.duration = D), L) {
                            this.nextAacPts = c + R * D, r.len = 0, r.samples = b, x = i.default.moof(r.sequenceNumber++, C / R, r), r.samples = [];
                            var B = {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                data1: x,
                                data2: g,
                                startPTS: G / f,
                                endPTS: this.nextAacPts / f,
                                startDTS: C / f,
                                endDTS: (v + R * D) / f,
                                type: "audio",
                                nb: L
                            };
                            return this.observer.trigger(t.default.FRAG_PARSING_DATA, B), B
                        }
                        return null
                    }
                }, {
                    key: "remuxEmptyAudio", value: function (t, f, p, l) {
                        var i = this.PES_TIMESCALE, g = t.timescale ? t.timescale : t.audiosamplerate, v = i / g, u = l.startDTS * i + this._initDTS, y = l.endDTS * i + this._initDTS, h = 1024, d = v * h, c = Math.ceil((y - u) / d), n = a.default.getSilentFrame(t.channelCount);
                        if (!n)return void e.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                        for (var o = [], r = 0; c > r; r++) {
                            var s = u + r * d;
                            o.push({unit: n.slice(0), pts: s, dts: s}), t.len += n.length
                        }
                        t.samples = o, this.remuxAudio(t, f, p)
                    }
                }, {
                    key: "remuxID3", value: function (r, a) {
                        var e, n = r.samples.length;
                        if (n) {
                            for (var i = 0; n > i; i++)e = r.samples[i], e.pts = (e.pts - this._initPTS) / this.PES_TIMESCALE, e.dts = (e.dts - this._initDTS) / this.PES_TIMESCALE;
                            this.observer.trigger(t.default.FRAG_PARSING_METADATA, {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                samples: r.samples
                            })
                        }
                        r.samples = [], a = a
                    }
                }, {
                    key: "remuxText", value: function (e, a) {
                        e.samples.sort(function (e, t) {
                            return e.pts - t.pts
                        });
                        var r, n = e.samples.length;
                        if (n) {
                            for (var i = 0; n > i; i++)r = e.samples[i], r.pts = (r.pts - this._initPTS) / this.PES_TIMESCALE;
                            this.observer.trigger(t.default.FRAG_PARSING_USERDATA, {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                samples: e.samples
                            })
                        }
                        e.samples = [], a = a
                    }
                }, {
                    key: "_PTSNormalize", value: function (e, t) {
                        var r;
                        if (void 0 === t)return e;
                        for (r = e > t ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;)e += r;
                        return e
                    }
                }, {
                    key: "passthrough", get: function () {
                        return !1
                    }
                }]), r
            }();
            s.default = c
        }, {24: 24, 26: 26, 27: 27, 35: 35, 43: 43, 44: 44}], 37: [function (r, l, e) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var n = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), s = r(26), t = i(s), o = function () {
                function e(t, r) {
                    a(this, e), this.observer = t, this.id = r, this.ISGenerated = !1
                }

                return n(e, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                    }
                }, {
                    key: "switchLevel", value: function () {
                        this.ISGenerated = !1
                    }
                }, {
                    key: "remux", value: function (o, s, h, d, a, u) {
                        var n = this.observer;
                        if (!this.ISGenerated) {
                            var l = {}, i = {id: this.id, tracks: l, unique: !0}, e = s, r = e.codec;
                            r && (i.tracks.video = {
                                container: e.container,
                                codec: r,
                                metadata: {width: e.width, height: e.height}
                            }), e = o, r = e.codec, r && (i.tracks.audio = {
                                container: e.container,
                                codec: r,
                                metadata: {channelCount: e.channelCount}
                            }), this.ISGenerated = !0, n.trigger(t.default.FRAG_PARSING_INIT_SEGMENT, i)
                        }
                        n.trigger(t.default.FRAG_PARSING_DATA, {
                            id: this.id,
                            data1: u,
                            startPTS: a,
                            startDTS: a,
                            type: "audiovideo",
                            nb: 1,
                            dropped: 0
                        })
                    }
                }, {
                    key: "passthrough", get: function () {
                        return !0
                    }
                }]), e
            }();
            e.default = o
        }, {26: 26}], 38: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e(r) {
                    t(this, e), "string" == typeof r && (r = e.parseAttrList(r));
                    for (var i in r)r.hasOwnProperty(i) && (this[i] = r[i])
                }

                return r(e, [{
                    key: "decimalInteger", value: function (t) {
                        var e = parseInt(this[t], 10);
                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                    }
                }, {
                    key: "hexadecimalInteger", value: function (r) {
                        if (this[r]) {
                            var e = (this[r] || "0x").slice(2);
                            e = (1 & e.length ? "0" : "") + e;
                            for (var i = new Uint8Array(e.length / 2), t = 0; t < e.length / 2; t++)i[t] = parseInt(e.slice(2 * t, 2 * t + 2), 16);
                            return i
                        }
                        return null
                    }
                }, {
                    key: "hexadecimalIntegerAsNumber", value: function (t) {
                        var e = parseInt(this[t], 16);
                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                    }
                }, {
                    key: "decimalFloatingPoint", value: function (e) {
                        return parseFloat(this[e])
                    }
                }, {
                    key: "enumeratedString", value: function (e) {
                        return this[e]
                    }
                }, {
                    key: "decimalResolution", value: function (t) {
                        var e = /^(\d+)x(\d+)$/.exec(this[t]);
                        if (null !== e)return {width: parseInt(e[1], 10), height: parseInt(e[2], 10)}
                    }
                }], [{
                    key: "parseAttrList", value: function (a) {
                        for (var t, n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, r = {}; null !== (t = n.exec(a));) {
                            var e = t[2], i = '"';
                            0 === e.indexOf(i) && e.lastIndexOf(i) === e.length - 1 && (e = e.slice(1, -1)), r[t[1]] = e
                        }
                        return r
                    }
                }]), e
            }();
            e.default = i
        }, {}], 39: [function (r, e, i) {
            "use strict";
            var t = {
                search: function (a, s) {
                    for (var t = 0, r = a.length - 1, e = null, i = null; r >= t;) {
                        e = (t + r) / 2 | 0, i = a[e];
                        var n = s(i);
                        if (n > 0)t = e + 1; else {
                            if (!(0 > n))return i;
                            r = e - 1
                        }
                    }
                    return null
                }
            };
            e.exports = t
        }, {}], 40: [function (R, b, o) {
            "use strict";
            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(o, "__esModule", {value: !0});
            var n = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), d = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, u = function (e) {
                var t = e;
                return d.hasOwnProperty(e) && (t = d[e]), String.fromCharCode(t)
            }, t = 15, r = 32, v = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14}, g = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }, f = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14}, E = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }, c = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], e = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                }, time: null, verboseLevel: 0, setTime: function (e) {
                    this.time = e
                }, log: function (e, r) {
                    var t = this.verboseFilter[e];
                    this.verboseLevel >= t
                }
            }, i = function (t) {
                for (var r = [], e = 0; e < t.length; e++)r.push(t[e].toString(16));
                return r
            }, h = function () {
                function e(t, r, i, n, s) {
                    a(this, e), this.foreground = t || "white", this.underline = r || !1, this.italics = i || !1, this.background = n || "black", this.flash = s || !1
                }

                return n(e, [{
                    key: "reset", value: function () {
                        this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                    }
                }, {
                    key: "setStyles", value: function (r) {
                        for (var i = ["foreground", "underline", "italics", "background", "flash"], e = 0; e < i.length; e++) {
                            var t = i[e];
                            r.hasOwnProperty(t) && (this[t] = r[t])
                        }
                    }
                }, {
                    key: "isDefault", value: function () {
                        return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                    }
                }, {
                    key: "equals", value: function (e) {
                        return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                    }
                }, {
                    key: "copy", value: function (e) {
                        this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                    }
                }, {
                    key: "toString", value: function () {
                        return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                    }
                }]), e
            }(), y = function () {
                function e(t, r, i, n, s, o) {
                    a(this, e), this.uchar = t || " ", this.penState = new h(r, i, n, s, o)
                }

                return n(e, [{
                    key: "reset", value: function () {
                        this.uchar = " ", this.penState.reset()
                    }
                }, {
                    key: "setChar", value: function (e, t) {
                        this.uchar = e, this.penState.copy(t)
                    }
                }, {
                    key: "setPenState", value: function (e) {
                        this.penState.copy(e)
                    }
                }, {
                    key: "equals", value: function (e) {
                        return this.uchar === e.uchar && this.penState.equals(e.penState)
                    }
                }, {
                    key: "copy", value: function (e) {
                        this.uchar = e.uchar, this.penState.copy(e.penState)
                    }
                }, {
                    key: "isEmpty", value: function () {
                        return " " === this.uchar && this.penState.isDefault()
                    }
                }]), e
            }(), m = function () {
                function t() {
                    a(this, t), this.chars = [];
                    for (var e = 0; r > e; e++)this.chars.push(new y);
                    this.pos = 0, this.currPenState = new h
                }

                return n(t, [{
                    key: "equals", value: function (i) {
                        for (var t = !0, e = 0; r > e; e++)if (!this.chars[e].equals(i.chars[e])) {
                            t = !1;
                            break
                        }
                        return t
                    }
                }, {
                    key: "copy", value: function (t) {
                        for (var e = 0; r > e; e++)this.chars[e].copy(t.chars[e])
                    }
                }, {
                    key: "isEmpty", value: function () {
                        for (var t = !0, e = 0; r > e; e++)if (!this.chars[e].isEmpty()) {
                            t = !1;
                            break
                        }
                        return t
                    }
                }, {
                    key: "setCursor", value: function (t) {
                        this.pos !== t && (this.pos = t), this.pos < 0 ? (e.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > r && (e.log("ERROR", "Too large cursor position " + this.pos), this.pos = r)
                    }
                }, {
                    key: "moveCursor", value: function (t) {
                        var r = this.pos + t;
                        if (t > 1)for (var e = this.pos + 1; r + 1 > e; e++)this.chars[e].setPenState(this.currPenState);
                        this.setCursor(r)
                    }
                }, {
                    key: "backSpace", value: function () {
                        this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                    }
                }, {
                    key: "insertChar", value: function (t) {
                        t >= 144 && this.backSpace();
                        var i = u(t);
                        return this.pos >= r ? void e.log("ERROR", "Cannot insert " + t.toString(16) + " (" + i + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(i, this.currPenState), void this.moveCursor(1))
                    }
                }, {
                    key: "clearFromPos", value: function (t) {
                        var e;
                        for (e = t; r > e; e++)this.chars[e].reset()
                    }
                }, {
                    key: "clear", value: function () {
                        this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                    }
                }, {
                    key: "clearToEndOfRow", value: function () {
                        this.clearFromPos(this.pos)
                    }
                }, {
                    key: "getTextString", value: function () {
                        for (var t = [], i = !0, e = 0; r > e; e++) {
                            var a = this.chars[e].uchar;
                            " " !== a && (i = !1), t.push(a)
                        }
                        return i ? "" : t.join("")
                    }
                }, {
                    key: "setPenStyles", value: function (e) {
                        this.currPenState.setStyles(e);
                        var t = this.chars[this.pos];
                        t.setPenState(this.currPenState)
                    }
                }]), t
            }(), s = function () {
                function r() {
                    a(this, r), this.rows = [];
                    for (var e = 0; t > e; e++)this.rows.push(new m);
                    this.currRow = t - 1, this.nrRollUpRows = null, this.reset()
                }

                return n(r, [{
                    key: "reset", value: function () {
                        for (var e = 0; t > e; e++)this.rows[e].clear();
                        this.currRow = t - 1
                    }
                }, {
                    key: "equals", value: function (i) {
                        for (var r = !0, e = 0; t > e; e++)if (!this.rows[e].equals(i.rows[e])) {
                            r = !1;
                            break
                        }
                        return r
                    }
                }, {
                    key: "copy", value: function (r) {
                        for (var e = 0; t > e; e++)this.rows[e].copy(r.rows[e])
                    }
                }, {
                    key: "isEmpty", value: function () {
                        for (var r = !0, e = 0; t > e; e++)if (!this.rows[e].isEmpty()) {
                            r = !1;
                            break
                        }
                        return r
                    }
                }, {
                    key: "backSpace", value: function () {
                        var e = this.rows[this.currRow];
                        e.backSpace()
                    }
                }, {
                    key: "clearToEndOfRow", value: function () {
                        var e = this.rows[this.currRow];
                        e.clearToEndOfRow()
                    }
                }, {
                    key: "insertChar", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.insertChar(e)
                    }
                }, {
                    key: "setPen", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.setPenStyles(e)
                    }
                }, {
                    key: "moveCursor", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.moveCursor(e)
                    }
                }, {
                    key: "setCursor", value: function (t) {
                        e.log("INFO", "setCursor: " + t);
                        var r = this.rows[this.currRow];
                        r.setCursor(t)
                    }
                }, {
                    key: "setPAC", value: function (t) {
                        e.log("INFO", "pacData = " + JSON.stringify(t));
                        var r = t.row - 1;
                        this.nrRollUpRows && r < this.nrRollUpRows - 1 && (r = this.nrRollUpRows - 1), this.currRow = r;
                        var i = this.rows[this.currRow];
                        if (null !== t.indent) {
                            var a = t.indent, n = Math.max(a - 1, 0);
                            i.setCursor(t.indent), t.color = i.chars[n].penState.foreground
                        }
                        var s = {
                            foreground: t.color,
                            underline: t.underline,
                            italics: t.italics,
                            background: "black",
                            flash: !1
                        };
                        this.setPen(s)
                    }
                }, {
                    key: "setBkgData", value: function (t) {
                        e.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                    }
                }, {
                    key: "setRollUpRows", value: function (e) {
                        this.nrRollUpRows = e
                    }
                }, {
                    key: "rollUp", value: function () {
                        if (null === this.nrRollUpRows)return void e.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                        e.log("TEXT", this.getDisplayText());
                        var r = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(r, 1)[0];
                        t.clear(), this.rows.splice(this.currRow, 0, t), e.log("INFO", "Rolling up")
                    }
                }, {
                    key: "getDisplayText", value: function (r) {
                        r = r || !1;
                        for (var e = [], n = "", s = -1, i = 0; t > i; i++) {
                            var a = this.rows[i].getTextString();
                            a && (s = i + 1, r ? e.push("Row " + s + ": '" + a + "'") : e.push(a.trim()))
                        }
                        return e.length > 0 && (n = r ? "[" + e.join(" | ") + "]" : e.join("\n")), n
                    }
                }, {
                    key: "getTextAndFormat", value: function () {
                        return this.rows
                    }
                }]), r
            }(), l = function () {
                function r(e, i) {
                    a(this, r), this.chNr = e, this.outputFilter = i, this.mode = null, this.verbose = 0, this.displayedMemory = new s, this.nonDisplayedMemory = new s, this.lastOutputScreen = new s, this.currRollUpRow = this.displayedMemory.rows[t - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }

                return n(r, [{
                    key: "reset", value: function () {
                        this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[t - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                    }
                }, {
                    key: "getHandler", value: function () {
                        return this.outputFilter
                    }
                }, {
                    key: "setHandler", value: function (e) {
                        this.outputFilter = e
                    }
                }, {
                    key: "setPAC", value: function (e) {
                        this.writeScreen.setPAC(e)
                    }
                }, {
                    key: "setBkgData", value: function (e) {
                        this.writeScreen.setBkgData(e)
                    }
                }, {
                    key: "setMode", value: function (t) {
                        t !== this.mode && (this.mode = t, e.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                    }
                }, {
                    key: "insertChars", value: function (r) {
                        for (var t = 0; t < r.length; t++)this.writeScreen.insertChar(r[t]);
                        var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                        e.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (e.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                    }
                }, {
                    key: "ccRCL", value: function () {
                        e.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                    }
                }, {
                    key: "ccBS", value: function () {
                        e.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                    }
                }, {
                    key: "ccAOF", value: function () {
                    }
                }, {
                    key: "ccAON", value: function () {
                    }
                }, {
                    key: "ccDER", value: function () {
                        e.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccRU", value: function (t) {
                        e.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                    }
                }, {
                    key: "ccFON", value: function () {
                        e.log("INFO", "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                    }
                }, {
                    key: "ccRDC", value: function () {
                        e.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                    }
                }, {
                    key: "ccTR", value: function () {
                        e.log("INFO", "TR"), this.setMode("MODE_TEXT")
                    }
                }, {
                    key: "ccRTD", value: function () {
                        e.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                    }
                }, {
                    key: "ccEDM", value: function () {
                        e.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccCR", value: function () {
                        e.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccENM", value: function () {
                        e.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                    }
                }, {
                    key: "ccEOC", value: function () {
                        if (e.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                            var t = this.displayedMemory;
                            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, e.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                        }
                        this.outputDataUpdate()
                    }
                }, {
                    key: "ccTO", value: function (t) {
                        e.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                    }
                }, {
                    key: "ccMIDROW", value: function (r) {
                        var t = {flash: !1};
                        if (t.underline = r % 2 === 1, t.italics = r >= 46, t.italics)t.foreground = "white"; else {
                            var i = Math.floor(r / 2) - 16, a = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                            t.foreground = a[i]
                        }
                        e.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                    }
                }, {
                    key: "outputDataUpdate", value: function () {
                        var t = e.time;
                        null !== t && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(t, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                    }
                }, {
                    key: "cueSplitAtTime", value: function (e) {
                        this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                    }
                }]), r
            }(), p = function () {
                function t(i, e, r) {
                    a(this, t), this.field = i || 1, this.outputs = [e, r], this.channels = [new l(1, e), new l(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                        padding: 0,
                        char: 0,
                        cmd: 0,
                        other: 0
                    }
                }

                return n(t, [{
                    key: "getHandler", value: function (e) {
                        return this.channels[e].getHandler()
                    }
                }, {
                    key: "setHandler", value: function (e, t) {
                        this.channels[e].setHandler(t)
                    }
                }, {
                    key: "addData", value: function (l, s) {
                        var t, r, a, o = !1;
                        this.lastTime = l, e.setTime(l);
                        for (var n = 0; n < s.length; n += 2)if (r = 127 & s[n], a = 127 & s[n + 1], 0 !== r || 0 !== a) {
                            if (e.log("DATA", "[" + i([s[n], s[n + 1]]) + "] -> (" + i([r, a]) + ")"), t = this.parseCmd(r, a), t || (t = this.parseMidrow(r, a)), t || (t = this.parsePAC(r, a)), t || (t = this.parseBackgroundAttributes(r, a)), !t && (o = this.parseChars(r, a)))if (this.currChNr && this.currChNr >= 0) {
                                var u = this.channels[this.currChNr - 1];
                                u.insertChars(o)
                            } else e.log("WARNING", "No channel found yet. TEXT-MODE?");
                            t ? this.dataCounters.cmd += 2 : o ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, e.log("WARNING", "Couldn't parse cleaned data " + i([r, a]) + " orig: " + i([s[n], s[n + 1]])))
                        } else this.dataCounters.padding += 2
                    }
                }, {
                    key: "parseCmd", value: function (a, t) {
                        var n = null, s = (20 === a || 28 === a) && t >= 32 && 47 >= t, o = (23 === a || 31 === a) && t >= 33 && 35 >= t;
                        if (!s && !o)return !1;
                        if (a === this.lastCmdA && t === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, e.log("DEBUG", "Repeated command (" + i([a, t]) + ") is dropped"), !0;
                        n = 20 === a || 23 === a ? 1 : 2;
                        var r = this.channels[n - 1];
                        return 20 === a || 28 === a ? 32 === t ? r.ccRCL() : 33 === t ? r.ccBS() : 34 === t ? r.ccAOF() : 35 === t ? r.ccAON() : 36 === t ? r.ccDER() : 37 === t ? r.ccRU(2) : 38 === t ? r.ccRU(3) : 39 === t ? r.ccRU(4) : 40 === t ? r.ccFON() : 41 === t ? r.ccRDC() : 42 === t ? r.ccTR() : 43 === t ? r.ccRTD() : 44 === t ? r.ccEDM() : 45 === t ? r.ccCR() : 46 === t ? r.ccENM() : 47 === t && r.ccEOC() : r.ccTO(t - 32), this.lastCmdA = a, this.lastCmdB = t, this.currChNr = n, !0
                    }
                }, {
                    key: "parseMidrow", value: function (t, r) {
                        var a = null;
                        if ((17 === t || 25 === t) && r >= 32 && 47 >= r) {
                            if (a = 17 === t ? 1 : 2, a !== this.currChNr)return e.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                            var n = this.channels[a - 1];
                            return n.ccMIDROW(r), e.log("DEBUG", "MIDROW (" + i([t, r]) + ")"), !0
                        }
                        return !1
                    }
                }, {
                    key: "parsePAC", value: function (e, t) {
                        var r = null, i = null, a = (e >= 17 && 23 >= e || e >= 25 && 31 >= e) && t >= 64 && 127 >= t, n = (16 === e || 24 === e) && t >= 64 && 95 >= t;
                        if (!a && !n)return !1;
                        if (e === this.lastCmdA && t === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, !0;
                        r = 23 >= e ? 1 : 2, i = t >= 64 && 95 >= t ? 1 === r ? v[e] : f[e] : 1 === r ? g[e] : E[e];
                        var s = this.interpretPAC(i, t), o = this.channels[r - 1];
                        return o.setPAC(s), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                    }
                }, {
                    key: "interpretPAC", value: function (i, r) {
                        var e = r, t = {color: null, italics: !1, indent: null, underline: !1, row: i};
                        return e = r > 95 ? r - 96 : r - 64, t.underline = 1 === (1 & e), 13 >= e ? t.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(e / 2)] : 15 >= e ? (t.italics = !0, t.color = "white") : t.indent = 4 * Math.floor((e - 16) / 2), t
                    }
                }, {
                    key: "parseChars", value: function (t, r) {
                        var s = null, n = null, a = null;
                        if (t >= 25 ? (s = 2, a = t - 8) : (s = 1, a = t), a >= 17 && 19 >= a) {
                            var o = r;
                            o = 17 === a ? r + 80 : 18 === a ? r + 112 : r + 144, e.log("INFO", "Special char '" + u(o) + "' in channel " + s), n = [o]
                        } else t >= 32 && 127 >= t && (n = 0 === r ? [t] : [t, r]);
                        if (n) {
                            var l = i(n);
                            e.log("DEBUG", "Char codes =  " + l.join(",")), this.lastCmdA = null, this.lastCmdB = null
                        }
                        return n
                    }
                }, {
                    key: "parseBackgroundAttributes", value: function (r, e) {
                        var t, i, a, n, s = (16 === r || 24 === r) && e >= 32 && 47 >= e, o = (23 === r || 31 === r) && e >= 45 && 47 >= e;
                        return s || o ? (t = {}, 16 === r || 24 === r ? (i = Math.floor((e - 32) / 2), t.background = c[i], e % 2 === 1 && (t.background = t.background + "_semi")) : 45 === e ? t.background = "transparent" : (t.foreground = "black", 47 === e && (t.underline = !0)), a = 24 > r ? 1 : 2, n = this.channels[a - 1], n.setBkgData(t), this.lastCmdA = null, this.lastCmdB = null, !0) : !1
                    }
                }, {
                    key: "reset", value: function () {
                        for (var e = 0; e < this.channels.length; e++)this.channels[e] && this.channels[e].reset();
                        this.lastCmdA = null, this.lastCmdB = null
                    }
                }, {
                    key: "cueSplitAtTime", value: function (t) {
                        for (var e = 0; e < this.channels.length; e++)this.channels[e] && this.channels[e].cueSplitAtTime(t)
                    }
                }]), t
            }();
            o.default = p
        }, {}], 41: [function (r, e, i) {
            "use strict";
            var t = {
                newCue: function (h, l, d, o) {
                    for (var i, t, s, r, n, u = window.VTTCue || window.TextTrackCue, e = 0; e < o.rows.length; e++)if (i = o.rows[e], s = !0, r = 0, n = "", !i.isEmpty()) {
                        for (var a = 0; a < i.chars.length; a++)i.chars[a].uchar.match(/\s/) && s ? r++ : (n += i.chars[a].uchar, s = !1);
                        t = new u(l, d, n.trim()), r >= 16 ? r-- : r++, navigator.userAgent.match(/Firefox\//) ? t.line = e + 1 : t.line = e > 7 ? e - 2 : e + 1, t.align = "left", t.position = 100 * (r / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0), h.addCue(t)
                    }
                }
            };
            e.exports = t
        }, {}], 42: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e(r) {
                    t(this, e), this.alpha_ = r ? Math.exp(Math.log(.5) / r) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                }

                return r(e, [{
                    key: "sample", value: function (e, r) {
                        var t = Math.pow(this.alpha_, e);
                        this.estimate_ = r * (1 - t) + t * this.estimate_, this.totalWeight_ += e
                    }
                }, {
                    key: "getTotalWeight", value: function () {
                        return this.totalWeight_
                    }
                }, {
                    key: "getEstimate", value: function () {
                        if (this.alpha_) {
                            var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                            return this.estimate_ / e
                        }
                        return this.estimate_
                    }
                }]), e
            }();
            e.default = i
        }, {}], 43: [function (l, u, r) {
            "use strict";
            function e() {
            }

            function a(t, e) {
                return e = "[" + t + "] > " + e
            }

            function n(t) {
                var r = self.console[t];
                return r ? function () {
                    for (var n = arguments.length, e = Array(n), i = 0; n > i; i++)e[i] = arguments[i];
                    e[0] && (e[0] = a(t, e[0])), r.apply(self.console, e)
                } : e
            }

            function s(r) {
                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), e = 1; i > e; e++)a[e - 1] = arguments[e];
                a.forEach(function (e) {
                    t[e] = r[e] ? r[e].bind(r) : n(e)
                })
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, i = {trace: e, debug: e, log: e, warn: e, info: e, error: e}, t = i;
            r.enableLogs = function (e) {
                if (e === !0 || "object" === ("undefined" == typeof e ? "undefined" : o(e))) {
                    s(e, "debug", "log", "info", "warn", "error");
                    try {
                        t.log()
                    } catch (e) {
                        t = i
                    }
                } else t = i
            }, r.logger = t
        }, {}], 44: [function (e, t, r) {
            "use strict";
            "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (r, t) {
                var i = new Uint8Array(this);
                void 0 === t && (t = i.length);
                for (var a = new ArrayBuffer(t - r), n = new Uint8Array(a), e = 0; e < n.length; e++)n[e] = i[e + r];
                return a
            })
        }, {}], 45: [function (a, n, e) {
            "use strict";
            function t(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), i = function () {
                function e() {
                    t(this, e)
                }

                return r(e, null, [{
                    key: "toString", value: function (t) {
                        for (var r = "", i = t.length, e = 0; i > e; e++)r += "[" + t.start(e) + "," + t.end(e) + "]";
                        return r
                    }
                }]), e
            }();
            e.default = i
        }, {}], 46: [function (r, t, i) {
            "use strict";
            var e = {
                buildAbsoluteURL: function (r, t) {
                    if (t = t.trim(), /^[a-z]+:/i.test(t))return t;
                    var l = null, o = null, n = /^([^#]*)(.*)$/.exec(t);
                    n && (o = n[2], t = n[1]);
                    var s = /^([^\?]*)(.*)$/.exec(t);
                    s && (l = s[2], t = s[1]);
                    var h = /^([^#]*)(.*)$/.exec(r);
                    h && (r = h[1]);
                    var u = /^([^\?]*)(.*)$/.exec(r);
                    u && (r = u[1]);
                    var i = /^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(r);
                    if (!i)throw new Error("Error trying to parse base URL.");
                    var f = i[2] || "", d = i[1] || "", c = i[4], a = null;
                    return a = /^\/\//.test(t) ? f + "//" + e.buildAbsolutePath("", t.substring(2)) : /^\//.test(t) ? d + "/" + e.buildAbsolutePath("", t.substring(1)) : e.buildAbsolutePath(d + c, t), l && (a += l), o && (a += o), a
                }, buildAbsolutePath: function (n, s) {
                    for (var i, e, o = s, a = "", t = n.replace(/[^\/]*$/, o.replace(/(\/|^)(?:\.?\/+)+/g, "$1")), r = 0; e = t.indexOf("/../", r), e > -1; r = e + i)i = /^\/(?:\.\.\/)*/.exec(t.slice(e))[0].length, a = (a + t.substring(r, e)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (i - 1) / 3 + "}$"), "/");
                    return a + t.substr(r)
                }
            };
            t.exports = e
        }, {}], 47: [function (r, s, t) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = function () {
                function e(i, r) {
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                    }
                }

                return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(), e = r(43), n = function () {
                function t(e) {
                    i(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }

                return a(t, [{
                    key: "destroy", value: function () {
                        this.abort(), this.loader = null
                    }
                }, {
                    key: "abort", value: function () {
                        var e = this.loader;
                        e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                    }
                }, {
                    key: "load", value: function (t, e, r) {
                        this.context = t, this.config = e, this.callbacks = r, this.stats = {
                            trequest: performance.now(),
                            retry: 0
                        }, this.retryDelay = e.retryDelay, this.loadInternal()
                    }
                }, {
                    key: "loadInternal", value: function () {
                        var e, t = this.context;
                        e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest, e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.open("GET", t.url, !0), t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.responseType = t.responseType;
                        var r = this.stats;
                        r.tfirst = 0, r.loaded = 0, this.xhrSetup && this.xhrSetup(e, t.url), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                    }
                }, {
                    key: "readystatechange", value: function (u) {
                        var i = u.currentTarget, l = i.readyState, t = this.stats, a = this.context, s = this.config;
                        if (!t.aborted && (window.clearTimeout(this.requestTimeout), l >= 2 && (0 === t.tfirst && (t.tfirst = Math.max(performance.now(), t.trequest), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), s.timeout - (t.tfirst - t.trequest))), 4 === l))) {
                            var r = i.status;
                            if (r >= 200 && 300 > r) {
                                t.tload = Math.max(t.tfirst, performance.now());
                                var n = void 0, o = void 0;
                                "arraybuffer" === a.responseType ? (n = i.response, o = n.byteLength) : (n = i.responseText, o = n.length), t.loaded = t.total = o;
                                var d = {url: i.responseURL, data: n};
                                this.callbacks.onSuccess(d, t, a)
                            } else t.retry >= s.maxRetry || r >= 400 && 499 > r ? (e.logger.error(r + " while loading " + a.url), this.callbacks.onError({
                                code: r,
                                text: i.statusText
                            }, a)) : (e.logger.warn(r + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay), t.retry++)
                        }
                    }
                }, {
                    key: "loadtimeout", value: function () {
                        e.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context)
                    }
                }, {
                    key: "loadprogress", value: function (e) {
                        var t = this.stats;
                        t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
                        var r = this.callbacks.onProgress;
                        r && r(t, this.context, null)
                    }
                }]), t
            }();
            t.default = n
        }, {43: 43}]
    }, {}, [31])(31)
});
