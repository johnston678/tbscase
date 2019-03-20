$.package("mobile/data/qmsqlite.js", [], function(d) {
    var e = QMWin;
    var b = e.T("CREATE TABLE IF NOT EXISTS $table$ ($index$  PRIMARY KEY , $fields$)")
      , c = e.T("DROP TABLE $table$");
    function a(f) {
        this._initData(f)._openDB();
    }
    a.prototype = {
        _initData: function(f) {
            var g = this;
            g._moLog = [];
            g._msDBName = f.sDBName || "QQMail";
            g._msComment = f.sComment || "";
            g._msVerison = f.sVerison || "";
            g._mnDBSize = f.nDBSize || 2;
            return g;
        },
        _openDB: function() {
            var f = this;
            try {
                f._moDB = openDatabase(f._msDBName, f._msVerison, f._msComment, f._mnDBSize * 1024 * 1024);
            } catch (g) {
                log("err:[SQLite][open]::" + g.message);
            }
            f._mbOpened = !!(f._moDB && f._moDB.transaction);
            return f;
        },
        _log: function(f) {
            this._moLog.push(f);
        },
        getLogs: function() {
            return this._moLog;
        },
        isOpened: function() {
            return this._mbOpened;
        },
        transaction: function(f) {
            var g = this;
            g._moDB.transaction(function(h) {
                f(g, h);
            });
            return g;
        },
        exec: function(i, j, h, g, f) {
            return this._execSql.apply(this, arguments);
        },
        createTable: function(i, k, j, h, g, f) {
            return this._execSql(i, b.replace({
                table: k,
                index: j,
                fields: h.join(",")
            }), [], g, f);
        },
        dropTable: function(h, i, g, f) {
            return this._execSql(h, c.replace({
                table: i
            }), [], g, f);
        },
        trans: function() {
            return [];
        },
        transCommit: function(f) {
            var g = this;
            if (f && f.length) {
                g._moDB.transaction(function(h) {
                    e.each(f, function(i) {
                        i(h);
                    });
                });
            }
            return g;
        },
        transExec: function(h, f, g) {
            var j = this
              , i = function(k) {
                j._execSql(k, h, f);
            };
            g ? g.push(i) : j._moDB.transaction(i);
            return j;
        },
        _execSql: function(i, j, h, g, f) {
            var k = this;
            i.executeSql(j, h, function(n, m) {
                g && g(n, m);
                k._log("suc:" + j + ":" + l(h));
            }, function(n, m) {
                f && f(n, m);
                var o = j + ":" + l(h);
                k._log("err:" + o);
                log("err:[SQLite]" + o);
            });
            return k;
            function l(m) {
                var n = [];
                e.each(m, function(o) {
                    n.push(JSON.stringify(o));
                });
                return n.join("|");
            }
        }
    };
    var e = QMWin;
    e.createLib("Mobile.Data.SQLite", {
        bStatic: true
    }, function(f) {
        return ( {
            getSQLite: function(g) {
                var h = new a(g || {});
                if (h && h.isOpened()) {
                    return h;
                }
            }
        }) ;
    });
});
$.package("mobile/data/storage.js", ["mobile/data/qmsqlite.js"], function(c) {
    var g = QMWin
      , h = "0_0_2"
      , f = 30 * 60 * 1000
      , a = ["_idx_", "_parent_", "__proto__"]
      , b = a.join("|");
    var d = function(i) {
        return "DELETE FROM " + i + " WHERE Id=?";
    }
      , e = function(i) {
        return "REPLACE INTO " + i + " (Id, Json, Date, Type) VALUES (?,?," + (new Date()).getTime() + ",?)";
    };
    g.createCtrl("Mobile.Data.Storage", {}, function(i) {
        return ( {
            _transInsert: function(k, l, m, j) {
                var o = this
                  , n = o._moSQLite;
                if (n) {
                    var q = o._msTableName
                      , p = j || n.trans();
                    n.transExec(e(q), [k, l, m], p);
                    if (!j) {
                        o._setTime();
                        n.transCommit(p);
                    }
                }
                return o;
            },
            _transDel: function(k, j) {
                var m = this
                  , l = m._moSQLite;
                if (l) {
                    var o = m._msTableName
                      , n = j || l.trans();
                    l.transExec(d(o), [k], n);
                    if (!j) {
                        m._setTime();
                        l.transCommit(n);
                    }
                }
                return m;
            },
            _setTime: function(j) {
                try {
                    window.localStorage && window.localStorage.setItem("date" + g.uin(), (new Date()).getTime());
                } catch (k) {
                    log("err:[app][storage][localStorage]_setTime::" + k.message);
                }
            },
            _getTime: function() {
                if (window.localStorage) {
                    try {
                        var j = window.localStorage.getItem("date" + g.uin());
                        if (j) {
                            return j;
                        } else {
                            log("err:[app][storage][localStorage]_getTime::data error");
                        }
                    } catch (k) {
                        log("err:[app][storage][localStorage]_getTime::" + k.message);
                    }
                }
            },
            _isOverdue: function() {
                return ( (new Date()).getTime() > (f + parseInt(this._getTime()))) ;
            },
            setFolder: function(j, k) {
                var l = this;
                return l._transInsert("folder0", l._toJSON(j), "Folder", k);
            },
            setIndex: function(l, j, k) {
                var m = this
                  , n = "Index";
                return l.indexOf("search_") == 0 ? m : m._transInsert(n + l, m._toJSON(j), n, k);
            },
            removeIndex: function(k, j) {
                return this._transDel(k, j);
            },
            setIndexStatus: function(j, k) {
                var l = this
                  , n = "IndexStatus"
                  , m = j && j.idx;
                return m.indexOf("search_") == 0 ? l : l._transInsert(n + m, l._toJSON(j), n, k);
            },
            removeIndexStatus: function(k, j) {
                return this._transDel(k, j);
            },
            setMail: function(j, k) {
                var l = this
                  , n = "Mail"
                  , m = j && j.inf && j.inf.id;
                return l._transInsert(n + m, l._toJSON(j), n, k);
            },
            removeMail: function(k, j) {
                return this._transDel(k, j);
            },
            setSetting: function(j) {
                try {
                    window.localStorage && window.localStorage.setItem("setting" + g.uin(), this._toJSON(j));
                    log("suc:[app][storage][localStorage]setSetting::" + g.uin());
                } catch (k) {
                    log("err:[app][storage][localStorage]setSetting::" + g.uin() + "::" + k.message);
                }
            },
            getSetting: function() {
                if (window.localStorage) {
                    try {
                        var j = window.localStorage.getItem("setting" + g.uin());
                        if (j) {
                            log("suc:[app][storage][localStorage]getSetting::" + g.uin());
                            return JSON.parse(j);
                        }
                    } catch (k) {
                        log("err:[app][storage][localStorage]getSetting::" + g.uin() + "::" + k.message);
                    }
                }
            },
            trans: function() {
                var j = this._moSQLite;
                return j ? j.trans() : [];
            },
            transCommit: function(j) {
                var l = this
                  , k = l._moSQLite;
                if (k) {
                    l._setTime();
                    k.transCommit(j);
                }
                return l;
            },
            isImported: function() {
                return this._mbImported;
            },
            getLogs: function() {
                var j = this._moSQLite;
                return j && j.getLogs();
            },
            init_: function(j) {
                var l = this
                  , k = l._moSQLite = g.lib("Mobile.Data.SQLite").getSQLite({
                    sDBName: "QQMail"
                });
                l._moListStorage = {};
                l._moMailStorage = {};
                l._msTableName = ["TCache", h, "_", g.uin()].join("");
                l._moCache = j.oCache;
                if (k) {
                    l._initTable(j.bUseOverdue, function() {
                        log("suc:[app][storage][SQLite]init::" + g.uin());
                        l._ready(j);
                    });
                } else {
                    log("err:[app][storage][SQLite]init::" + g.uin());
                    l._ready(j);
                }
            },
            _ready: function(j) {
                var l = this
                  , k = j.fMailStorageReady;
                k && k(l);
                return l;
            },
            _initTable: function(j, k) {
                var m = this
                  , l = m._moSQLite;
                l && l.transaction(function(n, o) {
                    m._checkTableValid(n, o);
                    n.createTable(o, m._msTableName, "Id", ["Json", "Date", "Type"], function(p) {
                        m._addTable2List(m._msTableName)._loadData(n, p, k, j);
                    });
                });
                return m;
            },
            _checkTableValid: function(j, k) {
                var l = this;
                if (window.localStorage) {
                    var m = window.localStorage.getItem("DatabaseVer")
                      , n = window.localStorage.getItem("TableList");
                    if (h != m) {
                        log("suc:[app][db]update::(" + h + "," + m + ")");
                        if (n) {
                            g.each(n.split("|"), function(o) {
                                o && j.exec(k, "DROP TABLE IF EXISTS " + o, []);
                                log("suc:[app][db]drop::" + o);
                            });
                            window.localStorage.removeItem("TableList");
                        }
                        window.localStorage.setItem("DatabaseVer", h);
                    }
                }
                return l;
            },
            _addTable2List: function(j) {
                if (window.localStorage) {
                    var k = j + "|";
                    _sTableList = window.localStorage.getItem("TableList") || "";
                    if (_sTableList.indexOf(k) == -1) {
                        window.localStorage.setItem("TableList", _sTableList + k);
                    }
                }
                return this;
            },
            _loadData: function(l, m, k, j) {
                var x = this, r = x._moCache, E = ["select * from ", x._msTableName].join(""), w = {}, t = {}, s = {}, u, F, q, v, z, A, n = 0, y = "", D = "", C = "", B = "", o = 0, p = x._isOverdue();
                log("suc:[app][storage][SQLite]_loadData");
                l.exec(m, E, [], function(H, G) {
                    for (var I = 0; I < G.rows.length; I++) {
                        u = G.rows.item(I);
                        F = u["Type"];
                        switch (F) {
                        case "Folder":
                            {
                                (!p || j) && r.setFolderCache(JSON.parse(u["Json"]));
                                break;
                            }
                        case "Mail":
                            {
                                v = JSON.parse(u["Json"]);
                                w[v.inf.id] = v;
                                D += u["Json"];
                                break;
                            }
                        case "Index":
                            {
                                A = u["Id"].replace("Index", "");
                                t[A] = u["Json"].split("|");
                                C += u["Json"];
                                break;
                            }
                        case "IndexStatus":
                            {
                                v = JSON.parse(u["Json"]);
                                z = u["Id"];
                                A = z.replace("IndexStatus", "");
                                s[A] = v;
                                B += u["Json"];
                            }
                        }
                    }
                    x._mbImported = G.rows.length > 0;
                    x._moCache.setMailCache(w);
                    (!p || j) && x._moCache.setIndexCache(t);
                    (!p || j) && x._moCache.setIndexStatus(s);
                    log("suc:[app][storage][SQLite]_loadData finish");
                    k && k();
                }, function() {
                    log("_loadData err");
                });
            },
            _toJSON: function(j) {
                return !j ? "" : (g.isArr(j) ? j.join("|") : JSON.stringify(JSON.jsonFilter(j)));
            },
            printSQLite: function(j) {
                var l = this
                  , k = l._moSQLite
                  , m = ["select * from ", l._msTableName].join("");
                k && k.transaction(function(o, p) {
                    var n = [];
                    o.exec(p, m, [], function(r, q) {
                        for (var s = 0; s < q.rows.length; s++) {
                            n.push(JSON.stringify(q.rows.item(s)));
                        }
                        j && j(n.join("\n"));
                    });
                });
            }
        }) ;
    });
});
$.package("mobile/data/todaymgr.js", ["mobile/data/base.js"], function(b) {
    var c = QMWin
      , d = c.sid();
    var a = {
        "ml_ct": {
            cmd: "concact"
        },
        "ml_cp": {
            cmd: "compose"
        },
        "ml_cp_gp": {
            cmd: "compose,group"
        },
        "ml_fo": {
            cmd: "folder"
        }
    };
    c.createCtrl("Mobile.Data.TodayMgr", {
        sSuper: "Mobile.Data.Base"
    }, function(e) {
        return ( {
            getToday: function() {
                return this._moTodayData;
            },
            getAppGrips: function(g, f, i) {
                var m = this
                  , n = m._moTodayData
                  , h = n.set && n.set.domain
                  , k = []
                  , j = 0;
                if (n) {
                    if (n.fo) {
                        c.each(n.fo.sys.itms, function(s) {
                            var v = s.inf.idx;
                            if (v == "1__") {
                                var t = s.st.urCnt || 0;
                                k.push({
                                    type: "inbox",
                                    name: "\u6536\u4EF6\u7BB1",
                                    cmd: "list,1__",
                                    urCnt: t
                                });
                            }
                            if (v != "1__" && v != "all_star_" && v != "4__" && v != "5__" && v != "6__") {
                                var u = s.st.urCnt;
                                u > 0 && (j += u);
                            }
                        });
                        c.each(n.fo.pop.itms, function(s) {
                            j += (s.st.urCnt || 0);
                        });
                        c.each(n.fo.user.itms, function(s) {
                            j += (s.st.urCnt || 0);
                        });
                        k.push({
                            type: "folder",
                            name: "\u6587\u4EF6\u5939",
                            cmd: "folder",
                            urCnt: j
                        });
                    }
                    {
                        var o = g["nt_all"] && g["nt_all"].url && c.T(g["nt_all"].url, "%").replace({
                            sid: d
                        });
                        k.push({
                            type: "note",
                            name: "\u8BB0\u4E8B\u672C",
                            url: o,
                            urCnt: 0
                        });
                    }
                    if (n.plp) {
                        var p = g["plp_all"] && g["plp_all"].url && c.T(g["plp_all"].url, "%").replace({
                            sid: d
                        });
                        k.push({
                            type: "bottle",
                            name: "\u6F02\u6D41\u74F6",
                            url: p,
                            urCnt: n.plp.st.urCnt || 0
                        });
                    }
                    {
                        var r = g["sms"] && g["sms"].url && c.T(g["sms"].url, "%").replace({
                            sid: d
                        });
                        k.push({
                            type: "sms",
                            name: "\u77ED\u6D88\u606F",
                            url: r,
                            urCnt: n.sms.st.urCnt || 0
                        });
                    }
                    {
                        var q = g["rss"] && g["rss"].url && c.T(g["rss"].url, "%").replace({
                            sid: d,
                            domain: h
                        })
                          , l = n.readers && n.readers.st;
                        k.push({
                            type: "reader",
                            name: "\u9605\u8BFB",
                            urCnt: l ? (l.qzUrCnt + l.feedUrCnt) : 0,
                            url: q
                        });
                    }
                    c.each(f, function(s) {
                        var u = s.i
                          , t = a[u] || g[u];
                        if (i == "appgrids" && s.navhide == 1) {
                            return true;
                        }
                        k.push({
                            type: s.t,
                            name: s.n,
                            urCnt: 0,
                            cmd: t.cmd,
                            url: t.url && c.T(t.url, "%").replace({
                                sid: d,
                                domain: h
                            })
                        });
                    });
                    return k;
                }
            },
            init_: function(f) {
                var g = this.superEx_(e, "init_", [f]);
            },
            update_: function(f) {
                if (f) {
                    var g = this;
                    if (!g._moTodayData) {
                        g._moTodayData = f;
                    } else {
                        var h = g._moTodayData;
                        c.each(f, function(i, j) {
                            h[j] ? (h[j] = c.extend(h[j], i)) : (h[j] = i);
                        });
                    }
                }
            }
        }) ;
    });
});
$.package("mobile/ui/canvasloading.js", [], function(g) {
    var l = $.ctor_()
      , o = QMWin
      , j = l.prototype.html
      , m = l.prototype.remove
      , k = l.prototype.insert
      , n = l.prototype.replaceWith;
    var a = "__cANVAsloAD__"
      , b = "__cANVAsloADIng__"
      , c = "icoClass"
      , f = Math.PI
      , e = 30
      , d = {
        DEF: {
            _sColor: "80,80,80",
            _nSpoke: 10,
            _oStart: [0, 5],
            _oEnd: [0, 10],
            _nRadius: 10,
            _nLineWidth: 1,
            _sLineCap: "round"
        },
        "light": {
            _sColor: "255,255,255",
            _nSpoke: 10,
            _oStart: [0, 5],
            _oEnd: [0, 10],
            _nRadius: 10,
            _nLineWidth: 1,
            _sLineCap: "round"
        },
        "r15": {
            _sColor: "80,80,80",
            _nSpoke: 10,
            _oStart: [0, 8],
            _oEnd: [0, 15],
            _nRadius: 15,
            _nLineWidth: 1,
            _sLineCap: "round"
        }
    };
    function h(p, q) {
        var s = this, r;
        if (!p) {
            return;
        }
        s._init(p, q);
    }
    h.prototype = {
        _init: function(p, q) {
            if (!p[b]) {
                var y = this, x = q, w = p.getContext("2d"), u = x._nRadius, v = x._nSpoke, s = x._nCycle, t = +new Date(), r;
                w.translate(u, u);
                w.lineWidth = x._nLineWidth;
                w.lineCap = x._sLineCap;
                y._draw(w, x, 1 / v);
                p[b] = y;
            }
            return y;
        },
        _destruct: function() {
            var p = this;
            return p;
        },
        _draw: function(p, q, s) {
            var z = this, w = p, y = q, v = y._nSpoke, t = y._nRadius, u = f * 2 * s, A = y._oStart, x = y._oEnd, B = y._sColor, r;
            for (var C = 0; C < v; C++) {
                r = C / v + .3;
                w.rotate(u);
                w.strokeStyle = ["rgba(", B, ",", r, ")"].join("");
                w.beginPath();
                w.moveTo.apply(w, A);
                w.lineTo.apply(w, x);
                w.stroke();
            }
            return z;
        }
    };
    function i(p) {
        p.find("canvas[ico='loading']").each(function(q) {
            if (p.$("body").contain(q) && !q.getAttribute(a)) {
                new h(q,d[q.getAttribute(c) || "DEF"] || d.DEF);
                q.setAttribute(a, 1);
            }
        });
    }
    l.extend("method", (function() {
        return ( {
            html: function(p) {
                var q = this;
                if (p) {
                    j.call(q, p);
                    i(q);
                    return q;
                } else {
                    return j.call(q, p);
                }
            },
            insert: function(p, q) {
                var r = this;
                k.call(r, p, q);
                i(r);
                return r;
            },
            replaceWith: function(p) {
                var q = this;
                q = n.call(q, p);
                i(q);
                return q;
            }
        }) ;
    })());
});
$.package("mobile/ui/mailaddress.js", [], function(b) {
    var a = b
      , c = QMWin;
    QMWin.createLib("Mobile.UI.MailAddr", {
        bStatic: true
    }, function(f) {
        var e = function(h, g) {
            var i = this;
            i.name = h;
            i.addr = g;
        };
        e.prototype.toString = function() {
            var g = this, h = g.addr, i = g.name, j;
            if (h.indexOf("@") > 0) {
                j = ['"', i, '"<', h, '>;'].join("");
            } else {
                j = h + ";";
            }
            return j;
        }
        ;
        var d = function(g) {
            this.init(g);
        };
        d.prototype = {
            init: function(g) {
                var h = this;
                h._moStyle = g.oStyle;
                h._moTmpl = g.oTmpl;
                h._moSelector = g.oSelector;
            },
            convertAddr: function() {
                var j = this
                  , h = j._moSelector.getAddrInput()
                  , l = h.value
                  , g = l.match(/\".*?\"+<.*?>;/gi) || [l];
                for (var o = 0; o < g.length; o++) {
                    var k = g[o]
                      , n = ""
                      , m = "";
                    if (k.match(/@/)) {
                        n = k.match(/\".*\"/) + "",
                        m = k.substring(n.length, k.length).match(/<.*>/) + "";
                        j.addAddress(n.substr(1, n.length - 2), m.substr(1, m.length - 2), true);
                    }
                }
            },
            addAddress: function(j, i, g, h) {
                var n = this
                  , m = n._moSelector.getAddrInput()
                  , l = n._moSelector.getAddrCnt();
                if (this.getAddrItems().join("").indexOf(i) > 0) {
                    m.value = "";
                    return;
                }
                m.style.display = "none";
                var k = c.$("<div>").html(n._moTmpl.getAddrItem(j, i)).data(0).childNodes[0].cloneNode(true);
                l.appendChild(k);
                n.hideEditArea();
                n._setInputWidth();
                m.style.display = "inline-block";
                !h && (m.value = "");
                !g && m.focus();
            },
            delItem: function() {
                var j = this
                  , i = j._moSelected
                  , g = j._moSelector.getAddrItem(i.addr)
                  , h = j._moSelector.getAddrInput();
                h.style.display = "none";
                g.parentNode.removeChild(g);
                j._moSelected = null;
                j.hideEditArea();
                h.style.display = "inline-block";
                j._setInputWidth();
            },
            selectItem: function(h, g) {
                var i = this;
                i._moSelector.getAddrEdit().innerHTML = i._moTmpl.getAddrEdit(h, g);
                i._moSelected = {
                    nick: h,
                    addr: g
                };
            },
            hideEditArea: function() {
                var g = this;
                g._moSelector.getAddrEdit().innerHTML = "";
                g._moSelected = null;
            },
            getAddrItems: function() {
                var j = this
                  , g = j._moSelector.getAddrItems()
                  , h = j._moSelector.getAddrInput();
                _oItems = [];
                for (var k = 0; k < g.length; k++) {
                    _oItems.push(new e((g[k].getAttribute("nick")).replace(/\"/gi, "\\\"").replace(/\'/gi, "\\\'"),g[k].getAttribute("addr")));
                }
                return _oItems;
            },
            _setInputWidth: function() {
                var j = this;
                if (j._moStyle && j._moStyle.getAddrWidth) {
                    var i = j._moSelector.getAddrInput()
                      , g = j._moStyle.getAddrWidth()
                      , h = g - j._moStyle.getAddrsEndPos();
                    if (h > 10 && h != g) {
                        i.style.width = (h + 60) + "px";
                    } else {
                        i.style.width = g + "px";
                    }
                }
            }
        };
        return ( {
            mailaddr: function(g) {
                return new d(g);
            }
        }) ;
    });
});
$.package("mobile/ui/scale.js", [], function(c) {
    var a = c
      , d = QMWin
      , b = {
        S: (function() {
            var e = /^\.([\w-]+)$/;
            var f = /^#([\w-]*)$/;
            var h = /^[\w-]+$/;
            var g = Array.prototype.slice;
            return function(k, i) {
                var j;
                i = i || document;
                return f.test(k) ? ((j = i.getElementById(RegExp.$1)) ? [j] : []) : (i.nodeType !== 1 && i.nodeType !== 9) ? [] : g.call(e.test(k) ? i.getElementsByClassName(RegExp.$1) : h.test(k) ? i.getElementsByTagName(k) : i.querySelectorAll(k));
            }
            ;
        })(),
        each: function(e, g, f) {
            if (!e.forEach) {
                for (var h = 0, j = e.length; h < j; ++h) {
                    g.call(f || e, e[h], h, e);
                }
            } else {
                e.forEach(g, f);
            }
        },
        css: function(e, f, g) {
            if (!g) {
                return ( e.style[f] || getComputedStyle(e, '').getPropertyValue(f)) ;
            } else {
                e.style[f] = g;
            }
        },
        addEvent: function(f, g, e) {
            b.each(g.split(' '), function(h) {
                f.addEventListener(h, e, false);
            });
        },
        animate: function(o, n, k, m) {
            m = m || {};
            var s = true
              , r = function() {}
              , f = m['onComplete'] || r
              , g = m['onStop'] || r;
            var j = 0
              , q = k / 15
              , e = m['anim'] || 'linear';
            e = b.animate.animFunc[e];
            var l, i, h, p = '-webkit-transform', t = false, u = false;
            for (var w in n) {
                var v = w.toLowerCase();
                i = parseFloat(n[w].from);
                h = parseFloat(n[w].to);
                t = t || v.indexOf('translatex') != -1;
                u = u || v.indexOf('translatey') != -1;
                l = {
                    style: v,
                    begin: i,
                    end: h,
                    delta: h - i,
                    postfix: 'px'
                };
            }
            var z = [], B;
            for (j = q; j >= 0; j -= 1) {
                z.push(e(j, l.begin, l.delta, q));
            }
            var A = (function() {
                if (t) {
                    return function(C) {
                        return ["translate3d(", C, "px, 0, 0)"].join("");
                    }
                    ;
                } else if (u) {
                    return function(C) {
                        return ["translate3d(0, ", C, "px, 0)"].join("");
                    }
                    ;
                }
            })();
            var x = (function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(C) {
                    return setTimeout(C, 14);
                }
                ;
            })();
            var y = function() {
                B = z.pop();
                if (typeof B == 'undefined') {
                    s = false;
                    f.call(o);
                    return;
                }
                if (s) {
                    o.style[p] = A(B);
                    x(y);
                }
            };
            y();
            return {
                stop: function() {
                    s = false;
                    g.call(o);
                },
                isPlaying: function() {
                    return s;
                },
                getCurPos: function() {
                    return B;
                }
            };
        }
    };
    b.animate.animFunc = {
        linear: function(h, e, f, g) {
            return f * h / g + e;
        },
        easeIn: function(h, e, f, g) {
            return -f * Math.cos(h / g * (Math.PI / 2)) + f + e;
        },
        easeOut: function(h, e, f, g) {
            return f * Math.sin(h / g * (Math.PI / 2)) + e;
        },
        easeOutQuad: function(h, e, f, g) {
            h /= g;
            return -f * h * (h - 2) + e;
        },
        easeOutCubic: function(h, e, f, g) {
            h /= g;
            h--;
            return f * (h * h * h + 1) + e;
        },
        easeOutQuart: function(h, e, f, g) {
            h /= g;
            h--;
            return -f * (h * h * h * h - 1) + e;
        },
        easeOutExpo: function(h, e, f, g) {
            return (h == g) ? e + f : f * (-Math.pow(2, -10 * h / g) + 1) + e;
        },
        easeInOut: function(h, e, f, g) {
            return -f / 2 * (Math.cos(Math.PI * h / g) - 1) + e;
        }
    };
    QMWin.createLib("Mobile.UI.Scale", {
        bStatic: true
    }, function(h) {
        var E = false, D = false, H = false, ay, au, ax, aw, av, aR = navigator.userAgent.toLowerCase(), C = /android/.test(aR), G = /iphone|ipad/.test(aR), O = /(mi-one)|(mi [1-2])/g.test(aR), i = 0, o = 13, S = 0, A = 0;
        var e = 0.3;
        var R, ae, ad, ac, Z = 0, Y = 0, z = 0, y = 0, aS, aT, k = true, l = true, m = true, B = 1, ab = 1, aK = 1, aP = 0, aQ = 0, aL = 0, aM = 0, an = 0, ao = 0, ap = 0, aq = 0, aj = 0, ak = 0, al = 0, am = 0, t, v, u, w, aA, ai = 0, aa = 0, J = false, I = false, M = false, L = false, aC = 0, K = false, N = false, X = 0, r, s, p, q, ag = 0, ah = 0, P = 0, Q = 0, U, V, aE, aG, ar, at;
        function j(aV) {
            ae = aV.oXMover;
            ad = aV.oWrapper;
            ac = aV.oScaler;
            ac.style.cssText = "";
            y = ac.scrollWidth;
            aT = window.innerWidth;
            if (y > aT) {
                y += o;
            }
            Z = ae.clientWidth;
            B = Math.max(Z / y, e);
            aK = ab = B;
            ac.style.cssText = ["-webkit-transform-origin: 0 0; width:", y - 2 * o, "px; -webkit-transform: scale3d(", B, ",", B, ", 1);"].join("");
            ae.style.cssText = "overflow:hidden;";
            Y = ae.clientHeight;
            ae.style.height = B * Y + 'px';
            D = true;
            aI();
        }
        var aU, af;
        (function() {
            var aV = [];
            aU = function(aW, aX) {
                aV.push(1);
                window.scrollTo(aW, aX);
            }
            ;
            af = function(aW) {
                if (aV.length !== 0) {
                    aV.pop();
                    return;
                }
                aH(0);
                aU(0, 1);
            }
            ;
        })();
        function x() {
            aU(0, 1);
            R.style.WebkitTransform = ["translate3d(0, ", aQ = 0, "px, 0)"].join("");
            ad.style.WebkitTransform = ["translate3d(", aP = 0, "px, 0, 0)"].join("");
        }
        function aI() {
            if (H) {
                return;
            }
            H = true;
            b.addEvent(ae, 'touchstart', function(aV) {
                if (!D) {
                    return;
                }
                if (n()) {
                    return;
                }
                aO(aV);
            });
            b.addEvent(ae, 'touchmove', function(aV) {
                if (!D) {
                    return;
                }
                if (n()) {
                    return;
                }
                if (!N) {
                    aO(aV);
                    return;
                }
                if (aV.touches.length == 2) {
                    if (M || (F(aV.touches[0].pageY) && F(aV.touches[1].pageY))) {
                        aB(aV);
                        aV.preventDefault();
                    } else {
                        aO(aV);
                    }
                } else if (aV.touches.length == 1) {
                    W(aV);
                }
            });
            b.addEvent(ae, 'touchend touchcancel', function(aV) {
                if (!D) {
                    return;
                }
                aN(aV);
            });
        }
        function aO(aV) {
            aQ = document.body.scrollTop;
            console.log("translateY start", aQ);
            if (aV.touches.length == 2) {
                aj = aV.touches.item(0).pageX;
                ak = aV.touches.item(0).clientY;
                al = aV.touches.item(1).pageX;
                am = aV.touches.item(1).clientY;
                t = al - aj;
                v = am - ak;
                an = (al + aj) / 2;
                ap = (am + ak) / 2;
            } else if (aV.touches.length == 1) {
                al = aV.touches.item(0).pageX;
                am = aV.touches.item(0).clientY;
                ag = al;
                ah = am;
                P = al;
                Q = am;
                ai = aV.timeStamp;
            }
            N = true;
        }
        function aB(aV) {
            M = true;
            J = false;
            aj = aV.touches.item(0).pageX;
            ak = aV.touches.item(0).clientY;
            al = aV.touches.item(1).pageX;
            am = aV.touches.item(1).clientY;
            u = al - aj;
            w = am - ak;
            aK = Math.sqrt(Math.pow(u, 2) + Math.pow(w, 2)) / Math.sqrt(Math.pow(t, 2) + Math.pow(v, 2));
            ao = (al + aj) / 2;
            aq = (am + ak) / 2;
            if (document.body.scrollTop == parseInt(aK * (aQ - ae.offsetTop + ap) + ae.offsetTop - aq)) {
                aK *= ab;
                return;
            }
            console.log("scrollTop", document.body.scrollTop);
            console.log("p1:", aj, ak);
            console.log("p2:", al, am);
            aL = aK * (an + aP) - ao;
            console.log("tmpScale", aK, "pty1", ap, "pty2", aq, "offsetTop", ae.offsetTop, "translateY", aQ);
            console.log(parseInt(aK * (aQ - ae.offsetTop + ap) + ae.offsetTop - aq));
            document.body.scrollTop = parseInt(aK * (aQ - ae.offsetTop + ap) + ae.offsetTop - aq);
            aK *= ab;
            console.log("real scale", aK);
            aK = aK >= e ? aK : e;
            if (aK <= e) {
                return;
            }
            ad.style.WebkitTransform = ["translate3d(", -aL, "px, 0, 0)"].join("");
            ac.style.WebkitTransform = ["translate3d(0,0,0) scale3d(", aK, ",", aK, ", 1)"].join("");
            ae.style.height = Math.max(aK * Y, (aK > B ? 1 : aK / B) * S) + 'px';
            console.log("finish setting style");
            console.log("===================");
        }
        function W(aX) {
            var aY = aX.timeStamp;
            if (L && (aY - aC < 500)) {
                return;
            }
            L = false;
            M = false;
            J = true;
            ag = al;
            ah = am;
            al = aX.touches.item(0).pageX;
            am = aX.touches.item(0).pageY;
            if (aY - ai > 300) {
                P = al;
                Q = am;
                ai = aY;
            }
            var aZ = (ab != B) ? ((ab > B) ? (ab / B - 1) * Z : 0) : y * (B != 1 ? B : 1) - aT
              , aV = 0
              , aW = 0;
            console.log("max translateX", aZ, "gScalerWidth", y, "nowScale", ab, "mover width", Z);
            aZ = aZ > 0 ? aZ : 0;
            if ((aP > 0 && aP < aZ) ) {
                aV = ag - al;
            }
            if (ab >= B) {
                if (((ag - al) < 0 && aP > 0) || ((ag - al) > 0 && aP < aZ)) {
                    aV = ag - al;
                }
            }
            aW = ah - am;
            aP += aV;
            aQ = document.body.scrollTop;
            console.log("translateY", aQ);
            ad.style.WebkitTransform = ["translate3d(", -aP, "px, 0, 0)"].join("");
        }
        function aN(aY) {
            N = false;
            if (K) {
                return;
            }
            var aZ = aY.timeStamp, aV, a0 = false, a1 = false, aW = 0, aX = 0;
            if (M) {
                L = true;
                M = false;
                aP = aL;
                aQ = document.body.scrollTop;
                aC = aZ;
                ab = aK;
                az();
            } else if (J) {
                I = true;
                J = false;
                al = aY.changedTouches.item(0).pageX;
                am = aY.changedTouches.item(0).clientY;
                p = al - P;
                q = am - Q;
                aa = aY.timeStamp;
                aV = aa - ai;
                a0 = 300;
                var a2 = (k && ab != B) ? ((ab > B) ? (ab / B - 1) * Z : 0) : y * (B != 1 ? B : 1) - aT
                  , a3 = 40;
                a2 = a2 > 0 ? a2 : 0;
                if ((aP <= 0 && p > 0) || (a2 === 0) || (a2 > 0 && a2 <= aP && p < 0)) {
                    a0 = false;
                }
                if (a0 || a1) {
                    if (a0) {
                        a3 = Math.max(Math.min(Math.abs(p / aV) / 2, 1) * 60, 20);
                        U = T(p, aV, aP + a3, a2 - aP + a3, 0);
                        r = U.dist;
                        aW = Math.max(U.time, 10);
                    }
                    if (a1) {
                        a3 = Math.max(Math.min(Math.abs(q / aV) / 2, 1) * 60, 20);
                        s = V.dist;
                        aX = Math.max(V.time, 10);
                    }
                    if (a0) {
                        aF(aP - r, aW, 'easeOutQuad');
                    }
                    if (a1) {
                        aH(aQ - s, aX, 'easeOutQuad');
                    }
                    if (!a0) {
                        f();
                    }
                    return;
                }
            }
            f();
        }
        function n() {
            aJ();
            if (K) {
                return true;
            }
            return false;
        }
        function aJ() {
            if (aE && aE.isPlaying()) {
                aE.stop();
            }
            if (aG && aG.isPlaying()) {
                aG.stop();
            }
            if (ar && ar.isPlaying()) {
                ar.stop();
            }
            if (at && at.isPlaying()) {
                at.stop();
            }
        }
        function F(aV) {
            return aV > ac.offsetTop && aV < ac.offsetTop + ac.offsetHeight * aK;
        }
        function f(aX) {
            var aV = false
              , aW = (k && ab != B) ? ((ab > B) ? (ab / B - 1) * Z : 0) : y * (B != 1 ? B : 1) - aT
              , aY = aP;
            aW = aW > 0 ? aW : 0;
            if (ab == B) {
                return;
            }
            if (aP < 0 || (k && ab <= B)) {
                aY = 0;
                aV = true;
            }
            if (aW > 0 && aP > aW) {
                aY = aW;
                aV = true;
            }
            if (!aV || (ar && ar.isPlaying())) {
                return;
            }
            aX = aX || 500;
            ar = b.animate(ad, {
                translateX: {
                    from: -aP,
                    to: -aY
                }
            }, aX, {
                onComplete: function() {
                    aP = aY;
                },
                onStop: function() {
                    aP = -ar.getCurPos();
                },
                anim: 'easeOutQuart'
            });
        }
        function g(aY) {
            var aW = false
              , aX = R.offsetHeight - i
              , aV = aX - aS
              , aZ = aQ;
            if (aQ < 0 || ab < B) {
                aZ = 0;
                aW = true;
            }
            if (aX < aS) {
                aZ = 0;
                aW = true;
            }
            if (aV < aQ && aV >= 0) {
                aZ = aV;
                aW = true;
            }
            if (!aW || (at && at.isPlaying())) {
                return;
            }
            aY = aY || 500;
            at = b.animate(R, {
                translateY: {
                    from: -aQ,
                    to: -aZ
                }
            }, aY, {
                onComplete: function() {
                    aQ = aZ;
                },
                onStop: function() {
                    aQ = -at.getCurPos();
                },
                anim: 'easeOutQuart'
            });
        }
        function az() {
            if (ab < B) {
                var aW = R.offsetHeight - i
                  , aV = aW - aS;
                R.className = 'main_container transit';
                ad.style.WebkitTransform = "translate3d(0, 0, 0)";
                if (aQ < 0 || aV < 0) {
                    R.style.WebkitTransform = "translate3d(0, 0, 0)";
                    aQ = 0;
                }
                if (aV < aQ && aV > 0) {
                    aQ = aV;
                    R.style.WebkitTransform = ["translate3d(0,", -aQ, "px, 0)"].join("");
                }
                ac.style.WebkitTransform = ["translate3d(0,0,0) scale3d(", B, ",", B, ", 1)"].join("");
                ae.style.height = Math.max(B * Y, S) + 'px';
                ab = B;
                aP = 0;
                K = true;
                aA = setTimeout(function() {
                    R.className = 'main_container';
                    K = false;
                }, 490);
            }
        }
        function T(aW, a4, aY, aX, a2) {
            var aV = C ? 0.0005 : 0.006
              , a3 = Math.abs(aW) / a4
              , aZ = (a3 * a3) / (2 * aV)
              , a0 = 0
              , a1 = 0;
            if (aW > 0 && aZ > aY) {
                a1 = a2 / (6 / (aZ / a3 * aV));
                aY = aY + a1;
                a3 = a3 * aY / aZ;
                aZ = aY;
            } else if (aW < 0 && aZ > aX) {
                a1 = a2 / (6 / (aZ / a3 * aV));
                aX = aX + a1;
                a3 = a3 * aX / aZ;
                aZ = aX;
            }
            aZ = aZ * (aW < 0 ? -1 : 1);
            a0 = a3 / aV;
            return {
                dist: aZ,
                time: Math.round(a0)
            };
        }
        function aD(aV, aW) {
            aV || aF(aV);
            aW || aH(aW);
        }
        function aF(aW, aX, aV) {
            if (M || K) {
                return;
            }
            aV = aV || 'linear';
            aX = aX || 500;
            aE = b.animate(ad, {
                translateX: {
                    from: -aP,
                    to: -aW
                }
            }, aX, {
                onComplete: function() {
                    aP = aW;
                    f();
                },
                onStop: function() {
                    aP = -aE.getCurPos();
                    f();
                },
                anim: aV
            });
        }
        function aH(aW, aY, aV, aX) {
            if (M || K) {
                return;
            }
            aV = aV || 'linear';
            aY = aY || 500;
            aG = b.animate(R, {
                translateY: {
                    from: -aQ,
                    to: -aW
                }
            }, aY, {
                onComplete: function() {
                    aQ = aW;
                    g();
                    if (typeof aX == 'function') {
                        aX();
                    }
                },
                onStop: function() {
                    aQ = -aG.getCurPos();
                    g();
                },
                anim: aV
            });
        }
        return {
            build: j,
            setEventListeners: aI,
            forceReset: x,
            scrollTo: aD,
            scrollXTo: aF,
            scrollYTo: aH,
            windowScrollTo: aU,
            XRangeOutHandler: f,
            YRangeOutHandler: g,
            scaleBounceHandler: az,
            isBuild: function() {
                return D;
            },
            reset: function() {
                E = false;
                D = false;
                H = false;
            }
        };
    });
});
$.package("mobile/ui/menu.js", [], function(b) {
    var a = b;
    var c = QMWin;
    QMWin.createLib("Mobile.UI.Menu", {
        bStatic: true
    }, function(e) {
        var h = [];
        var g = {
            left: "qm_dropdownMenu_ArrowLeft",
            right: "qm_dropdownMenu_ArrowRight",
            down: "qm_dropdownMenu_ArrowDown"
        };
        var d = c.TE(['<ul class="qm_dropdownMenu $sArrowClass$ $@$if($selectAble$)$@$qm_dropdownMenu_Select$@$endif$@$" id="DropDownMenu_$sId$">', '$@$for($items$)$@$', '<li ', '$@$if($selected$)$@$', 'class="qm_dropdownMenu_Select_curr"', '$@$endif$@$', '>', '<a  idx="$_idx_$" href="', '$@$if($link$)$@$', '$link$', '$@$else$@$', 'javascript:;', '$@$endif$@$', '" class="qm_dropdownMenu_item" item_id="$sId$">$desc$</a>', '</li>', '$@$endfor$@$', '</ul>', '<div class="qm_dropdownMenuGroupMask"></div>']);
        function f(j, i) {
            var k = c.$(".qm_dropdownMenu_item", j);
            k.each(function(m, l) {
                (function(n) {
                    n.addEvent("click", function(o) {
                        var p = n.attr("idx");
                        i.onItemClick && i.onItemClick(o, n.data(0), n.attr("item_id"));
                        j.remove();
                        c.stopPropagation(o);
                    });
                })(c.$(m));
            });
            c.$(".qm_dropdownMenuGroupMask").addEvent("click", function(l) {
                j.remove();
                c.stopPropagation(l);
            });
        }
        return {
            menu: function(i) {
                var m = i.sId;
                var j = i.oContainer$;
                var l = c.$("<div>");
                var k = i.oMenuItem;
                l.insert(d.replace({
                    items: k,
                    sId: i.sId,
                    sArrowClass: i.sArrow ? g[i.sArrow] : "",
                    selectAble: i.bSelectAble
                }), "beforeEnd");
                l.css({
                    display: i.bAutoShow === false ? "none" : ""
                });
                l.addClass("dropdownMenuWrapper");
                j.append(l);
                f(l, i);
                return h[m] = {
                    oContainer$: j,
                    menuDom$: l,
                    isShow: function() {
                        return this.menuDom$.isShow();
                    },
                    show: function() {
                        this.menuDom$.show();
                    },
                    hide: function() {
                        this.menuDom$.hide();
                    },
                    setPosition: function(n, o) {
                        this.menuDom$.css({
                            top: o + "px",
                            left: n + "px"
                        });
                    }
                };
            }
        };
    });
});
$.package("mobile/bu/phone/tmpl/comm.js", ["mobile/ui/canvasloading.js"], function(I) {
    var U = QMWin
      , J = ("ontouchstart"in U.inWin())
      , V = !J ? " " : ['ontouchstart="_t(event,this)" ontouchmove="_t(event,this)" ontouchend="_t(event,this)"'].join("");
    function M(W, Y, X) {
        return ["_e(event,", X || "this", ",'", W, Y ? "," + Y : "", "')"].join("");
    }
    function K(W, X) {
        return ['onblur="', "_e(event,this,'", W, "')", '"'].join("");
    }
    function O(W, X) {
        return ['onfocus="', "_e(event, this,'", W, "')", '"'].join("");
    }
    function P(W, X) {
        return ['onkeydown="', "_e(event, this, '", W, "')", '"'].join("");
    }
    function N(W, X) {
        return [, 'onclick="', M(W, X), '"'].join("");
    }
    function R(W) {
        return ['$@$eval QMWin.lib("Mobile.Phone.TmplLib").time(', W, ')$@$'].join("");
    }
    function L(W, X) {
        return [' onclick="', M(W, X), '" '].join("");
    }
    function Q(W, X) {
        return ['$@$if(!$vw.prefetch$)$@$', L(W, X), '$@$endif$@$'].join("");
    }
    var e = ["mail.qq.com", "\u5176\u5B83\u90AE\u7BB1", "default"]
      , j = ["mail.qq.com", "QQ\u90AE\u7BB1", "qq"]
      , c = ["email.163.com", "\u7F51\u6613\u90AE\u7BB1", "163"]
      , b = ["email.126.com", "\u7F51\u6613\u90AE\u7BB1", "126"]
      , h = ["email.163.com", "\u7F51\u6613\u90AE\u7BB1", "netease"]
      , l = ["mail.sohu.com", "sohu\u90AE\u7BB1", "sohu"]
      , k = ["mail.sina.com", "\u65B0\u6D6A\u90AE\u7BB1", "sina"]
      , d = ["mail.21cn.com", "21CN\u90AE\u7BB1", "21"]
      , f = ["mail.google.com", "gmail\u90AE\u7BB1", "gmail"]
      , g = ["www.live.com", "msn\u90AE\u7BB1", "msn"]
      , i = ["www.outlook.com", "outlook\u90AE\u7BB1", "outlook"]
      , m = ["www.yahoo.com", "yahoo\u90AE\u7BB1", "yahoo"]
      , a = {
        "tencent.com": j,
        "qq.com": j,
        "163.com": c,
        "vip.163.com": c,
        "126.com": b,
        "263.com": h,
        "yeah.net": h,
        "netease.com": c,
        "sohu.com": l,
        "sina.com": k,
        "vip.sina.com": k,
        "21cn.com": d,
        "gmail.com": f,
        "live.com": g,
        "live.cn": g,
        "msn.com": g,
        "hotmail.com": i,
        "outlook.com": i,
        "yahoo.com": m
    };
    function n(W) {
        return W;
    }
    function S(W, X) {
        if (+W < 0 || +X < 0) {
            return "";
        }
        var ac = S._getRule(X)
          , aa = +X * 1000
          , Y = (+W) * 1000
          , Z = aa - Y;
        for (var ag in ac) {
            var ad = ac[ag];
            if (ad.max > Z) {
                var ab = new Date(Y)
                  , ae = ab.getHours() + ""
                  , af = ab.getMinutes() + "";
                ae = ae.length == 1 ? ("0" + ae) : ae;
                af = af.length == 1 ? ("0" + af) : af;
                if (ad.unit != 0) {
                    return ag.replace("nn", Math.floor(Z / ad.unit)).replace("hh", ae).replace("mm", af).replace("MM", ab.getMonth() + 1).replace("dd", ab.getDate());
                } else {
                    return ag.replace("yyyy", ab.getFullYear()).replace("MM", ab.getMonth() + 1).replace("dd", ab.getDate()).replace("hh", ae).replace("mm", af);
                }
            }
        }
    }
    function T(W, X) {
        if (+W < 0 || +X < 0) {
            return "";
        }
        var ac = T._getRule(X)
          , aa = +X * 1000
          , Y = (+W) * 1000
          , Z = aa - Y;
        Z *= -1;
        for (var ag in ac) {
            var ad = ac[ag];
            if (ad.max > Z) {
                var ab = new Date(Y)
                  , ae = ab.getHours() + ""
                  , af = ab.getMinutes() + "";
                ae = ae.length == 1 ? ("0" + ae) : ae;
                af = af.length == 1 ? ("0" + af) : af;
                if (ad.unit != 0) {
                    return ag.replace("nn", Math.floor(Z / ad.unit)).replace("hh", ae).replace("mm", af).replace("MM", ab.getMonth() + 1).replace("dd", ab.getDate());
                } else {
                    return ag.replace("yyyy", ab.getFullYear()).replace("MM", ab.getMonth() + 1).replace("dd", ab.getDate()).replace("hh", ae).replace("mm", af);
                }
            }
        }
    }
    S._oRules = {};
    S._getRule = function(W) {
        if (!S._oRules[W]) {
            var Z = +W * 1000
              , ae = 1000
              , ad = 60
              , ac = 60
              , ab = 24
              , af = 7
              , aa = ae * ad * ac * ab
              , ag = {};
            function X(ai, ah) {
                var aj = new Date(ai);
                aj.setHours(23, 59, 59, 999);
                return ( Z - (aj.getTime() - ah)) ;
            }
            ;function Y(ah) {
                var ai = new Date(ah);
                ai.setFullYear(ai.getFullYear(), 0, 1);
                ai.setUTCHours(-8, 0, 0, 0);
                return ( Z - ai.getTime()) ;
            }
            ;ag[n("\u521A\u521A")] = {
                max: ae * ad,
                unit: ae * ad
            };
            ag["nn" + n("\u5206\u949F\u524D")] = {
                max: ae * ad * ac,
                unit: ae * ad
            };
            ag["nn" + n("\u5C0F\u65F6\u524D")] = {
                max: ae * ad * ac * 6,
                unit: ae * ad * ac
            };
            ag[n("\u4ECA\u5929") + " hh:mm"] = {
                max: X(Z, aa),
                unit: ae * ad * ac * ab
            };
            ag[n("\u6628\u5929") + " hh:mm"] = {
                max: X(Z, aa * 2),
                unit: ae * ad * ac * ab
            };
            ag[n("\u524D\u5929") + " hh:mm"] = {
                max: X(Z, aa * 3),
                unit: ae * ad * ac * ab
            };
            ag["MM" + n("\u6708") + "dd" + n("\u65E5")] = {
                max: Y(Z),
                unit: ae * ad * ac * ab
            };
            ag["yyyy/MM/dd"] = {
                max: Infinity,
                unit: 0
            };
            S._oRules[W] = ag;
        }
        return S._oRules[W];
    }
    ;
    T._oRules = {};
    T._getRule = function(W) {
        if (!S._oRules[W]) {
            var Z = +W * 1000
              , ae = 1000
              , ad = 60
              , ac = 60
              , ab = 24
              , af = 7
              , aa = ae * ad * ac * ab
              , ag = {};
            function X(ai, ah) {
                var aj = new Date(ai);
                aj.setHours(23, 59, 59, 999);
                return ( Z - (aj.getTime() - ah)) ;
            }
            ;function Y(ah) {
                var ai = new Date(ah);
                ai.setFullYear(ai.getFullYear(), 0, 1);
                ai.setUTCHours(-8, 0, 0, 0);
                return ( Z - ai.getTime()) ;
            }
            ;ag[n("\u521A\u521A")] = {
                max: ae * ad,
                unit: ae * ad
            };
            ag["nn" + n("\u5206\u949F\u540E")] = {
                max: ae * ad * ac,
                unit: ae * ad
            };
            ag["nn" + n("\u5C0F\u65F6\u540E")] = {
                max: ae * ad * ac * 6,
                unit: ae * ad * ac
            };
            ag[n("\u4ECA\u5929") + " hh:mm"] = {
                max: X(Z, aa),
                unit: ae * ad * ac * ab
            };
            ag[n("\u660E\u5929") + " hh:mm"] = {
                max: X(Z, aa * 2),
                unit: ae * ad * ac * ab
            };
            ag["MM" + n("\u6708") + "dd" + n("\u65E5")] = {
                max: Y(Z),
                unit: ae * ad * ac * ab
            };
            ag["yyyy/MM/dd"] = {
                max: Infinity,
                unit: 0
            };
            T._oRules[W] = ag;
        }
        return T._oRules[W];
    }
    ;
    var r = N("cmd")
      , x = ['<div class="qm_loading"></div>'].join("")
      , y = ['<div class="qm_loading qm_loading_White"></div>'].join("")
      , w = ['<div class="qm_loadingBlock">', '<div class="qm_loadingBlock_content">', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Yellow"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Red"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Green"></div>', '</div>', '</div>'].join("")
      , t = ['<div class="qm_loadingBlock">', '<div class="qm_loadingBlock_content">', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Yellow"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Red"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Green"></div>', '</div>', '</div>'].join("")
      , u = ['<div class="qm_loadingBlock">', '<div class="qm_loadingBlock_content">', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Yellow"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Red"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Green"></div>', '</div>', '</div>'].join("")
      , v = ['<div class="qm_loadingBlock">', '<div class="qm_loadingBlock_content">', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Yellow"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Red"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Green"></div>', '</div>', '</div>'].join("")
      , G = ['<span class="unread mui_li_sign"><b class="icon icon_sync"></b></span>'].join("")
      , p = ['<a id="refresh"', N("refresh"), 'class="qm_btnIcon"><span class="qm_iconRefreshWrap"></span></a>'].join("")
      , o = ['<span id="refresh" class="qm_refreshing_wrapper"><span class="qm_loading"></span></span>'].join("")
      , F = U.TE(['<span class="qm_tipsAbs_success">$msg$</span>'])
      , E = U.TE(['<span class="qm_tipsAbs_error">$msg$</span>'])
      , C = (['<div class="qm_popPanel_cnt">', '<div un="popContent" class="qm_popPanel_inner">', '<div class="qm_list">', '$@$if($tagLst$!="")$@$', '$@$for($tagLst$)$@$', '<div class="qm_list_item folderlist_mailtag_item$@$if($select$)$@$ qm_list_item_AccessoryChkb$@$endif$@$" un="tag" tag="$id$" color="$color$" ', N("tagSelect"), ' select="$@$if($select$)$@$1$@$else$@$0$@$endif$@$">', '<div class="qm_list_item_content">', '<span un="check" class="qm_list_item_icon mailtag_color_$color$"></span>', '<div class="qm_list_item_textWrapper">', '<span class="mailtag$id$ qm_list_item_title">', '$@$html($name$)$@$', '</span>', '</div>', '</div>', '</div>', '$@$endfor$@$', '$@$else$@$', '<div class="qm_listEmpty">\u60A8\u5C1A\u672A\u521B\u5EFA\u4EFB\u4F55\u6807\u7B7E</div>', '$@$endif$@$', '</div>', '</div>', '</div>']).join("")
      , A = (['<div class="qm_popPanel_cnt">', '<div un="popContent" class="qm_popPanel_inner">', '<div class="qm_list">', '$@$if($moveLst$!="")$@$', '$@$for($moveLst$)$@$', '<div class="qm_list_item$@$if($select$)$@$ qm_list_item_AccessoryChkb$@$endif$@$ $@$if($acctEmail$)$@$ folderlist_otherdomain_item folderlist_otherdomain_$@$eval QMWin.lib("Mobile.Phone.TmplLib").popIcon($acctEmail$)$@$ $@$endif$@$" un="move" move="$id$" ', N("moveSelect"), ' select="$@$if($select$)$@$1$@$else$@$0$@$endif$@$">', '<div class="qm_list_item_content">', '$@$if($acctEmail$)$@$', '<span class="qm_list_item_icon"></span>', '$@$endif$@$', '<div class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$@$html($name$)$@$</span>', '</div>', '</div>', '</div>', '$@$endfor$@$', '$@$else$@$', '<div class="qm_listEmpty">\u60A8\u5C1A\u672A\u521B\u5EFA\u4EFB\u4F55\u6587\u4EF6\u5939</div>', '$@$endif$@$', '</div>', '</div>', '</div>']).join("")
      , D = (['<div class="qm_popPanel_cnt">', '<div class="qm_popPanel_inner">', '<div class="compose_verify_container">', '<div class="compose_verify_message">$message$</div>', '<div class="compose_verify_cnt">', '<img class="compose_verify_image" src="$src$" alt="\u9A8C\u8BC1\u7801\u56FE\u7247" ', N("verifyChange"), '/>', '<a ', N("verifyChange"), ' class="compose_verify_changeLink">\u770B\u4E0D\u6E05\u695A\uFF1F&nbsp;\u6362\u4E00\u4E2A</a>', '</div>', '<input id="verifyInput" placeholder="\u9A8C\u8BC1\u7801\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199" class="compose_verify_input" type="text" maxlength="8" onkeypress="event.keyCode==13&&', M("verifyOK"), '"/>', '</div>', '</div>', '</div>']).join("")
      , z = (['<div class="qm_popPanel_cnt" un="fldrPwd">', '<div class="qm_popPanel_inner">', '<div class="qm_infopanel qm_infopanel_Block">', '<div class="hint_title">\u89E3\u9501\u6587\u4EF6\u5939</div>', '<form class="qm_form" action="#" onsubmit="', M("fldrPwdOK"), ';return false;">', '<div class="qm_form_item hint_content">', '<div class="qm_form_item_cnt">', '<input type="password" class="qm_formText qm_formText_Input"/>', '</div>', '</div>', '<div class="qm_form_item">', '<div class="qm_form_item_cnt qm_btnGroup func_flexJustifyRight">', '<a ', N("fldrPwdCancel"), ' class="qm_btn">\u53D6\u6D88</a>', '<a ', N("fldrPwdOK"), ' class="qm_btn qm_btn_Blue">\u786E\u5B9A</a>', '</div>', '</div>', '</form>', '</div>', '</div>', '</div>']).join("")
      , B = (['<div class="qm_popPanel_cnt">', '<div un="popContent" class="qm_popPanel_inner">', '<div class="qm_list">', '<div un="spam" spam="4" ', N("spamSelect"), ' select="1" class="qm_list_item qm_list_item_AccessoryChkb">', '<div class="qm_list_item_content">', '<div class="qm_list_item_textWrapper">', '<div class="qm_list_item_title">\u8FD9\u662F\u5E7F\u544A\u90AE\u4EF6</div>', '</div>', '</div>', '</div>', '<div un="spam" spam="1" ', N("spamSelect"), ' class="qm_list_item">', '<div class="qm_list_item_content">', '<div class="qm_list_item_textWrapper">', '<div class="qm_list_item_title">\u8FD9\u662F\u6B3A\u8BC8\u90AE\u4EF6</div>', '</div>', '</div>', '</div>', '<div un="spam" spam="8" ', N("spamSelect"), ' class="qm_list_item">', '<div class="qm_list_item_content">', '<div class="qm_list_item_textWrapper">', '<div class="qm_list_item_title">\u5176\u4ED6\u7C7B\u578B\u7684\u5783\u573E\u90AE\u4EF6</div>', '</div>', '</div>', '</div>', '</div>', '</div>', '</div>']).join("")
      , q = U.TE(['<div class="app_wrap app_crash app_crash_$mod$">', '<div class="app_crash_label">$errmsg$</div>', '<div class="app_crash_text">', '$moremsg$', '$@$if($btnLabel$)$@$', '<span ', r, ' cmd="$cmd$" class="app_crash_refresh"></span>', '$@$endif$@$', '</div>', '</div>'])
      , H = {
        sec: {
            loading_inline_black: x,
            loading_inline_white: y,
            loading_block: w,
            loading: t,
            loadingLight: u,
            loadingMedium: v,
            refresh: p,
            tag: C,
            move: A,
            verifyCode: D,
            folderPwd: z,
            spam: B,
            error: q
        }
    }
      , s = {
        fE: M,
        fEvt: N,
        fBlurEvt: K,
        fFocusEvt: O,
        fKeydownEvt: P,
        fCliEvt: L,
        fPrvCli: Q,
        fT: R,
        fV: function() {
            return H;
        },
        view: function(W) {
            var Z = H[W]
              , X = U.toArr(arguments).slice(1)
              , Y = Z._VIEW ? Z._VIEW.apply(Z, X) : X[0]
              , aa = Z._TMPL.replace(Y);
            return aa;
        },
        popAddr: function(W) {
            var Y = W ? W.split("@")[1] : ""
              , X = a[Y] || e;
            return X[0];
        },
        popIcon: function(W) {
            var Y = W ? W.split("@")[1] : ""
              , X = a[Y] || e;
            return X[2];
        },
        time: function(W) {
            var X = new Date((+W || 0) * 1000)
              , Y = X.getHours().toString()
              , Z = X.getMinutes().toString();
            Y.length == 1 && (Y = "0" + Y);
            Z.length == 1 && (Z = "0" + Z);
            return [X.getFullYear(), "\u5E74", X.getMonth() + 1, "\u6708", X.getDate(), "\u65E5 ", Y, ":", Z].join("");
        },
        timeNow: function(W) {
            return S(+W || 0, (new Date()) / 1000);
        },
        sendTime: function(W) {
            var X = (new Date()) / 1000;
            if (+W > X) {
                return T(+W || 0, X);
            } else {
                return S(+W || 0, X);
            }
        },
        icoLoading: function() {
            return t;
        },
        tipsSuc: function(W) {
            return F.replace(W);
        },
        tipsErr: function(W) {
            return E.replace(W);
        },
        refreshBtn: function(W) {
            return W ? p : o;
        },
        refreshUnRdCnt: function() {
            return G;
        },
        winWidth: function() {
            return window.document.body.offsetWidth;
        },
        winScrollTop: function() {
            return window.pageYOffset;
        }
    };
    U.createLib("Mobile.Phone.TmplLib", {
        bStatic: true
    }, function(W) {
        return s;
    });
});
$.package("mobile/bu/phone/tmpl/web/base.js", ["mobile/bu/phone/tmpl/comm.js"], function(C) {
    var H = QMWin
      , I = H.sid()
      , h = H.lib("Mobile.Phone.TmplLib")
      , E = h.fE
      , F = h.fEvt
      , D = h.fCliEvt
      , G = h.fPrvCli
      , c = 0
      , a = 1
      , b = 2;
    var B = h.fV()
      , f = F("cmd")
      , g = ' onkeyup="' + E("suggest") + '" '
      , i = B.sec.loading
      , j = B.sec.loadingLight
      , e = B.sec.refresh
      , y = B.sec.tag
      , w = B.sec.move
      , z = B.sec.verifyCode
      , v = B.sec.folderPwd
      , x = B.sec.spam
      , n = H.TE(['<div class="qm_popPanel">', '<div class="qm_popPanelContainer" un="tagPop" mid="$id$" tag="$@$for($tagLst$)$@$$@$if($select$)$@$$id$,$@$endif$@$$@$endfor$@$">', '<div class="qm_popPanelContentWrap">', '<div class="qm_popPanel_header">', '<a ', D("cancel"), 'class="qm_btn">\u53D6\u6D88</a>', '<div class="func_growSpace"></div>', '<h1 class="qm_popPanel_header_title">\u6807\u7B7E</h1>', '<div class="func_growSpace"></div>', '<a ', D("tagOK"), 'class="qm_btn qm_btn_Blue">\u5B8C\u6210</a>', '</div>', y, '</div>', '</div>', '</div>'])
      , l = H.TE(['<div class="qm_popPanel">', '<div class="qm_popPanelContainer" un="movePop" mid="$id$">', '<div class="qm_popPanelContentWrap">', '<div class="qm_popPanel_header">', '<a ', D("cancel"), 'class="qm_btn">\u53D6\u6D88</a>', '<div class="func_growSpace"></div>', '<h1 class="qm_popPanel_header_title">\u79FB\u52A8\u5230</h1>', '<div class="func_growSpace"></div>', '<a ', D("moveOK"), 'class="qm_btn qm_btn_Blue">\u5B8C\u6210</a>', '</div>', w, '</div>', '</div>', '</div>'])
      , o = H.TE(['<div class="qm_popPanel">', '<div un="verify" class="qm_popPanelContainer">', '<div class="qm_popPanelContentWrap">', '<div class="qm_popPanel_header">', '<a ', F("verifyCancel"), 'class="qm_btn">\u53D6\u6D88</a>', '<div class="func_growSpace"></div>', '<h1 class="qm_popPanel_header_title">\u8F93\u5165\u9A8C\u8BC1\u7801</h1>', '<div class="func_growSpace"></div>', '<a ', F("verifyOK"), 'class="qm_btn qm_btn_Blue">\u786E\u5B9A</a>', '</div>', z, '</div>', '</div>', '</div>'])
      , k = H.TE(['<div class="unLock_js_wrap">', v, '</div>'])
      , m = H.TE(['<div class="qm_popPanel">', '<div un="spamPop" mid="$id$" class="qm_popPanelContainer">', '<div class="qm_popPanelContentWrap">', '<div class="qm_popPanel_header">', '<a ', D("cancel"), 'class="qm_btn">\u53D6\u6D88</a>', '<div class="func_growSpace"></div>', '<h1 class="qm_popPanel_header_title">\u4E3E\u62A5\u90AE\u4EF6</h1>', '<div class="func_growSpace"></div>', '<a ', D("spamOK"), 'class="qm_btn qm_btn_Blue">\u5B8C\u6210</a>', '</div>', x, '</div>', '</div>', '</div>'])
      , u = ([]).join("")
      , p = (['<div class="folderlist_content">', '<ul class="folderlist_list qm_list">', '$@$for($vw.boxes$)$@$', '$@$if($type$!="sms"&&$type$!="reader"&&$type$!="bottle"&&$type$!="plp")$@$', '<li class="folderlist_$type$ qm_list_item qm_list_item_Accessory">', '<a class="qm_list_item_content" $@$if($cmd$)$@$', f, ' cmd="$cmd$"$@$else$@$href="$url$"$@$endif$@$>', '<span class="qm_list_item_icon"></span>', '<span class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$name$</span>', '<span class="qm_list_item_subtitle">$@$if($urCnt$>0&&$type$!="sms")$@$$urCnt$$@$endif$@$</span>', '</span>', '</a>', '</li>', '$@$endif$@$', '$@$endfor$@$', '</ul>', '</div>']).join("")
      , d = H.TE(p)
      , r = (['<div class="qm_list_item qm_list_item_Accessory">', '<a class="qm_list_item_content" ', f, ' cmd="list,$idx$">', '<span class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$@$html($inf.name$)$@$</span>', '$@$if($idx$!="3__"&&$idx$!="5__"&&$idx$!="6__"&&$st.urCnt$>0)$@$<span class="qm_list_item_subtitle">$st.urCnt$</span>$@$endif$@$', '</span>', '</a>', '</div>']).join("")
      , s = (['$@$if($vw.folder.sys$)$@$', '<div class="folderlist_section">', '<div class="qm_list_sectionLabel">\u7CFB\u7EDF\u6587\u4EF6\u5939</div>', '$@$for($vw.folder.sys$)$@$', r, '$@$endfor$@$', '</div>', '$@$endif$@$', '$@$if($vw.folder.user.length$)$@$', '<div class="folderlist_section">', '<div class="qm_list_sectionLabel">\u6211\u7684\u6587\u4EF6\u5939</div>', '$@$for($vw.folder.user$)$@$', r, '$@$endfor$@$', '</div>', '$@$endif$@$', '$@$if($vw.folder.pop.length$)$@$', '<div class="folderlist_section">', '<div class="qm_list_sectionLabel">\u5176\u4ED6\u90AE\u7BB1</div>', '$@$for($vw.folder.pop$)$@$', '<div class="folderlist_otherdomain_item folderlist_otherdomain_$@$eval QMWin.lib("Mobile.Phone.TmplLib").popIcon($inf.acctEmail$)$@$ qm_list_item qm_list_item_Accessory">', '<a class="qm_list_item_content" ', f, ' cmd="list,$idx$">', '<span class="qm_list_item_icon"></span>', '<span class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$@$html($inf.name$)$@$</span>', '$@$if($st.urCnt$>0)$@$<span class="qm_list_item_subtitle">$st.urCnt$</span>$@$endif$@$', '</span>', '</a>', '</div>', '$@$endfor$@$', '</div>', '$@$endif$@$', '$@$if($vw.folder.tag.length$)$@$', '<div class="folderlist_section">', '<div class="qm_list_sectionLabel">\u6807\u7B7E</div>', '$@$for($vw.folder.tag$)$@$', '<div class="folderlist_mailtag_item qm_list_item qm_list_item_Accessory">', '<a class="qm_list_item_content" ', f, ' cmd="list,$idx$">', '<span class="qm_list_item_icon mailtag_color_$inf.color$"></span>', '<span class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$@$html($inf.name$)$@$</span>', '$@$if($st.urCnt$>0)$@$<span class="qm_list_item_subtitle">$st.urCnt$</span>$@$endif$@$', '</span>', '</a>', '</div>', '$@$endfor$@$', '</div>', '$@$endif$@$']).join("")
      , q = (['<div class="qm_toolbar qm_frameToolbar">', '<div class="qm_toolbar_left">', '<a class="qm_btnIcon func_hideInPadMode" href="#today">', '<span class="qm_icon qm_icon_Return"></span>', '</a>', '<span class="qm_toolbarTitle">\u6587\u4EF6\u5939</span>', '</div>', '</div>', '<div class="folderlist">', s, '</div>']).join("")
      , A = (['$vw.promote.p1$', '<div class="qm_toolbar qm_frameToolbar $@$if($vw.showWereadAd$)$@$qm_toolbar_WeReadAd$@$endif$@$">', '<div class="qm_toolbar_left qm_toolbar_left_WithSubTitle qm_toolbarSpace func_hideInPadMode">', '<div class="qm_toolbarTitle">\u60A8\u597D\uFF0C$set.nick$</div>', '$@$if($vw.showWereadAd$)$@$', '<div class="qm_toolbarSubTitle">\u624B\u673A\u4E0A\u7684\u6781\u81F4\u9605\u8BFB\u4F53\u9A8C\uFF0C\u8BD5\u8BD5<a href="http://i.weread.qq.com/download?from=WapMailLink">\u5FAE\u4FE1\u8BFB\u4E66</a><a class="qm_toolbar_weread_close" href="javascript:;" ', F('closeWRAd'), '></a></div>', '$@$endif$@$', '$vw.promote.p11$', '</div>', '<div class="qm_toolbar_right func_hideInPadMode">', e, '</div>', '</div>', '<div class="func_hideInPadMode">', p, '</div>', '<div class="qm_toolbar $@$if($vw.showWereadAd$)$@$qm_toolbar_WeReadAd $@$endif$@$func_hideInPhoneMode" style="border-bottom:none;">', '<div class="qm_toolbar_left qm_toolbar_left_WithSubTitle qm_toolbarSpace">', '<div class="qm_toolbarTitle">\u60A8\u597D\uFF0C$set.nick$</div>', '$@$if($vw.showWereadAd$)$@$', '<div class="qm_toolbarSubTitle">\u624B\u673A\u4E0A\u7684\u6781\u81F4\u9605\u8BFB\u4F53\u9A8C\uFF0C\u8BD5\u8BD5<a href="http://i.weread.qq.com/download?from=WapMailLink">\u5FAE\u4FE1\u8BFB\u4E66</a><a class="qm_toolbar_weread_close" href="javascript:;"', F('closeWRAd'), '></a></div>', '$@$endif$@$', '$vw.promote.p11$', '</div>', '<div class="qm_toolbar_right">', e, '</div>', '</div>', '$vw.promote.p2$', '<div class="today_infopanel qm_infopanel qm_infopanel_White qm_infopanel_Block">', '$vw.promote.b21$', '$@$for($vw.bot$)$@$', '<div class="today_infopanel_item_Birthday today_infopanel_item">', '<span class="today_infopanel_item_icon">', '</span>', '<div class="today_infopanel_item_content">', '$@$for($itms$)$@$', '$@$if($_idx_$!=0)$@$$@$if($b$)$@$<br/>$@$else$@$ | $@$endif$@$$@$endif$@$', '<a $@$if($cmd$)$@$', f, ' cmd="$cmd$"$@$else$@$href="$url$"$@$endif$@$>$html$</a>', '$@$endfor$@$', '</div>', '</div>', '$@$endfor$@$', '$vw.promote.b2$', '</div>', '$vw.promote.p3$']).join("")
      , t = (['<div class="mui_cols">', '<div class="mui_col_single">', '<div class="titlebar"><h1>\u6211\u7684QQ\u7FA4</h1></div>', '$@$for($groupLst$)$@$', '<div class="mui_ul_multline mui_ul_withfronticon mui_ul_nobgcolor">', '$@$if($st.open$==1)$@$', '<div class="mui_li" un="group" gid="$inf.id$">', '<div class="mui_li_con">', '<div class="groundname">$inf.name$</div>', '<div class="groupmailopt">', '$@$if($st.reject$==0)$@$', '<a ', F("reject"), '>\u62D2\u6536</a>', '$@$else$@$', '<a ', F("recieve"), '>\u63A5\u6536</a>', '$@$endif$@$', '$@$if($inf.isAdm$==1)$@$', '&nbsp;&nbsp;<a ', F("closeGroup"), '>\u5173\u95ED\u7FA4\u90AE\u4EF6</a>', '$@$endif$@$', '</div>', '</div>', '</div>', '$@$endif$@$', '</div>', '$@$endfor$@$', '$@$if($inf.closecnt$!=0)$@$', '<div class="qm_list_sectionLabel">\u672A\u5F00\u901A\u7FA4\u90AE\u4EF6\u7684QQ\u7FA4</div>', '$@$for($groupLst$)$@$', '<div class="mui_ul_multline mui_ul_withfronticon mui_ul_nobgcolor">', '$@$if($st.open$==0)$@$', '<div class="mui_li" un="group" gid="$inf.id$">', '<div class="mui_li_con">', '<div class="groundname">$inf.name$</div>', '<div class="groupmailopt">', '$@$if($inf.isAdm$==1)$@$', '<a ', F("openGroup"), '>\u5F00\u901A\u7FA4\u90AE\u4EF6</a>', '$@$else$@$', '<a ', F("requestOpen"), '>\u7533\u8BF7\u5F00\u901A</a>', '$@$endif$@$', '</div>', '</div>', '</div>', '$@$endif$@$', '</div>', '</div>', '$@$endfor$@$', '$@$endif$@$', '<div class="navbar_bot">', '<ul>', '<li>', '<a ', F("returnGMLst"), '>&#171;\u8FD4\u56DE\u7FA4\u90AE\u4EF6</a>', '</li>', '</ul>', '</div>', '</div>', '</div>']).join("");
    H.extend(B, {
        "nav": {
            _TMPL: H.TE(u)
        },
        "today": {
            _TMPL: H.TE(A)
        },
        "folderlist": {
            _TMPL: H.TE(p)
        },
        "folder": {
            _TMPL: H.TE(q)
        },
        "grouplist": {
            _TMPL: H.TE(t)
        }
    });
    H.extend(B.sec, {
        "foLst": s
    });
    H.extend(h, {
        popTag: function(J) {
            return n.replace(J);
        },
        popMove: function(J) {
            return l.replace(J);
        },
        popVerify: function(J) {
            J.src = ["/cgi-bin/getverifyimage?aid=23000101&verifyid=verifycode&f=xhtml&sid=", I, "&r=", H.random()].join("");
            return o.replace(J);
        },
        popFldrPwd: function(J) {
            return k.replace(J);
        },
        popSpam: function(J) {
            return m.replace(J);
        },
        appGrids: function(J) {
            return d.replace(J);
        }
    });
});
$.package("mobile/bu/phone/tmpl/web/readmail.js", ["mobile/bu/phone/tmpl/comm.js", "mobile/bu/phone/tmpl/web/base.js"], function(M) {
    var S = QMWin
      , T = S.sid()
      , R = S.encryptuin()
      , m = S.lib("Mobile.Phone.TmplLib")
      , O = m.fE
      , P = m.fEvt
      , N = m.fCliEvt
      , Q = m.fPrvCli
      , d = 0
      , a = 1
      , c = 2
      , e = 0
      , b = 1;
    var L = m.fV()
      , l = P("cmd")
      , j = '$inf.fid$!=3&&$inf.fid$!=4&&$inf.fid$!=5&&$inf.fid$!=6'
      , p = L.sec.loading_inline_white
      , o = L.sec.loading_inline_black
      , n = L.sec.loading_block
      , g = [['<a id="mailQuickReply" ', N("quickReply"), ' class="qm_btn qm_btn_Blue">\u53D1\u9001</a>'].join(""), ['<a id="mailQuickReply" class="qm_btn qm_btn_Blue qm_btn">\u53D1\u9001</a>'].join(""), ['<a id="mailQuickReply" class="qm_btn qm_btn_Blue" disabled>', p, '\u53D1\u9001\u4E2D</a>'].join("")]
      , h = [['<a ', Q("unread"), ' ur="1" class="qm_dropdownMenu_item">\u6807\u4E3A\u5DF2\u8BFB</a>'].join(""), ['<a ', Q("unread"), ' ur="0" class="qm_dropdownMenu_item">\u6807\u4E3A\u672A\u8BFB</a>'].join("")]
      , G = 'mid="$inf.id$" pid="$inf.pid$" fid="$inf.fid$" star="$st.star$" spammid="$inf.spammid$" index="$rel.index$" cheatcode="$inf.cheatcode$" tag="$@$for($inf.tagLst$)$@$$id$,$@$endfor$@$"'
      , C = ['$@$if($inf.fid$!=5)$@$', Q("del"), '$@$else$@$', Q("perdel"), '$@$endif$@$'].join("")
      , E = (['<div class="qm_toolbar_left">', '<a ', l, ' cmd="list,$@$if($rel.index$)$@$$rel.index$$@$else$@$1__$@$endif$@$" class="qm_btnIcon"><span class="qm_icon qm_icon_Return"></span></a>', '</div>', '<div un="mail" ', G, ' class="qm_toolbar_right">', '$@$if($vw.multi$)$@$$@$else if($inf.fid$==5)$@$', '$@$else if($st.group$)$@$', '<a ', Q("replyGroup"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_Reply">\u56DE\u590D</span></a>', '$@$else if($inf.fid$==4)$@$', '<a ', Q("refill"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_Edit">\u7F16\u8F91</span></a>', '$@$else$@$', '$@$if($inf.rlyAllLst$||$inf.ccLst.length$&&$inf.toLst.length$)$@$', '<a ', Q("replyAll"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_ReplyAll">\u56DE\u590D\u5168\u90E8</span></a>', '$@$else if(!$st.sys$&&!$st.isbook$)$@$', '<a ', Q("reply"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_Reply">\u56DE\u590D</span></a>', '$@$endif$@$', '$@$endif$@$', '<a $@$if($inf.fid$!=5&&$inf.fid$!=6)$@$', Q("del"), '$@$else$@$', Q("perdel"), '$@$endif$@$ class="qm_btnIcon"><span class="qm_icon qm_icon_Delete">\u5220\u9664</span></a>', '<div class="qm_btnIcon qm_dropdownMenuGroup readmail_dropdownMenuBtn"', Q("showoptmenu"), '>', '<span class="qm_icon qm_icon_More">\u66F4\u591A</span>', '</div>', '<div un="mail" ', G, ' class="qm_btnDirection readmail_btnDirection func_hideInPhoneMode">', '<a $@$if($rel.next$)$@$', Q("go"), 'mail="$rel.next.inf.id$"$@$endif$@$', 'class="qm_btnDirection_left">', '<span class="qm_icon qm_icon_Next_V$@$if(!$rel.next$)$@$ qm_btnDirection_Disabled$@$endif$@$" ></span>', '</a>', '<a $@$if($rel.prev$)$@$', Q("go"), 'mail="$rel.prev.inf.id$"$@$endif$@$', 'class="qm_btnDirection_right">', '<span class="qm_icon qm_icon_Previous_V$@$if(!$rel.prev$)$@$ qm_btnDirection_Disabled$@$endif$@$"></span>', '</a>', '</div>', '</div>']).join("")
      , s = S.TE(E)
      , I = (['<div class="readmail_item_head_title">', '<h3 class="readmail_item_head_titleText">$@$html($inf.subj$)$@$</h3>', '<a ', Q("star"), ' class="readmail_item_head_starIcon qm_icon $@$if($st.star$)$@$qm_icon_StarredBig$@$else$@$qm_icon_StarBig$@$endif$@$">', '</a>', '</div>', '<div class="readmail_item_head_mailtag">', '$@$if($inf.tagLst.length$)$@$', '$@$for($inf.tagLst$)$@$', '<span class="qm_mailtag mailtag_color_$color$">$@$html($name$)$@$</span>', '$@$endfor$@$', '$@$endif$@$', '</div>']).join("")
      , A = (['<div un="date" class="readmail_item_head_contact">', '$@$if($opt.date$)$@$', '<div class="readmail_item_contactDetailWrap">', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u53D1\u4EF6\u4EBA:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '<span class="readmail_item_contactDetailItem_nickName func_ellipsis">$@$html($inf.from.name$)$@$</span><span class="readmail_item_contactDetailItem_addr func_ellipsis">&lt;$inf.from.addr$&gt;</span>', '</div>', '</div>', '$@$if($inf.toLst.length$)$@$', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u6536\u4EF6\u4EBA:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '$@$for($inf.toLst$)$@$', '$@$if($_idx_$>0)$@$$@$endif$@$<span class="readmail_item_contactDetailItem_nickName func_ellipsis">$@$html($name$)$@$</span><span class="readmail_item_contactDetailItem_addr func_ellipsis">&lt;$addr$&gt;</span>', '$@$endfor$@$', '</div>', '</div>', '$@$endif$@$', '$@$if($inf.ccLst.length$)$@$', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u6284\u3000\u9001:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '$@$for($inf.ccLst$)$@$', '$@$if($_idx_$>0)$@$$@$endif$@$<span class="readmail_item_contactDetailItem_nickName func_ellipsis">$@$html($name$)$@$</span><span class="readmail_item_contactDetailItem_addr func_ellipsis">&lt;$addr$&gt;</span>', '$@$endfor$@$', '</div>', '</div>', '$@$endif$@$', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u65F6\u3000\u95F4:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '$@$eval QMWin.lib("Mobile.Phone.TmplLib").time($inf.date$)$@$', '</div>', '</div>', '<div class="readmail_item_contactDetailItem">', '$@$if($inf.attLst.length$>0||$inf.bigattLst.length$>0||$inf.docattLst.length$>0)$@$', '<span class="readmail_item_contactDetailItem_label">\u9644\u3000\u4EF6:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '<span class="">$@$eval $inf.attLst.length$+$inf.bigattLst.length$+$inf.docattLst.length$$@$\u4E2A</span>', '(<a class="readmail_item_contactDetailItem_attachLink" href="javascript:;" onclick="_e(event,this,\'toAttach\')" >', '$@$if($inf.attLst.0$)$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$inf.attLst.0.fileType$"></span>', '$@$html($inf.attLst.0.name$)$@$', '$@$else if($inf.bigattLst.0$)$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '$@$html($inf.bigattLst.0.name$)$@$', '$@$else$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '$@$html($inf.docattLst.0.name$)$@$', '$@$endif$@$', '$@$if($inf.attLst.length$+$inf.bigattLst.length$+$inf.docattLst.length$>1)$@$...$@$endif$@$', '</a>)', '</div>', '$@$endif$@$', '</div>', '<a href="javascript:;" class="readmail_item_hideContact_linkbtn" ', '$@$if(!$vw.prefetch$)$@$', N("dateSwitch"), ' expend="$opt.date$"', '$@$endif$@$>\u9690\u85CF</a>', '$@$else$@$', '<div class="readmail_item_from func_ellipsis">', '$@$html($inf.from.name$)$@$', '</div>', '<span class="readmail_item_date">$@$eval QMWin.lib("Mobile.Phone.TmplLib").time($inf.date$)$@$</span>', '<a href="javascript:;" class="readmail_item_showContact_linkbtn" ', '$@$if(!$vw.prefetch$)$@$', N("dateSwitch"), ' expend="$opt.date$"', '$@$endif$@$>\u8BE6\u60C5</a>', '$@$endif$@$', '</div>']).join("")
      , r = S.TE(A)
      , B = (['<div un="date" class="readmail_item_head_group">', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u7FA4\u540D\u79F0:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '<strong class="readmail_item_group_from_name">$@$html($inf.from.name$)$@$</strong>', '</div>', '</div>', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u65F6\u3000\u95F4:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '<span class="readmail_item_group_date">$@$eval QMWin.lib("Mobile.Phone.TmplLib").time($inf.date$)$@$</span>', '</div>', '</div>', '$@$if($inf.attLst.length$>0||$inf.bigattLst.length$>0||$inf.docattLst.length$>0)$@$', '<div class="readmail_item_contactDetailItem">', '<span class="readmail_item_contactDetailItem_label">\u9644\u3000\u4EF6:</span>', '<div class="readmail_item_contactDetailItem_cnt">', '<span class="readmail_item_ftn_count">$@$eval $inf.attLst.length$+$inf.bigattLst.length$+$inf.docattLst.length$$@$\u4E2A</span>', '(<a class="readmail_item_ftnName" href="javascript:;" onclick="_e(event,this,\'toAttach\')" >', '$@$if($inf.attLst.0$)$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '$@$html($inf.attLst.0.name$)$@$', '$@$else if($inf.bigattLst.0$)$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '$@$html($inf.bigattLst.0.name$)$@$', '$@$else$@$', '<span class="readmail_header_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '$@$html($inf.docattLst.0.name$)$@$', '$@$endif$@$', '$@$if($inf.attLst.length$+$inf.bigattLst.length$+$inf.docattLst.length$>1)$@$...$@$endif$@$', '</a>)', '</div>', '</div>', '$@$endif$@$', '</div>']).join("")
      , x = ([]).join("")
      , f = (['<a class="readmail_attach_listItem_iconWrap_link" href="/cgi-bin/attachfolder?sid=', T, '&t=attachment_list&collect=yes&action=list&page=0&perpage=10"><span class="qm_icon qm_icon_AddSmall"></a>']).join("")
      , y = (['$@$if($inf.attLst.length$||$inf.bigattLst.length$||$inf.docattLst.length$)$@$', '<div class="readmail_attachWrap">', '$@$if($inf.attLst.length$)$@$', '<div class="readmail_attachList">', '$@$for($inf.attLst$)$@$', '<div class="readmail_attach_listItem">', '<a class="readmail_attach_listItem_name" href="/cgi-bin/readtemplate?sid=', T, '&t=attach_app_push_tpl&mailid=', '$@$if($_root_.st.group$==1)$@$', '$_root_.inf.id$', '$@$else$@$', '$_parent_.inf.id$', '$@$endif$@$', '$@$if($_root_.st.group$==1)$@$', '&groupattachkey=$groupattachkey$', '$@$endif$@$', '&mailattach=', '$@$if($_root_.st.group$==1)$@$', '$_root_.inf.id$', '$@$else$@$', '$_parent_.inf.id$', '$@$endif$@$', '|$urlencodename$&from=wap&size=$sz$&filename=$urlencodename$&searchname=1">', '<span class="readmail_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="readmail_attach_listItem_nameText_title">$@$html($name$)$@$</span></a>', '</div>', '$@$endfor$@$', '</div>', '$@$endif$@$', '$@$if($inf.bigattLst.length$)$@$', '<div class="readmail_attachList">', '$@$for($inf.bigattLst$)$@$', '<div class="readmail_attach_listItem">', '<a class="readmail_attach_listItem_name" href="$download$" target="_blank">', '<span class="readmail_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="readmail_attach_listItem_nameText_title">\u8D85\u5927\u9644\u4EF6\uFF1A$@$html($name$)$@$</span>', '<span class="readmail_attach_listItem_nameText_size">($@$html($sz$)$@$, $@$html($expireDesc$)$@$)</span>', '</a>', '<span class="qm_icon qm_icon_Goto"></span>', '</div>', '$@$endfor$@$', '</div>', '$@$endif$@$', '$@$if($inf.docattLst.length$)$@$', '<div class="readmail_attachList">', '$@$for($inf.docattLst$)$@$', '<div class="readmail_attach_listItem">', '<a class="readmail_attach_listItem_name" href="//mail.qq.com/cgi-bin/docedit_read?func=3rdread&key=$key$" target="_blank">', '<span class="readmail_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="readmail_attach_listItem_nameText_title">\u7F16\u8F91\u6587\u6863\uFF1A$@$html($name$)$@$</span>', '<span class="readmail_attach_listItem_nameText_size">($@$html($sz$)$@$)</span>', '</a>', '<span class="qm_icon qm_icon_Goto"></span>', '</div>', '$@$endfor$@$', '</div>', '$@$endif$@$', '</div>', '$@$endif$@$']).join("")
      , K = (['$@$if($vote$)$@$', '<div un="vote" class="readmail_votebox">', '<div class="readmail_votebox_head">$@$html($vote.inf.from.name$)$@$\u53D1\u8D77\u4E86\u4E00\u6B21\u6295\u7968', '$@$if($vote.st.cnt$)$@$\uFF0C\u76EE\u524D\u5DF2\u6709$vote.st.cnt$\u4EBA\u53C2\u4E0E$@$endif$@$', '<br/>\u6295\u7968\u65B9\u5F0F\uFF1A', '$@$if($vote.st.open$)$@$', '<span class="readmail_votebox_type">\u8BB0\u540D</span>', '$@$if($vote.st.cnt$)$@$', ' <a ', N("voteSwitch"), ' expend="$opt.vote$" class="readmail_votebox_seeDetail">($@$if($opt.vote$)$@$\u9690\u85CF$@$else$@$\u67E5\u770B$@$endif$@$\u6295\u7968\u4EBA\u540D\u5355)</a>', '$@$endif$@$', '$@$else$@$', '<span class="readmail_votebox_type">\u533F\u540D</span>', '$@$endif$@$', '</div>', '<h3 class="readmail_votebox_topic">$vote.inf.subj$</h3>', '<div class="readmail_votebox_cnt">', '$@$for($vote.opt$)$@$', '<div class="readmail_votebox_cntItem">', '<div  class="readmail_votebox_cntItemLeft">', '$@$if($_parent_.vote.st.canvote$)$@$<input class="qm_radio readmail_votebox_cntItem_radio" id="itemId_$id$" name="$id$" type="radio" value="$@$html($name$)$@$" ', N("selectVoteItem"), '/> $@$endif$@$', '</div>', '<div  class="readmail_votebox_cntItemRight">', '<label for="itemId_$id$" class="readmail_votebox_cntItem_title">$name$</label>', '<div class="readmail_votebox_cntItem_processWrap"><div class="readmail_votebox_cntItem_processBg"><div class="readmail_votebox_cntItem_processFg" style="width:$percent$%;"></div></div></div>', '<div class="readmail_votebox_cntItem_count">($percent$%\uFF0C$cnt$\u4EBA\u6295\u7968$@$if($_parent_.opt.vote$)$@$$@$if($voter.length$)$@$\uFF1A$@$for($voter$)$@$$_this_$ $@$endfor$@$$@$endif$@$$@$endif$@$)</div>', '</div>', '</div>', '$@$endfor$@$', '</div>', '$@$if(!$vote.st.canvote$)$@$', '<div class="readmail_votebox_votedTip">(\u60A8\u5DF2\u6295\u7968\u6210\u529F\uFF0C\u4EE5\u4E0A\u662F\u6295\u7968\u7ED3\u679C\u3002)</div>', '$@$else$@$', '<p><input class="readmail_votebox_voteButton" type="button" value="\u6295 \u7968" ', N("vote"), '/></p>', '$@$endif$@$', '</div>', '$@$endif$@$']).join("")
      , t = S.TE(K)
      , H = (['<div class="qm_cntEditZone">', '<div class="qm_form">', '<div class="qm_form_item">', '<div class="qm_form_item_cnt">', '<textarea placeholder="\u56DE\u590D$@$html($inf.from.name$)$@$" un="quickReplyContent" class="qm_formText qm_formText_Textarea" cols="30" rows="10"></textarea>', '</div>', '</div>', '<div class="qm_form_item">', '<div class="qm_form_item_cnt">', '<div class="qm_btnGroup func_flexJustifyRight">', g[d], '</div>', '</div>', '</div>', '</div>', '</div>']).join("")
      , F = (['<div un="mail" ', G, ' class="readmail_moreControl_btnWrap">', '</div>']).join("")
      , J = (['$@$if($inf.fid$!=4)$@$', '$@$if($rel.nextNew$||$rel.next$)$@$', '<div class="readmail_nextMail">', '<a class="readmail_nextMail_item" ', Q("go"), 'mail="$@$if($rel.nextNew$)$@$$rel.nextNew.inf.id$$@$else$@$$rel.next.inf.id$$@$endif$@$">', '<span class="readmail_nextMail_title">\u4E0B\u4E00\u5C01$@$if($rel.nextNew$)$@$\u672A\u8BFB$@$endif$@$\uFF1A</span><span class="readmail_nextMail_name func_ellipsis">$@$if($rel.nextNew$)$@$$@$html($rel.nextNew.inf.subj$)$@$$@$else$@$$@$html($rel.next.inf.subj$)$@$$@$endif$@$</span>', '</a>', '</div>', '$@$endif$@$', '$@$endif$@$']).join("")
      , i = (['$@$if($inf.cheatcode$)$@$', '$@$if($inf.cheatcode$==1||$inf.cheatcode$==101||$inf.cheatcode$==102)$@$', '<div class="readmail_warning_bar">', '$@$if($inf.cheatcode$==1)$@$', '\u8BF7\u52FF\u8F7B\u4FE1\u90AE\u4EF6\u4E2D\u7684\u5BC6\u4FDD\u3001\u6C47\u6B3E\u3001\u4E2D\u5956\u4FE1\u606F\u3002', '$@$else if($inf.cheatcode$==101)$@$', '\u8BF7\u52FF\u8F7B\u4FE1\u90AE\u4EF6\u4E2D\u7684\u5BC6\u4FDD\u3001\u6C47\u6B3E\u3001\u4E2D\u5956\u4FE1\u606F\u3002', '$@$else if($inf.cheatcode$==102)$@$', '\u9644\u4EF6\u4E2D\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\uFF0C\u8BF7\u52FF\u8F7B\u6613\u6253\u5F00\u9644\u4EF6\u3002', '$@$endif$@$', '$@$if($inf.fid$!=6)$@$', '<a mailid="$inf.id$" onclick="_e(event, this, \'cancelWarm\')" style="position: absolute;right: 8px;font-size: 24px;color: #b4a57c;margin: auto;padding: 0 10px;cursor: pointer;">&times;</a>', '<img src="//rl.mail.qq.com/cgi-bin/getinvestigate?sid=', T, '&kvclick=spam|js|yellow&r=$inf.id$" style="position:absolute;left:-9999px;">', '$@$endif$@$', '</div>', '$@$else if($inf.cheatcode$==103)$@$', '<div class="readmail_warning_bar" style="background:#ffd5d0;color:#874c44;">', '\u6B64\u90AE\u4EF6\u53EF\u80FD\u5305\u542B\u6076\u610F\u6B3A\u8BC8\u5185\u5BB9\uFF0C\u8BF7\u52FF\u8F7B\u4FE1\u3002', '$@$if($inf.fid$!=6)$@$', '<a mailid="$inf.id$" onclick="_e(event,this,\'cancelWarm\')"  style="position: absolute;right: 8px;font-size: 24px;color: #874c44;margin: auto;padding: 0 10px;cursor: pointer;">&times;</a>', '<img src="//rl.mail.qq.com/cgi-bin/getinvestigate?sid=', T, '&kvclick=spam|js|red&r=$inf.id$" style="position:absolute;left:-9999px;">', '$@$endif$@$', '</div>', '$@$else if($inf.cheatcode$==999)$@$', '<div class="readmail_warning_bar">', '\u53D1\u4EF6\u4EBA\u90AE\u4EF6\u5730\u5740\u6709\u53EF\u7591\uFF0C\u8BF7\u52FF\u8F7B\u4FE1\u4E2D\u5956\u3001\u6C47\u6B3E\u7B49\u4FE1\u606F\u3002', '$@$if($inf.fid$!=6)$@$', '<a mailid="$inf.id$" onclick="_e(event,this,\'cancelWarm\')"  style="position: absolute;right: 8px;font-size: 24px;color: #b4a57c;margin: auto;padding: 0 10px;cursor: pointer;">&times;</a>', '<img src="//rl.mail.qq.com/cgi-bin/getinvestigate?sid=', T, '&kvclick=spam|js|yellow&r=$inf.id$" style="position:absolute;left:-9999px;">', '$@$endif$@$', '</div>', '$@$endif$@$', '$@$endif$@$']).join("")
      , D = (['$@$if($content.body$)$@$', '$content.body$', '$@$else$@$', '$@$html($inf.abs$)$@$', '$@$endif$@$']).join("")
      , u = (['$@$if($opt.conv$)$@$', '<div un="mail" ', G, ' class="readmail_item_conversationPage">', '<div scroll="content" class="readmail_item_head">', '<div class="readmail_item_head_title">', '<h3 ', N("convSwitch"), ' expend="1" class="readmail_item_head_titleText">$@$html($inf.subj$)$@$</h3>', '<a ', '$@$if(!$vw.prefetch$)$@$', N("convstar"), '$@$endif$@$', ' class="readmail_item_head_starIcon qm_icon $@$if($st.star$)$@$qm_icon_StarredBig$@$else$@$qm_icon_StarBig$@$endif$@$">', '</a>', '</div>', '<div class="readmail_item_head_mailtag">', '$@$if($inf.tagLst.length$)$@$', '$@$for($inf.tagLst$)$@$', '<span class="qm_mailtag mailtag_color_$color$">$@$html($name$)$@$</span>', '$@$endfor$@$', '$@$endif$@$', '</div>', A, '</div>', i, '<div class="scale_container">', '<div class="scale_wrapper">', '<div class="scale_content readmail_item_contentConversation qmbox">', '$ui.expend$', '$@$if($ui.canExpend$)$@$', '<div><a ', N("foldSwitch"), ' expend="$opt.expend$">----------$@$if(!$opt.expend$)$@$\u663E\u793A$@$else$@$\u9690\u85CF$@$endif$@$\u5F15\u7528\u7684\u5185\u5BB9----------</a></div>', '$@$endif$@$', '$ui.fold$', '</div>', '</div>', '</div>', y, '$@$if($_idx_$==0)$@$', '$_root_.vw.promote.p_readmail$', '$@$endif$@$', H, '</div>', '$@$else$@$', '<div un="mail" ', G, '$@$if($rd$)$@$', N("convSwitch"), ' expend="0"', '$@$else$@$', P("read"), '$@$endif$@$ scroll="content" class="readmail_item_conversationCardWrap">', '<span un="convMailLoading" class="cov_fold_loading"></span>', '<div class="readmail_item_conversationCard">', '<div class="readmail_item_conversationCard_firstLine">', '<div class="readmail_item_conversationCard_from func_ellipsis">$@$if($st.ur$)$@$<span class="qm_iconUnread"></span>&nbsp;$@$endif$@$$@$html($inf.from.name$)$@$</div>', '<span class="readmail_item_conversationCard_time">$@$eval QMWin.lib("Mobile.Phone.TmplLib").time($inf.date$)$@$</span>', '</div>', '<div class="readmail_item_conversationCard_SecondLine func_ellipsis">', '$@$html($inf.abs$)$@$', '</div>', '</div>', '</div>', '$@$endif$@$']).join("")
      , k = S.TE(u)
      , v = (['<div un="mail" ', G, ' class="readmail_group_floor_container">', '<div class="readmail_group_floor_head">', '<span class="readmail_group_floor_num">$inf.seq$\u697C</span>', '<span class="readmail_group_floor_userName func_ellipsis">$@$html($inf.from.name$)$@$($inf.from.uuin$)</span>', '<span class="readmail_group_floor_time">$@$eval QMWin.lib("Mobile.Phone.TmplLib").time($inf.date$)$@$</span>', '</div>', '<div class="readmail_group_floor_content">', '$content.body$', y, '</div>', '</div>']).join("")
      , z = (['<div class="readmail_item $@$if($st.group$)$@$readmail_item_typeGroup$@$else if($st.conv$)$@$readmail_item_typeConversation$@$else$@$readmail_item_typeNormal$@$endif$@$">', '$@$if($vw.prefetch$)$@$', '<div un="mail" class="readmail_item_loadingPage">', '<div class="readmail_item_head" scroll="content">', I, A, '</div>', '<div class="readmail_item_loadingWrap">', '<div class="readmail_item_loadingCnt">', n, '</div>', '</div>', '</div>', '$@$else if($error$)$@$', '<div un="mail" class="readmail_item_errorPage">', '<div class="readmail_item_head" scroll="content">', I, A, '</div>', '<div class="readmail_item_errorWrap">', '<div class="readmail_item_errorCnt">', '$error.message$', '</div>', '</div>', '</div>', '$@$else$@$', '<div un="mail" ', G, '>', '$@$if($st.conv$)$@$', '$@$for($itms$)$@$', u, '$@$endfor$@$', '$@$else$@$', '<div class="$@$if($st.group$)$@$readmail_item_groupPage$@$else$@$readmail_item_normalPage$@$endif$@$$@$if($rel.index$=="4__")$@$ readmail_item_normalPage_BorderButtom$@$endif$@$">', '<div class="readmail_item_head" scroll="content">', I, '$@$if(!$st.group$)$@$', A, '$@$else$@$', '<div class="readmail_item_head_groupWrap">', B, '</div>', '$@$endif$@$', '</div>', '$@$if($st.group$)$@$', K, '$vw.promote.p_readmail$', H, '<div class="scale_container">', '<div class="scale_wrapper">', '<div class="scale_content readmail_item_contentGroup qmbox">', '$@$for($itms$)$@$', v, '$@$endfor$@$', '</div>', '</div>', '</div>', '$@$else$@$', i, '<div class="scale_container">', '<div class="scale_wrapper">', '<div class="scale_content readmail_item_contentNormal qmbox">', D, '</div>', '</div>', '</div>', y, '$@$endif$@$', '</div>', '$@$endif$@$', '$@$if($inf.fid$!=4&&!$_parent_.lst.sub$&&!$st.group$&&!$st.conv$&&!$st.isbook$)$@$', '$vw.promote.p_readmail$', H, '$@$endif$@$', '$@$if(!$st.conv$)$@$', '$@$if(!$st.group$)$@$', J, '$@$endif$@$', '$@$endif$@$', '</div>', '$@$endif$@$', '</div>']).join("")
      , q = S.TE(z)
      , w = (['<div id="mailNav" class="qm_toolbar qm_frameToolbar readmail_toolbar">', E, F, '</div>', '<div id="mail" class="mailcontent">', '<div id="mailContent">', z, '</div>', '</div>']).join("");
    S.extend(L, {
        "mail": {
            _TMPL: S.TE(w)
        }
    });
    S.extend(m, {
        mailNav: function(U) {
            return s.replace(U);
        },
        mailDate: function(U) {
            return r.replace(U);
        },
        mailVote: function(U) {
            return t.replace(U);
        },
        mailContent: function(U) {
            return q.replace(U);
        },
        mailConvContent: function(U) {
            return k.replace(U);
        },
        mailReplyBtn: function(U) {
            return g[U];
        },
        mailUnreadBtn: function(U) {
            return S.TE(h[U ? e : b]).replace({});
        },
        attachFolder: function() {
            return f;
        }
    });
});
$.package("mobile/bu/phone/tmpl/web/maillist.js", ["mobile/bu/phone/tmpl/comm.js", "mobile/bu/phone/tmpl/web/base.js"], function(C) {
    var H = QMWin
      , I = H.sid()
      , f = H.lib("Mobile.Phone.TmplLib")
      , E = f.fE
      , F = f.fEvt
      , D = f.fCliEvt
      , G = f.fPrvCli;
    var B = f.fV()
      , e = F("cmd")
      , c = '$_root_.lst.idx$!="3__"&&$_root_.lst.idx$!="4__"&&$_root_.lst.idx$!="5__"&&$_root_.lst.idx$!="6__"'
      , d = '$_root_.lst.idx$!="3__"&&$_root_.lst.idx$!="4__"&&$_root_.lst.idx$!="6__"'
      , q = B.sec.loading_inline_white
      , p = B.sec.loading_inline_black
      , o = B.sec.loading_block
      , b = ['<a href="javascript:;" un="popMail" fid="$lst.idx$" ', G("popMail"), ' class="qm_btnIcon" title="\u6536\u53D6"><span class="qm_icon qm_icon_Download"></span></a>'].join("")
      , a = ['<a class="qm_btnIcon">', p, '</a>'].join("")
      , s = ['$@$if($st.ur$)$@$', 'mui_font_bold ', '$@$endif$@$'].join("")
      , z = (['<div class="qm_toolbar_left" ', F("refresh"), '>', '<a ', F("returnBack"), ' class="qm_btnIcon$@$if($lst.idx$=="1__")$@$ func_hideInPadMode$@$endif$@$"><span class="qm_icon qm_icon_Return"></span></a>', '<div class="qm_toolbarTitle">', '$@$if($lst.color$>=0)$@$<span class="maillist_title_tag mailtag_color_$lst.color$"></span>$@$endif$@$', '$@$if($lst.search$)$@$', '$lst.name$', '$@$else$@$', '$lst.name$', '$@$endif$@$', '</div>', '$@$if(', c, '&&$lst.urCnt$>0)$@$', '<div class="qm_toolbarTitleAssist maillist_toolbarTitleAssist func_textGray">($lst.urCnt$)</div>', '$@$endif$@$', '</div>', '<ul un="list" class="qm_toolbar_right">', '$@$if($lst.sub$)$@$', '<li><a href="/cgi-bin/setting10?action=list&sid=', I, '&t=dy_index&classid=4204&showpage=-1&s=cntchk_03" class="qm_btnIcon"><span class="qm_icon qm_icon_AddBig"></span></a></li>', '$@$endif$@$', '$@$if($vw.ispop$)$@$', '<li>', '$@$if($vw.ispop$==1)$@$', b, '$@$else if($vw.ispop$==2)$@$', a, '$@$endif$@$', '</li>', '$@$endif$@$', '<li class="func_hideInPadMode"><a mu="search" ', G("menu"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_Search">\u641C\u7D22</span></a></li>', '<div class="func_hideInPhoneMode"><div un="searchInPad" menu="top" class="qm_formText qm_formText_Input qm_formText_Input_Search">', '<input onkeypress="event.keyCode==13&&', E("searchOKInPad"), '" type="search" name="subject" placeholder="\u5728\u5168\u90E8\u90AE\u4EF6\u4E2D\u641C\u7D22" autocapitalize="off" />', '</div></div>', '</ul>']).join("")
      , m = H.TE(z)
      , A = (['<div class="qm_actionBar_list">', '<label class="qm_actionBar_listItem qm_actionBar_listItem_SelectAll">', '<input type="checkbox" class="qm_chkb" un="checkAll" ', F("mailSelectAll"), '>', '</label>', '<div style="display:none;" un="selectCount" class="qm_actionBar_listItem_Text qm_actionBar_listItem func_ellipsis"></div>', '<div class="qm_actionBar_listItem qm_btnGroup func_posRelative">', '$@$if(', c, ')$@$', '<a ', F("readAll"), ' class="qm_btn">\u6807\u4E3A\u5DF2\u8BFB</a>', '$@$endif$@$', '$@$if($lst.idx$=="5__"||$lst.idx$=="6__")$@$', '<a ', F("perDelAll"), ' class="qm_btn">\u5F7B\u5E95\u5220\u9664</a>', '$@$else$@$', '<a ', F("delAll"), ' class="qm_btn">\u5220\u9664</a>', '$@$endif$@$', '<div un="toolbarMoreBtn" ', F("toolbarMore"), ' class="qm_btn qm_dropdownMenuGroup">', '<span class="qm_icon qm_icon_BtnMore"></span>', '<div un="toolbarMore" class="qm_dropdownMenuGroupCnt" style="display:none;">', '<ul class="qm_dropdownMenu qm_dropdownMenu_ArrowDown qm_dropdownMenu_ArrowCenter" style="bottom:38px;right:-46px;">', '$@$if(', c, ')$@$', '<li><a ', F("unreadAll"), ' class="qm_dropdownMenu_item">\u6807\u4E3A\u672A\u8BFB</a></li>', '$@$endif$@$', '$@$if($_root_.lst.idx$=="5__")$@$', '<li><a ', F("unreadAll"), ' class="qm_dropdownMenu_item">\u6807\u4E3A\u672A\u8BFB</a></li>', '<li><a ', F("readAll"), ' class="qm_dropdownMenu_item">\u6807\u4E3A\u5DF2\u8BFB</a></li>', '$@$endif$@$', '<li><a ', F("spamAll"), ' class="qm_dropdownMenu_item">\u4E3E\u62A5...</a></li>', '<li><a ', F("moveAll"), ' class="qm_dropdownMenu_item">\u79FB\u52A8\u5230...</a></li>', '<li><a ', F("tagAll"), ' class="qm_dropdownMenu_item">\u6807\u7B7E...</a></li>', '$@$if($lst.sub$)$@$', '<li><a ', F("unsub"), ' class="qm_dropdownMenu_item">\u5168\u90E8\u9000\u8BA2</a></li>', '$@$endif$@$', '</ul>', '<div class="qm_dropdownMenuGroupMask"></div>', '</div>', '</div>', '</div>', '</div>', '<div class="func_growSpace"></div>', '<a ', F("toolbarClose"), ' class="qm_btnIcon qm_btnIcon_ActionBarClose" un="close" href="javascript:;" style="display: none;"><span class="qm_icon qm_icon_BarClose"></span></a>']).join("")
      , n = H.TE(A)
      , y = [o].join("")
      , h = H.TE(['$@$if(!$cur.%cur%End$&&$cur.%cur%$)$@$', '<div ', F("cur"), ' list="item" curEnable="true" curType="%cur%" cur="$cur.%cur%.UTC$|$cur.%cur%.id$" class="maillist_listItem_loadMore"><span class="maillist_listItem_title">\u52A0\u8F7D\u66F4\u591A...</span></div>', '$@$endif$@$'], "%")
      , u = h.replace({
        cur: "max",
        max: 1
    })
      , i = H.TE(u)
      , v = h.replace({
        cur: "since"
    })
      , j = H.TE(v)
      , w = (['<div id="$inf.id$" un="mail" list="item" UTC="$inf.UTC$" class="maillist_listItem $@$if(', d, '&&$st.ur$)$@$maillist_listItem_Unread$@$endif$@$">', '<label class="maillist_listItemLeft">', '<input type="checkbox" un="mailcb" class="qm_chkb" ', F("mailSelect"), '>', '$@$if($st.rly$)$@$', '<span class="qm_icon qm_icon_Replied"></span>', '$@$else if($st.group$)$@$', '$@$else if($st.fwd$)$@$', '<span class="qm_icon qm_icon_Transpond"></span>', '$@$endif$@$', '</label>', '<div ', e, ' cmd="mail,$_root_.lst.idx$,$inf.id$" class="maillist_listItemRight">', '<div class="maillist_listItemLineFirst">', '$@$if(', d, '&&$st.ur$)$@$', '<span class="qm_iconUnread"></span>', '$@$endif$@$', '<div class="maillist_listItem_title func_ellipsis">', '$@$html($inf.from.name$)$@$', '</div>', '$@$if($lst.cnt$>1)$@$<span class="maillist_listItem_title_count">($lst.cnt$)</span>$@$endif$@$', '$@$if($st.ciz$==1)$@$<span class="maillist_listItem_emergency qm_icon qm_icon_Emergency"></span>$@$endif$@$', '$@$if($st.star$==1)$@$<span class="maillist_listItem_star qm_icon qm_icon_Starred"></span>$@$endif$@$', '$@$if($st.att$==1)$@$<span class="maillist_listItem_attr qm_icon qm_icon_Attach"></span>$@$endif$@$', '<div class="func_growSpace"></div>', '<span class="maillist_listItem_time">', '$@$eval QMWin.lib("Mobile.Phone.TmplLib").sendTime($inf.date$)$@$', '</span>', '</div>', '<div class="maillist_listItemLineSecond func_ellipsis">', '$@$html($inf.subj$)$@$', '</div>', '<div class="maillist_listItemLineThird">', '<div class="maillist_listItem_abstract func_ellipsis">', '$@$html($inf.abs$)$@$', '</div>', '<div class="maillist_listItem_mailtag">', '$@$if($inf.tagLst.length$)$@$', '$@$for($inf.tagLst$)$@$', '<span class="qm_mailtag mailtag_color_$color$">$@$html($name$)$@$</span>', '$@$endfor$@$', '$@$endif$@$', '</div>', '</div>', '</div>', '</div>']).join("")
      , k = H.TE(w)
      , x = ([v, '$@$for($itms$)$@$', w, '$@$endfor$@$', u]).join("")
      , l = H.TE(x)
      , t = (['$@$if($vw.prefetch$)$@$', o, '$@$else if($error$)$@$', '<div class="qm_listEmpty qm_listEmpty_BottomBordered">', '$error.message$', '</div>', '$@$else$@$', '<div class="readmail_list">', '$@$if($itms.length$)$@$', x, '$@$else$@$', '<div class="qm_listEmpty qm_listEmpty_BottomBordered">', '\u6CA1\u6709\u90AE\u4EF6', '</div>', '$@$endif$@$', '<div un="search" menu="top" class="qm_searchBar maillist_searchBar func_hideInPadMode" style="display:none;">', '<div class="qm_formText qm_formText_Input qm_formText_Input_Search">', '<form>', '<input onkeypress="event.keyCode==13&&', E("searchOK"), '" type="search" placeholder="\u5728\u5168\u90E8\u90AE\u4EF6\u4E2D\u641C\u7D22" autosave="unique" autocapitalize="off" />', '</form>', '</div>', '<a ', F("searchCancel"), ' href="javascript:;" class="qm_btn">\u53D6\u6D88</a>', '</div>', '</div>', '$@$endif$@$']).join("")
      , g = H.TE(t)
      , r = (['<div id="listNav" class="qm_toolbar qm_frameToolbar">', z, '</div>', '<div id="listContent">', t, '</div>', '<div id="listToolBarWrapper" class="actionBarWrap maillist_actionBar">', '<div id="listToolBar" un="toolbar" class="qm_actionBar">', A, '</div>', '</div>']).join("");
    H.extend(B, {
        "list": {
            _TMPL: H.TE(r)
        }
    });
    H.extend(f, {
        listNav: function(J) {
            return m.replace(J);
        },
        listContent: function(J) {
            return g.replace(J);
        },
        listToolBar: function(J) {
            return n.replace(J);
        },
        listCurSince: function(J) {
            return j.replace(J);
        },
        listCurMax: function(J) {
            return i.replace(J);
        },
        listItem: function(J) {
            return k.replace(J);
        },
        listItems: function(J) {
            return l.replace(J);
        },
        listLoading: function() {
            return y;
        },
        popMail: function(J) {
            return J ? b : a;
        }
    });
});
$.package("mobile/bu/phone/tmpl/web/compose.js", ["mobile/bu/phone/tmpl/comm.js", "mobile/bu/phone/tmpl/web/base.js"], function(M) {
    var Y = QMWin
      , Z = Y.sid()
      , v = Y.lib("Mobile.Phone.TmplLib")
      , S = v.fE
      , T = v.fEvt
      , N = v.fBlurEvt
      , U = v.fFocusEvt
      , V = v.fKeydownEvt
      , O = v.fCliEvt
      , W = v.fPrvCli
      , c = 0
      , a = 1
      , b = 2;
    function R(ab, aa) {
        return ['$@$if(', ab, ')$@$ ', aa, '="', ab, '"$@$endif$@$'].join("");
    }
    function P(aa) {
        return ['$vw.cpType$=="', aa, '"'].join("");
    }
    function Q(aa) {
        return ['$vw.cpType$!="', aa, '"'].join("");
    }
    function X(aa) {
        return ['$@$eval QMWin.lib("Mobile.Phone.TmplLib").time(', aa, ')$@$'].join("");
    }
    var L = v.fV()
      , t = T("cmd")
      , u = ' onkeyup="' + S("suggest") + '" '
      , r = [P("composeGroup"), '||', P("replyGroup")].join("")
      , s = [Q("composeGroup"), '&&', Q("replyGroup")].join("")
      , y = L.sec.loading_inline_white
      , x = L.sec.loading_inline_black
      , w = L.sec.loading_block
      , K = L.sec.foLst
      , h = ['<a mu="search" ', W("menu"), ' class="qm_btnIcon"><span class="qm_icon qm_icon_Search" title="\u641C\u7D22"></span></a>'].join("")
      , d = [['<a id="composeCancel" ', O("cancel"), ' class="qm_btn">\u53D6\u6D88</a>'].join(""), ['<a id="composeCancel" class="qm_btn" disabled>\u53D6\u6D88</a>'].join(""), ['<a id="composeCancel" class="qm_btn" disabled>\u53D6\u6D88</a>'].join("")]
      , f = [['<a id="composeSave" ', O("save"), ' class="qm_btn">\u4FDD\u5B58</a>'].join(""), ['<a id="composeSave" class="qm_btn" disabled>\u4FDD\u5B58</a>'].join(""), ['<a id="composeSave" class="qm_btn" disabled>', y, '</a>'].join("")]
      , g = [['<a id="composeSend" ', O("send"), ' class="qm_btn qm_btn_Blue">\u53D1\u9001</a>'].join(""), ['<a id="composeSend" class="qm_btn qm_btn_Blue" disabled>\u53D1\u9001</a>'].join(""), ['<a id="composeSend" class="qm_btn qm_btn_Blue" disabled>', y, '</a>'].join("")]
      , e = [['<a id="composeDiscard" ', O("discard"), ' class="qm_btn">\u53D6\u6D88</a>'].join(""), ['<a id="composeDiscard" class="qm_btn" disabled>\u53D6\u6D88</a>'].join(""), ['<a id="composeDiscard" class="qm_btn" disabled>\u53D6\u6D88</a>'].join("")]
      , i = (['<span un="sugBtn" btn="expend"', O("suggestExpend"), 'class="compose_form_item_addContact qm_icon qm_icon_Add"></span>']).join("")
      , j = (['<span un="sugBtn" btn="fold"', O("suggestFlod"), 'class="compose_form_item_addContact qm_icon qm_icon_Reduce"></span>']).join("")
      , k = (['<span un="sugBtn" btn="loading" class="mui_inputoperation mui_rounded5 mui_ico_loading"></span>']).join("")
      , J = (['$@$for($inf.toLst$)$@$', '$@$if($addr$&&$name$)$@$', '&quot;$@$html($name$)$@$&quot;<$addr$>&#59;', '$@$endif$@$', '$@$endfor$@$']).join("")
      , E = (['$@$if($inf.ccLst$)$@$', '$@$for($inf.ccLst$)$@$', '$@$if($addr$&&$name$)$@$', '&quot;$@$html($name$)$@$&quot;<$addr$>&#59;', '$@$endif$@$', '$@$endfor$@$', '$@$endif$@$']).join("")
      , C = (['$@$if($inf.bccLst$)$@$', '$@$for($inf.bccLst$)$@$', '$@$if($addr$&&$name$)$@$', '&quot;$@$html($name$)$@$&quot;<$addr$>&#59;', '$@$endif$@$', '$@$endfor$@$', '$@$endif$@$']).join("")
      , I = (['$@$if($inf.subj$)$@$', '$@$if(', P("forward"), ')$@$', '\u8F6C\u53D1\uFF1A$@$html($inf.subj$)$@$', '$@$else if(', P("reply"), '||', P("replyAll"), '||', P("replyGroup"), ')$@$', '\u56DE\u590D\uFF1A$@$html($inf.subj$)$@$', '$@$else if(', P("refill"), '||', P("openGroup"), ')$@$', '$@$html($inf.subj$)$@$', '$@$endif$@$', '$@$endif$@$']).join("")
      , l = Y.TE(['<div class="compose_contact_editItem">', '<div class="compose_contact_editItem_cnt">', '<div class="compose_contact_editItem_nickName func_ellipsis">$@$html($nick$)$@$</div>', '<div class="compose_contact_editItem_addr func_ellipsis">$addr$</div>', '</div>', '<a class="qm_btn" href="javascript:;" ', T("editAddrDel"), '>\u5220\u9664</a>', '<a class="qm_btn" href="javascript:;" ', T("editAddrCancel"), '>\u53D6\u6D88</a>', '</div>'])
      , m = Y.TE(['<a href="javascript:;" tabindex="-1" un="addrItem"', U("editAddr"), N("hideEdit"), V("editAddrKeyDown"), 'class="compose_contact_selectedItem" addr="$addr$" nick="$@$html($nick$)$@$">$@$html($nick$)$@$</a>'])
      , B = (['<li class="compose_attachList_item"', '$@$if($key$)$@$', ' un="cattItem" key="$key$"', '$@$else$@$', ' un="attItem" key="$groupattachkey$"', '$@$endif$@$ name="$urlencodename$">', '<span class="compose_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="compose_attachList_fileName func_ellipsis">$name$</span>&nbsp;<span class="compose_attachList_fileSize">$@$if($sz$)$@$($sz$)$@$endif$@$</span>', '<a ', T("delAttach"), ' class="qm_btn compose_attachList_delete">\u5220\u9664</a>', '</li>']).join("")
      , n = Y.TE(B)
      , D = (['$@$if($download$&&$name$)$@$', '<li class="compose_attachList_item" un="bigattItem" download="$download$" expire="$expire$" icon="$icon$" name="$name$" sz="$sz$">', '<span class="compose_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="compose_attachList_fileName func_ellipsis">$name$</span>&nbsp;<span class="compose_attachList_fileSize"> ($sz$ \u8D85\u5927\u9644\u4EF6)</span>', '<a ', T("delAttach"), ' class="qm_btn compose_attachList_delete">\u5220\u9664</a>', '</li>', '$@$endif$@$']).join("")
      , F = (['$@$if($name$)$@$', '<li class="compose_attachList_item" un="docattItem" icon="$icon$" name="$name$" sz="$sz$" key="$key$">', '<span class="compose_attachList_fileType qm_filetype qm_filetype_Small qm_filetype_$fileType$"></span>', '<span class="compose_attachList_fileName func_ellipsis">$name$</span>&nbsp;<span class="compose_attachList_fileSize"> ($sz$ \u7F16\u8F91\u6587\u6863)</span>', '<a ', T("delAttach"), ' class="qm_btn compose_attachList_delete">\u5220\u9664</a>', '</li>', '$@$endif$@$']).join("")
      , o = Y.T(['<li un="attUpingItm">', '<a ', T("delAttUpload"), ' class="mui_right mui_btn m_btn_gray">\u53D6\u6D88</a>', '<span class="mui_nowrap">', x, ' <span> $name$ <span></span>', '</li>'])
      , A = (['<div class="compose_topBar" un="compose">', '$@$if(', r, '||', P("openGroup"), ')$@$', e[c], '$@$else$@$', d[c], '$@$endif$@$', '<div class="func_growSpace"></div>', '<div class="compose_mailType qm_dropdownMenuGroup">', '<a href="javascript:;" class="compose_mailType_text"', T("showSwitchMenu"), '>', '$@$if($vw.cpType$=="composeGroup")$@$', '\u7FA4\u90AE\u4EF6', '$@$else$@$', '\u90AE\u4EF6', '$@$endif$@$', '<span class="qm_icon qm_icon_SelArrow"></span></a>', '</div>', '<div class="func_growSpace"></div>', g[c], '</div>', '<input id="sendmailname" type="hidden" value="$inf.sendmailname$">', '<div id="composeMain" un="compose" ', R("$inf.gmid$", "groupMid"), R("$inf.draftId$", "draftId"), R("$inf.fwdId$", "fwdId"), R("$inf.rlyId$", "rlyId"), '>', '<div class="compose_mainCnt">', '<div class="compose_mainCnt_inner">', '$@$if(', P("replyGroup"), ')$@$', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<span class="compose_form_item_label">QQ\u7FA4\uFF1A</span>', '<div class="compose_form_item_cnt">', '<div class="compose_form_item_cnt_text func_ellipsis">$@$html($inf.from.name$)$@$</div>', '<input id="groupLst" type="hidden" value="$inf.gid$"/>', '</div>', '</div>', '</div>', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<span class="compose_form_item_label">\u4E3B\u9898\uFF1A</span>', '<div class="compose_form_item_cnt">', '<div class="compose_form_item_cnt_text func_ellipsis">$@$html($inf.subj$)$@$</div>', '</div>', '</div>', '</div>', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<div class="compose_form_item_cnt">', '<textarea class="compose_form_item_textarea" id="content"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), '></textarea>', '</div>', '</div>', '</div>', '$@$else if(', P("composeGroup"), ')$@$', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<label class="compose_form_item_label">QQ\u7FA4\uFF1A</label>', '<div class="compose_form_item_cnt">', '<select id="groupLst" class="qm_selectBlank"><option value="">\u6B63\u5728\u52A0\u8F7D\u4E2D...</option></select>', '</div>', '</div>', '</div>', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<label class="compose_form_item_label">\u4E3B\u9898\uFF1A</label>', '<div class="compose_form_item_cnt">', '<input class="compose_form_item_input" id="subject" type="text" ', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), 'value="', I, '" subj="', I, '" />', '</div>', '</div>', '</div>', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<div class="compose_form_item_cnt">', '<textarea  placeholder="\u8BF7\u8F93\u5165\u90AE\u4EF6\u5185\u5BB9..." id="content" class="compose_form_item_textarea"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), '></textarea>', '</div>', '</div>', '</div>', '$@$else$@$', '<div un="suggest" class="compose_form_itemWrap">', '<div id="addrto" un="address" addr="to">', '<div class="compose_form_item">', '<label for="to" class="compose_form_item_label">\u6536\u4EF6\u4EBA\uFF1A</label>', '<div class="compose_form_item_cnt">', '<div un="addrEdit" class="compose_contact_selectedItemWrap"></div>', '<input class="compose_form_item_input" id="to" type="email"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), u, 'value="', J, '" to="', J, '" onkeypress="', S("addrTyping"), '"', V("addrKeydown"), '/>', '</div>', i, '</div>', '<div un="editArea" addr="to" class="compose_contact_editItemWrap"></div>', '</div>', '<div un="sugList" style="display:none;" class="compose_contactListWrap"></div>', '</div>', '$@$if(!$inf.ccLst.length$&&!$inf.bccLst.length$)$@$', '<div ', O("more"), ' class="compose_form_itemWrap">', '<div class="compose_form_item">', '<a class="compose_form_item_link">\u6284\u9001/\u5BC6\u9001</a>', '</div>', '</div>', '$@$endif$@$', '<div un="suggest" class="compose_form_itemWrap" $@$if(!$inf.ccLst.length$&&!$inf.bccLst.length$)$@$style="display:none;"$@$endif$@$>', '<div id="addrcc" un="address" addr="cc">', '<div class="compose_form_item">', '<label for="to" class="compose_form_item_label">\u6284\u9001\uFF1A</label>', '<div class="compose_form_item_cnt">', '<div un="addrEdit" class="compose_contact_selectedItemWrap"></div>', '<input class="compose_form_item_input" id="cc" type="email"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), u, 'value="', E, '" cc="', E, '" onkeypress="', S("addrTyping"), '"', V("addrKeydown"), '/>', '</div>', i, '</div>', '<div un="editArea" addr="cc" class="compose_contact_editItemWrap"></div>', '</div>', '<div un="sugList" style="display:none;" class="compose_contactListWrap"></div>', '</div>', '<div un="suggest" class="compose_form_itemWrap" $@$if(!$inf.ccLst.length$&&!$inf.bccLst.length$)$@$style="display:none;"$@$endif$@$ >', '<div id="addrbcc" un="address" addr="bcc">', '<div class="compose_form_item">', '<label for="to" class="compose_form_item_label">\u5BC6\u9001\uFF1A</label>', '<div class="compose_form_item_cnt">', '<div un="addrEdit" class="compose_contact_selectedItemWrap"></div>', '<input class="compose_form_item_input" id="bcc" type="email"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), u, 'value="', C, '" bcc="', C, '" onkeypress="', S("addrTyping"), '"', V("addrKeydown"), '/>', '</div>', i, '</div>', '<div un="editArea" addr="bcc" class="compose_contact_editItemWrap"></div>', '</div>', '<div un="sugList" style="display:none;" class="compose_contactListWrap"></div>', '</div>', '<div id="addrbcc" class="compose_form_itemWrap">', '<div class="compose_form_item">', '<label for="to" class="compose_form_item_label">\u4E3B\u9898\uFF1A</label>', '<div class="compose_form_item_cnt">', '<input class="compose_form_item_input" id="subject" type="text" ', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), 'value="', I, '" subj="', I, '" />', '</div>', '</div>', '</div>', '<div class="compose_form_itemWrap">', '<div class="compose_form_item">', '<div class="compose_form_item_cnt">', '<textarea value="test" id="origin" style="display:none;opacity:0;"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), '>$content.origintext$</textarea>', '<textarea placeholder="\u8BF7\u8F93\u5165\u90AE\u4EF6\u5185\u5BB9..." class="compose_form_item_textarea" id="content" origin="$@$html($content.origin$)$@$" cont="$@$html($content.cont$)$@$"', N("showTopAnnounceBar"), U("hideTopAnnounceBar"), 'oninput="', S("typing"), '">$content.body$</textarea>', '</div>', '</div>', '</div>', '$@$if(', P("reply"), '||', P("replyAll"), '||', P("forward"), ')$@$', '<div un="hideEditOrigin" class="qm_infopanel qm_infopanel_Row" style="margin-top:-1px;">', '\u539F\u90AE\u4EF6\u5DF2\u81EA\u52A8\u9644\u5E26', '<a ', O("editOrigin"), ' >&nbsp;\u7F16\u8F91</a>', '</div>', '$@$endif$@$', '$@$endif$@$', '$vw.promote.p_compose$', '$@$if($vw.uploadable$==1)$@$', '<div id="attachUpload" un="attachUpload" class="qm_actionBar compose_bottomBar">', '<iframe style="display:none;" id="attachFrame" name="attachFrame"></iframe>', '<form class="compose_addAttach_form" enctype="multipart/form-data" action="/cgi-bin/upload?sid=', Z, '&mode=file&ef=jsonp&resp_charset=UTF8&t=mobile_mgr.json&jsonp=attach_upload" method="post" target="attachFrame">', '<a class="compose_addAttach_panel_uploadBtn qm_btn">\u4E0A\u4F20\u6587\u4EF6', '<input class="compose_addAttach_panel_uploadInput" name="UploadFile" type="file" onchange="', S("attachSelect"), '"/>', '<input un="fname" name="fname" type="hideen" style="display:none;"/>', '</a>', '</form>', '<div class="compose_addAttach_uploading" un="attachUploading" style="display:none;">', '<a class="compose_addAttach_panel_uploadBtn qm_btn" disabled>', x, '\u4E0A\u4F20\u4E2D...</a>', '</div>', '<div class="compose_addAttach_panel_tips">\u6700\u5927\u53EF\u4EE5\u53D1\u900150M\u7684\u9644\u4EF6\u3002\u7F51\u7EDC\u98A0\u7C38\uFF0C\u5EFA\u8BAE\u5355\u4E2A\u9644\u4EF6\u4E0D\u8D85\u8FC75M\u3002</div>', '<div un="attachErr" style="display:none;"></div>', '</div>', '$@$endif$@$', '<div id="attachLst" un="attachLst" class="compose_attachListWrap" $@$if(!$inf.attLst.length$)$@$style="display:none;"$@$else$@$ val="$@$for($inf.attLst$)$@$$name$$@$endfor$@$" $@$endif$@$>', '<ul class="compose_attachList">', '$@$for($inf.attLst$)$@$', B, '$@$endfor$@$', '</ul>', '</div>', '<div id="bigattachLst" un="attachLst" class="compose_attachListWrap" $@$if(!$inf.bigattLst.length$)$@$style="display:none;"$@$else$@$ val="$@$for($inf.bigattLst$)$@$$expire$$@$endfor$@$" $@$endif$@$>', '<ul class="compose_attachList">', '$@$for($inf.bigattLst$)$@$', D, '$@$endfor$@$', '</ul>', '</div>', '<div id="docattachLst" un="attachLst" class="compose_attachListWrap" $@$if(!$inf.docattLst.length$)$@$style="display:none;" $@$endif$@$>', '<ul class="compose_attachList">', '$@$for($inf.docattLst$)$@$', F, '$@$endfor$@$', '</ul>', '</div>', '</div>', '</div>', '</div>']).join("")
      , H = ['<a id="groupLst" class="qm_selectBlank" ', T("reloadGroupLst"), '>\u91CD\u65B0\u52A0\u8F7D</a>'].join("")
      , G = ['<a id="groupLst" class="qm_selectBlank">\u6B63\u5728\u52A0\u8F7D\u4E2D...</a>'].join("")
      , p = Y.TE(['<select id="groupLst" class="qm_selectBlank">', '$@$for($_this_$)$@$', '$@$if($st.open$&&!$st.reject$)$@$<option value="$inf.id$">$@$html($inf.name$)$@$</option>$@$endif$@$', '$@$endfor$@$', '</select>'])
      , q = Y.TE(['<div class="qm_list">', '$@$for($_this_$)$@$', '<div class="qm_list_item">', '<a class="qm_list_item_content" ', O("suggestSelect"), 'addr="&quot;$@$html($name$)$@$&quot;&lt;$addr$&gt;">', '<span class="qm_list_item_textWrapper"><span class="qm_list_item_title">$@$html($name$)$@$&lt;$addr$&gt;</span></span>', '</a>', '</div>', '$@$endfor$@$', '</div>'])
      , z = (['<div class="qm_actionBar_list">', '<label class="qm_actionBar_listItem qm_actionBar_listItem_SelectAll"><input ', T("selectAll"), ' type="checkbox" class="qm_chkb" un="checkAll" /></label>', '<div style="display: none;" un="selectCount" class="qm_actionBar_listItem_Text qm_actionBar_listItem func_ellipsis">\u9009\u4E2D<span un="num"></span>\u4EBA</div>', '<div class="qm_actionBar_listItem qm_btnGroup"><a ', T("compose"), ' class="qm_btn">\u5199\u90AE\u4EF6</a></div>', '</div>', '<a ', T("toolbarClose"), 'class="qm_btnIcon qm_btnIcon_ActionBarClose" un="close" href="javascript:;" style="display: none;"><span class="qm_icon qm_icon_BarClose"></span></a>']).join("");
    _TMPL_SEC_CONCACT = (['<div un="concactContent">', '<div class="qm_toolbar qm_frameToolbar">', '<div class="qm_toolbar_left">', '$@$if($oOption.sSearch$)$@$', '<a ', t, ' cmd="concact" class="qm_btnIcon"><span class="qm_icon qm_icon_Return">\u8FD4\u56DE</span></a>', '$@$else$@$', '<a ', t, ' cmd="today" class="qm_btnIcon func_hideInPadMode"><span class="qm_icon qm_icon_Return"></span></a>', '$@$endif$@$', '<div class="qm_toolbarTitle func_overflowVisible">', '$@$if($oOption.sSearch$)$@$', '\u641C\u7D22\u201C$oOption.sSearch$\u201D', '$@$else$@$', '\u8054\u7CFB\u4EBA', '$@$endif$@$', '</div>', '</div>', '<div class="qm_toolbar_right func_hideInPadMode">', h, '</div>', '<div class="qm_toolbar_right func_hideInPhoneMode">', '<div un="search" menu="top">', '<div class="qm_formText qm_formText_Input qm_formText_Input_Search">', '<input onkeypress="event.keyCode==13&&', S("searchOK"), '" type="search" placeholder="\u641C\u7D22\u8054\u7CFB\u4EBA" />', '</div>', '</div>', '</div>', '</div>', '$@$if($loadErr$)$@$', '<div class="qm_listEmpty qm_listEmpty_BottomBordered"><div class="func_textCenter">\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7<a href="javascript:location.reload();">\u5237\u65B0</a>\u91CD\u8BD5</div></div>', '$@$else$@$', '<div class="qm_list contacts_list">', '$@$if($vw.beforesend$)$@$', '<div class="qm_loadingBlock">', '<div class="qm_loadingBlock_content">', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Yellow"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Red"></div>', '<div class="qm_loadingBlock_item qm_loadingBlock_item_Green"></div>', '</div>', '</div>', '$@$else$@$', '$@$for($oData$)$@$', '<label class="qm_list_item qm_list_item_Style2 contacts_inbox" un="concact" name="$@$html($name$)$@$" addr="$@$html($addr$)$@$">', '<div class="qm_list_item_control">', '<input class="qm_chkb" type="checkbox" ', T("concactSelect"), 'name="$@$html($name$)$@$" addr="$@$html($addr$)$@$">', '</div>', '<div class="qm_list_item_content">', '<span class="qm_list_item_textWrapper">', '<span class="qm_list_item_title">$@$html($name$)$@$</span>', '<span class="qm_list_item_subtitle">$@$html($addr$)$@$</span>', '</span>', '</div>', '</label>', '$@$endfor$@$', '<div un="search" menu="top" class="qm_searchBar func_hideInPadMode" style="display:none;">', '<div class="qm_formText qm_formText_Input qm_formText_Input_Search">', '<input onkeypress="event.keyCode==13&&', S("searchOK"), '" type="search" placeholder="\u641C\u7D22\u8054\u7CFB\u4EBA" autofocus />', '</div>', '<a ', T("searchCancel"), 'class="qm_btn" href="javascript:;">\u53D6\u6D88</a>', '</div>', '$@$endif$@$', '</div>', '<div id="addrListToolBarWrapper" class="qm_actionBarWrap">', '<div id="addrListToolBar" un="toolbar" class="qm_actionBar">', z, '</div>', '</div>', '$@$endif$@$', '</div>']).join("");
    Y.extend(L, {
        "compose": {
            _TMPL: Y.TE(A)
        },
        "concact": {
            _TMPL: Y.TE(_TMPL_SEC_CONCACT)
        }
    });
    Y.extend(v, {
        suggest: function(aa) {
            return q.replace(aa);
        },
        suggestBtn: function(aa) {
            switch (aa) {
            case "expend":
                return i;
            case "fold":
                return j;
            }
            return k;
        },
        composeGroupList: function(aa) {
            return p.replace(aa);
        },
        composeGroupListReload: function(aa) {
            return H;
        },
        composeGroupListLoading: function() {
            return G;
        },
        addAtachItem: function(aa) {
            return n.replace(aa);
        },
        addAtachUploadItem: function(aa) {
            return o.replace(aa);
        },
        composeSendBtn: function(aa) {
            return g[aa];
        },
        composeSaveBtn: function(aa) {
            return f[aa];
        },
        composeCancelBtn: function(aa) {
            return d[aa];
        },
        composeAddrEdit: function(ab, aa) {
            return l.replace({
                nick: ab,
                addr: aa
            });
        },
        composeAddrItem: function(ab, aa) {
            return m.replace({
                nick: ab,
                addr: aa
            });
        }
    });
});
$.package("mobile/bu/phone/tmpl/web/composesucc.js", ["mobile/bu/phone/tmpl/comm.js", "mobile/bu/phone/tmpl/web/base.js"], function(d) {
    var e = QMWin
      , f = e.sid()
      , g = e.uin()
      , a = e.lib("Mobile.Phone.TmplLib")
      , c = a.fV();
    var b = ['<div class="composedSuccess" un="composesucc">', '<div class="composedSuccess_tips">', '<span class="composedSuccess_tips_icon icon_success"></span>', '<span class="composedSuccess_tips_text">\u53D1\u9001\u6210\u529F\uFF0C<a href="javascript:;" onclick="_e(event,this,\'cmd\')" cmd="$returnHash$">\u8FD4\u56DE</a></span>', '</div>', '<div class="composedSuccess_banner">', '<div class="composedSuccess_banner_image"></div>', '<div class="composedSuccess_banner_text">QQ\u90AE\u7BB1\uFF0C\u4F60\u80FD\u53D1\u73B0\u66F4\u591A</div>', '<div style="text-align:center;">', '<a class="qm_btn qm_btn_Blue qm_btn_Large" onclick="_e(event,this,\'download\')" href="http://app.mail.qq.com/cgi-bin/mailapp?latest=match&apv=wapmail_compose&dlfrom=wapcomposesucc&uin=' + g + '">\u7ACB\u5373\u4E0B\u8F7D</a>', '</div>', '</div>', '</div>'].join('');
    e.extend(c, {
        "composesucc": {
            _TMPL: e.TE(b)
        }
    });
});
$.package("mobile/bu/phone/event/popup.js", [], function(b) {
    var d = QMWin
      , c = d.ctor_();
    var a = "qm_list_item_AccessoryChkb";
    d.createLib("Mobile.Phone.Event.Popup", {
        bStatic: true
    }, function(e) {
        return ( {
            rule: function() {
                return ( {
                    fire: {
                        tagSelect: {
                            sContext: "tag"
                        },
                        spamSelect: {
                            sContext: "spamPop"
                        },
                        moveSelect: {
                            sContext: "movePop"
                        },
                        cancel: {},
                        tagOK: {
                            sContext: "tagPop"
                        },
                        spamOK: {
                            sContext: "spamPop"
                        },
                        moveOK: {
                            sContext: "movePop"
                        }
                    }
                }) ;
            },
            events: function() {
                return ( {
                    tagSelect: function(g, h, f) {
                        var l = this
                          , k = l.$.$(f)
                          , j = k.find("[un='check']")
                          , i = (+k.attr("select") + 1) % 2;
                        k.attr("select", i.toString());
                        i ? k.addClass(a) : k.rmClass(a);
                    },
                    spamSelect: function(g, h, f) {
                        var j = this
                          , k = j.$.$(h)
                          , i = j.$.$(f);
                        i.find("[un='spam']").attr("select", "0").rmClass(a);
                        k.addClass(a);
                        k.attr("select", "1");
                    },
                    moveSelect: function(g, h, f) {
                        var j = this
                          , k = j.$.$(h)
                          , i = j.$.$(f);
                        i.find("[un='move']").attr("select", "0").rmClass(a);
                        k.addClass(a);
                        k.attr("select", "1");
                    },
                    cancel: function(g, h, f) {
                        this.hidePop();
                    },
                    tagOK: function(h, i, g) {
                        var l = this
                          , f = l.$
                          , k = f.$(g)
                          , n = k.attr("mid")
                          , m = []
                          , j = [];
                        k.find("[select='1']").each(function(o) {
                            var p = f.$(o);
                            if (p.attr("select") == "1") {
                                m.push(p.attr("tag"));
                                j.push(p.attr("color"));
                            }
                        });
                        l.tag_(n, m, j);
                    },
                    spamOK: function(g, h, f) {
                        var j = this
                          , i = j.$.$(f)
                          , k = i.attr("mid")
                          , l = i.find("[select='1']").attr("spam");
                        j.spam_(k, l);
                    },
                    moveOK: function(h, i, g) {
                        var k = this
                          , f = k.$
                          , j = f.$(g)
                          , m = j.attr("mid")
                          , l = j.attr("fid")
                          , n = j.find("[select='1']").attr("move");
                        n && k.move_(m, n);
                    }
                }) ;
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/mod.js", [], function(b) {
    var e = QMWin, c = e.ctor_(), d, a = "Mobile.Phone.";
    e.createCtrl("Mobile.Phone.Mod", {}, function(f) {
        return ( {
            dom$: function(g) {
                return this._getDom$(g);
            },
            pop$: function() {
                return this.$.$("#popup");
            },
            err: function(g) {
                var h = this;
                return h._tips(h.tmplLib().tipsErr({
                    msg: g
                }));
            },
            suc: function(g) {
                var h = this;
                return h._tips(h.tmplLib().tipsSuc({
                    msg: g
                }));
            },
            _bindTips: function() {
                var g = this;
                if (!d && (d = true)) {
                    var h = g.$.$("#tips").data();
                    h._mbAnimationBind = true;
                }
            },
            _tips: function(g) {
                var h = this
                  , i = h.$.$("#tips").data();
                $.$(i).addClass("qm_tipsAbs_Show");
                $.$(i).html(g);
                setTimeout(function() {
                    $.$(i).rmClass("qm_tipsAbs_Show");
                    $.$(i).html('');
                }, 2000);
                return h;
            },
            app: function() {
                return this._moRef.app();
            },
            ref: function() {
                return this._moRef;
            },
            tmplLib: function() {
                return this._moRef.tmplLib();
            },
            dataCenter: function() {
                return this._moRef.dataCenter();
            },
            cmdCenter: function() {
                return this._moRef.cmdCenter();
            },
            cmd: function() {
                var h = this
                  , g = h._moRef;
                g.cmd.apply(g, arguments);
                return h;
            },
            msg: function() {
                var h = this
                  , g = h._moRef;
                g.msg.apply(g, arguments);
                return h;
            },
            hash: function(g) {
                var i = this;
                var j = arguments[0];
                var h = {
                    "today": "today",
                    "list": "maillist",
                    "folder": "folderlist",
                    "concact": "contacts",
                    "mail": "readmail",
                    "compose": "compose qm_frame_OnlyContent qm_frame_HideFooter qm_frame_HideTopAnnounce",
                    "compose,group": "compose_group qm_frame_OnlyContent qm_frame_HideFooter qm_frame_HideTopAnnounce"
                };
                if (j) {
                    var k = j.split(",")[0];
                    if (k == "list" || k == "mail" || k == "compose") {
                        j = k;
                    }
                    if (h[j]) {
                        e.$(".qm_frame").data(0).className = "qm_frame " + h[j];
                    }
                    this.scrollToHideNav(j);
                }
                return i._moRef.hash(g) || i;
            },
            scrollToHideNav: function(g) {
                if (this._moRef.app().isPadMode() || g == "today") {
                    document.body.scrollTop = 0;
                } else {
                    document.body.scrollTop = $.$("#nv").height();
                }
            },
            view: function() {
                var i = this
                  , g = arguments[0]
                  , h = !e.isStr(g) ? [i._modName()].concat([].slice.call(arguments)) : arguments;
                if (i.isActived()) {
                    i.render_.apply(i, h);
                }
                return i;
            },
            hasRender: function() {
                var g = this;
                return g.containerAttr("mod") == g._modName();
            },
            back: function() {
                return this.containerAttr("last");
            },
            cur: function() {
                return this.containerAttr("cmd");
            },
            settings: function() {
                return ( {
                    bAlwaysMsg: false,
                    bOwnDom: false
                }) ;
            },
            active: function() {},
            action: function() {
                this.view();
            },
            msgs: function() {
                return {};
            },
            render: function() {
                var h = this
                  , g = h._moRef
                  , i = g.view.apply(g, arguments);
                i && h.dom$().html(i);
                if (arguments[0] == "list") {
                    if (arguments[1].itms && arguments[1].itms.length == 0) {
                        h.$.$("#listToolBar").hide();
                    } else if (arguments[1].itms && arguments[1].itms.length > 0) {
                        h.$.$("#listToolBar").show();
                    }
                }
                return h;
            },
            eventLibs: function() {
                return [];
            },
            rule: function() {
                return ( {
                    fire: {
                        cmd: {}
                    }
                }) ;
            },
            events: function() {
                return ( {
                    cmd: function(h, i, g) {
                        var j = this;
                        j.cmd(j.$.$(i).attr("cmd"));
                    }
                }) ;
            },
            containerAttr: function() {
                var h = this
                  , g = h._moContainer$;
                return g.attr.apply(g, arguments);
            },
            toggle: function(g) {
                var h = this;
                if (g) {
                    h.active();
                    h._modTagEvent().handle(h);
                }
                h._mbIsActived = g;
                return h;
            },
            isActived: function() {
                return this._mbIsActived;
            },
            modFire: function() {
                var g = this
                  , h = g._modTagEvent();
                h.fire.apply(h, arguments);
            },
            popFire: function() {
                var g = this
                  , h = g._popTagEvent();
                h.fire.apply(h, arguments);
            },
            onmsg: function(g) {
                var j = this
                  , i = [].slice.call(arguments, 1)
                  , h = j._moMsgs[g];
                h && h.apply(j, i);
            },
            onaction: function() {
                var g = this;
                g.ref().app().modAction();
                return this.reload.apply(this, arguments);
            },
            show: function() {
                return this.beforeRender_().afterRender_();
            },
            reload: function() {
                var h = this
                  , g = [].slice.call(arguments)
                  , i = [h._modName()].concat(g).join(",")
                  , j = h.containerAttr("cmd") || i;
                h.containerAttr("cmd", i).attr("last", j);
                return h.action.apply(h, g);
            },
            pop: function(h, g) {
                var j = this
                  , k = j._modName()
                  , i = j.pop$();
                if (h && i.attr("mod") != k) {
                    j._popTagEvent().handle(j, e.extend({
                        oDom: i.attr("mod", k)
                    }, g));
                }
                return i.html(h);
            },
            isPopHidden: function() {
                return !this.pop$().html();
            },
            hidePop: function() {
                var g = this;
                g.pop$().html("");
                return g;
            },
            str2Arr: function(g) {
                if (g) {
                    var i = g.split(",")
                      , h = i.length;
                    h > 1 && !i[h - 1] && i.pop();
                    return i;
                }
                return [];
            },
            callback: function(i, h, g) {
                var m = this;
                if (e.isFunc(i)) {
                    return ( {
                        onbeforesend: function(n) {
                            g && g.apply(m, arguments);
                        },
                        onerror: function(n, o) {
                            h && h.apply(m, arguments);
                        },
                        onsuccess: function(n, o) {
                            i && i.apply(m, arguments);
                        }
                    }) ;
                } else {
                    var k = arguments[0] || {}
                      , l = {};
                    e.each(k, function(n) {
                        l[n] = j(k, n);
                    });
                    return l;
                }
                function j(n, o) {
                    return function() {
                        n[o] && e.call(m, n[o], arguments);
                    }
                    ;
                }
            },
            init_: function(g) {
                this.superEx_(f, "init_", [g])._initData(g)._initEvent(g)._initDom(g)._bindTips();
            },
            render_: function() {
                var h = this
                  , g = h._moDom$;
                h.$.$("#top_announce").show();
                h.hidePop();
                h.beforeRender_().render.apply(h, arguments);
                h.afterRender_();
            },
            beforeRender_: function() {
                var i = this
                  , h = i._moDom$
                  , g = h.data(0);
                if (!i._mbExclusive && (h.css("display") == "none" || !h.html())) {
                    h.show();
                    i._moContainer$.find("div[cnt]").each(function(j) {
                        if (j != g) {
                            i.$.$(j).hide();
                        }
                    });
                }
                return i;
            },
            afterRender_: function() {
                var g = this;
                g.containerAttr("mod", g._modName());
                g.msg("render", g._modName());
                return g;
            },
            modName_: function() {
                return this._modName();
            },
            _initData: function(g) {
                var h = this;
                h._moQMAF = g.oQMAF;
                h._moContainer$ = g.oDom;
                h._mbExclusive = g.bExclusive;
                h._msAndroidVer = g.sAndroidVer;
                h._moRef = g.oRef;
                h._msPrefix = g.sPrefix;
                h._moSettings = h.settings() || {};
                h._moEvents = h.events() || {};
                h._moRule = h.rule() || {};
                h._moMsgs = h._initMessages();
                return h;
            },
            _initDom: function(g) {
                var i = this
                  , h = i._moContainer$
                  , j = i._moSettings
                  , k = "__iNIt__";
                _sContainerAttr = i._msContainerAttr = "cnt='" + (j.bOwnDom ? i._modName() : "base") + "'";
                if (!h.attr(k)) {
                    !i._mbExclusive && h.html('<div cnt="base"></div>');
                    h.attr(k, true);
                }
                i._moDom$ = i._mbExclusive ? h : (function() {
                    var l;
                    if (j.bOwnDom) {
                        var l = h.find("[" + _sContainerAttr + "]");
                        if (!l.size()) {
                            l = h.append('<div ' + _sContainerAttr + '></div>').find("[" + _sContainerAttr + "]");
                        }
                        return l;
                    } else {
                        return h.find("[" + _sContainerAttr + "]");
                    }
                })();
                return i;
            },
            _initMessages: function() {
                var i = this
                  , g = i.msgs() || {}
                  , j = i._moSettings
                  , h = {};
                e.each(g, function(k, l) {
                    h[l] = function() {
                        (j.bAlwaysMsg || i.isActived()) && k.apply(i, arguments);
                    }
                    ;
                });
                return h;
            },
            _initEvent: function(g) {
                var i = this
                  , h = i._moMsgs;
                e.addEvent(i.ref().cmdCenter(), h, {
                    oContext: i
                });
                return i;
            },
            _getDom$: function() {
                var g = this;
                return g._moDom$;
            },
            _popTagEvent: function() {
                var g = this.pop$().data(0);
                return g._moEventHandle || (g._moEventHandle = e.ctrl("TagEventModHandle"));
            },
            _modTagEvent: function() {
                var g = this.dom$().data(0);
                return g._moEventHandle || (g._moEventHandle = e.ctrl("TagEventModHandle"));
            },
            _modName: function() {
                var g = this;
                return g._msTmplName = g._msTmplName || g.name_().replace(g._msPrefix, "").toLowerCase();
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/today.js", ["mobile/bu/phone/mod/mod.js", "mobile/data/todaymgr.js"], function(a) {
    var c = QMWin
      , b = c.ctor_()
      , d = c.sid();
    c.createCtrl("Mobile.Phone.Web.Today", {
        sSuper: "Mobile.Phone.Mod"
    }, function(e) {
        return ( {
            msgs: function() {
                return c.extend(e.msgs(), {
                    "SYN_UPDATE": function() {
                        this.action();
                    }
                });
            },
            rule: function() {
                var f = e.rule();
                c.extend(f.fire || (f.fire = {}), {
                    refresh: {},
                    closeWRAd: {}
                });
                return f;
            },
            events: function() {
                return c.extend(e.events(), {
                    refresh: function(g, h, f) {
                        var i = this
                          , j = i.$.$(h).replaceWith(i.tmplLib().refreshBtn(false));
                        i.dataCenter().update({
                            oCallbacks: {
                                onsuccess: function() {
                                    j.replaceWith(i.tmplLib().refreshBtn(true));
                                    i.viewData();
                                }
                            },
                            bAsync: true
                        });
                    },
                    closeWRAd: function() {
                        $.$('.qm_toolbar_weread_close').parent('.qm_toolbarSubTitle').hide();
                        $.$('.qm_toolbar_WeReadAd').rmClass('qm_toolbar_WeReadAd');
                        document.cookie = "wrad=1; expires=" + new Date(+new Date() + 365 * 24 * 60 * 60 * 1000);
                    }
                });
            },
            viewData: function() {
                var j = this
                  , i = j.dataCenter()
                  , k = i.getToday()
                  , h = j._botUrl() || {}
                  , g = {}
                  , f = i.getAppGrips(h, j._moreList());
                j.$.$("#foldermask").rmClass("folder_mask").hide();
                if (k.birth && k.birth.length) {
                    g["fr_br"] = {
                        u: k.birth.length,
                        n: k.birth[0].name,
                        url: h["fr_br"] && h["fr_br"].url
                    };
                }
                k = c.extend({
                    vw: {
                        promote: j._moPromote,
                        boxes: f,
                        bot: j._getBot(g, k.set || {})
                    }
                }, k);
                k.vw.showWereadAd = (document.cookie.indexOf('wrad') == -1);
                j.hash("today").view(k);
                j.$.$("#top_announce").hide();
            },
            action: function(f) {
                var g = this;
                $.$(".qm_list_item_Selected").rmClass("qm_list_item_Selected");
                f && g.dataCenter().update();
                g.viewData();
                g.msg("processCmd", "today");
                g.app().canShowTips() && c.loadPkg("mobile/ui/addtohome.js", {
                    onload: function(h) {
                        if (h) {
                            c.ctrl("Mobile.Ui.AddToHome", {
                                lifespan: 60000,
                                touchIcon: true
                            });
                        } else {
                            debug("AddToHome\u6A21\u5757\u52A0\u8F7D\u5931\u8D25");
                        }
                    }
                });
            },
            init_: function(f) {
                var g = this.superEx_(e, "init_", [f]);
            },
            _initPromote: function() {
                var g = this;
                if (!g._mbInitData) {
                    var f = g.app().promote();
                    g._moPromote = f.promote;
                    g._moBotList = f.bot;
                    g._moMore = f.more;
                    g._moBotUrl = f.url;
                    g._mbInitData = true;
                }
                return g;
            },
            _botList: function() {
                return this._initPromote()._moBotList;
            },
            _moreList: function() {
                return this._initPromote()._moMore;
            },
            _botUrl: function() {
                return this._initPromote()._moBotUrl;
            },
            _getBot: function(f, g) {
                var j = this
                  , i = [];
                c.each(j._botList(), function(l, k) {
                    var n = []
                      , o = l[0]
                      , m = l[1];
                    c.each(m, function(p) {
                        var q = f[p.i];
                        if (!q) {
                            return true;
                        }
                        if (p.h) {
                            if (q && q.u) {
                                n.push(h(p, q));
                            }
                        } else {
                            n.push(h(p, q));
                        }
                    });
                    n.length && i.push({
                        head: o,
                        itms: n
                    });
                });
                return i;
                function h(k, l) {
                    return {
                        b: k.b,
                        html: k.t ? c.TE(k.n, "%").replace(l) : k.n + (!k.v && l.u > 0 ? "(" + l.u + ")" : ""),
                        cmd: l.cmd,
                        url: l.url && c.T(l.url, "%").replace({
                            sid: d,
                            domain: g.domain
                        })
                    };
                }
            },
            _mergeBotArgs: function(f, g) {
                var h = f || {};
                c.each(g, function(i, j) {
                    if (j in h) {
                        c.extend(h[j], i);
                    } else {
                        h[j] = i;
                    }
                });
                return h;
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/concact.js", ["mobile/bu/phone/mod/mod.js"], function(c) {
    var e = QMWin
      , d = e.ctor_();
    var a = "qm_list_item_Selected"
      , b = "active";
    e.createCtrl("Mobile.Phone.Web.Concact", {
        sSuper: "Mobile.Phone.Mod"
    }, function(f) {
        return ( {
            rule: function() {
                var g = f.rule();
                e.extend(g.fire || (g.fire = {}), {
                    menu: {},
                    concactSelect: {
                        sContext: "concact"
                    },
                    compose: {
                        sContext: "concactContent"
                    },
                    search: {
                        sContext: "concactContent"
                    },
                    searchOK: {
                        sContext: "search"
                    },
                    searchCancel: {
                        sContext: "search"
                    },
                    toolbarClose: {
                        sContext: "toolbar"
                    },
                    selectAll: {
                        sContext: "toolbar"
                    }
                });
                return g;
            },
            events: function() {
                return e.extend(f.events(), {
                    menu: function(h, i, g) {
                        var j = this;
                        j._menu(j.$.$(i).attr("mu"));
                    },
                    concactSelect: function(h, i, g) {
                        var m = this, l = m.dom$(), n = l.find("[un='toolbar']"), k = m.$.$(g), j;
                        i.checked ? k.addClass(a) : k.rmClass(a);
                        if (j = l.find("." + a).size()) {
                            n.addClass("func_posFixed").show().find("[un='selectCount']").show().find("[un='num']").html(j > 0 ? j : "");
                            n.find("[un='close']").show();
                            m._scrollToolBar();
                        } else {
                            n.rmClass("func_posFixed").show().find("[un='selectCount']").hide().find("[un='num']").html("");
                            n.find("[un='close']").hide();
                            m._scrollToolBar();
                        }
                        if (j == $.$(".contacts_list").find(".qm_list_item").data().length) {
                            $.$("[un='checkAll']").attr("checked", true);
                        } else {
                            $.$("[un='checkAll']").attr("checked", false);
                        }
                    },
                    compose: function(i, j, h) {
                        var m = this
                          , g = m.$
                          , l = g.$(h)
                          , k = [];
                        l.find("." + a).each(function(n) {
                            var o = g.$(n);
                            k.push({
                                name: o.attr("name"),
                                addr: o.attr("addr")
                            });
                        });
                        m.cmd("compose", "concact", k);
                    },
                    search: function(h, i, g) {
                        this.$.$(g).find("[un='search']").toggle();
                    },
                    searchOK: function(h, i, g) {
                        var j = this
                          , k = j.$.$(g).find("input").attr("value");
                        e.preventDefault(h);
                        if (k) {
                            j.moOptions = {
                                sSearch: k
                            };
                            j.updateData_();
                        }
                    },
                    searchCancel: function(h, i, g) {
                        this.$.$(g).toggle();
                    },
                    toolbarClose: function(h, i, g) {
                        var l = this
                          , k = l.dom$()
                          , j = $.$("[type='checkbox']")
                          , m = k.find("[un='toolbar']");
                        k.find("." + a).rmClass(a);
                        m.rmClass("func_posFixed").show().find("[un='selectCount']").hide().find("[un='num']").html("");
                        m.find("[un='close']").hide();
                        j.each(function(n) {
                            n.checked = false;
                        });
                        l._scrollToolBar();
                    },
                    selectAll: function(h, i, g) {
                        var j = i.checked;
                        var k = $.$(".contacts_list").find(".qm_list_item");
                        var l = $.$("[un='selectCount']");
                        k.each(function(m) {
                            var o = $.$(m);
                            var n = o.find("[type='checkbox']");
                            j ? o.addClass(a) : o.rmClass(a);
                            n.attr("checked", j);
                        });
                        l.find("[un='num']").html(k.data().length);
                        j ? l.show() : l.hide();
                        _oSelf._scrollToolBar();
                    }
                });
            },
            msgs: function() {
                return e.extend(f.msgs(), {
                    "scroll": function(g) {
                        this._scrollToolBar();
                    }
                });
            },
            action: function() {
                var g = this;
                $.$(".qm_list_item_Selected").rmClass("qm_list_item_Selected");
                $.$("#fl").find("[cmd='concact']").addClass("qm_list_item_Selected");
                g.moOptions = {
                    bHot: true
                };
                g.updateData_();
                g.hash("concact");
            },
            init_: function(g) {
                var h = this.superEx_(f, "init_", [g]);
            },
            updateData_: function(g) {
                var h = this;
                h.dataCenter().loadAddrLst(h.moOptions, e.extend({
                    onbeforesend: function(i) {
                        h.view(e.extend({
                            vw: {
                                beforesend: true
                            }
                        }, i));
                    },
                    onsuccess: function(i, j) {
                        h.view({
                            oData: i,
                            oOption: {
                                sSearch: j.sSearch
                            }
                        });
                        h.msg("processCmd", "concact");
                    },
                    onerror: function(i, j, k) {
                        h.view($.extend(i, {
                            loadErr: true
                        }));
                        h.msg("processCmdErr", "concact");
                    }
                }, g));
            },
            _scrollToolBar: function() {
                var o = this
                  , g = o.$
                  , r = g.inWin()
                  , n = r.document
                  , m = n.body
                  , k = g.$(m).find(".top_announce").data().length ? g.$(m).find(".top_announce").data(0).offsetHeight - 1 : 0
                  , p = g.$("#addrListToolBar")
                  , q = p.data(0).parentNode
                  , j = p.height()
                  , h = window.innerHeight || document.documentElement.clientHeight
                  , l = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  , i = g.$("#addrListToolBarWrapper").offset().top;
                _nSelected = o.dom$().find("." + a).data().length;
                if (i - l <= h - j || !_nSelected) {
                    p.rmClass("func_posFixed");
                } else {
                    p.css("top", "");
                    p.css("bottom", k + "px");
                    p.addClass("func_posFixed");
                }
                return o;
            },
            _menu: function(g) {
                var j = this
                  , i = j.dom$()
                  , k = i.find("[mu='" + g + "']")
                  , h = !k.hasClass(b);
                i.find("[menu='top']").hide();
                i.find("[mu]").rmClass(b);
                if (h) {
                    k.addClass(b);
                    i.find("[un='" + g + "']").show();
                }
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/nav.js", ["mobile/bu/phone/mod/mod.js"], function(g) {
    var i = QMWin
      , h = i.ctor_();
    var c = "mui_btn_navmain_down"
      , a = "appgrid_mask"
      , b = "active"
      , e = "active"
      , d = "mui_hidden"
      , f = ['<span class="behind_point"></span>', '<span class="text_t">$navname$</span>', '<span class="front_point"></span>'].join("");
    i.createCtrl("Mobile.Phone.Web.Nav", {
        sSuper: "Mobile.Phone.Mod"
    }, function(j) {
        return ( {
            msgs: function() {
                return i.extend(j.msgs(), {
                    "render": function(l) {
                        var n = this
                          , k = n.$
                          , o = l == "concact" ? "\u8054\u7CFB\u4EBA" : "\u90AE\u4EF6";
                        !n.$.$("body").data().scrollTop && n.$.inWin().scrollTo(0, 1);
                        n._hideMore();
                        function m() {
                            var p = n._moRef.hash();
                            if (p == "list,8__" || p.indexOf("mail,8__,") == 0) {
                                return ",group";
                            } else {
                                return "";
                            }
                        }
                    }
                });
            },
            action: function() {
                var l = this
                  , k = l.dataCenter().getAlias();
                l.view({
                    account: k ? k.def.name : ""
                });
            },
            render: function() {
                var p = this
                  , k = p.$
                  , n = k.$("#moreProduct")
                  , o = k.$("#moreProductList");
                n.addEvent("click", q);
                k.$("#appgripsmask").addEvent("click", l);
                var m = k.$("#cache");
                m && m.addEvent("click", function() {
                    p.dataCenter().printCache();
                });
                return p;
                function q() {
                    !n.hasClass(b) ? p._showMore() : p._hideMore();
                }
                function l() {
                    p._hideMore();
                }
            },
            _hideMore: function() {
                var l = this
                  , k = l.$;
                k.$("#moreProduct").rmClass(b).find("a").rmClass(b);
                k.$("#moreProductList").hide();
                k.$("#appgripsmask").rmClass(a).hide();
            },
            _showMore: function() {
                var r = this
                  , k = r.$
                  , p = k.$("#moreProduct")
                  , o = r.dataCenter()
                  , q = r.app().promote()
                  , n = q.url || {}
                  , m = o.getAppGrips(n, q.more, "appgrids")
                  , l = p.height() + p.offset().top;
                k.$("#moreProduct").addClass(b).find("a").addClass(b);
                k.$("#moreProductList").html(r.tmplLib().appGrids({
                    vw: {
                        boxes: m
                    }
                })).css("top", l + "px").show();
                k.$("#appgripsmask").addClass(a).css("top", l + "px").show();
            },
            init_: function(k) {
                var l = this.superEx_(j, "init_", [k]);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/folder.js", ["mobile/bu/phone/mod/mod.js"], function(a) {
    var c = QMWin
      , b = c.ctor_()
      , d = c.sid();
    c.createCtrl("Mobile.Phone.Web.Folder", {
        sSuper: "Mobile.Phone.Mod"
    }, function(e) {
        return ( {
            _showFolders: function(g, f) {
                var h = {};
                c.each(g, function(i) {
                    var k = i.split(".")
                      , l = k[0];
                    if (k.length == 1) {
                        h[l] = f[l];
                    } else if (k.length == 2) {
                        var j = h[l] || (h[l] = []);
                        c.each(f[l], function(m) {
                            m.idx == k[1] && j.push(m);
                        });
                    }
                });
                return h;
            },
            _hideFolders: function(g, f) {
                var h = f;
                c.each(g, function(i) {
                    var k = i.split(".")
                      , l = k[0];
                    if (k.length == 1) {
                        delete h[l];
                    } else if (k.length == 2) {
                        var j = [];
                        c.each(f[l], function(m) {
                            m.idx != k[1] && j.push(m);
                        });
                        h[l] = j;
                    }
                });
                return h;
            },
            action: function(f) {
                var h = this
                  , g = h.dataCenter().getFolder();
                $.$(".qm_list_item_Selected").rmClass("qm_list_item_Selected");
                $.$("#fl").find("[cmd='folder']").addClass("qm_list_item_Selected");
                if (f == "noInbox") {
                    g = h._hideFolders(["sys.1__"], g);
                    h.hash("folder,noInbox").view({
                        vw: {
                            folder: g,
                            type: "folder"
                        }
                    });
                } else {
                    h.hash("folder").view({
                        vw: {
                            folder: g
                        }
                    });
                }
                h.msg("processCmd", "folder");
            },
            init_: function(f) {
                var g = this.superEx_(e, "init_", [f]);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/grouplst.js", ["mobile/bu/phone/mod/mod.js"], function(b) {
    var d = QMWin
      , c = d.ctor_()
      , e = d.sid()
      , a = "\u52A0\u8F7D\u7FA4\u5217\u8868\u5931\u8D25";
    d.createCtrl("Mobile.Phone.Web.GroupLst", {
        sSuper: "Mobile.Phone.Mod"
    }, function(f) {
        return ( {
            action: function() {
                var g = this;
                g.dataCenter().getGroupLst({}, {
                    onsuccess: function(h) {
                        g.hash("grouplst").view(h);
                    },
                    onerror: function() {
                        g.err(a).cmd(g.back() || "today");
                    }
                });
                g.msg("processCmd", "grouplst");
            },
            init_: function(g) {
                var h = this.superEx_(f, "init_", [g]);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/list.js", ["mobile/bu/phone/mod/mod.js", "mobile/bu/phone/event/popup.js"], function(w) {
    var y = QMWin
      , x = y.ctor_();
    var f = "qm_list_item_Selected"
      , g = "selected"
      , e = "mui_li_selected"
      , d = "active"
      , h = "mui_ico_checked"
      , a = "\u662F\u5426\u9000\u8BA2\u5168\u90E8\u8BA2\u9605\u680F\u76EE\uFF1F"
      , b = "\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"
      , c = "QQ\u90AE\u7BB1"
      , r = "\u8C22\u8C22\uFF0C\u4E3E\u62A5\u5783\u573E\u90AE\u4EF6\u6210\u529F\uFF01\u66F4\u591A\u8BE6\u60C5\u53EF\u53C2\u770B\u4E3E\u62A5\u6570\u636E\u4E2D\u5FC3\u3002"
      , t = "\u8BBE\u7F6E\u6807\u7B7E\u6210\u529F"
      , u = "\u8BBE\u7F6E\u672A\u8BFB\u6210\u529F"
      , q = "\u8BBE\u7F6E\u5DF2\u8BFB\u6210\u529F"
      , p = "\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u52A8"
      , o = "\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u5220\u9664"
      , s = "\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u661F\u6807"
      , v = "\u5DF2\u5C06\u90AE\u4EF6\u53D6\u6D88\u661F\u6807"
      , i = "\u8BF7\u9009\u62E9\u90AE\u4EF6"
      , j = "\u8BF7\u8F93\u51FA\u60A8\u7684\u52A0\u9501\u5BC6\u7801"
      , l = "\u6536\u4EF6\u7BB1"
      , m = "\u5DF2\u53D1\u9001"
      , k = "\u7FA4\u90AE\u4EF6"
      , n = "QQ\u90AE\u4EF6\u8BA2\u9605";
    y.createCtrl("Mobile.Phone.Web.List", {
        sSuper: "Mobile.Phone.Mod"
    }, function(z) {
        return ( {
            settings: function() {
                return y.extend(z.settings(), {
                    bAlwaysMsg: true,
                    bOwnDom: true
                });
            },
            eventLibs: function() {
                return [{
                    name: "Mobile.Phone.Event.Popup"
                }];
            },
            rule: function() {
                var A = z.rule();
                y.extend(A.fire || (A.fire = {}), {
                    cur: {},
                    menu: {},
                    refresh: {},
                    popMail: {},
                    searchOK: {
                        sContext: "search"
                    },
                    searchOKInPad: {
                        sContext: "searchInPad"
                    },
                    searchCancel: {
                        sContext: "search"
                    },
                    fldrPwdOK: {
                        sContext: "fldrPwd"
                    },
                    fldrPwdCancel: {
                        sContext: "fldrPwd"
                    },
                    mailSelect: {
                        sContext: "mail"
                    },
                    mailSelectAll: {},
                    unreadAll: {},
                    readAll: {},
                    delAll: {},
                    perDelAll: {},
                    spamAll: {},
                    tagAll: {},
                    moveAll: {},
                    unsub: {},
                    toolbarClose: {
                        sContext: "toolbar"
                    },
                    toolbarMore: {
                        sContext: "toolbar"
                    },
                    returnBack: {}
                });
                return A;
            },
            events: function() {
                return y.extend(z.events(), {
                    cmd: function(B, C, A) {
                        var E = this
                          , F = E.$.$(C).attr("cmd")
                          , D = (F || "").split(",");
                        if (D[0] == "mail" && D[1]) {
                            E._markScroll(E._msIndex, D[2]);
                        }
                        E.cmd(E.$.$(C).attr("cmd"));
                    },
                    cur: function(B, C, A) {
                        var N = this
                          , L = N.dataCenter()
                          , O = N.$.$(C)
                          , F = 100
                          , G = 5
                          , D = O.attr("curType") == "max"
                          , I = O.attr("cur").split("|")
                          , P = I[1]
                          , H = y.toNum(I[0], 0)
                          , J = N.moOptions
                          , M = {
                            sSearch: J.sSearch,
                            sFolderId: J.sFolderId,
                            sFlag: J.sFlag,
                            sTagId: J.sTagId,
                            oCursor: D ? {
                                sMaxId: P,
                                nMaxUTC: H
                            } : {
                                sSinceId: P,
                                nSinceUTC: H,
                                nCount: F
                            }
                        }
                          , K = {
                            cur: D ? {
                                max: {
                                    id: P,
                                    UTC: H
                                }
                            } : {
                                since: {
                                    id: P,
                                    UTC: H
                                }
                            }
                        };
                        L.loadMList(M, {
                            onbeforesend: function() {
                                O.html(N.tmplLib().listLoading());
                            },
                            onerror: function() {
                                O.replaceWith(D ? N.tmplLib().listCurMax(K) : N.tmplLib().listCurSince(K));
                            },
                            onsuccess: function(Q, R) {
                                var Z = R || {};
                                if (!(Q && Q.itms && Q.itms.length)) {
                                    O.remove();
                                    return;
                                }
                                var X = N.dom$().find("[un='mail']"), W, aa, ad, V;
                                !D && S(E("next", O));
                                if (X.size() >= F && !Z.bLoad) {
                                    var U, T;
                                    D && S(E("previous", O));
                                    Z.oCursor = D ? {
                                        nCount: G,
                                        sSinceId: Q.itms[0].inf.id,
                                        nSinceUTC: Q.itms[0].inf.UTC
                                    } : {
                                        nCount: G,
                                        sMaxId: Q.itms[Q.itms.length - 1].inf.id,
                                        nMaxUTC: Q.itms[Q.itms.length - 1].inf.UTC
                                    };
                                    if ((W = L.getMList(Z)) && W.itms.length) {
                                        var ab = W.itms[0]
                                          , Y = W.itms[W.itms.length - 1]
                                          , ac = D ? N.tmplLib().listCurSince({
                                            cur: {
                                                sinceEnd: W.cur.sinceEnd,
                                                since: {
                                                    id: ab.inf.id,
                                                    UTC: ab.inf.UTC
                                                }
                                            }
                                        }) : N.tmplLib().listCurMax({
                                            cur: {
                                                maxEnd: W.cur.maxEnd,
                                                max: {
                                                    id: Y.inf.id,
                                                    UTC: Y.inf.UTC
                                                }
                                            }
                                        });
                                        U = ab.inf.UTC;
                                        T = Y.inf.UTC;
                                        N.dom$().find("[curType='" + (D ? "since" : "max") + "']").remove();
                                        O.parent("div").insert(ac, D ? "afterBegin" : "beforeEnd");
                                        N.dom$().find("[un='mail']").each(function(af) {
                                            var ah = N.$.$(af)
                                              , ag = y.toNum(ah.attr("UTC"), 0);
                                            if (ag < T || ag > U) {
                                                ah.remove();
                                            }
                                        });
                                    } else {
                                        log("err:[list]notFoundCursor");
                                    }
                                    D && ae();
                                }
                                O.replaceWith(N.tmplLib().listItems(Q));
                                N._scrollToolBar();
                                !D && ae();
                                function S(af) {
                                    if (aa = af) {
                                        ad = aa.data().id;
                                        V = aa.offset().top;
                                    }
                                }
                                function ae() {
                                    if (ad && (aa = N._mail$(ad)) && aa.size()) {
                                        N.$.inWin().scroll(0, (V - aa.offset().top) * (D ? 1 : -1));
                                    }
                                }
                            }
                        });
                        function E(R, Q) {
                            if (Q.size()) {
                                var S = N.$.$(Q.data()[R + "Sibling"]);
                                return S.attr("un") == "mail" ? S : E(R, S);
                            }
                        }
                        N._scrollToolBar();
                    },
                    refresh: function(B, C, A) {
                        var D = this;
                        D.moOptions.bRefresh = true;
                        D.updateData_();
                    },
                    popMail: function(B, C, A) {
                        var D = this
                          , E = D.$.$(C)
                          , F = y.T("/cgi-bin/foldermgr?sid=$sid$&folderid=$fid$&sorttype=time&loc=folderlist,,xhtml,1&hittype=5&fun=recvpop&acctid=1");
                        D._moMarkPop = 2;
                        E.replaceWith(D.tmplLib().popMail(false));
                        y.ajax({
                            sUrl: F.replace({
                                sid: y.sid(),
                                fid: E.attr("fid").replace("__", "")
                            }),
                            nTimeout: 0,
                            oncomplete: function(H, I, G) {
                                D.moOptions.bRefresh = true;
                                D.updateData_();
                            }
                        });
                    },
                    mailSelect: function(B, C, A) {
                        var G = this, F = G.dom$(), H = F.find("[un='toolbar']"), E = G.$.$(A), D;
                        E.hasClass(f) ? E.rmClass(f) : E.addClass(f);
                        if (D = F.find("." + f).size()) {
                            H.show().find("[un='selectCount']").html(D > 0 ? D : "");
                            if (D > 0) {
                                H.find("[un='selectCount']").show();
                            } else {
                                H.find("[un='selectCount']").hide();
                            }
                            G._scrollToolBar();
                        } else {
                            if (D > 0) {
                                H.find("[un='selectCount']").show();
                            } else {
                                H.find("[un='selectCount']").hide();
                            }
                        }
                        G._selectChange();
                    },
                    mailSelectAll: function(B, C, A) {
                        var F = this
                          , E = F.dom$()
                          , D = F.$.$(C);
                        if (D.hasClass(g)) {
                            D.rmClass(g);
                            _bCheck = false;
                        } else {
                            D.addClass(g);
                            _bCheck = true;
                        }
                        E.find("input[type=checkbox]").each(function(G) {
                            var H = $.$(G);
                            if (H.attr("un") == "mailcb" && H.attr("checked") != _bCheck) {
                                G.click();
                            }
                        });
                    },
                    menu: function(B, C, A) {
                        var D = this;
                        D._menu(D.$.$(C).attr("mu"));
                    },
                    searchOK: function(B, C, A) {
                        var D = this
                          , E = D.$.$(A).find("input").attr("value");
                        D._search(E);
                        y.preventDefault(B);
                    },
                    searchOKInPad: function(B, C, A) {
                        var D = this
                          , E = D.$.$(A).find("input").attr("value");
                        D._search(E);
                        y.preventDefault(B);
                    },
                    searchCancel: function(B, C, A) {
                        var D = this;
                        D._hideMenu();
                    },
                    fldrPwdOK: function(B, C, A) {
                        var F = this
                          , D = F.$.$(A)
                          , E = D.find("input")
                          , G = E.attr("value");
                        if (G) {
                            F.dataCenter().unlockfolder({
                                sPwd: G
                            }, {
                                onbeforesend: function() {
                                    D.find("input").attr("diabled", true);
                                },
                                onsuccess: function() {
                                    F.cmd(F.cur());
                                },
                                onerror: function(H) {
                                    D.find("[un='msg']").html(H.message);
                                    D.find("input").attr("diabled", false).attr("value", "").focus();
                                }
                            });
                        } else {
                            F.err(j);
                            E.focus();
                        }
                    },
                    fldrPwdCancel: function(B, C, A) {
                        var D = this;
                        D.cmd(D.back());
                    },
                    unreadAll: function(B, C, A) {
                        var D = this;
                        D._unreadAll(D._getMailIds(), true);
                    },
                    readAll: function(B, C, A) {
                        var D = this;
                        D._unreadAll(D._getMailIds(), false);
                    },
                    delAll: function(B, C, A) {
                        var D = this;
                        D._delAll(D._getMailIds(), false);
                    },
                    perDelAll: function(B, C, A) {
                        var E = this
                          , D = E._getMailIds();
                        if (!D.length) {
                            alert(i);
                        } else {
                            if (confirm(b, c)) {
                                E._delAll(D, true);
                            }
                        }
                    },
                    spamAll: function(B, C, A) {
                        var E = this
                          , D = E._getMailIds()
                          , F = [];
                        if (!D.length) {
                            alert(i);
                        } else {
                            E.pop(E.tmplLib().popSpam({
                                id: D.join(",")
                            }));
                        }
                    },
                    tagAll: function(B, C, A) {
                        var F = this
                          , E = F._getMailIds()
                          , H = [];
                        if (!E.length) {
                            alert(i);
                        } else {
                            var G = {};
                            if (E.length == 1) {
                                var D = F.dataCenter().getMail({
                                    sId: E[0]
                                }, true);
                                D && D.inf && D.inf.tagLst && y.each(D.inf.tagLst, function(I) {
                                    G[I.id] = 1;
                                });
                            }
                            y.each(F.dataCenter().getFolder().tag, function(I) {
                                var J = I.inf;
                                H.push({
                                    id: J.id,
                                    name: J.name,
                                    color: J.color,
                                    select: G && G[J.id] ? 1 : 0
                                });
                            });
                            F.pop(F.tmplLib().popTag({
                                id: E.join(","),
                                tagLst: H
                            }));
                        }
                    },
                    moveAll: function(B, C, A) {
                        var H = this
                          , F = H._getMailIds();
                        if (!F.length) {
                            alert(i);
                        } else {
                            var E = H.dataCenter().getFolder(), J;
                            y.each(E.sys, function(K) {
                                K.inf.name == "QQ\u90AE\u4EF6\u8BA2\u9605" && (J = K.inf.id);
                            });
                            var I = [{
                                inf: {
                                    id: "1",
                                    name: l
                                }
                            }, {
                                inf: {
                                    id: "3",
                                    name: m
                                }
                            }, {
                                inf: {
                                    id: "8",
                                    name: k
                                }
                            }, {
                                inf: {
                                    id: J,
                                    name: n
                                }
                            }]
                              , G = []
                              , D = function(K) {
                                var L = K.inf
                                  , M = L.id;
                                if (L.acctEmail) {
                                    G.push({
                                        id: M,
                                        acctEmail: L.acctEmail,
                                        name: L.name,
                                        select: M + "__" == H._msIndex ? 1 : 0
                                    });
                                } else {
                                    G.push({
                                        id: M,
                                        name: L.name,
                                        select: M + "__" == H._msIndex ? 1 : 0
                                    });
                                }
                            };
                            y.each(I, D);
                            y.each(E.user, D);
                            y.each(E.pop, D);
                            H.pop(H.tmplLib().popMove({
                                id: F.join(","),
                                moveLst: G
                            }));
                        }
                    },
                    unsub: function(B, C, A) {
                        var D = this;
                        if (confirm(a)) {
                            D.$.inWin().location.href = "/cgi-bin/setting10?action=desubscribeall&sid=" + y.sid() + "&t=dy_cleanall&classid=4203&folderid=1&s=cntchk_04";
                        }
                    },
                    toolbarClose: function(B, C, A) {
                        this._clearSelect();
                    },
                    toolbarMore: function(B, C, A) {
                        var D = this
                          , E = D.$.$(C)
                          , F = D.$.$(A).find("[un='toolbarMore']");
                        !E.hasClass(d) ? E.addClass(d) && F.show() : E.rmClass(d) && F.hide();
                    },
                    returnBack: function(B, C, A) {
                        var D = this;
                        var E = D.back();
                        if (E.indexOf("search") != -1) {
                            E = "today";
                        } else if (D.hash().indexOf("search") == -1) {
                            E = E == "folder" ? "folder" : "today";
                        }
                        D.cmd(E);
                    }
                });
            },
            msgs: function() {
                return y.extend(z.msgs(), {
                    "MAIL_CHANGE": function(A) {
                        var C = this;
                        if (C._mail$(A).size()) {
                            var B = C.dataCenter().getMail({
                                sId: A
                            }, true);
                            B && C._drawMail(B);
                        }
                    },
                    "MAIL_REMOVE_INDEX": function(B, A) {
                        var C = this;
                        C._msIndex == A && C._mail$(B).remove();
                    },
                    "MAIL_UPDATE": function(A) {
                        var B = this;
                        B._msCurrMailId == A && B.updateData_();
                    },
                    "LIST_CHANGE": function(A) {
                        var C = this;
                        if (C._msIndex == A) {
                            var B = C.dataCenter().getMList(C.moOptions);
                            B && C.view(C._setListData(B));
                        }
                    },
                    "LIST_STATUS_CHANGE": function(A) {
                        var C = this;
                        if (C._msIndex == A) {
                            var B = C.dataCenter().getFolderInfo(A);
                            C._drawNav(C._setListData(B));
                        }
                    },
                    "LIST_INFO_CHANGE": function(A) {
                        var C = this;
                        if (C._msIndex == A) {
                            var B = C.dataCenter().getMList(C.moOptions);
                            B && C.view(C._setListData(B));
                        }
                    },
                    "LIST_LOAD_BEGIN": function() {
                        this._drawLoading();
                    },
                    "LIST_LOAD_FINISH": function() {
                        this._drawRefresh();
                    },
                    "scroll": function(A) {
                        this._scrollToolBar();
                    }
                });
            },
            action: function(B, C, A) {
                var F = this;
                if (B == "1__") {
                    $.$(".qm_list_item_Selected").rmClass("qm_list_item_Selected");
                    $.$("#fl").find("[cmd='list,1__']").addClass("qm_list_item_Selected");
                }
                if (F._msIndex == B && F.dataCenter().getMList(F.moOptions)) {
                    F.$.$("#top_announce").show();
                    return F.show().hash("list," + B);
                }
                var F = this
                  , G = (F._msIndex = B || "").split("_")
                  , D = G[0] == "search"
                  , E = F.moOptions = D ? {
                    sSearch: G[1]
                } : {
                    sFolderId: G[0],
                    sFlag: G[1],
                    sTagId: G[2]
                };
                F.updateData_({
                    onsuccess: function(H) {
                        !A && F.hash("list," + B);
                        if (H) {
                            var I = F.dataCenter()
                              , J = I.getFolder().pop || [];
                            F._msIndex = B;
                            F._moMarkPop = 0;
                            for (var K = 0; K < J.length; K++) {
                                if (B == J[K].idx) {
                                    F._moMarkPop = 1;
                                    break;
                                }
                            }
                            F.view(y.extend({
                                vw: {
                                    folder: I.getFolder(),
                                    ispop: F._moMarkPop
                                }
                            }, H))._scroll(B);
                        } else {
                            F.view({});
                        }
                        F.msg("processCmd", "list," + B);
                    }
                });
            },
            active: function() {
                this.dom$();
            },
            render: function(B, A) {
                var C = this;
                if (!C.hasRender()) {
                    C._setIndex(A);
                    z.render.apply(C, arguments);
                    !C._mbIsInitMask && C._initMenuMask();
                } else {
                    C._drawNav(A)._drawList(A)._drawToolBar(A)._hideMenuMask();
                }
                C._scrollToolBar()._clearSelect();
                !C.app().isPadMode() && (document.body.scrollTop = $.$("#nv").height());
            },
            init_: function(A) {
                var B = this.superEx_(z, "init_", [A]);
                B._moScroll = {};
                B._mbIsInitMask = false;
            },
            updateData_: function(A) {
                var C = this
                  , B = C.dataCenter();
                B.loadMList(C.moOptions, y.extend({
                    onprefetch: function(D) {
                        C.view(y.extend({
                            vw: {
                                prefetch: true,
                                folder: B.getFolder(),
                                ispop: C._moMarkPop
                            }
                        }, D));
                    },
                    onsuccess: function(D) {
                        C._moMarkPop == 2 && (C._moMarkPop = 1);
                        C.view(y.extend({
                            vw: {
                                folder: B.getFolder(),
                                ispop: C._moMarkPop
                            }
                        }, D));
                    },
                    onerror: function(D, E, F) {
                        C._moMarkPop == 2 && (C._moMarkPop = 1);
                        switch (E.type) {
                        case "folderpwd":
                            var H = C.pop(C.tmplLib().popFldrPwd({}));
                            setTimeout(function() {
                                H.find("input").data(0).focus();
                            }, 1000);
                            break;
                        default:
                            var G = D || {};
                            G.error = E;
                            G = y.extend({
                                vw: {
                                    folder: B.getFolder(),
                                    ispop: C._moMarkPop
                                }
                            }, G);
                            C.view(G);
                            C.msg("processCmdErr", "list," + C._msIndex);
                            break;
                        }
                    }
                }, A));
            },
            tag_: function(C, B, A) {
                var D = this;
                D.dataCenter().tag({
                    sIds: C.split(","),
                    oTags: B,
                    oColors: A
                }, D.callback(function(E) {
                    B.length && D.suc(t);
                    D._clearSelect().hidePop();
                }));
            },
            move_: function(B, A) {
                var C = this
                  , D = C._msIndex;
                C.dataCenter().move({
                    sIds: B.split(","),
                    sDestId: A
                }, C.callback(function(E) {
                    C.suc(p)._clearSelect().cmd("list", C._msIndex);
                }));
            },
            spam_: function(A, B) {
                var C = this;
                C.dataCenter().spam({
                    sIds: A.split(","),
                    sSpamId: B
                }, C.callback(function(D) {
                    C.suc(r)._clearSelect().hidePop();
                }));
            },
            _getMailIds: function() {
                var C = this
                  , A = C.dom$()
                  , B = [];
                A.find("." + f).each(function(D) {
                    B.push(D.id);
                });
                return B;
            },
            _unreadAll: function(B, A) {
                var C = this;
                !B.length ? alert(i) : C.dataCenter().unread({
                    sIds: B,
                    bUnread: A
                }, C.callback(function() {
                    C.suc(A ? u : q)._clearSelect();
                }));
            },
            _delAll: function(B, A) {
                var C = this;
                !B.length ? alert(i) : C.dataCenter().delMail({
                    sIds: B,
                    bPerDel: A
                }, C.callback(function() {
                    C.suc(o)._clearSelect();
                }), true);
            },
            _mail$: function(B) {
                var C = this
                  , A = C.$;
                return A.$(A.$(":doc").data().getElementById(B));
            },
            _drawNav: function(A) {
                var C = this
                  , B = C.$.$("#listNav")
                  , D = C.tmplLib().listNav(A);
                B.html() != D && B.html(D);
                return C;
            },
            _drawList: function(A) {
                var D = this
                  , C = D.$.$("#listContent")
                  , B = D._setIndex(A)
                  , E = D.tmplLib().listContent(B)
                  , F = [];
                window.test = B;
                C.find("." + f).each(function(G) {
                    F.push(G.id);
                });
                C.html() != E && C.html(E);
                y.each(F, function(G) {
                    D._mail$(G).addClass(f);
                });
                return D;
            },
            _showToolBar: function() {
                var A = this;
                A.$.$("#listToolBar").show();
                return A;
            },
            _hideToolBar: function() {
                var A = this;
                A.$.$("#listToolBar").hide();
                return A;
            },
            _drawToolBar: function(A) {
                var C = this
                  , B = C.dom$().find("." + f).size()
                  , D = C.$.$("#listToolBar");
                D.html(C.tmplLib().listToolBar(A)).find("[un='selectCount']").html(B > 0 ? B : "");
                D.find("[un='close']").hide();
                if (B > 0) {
                    D.find("[un='selectCount']").show();
                } else {
                    D.find("[un='selectCount']").hide();
                }
                if (A.itms && A.itms.length == 0) {
                    C._hideToolBar();
                } else {
                    C._showToolBar();
                }
                return C;
            },
            _drawMail: function(A) {
                var B = this;
                B._replaceMail(A.inf.id, B._setIndex(A));
                return B;
            },
            _drawUnrdCnt: function() {
                var A = this;
                A.$.$("#listNav").find("span").replaceWith('<span class="unread mui_li_sign"><b class="icon icon_sync"></b></span>');
                return A;
            },
            _drawLoading: function() {
                var B = this
                  , A = B.$
                  , C = B.tmplLib();
                B._hideToolBar();
                A.$("#refresh").replaceWith(C.refreshBtn(false));
                A.$("#listNav").find("span.unread").replaceWith(C.refreshUnRdCnt());
                return B;
            },
            _drawRefresh: function() {
                var B = this
                  , C = B._msIndex
                  , A = Self.dataCenter().getFolderInfo(C).lst;
                B.$.$("#refresh").replaceWith(B.tmplLib().refreshBtn(true));
                C && $.$("#listNav").find("span.unread").html(A.urCnt);
                if (A.cnt) {
                    B._showToolBar();
                }
                return B;
            },
            _setListData: function(A) {
                var C = this
                  , B = A || {}
                  , D = B.vw = B.vw || {};
                D.folder = C.dataCenter().getFolder();
                return B;
            },
            _initMenuMask: function() {
                var E = this
                  , A = E.$
                  , C = E.dom$()
                  , D = A.$("#foldermask");
                D.rmClass("folder_mask").hide().addEvent("click", B);
                E._mbIsInitMask = true;
                return E;
                function B() {
                    E._hideMenu();
                    A.$("#foldermask").rmClass("folder_mask").hide();
                }
            },
            _hideMenuMask: function() {
                var A = this;
                A.$.$("#foldermask").rmClass("folder_mask").hide();
                return A;
            },
            _hideMenu: function() {
                var B = this
                  , A = B.dom$();
                A.find("[menu='top']").hide();
                A.find("[mu]").rmClass(d);
                B._hideMenuMask();
                return B;
            },
            _menu: function(B) {
                var I = this
                  , H = I.dom$()
                  , J = H.find("[mu='" + B + "']")
                  , C = !J.hasClass(d);
                I._hideMenu();
                if (C) {
                    var A = I.$
                      , K = A.inWin()
                      , G = K.document
                      , F = G.body.clientHeight
                      , E = A.$("#nv").data(0).clientHeight
                      , D = A.$("#listNav").data(0).clientHeight;
                    J.addClass(d);
                    H.find("[un='" + B + "']").show();
                    H.find("[un='" + B + "']").find("input[type=search]").focus();
                    B == "more" && A.$("#foldermask").addClass("folder_mask").css("top", (D) + "px").css("height", (F - E - D) + "px").show();
                }
            },
            _search: function(A) {
                var B = this;
                if (A) {
                    B.cmd("list", "search_" + encodeURIComponent(A).replace(/\_/g, "%5F") + "_all%5F%5F", 0);
                }
            },
            _selectChange: function() {
                var E = this
                  , D = E.dom$()
                  , F = E.$.$("#listToolBar")
                  , C = D.find("[un='checkAll']")
                  , B = D.find("." + f).size()
                  , A = D.find("[un='mail']").size();
                if (B) {
                    F.show().find("[un='selectCount']").html(B);
                    F.find("[un='close']").show();
                    F.find("[un='selectCount']").show();
                    E._scrollToolBar();
                } else {
                    F.show().find("[un='selectCount']").html("");
                    F.find("[un='close']").hide();
                    F.find("[un='selectCount']").hide();
                    E._scrollToolBar();
                }
                (B && B == A) ? C.addClass(g).attr("checked", true) : C.rmClass(g).attr("checked", false);
                return E;
            },
            _scrollToolBar: function() {
                var K = this
                  , J = K.dom$()
                  , A = K.$
                  , M = A.inWin()
                  , I = M.document
                  , H = I.body
                  , L = A.$("#listToolBar")
                  , F = A.$(H).find(".top_announce").data().length ? A.$(H).find(".top_announce").data(0).offsetHeight - 1 : 0
                  , E = L.height()
                  , B = window.innerHeight || document.documentElement.clientHeight
                  , G = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  , D = J.find("." + f).size();
                var C = A.$('#listToolBarWrapper').offset().top;
                if (C - G <= B - E || !D) {
                    L.rmClass("func_posFixed");
                } else {
                    L.css("top", "");
                    L.css("bottom", F + "px");
                    L.addClass("func_posFixed");
                }
                return K;
            },
            _markScroll: function(A, B) {
                var C = this;
                C._moScroll = {
                    idx: A,
                    mailid: B,
                    scroll: C.$.scrollTop()
                };
                return C;
            },
            _scroll: function(A) {
                var C = this
                  , E = C.back()
                  , D = C.$.inWin()
                  , B = C._moScroll;
                if (B && A == B.idx && E.indexOf("mail") == 0) {
                    D.scroll(0, B.scroll);
                    delete C._moScroll;
                }
                return C;
            },
            _setIndex: function(A) {
                A && (A.lst || (A.lst = {})) && (A.lst.index = A.lst.idx = this._msIndex);
                return A;
            },
            _clearSelect: function() {
                var C = this
                  , B = C.dom$()
                  , A = B.find("[un=checkAll]");
                if (A.attr("checked")) {
                    A.fireEvent("click");
                } else {
                    B.find("." + f).each(function(E) {
                        var D = $.$("[type=checkbox]", $.$(E));
                        D.attr("checked") && D.fireEvent("click");
                    });
                    B.find("[un='selectCount']").hide();
                    B.find("[un='close']").hide();
                    C._scrollToolBar();
                }
                return C;
            },
            _replaceMail: function(B, A) {
                var E = this
                  , D = E._mail$(B)
                  , C = D.hasClass(e);
                D = E._mail$(B).replaceWith(E.tmplLib().listItem(A));
                C && D.addClass(e);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/mail.js", ["mobile/bu/phone/mod/mod.js", "mobile/ui/scale.js", "mobile/ui/menu.js"], function(A) {
    var C = QMWin
      , B = C.ctor_();
    var c = 0
      , a = 1
      , b = 2
      , o = 42
      , g = "mui_btn_navmain_down"
      , h = "mui_ico_checked"
      , e = "\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"
      , f = "QQ\u90AE\u7BB1"
      , d = "\u662F\u5426\u9000\u8BA2\u8BE5\u8BA2\u9605\u680F\u76EE\uFF1F"
      , u = "\u8C22\u8C22\uFF0C\u4E3E\u62A5\u5783\u573E\u90AE\u4EF6\u6210\u529F"
      , t = "\u53D1\u9001\u6210\u529F"
      , w = "\u6807\u8BB0\u6210\u529F"
      , x = "\u8BBE\u7F6E\u672A\u8BFB\u6210\u529F"
      , s = "\u8BBE\u7F6E\u5DF2\u8BFB\u6210\u529F"
      , r = "\u79FB\u52A8\u6210\u529F"
      , q = "\u5220\u9664\u6210\u529F"
      , z = "\u9000\u8BA2\u6210\u529F"
      , v = "\u661F\u6807\u90AE\u4EF6"
      , y = "\u53D6\u6D88\u661F\u6807"
      , p = "\u6536\u85CF\u9644\u4EF6\u6210\u529F"
      , i = "\u6536\u85CF\u9644\u4EF6\u5931\u8D25"
      , j = "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9\u540E\u518D\u53D1\u9001"
      , l = "\u6536\u4EF6\u7BB1"
      , m = "\u5DF2\u53D1\u9001"
      , k = "\u7FA4\u90AE\u4EF6"
      , n = "QQ\u90AE\u4EF6\u8BA2\u9605";
    C.createCtrl("Mobile.Phone.Web.Mail", {
        sSuper: "Mobile.Phone.Mod"
    }, function(D) {
        return ( {
            eventLibs: function() {
                return [{
                    name: "Mobile.Phone.Event.Popup"
                }];
            },
            rule: function() {
                var E = D.rule();
                C.extend(E.fire || (E.fire = {}), {
                    refill: {
                        sContext: "mail"
                    },
                    reply: {
                        sContext: "mail"
                    },
                    replyGroup: {
                        sContext: "mail"
                    },
                    replyAll: {
                        sContext: "mail"
                    },
                    del: {
                        sContext: "mail"
                    },
                    forward: {
                        sContext: "mail"
                    },
                    perdel: {
                        sContext: "mail"
                    },
                    move: {
                        sContext: "mail"
                    },
                    tag: {
                        sContext: "mail"
                    },
                    unread: {
                        sContext: "mail"
                    },
                    spam: {
                        sContext: "mail"
                    },
                    showoptmenu: {
                        scontext: "mail"
                    },
                    read: {
                        sContext: "mail"
                    },
                    dateSwitch: {
                        sContext: "mail"
                    },
                    voteSwitch: {
                        sContext: "mail"
                    },
                    foldSwitch: {
                        sContext: "mail"
                    },
                    convSwitch: {
                        sContext: "mail"
                    },
                    star: {
                        sContext: "mail"
                    },
                    convstar: {
                        sContext: "mail"
                    },
                    addAttachFolder: {
                        sContext: "mail"
                    },
                    go: {
                        sContext: "mail"
                    },
                    unsub: {
                        sContext: "mail"
                    },
                    quickReply: {
                        sContext: "mail"
                    },
                    toAttach: {
                        sContext: "mail"
                    },
                    cancelWarm: {
                        sContext: "mail"
                    },
                    verifyOK: {
                        sContext: "verify"
                    },
                    verifyCancel: {},
                    selectVoteItem: {
                        sContext: "vote"
                    },
                    vote: {
                        sContext: "vote"
                    }
                });
                return E;
            },
            events: function() {
                return C.extend(D.events(), {
                    toAttach: function(F, G, E) {
                        var P = this
                          , L = $.$("body")
                          , O = $.$(G)
                          , N = $.$(O.parents("div[un='mail']").data(0))
                          , J = N.find("div.attach")
                          , M = $.$(J.parents("div[un='mail']").data(0))
                          , K = M.find("div.attach")
                          , I = function(Q) {
                            var R = 0;
                            Q.each(function(S) {
                                R += $.$(S).height();
                            });
                            return R;
                        }
                          , H = function() {
                            var V = $.$(K.data(0)).offset() || {}
                              , R = V.top || 0
                              , Q = I(K)
                              , T = L.scrollTop()
                              , S = document.documentElement.clientHeight
                              , U = 15;
                            return R + Q + U - (T + S);
                        };
                        if (H() > 5) {
                            L.animate({}, {
                                vDuration: 500,
                                bQueue: false,
                                onstep: function(Q, R) {
                                    if (Q != 1) {
                                        if ($.isBrowser("firefox")) {
                                            document.documentElement.scrollTop += Math.floor(H() * Q);
                                        } else {
                                            L.data(0).scrollTop += Math.floor(H() * Q);
                                        }
                                    }
                                },
                                oncomplete: function() {}
                            });
                        } else {
                            K.find(".attach_wrap").addClass("attach_wrap_anim").spark("attach_wrap_anim", function() {}, 500, 1);
                        }
                    },
                    refill: function(F, G, E) {
                        var H = this;
                        H.cmd("compose", H._msIndex, H.$.$(E).attr("mid"), "refill");
                    },
                    reply: function(F, G, E) {
                        var H = this;
                        H.cmd("compose", H._msIndex, H.$.$(E).attr("mid"), "reply");
                    },
                    replyGroup: function(F, G, E) {
                        var H = this;
                        H.cmd("compose", H._msIndex, H.$.$(E).attr("mid"), "replyGroup");
                    },
                    replyAll: function(F, G, E) {
                        var H = this;
                        H.cmd("compose", H._msIndex, H.$.$(E).attr("mid"), "replyAll");
                    },
                    forward: function(F, G, E) {
                        var H = this;
                        H.cmd("compose", H._msIndex, H.$.$(E).attr("mid"), "forward");
                    },
                    del: function(F, G, E) {
                        var I = this
                          , H = I.$.$(E);
                        I.del_(H.attr("mid"), H.attr("index"));
                    },
                    perdel: function(F, G, E) {
                        var I = this
                          , H = I.$.$(E);
                        if (confirm(e, f)) {
                            I.del_(H.attr("mid"), H.attr("index"), true);
                        }
                    },
                    move: function(F, G, E) {
                        var L = this
                          , I = L.$.$(E)
                          , O = I.attr("mid")
                          , N = I.attr("fid")
                          , J = L.dataCenter().getFolder()
                          , M = [{
                            inf: {
                                id: "1",
                                name: l
                            }
                        }, {
                            inf: {
                                id: "3",
                                name: m
                            }
                        }, {
                            inf: {
                                id: "8",
                                name: k
                            }
                        }, {
                            inf: {
                                id: "130",
                                name: n
                            }
                        }]
                          , K = []
                          , H = function(P) {
                            var Q = P.inf
                              , R = Q.id;
                            if (Q.acctEmail) {
                                K.push({
                                    id: R,
                                    acctEmail: Q.acctEmail,
                                    name: Q.name,
                                    select: R == N ? 1 : 0
                                });
                            } else {
                                K.push({
                                    id: R,
                                    name: Q.name,
                                    select: R == N ? 1 : 0
                                });
                            }
                        };
                        C.each(M, H);
                        C.each(J.user, H);
                        C.each(J.pop, H);
                        L.pop(L.tmplLib().popMove({
                            id: O,
                            moveLst: K
                        }));
                    },
                    tag: function(F, G, E) {
                        var J = this
                          , H = J.$.$(E)
                          , M = H.attr("pid") || H.attr("mid")
                          , N = J.str2Arr(H.attr("tag"))
                          , I = J.dataCenter().getFolder()
                          , K = {}
                          , L = [];
                        C.each(N, function(O) {
                            K[O] = 1;
                        });
                        C.each(I.tag, function(O) {
                            var P = O.inf;
                            L.push({
                                id: P.id,
                                name: P.name,
                                color: P.color,
                                select: K[P.id]
                            });
                        });
                        J.pop(J.tmplLib().popTag({
                            id: M,
                            tagLst: L
                        }));
                    },
                    unread: function(F, G, E) {
                        var J = this
                          , I = J.$.$(E)
                          , K = J.$.$(G)
                          , H = (+K.attr("ur") + 1) % 2;
                        J.unread_(I.attr("mid"), H, K);
                        return J;
                    },
                    spam: function(F, G, E) {
                        var H = this;
                        H.pop(H.tmplLib().popSpam({
                            id: H.$.$(E).attr("mid")
                        }));
                    },
                    cancelWarm: function(F, G, E) {
                        var H = this
                          , I = H.$.$(G).attr("mailid");
                        H.dataCenter().cancelWarm({
                            MailId: I
                        }, H.callback(function() {
                            G.parentNode.style.display = "none";
                        }));
                    },
                    showoptmenu: function(F, G, E) {
                        var J = this;
                        var H = C.lib("Mobile.UI.Menu");
                        var K = $.$(G);
                        var I = H.menu({
                            sId: "readmailOptMenu",
                            oContainer$: $.$(G),
                            sArrow: "right",
                            bAutoShow: false,
                            oMenuItem: [{
                                desc: "\u56DE\u590D",
                                sId: J._msCurrMailId.indexOf("@") == 0 ? "replyGroup" : "reply"
                            }, {
                                desc: "\u8F6C\u53D1",
                                sId: "forward"
                            }, {
                                desc: "\u5220\u9664",
                                sId: "del"
                            }, {
                                desc: "\u6807\u4E3A\u672A\u8BFB",
                                sId: "unread"
                            }, {
                                desc: "\u4E3E\u62A5",
                                sId: "spam"
                            }, {
                                desc: "\u79FB\u52A8\u5230...",
                                sId: "move"
                            }, {
                                desc: "\u6807\u7B7E...",
                                sId: "tag"
                            }],
                            onItemClick: function(L, M, N) {
                                _e(L, M, N);
                            }
                        });
                        if (I.isShow()) {
                            I.hide();
                        } else {
                            I.show();
                        }
                        $.stopPropagation(F);
                    },
                    star: function(F, G, E) {
                        var I = this
                          , H = I.$.$(E);
                        I.star_(H.attr("mid"), (+H.attr("star") + 1) % 2);
                        return I;
                    },
                    convstar: function(F, G, E) {
                        var I = this
                          , H = I.$.$(E).parents("[un='mail']");
                        I.star_(H.attr("mid"), (+H.attr("star") + 1) % 2);
                        return I;
                    },
                    addAttachFolder: function(F, G, E) {
                        var H = this
                          , I = H.$.$(G);
                        H.dataCenter().addAttachFolder(I.attr("idx"), I.attr("mid"), function() {
                            H.suc(p);
                            I.parent(".readmail_attach_listItem_iconWrap").data(0).style.display = "none";
                        }, function() {
                            H.err(i);
                        });
                    },
                    read: function(F, G, E) {
                        var J = this
                          , K = J.tmplLib()
                          , I = J.$.$(E)
                          , M = I.attr("pid")
                          , L = I.attr("mid")
                          , H = I.attr("rding");
                        if (H) {
                            return;
                        }
                        I.attr("rding", 1);
                        I.find("[un='convMailLoading']").html(K.icoLoading());
                        J.dataCenter().loadMail({
                            sId: L,
                            sParentId: M
                        }, {
                            onsuccess: function(N) {
                                var R = N.inf.id;
                                I.replaceWith(K.mailConvContent(J.dataCenter().optMail(R, "conv", 1).getMail({
                                    sId: R,
                                    sParentId: M
                                })));
                                var Q = $.$("[mid='" + R + "']");
                                J._setScale(Q);
                                var O = document.body.scrollTop;
                                var P = Q.offset().top;
                                Q.animate({}, {
                                    vDuration: 500,
                                    bQueue: false,
                                    onstep: function(S, T) {
                                        document.body.scrollTop = O + S * (P - O);
                                    }
                                });
                            },
                            oncomplete: function() {
                                I.rmAttr("rding");
                            }
                        });
                    },
                    dateSwitch: function(F, G, E) {
                        var H = this;
                        return H._switchMail.apply(H, [].slice.call(arguments).concat([H.$.$(E).find("[un='date']"), "date", "mailDate"]));
                    },
                    voteSwitch: function(F, G, E) {
                        var H = this;
                        return H._switchMail.apply(H, [].slice.call(arguments).concat([H.$.$(E).find("[un='vote']"), "vote", "mailVote"]));
                    },
                    selectVoteItem: function(G, H, F) {
                        var I = this
                          , E = I.$;
                        E.$(F).find('[type="radio"]').each(function(J) {
                            E.$(J).attr("checked", false).attr("voted", 0);
                        });
                        E.$(H).attr("checked", true).attr("voted", 1);
                    },
                    vote: function(F, G, E) {
                        var N = this
                          , K = N.$.$(E)
                          , J = K.find('[voted="1"]').attr("name");
                        if (J) {
                            var L = N.dataCenter()
                              , M = N.dataCenter().getMail(N.moOptions)
                              , R = M.vote.opt
                              , Q = M.vote.st
                              , P = R[J - 1]
                              , H = parseInt(Q.cnt) + 1
                              , I = Q.open || 0
                              , S = L.getNickName();
                            P.cnt = parseInt(P.cnt) + 1;
                            I == 1 && P.voter.push(S);
                            for (var T = 0; T < R.length; T++) {
                                var O = R[T];
                                O.percent = ((O.cnt / H) * 100).toFixed(0);
                            }
                            Q.cnt = parseInt(H);
                            Q.canvote = 0;
                            K.replaceWith(N.tmplLib().mailVote({
                                "vote": M.vote
                            }));
                            L.vote(M, J);
                        } else {
                            N.err("\u8BF7\u5148\u9009\u6295\u7968\u9879");
                        }
                    },
                    foldSwitch: function(F, G, E) {
                        var H = this;
                        return H._switchMail.apply(H, [].slice.call(arguments).concat([E, "expend", "mailConvContent"]));
                    },
                    convSwitch: function(F, G, E) {
                        var H = this;
                        return H._switchMail.apply(H, [].slice.call(arguments).concat([E, "conv", "mailConvContent"]));
                    },
                    go: function(G, H, F) {
                        var I = this
                          , E = I.$
                          , J = E.$(F).attr("index")
                          , K = E.$(H).attr("mail");
                        I.reload(J, K);
                    },
                    unsub: function(F, G, E) {
                        var H = this
                          , I = H.$.$(G)
                          , J = I.attr("cid")
                          , K = I.attr("mid");
                        if (confirm(d)) {
                            var L = "/cgi-bin/setting10?action=desubscribe&sid=" + C.sid() + "&colid=" + J + "&folderid=&mailid=" + K;
                            if (I.attr("tuan") == 1) {
                                C.ajax({
                                    sUrl: L,
                                    nTimeout: 0,
                                    onsuccess: function(N, O, M) {
                                        H.suc(z);
                                    },
                                    onerror: function(M) {}
                                });
                            } else {
                                H.$.inWin().location.href = L + "&s=cntchk_05&t=dy_clean";
                            }
                        }
                    },
                    verifyOK: function(F, G, E) {
                        var H = this
                          , I = H.$.$(E).find("input[type=text]").attr("value");
                        if (I) {
                            H.hidePop();
                            C.call(H, H._mfVerify, [I]);
                        }
                    },
                    verifyCancel: function(F, G, E) {
                        var H = this;
                        H.hidePop();
                        H.$.$("#mailQuickReply").replaceWith(H.tmplLib().mailReplyBtn(c));
                    },
                    quickReply: function(F, G, E) {
                        var L = this
                          , M = L.$.$(G)
                          , I = L.$.$(E)
                          , Q = I.attr("mid")
                          , R = I.attr("pid")
                          , P = I.attr("fid")
                          , H = I.find("[un='quickReplyContent']")
                          , O = H.attr("value");
                        if (!O) {
                            alert(j);
                        } else {
                            var J = L.dataCenter()
                              , N = L.tmplLib()
                              , K = J.getCpMailOpt({
                                sId: Q,
                                sContent: C.htmlEncode(O),
                                bOriginSplit: true
                            });
                            if (K) {
                                J.sdMail(K, {
                                    onbeforesend: function() {
                                        M = M.replaceWith(N.mailReplyBtn(b));
                                    },
                                    onsuccess: function() {
                                        L.cmd('composesucc', 'mail,' + P + '--,' + (R || Q));
                                    },
                                    onerror: function(S, T) {
                                        if (T.type === "verifycode") {
                                            L._mfVerify = T.verify;
                                            L.pop(L.tmplLib().popVerify(T));
                                        } else {
                                            L.err(T.message);
                                            M = M.replaceWith(N.mailReplyBtn(c));
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            },
            msgs: function() {
                return C.extend(D.msgs(), {
                    "MAIL_CHANGE": function(E) {
                        var G = this, F;
                        G._msCurrMailId == E && (F = G.dataCenter().getMail(G.moOptions)) && G.view(F);
                    },
                    "MAIL_UPDATE": function(E) {
                        var F = this;
                        F._msCurrMailId == E && F.updateData_();
                    }
                });
            },
            init_: function(E) {
                var F = this.superEx_(D, "init_", [E]);
            },
            tag_: function(G, F, E) {
                var H = this;
                H.dataCenter().tag({
                    sId: G,
                    oTags: F,
                    oColors: E
                }, H.callback(function(I) {
                    F.length && H.suc(w);
                    H.hidePop();
                }));
            },
            move_: function(F, E) {
                var H = this
                  , G = H._getMailRelative(F, H._msIndex);
                H.dataCenter().move({
                    sId: F,
                    sDestId: E
                }, H.callback(function(I) {
                    H.suc(r)._goNext(G);
                }));
            },
            spam_: function(E, F) {
                var G = this;
                G.dataCenter().spam({
                    sIds: E.split(","),
                    sSpamId: F
                }, G.callback(function(H) {
                    G.suc(u).hidePop();
                }));
            },
            unread_: function(G, E, F) {
                var H = this;
                H.dataCenter().unread({
                    sId: G,
                    bUnread: !!E
                }, H.callback(function() {
                    F.replaceWith(H.tmplLib().mailUnreadBtn(E));
                    H.suc(E ? x : s);
                }));
            },
            star_: function(F, E) {
                var G = this;
                G.dataCenter().star({
                    sId: F,
                    bStar: E
                }, G.callback(function() {
                    G.suc(E ? v : y);
                }));
            },
            del_: function(G, F, E) {
                var I = this
                  , H = F && I._getMailRelative(G, F);
                I.dataCenter().delMail({
                    sId: G,
                    bPerDel: E
                }, I.callback(function(J) {
                    I.suc(q);
                    H ? I._goNext(H) : I.updateData_();
                }));
            },
            action: function(G, F, E) {
                var J = this
                  , K = J._msIndex = G
                  , I = function(M, L) {
                    var O = M.inf.attLst
                      , N = O ? O.length || 0 : 0;
                    !L && !E && J.hash(["mail", K, F].join(","));
                    for (var Q = 0; Q < N; Q++) {
                        var P = O[Q].name.split(".");
                        O[Q].suffix = P[P.length - 1];
                    }
                    J.view(C.extend({
                        vw: {
                            prefetch: L,
                            sIndex: K,
                            promote: J.app().promote().promote
                        }
                    }, M));
                    J._checkContentScript(M);
                };
                J.moOptions = {
                    sId: F,
                    sIndex: K
                };
                var H;
                J.updateData_({
                    onprefetch: function(L) {
                        I(L, true);
                        H = true;
                        J._scroll();
                    },
                    onsuccess: function(L) {
                        I(L);
                        !H && J._scroll();
                        J.msg("processCmd", "mail," + F);
                    }
                });
                window.scrollTo(0, window.scrollX);
                return J;
            },
            render: function(F, E) {
                var H = this;
                if (!E.rel) {
                    var G = H.back().split(",")
                      , I = G[1].indexOf("search") > -1 ? G[1] : "1__";
                    E.rel = {
                        index: I
                    };
                }
                if (!H.hasRender()) {
                    D.render.apply(H, arguments);
                    H._preventRedirect(H.$.$("#mailContent"));
                } else {
                    H._drawNav(E)._drawList(E);
                }
                H._msCurrMailId = E.inf.id;
                H.$.$("#top_announce").hide();
                if (E.vw && !E.vw.prefetch) {
                    !H.app().isPadMode() && (document.body.scrollTop = $.$("#nv").height());
                    H._setScale();
                }
                return H;
            },
            updateData_: function(E) {
                var F = this;
                F.dataCenter().loadMail(F.moOptions, C.extend({
                    onsuccess: function(G) {
                        F.view(G);
                    },
                    onerror: function(G, H) {
                        var I = G || {};
                        I.error = H;
                        F.view(I);
                        F.msg("processCmdErr", "mail," + F.moOptions.sId);
                    }
                }, E));
                return F;
            },
            _drawNav: function(E) {
                var F = this;
                F.$.$("#mailNav").html(F.tmplLib().mailNav(E));
                return F;
            },
            _drawList: function(E) {
                var F = this;
                F._preventRedirect(F.$.$("#mailContent").html(F.tmplLib().mailContent(E)));
                return F;
            },
            _scroll: function() {},
            _preventRedirect: function(E) {
                var F = this;
                E && E.find("a[href]").each(function(G) {
                    !G.href.match(/\/cgi-bin\/viewcompress|\/cgi-bin\/viewdocument/) && G.href[0] != "#";
                    if (/(http:|https:)?(\/\/)i.mail.qq.com\/cgi-bin\/uma_ack_card/i.test(G.href)) {
                        G.onclick = function(K) {
                            K.preventDefault();
                            var L = new Image();
                            L.src = G.href + "&uin=" + encodeURIComponent(C.uin()) + "&sid=" + encodeURIComponent(C.sid());
                            window.document.body.appendChild(L);
                            G.innerHTML = "\u5DF2\u611F\u8C22";
                            G.style.opacity = "0.5";
                            G.href = "javascript:void(0);";
                            G.onclick = function() {}
                            ;
                            return false;
                        }
                        ;
                    } else if (G.href.indexOf("/cgi-bin/") != 0 && G.href.indexOf("javascript:") != 0 && G.href.toLowerCase().indexOf("mailto:") != 0) {
                        var H = $.$(G).parents("div[un='mail']")
                          , J = H && H.attr && H.attr("spammid") || ""
                          , I = H && H.attr && H.attr("cheatcode") || "";
                        G.href = 'http://url.qmail.com/cgi-bin/safejmp?spammid=' + encodeURIComponent(J) + '&action=check_link&url=' + encodeURIComponent(G.href) + '&cheatcode=' + encodeURIComponent(I);
                    }
                });
            },
            _switchMail: function(G, H, F, E, I, J) {
                var S = this
                  , T = S.$.$(H)
                  , P = S.$.$(F)
                  , O = +T.attr("expend") ? 0 : 1
                  , U = P.attr("mid")
                  , V = P.attr("pid")
                  , R = S.dataCenter().optMail(U, I, O).getMail({
                    sId: U,
                    sParentId: V
                });
                if (I == "conv") {
                    if (O == 0) {
                        var K = E.offsetHeight;
                        var M = 67;
                        E.style.overflow = "hidden";
                        S.$.$(E).animate({}, {
                            vDuration: 500,
                            bQueue: false,
                            onstep: function(W, X) {
                                E.style.height = K - (K - M) * W + "px";
                            },
                            oncomplete: function() {
                                S.$.$(E).replaceWith(S.tmplLib()[J](R));
                            }
                        });
                    } else {
                        S.$.$(E).replaceWith(S.tmplLib()[J](R));
                        var Q = $.$("[mid='" + U + "']");
                        var L = document.body.scrollTop;
                        var N = Q.offset().top;
                        Q.animate({}, {
                            vDuration: 500,
                            bQueue: false,
                            onstep: function(W, X) {
                                document.body.scrollTop = L + W * (N - L);
                            },
                            oncomplete: function() {}
                        });
                    }
                } else {
                    S.$.$(E).replaceWith(S.tmplLib()[J](R));
                }
            },
            _goNext: function(E) {
                var G = this
                  , F = E;
                _sIndex = F.index,
                _oMail = F.next || F.prev;
                _sIndex ? _oMail ? G.reload(_sIndex, _oMail.inf.id) : G.cmd("list", _sIndex) : G.cmd("folder");
            },
            _getMailRelative: function(F, E) {
                var G = this;
                return G.dataCenter().getMailRel({
                    sId: F,
                    sIndex: E
                });
            },
            _checkContentScript: function(E) {},
            _setScale: function(E) {
                var I = this;
                var L = C.lib("Mobile.UI.Scale");
                var G = E || $.$("body");
                var H = $.$(".scale_content", G);
                var F = H.height();
                function J() {
                    $.$(".scale_container", G).data(0) && L.build({
                        oXMover: $.$(".scale_container", G).data(0),
                        oWrapper: $.$(".scale_wrapper", G).data(0),
                        oScaler: H.data(0)
                    });
                }
                function K() {
                    if (I.isActived()) {
                        if (F != H.height()) {
                            F = H.height();
                            console.log("rebuild scaler");
                            J();
                        }
                        setTimeout(function() {
                            K();
                        }, 1000);
                    }
                }
                L.reset();
                J();
                setTimeout(function() {
                    K();
                }, 1000);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/compose.js", ["mobile/bu/phone/mod/mod.js", "mobile/ui/mailaddress.js", "mobile/ui/menu.js"], function(l) {
    var n = QMWin
      , m = n.ctor_()
      , o = n.sid();
    var c = 0
      , a = 1
      , b = 2
      , i = "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
      , j = "\u4FDD\u5B58\u6210\u529F"
      , k = "\u53D1\u9001\u6210\u529F"
      , f = "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9\u540E\u518D\u53D1\u9001"
      , g = "\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001"
      , e = "\u8BF7\u9009\u62E9QQ\u7FA4\u518D\u53D1\u9001"
      , h = "\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"
      , d = n.T(['"$groupname$" \u7FA4\u7BA1\u7406\u5458\uFF0C\u60A8\u597D\n', '\u60A8\u7BA1\u7406\u7684QQ\u7FA4 "$groupname$" \u8FD8\u672A\u5F00\u901A\u7FA4\u90AE\u4EF6\u529F\u80FD\uFF0C\u7FA4\u4E2D\u7684\u6210\u5458 $sender$($senderUin$) \u5411\u60A8\u7533\u8BF7\u5F00\u901A\u3002\n\n', '\u5982\u4F55\u5F00\u901AQQ\u7FA4\u90AE\u4EF6\uFF1F\n', '1. \u70B9\u51FB\u201C\u5199\u4FE1\u201D\uFF0C\u5207\u6362\u81F3\u201CQQ\u7FA4\u90AE\u4EF6\u201D\u9875\u9762\u3002\n', '2. \u5728\u5199\u201CQQ\u7FA4\u90AE\u4EF6\u201D\u9875\u9762\u4E2D\uFF0C\u4ECE\u53F3\u4FA7\u9762\u677F\u9009\u62E9\u76F8\u5E94\u7684QQ\u7FA4\u70B9\u51FB\u201C\u5F00\u901A\u201D\u5373\u53EF\u3002\n\n', '\u5982\u679C\u60A8\u6682\u65F6\u4E0D\u60F3\u5F00\u901A\u6B64\u7FA4\u7684\u7FA4\u90AE\u4EF6\u529F\u80FD\uFF0C\u8BF7\u5FFD\u7565\u8FD9\u5C01\u90AE\u4EF6\u3002']);
    n.createCtrl("Mobile.Phone.Web.Compose", {
        bStatic: true,
        sSuper: "Mobile.Phone.Mod"
    }, function(p) {
        return ( {
            rule: function() {
                var q = p.rule();
                n.extend(q.fire || (q.fire = {}), {
                    cancel: {
                        sContext: "compose"
                    },
                    discard: {
                        sContext: "compose"
                    },
                    more: {
                        sContext: "compose"
                    },
                    verifyOK: {
                        sContext: "verify"
                    },
                    verifyCancel: {},
                    verifyChange: {
                        sContext: "verify"
                    },
                    suggest: {
                        sContext: "suggest"
                    },
                    suggestSelect: {
                        sContext: "suggest"
                    },
                    suggestExpend: {
                        sContext: "suggest"
                    },
                    suggestFlod: {
                        sContext: "suggest"
                    },
                    send: {
                        sContext: "compose"
                    },
                    save: {
                        sContext: "compose"
                    },
                    editOrigin: {
                        sContext: "compose"
                    },
                    showSwitchMenu: {
                        sContext: "compose"
                    },
                    editAddr: {
                        sContext: "address"
                    },
                    hideEdit: {
                        sContext: "address"
                    },
                    addrTyping: {
                        sContext: "address"
                    },
                    addrKeydown: {
                        sContext: "address"
                    },
                    editAddrDel: {
                        sContext: "address"
                    },
                    editAddrKeyDown: {
                        sContext: "address"
                    },
                    editAddrCancel: {},
                    typing: {},
                    reloadGroupLst: {},
                    groupLstMgr: {},
                    attachSelect: {
                        sContext: "attachUpload"
                    },
                    delAttUpload: {
                        sContext: "attachLst"
                    },
                    delAttach: {
                        sContext: "attachLst"
                    },
                    hideTopAnnounceBar: {},
                    showTopAnnounceBar: {}
                });
                return q;
            },
            events: function() {
                return n.extend(p.events(), {
                    cancel: function(r, s, q) {
                        var u = this
                          , t = u._getOptions();
                        if (u._composeChanged(t) && confirm("\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u5C06\u6B64\u90AE\u4EF6\u5B58\u4E3A\u8349\u7A3F\uFF1F")) {
                            u._save(t);
                        }
                        u._cancel();
                    },
                    discard: function(r, s, q) {
                        this._cancel();
                    },
                    more: function(r, s, q) {
                        var t = this;
                        t.$.$(q).find("[un='suggest']").show();
                        t.$.$(s).hide();
                    },
                    send: function(r, s, q) {
                        var u = this
                          , t = u._getOptions();
                        if (u._composeReady(t)) {
                            u._send(t);
                        }
                    },
                    save: function(r, s, q) {
                        var t = this;
                        t._save(t._getOptions());
                    },
                    verifyOK: function(r, s, q) {
                        var t = this
                          , u = t.$.$(q).find("input[type=text]").attr("value");
                        if (u) {
                            t.hidePop();
                            n.call(t, t._mfVerify, [u]);
                        } else {
                            t.err(i).$("#to").focus();
                        }
                    },
                    verifyCancel: function(r, s, q) {
                        this.hidePop()._setButton();
                    },
                    verifyChange: function(r, s, q) {
                        var t = this.$.$(q).find("img");
                        t.attr("src", (t.attr("orgsrc") || t.attr("orgsrc", t.attr("src")).attr("orgsrc")) + t.random()).stopPropagation(r).preventDefault(r);
                    },
                    suggest: function(r, s, q) {
                        var u = this
                          , v = s.value.split(";")
                          , w = n.trim(v[v.length - 1])
                          , t = u.$.$(q);
                        if (w) {
                            u._suggest(w, t);
                        } else {
                            u._hideSuggest(t);
                        }
                    },
                    suggestSelect: function(s, t, r) {
                        var v = this
                          , q = v.$
                          , w = q.$(t)
                          , u = q.$(r)
                          , x = w.attr("addr")
                          , z = x.match(/\".*\"/) + ""
                          , y = x.match(/<.*>/) + "";
                        v._getAddrEditor(u).addAddress(z.substr(1, z.length - 2), y.substr(1, y.length - 2));
                        v._hideSuggest(u);
                    },
                    suggestExpend: function(r, s, q) {
                        var t = this;
                        t._suggest(null, t.$.$(q));
                    },
                    suggestFlod: function(r, s, q) {
                        var t = this;
                        t._hideSuggest(t.$.$(q));
                    },
                    typing: function(r, s, q) {
                        if (s.clientHeight < s.scrollHeight) {
                            s.style.height = (s.scrollHeight + 5) + "px";
                        }
                    },
                    addrTyping: function(r, s, q) {
                        var u = this
                          , t = r.keyCode || r.which || r.charCode;
                        if (t == 13 || t == 59) {
                            var v = s.value.split(";");
                            for (var x = 0; x < v.length; x++) {
                                var w = v[x];
                                w != "" && u._getAddrEditor(u.$.$(q)).addAddress(w, w);
                            }
                            n.preventDefault(r);
                        }
                    },
                    addrKeydown: function(r, s, q) {
                        var w = this
                          , t = r.keyCode || r.which || r.charCode;
                        if (t == 8 && s.value == "") {
                            var u = w._getAddrEditor(w.$.$(q))._moSelector.getAddrCnt();
                            if (u.childElementCount != 0) {
                                var v = u.lastChild;
                                v.focus();
                            }
                            n.preventDefault(r);
                        }
                    },
                    editOrigin: function(s, t, r) {
                        if (confirm("\u7F16\u8F91\u4F1A\u5BFC\u81F4\u539F\u90AE\u4EF6\u6587\u5B57\u683C\u5F0F\u4E22\u5931\uFF0C\u662F\u5426\u7EE7\u7EED\u7F16\u8F91\uFF1F")) {
                            var y = this
                              , q = y.$
                              , w = q.$(r)
                              , v = q.$("#content")
                              , u = v.data(0)
                              , x = q.$("#origin")
                              , z = v.attr("value") + "\n\n\n\n" + x.attr("value");
                            v.attr("value", z).attr("editOrigin", 1);
                            x.attr("value", z);
                            w.find("[un='showEditOrigin']").show();
                            w.find("[un='hideEditOrigin']").hide();
                            if (u.clientHeight < u.scrollHeight) {
                                u.style.height = (u.scrollHeight + 5) + "px";
                            }
                        }
                    },
                    showSwitchMenu: function(r, s, q) {
                        var v = this;
                        var u = n.lib("Mobile.UI.Menu");
                        var x = $.$(s);
                        var t = v._getMail();
                        var w = u.menu({
                            sId: "composeSwitchMenu",
                            oContainer$: $.$(s),
                            bAutoShow: false,
                            bSelectAble: true,
                            oMenuItem: [{
                                desc: "\u90AE\u4EF6",
                                sId: "compose",
                                selected: v.hash() == "compose"
                            }, {
                                desc: "\u7FA4\u90AE\u4EF6",
                                sId: "compose,group",
                                selected: v.hash() == "compose,group"
                            }, {
                                desc: "\u8D3A\u5361",
                                link: t.vw.bot.card_cp.url,
                                sId: "card"
                            }, {
                                desc: "\u8BB0\u4E8B",
                                link: t.vw.bot.nt_cp.url,
                                sId: "note"
                            }],
                            onItemClick: function(y, z, A) {
                                if (A == "compose" || A == "compose,group") {
                                    v.cmd(A);
                                }
                                return true;
                            }
                        });
                        w.isShow() ? w.hide() : w.show();
                        $.stopPropagation(r);
                    },
                    editAddr: function(r, s, q) {
                        var t = this
                          , u = t.$.$(s);
                        t._hideAllAddrEdit()._getAddrEditor(t.$.$(q)).selectItem(u.attr("nick"), u.attr("addr"));
                        t.dom$().find(".compose_contact_selectedItem_active").rmClass("compose_contact_selectedItem_active");
                        u.addClass("compose_contact_selectedItem_active");
                    },
                    hideEdit: function(r, s, q) {
                        var t = this
                          , u = t.$.$(s);
                        t.dom$().find(".compose_contact_selectedItem_active").rmClass("compose_contact_selectedItem_active");
                        setTimeout(function() {
                            t._hideAllAddrEdit('<li>' + u.attr("nick") + '<\/li>');
                        }, 100);
                    },
                    editAddrDel: function(r, s, q) {
                        var t = this;
                        t._getAddrEditor(t.$.$(q)).delItem();
                    },
                    editAddrKeyDown: function(r, s, q) {
                        var t = this;
                        if (r.keyCode == 8) {
                            t._getAddrEditor(t.$.$(q)).delItem();
                            t.$.preventDefault(r);
                        }
                    },
                    editAddrCancel: function(r, s, q) {
                        this._hideAllAddrEdit();
                    },
                    reloadGroupLst: function() {
                        this._loadGroupLst();
                    },
                    groupLstMgr: function() {
                        this.cmd("grouplist");
                    },
                    attachSelect: function(r, s, q) {
                        var w = this
                          , x = w.$.$(s)
                          , t = w.$.$(q)
                          , y = x.attr("value");
                        if (y) {
                            var v = t.find("form")
                              , u = v.data(0);
                            if (u) {
                                t.find("[un='attachUploading']").show();
                                t.find("[un='attachErr']").hide();
                                v.find("[un='fname']").attr("value", y);
                                v.hide();
                                u.submit();
                            }
                        }
                    },
                    delAttUpload: function(r, s, q) {
                        var w = this
                          , u = w.$.$(q)
                          , x = u.find("ul")
                          , v = w.$.$(s).parents("li");
                        x.remove(v.data(0));
                        w._checkAttachLst(u);
                        var t = w.$.$("#attachUpload");
                        t.find("iframe").attr("src", "about:blank");
                        t.find("form").show().find("input[type='file']").attr("value", "");
                        t.find("[un='attachUploading']").hide();
                    },
                    delAttach: function(r, s, q) {
                        var v = this
                          , t = v.$.$(q)
                          , w = t.find("ul")
                          , u = v.$.$(s).parents("li");
                        w.data(0).removeChild(u.data(0));
                        v._checkAttachLst(t);
                    },
                    hideTopAnnounceBar: function(r, s, q) {
                        var t = this
                          , u = t.$.$(".top_announce").data(0);
                        setTimeout(function() {
                            u.style.display = "none";
                            if (!u.getAttribute("focus")) {
                                u.setAttribute("focus", "first");
                            } else {
                                u.setAttribute("focus", "true");
                            }
                        }, 10);
                    },
                    showTopAnnounceBar: function(r, s, q) {
                        var t = this
                          , u = t.$.$(".top_announce").data(0);
                        setTimeout(function() {
                            if (u.getAttribute("focus") != "true") {
                                u.style.display = "";
                                u.removeAttribute("focus");
                            } else {
                                u.setAttribute("focus", "false");
                            }
                        }, 400);
                    }
                });
            },
            msgs: function() {
                var q = this.tmplLib();
                return n.extend(p.msgs(), {
                    "ACTION_FINISH": function(s, r) {
                        var u = this;
                        switch (s) {
                        case "attach_upload":
                            var t = u.$.$("#attachUpload");
                            t.find("input[type='file']").attr("value", "");
                            t.find("[un='attachUploading']").hide();
                            t.find("form").show();
                            r.name = r.name.substring(r.name.lastIndexOf("\\") + 1);
                            r.suffix = r.name.substring(r.name.lastIndexOf(".") + 1);
                            r.fileType = $.getFileType(r.suffix);
                            r.urlencodename = encodeURIComponent(r.name);
                            u.$.$("#attachLst").show().find("ul").insert(u.tmplLib().addAtachItem(r), "afterBegin");
                            break;
                        }
                    },
                    "ACTION_FAIL": function(s, r) {
                        var v = this;
                        switch (s) {
                        case "attach_upload":
                            var t = v.$.$("#attachUpload")
                              , u = v.$.$("#attachLst");
                            t.find("input[type='file']").attr("value", "");
                            t.find("[un='attachUploading']").hide();
                            v.err(r && r.errmsg || h);
                            t.find("form").show();
                            u.find('[un="attUpingItm"]').remove();
                            v._checkAttachLst(u);
                            break;
                        }
                    }
                });
            },
            action: function(q, r, s) {
                var x = this
                  , z = q
                  , v = x.dom$()
                  , y = x.$.loc("hash").replace("#", "")
                  , t = arguments[1];
                y.indexOf("compose") != 0 && (x._sLastHash = y);
                if (z == "concact") {
                    x.hash("compose").view(x._getMail({
                        oMail: {
                            inf: {
                                toLst: t
                            }
                        }
                    }, s || "compose"));
                } else if (z == "group") {
                    x.hash("compose,group").view(x._getMail({}, "composeGroup"))._loadGroupLst();
                } else if (z == "openGroup") {
                    var u = arguments[3]
                      , w = x._getMail({
                        oMail: {
                            inf: {
                                toLst: [u.adm],
                                subj: "\u7533\u8BF7\u5F00\u901A " + u.group.name + " \u7FA4\u90AE\u4EF6\u529F\u80FD"
                            },
                            content: {
                                body: d.replace({
                                    groupname: u.group.name,
                                    sender: u.sender.name,
                                    senderUin: u.sender.uin
                                })
                            }
                        }
                    }, s || "openGroup");
                    x.hash("compose,openGroup").view(w, s || "openGroup");
                } else {
                    var w = x._getMail({
                        sId: r
                    }, s);
                    x.hash(r && z ? ["compose", z, r, s].join(",") : "compose").view(w);
                }
                x._convertAllAddr();
                x.msg("processCmd", "compose," + r);
                z != "feedback" && (x._nInterval = setInterval(function() {
                    x._save(x._getOptions());
                }, 10 * 60 * 1000));
            },
            render: function() {
                var q = this;
                p.render.apply(q, arguments);
                q.$.$("#top_announce").hide();
                return q;
            },
            init_: function(q) {
                var r = this.superEx_(p, "init_", [q]);
                r._bUploadable = q.bUploadable;
                r.dataCenter().loadAddrLst();
            },
            _initPromote: function() {
                var r = this;
                if (!r._mbInitData) {
                    var q = r.app().promote();
                    r._moBotUrl = q.url;
                    r._mbInitData = true;
                }
                return r;
            },
            _botUrl: function() {
                return this._initPromote()._moBotUrl;
            },
            _setButton: function(r) {
                var t = this
                  , u = t.tmplLib()
                  , q = t.$
                  , s = r ? a : c;
                n.each(["Cancel", "Save", "Send"], function(v) {
                    q.$("#compose" + v).replaceWith(u["compose" + v + "Btn"](v == r ? b : s));
                });
                return t;
            },
            _cancel: function() {
                var r = this
                  , s = r.back()
                  , q = r._nInterval;
                q && clearInterval(q);
                s.split(",")[0] == "compose" ? r.cmd("today") : history.back();
            },
            _loadGroupLst: function() {
                var q = this;
                q.dataCenter().getGroupLst({}, {
                    onbeforesend: function(r) {
                        q.$.$("#groupLst").replaceWith(q.tmplLib().composeGroupListLoading());
                    },
                    onsuccess: function(r) {
                        q.$.$("#groupLst").replaceWith(q.tmplLib().composeGroupList(r.groupLst));
                    },
                    onerror: function() {
                        q.$.$("#groupLst").replaceWith(q.tmplLib().composeGroupListReload());
                    }
                });
            },
            _save: function(r) {
                var t = this
                  , q = t.$
                  , u = t.tmplLib()
                  , s = r || {};
                s.bSave = true;
                t.dataCenter().sdMail(r, {
                    onbeforesend: function() {
                        t._setButton("Save");
                    },
                    onsuccess: function(v) {
                        var C = v.inf.id
                          , w = t.dom$().find("[un='compose']")
                          , E = r.sTo
                          , A = r.sCc
                          , y = r.sBcc
                          , D = r.sSubject
                          , B = r._sContentText
                          , x = r._sAttachLst
                          , z = r._sBigAttachLst;
                        w.attr("draftId", C);
                        E && q.$("#to").attr("to", E);
                        A && q.$("#cc").attr("cc", A);
                        y && q.$("#bcc").attr("bcc", y);
                        D && q.$("#subject").attr("subj", D);
                        x && q.$("#attachLst").attr("val", x);
                        z && q.$("#bigattachLst").attr("val", z);
                        r._nEditOrigin == 1 ? B && q.$("#origin").attr("value", B) : B && q.$("#content").attr("cont", B);
                        t.suc(j)._setButton();
                    },
                    onerror: function(v, w) {
                        if (w.type === "verifycode") {
                            t._mfVerify = w.verify;
                            t.pop(t.tmplLib().popVerify(w));
                        } else {
                            t._setButton().err(w.message);
                        }
                    }
                });
            },
            _send: function(r) {
                var u = this
                  , q = u.$
                  , v = u.tmplLib()
                  , t = r || {}
                  , w = t.sContent || ""
                  , s = u._nInterval;
                u.dataCenter().sdMail(r, {
                    onbeforesend: function() {
                        u._setButton("Send");
                    },
                    onsuccess: function(x) {
                        if (r.bGroup) {
                            if (r.sGroupMailId) {
                                u.cmd('composesucc', 'mail,8__,' + r.sGroupMailId);
                            } else {
                                u.cmd("composesucc", "list,8__");
                            }
                        } else if (r.sReplyId || r.sForwardId) {
                            u.cmd("composesucc", u._sLastHash);
                        } else {
                            u.cmd("composesucc");
                        }
                    },
                    onerror: function(x, y) {
                        if (y.type === "verifycode") {
                            u._mfVerify = y.verify;
                            u.pop(u.tmplLib().popVerify(y));
                        } else {
                            u._setButton().err(y.message);
                        }
                    }
                });
                s && clearInterval(s);
            },
            _composeChanged: function(q) {
                return !q.sGroupMailId && (q.sBcc != q._sBcc || q.sContent != q._sContent || q.sTo != q._sTo || q.sCc != q._sCc || q.sSubject != q._sSubject || q.sAttachLst != q._sAttachLst || q.sBigAttachLst != q._sBigAttachLst);
            },
            _composeReady: function(r) {
                var s = this
                  , q = s.$;
                if (r.bGroup) {
                    if (!r.sGroupId) {
                        s.err(e);
                        return false;
                    }
                    if (!r.sContent) {
                        s.err(f).$.$("#content").focus();
                        return false;
                    }
                    return true;
                } else {
                    if (r.sTo && r.sTo.indexOf("ipadmail@qq.com") > 0 && q.trim(q.$("#content").attr("value")) == "" && q.trim(q.$("#subject").attr("value")) == "") {
                        q.$("#subject").focus();
                        return false;
                    }
                    if (r.sReplyId) {
                        if (r.sContent) {
                            return true;
                        }
                        s.err(f).$.$("#content").focus();
                    } else {
                        if (r.sTo || r.sCc || r.sBcc) {
                            return true;
                        }
                        s.err(g).$.$("#to").attr("value", "").focus();
                    }
                }
            },
            _getMail: function(q, r) {
                var v = this
                  , u = q || {}
                  , t = u.oMail = u.oMail || {}
                  , w = t.vw = t.vw || {};
                w.bot = s();
                w.uploadable = v._bUploadable;
                w.androidVer = v.app().androidVer();
                w.promote = v.app().promote().promote;
                u.bOriginSplit = true;
                u.sType = r;
                return v.dataCenter().getCpMail(u, r);
                function s() {
                    var x = v._botUrl() || {}
                      , y = {
                        sms_cp: {},
                        card_cp: {},
                        nt_cp: {}
                    };
                    x["sms_cp"] && (y["sms_cp"].url = n.T(x["sms_cp"].url, "%").replace({
                        sid: o
                    }));
                    x["nt_cp"] && (y["nt_cp"].url = n.T(x["nt_cp"].url, "%").replace({
                        sid: o
                    }));
                    x["card_cp"] && (y["card_cp"].url = n.T(x["card_cp"].url, "%").replace({
                        sid: o
                    }));
                    return y;
                }
            },
            _getOptions: function() {
                var K = this
                  , q = K.$
                  , N = q.$("#to")
                  , E = q.$("#cc")
                  , B = q.$("#bcc")
                  , I = q.$("#groupLst")
                  , T = I.attr("value")
                  , M = q.$("#subject")
                  , F = K.dom$().find("#composeMain")
                  , G = q.$("#content")
                  , J = q.$("#origin")
                  , L = q.$("#sendmailname")
                  , U = F.attr("groupMid")
                  , X = G.attr("origin")
                  , z = G.attr("editOrigin") || 0
                  , r = false
                  , S = t(G.attr("value"))
                  , R = X && z != 1 ? (S + "<br/><br/>" + X) : S
                  , W = G.attr("cont")
                  , V = z == 1 ? t(J.attr("value")) : (X ? (W + "<br/><br/>" + X) : W)
                  , P = ""
                  , Q = ""
                  , A = u()
                  , D = x()
                  , H = y()
                  , C = w();
                for (var aa = 0; aa < A.length; aa++) {
                    P += A[aa].name;
                }
                for (var aa = 0; aa < D.length; aa++) {
                    P += D[aa];
                }
                for (var aa = 0; aa < C.length; aa++) {
                    Q += C[aa].expire;
                }
                if (T) {
                    var Y = "baggiotestvote"
                      , Z = "secret"
                      , O = [];
                    if (r) {
                        O.push("vote1");
                        O.push("vote2");
                        O.push("vote3");
                    }
                    return {
                        bGroup: 1,
                        sGroupId: T,
                        sGroupMailId: U,
                        sContent: R,
                        sSubject: M.attr("value"),
                        oAttachList: A,
                        oCAttachList: D,
                        oDocAttachList: H,
                        oBigAttachList: C,
                        bIsVote: r,
                        sVoteSubj: Y,
                        sVoteType: Z,
                        oVoteOptions: O
                    };
                } else {
                    return {
                        sTo: s("to"),
                        sCc: s("cc"),
                        sBcc: s("bcc"),
                        sSubject: M.attr("value"),
                        sReplyId: F.attr("rlyId"),
                        sForwardId: F.attr("fwdId"),
                        sDraftId: F.attr("draftId"),
                        oAttachList: A,
                        oCAttachList: D,
                        oDocAttachList: H,
                        oBigAttachList: C,
                        sAttachLst: q.$("#attachLst").attr("val") || "",
                        sBigAttachLst: q.$("#bigattachLst").attr("val") || "",
                        _sAttachLst: P,
                        _sBigAttachLst: Q,
                        _sTo: N.attr("to") || "",
                        _sCc: E.attr("cc") || "",
                        _sBcc: B.attr("bcc") || "",
                        _sSubject: M.attr("subj") || "",
                        _nEditOrigin: z,
                        sContent: R,
                        _sContent: V,
                        sSendmailname: L.attr("value") || "",
                        _sContentText: S
                    };
                }
                function t(ab) {
                    return n.htmlEncode(ab).replace(/\n/gi, "<br/>");
                }
                function s(ab) {
                    var ac = K._getAddrEditor(q.$("#addr" + ab)).getAddrItems(true).join("")
                      , ad = q.trim(q.$("#" + ab).attr("value"));
                    if (ad != "") {
                        ac += ad;
                    }
                    return ac;
                }
                function u() {
                    var ab = [];
                    q.$("#attachLst").find("li[un='attItem']").each(function(ac) {
                        ab.push({
                            key: ac.getAttribute('key'),
                            name: ac.getAttribute('name')
                        });
                    });
                    return ab;
                }
                function x() {
                    var ab = [], ac;
                    q.$("#attachLst").find("li[un='cattItem']").each(function(ad) {
                        ac = q.$(ad).attr("key");
                        ac && ab.push(ac);
                    });
                    return ab;
                }
                function y() {
                    var ab = [], ac;
                    q.$("#docattachLst").find("li[un='docattItem']").each(function(ad) {
                        ac = q.$(ad).attr("key");
                        ac && ab.push(ac);
                    });
                    return ab;
                }
                function v(ag) {
                    var af = ag.substr(0, ag.search(/\?/));
                    var ae = ag.substr(ag.search(/k=/) + 2);
                    if (ae.search(/&/) != -1) {
                        ae = ae.substr(0, ae.search(/&/));
                    }
                    var ac = ae.search(/,/);
                    var ad = ae.substr(0, ac);
                    var ab = ae.substr(ac + 1);
                    ag = af + "?k=" + ad + "&code=" + ab + "&t=exs_ftn_download";
                    return ag;
                }
                function w() {
                    var ab = [];
                    q.$("#bigattachLst").find("li[un='bigattItem']").each(function(ac) {
                        var ad = q.$(ac);
                        ab.push({
                            download: v(ad.attr("download")),
                            expire: ad.attr("expire"),
                            icon: ad.attr("icon"),
                            name: ad.attr("name"),
                            sz: ad.attr("sz")
                        });
                    });
                    return ab;
                }
            },
            _suggest: function(r, q) {
                var s = this
                  , t = s.tmplLib();
                s.dataCenter().getAddrLst({
                    sSearch: r,
                    bHot: !r,
                    nLimit: 10,
                    oAddrLst: s._getAddrEditor(q).getAddrItems()
                }, {
                    onsuccess: function(u) {
                        u.length ? s._showSuggest(s.tmplLib().suggest(u), q) : s._hideSuggest(q);
                    },
                    onbeforesend: function() {
                        var u = q.find("[un='sugBtn']")
                          , v = u.attr("btn");
                        if (v != "loading") {
                            u.replaceWith(t.suggestBtn("loading", v)).attr("lastBtn", v);
                        }
                    },
                    oncomplete: function() {
                        var u = q.find("[un='sugBtn']")
                          , v = u.attr("btn")
                          , w = u.attr("lastBtn");
                        if (v == "loading") {
                            u.replaceWith(t.suggestBtn(w));
                        }
                    }
                });
            },
            _showSuggest: function(r, q) {
                q.find("[un='sugList']").html(r).show();
                q.find("[un='sugBtn']").replaceWith(this.tmplLib().suggestBtn("fold"));
            },
            _hideSuggest: function(q) {
                q.find("[un='sugList']").hide();
                q.find("[un='sugBtn']").replaceWith(this.tmplLib().suggestBtn("expend"));
            },
            _getAddrEditor: function(r) {
                var y = this, q = y.$, z = n.lib("Mobile.UI.MailAddr"), v = r, s = r.find("input").data(0), x;
                if (s && !(x = s._moAddressEditor)) {
                    var u = v.find("[un='addrEdit']")
                      , t = u.data(0)
                      , w = v.find("[un='editArea']").data(0);
                    (x = s._moAddressEditor = z.mailaddr({
                        oSelector: {
                            getAddrInput: function() {
                                return s;
                            },
                            getAddrCnt: function() {
                                return t;
                            },
                            getAddrEdit: function() {
                                return w;
                            },
                            getAddrItem: function(A) {
                                var B;
                                u.find("[addr]").each(function(C) {
                                    if (q.$(C).attr("addr") == A) {
                                        B = C;
                                        return false;
                                    }
                                });
                                return B;
                            },
                            getAddrItems: function() {
                                return u.find("div [un='addrItem']").data();
                            }
                        },
                        oTmpl: {
                            getAddrEdit: function(B, A) {
                                return y.tmplLib().composeAddrEdit(B, A);
                            },
                            getAddrItem: function(B, A) {
                                return y.tmplLib().composeAddrItem(B, A);
                            }
                        },
                        oStyle: {
                            getAddrWidth: function() {
                                return u.parent("div").attr("offsetWidth") - 10;
                            },
                            getAddrsEndPos: function() {
                                var D = u.find("[un='addrItem']").data(), A = D.length, C, B = 0;
                                if (A > 0) {
                                    C = q.$(D[A - 1]);
                                    B = C.attr("offsetWidth") + C.attr("offsetLeft");
                                }
                                return B;
                            },
                            getDiffWidth: function() {
                                return 0;
                            }
                        }
                    }));
                }
                return x;
            },
            _hideAllAddrEdit: function(r) {
                var t = this, q = t.$, s;
                n.each(["#addrto", "#addrcc", "#addrbcc"], function(u) {
                    if (r === undefined || q.$(u).html().indexOf(r) != -1) {
                        (s = q.$(u)).size() && t._getAddrEditor(s).hideEditArea();
                    }
                });
                return t;
            },
            _convertAllAddr: function() {
                var s = this, q = s.$, r;
                n.each(["#addrto", "#addrcc", "#addrbcc"], function(t) {
                    (r = q.$(t)).size() && s._getAddrEditor(r).convertAddr();
                });
                return s;
            },
            _uploadAttach: function(r) {
                var s = this
                  , q = s.$;
                q.$("#attachFile").attr("value", r);
            },
            _checkAttachLst: function(q) {
                q.find("li").size() ? q.show() : q.hide();
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/composesucc.js", ["mobile/bu/phone/mod/mod.js"], function(a) {
    var b = QMWin;
    b.createCtrl("Mobile.Phone.Web.Composesucc", {
        bStatic: true,
        sSuper: "Mobile.Phone.Mod"
    }, function(c) {
        return ( {
            rule: function() {
                var d = c.rule();
                b.extend(d.fire || (_oSuprerRule.fire = {}), {
                    download: {
                        sContext: "composesucc"
                    }
                });
                return d;
            },
            events: function() {
                return b.extend(c.events(), {
                    download: function(e, f, d) {
                        var g = /iphone|ipad|ipod/i.test(navigator.userAgent) ? 'ios' : (/android/i.test(navigator.userAgent) ? 'android' : 'other');
                        (new Image()).src = '//mail.qq.com/cgi-bin/do?check=false&action=tgkv&kv=wapcomposesucc|down|' + g + '&uin=' + b.uin();
                    }
                });
            },
            msgs: function() {},
            action: function(d) {
                this.hash('composesucc');
                this.view({
                    returnHash: d || 'list,1__'
                });
                var e = /iphone|ipad|ipod/i.test(navigator.userAgent) ? 'ios' : (/android/i.test(navigator.userAgent) ? 'android' : 'other');
                (new Image()).src = '//mail.qq.com/cgi-bin/do?check=false&action=tgkv&kv=wapcomposesucc|' + e + '&uin=' + b.uin();
                !this.app().isPadMode() && (document.body.scrollTop = $.$("#nv").height());
            },
            render: function() {
                var d = this;
                c.render.apply(d, arguments);
                return d;
            },
            init_: function(d) {
                var e = this.superEx_(c, "init_", [d]);
            }
        }) ;
    });
});
$.package("mobile/bu/phone/mod/web/folderlist.js", ["mobile/bu/phone/mod/mod.js", "mobile/data/todaymgr.js"], function(a) {
    var c = QMWin
      , b = c.ctor_()
      , d = c.sid();
    c.createCtrl("Mobile.Phone.Web.Folderlist", {
        sSuper: "Mobile.Phone.Mod"
    }, function(e) {
        return ( {
            msgs: function() {
                return c.extend(e.msgs(), {
                    "SYN_UPDATE": function() {
                        this.action();
                    }
                });
            },
            rule: function() {
                var f = e.rule();
                c.extend(f.fire || (f.fire = {}), {
                    refresh: {}
                });
                return f;
            },
            events: function() {
                return c.extend(e.events(), {
                    refresh: function(g, h, f) {
                        var i = this
                          , j = i.$.$(h).replaceWith(i.tmplLib().refreshBtn(false));
                        i.dataCenter().update({
                            oCallbacks: {
                                onsuccess: function() {
                                    j.replaceWith(i.tmplLib().refreshBtn(true));
                                    i.viewData();
                                }
                            },
                            bAsync: true
                        });
                    }
                });
            },
            viewData: function() {
                var j = this
                  , i = j.dataCenter()
                  , k = i.getToday()
                  , h = j._botUrl() || {}
                  , g = {}
                  , f = i.getAppGrips(h, j._moreList());
                j.$.$("#foldermask").rmClass("folder_mask").hide();
                if (k.birth && k.birth.length) {
                    g["fr_br"] = {
                        u: k.birth.length,
                        n: k.birth[0].name,
                        url: h["fr_br"] && h["fr_br"].url
                    };
                }
                k = c.extend({
                    vw: {
                        promote: j._moPromote,
                        boxes: f,
                        bot: j._getBot(g, k.set || {})
                    }
                }, k);
                j.hash("today").view(k);
                j.$.$("#top_announce").hide();
            },
            action: function(f) {
                var g = this;
                f && g.dataCenter().update();
                g.viewData();
                g.msg("processCmd", "today");
                g.app().canShowTips() && c.loadPkg("mobile/ui/addtohome.js", {
                    onload: function(h) {
                        if (h) {
                            c.ctrl("Mobile.Ui.AddToHome", {
                                lifespan: 60000,
                                touchIcon: true
                            });
                        } else {
                            debug("AddToHome\u6A21\u5757\u52A0\u8F7D\u5931\u8D25");
                        }
                    }
                });
            },
            init_: function(f) {
                var g = this.superEx_(e, "init_", [f]);
            },
            _initPromote: function() {
                var g = this;
                if (!g._mbInitData) {
                    var f = g.app().promote();
                    g._moPromote = f.promote;
                    g._moBotList = f.bot;
                    g._moMore = f.more;
                    g._moBotUrl = f.url;
                    g._mbInitData = true;
                }
                return g;
            },
            _botList: function() {
                return this._initPromote()._moBotList;
            },
            _moreList: function() {
                return this._initPromote()._moMore;
            },
            _botUrl: function() {
                return this._initPromote()._moBotUrl;
            },
            _getBot: function(f, g) {
                var j = this
                  , i = [];
                c.each(j._botList(), function(l, k) {
                    var n = []
                      , o = l[0]
                      , m = l[1];
                    c.each(m, function(p) {
                        var q = f[p.i];
                        if (!q) {
                            return true;
                        }
                        if (p.h) {
                            if (q && q.u) {
                                n.push(h(p, q));
                            }
                        } else {
                            n.push(h(p, q));
                        }
                    });
                    n.length && i.push({
                        head: o,
                        itms: n
                    });
                });
                return i;
                function h(k, l) {
                    return {
                        b: k.b,
                        html: k.t ? c.TE(k.n, "%").replace(l) : k.n + (!k.v && l.u > 0 ? "(" + l.u + ")" : ""),
                        cmd: l.cmd,
                        url: l.url && c.T(l.url, "%").replace({
                            sid: d,
                            domain: g.domain
                        })
                    };
                }
            },
            _mergeBotArgs: function(f, g) {
                var h = f || {};
                c.each(g, function(i, j) {
                    if (j in h) {
                        c.extend(h[j], i);
                    } else {
                        h[j] = i;
                    }
                });
                return h;
            }
        }) ;
    });
});
$.package("mobile/app/base.js", ["comm/extend/qmcgi.js", "comm/ctrl/tagevent.js", "mobile/framework/modmgr.js", "mobile/framework/cmdcenter.js", "mobile/framework/datacenter.js"], function(e) {
    var a = e
      , i = QMWin
      , h = i.ctor_()
      , b = h.CFG_DBG_TYPE
      , c = h.DBG_DEV_TYPE
      , d = "SYN_UPDATE";
    function f(j, k) {
        return j._identifier == k._identifier && Math.abs(j._x - k._x) < 20 && Math.abs(j._y - k._y) < 5;
    }
    function g(j) {
        return {
            _identifier: j.identifier,
            _x: j.pageX,
            _y: j.pageY
        };
    }
    i.createApp("Mobile.Base", {}, function(j) {
        return ( {
            msgs: function() {
                return {};
            },
            ref: function() {
                return this._moRef;
            },
            hash: function() {
                return this.$.loc("hash").replace("#", "");
            },
            cmd: function() {
                var k = this._moRef;
                return k.cmd.apply(k, arguments);
            },
            modAction: function() {
                this._initAppStart();
            },
            logout: function() {},
            useOverdue: function() {
                return false;
            },
            app_: function() {
                return "";
            },
            ver_: function() {
                return "";
            },
            winEvtCfg_: function() {
                return [];
            },
            fwCfg_: function() {
                return {
                    sRef: "Mobile.Reference",
                    sCmdCenter: "Mobile.CmdCenter",
                    sDataCenter: "Mobile.DataCenter",
                    sModMgr: "Mobile.ModManager",
                    sTmplLib: "Mobile." + this.app_() + ".TmplLib"
                };
            },
            modCfg_: function() {
                return {};
            },
            cmdCfg_: function() {
                return {};
            },
            dcCfg_: function() {
                return {};
            },
            initBase_: function() {
                return this;
            },
            initCmds_: function() {
                return this;
            },
            initData_: function() {
                return this;
            },
            initUseCase_: function() {
                return this;
            },
            isFinish_: function() {
                var l = "err:[app]"
                  , k = this.ref();
                return (!!k.dataCenter() || void (log(l + "dataCenterNotInit"))) && (!!k._moModMgr || void (log(l + "modMgrNotInit"))) && (!!k.tmplLib() || void (log(l + "tmplLibNotInit")));
            },
            init_: function(k) {
                var l = this.superEx_(j, "init_");
                l._log("suc:[app]initBegin::" + i.uin())._initBeforeCtrl(k)._log("suc:[app]initCtrlBegin")._initCtrl(k, function() {
                    if (l.isFinish_()) {
                        l._log("suc:[app]initCtrlFinish")._initAfterCtrl(k)._log("suc:[app]initFinish");
                    } else {
                        l._log("err:[app]initNotFinish");
                        var m = l.$.inWin().appErr;
                        m && m();
                    }
                });
            },
            _log: function(k) {
                log(k);
                return this;
            },
            _initBeforeCtrl: function(k) {
                return this._initData(k)._log(!k.oData ? "err:[data][import]-3|" + k.sDataErr : "suc:[data][import]3");
            },
            _initAfterCtrl: function(k) {
                var l = this;
                l.initData_(k).initBase_(k)._initEvent()._initAppCache()._initAppStart().initCmds_().initUseCase_(k);
                if (b >= c) {
                    l.$.inWin().moRef = l._moRef;
                }
                return l;
            },
            _initData: function(k) {
                var l = this;
                l._msLogId = k.sLogId;
                l._msDevice = k.sDevice;
                l._mbUploadable = k.bUploadable || 0;
                return l;
            },
            _initCtrl: function(l, k) {
                var s = this, p = s.fwCfg_(), r = s._moRef = i.ctrl(p.sRef), m = {
                    oRef: r._setApp(s),
                    oQMWin: i,
                    oQMAF: l.oQMAF,
                    sDevice: s._msDevice,
                    sAndroidVer: l.sAndroidVer,
                    bUploadable: s._mbUploadable
                }, n = i.ctrl(p.sCmdCenter, i.extend(s.cmdCfg_(), m)), q = i.ctrl(p.sModMgr, i.extend(s.modCfg_(), m)), t = i.lib(p.sTmplLib, m), o;
                r._setQMAF(l.oQMAF);
                o = i.ctrl(p.sDataCenter, i.extend(s.dcCfg_(), {
                    oData: l.oData,
                    fReady: function(u) {
                        r._setModMgr(q)._setDataCenter(u)._setCmdCenter(n)._setTmplLib(t);
                        k && k();
                    }
                }, m));
                return s;
            },
            _initEvent: function() {
                return this._initWinEvent()._initTagEvent()._initMessageEvent();
            },
            _initMessageEvent: function() {
                var k = this;
                i.addEvent(k.ref().cmdCenter(), k.msgs() || {}, {
                    oContext: k
                });
                return k;
            },
            _initWinEvent: function() {
                var l = this
                  , k = l.$.inWin()
                  , m = l.winEvtCfg_();
                k["msg"] = function(o, n) {
                    switch (o) {
                    case d:
                        n && l._moRef.dataCenter().syn(n);
                        break;
                    }
                    l._moRef.msg.apply(l._moRef, arguments);
                }
                ;
                i.each(m, function(n) {
                    var p = n.sEvent
                      , o = i.isFunc(n.fHandle) && n.fHandle;
                    l.$.addEvent(p, function(q) {
                        o && o.call(l, q);
                        l._moRef.msg(p, q);
                    });
                });
                return l;
            },
            _initAppCache: function() {
                var m = this;
                if (window.localStorage && window.applicationCache) {
                    var l = window.localStorage
                      , k = window.applicationCache;
                    l.setItem("manifestUpdated", 0);
                    l.setItem("manifestLastUpdateTime", +new Date());
                    k.onupdateready = function(n) {
                        log("suc:[manifest]onupdateready");
                        l.setItem("manifestUpdated", 1);
                        l.setItem("manifestLastUpdateTime", +new Date());
                    }
                    ;
                    k.onnoupdate = function(n) {
                        l.setItem("manifestLastUpdateTime", +new Date());
                    }
                    ;
                    k.onerror = function(n) {
                        log("suc:[manifest]onerror" + JSON.stringify(n));
                    }
                    ;
                    k.oncached = function(n) {
                        log("suc:[manifest]oncached");
                    }
                    ;
                }
                return m;
            },
            _initAppStart: function() {
                var m = this
                  , k = m._mbModActioned;
                if (!k) {
                    log("suc:[app]appStared");
                    var l = m.$.inWin().appStarted;
                    l && l();
                    m._mbModActioned = true;
                }
                return m;
            },
            _initTagEvent: function() {
                var m = this
                  , k = m.$.inWin()
                  , l = m._moRef;
                k["ScaleImage"] = function() {}
                ;
                k["_t"] = function(o, n) {
                    switch (o.type) {
                    case "touchstart":
                        n._moTouchStart = g(o.touches[0]);
                        n._mbTouchMove = false;
                        break;
                    case "touchmove":
                        var q = n._moTouchStart
                          , p = g(o.touches[0]);
                        n._mbTouchMove |= !f(p, q);
                        break;
                    case "touchend":
                        if (n && !n._mbTouchMove) {
                            delete n._moTouchStart;
                            delete n._mbTouchMove;
                            o.preventDefault();
                            var o = document.createEvent('MouseEvents');
                            o.initMouseEvent('click', true, false);
                            n.dispatchEvent(o);
                        }
                        break;
                    }
                }
                ;
                k["_e"] = function(o, n, p) {
                    var r = n._mbLastEvent || 0
                      , q = function(s) {
                        l.msg.call(l, "evt", s, p, n);
                    };
                    q(o);
                }
                ;
                k["_te"] = function(o, n, p) {
                    if (n._mbTouchMove) {
                        return;
                    }
                    l.msg.call(l, "evt", o, "itemTouchFocus", n);
                    var r = n._mbLastEvent || 0
                      , q = function(s) {
                        l.msg.call(l, "evt", s, p, n);
                    };
                    q(o);
                    o.preventDefault();
                }
                ;
                return m;
            }
        }) ;
    });
    i.createCtrl("Mobile.Reference", {}, function(j) {
        return ( {
            _setApp: function(k) {
                var l = this;
                l._moApp = k;
                return l;
            },
            _setModMgr: function(k) {
                var l = this;
                l._moModMgr = k;
                return l;
            },
            _setDataCenter: function(k) {
                var l = this;
                l._moDataCenter = k;
                return l;
            },
            _setCmdCenter: function(k) {
                var l = this;
                l._moCmdCenter = k;
                return l;
            },
            _setTmplLib: function(k) {
                var l = this;
                l._moTmplLib = k;
                return l;
            },
            _setQMAF: function(k) {
                var l = this;
                l._moQMAF = k;
                return l;
            },
            app: function() {
                return this._moApp;
            },
            dataCenter: function() {
                return this._moDataCenter;
            },
            cmdCenter: function() {
                return this._moCmdCenter;
            },
            tmplLib: function() {
                return this._moTmplLib;
            },
            cmd: function() {
                var k = this._moCmdCenter;
                return k.cmd.apply(k, arguments);
            },
            msg: function(k, l) {
                var n = this
                  , m = n._moCmdCenter;
                if (k == "processCmd") {
                    n._moApp._log("suc:[load]4|" + l);
                } else if (k == "processCmdErr") {
                    n._moApp._log("err:[load]-4|" + l);
                }
                return m && m.msg.apply(m, arguments);
            },
            hash: function() {
                var k = this._moCmdCenter;
                var m = arguments[0];
                var l = {
                    "today": "today",
                    "list": "maillist",
                    "folder": "folderlist",
                    "concact": "contacts",
                    "mail": "readmail",
                    "compose": "compose qm_frame_OnlyContent qm_frame_HideFooter qm_frame_HideTopAnnounce",
                    "compose,group": "compose_group qm_frame_OnlyContent qm_frame_HideFooter qm_frame_HideTopAnnounce"
                };
                if (m) {
                    var n = m.split(",")[0];
                    if (n == "list" || n == "mail") {
                        m = n;
                    }
                    if (l[m]) {
                        i.$(".qm_frame").data(0).className = "qm_frame " + l[m];
                    }
                }
                return k.hash.apply(k, arguments);
            },
            getMod: function() {
                var k = this._moModMgr;
                return k.getMod.apply(k, arguments);
            },
            getActMods: function() {
                var k = this._moModMgr;
                return k.getActMods.apply(k, arguments);
            },
            isModAct: function(k) {
                var l = this._moModMgr;
                return l.isModAct.apply(l, arguments);
            },
            view: function() {
                var k = this._moTmplLib;
                return k.view.apply(k, arguments);
            },
            hurtBeats: function() {
                return this._moDataCenter.hurtBeats();
            },
            isConnecting: function() {
                var k = this._moQMAF;
                return k ? (k.connecting == "0" ? false : true) : true;
            },
            useOverdue: function() {
                return this._moApp.useOverdue();
            }
        }) ;
    });
});
$.package("mobile/app/phone/mail.js", ["comm/ui/effect.js", "mobile/app/base.js", "mobile/data/mailmgr.js", "mobile/data/mailcache.js", "mobile/bu/phone/mod/mod.js", "mobile/bu/phone/mod/today.js", "mobile/bu/phone/tmpl/comm.js", "mobile/bu/phone/tmpl/web/maillist.js", "mobile/bu/phone/tmpl/web/readmail.js", "mobile/bu/phone/tmpl/web/compose.js", "mobile/bu/phone/tmpl/web/composesucc.js", "mobile/bu/phone/tmpl/web/base.js"], function(b) {
    var a = b
      , c = QMWin;
    c.createApp("Mobile.Phone.Mail", {
        sSuper: "Mobile.Base"
    }, function(d) {
        return ( {
            app_: function() {
                return "Phone";
            },
            ver_: function() {
                return "App";
            },
            modCfg_: function() {
                return {
                    sPrefix: "Mobile.Phone.Web.",
                    sPath: "mobile/bu/phone/mod/web/",
                    oContainer: {
                        "nav": "#nv|exclusive",
                        "content": "#ct",
                        "folderlist": "#fl"
                    },
                    oMod: {
                        "nav": "Nav|nav",
                        "folder": "Folder|content",
                        "today": "Today|content",
                        "concact": "Concact|content",
                        "list": "List|content",
                        "mail": "Mail|content",
                        "compose": "Compose|content",
                        "composesucc": "Composesucc|content",
                        "grouplist": "GroupList|content",
                        "folderlist": "Folderlist|folderlist"
                    }
                };
            },
            dcCfg_: function() {
                return {
                    oDataMgrs: ["Mobile.Data.TodayMgr", "Mobile.Data.MailMgr"]
                };
            },
            winEvtCfg_: function() {
                return ( [{
                    sEvent: "scroll",
                    fHandle: function(e) {
                        this.$.$("#tips").html("");
                    }
                }]) ;
            },
            initCmds_: function() {
                var e = this
                  , f = e.hash() || "today";
                e.cmd("nav").cmd("folderlist").cmd(f);
                return e;
            },
            initData_: function(e) {
                var g = this
                  , f = e || {};
                g._moPromote = e.oPromote;
                g._msAndroidVer = e.sAndroidVer;
                g._mbShowTips = e.bShowTip;
                g._mbIsShowed = false;
                e.bShowTip && g._requestShowTip("73");
                g._msDevice == "android" && (g._msAndroidVer = e.sAndroidVer.replace("Android", ""));
                return g;
            },
            isFinish_: function() {
                var f = this
                  , g = "err:[app]"
                  , e = f.ref().dataCenter();
                return d.isFinish_.call(f) && (!!e.getToday() || void (log(g + "[data]todayDataNotFound"))) && (!!e.getSetting() || void (log(g + "[data]settingDataNotFound"))) && (!!e.getFolder() || void (log(g + "[data]folderDataNotFound")));
            },
            _requestShowTip: function(f, e) {
                var g = this
                  , h = c.T('/cgi-bin/readtemplate?t=request_tip&sid=$sid$&tip=$tip$&r=$r$').replace({
                    tip: f,
                    r: Math.random(),
                    sid: c.sid()
                });
                c.ajax({
                    nTimeout: 0,
                    bAsync: false,
                    sType: "GET",
                    sUrl: h,
                    onsuccess: function(k, j, i) {
                        g._mbShowTips = (/true/gi).test(k);
                    },
                    onerror: function(j, k, i) {
                        g._mbShowTips = false;
                    }
                });
            },
            androidVer: function() {
                var e = this;
                if (e._msDevice == "android") {
                    return e._msAndroidVer.split(".")[1];
                } else {
                    return 0;
                }
            },
            isPadMode: function() {
                return window.innerWidth >= 600;
            },
            canShowTips: function() {
                var k = this
                  , i = false;
                if (k._mbShowTips && !k._mbIsShowed) {
                    var j = navigator
                      , f = (/iphone|ipod|ipad/gi).test(j.platform)
                      , e = 'standalone'in j && f
                      , h = e && j.standalone
                      , g = j.appVersion.match(/Safari/gi);
                    if (e && !h && g) {
                        i = true;
                    }
                    k._mbIsShowed = true;
                }
                return i;
            },
            promote: function() {
                return this._moPromote || {};
            }
        }) ;
    });
});
