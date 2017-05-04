!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)return i(g, !0);
                if (f)return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        b.exports = '<div class="mod-toolbar">\r\n    <h2 id="cancleSearchcity">添加城市</h2>\r\n    <div class="back" id="cancleAddcity"></div>\r\n</div>\r\n<div class="page-wrapper is-nopading">\r\n    <div class="mod-search !fixed is-novel">\r\n        <div class="new-search-box">\r\n            <input type="text" placeholder="请输入城市名（中文或拼音）" id="userInputCity" class="iphone" maxlength="20">\r\n            <div class="new-search-button" id="userInputSearch">搜索</div>\r\n        </div>\r\n        <!-- <div class="search-box">\r\n            <div class="input">\r\n                <input type="text" placeholder="请输入城市名（中文或拼音）" id="userInputCity" class="iphone" maxlength="20">\r\n                <i class="G-ico G-ico-x-fill" style="display:;" id="searchInputDel"></i>\r\n            </div>\r\n        </div> -->\r\n        <!-- 实时匹配 -->\r\n        <div class="search-mach">\r\n            <ul class="location-list" style="display:;" id="searchDataList">\r\n\r\n            </ul>\r\n        </div>\r\n        <p class="mod-search--result-amount hidden" id="searchResultTip">未搜索到结果</p>\r\n    </div>\r\n    <h1 class="title-out-card">热门城市</h1>\r\n    <!-- <div class="mod-card">\r\n        <ul class="location-list" id="hotCitysList"></ul>\r\n    </div> -->\r\n      <div class="mod-card is-nopadding" id="hotCitysList">\r\n        \r\n      </div>\r\n    \r\n</div>'
    }, {}], 2: [function (a, b, c) {
        b.exports = '<div class="mod-toolbar">\r\n    <h2>编辑城市</h2>\r\n    <div class="right" id="saveCity">完成</div>\r\n</div>\r\n<div class="page-wrapper mod-setting2">\r\n    <div class="mod-card is-nopadding">\r\n        <ul class="location-list">\r\n            <li class="local-status" id="userEditCurrentCitys">正在定位...</li>\r\n        </ul>\r\n        <ul class="location-list" id="editCityList">\r\n            <% obj && obj.forEach(function (item) { %>\r\n                <% if(item && item.ID && item.CH){ %>\r\n                <li class="" data-citygbid="<%= item.ID %>"><span><%= item.CH %></span><i class="G-ico G-ico-del-life"></i></li>\r\n                <% } %>\r\n            <% });%>\r\n        </ul>\r\n    </div>\r\n    <p class="tips-out-card">拖拽城市可以进行排序</p>\r\n</div>\r\n<div class="mod-alert hidden">\r\n    <div class="alert-box short-text" id="alert2" style="margin-top: 272px;">\r\n        <div class="alert-content content-text">\r\n            <p>至少保留一个城市</p>\r\n        </div>\r\n        <div class="btn-group">\r\n            <a class="btn btn-blue">确定</a>\r\n        </div>\r\n    </div>\r\n</div>'
    }, {}], 3: [function (a, b, c) {
        b.exports = '<div class="location-button-container">\r\n  \t<% if(HOTCITYLIST){ %>\r\n\t  \t<% for(var i = 0; i<4; i++){ %>\r\n\t\t  \t<ul class="location-row">\r\n\t\t\t  \t<% for(var j = i*5; j<(i+1)*5; j++){ %>\r\n\t\t\t  \t<% var item = HOTCITYLIST[j]; %>\r\n\t\t\t  \t<% if(item){ %>\r\n\t\t\t  \t<li class="<%= (citybid.indexOf(item.ID)>-1 ? \'chosed\' : \'\')%>" data-citygbid="<%= item.ID %>">\r\n\t\t\t  \t\t<span><%= item.CH %></span>\r\n\t\t\t  \t</li>\r\n\t  \t  \t\t<% }%>\r\n\t  \t  \t\t<% }%>\r\n\t\t  \t</ul>\r\n\t  \t<% }%>\r\n  \t<% }%>\r\n</div>'
    }, {}], 4: [function (a, b, c) {
        b.exports = '<div class="mod-toolbar">\r\n    <div class="back" id="back"></div>\r\n    <h2>选择城市</h2>\r\n    <div class="right" id="editCity">编辑</div>\r\n</div>\r\n<div class="page-wrapper mod-setting2">\r\n    <div class="mod-card is-nopadding">\r\n        <ul class="location-list" id="locationList">\r\n            <li class="local-status" id="userCurrentCitys">正在定位...</li>\r\n            <% obj && obj.length > 0 && obj.forEach(function (item) { %>\r\n                <!--TODO:-->\r\n                <% if(item){ %>\r\n                <li data-citygbid="<%= item.ID %>" class="redirect"><span><%= item.CH %></span></li>\r\n                <% } %>\r\n            <% });%>\r\n            <li id="addCity"><span><i class="G-ico G-ico-add"></i>添加城市</span></li>\r\n            <li id="addCity-disabled" class="local-disabled"><span><i class="G-ico G-ico-add"></i>添加城市（最多10个自定义城市）</span></li>\r\n        </ul>\r\n    </div>\r\n    <p class="tips-out-card">将为你推送第一个城市的天气</p>\r\n</div>\r\n<div class="mod-alert hidden">\r\n    <div class="alert-box short-text" id="alert2" style="position: absolute; margin-left: -40%; margin-top: -10%; left: 50%; top: 50%;">\r\n        <div class="alert-content content-text">\r\n            <p>至少保留一个城市</p>\r\n        </div>\r\n        <div class="btn-group">\r\n            <a class="btn btn-blue">确定</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    }, {}], 5: [function (a, b, c) {
        b.exports = '<% obj && obj.forEach(function (item) { %>\r\n    <li data-citygbid="<%= item.ID %>"><%= item.CH %><% if (item.cityName) {%>-<%= item.cityName %><% } %><% if (item.provinceName) { %>-<%= item.provinceName %><% } %></li>\r\n<% }); %>\r\n'
    }, {}], 6: [function (a, b, c) {
        b.exports = '<div class="weather-bg" id="weather-bg">\r\n    <div id="titleBarbgClass" class="mod-header <%= data[0].weather.current.bgClass %>">\r\n        <!-- <div class="mod-header-left" data-click="101" data-url="qb://home">\r\n            <a class="header-subname G-ico G-ico-arr-back with-word" data-tips=""></a>\r\n        </div> -->\r\n        <a href="javascript:void(0)" data-hash="#p=multiSetting" data-click="002" class="mod-header-right" data-stat="BZTQ003">设置城市</a>\r\n    </div>\r\n    <div id="currentCitybgClass" class="mod-weather2 <%= data[0].weather.current.bgClass %>" style="-webkit-transform: translate3d(0,0,0);">\r\n        <ul class="city-indicator" id="swipe-indicator">\r\n            <% if(data && data.length > 1) { %>\r\n                <% data && data.forEach(function (item,index) { %>\r\n                    <li <% if(index == swipe_index) {%>class="active" <% }%>></li>\r\n                <% });%> \r\n            <% } %>\r\n        </ul>\r\n        <div class="banner-slider" id="banner_slider">\r\n            <div class="swipe-wrap">\r\n                <% data && data.forEach(function (item) { %>\r\n                <% if(item.citybid && item.cityname && item.weather && item.weather.current) {%>\r\n                <div class="slide-item" data-cityid="<%=item.citybid %>" data-cityname="<%= item.cityname %>" data-bgclass="<%= item.weather.current.bgClass %>">\r\n                    <div class="mod-today">\r\n                        <div class="mod-today-city"><span><%= item.cityname %></span><% if(item.lbstype==\'1\'){ %><i id="gpsIcon" class="G-ico G-ico-location"></i><% }else{ %><i id="gpsIcon"></i><% } %></div>\r\n                        <div class="main-temp" data-click="003" data-url="<%= item.weather.links.weather%>" data-stat="BZTQ004"><%= item.weather.current.curT %></div>\r\n                        <div class="more-info">\r\n                            <span data-click="003" data-url="<%= item.weather.links.weather%>"  data-stat="BZTQ005"><%= item.weather.current.text %></span>\r\n                            <% if(item.weather.current.pm25) { %>\r\n                                <span data-click="004" data-url="<%= item.weather.links.pm25%>" class="air"  data-stat="BZTQ006"><%= item.weather.current.pm25.text %></span>\r\n                                <span class="air-quality"><%= item.weather.current.pm25.val %></span>\r\n                            <% }%>\r\n                        </div>\r\n                        \r\n                        <% item.weather.current.warning && item.weather.current.warning.forEach(function(item) {%>\r\n                        <div class="warning-info">\r\n                            <span class="weather-warn <%= item.class%>" data-click="005" data-url="<%= item.url%>" data-stat="BZTQ007"></span>\r\n                            <span class="warn-text" data-click="005" data-url="<%= item.url%>" data-stat="BZTQ007"><%= item.text%></span>\r\n                            <% if(item.text == \'台风\') { %><!-- 大风预警 -->\r\n                                <span class="warn-text" data-click="009" data-url="http://typhoon.weather.com.cn/gis/typhoon_m.shtml">台风跟踪 <a class="G-ico G-ico-arr-r"></a></span>\r\n                            <% }%>\r\n                        </div>\r\n                        <% }) %>\r\n                        <% if(item.weather.weatherinfo) {%>\r\n                            <div class="life-tips" data-click="016" data-url="<%= item.weather.weatherinfo.url%>">\r\n                                <i class="G-img-icon">\r\n                                    <img src="<%= item.weather.weatherinfo.icon%>" alt="" width="28" height="24">\r\n                                </i>\r\n                                <span class="tips-frame"><span><%= item.weather.weatherinfo.value %><i class="G-ico G-ico-arr-r"></i></span></span>\r\n                            </div>\r\n                        <% }%>\r\n                    </div>\r\n\r\n                    <div class="mod-next-five-day" data-click="006" data-url="<%= item.weather.links.weather%>"  data-stat="BZTQ008">\r\n                        <div class="graph" >\r\n                            <div><canvas  height="456" width="1320"></canvas></div>\r\n                        </div>\r\n                        <ul class="detail">\r\n                            <% item.weather.future && item.weather.future.forEach(function(item) {%>\r\n                            <li class="<%= item.class%>" data-lowtemp="<%= item.lowT %>" data-hightemp="<%= item.hightT%>"><%= item.week%></li>\r\n                            <%})%>\r\n                        </ul>\r\n                    </div>\r\n                    <% if(item.citybid.length!=9){ %>\r\n                    <div class="mod-more-forecast">\r\n                        <a data-click="007" data-url="<%= item.weather.links.future15%>" data-stat="BZTQ010"><div>15天预报</div></a>\r\n                        <a data-click="008" data-url="<%= item.weather.links.temp24%>" data-stat="BZTQ009"><div>24小时预报</div></a>\r\n                        <a data-click="111" data-url="<%= item.weather.links.rainfall%>" data-stat="BZTQ011"><div>降雨预报</div></a>\r\n                    </div>\r\n                    <% } %>\r\n                    <% if(item.weather.lifeindex && item.weather.lifeindex.length > 0) { %>\r\n                    <div class="mod--tips">\r\n                        <h1>生活指数</h1>\r\n                        <ul >\r\n                            <% if(item.weather.lifeindex.length % 3 == 0) { %>\r\n                                <% item.weather.lifeindex.forEach(function(vo,index) {%>\r\n                                    <% if(index==0){ %>\r\n                                    <li class="<%= vo.class %>" data-click=\'<% if(index == 0) { %><%= "00" +(9+index) %> <%} else {%> <%= "0" +(9+index) %> <%}%>\'  data-url="http://wx.weather.com.cn/mcy/mcy.html?areaid=<%= item.citywiid %>&from=singlemessage&isappinstalled=0" data-stat="BZTQ012"><i><span class="badge"></span></i>穿衣助手</li>\r\n                                    <%}else{%>\r\n                                    <li class="<%= vo.class %>" data-click=\'<% if(index == 0) { %><%= "00" +(9+index) %> <%} else {%> <%= "0" +(9+index) %> <%}%>\'  data-url="<%= vo.link%>"><i></i><% if(vo.text) { %><%= vo.text %><%} else {%><%= vo.index %><%}%></li>\r\n                                    <%}%>\r\n                                <%})%>\r\n                            <% } %>\r\n                            <% if(item.weather.lifeindex.length % 3 == 1) { %>\r\n                                <% item.weather.lifeindex.forEach(function(vo,index) {%>\r\n                                    <li class="<%= vo.class %>" data-click=\'<% if(index == 0) { %><%= "00" +(9+index) %> <%} else {%> <%= "0" +(9+index) %> <%}%>\' data-url="<%= vo.link%>"><i></i><% if(vo.text) { %><%= vo.text %><%} else {%><%= vo.index %><%}%></li>\r\n                                <%})%>\r\n                                <li><i></i></li>\r\n                                <li><i></i></li>\r\n                            <% } %>\r\n                            <% if(item.weather.lifeindex.length % 3 == 2) { %>\r\n                                <% item.weather.lifeindex.forEach(function(vo,index) {%>\r\n                                    <li class="<%= vo.class %>" data-click=\'<% if(index == 0) { %><%= "00" +(9+index) %> <%} else {%> <%= "0" +(9+index) %> <%}%>\' data-url="<%= vo.link%>"><i></i><% if(vo.text) { %><%= vo.text %><%} else {%><%= vo.index %><%}%></li>\r\n                                <%})%>\r\n                                <li><i></i></li>\r\n                            <% } %>\r\n                        </ul>\r\n                    </div>\r\n                    <% } %>\r\n                    <ul class="mod-local-feeds">\r\n                    <% if(item.weather.weatherindex && item.weather.weatherindex.length > 0) {%>\r\n                        <% item.weather.weatherindex.forEach(function(item, index) {%>\r\n                        <% if(index < 3) { %>\r\n                        <li data-click="<%= "0" +(17+index) %>" data-url="<%= item.url%>">\r\n                            <div class="img-wrapper"><img src="<%= item.icon%>" alt=""></div>\r\n                            <div class="feeds-info">\r\n                                <h1><%= item.value%></h1>\r\n                                <p><%= item.title%></p>\r\n                            </div>\r\n                        </li>\r\n                        <% }%>\r\n                        <% }) %>\r\n                    <% }%>\r\n                    </ul>\r\n                    <div class="mod-find-more">\r\n                        <a data-url="<%= data[0].weather.links.moreLifeUrl%>" data-click="015"><span>发现精彩生活</a>\r\n                    </div>\r\n                </div>\r\n                <% }else{ %>\r\n                <div class="slide-item" data-bgclass="rainy">\r\n                    <div class="weather-fail">\r\n                        <p>天气君开小差了，\r\n                          <br>请刷新页面更新数据</p>\r\n                        <div class="mod-find-more">\r\n                          <a href="/index">刷新</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <% }}); %>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    }, {}], 7: [function (a, b, c) {
        b.exports = '<div class="mod-locate-fail" style="-webkit-transform: translate3d(0,0,0);">\r\n    <div class="top-info">\r\n        <%if(citybid) {%>\r\n            <div class="city current" id="citybid" data-citybid="<%=citybid%>" data-url="#p=multiSetting"><%= cityname%></div>\r\n        <%} else {%>\r\n            <div class="city current" id="citybid" data-citybid="0" data-url="#p=multiSetting">选择城市</div>\r\n        <%}%>\r\n        <div class="btn-toggle"></div>\r\n    </div>\r\n\r\n    <div class="fail-tip">\r\n        <i class="user-dispp"></i>\r\n\r\n        <p>找不到你所在的城市<br/>信息, 请手动选择</p>\r\n    </div>\r\n</div>'
    }, {}], 8: [function (a, b, c) {
        a("./page/app.js").start()
    }, {"./page/app.js": 16}], 9: [function (a, b, c) {
        function d(a, b) {
            "use strict";
            function c() {
                //johnstonli
                p = t.children, s = p.length, p.length < 2 && (b.continuous = !1), o.transitions && b.continuous && p.length < 3 && (t.appendChild(p[0].cloneNode(!0)), t.appendChild(t.children[1].cloneNode(!0)), p = t.children), q = new Array(p.length), r = a.getBoundingClientRect().width || a.offsetWidth, t.style.width = p.length * r + "px";
                for (var c = p.length; c--;) {
                    var d = p[c];
                    d.style.width = r + "px", d.setAttribute("data-index", c), o.transitions && (d.style.left = c * -r + "px", h(c, u > c ? -r : u < c ? r : 0, 0))
                }
                b.continuous && o.transitions && (h(f(u - 1), -r, 0), h(f(u + 1), r, 0)), o.transitions || (t.style.left = u * -r + "px"), a.style.visibility = "visible"
            }

            function d() {
                b.continuous ? g(u - 1) : u && g(u - 1)
            }

            function e() {
                b.continuous ? g(u + 1) : u < p.length - 1 && g(u + 1)
            }

            function f(a) {
                return (p.length + a % p.length) % p.length
            }

            function g(a, c) {
                if (u != a) {
                    if (o.transitions) {
                        var d = Math.abs(u - a) / (u - a);
                        if (b.continuous) {
                            var e = d;
                            d = -q[f(a)] / r, d !== e && (a = -d * p.length + a)
                        }
                        for (var g = Math.abs(u - a) - 1; g--;)h(f((a > u ? a : u) - g - 1), r * d, 0);
                        a = f(a), h(u, r * d, c || v), h(a, 0, c || v), b.continuous && h(f(a - d), -(r * d), 0)
                    } else a = f(a), j(u * -r, a * -r, c || v);
                    u = a, n(b.callback && b.callback(u, p[u]))
                }
            }

            function h(a, b, c) {
                i(a, b, c), q[a] = b
            }

            function i(a, b, c) {
                var d = p[a], e = d && d.style;
                e && (e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = c + "ms", e.webkitTransform = "translate(" + b + "px,0)translateZ(0)", e.msTransform = e.MozTransform = e.OTransform = "translateX(" + b + "px)")
            }

            function j(a, c, d) {
                if (!d)return void(t.style.left = c + "px");
                var e = +new Date, f = setInterval(function () {
                    var g = +new Date - e;
                    return g > d ? (t.style.left = c + "px", y && k(), b.transitionEnd && b.transitionEnd.call(event, u, p[u]), void clearInterval(f)) : void(t.style.left = (c - a) * (Math.floor(g / d * 100) / 100) + a + "px")
                }, 4)
            }

            function k() {
                w = setTimeout(e, y)
            }

            function l() {
                y = 0, clearTimeout(w)
            }

            var m = function () {
            }, n = function (a) {
                setTimeout(a || m, 0)
            }, o = {
                addEventListener: !!window.addEventListener,
                touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                transitions: function (a) {
                    var b = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                    for (var c in b)if (void 0 !== a.style[b[c]])return !0;
                    return !1
                }(document.createElement("swipe"))
            };
            if (a) {
                var p, q, r, s, t = a.children[0];
                b = b || {};
                var u = parseInt(b.startSlide, 10) || 0, v = b.speed || 300;
                b.continuous = void 0 === b.continuous || b.continuous;
                var w, x, y = b.auto || 0, z = {}, A = {}, B = {
                    handleEvent: function (a) {
                        switch (a.type) {
                            case"touchstart":
                                this.start(a);
                                break;
                            case"touchmove":
                                this.move(a);
                                break;
                            case"touchend":
                                n(this.end(a));
                                break;
                            case"webkitTransitionEnd":
                            case"msTransitionEnd":
                            case"oTransitionEnd":
                            case"otransitionend":
                            case"transitionend":
                                n(this.transitionEnd(a));
                                break;
                            case"resize":
                                //n(c);//johnstonli 
                        }
                        b.stopPropagation && a.stopPropagation()
                    }, start: function (a) {
                        var b = a.touches[0];
                        z = {
                            x: b.pageX,
                            y: b.pageY,
                            time: +new Date
                        }, x = void 0, A = {}, t.addEventListener("touchmove", this, !1), t.addEventListener("touchend", this, !1)
                    }, move: function (a) {
                        if (!(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                            b.disableScroll && a.preventDefault();
                            var c = a.touches[0];
                            A = {
                                x: c.pageX - z.x,
                                y: c.pageY - z.y
                            }, "undefined" == typeof x && (x = !!(x || Math.abs(A.x) < Math.abs(A.y))), x || (a.preventDefault(), l(), b.continuous ? (i(f(u - 1), A.x + q[f(u - 1)], 0), i(u, A.x + q[u], 0), i(f(u + 1), A.x + q[f(u + 1)], 0)) : (A.x = A.x / (!u && A.x > 0 || u == p.length - 1 && A.x < 0 ? Math.abs(A.x) / r + 1 : 1), i(u - 1, A.x + q[u - 1], 0), i(u, A.x + q[u], 0), i(u + 1, A.x + q[u + 1], 0)))
                        }
                    }, end: function (a) {
                        var c = +new Date - z.time, d = Number(c) < 250 && Math.abs(A.x) > 20 || Math.abs(A.x) > r / 2, e = !u && A.x > 0 || u == p.length - 1 && A.x < 0;
                        b.continuous && (e = !1);
                        var g = A.x < 0;
                        x || (d && !e ? (g ? (b.continuous ? (h(f(u - 1), -r, 0), h(f(u + 2), r, 0)) : h(u - 1, -r, 0), h(u, q[u] - r, v), h(f(u + 1), q[f(u + 1)] - r, v), u = f(u + 1)) : (b.continuous ? (h(f(u + 1), r, 0), h(f(u - 2), -r, 0)) : h(u + 1, r, 0), h(u, q[u] + r, v), h(f(u - 1), q[f(u - 1)] + r, v), u = f(u - 1)), b.callback && b.callback(u, p[u])) : b.continuous ? (h(f(u - 1), -r, v), h(u, 0, v), h(f(u + 1), r, v)) : (h(u - 1, -r, v), h(u, 0, v), h(u + 1, r, v))), t.removeEventListener("touchmove", B, !1), t.removeEventListener("touchend", B, !1)
                    }, transitionEnd: function (a) {
                        parseInt(a.target.getAttribute("data-index"), 10) == u && (y && k(), b.transitionEnd && b.transitionEnd.call(a, u, p[u]))
                    }
                };
                return c(), y && k(), o.addEventListener ? (o.touch && t.addEventListener("touchstart", B, !1), o.transitions && (t.addEventListener("webkitTransitionEnd", B, !1), t.addEventListener("msTransitionEnd", B, !1), t.addEventListener("oTransitionEnd", B, !1), t.addEventListener("otransitionend", B, !1), t.addEventListener("transitionend", B, !1)), window.addEventListener("resize", B, !1)) : window.onresize = function () {
                    c()
                }, {
                    setup: function () {
                        c()
                    }, slide: function (a, b) {
                        l(), g(a, b)
                    }, prev: function () {
                        l(), d()
                    }, next: function () {
                        l(), e()
                    }, stop: function () {
                        l()
                    }, getPos: function () {
                        return u
                    }, getNumSlides: function () {
                        return s
                    }, kill: function () {
                        l(), t.style.width = "", t.style.left = "";
                        for (var a = p.length; a--;) {
                            var b = p[a];
                            b.style.width = "", b.style.left = "", o.transitions && i(a, 0, 0)
                        }
                        o.addEventListener ? (t.removeEventListener("touchstart", B, !1), t.removeEventListener("webkitTransitionEnd", B, !1), t.removeEventListener("msTransitionEnd", B, !1), t.removeEventListener("oTransitionEnd", B, !1), t.removeEventListener("otransitionend", B, !1), t.removeEventListener("transitionend", B, !1), window.removeEventListener("resize", B, !1)) : window.onresize = null
                    }
                }
            }
        }

        (window.jQuery || window.Zepto) && !function (a) {
            a.fn.Swipe = function (b) {
                return this.each(function () {
                    a(this).data("Swipe", new d(a(this)[0], b))
                })
            }
        }(window.jQuery || window.Zepto), b.exports = c = d
    }, {}], 10: [function (a, b, c) {
        function d(a) {
            var b = cityList, c = intelCitys, d = {};
            return b.PROVENCELIST.some(function (b) {
                return b.CITYS.some(function (b) {
                    return b.ID == a ? d = b : b.COUNTYS.some(function (b) {
                        if (b.ID == a)return d = b
                    })
                })
            }) ? d : (c.some(function (b) {
                if (b.ID == a)return d = b
            }), d)
        }

        function e(a) {
            var b = intelCitys;
            return b.some(function (b) {
                return b.ID === a
            })
        }

        function f(a, b, c, d) {
            var f = o.citytemp, g = o.conf.commonsetting.url.pm25, h = "2";
            return e(a) ? h = a : f.some(function (a) {
                if (a.CNID == b && c && c.indexOf(a.NAME) > -1)return h = a.ID, !0
            }), g.replace("{{$id}}", h).replace("{{$uid}}", l("${guid}moji_uid"))
        }

        function g(a, b, c, d) {
            var f = o.conf.commonsetting.url.weather15;
            if (e(a))return f.replace("{{$id}}", a).replace("{{$uid}}", l("${guid}moji_uid"));
            var g = o.citytemp, h = "2";
            return g.some(function (a) {
                if (a.CNID == b && a.NAME == c)return h = a.ID, !0
            }), f.replace("{{$id}}", h).replace("{{$uid}}", l("${guid}moji_uid"))
        }

        function h(a, b, c) {
            var d = o.conf.commonsetting.url.weather1, f = o.conf.commonsetting.url.weather2;
            o.citytemp;
            return e(a) ? f.replace("{{$cityid}}", a).replace("{{$uid}}", l("${guid}moji_uid")) : d.replace("{{$weathercnid}}", b || "101010100")
        }

        function i(a, b, c, d) {
            var f = o.citytemp, g = o.conf.commonsetting.url.temp24, h = "2";
            return e(a) ? h = a : f.some(function (a) {
                if (a.CNID == b && a.NAME == c)return h = a.ID, !0
            }), g.replace("{{$cityid}}", h).replace("{{$uid}}", l("${guid}moji_uid"))
        }

        function j(a, b, c) {
            var j = {};
            try {
                var l = e(b), p = d(b);
                j.citybid = b, j.cityname = p && p.CH || a.sCityName, j.citywiid = a.sCityWiId;
                var q = {};
                j.weather = q, q.current = {}, q.future = [], q.links = {}, j.lbstype = a.iLbsType || 0, q.lifeindex = [];
                var r, s = "", t = "";
                if (a.vlistCityItems.slice(0, 5).map(function (a, b) {
                        0 == b && (a.nCurrentT == -1e3 ? q.current.curT = (a.nMaxT + a.nMinT) / 2 : q.current.curT = a.nCurrentT, q.current.bgClass = m.weatherBGCss(a.nDWeaIndex), q.current.type = a.nDWeaIndex, q.current.wClass = m.weatherCss(a.nDWeaIndex), q.current.text = m.proWeatherTxt(a.sDweather), q.current.tempRange = a.nMinT + "°/" + a.nMaxT + "°", q.current.windTxt = a.sWind1 + a.sWindPower1), r = {}, r["class"] = m.weatherCss(a.nDWeaIndex), r.week = m.getWeek(b), r.lowT = a.nMinT, r.hightT = a.nMaxT, q.future.push(r)
                    }), !l && a.stPM25 && a.stPM25.iAQI != -1 && (q.current.pm25 = {
                        "class": m.getAQIClass(a.stPM25),
                        val: a.stPM25.iAQI,
                        text: m.getAqiTxt(a.stPM25)
                    }, q.links.pm25 = f(b, a.sCityWiId, j.cityname, c)), !l && a.vWaringInfo && a.vWaringInfo && a.vWaringInfo.length) {
                    var u = a.vWaringInfo;
                    q.current.warning = [], u.map(function (a, b) {
                        b < 1 && q.current.warning.push({
                            "class": m.getWarningClass(a.sLevel),
                            text: a.sType,
                            url: o.conf.commonsetting.url.warning.replace("{{$file}}", a.sLinkSuffix)
                        })
                    })
                }
                if (q.links.future15 = g(b, a.sCityWiId, j.cityname, c), q.links.weather = h(b, a.sCityWiId, c), q.links.temp24 = i(b, a.sCityWiId, j.cityname, c), q.links.rainfall = o.conf.commonsetting.url.rainfall, q.links.moreLifeUrl = o.conf.commonsetting.url.life, q.lifeindex = [], a.mpLifeInfo && a.mpLifeInfo) {
                    var v = a.mpLifeInfo;
                    for (var w in n) {
                        var x = n[w], y = x[0], z = k(b, a.sCityWiId, j.cityname, x[1], c), A = v[y];
                        A && q.lifeindex.push({
                            "class": m.getLifeIndexClass(y),
                            index: y,
                            val: A,
                            link: z,
                            text: m.getLifeIndexText(y, A)
                        })
                    }
                }
                q.current.warning && (s = q.current.warning[0].text, t = q.current.warning[0]["class"])
            } catch (B) {
            }
            return j
        }

        function k(a, b, c, d, f) {
            var g = o.citytemp, h = "2";
            return e(a) ? h = a : g.some(function (a) {
                if (a.CNID == b && c && c.indexOf(a.NAME) > -1)return h = a.ID, !0
            }), d.replace("{{$cityid}}", h).replace("{{$uid}}", l("${guid}moji_uid"))
        }

        var l = (a("zepto"), a("moment"), a("md5")), m = a("./weathercom"), n = [["穿衣指数", "http://index.moji.com/show/show/index?indexid=20&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"], ["洗车指数", "http://index.moji.com/show/show/index?indexid=17&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"], ["钓鱼指数", "http://index.moji.com/show/show/index?indexid=28&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"], ["感冒指数", "http://index.moji.com/show/show/index?indexid=12&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"], ["运动指数", "http://index.moji.com/show/show/index?indexid=26&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"], ["紫外线指数", "http://index.moji.com/show/show/index?indexid=21&cityid={{$cityid}}&channelno=5323&uid={{$uid}}"]], o = {
            citytemp: citytemp,
            conf: {
                commonsetting: {
                    url: {
                        pm25: "http://index.moji.com/show/aqi/index?platform=qqbrowser&cityid={{$id}}",
                        weather15: "http://cdn.moji.com/html5/w15day/index.html?cityId={{$id}}&platform=qqbrowser&channelno=5323",
                        weather1: "http://qq.weather.com.cn/mweather/{{$weathercnid}}.shtml",
                        weather2: "http://cdn.moji.com/html5/moji_weather/weather/index.html?download_logo=1&&download_complex=0&&cityid={{$cityid}}&channelno=5323&platform=qqbrowser",
                        temp24: "http://cdn.moji.com/html5/moji_weather/24_hours/index.html?cityid={{$cityid}}&&platform=qqbrowser&&channelno=5323",
                        warning: "http://qq.weather.com.cn/malarm/alarmcontent.shtml?file={{$file}}",
                        life: "http://life.html5.qq.com/",
                        rainfall: "http://wx.weather.com.cn/jsyb/"
                    }
                }
            }
        };
        b.exports = {getWeatherJson: j}
    }, {"./weathercom": 15, md5: 31, moment: 35, zepto: 57}], 11: [function (a, b, c) {
        function d(a) {
            if (!a)return !1;
            var b = a.split("."), c = window;
            return b.every(function (a) {
                    return !!(c = c[a])
                }) && "function" == typeof c
        }

        function e(a, b, c, e, h, i, j, k) {
            if ("-1" != b && a) {
                var l = "", m = g(b, c, e, h, i, j);
                window.browser.app && browser.app.getAppVersion ? window.browser.app.getAppVersion(function (a) {
                    a && parseFloat(a) >= 6 ? (m = g(b, c, e, h, !1, j), f(l, m)) : f(l, m)
                }) : f(l, m);
                try {
                    if (d("window.browser.startpage.callNaviCard")) {
                        "1" == b && (b = "-1");
                        var n = {cardId: k, funcName: "onCityChange", params: JSON.stringify({CityId: b})};
                        window.browser.startpage.callNaviCard(n)
                    } else d("window.browser.startpage.requestRefreshCard") && window.browser.startpage.requestRefreshCard(function (a) {
                    }, {cardID: k})
                } catch (o) {
                    console.log(o)
                }
            }
        }

        function f(a, b) {
            d("window.browser.app.doTokenFeature") && window.browser.app.doTokenFeature(function (a) {
                console.log(a)
            }, {uid: a, feature: b})
        }

        function g(a, b, c, d, e, f) {
            var g, h = e ? "mtt.ajax.success" : "mtt.ajax.failed", i = f ? "mtt.authorize" : "", j = "";
            return !a && b && c && (j = c + "," + b), g = "mtt.browserid|" + a + "|" + j + "|mtt.srv.nowtime|" + h + "|" + d + "|mtt.clear.expecttime|mtt.notify|" + i
        }

        function h(a) {
            return j(a, window.location.search)
        }

        function i(a) {
            return j(a, window.location.hash)
        }

        function j(a, b) {
            if (!a || "string" != typeof a || !b || "string" != typeof b)return null;
            var c = new RegExp("(^|&|#|/?)" + a + "=([^&]*)(&|$)", "i"), d = b.match(c);
            return null != d ? unescape(d[2]) : null
        }

        a("zepto");
        b.exports = {isfun: d, g_push: e, getQueryString: h, getHashString: i}
    }, {zepto: 57}], 12: [function (a, b, c) {
        b.exports = {
            set: function (a, b, c) {
                var d = 1e3;
                c && (d = c);
                var e = new Date;
                e.setTime(e.getTime() + 24 * d * 60 * 60 * 1e3), escapeValue = escape(b), document.cookie = a + "=" + escapeValue + ";expires=" + e.toGMTString()
            }, get: function (a) {
                var b = a + "=";
                if (document.cookie.length > 0) {
                    var c = document.cookie.indexOf(b);
                    if (c != -1) {
                        c += b.length;
                        var d = document.cookie.indexOf(";", c);
                        return d == -1 && (d = document.cookie.length), unescape(document.cookie.substring(c, d))
                    }
                    return ""
                }
                return ""
            }, clear: function (a) {
                var b = new Date;
                b.setTime(b.getTime() - 864e5), setCookie(a, "", b)
            }
        }
    }, {}], 13: [function (a, b, c) {
        b.exports = {
            set: function (a, b) {
                return !!a && (localStorage.setItem(a, JSON.stringify(b)), !0)
            }, get: function (a) {
                if (a) {
                    var b = localStorage.getItem(a);
                    try {
                        b = JSON.parse(b)
                    } catch (c) {
                    }
                    return b
                }
            }, clear: function (a) {
                return !!a && (localStorage.removeItem(a), !0)
            }, clearAll: function () {
                return localStorage.clear(), !0
            }
        }
    }, {}], 14: [function (a, b, c) {
        function d(a, b) {
            try {
                u.isfun("browser.app.getGeoLocationWithAlert") ? browser.app.getGeoLocationWithAlert(function (c) {
                    "true" == c.ret ? a(c) : e(a, b)
                }, function () {
                    e(a, b)
                }) : browser.app.getGeoLocation(function (c) {
                    "true" == c.ret ? a(c) : e(a, b)
                }, function () {
                    e(a, b)
                })
            } catch (c) {
                e(a, b)
            }
        }

        function e(a, b) {
            try {
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (c) {
                    c.coords ? a && a(c.coords) : b && b()
                }, function (a) {
                    b && b()
                }, {timeout: 5e3}) : b && b()
            } catch (c) {
                b && b()
            }
        }

        function f(a) {
            s.post("/index?action=ajaxStat", {click: a})
        }

        function g(a) {
            if (!a || "1" === a)return 1;
            var b;
            return window.cityList && window.cityList.PROVENCELIST && window.cityList.PROVENCELIST.some(function (c) {
                c && c.CITYS && c.CITYS.some(function (c) {
                    return c.ID === a ? (b = c, !0) : c.COUNTYS && c.COUNTYS.some(function (c) {
                        if (c.ID === a)return b = c, !0
                    })
                })
            }), !b && window.intelCitys && window.intelCitys.some(function (c) {
                if (c.ID === a)return b = c, !0
            }), b
        }

        function h(a) {
            for (var b = t.get("citybid").split("|"), c = 0; c < b.length; c++)if (a == b[c])return !0
        }

        function i(a) {
            var b = a.split("|");
            if (k()) {
                if (b.length > 10)return !0
            } else if (b.length >= 10)return !0
        }

        function j(a, b, c) {
            i(a) ? (s(b).hide(), s(c).show()) : (s(c).hide(), s(b).show())
        }

        function k() {
            for (var a = t.get("citybid").split("|"), b = 0; b < a.length; b++)if ("1" === a[b])return !0
        }

        function l() {
            var a = t.get("citybid").split("|");
            if (a.length > 1) {
                var b = s.map(a, function (a, b) {
                    if ("1" != a)return a
                });
                return b
            }
            return a
        }

        function m(a) {
            var b, c = t.get("citybid").split("|"), d = s.map(c, function (b, c) {
                if (b != a)return b
            });
            return b = d.length > 0 ? "1|" + d.join("|") : "1"
        }

        function n() {
            var a = t.get("citybid").split("|");
            return 1 != a.length || "1" != a[0]
        }

        function o(a) {
            if (void 0 != a) {
                var b = a.split("|"), c = s.map(b, function (a, b) {
                    if ("undefined" != a)return a
                });
                return c.join("|")
            }
        }

        function p(a, b) {
            if (a) {
                var c = 400;
                (!b || b < c) && (b = c), window.setTimeout(function () {
                    window.location.hash = a
                }, b)
            }
        }

        function q(a, b) {
            try {
                window.browser && browser.device && browser.device.checkPermission && browser.device.checkPermission(function (c) {
                    c && c.enable || !browser.device.requestPermission || (b && window.pgvSendClick && pgvSendClick({
                        hottag: ("weather.$." + b).replace(/\$/, /iphone|ipad/gi.test(navigator.userAgent) ? "IOS" : "ANDROID"),
                        virtualDomain: "weather.html5.qq.com"
                    }), browser.device.requestPermission(function (a) {
                    }, {permission: "LOCATION", message: a || "当前定位可能不准确，请开启定位授权获得精准天气服务"}))
                }, {permission: "LOCATION"})
            } catch (c) {
                console.log(c)
            }
        }

        function r() {
            var a = t.get("citybid").split("|");
            return a.indexOf("1")
        }

        var s = a("zepto"), t = (a("when"), a("../lib/storage"), a("../lib/cookie")), u = a("../lib/common");
        b.exports = c = {
            getGps: d,
            ajaxStat: f,
            getCityInfo: g,
            checkCityList: h,
            getUserCityList: i,
            checkUserGPSInfo: k,
            filterUserGPSCity: l,
            compareUsrGPSCity: m,
            checkUserCurrentCity: n,
            handleEditCitylist: o,
            showContainer: j,
            openHash: p,
            checkPermission: q,
            getUserGPSIndex: r
        }, document.addEventListener("touchstart", function () {
        }, !0)
    }, {"../lib/common": 11, "../lib/cookie": 12, "../lib/storage": 13, when: 56, zepto: 57}], 15: [function (a, b, c) {
        "use strict";
        function d(a) {
            switch (a) {
                case"红色":
                    return "red";
                case"橙色":
                    return "orange";
                case"黄色":
                    return "yellow";
                case"蓝色":
                    return "blue";
                default:
                    return ""
            }
        }

        function e(a) {
            switch (a) {
                case"red":
                    return "0";
                case"orange":
                    return "1";
                case"yellow":
                    return "2";
                case"blue":
                    return "3";
                case"全部":
                    return "99";
                default:
                    return ""
            }
        }

        function f(a) {
            switch (a) {
                case"暴雨":
                    return "0";
                case"高温":
                    return "1";
                case"灰霾":
                    return "2";
                case"寒冷":
                    return "3";
                case"大雾":
                    return "4";
                case"雷电":
                    return "5";
                case"大风":
                    return "6";
                case"台风":
                    return "7";
                case"暴雪":
                    return "8";
                case"寒潮":
                    return "9";
                case"沙尘暴":
                    return "10";
                case"干旱":
                    return "11";
                case"冰雹":
                    return "12";
                case"霜冻":
                    return "13";
                case"霾":
                    return "14";
                case"道路结冰":
                    return "15";
                case"雷雨大风":
                    return "16";
                case"森林火险":
                    return "17";
                case"降温":
                    return "18";
                case"道路冰雪":
                    return "19";
                case"干热风":
                    return "20";
                case"低温":
                    return "21";
                case"冰冻":
                    return "22";
                case"全部":
                    return "99";
                default:
                    return ""
            }
        }

        function g(a) {
            if (!a)return "";
            var b = a.iAQI || 0;
            return b < 0 ? "" : b <= 50 ? "great" : b <= 100 ? "good" : b <= 150 ? "light" : b <= 200 ? "middle" : b <= 250 ? "high" : b <= 300 ? "heavy" : "serious"
        }

        function h(a) {
            if (!a)return "";
            var b = a.iAQI || 0;
            return b <= 0 ? "" : b <= 50 ? "空气优" : b <= 100 ? "空气良" : b <= 150 ? "轻度污染" : b <= 200 ? "中度污染" : b <= 300 ? "重度污染" : "严重污染"
        }

        function i(a) {
            return 0 === a ? "今天" : 1 === a ? "明天" : 2 === a ? "后天" : j(r().add(a, "days"))
        }

        function j(a) {
            var b = a.format("dddd");
            switch (b) {
                case"Monday":
                    return "周一";
                case"Tuesday":
                    return "周二";
                case"Wednesday":
                    return "周三";
                case"Thursday":
                    return "周四";
                case"Friday":
                    return "周五";
                case"Saturday":
                    return "周六";
                case"Sunday":
                    return "周日";
                default:
                    return ""
            }
        }

        function k(a) {
            switch (a) {
                case"晴":
                    return "晴天";
                case"阴":
                    return "阴天";
                case"雷阵雨":
                    return "雷雨";
                default:
                    return a
            }
        }

        function l(a) {
            switch (a) {
                case 0:
                case 1:
                    return "sunny";
                case 2:
                case 13:
                case 14:
                case 16:
                    return "cloudy";
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    return "rainy";
                case 9:
                case 10:
                case 11:
                case 12:
                case 15:
                    return "snowy"
            }
            return "error"
        }

        function m(a) {
            return s[a] || "icon-weather-error"
        }

        function n(a) {
            switch (a) {
                case"穿衣指数":
                    return "icon-tip-dress";
                case"洗车指数":
                    return "icon-tip-car";
                case"钓鱼指数":
                    return "icon-tip-outdoor";
                case"感冒指数":
                    return "icon-tip-illness";
                case"运动指数":
                    return "icon-tip-sport";
                case"紫外线指数":
                    return "icon-tip-UV";
                default:
                    return ""
            }
        }

        function o(a) {
            switch (a) {
                case"0":
                    return "炎热";
                case"1":
                    return "闷热";
                case"2":
                    return "热";
                case"3":
                    return "暖";
                case"4":
                    return "凉爽";
                case"5":
                    return "舒适";
                case"6":
                    return "温凉";
                case"7":
                    return "凉";
                case"8":
                    return "冷";
                case"9":
                    return "寒冷";
                case"10":
                    return "非常适宜";
                case"11":
                    return "适宜";
                case"12":
                    return "较适宜";
                case"13":
                    return "较不适宜";
                case"14":
                    return "不宜";
                case"15":
                    return "不适宜";
                case"16":
                    return "少发";
                case"17":
                    return "可能";
                case"18":
                    return "较易发";
                case"19":
                    return "易发";
                case"20":
                    return "极易发";
                case"21":
                    return "最弱";
                case"22":
                    return "弱";
                case"23":
                    return "中等";
                case"24":
                    return "强";
                case"25":
                    return "很强";
                case"99":
                    return "全部";
                default:
                    return ""
            }
        }

        function p(a) {
            switch (a) {
                case"0":
                    return "穿衣指数";
                case"1":
                    return "洗车指数";
                case"2":
                    return "钓鱼指数";
                case"3":
                    return "感冒指数";
                case"4":
                    return "运动指数";
                case"5":
                    return "紫外线指数";
                default:
                    return ""
            }
        }

        function q(a, b) {
            return t[a + b]
        }

        var r = a("moment"), s = {
            0: "icon-weather-sunny",
            1: "icon-weather-cloudy",
            2: "icon-weather-hr",
            3: "icon-weather-sr",
            4: "icon-weather-mr",
            5: "icon-weather-br",
            6: "icon-weather-ras",
            7: "icon-weather-overcast",
            8: "icon-weather-hs",
            9: "icon-weather-ss",
            10: "icon-weather-ms",
            11: "icon-weather-bs",
            12: "icon-weather-thundershower",
            13: "icon-weather-fog",
            14: "icon-weather-sand",
            15: "icon-weather-rs",
            16: "icon-weather-typhoon",
            17: "icon-weather-haze",
            18: "icon-weather-hail",
            19: "icon-weather-thundershower"
        }, t = {
            "穿衣指数炎热": "炎热",
            "穿衣指数闷热": "闷热",
            "穿衣指数热": "热",
            "穿衣指数暖": "暖",
            "穿衣指数凉爽": "凉爽",
            "穿衣指数舒适": "舒适",
            "穿衣指数温凉": "温凉",
            "穿衣指数凉": "凉",
            "穿衣指数冷": "冷",
            "穿衣指数寒冷": "寒冷",
            "洗车指数非常适宜": "宜洗车",
            "洗车指数适宜": "宜洗车",
            "洗车指数较适宜": "宜洗车",
            "洗车指数较不适宜": "不宜洗车",
            "洗车指数不宜": "不宜洗车",
            "钓鱼指数适宜": "适宜钓鱼",
            "钓鱼指数较适宜": "适宜钓鱼",
            "钓鱼指数不适宜": "不宜钓鱼",
            "感冒指数少发": "健康",
            "感冒指数可能": "可能感冒",
            "感冒指数较易发": "易发感冒",
            "感冒指数易发": "易发感冒",
            "感冒指数极易发": "易发感冒",
            "运动指数适宜": "适宜户外运动",
            "运动指数较适宜": "适宜户外运动",
            "运动指数较不适宜": "不宜户外运动",
            "运动指数不适宜": "不宜户外运动",
            "紫外线指数最弱": "紫外线弱",
            "紫外线指数弱": "紫外线弱",
            "紫外线指数中等": "注意防晒",
            "紫外线指数强": "注意防晒",
            "紫外线指数很强": "注意防晒"
        };
        b.exports = {
            getWarningClass: d,
            getAQIClass: g,
            getAqiTxt: h,
            getWeek: i,
            getWeekbyTime: j,
            proWeatherTxt: k,
            weatherBGCss: l,
            weatherCss: m,
            getLifeIndexClass: n,
            getLifeIndexLevel: o,
            getLifeIndexType: p,
            getWarningLevel: e,
            getWarningType: f,
            getLifeIndexText: q
        }
    }, {moment: 35}], 16: [function (a, b, c) {
        function d(a) {
            h && Object.getOwnPropertyNames(h).forEach(function (b) {
                if (b == a)return !0;
                var c = h[b];
                c && c.destroy && c.destroy()
            })
        }

        var e = a("zepto"), f = a("backbone"), g = a("../lib/common"), h = window.controllers = {};
        a("./index"), a("./multiSetting"), a("./searchSetting"), a("./editSetting");
        var i = e("[data-page]");
        b.exports = c = {
            start: function () {
                new (f.Router.extend({
                    routes: {"": "pageload", "p=:view": "pageload", "*error": "loaderror"},
                    pageload: function (a) {
                        var b = null == a ? "index" : g.getHashString("p"), c = h[b];
                        d(b), c && c.initialize && c.initialize(), c && c.bindEvent && c.bindEvent()
                    },
                    loaderror: function () {
                        i.hide()
                    }
                })), f.history.start()
            }
        }
    }, {
        "../lib/common": 11,
        "./editSetting": 17,
        "./index": 18,
        "./multiSetting": 19,
        "./searchSetting": 20,
        backbone: 22,
        zepto: 57
    }], 17: [function (a, b, c) {
        function d() {
            var a = q.filterUserGPSCity(), b = a.map(function (a) {
                return q.getCityInfo(a)
            });
            p("#editSetting").html(w(b)), e(), u([document.querySelector("#editCityList")]).on("out", function () {
                for (var a = p("#editCityList").children("li"), b = "", c = 0; c < a.length; c++)b += p(a[c]).data("citygbid") + "|";
                q.checkUserGPSInfo() && (b = "1|" + b), n = b.substring(0, b.length - 1)
            }), p("#loadingContainer").hide(), p("#editCityList").on("touchstart touchend", "li", function (a) {
                "touchstart" == a.type ? p(this).addClass("ondrag") : p(this).removeClass("ondrag")
            })
        }

        function e() {
            var a = navigator.userAgent;
            /android/gi.test(a) && window.browser && browser.weather && browser.weather.getweatherinfo ? f("getweatherinfo") : /iphone|ipod|iPad/gi.test(a) && window.browser && browser.weather && browser.weather.getiOSNetworkWeatherinfo ? f("getiOSNetworkWeatherinfo") : i()
        }

        function f(a) {
            var b = q.compareUsrGPSCity(1);
            t.set("citybid", b), l(b, function () {
                browser.weather[a](function (a) {
                    console.log(a), (0 == a.iCode || a.iCode) && g(a)
                }, {})
            })
        }

        function g(a) {
            if (console.log(a), a.stCurWeatherInfoExV2) {
                var b = h(a.stCurWeatherInfoExV2);
                p("#userEditCurrentCitys").html("<span>" + (b.cityname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", b.citybid), j(b.citybid)
            } else p("#userEditCurrentCitys").addClass("fail"), p("#userEditCurrentCitys").html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
        }

        function h(a) {
            try {
                if (console.log(a), "0" != a.iRetCode)return {};
                var b = v.getWeatherJson(a, a.sCityGBCode, "");
                return b
            } catch (c) {
                return alert(c), {}
            }
        }

        function i() {
            var a, b = p("#userEditCurrentCitys"), c = function (a) {
                p.ajax({
                    type: "POST",
                    url: "/index?action=getCity",
                    dataType: "json",
                    timeout: 1e4,
                    data: {flLngitude: a.longitude, latitude: a.latitude},
                    success: function (c) {
                        if (c && 0 === c.ret) {
                            if (m = c.data, o = m.gbid, m.longitude = a.longitude, m.latitude = a.latitude, !q.checkUserGPSInfo()) {
                                var d = q.compareUsrGPSCity(m.gbid);
                                t.set("citybid", d), l(d)
                            }
                            b.html("<span>" + (m.cname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", m.gbid).data("longitude", m.longitude).data("latitude", m.latitude), j(m.gbid)
                        }
                    },
                    error: function (a) {
                        b.addClass("fail"), b.html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
                    }
                })
            };
            m ? (q.checkUserGPSInfo() || (a = q.compareUsrGPSCity(m.gbid), t.set("citybid", a), l(a)), b.html("<span>" + (m.cname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", m.gbid).data("longitude", m.longitude).data("latitude", m.latitude), j(m.gbid)) : q.getGps(c, function () {
                p("#autoGps").addClass("on"), b.addClass("fail"), b.html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
            })
        }

        function j(a) {
            var b = t.get("citybid");
            b.indexOf(a) > -1 && p("#editCityList li").forEach(function (b, c) {
                p(b).attr("data-citygbid") == a && p(b).remove()
            })
        }

        function k() {
            var a = "", b = p("#editCityList").children("li");
            if (q.checkUserGPSInfo() && (a = "1|" + a), b.length > 1) {
                for (var c = 0; c < b.length; c++)a += p(b[c]).data("citygbid") + "|";
                n = a.substring(0, a.length - 1)
            } else a += p(b[0]).data("citygbid"), n = a.toString();
            console.log("newCityList=========", n)
        }

        function l(a, b) {
            p.ajax({
                type: "POST",
                url: "/index?action=updateCitys",
                timeout: 1e4,
                dataType: "json",
                data: {citybid: a},
                success: function (c) {
                    if (c && 0 == c.ret) {
                        t.set("citybid", a), t.set("updatecity", "1");
                        try {
                            browser && browser.weather && browser.weather.syncweatherinfo ? browser.weather.syncweatherinfo({}) : r.g_push(!0, a, null, null, t.get("ip"), !0, !1, t.get("cardId")), b && b()
                        } catch (d) {
                            console.log(d)
                        }
                    }
                }
            })
        }

        var m, n, o, p = a("zepto"), q = a("../lib/utils"), r = a("../lib/common"), s = a("underscore"), t = a("../lib/cookie"), u = a("dragula"), v = a("../lib/cityutils"), w = s.template(a("../../handlebars/editCity.html")), x = p('[data-page="editSetting"]');
        p.extend(controllers, {
            editSetting: {
                container: x, initialize: function () {
                    this.container.removeClass("hidden"), BJ_REPORT.init({
                        id: 36,
                        combo: 1,
                        delay: 100,
                        url: "//badjs2.qq.com/badjs",
                        ignore: [],
                        level: 1
                    }), d()
                }, bindEvent: function () {
                    x.on("tap", "#back", function () {
                        q.openHash("p=multiSetting", 100)
                    }), x.on("tap", "#saveCity", function () {
                        var a = q.handleEditCitylist(n) ? q.handleEditCitylist(n) : t.get("citybid");
                        t.set("citybid", a), l(a), n = void 0, q.openHash("p=multiSetting", 100)
                    }), x.on("tap", "li > i", function () {
                        var a = p(this).parent();
                        p("#editCityList").children("li");
                        a.remove(), k()
                    }), x.on("tap", ".mod-alert .btn-group", function () {
                        p(".mod-alert").addClass("hidden")
                    })
                }, destroy: function () {
                    x.off("tap", "#back").off("tap", "#saveCity").off("tap", "li > i").off("tap", ".mod-alert .btn-group"), this.container.addClass("hidden")
                }
            }
        })
    }, {
        "../../handlebars/editCity.html": 2,
        "../lib/cityutils": 10,
        "../lib/common": 11,
        "../lib/cookie": 12,
        "../lib/utils": 14,
        dragula: 29,
        underscore: 38,
        zepto: 57
    }], 18: [function (a, b, c) {
        function d() {
            if (window.jieqi && (q("#weather-bg").css("background-image", "url(" + window.jieqi + ")").css("background-color", "#2991f6"), q("#titleBarbgClass").addClass("mod-header"), q("#currentCitybgClass").addClass("mod-weather2")), "getWeatherById" === t.getQueryString("action") && "" !== t.getQueryString("cityid"))return void j();
            if ("1" != s.get("toastflag")) {
                var a = s.get("citybid").split("|");
                a.length > 1 && window.browser && window.browser.app && window.browser.app.toast && (window.browser.app.toast("滑屏可以切换城市哦", 0), s.set("toastflag", "1"))
            }
            var b = navigator.userAgent;
            /android/gi.test(b) && window.browser && browser.weather && browser.weather.getweatherinfo ? (u.checkPermission("当前定位可能不准确，请开启定位授权获得精准天气服务", "BZTQ002"), browser.app && browser.app.getBrowserParam && browser.app.getBrowserParam(function (a) {
                a && (B = a.guid || "")
            }, function (a) {
            }), e()) : /iphone|ipod|iPad/gi.test(b) && window.browser && browser.weather && browser.weather.getiOSNetworkWeatherinfo ? (window.browser && browser.device && browser.device.checkPermission ? u.checkPermission("当前定位可能不准确，请开启定位授权获得精准天气服务", "BZTQ002") : u.getGps(function () {
            }), browser.app && browser.app.getBrowserParam && browser.app.getBrowserParam(function (a) {
                a && (B = a.guid || "")
            }, function (a) {
            }), f()) : i(), window.MIG_REPORT && MIG_REPORT.monitor.checkEmptyPage()
        }

        function e() {
            var a = browser.weather.getweatherinfo(function (a) {
                0 == a.iCode && g(a)
            }, {}), b = JSON.parse(a || "");
            0 == b.iCode ? g(b) : i()
        }

        function f() {
            browser.weather.getiOSNativeWeatherinfo(function (a) {
                (0 == a.iCode || a.iCode) && g(a), browser.weather.getiOSNetworkWeatherinfo(function (a) {
                    (0 == a.iCode || a.iCode) && g(a)
                }, {})
            }, {})
        }

        function g(a) {
            try {
                var b = [];
                if (a.stCurWeatherInfoExV2) {
                    var c = h(a.stCurWeatherInfoExV2);
                    b.push(c)
                } else b.push({});
                if ("string" == typeof a.vWeatherInfoExV2)try {
                    a.vWeatherInfoExV2 = JSON.parse(a.vWeatherInfoExV2)
                } catch (d) {
                }
                if (a.vWeatherInfoExV2 && a.vWeatherInfoExV2.length > 0)for (var e in a.vWeatherInfoExV2) {
                    var f = a.vWeatherInfoExV2[e];
                    b.push(h(f))
                }
                var g = {data: b, swipe_index: A};
                console.log(g), C.html(x(g)), l(g, A), m(g)
            } catch (d) {
            }
        }

        function h(a) {
            try {
                if ("0" != a.iRetCode)return {};
                var b = v.getWeatherJson(a, a.sCityGBCode, B);
                return b
            } catch (c) {
                return {}
            }
        }

        function i() {
            for (var a = s.get("citybid").split("|"), b = localStorage.getItem("updatecity"), c = 0; c < a.length; c++)"1" == a[c] && (z = c, u.getGps(n));
            if ("1" === b) {
                s.set("updatecity", "0");
                var d = a.map(function (a) {
                    return "1" === a ? {
                        citybid: "",
                        latitude: s.get("autoLatitude") || 0,
                        longitude: s.get("autoLongitude") || 0
                    } : {citybid: a, latitude: 0, longitude: 0}
                });
                o(d)
            } else j()
        }

        function j() {
            for (var a = s.get("citybid").split("|"), b = q(".graph").children("div").children("canvas"), c = 0; c < b.length; c++) {
                var d = q(b[c]);
                if (d.data("temp")) {
                    var e = d.data("temp").split("|").map(function (a) {
                        return a.split(":").map(function (a) {
                            return +a
                        })
                    });
                    "1" != d.data("finished") && p(d.get(0), e), d.data("finished", 1)
                }
            }
            0 === A && "1" === a[A] ? q("#gpsIcon").removeClass().addClass("G-ico G-ico-location") : q("#gpsIcon").removeClass().addClass("hidden"), m()
        }

        function k() {
            "1" == s.get("dressflag") && q(".icon-tip-dress .badge").remove()
        }

        function l(a, b) {
            k(), b = b > 0 ? b : 0;
            for (var c = a.data[b].weather.future.length, d = "", e = q(".graph").children("div").children("canvas"), f = 0; f < c; f++)d += a.data[b].weather.future[f].lowT + ":" + a.data[b].weather.future[f].hightT + "|";
            var g = d.substring(0, d.length - 1).split("|").map(function (a) {
                return a.split(":").map(function (a) {
                    return +a
                })
            }), h = q(e[b]);
            1 != h.data("finished") && p(h.get(0), g), h.data("finished", 1)
        }

        function m(a) {
            window.jieqi && (q("#weather-bg").css("background-image", "url(" + window.jieqi + ")").css("background-color", "#2991f6"), q("#titleBarbgClass").attr("class", "mod-header"), q("#currentCitybgClass").attr("class", "mod-weather2"));
            var b = s.get("citybid").split("|");
            q("#banner_slider").find(".slide-item").length > 1 && (A > q("#banner_slider").find(".slide-item").length - 1 && (A = 0), w(q("#banner_slider").get(0), {
                startSlide: A,
                speed: 200,
                continuous: !1,
                disableScroll: !1,
                stopPropagation: !1,
                callback: function (c, d) {
                    q(".city-indicator").find(".city-indicator li").removeClass("active").get(c).classList.add("active"), A = c, a && l(a, c), 0 === A && "1" === b[A] ? q("#gpsIcon").removeClass().addClass("G-ico G-ico-location") : q("#gpsIcon").removeClass().addClass("hidden"), q("#titleBarbgClass").removeClass(), q("#currentCitybgClass").removeClass(), window.jieqi ? (q("#weather-bg").css("background-image", "url(" + window.jieqi + ")").css("background-color", "#2991f6"), q("#titleBarbgClass").attr("class", "mod-header"), q("#currentCitybgClass").attr("class", "mod-weather2")) : (q("#titleBarbgClass").addClass("mod-header " + q(q("#banner_slider").find(".slide-item").get(c)).data("bgclass")), q("#currentCitybgClass").addClass("mod-weather2 " + q(q("#banner_slider").find(".slide-item").get(c)).data("bgclass")))
                }
            }))
        }

        function n(a) {
            a && q.post("/index?action=getCity", {
                longitude: a.longitude || 0,
                latitude: a.latitude || 0
            }, function (b) {
                s.set("autoLongitude", a.longitude), s.set("autoLatitude", a.latitude), b && 0 === b.ret && b.data && b.data.gbid != q(q("#banner_slider").find(".slide-item").get(z)).data("cityid") ? o({
                    citybid: " ",
                    longitude: a.longitude,
                    latitude: a.latitude
                }) : t.g_push(!0, b.data.gbid, null, null, s.get("ip"), !0, !1, s.get("cardId"))
            }, "json")
        }

        function o(a) {
            q.post("/index?action=getIndexData", {citylist: a}, function (a) {
                if (a) {
                    if (a.swipe_index = A, 0 === a.ret)if (C.html(x(a)), 0 == A) {
                        l(a, 0), m(a);
                        var b = s.get("citybid").split("|");
                        0 === A && "1" === b[A] ? q("#gpsIcon").removeClass().addClass("G-ico G-ico-location") : q("#gpsIcon").removeClass().addClass("hidden")
                    } else l(a, 0), m(a); else 1 === a.ret && b && C.html(y(a));
                    t.g_push(!0, a.data.citybid, null, null, s.get("ip"), !0, !1, s.get("cardId"))
                }
            }, "json")
        }

        function p(a, b) {
            var c = {canvasWidth: 660, canvasHeight: 228, blankX: 0, blankT: 30, blankY: 35}, d = {
                lineWidth: 1,
                lineColor: "#fff",
                base: 5,
                textSize: 24,
                textOffSet: 34,
                textColor: "#fff",
                font: "arial"
            }, e = function (a) {
                for (var b, c = [], d = 0; d < a.length; d++)b = (a[d][0] + a[d][1]) / 2, c.push(b);
                return c
            }, f = function (a) {
                for (var b, c, e, f = -(1 / 0), g = 1 / 0, h = 0; h < a.length; h++)c = a[h], c > f && (f = c), c < g && (g = c);
                return b = f - g, e = Math.round(b / d.base) + 1, e * d.base
            }, g = function (a, b, c, d) {
                var e, f, g, h, i;
                return e = 2 * a.x - 2 * b.x, f = Math.sqrt(5 * a.x * a.x - 10 * a.x * b.x + a.x * c.x - a.x * d + 2 * b.x * d + 4 * b.x * b.x), g = 2 * a.x - 4 * b.x + 2 * c.x, h = 0 !== g ? (e + f) / g : (d - a.x) / (2 * b.x - 2 * a.x), h < 0 && (h = -1 * h), i = a.y * (1 - h) * (1 - h) + 2 * b.y * (1 - h) * h + c.y * h * h
            }, h = function (a, b, c) {
                b.canvasWidth *= a, b.canvasHeight *= a, b.blankX *= a, b.blankT *= a, b.blankY *= a, c.lineWidth *= a, c.base *= a, c.textSize *= a, c.textOffSet *= a
            }, i = function (a) {
                for (var b = 0, c = 0; c < a.length; c++)b += a[c];
                return b
            }, j = function (a, b) {
                return (a + b) / 2
            }, k = function (a, b) {
                h(2, c, d);
                var k, l, m, n, o = e(b), p = f(o), q = o.length, r = i(o), s = Math.round(r / q), t = s - p / 2, u = (c.canvasWidth - 2 * c.blankX) / (q - 1), v = (c.canvasWidth - 2 * c.blankT) / (q - 1), w = {}, x = {}, y = {}, z = c.blankX, A = c.blankT, B = function (a) {
                    return c.canvasHeight - c.blankY - (o[a] - t) * (c.canvasHeight - 2 * c.blankY) / p
                };
                if (a.getContext) {
                    var C = a.getContext("2d");
                    C.imageSmoothingEnabled = !0, C.strokeStyle = d.lineColor, C.lineWidth = d.lineWidth, C.lineCap = "round", C.font = d.textSize + "px " + d.font, C.fillStyle = d.textColor, C.textAlign = "center", C.textBaseline = "middle", C.fillText(b[0][1] + "°", A, B(0) - d.textOffSet), C.fillText(b[0][0] + "°", A, B(0) + d.textOffSet), C.beginPath(), C.moveTo(z, B(0));
                    for (var D = 0; D < o.length - 1; D++)m = B(D + 1), n = B(D + 2), l = j(m, n), 0 === D ? (w.x = z, w.y = B(0), x.x = z + u, x.y = m, y.x = z + 1.5 * u, y.y = l, k = g(w, x, y, z + u)) : D < o.length - 2 ? (w.x = z + .5 * u, w.y = j(B(D), B(D + 1)), x.x = z + u, x.y = m, y.x = z + 1.5 * u, y.y = l, k = g(w, x, y, x.x)) : D >= o.length - 2 && (k = m), D < o.length - 2 ? C.quadraticCurveTo(z + u, m, z + 1.5 * u, l) : D >= o.length - 2 && C.quadraticCurveTo(z, B(D), z + u, m), C.stroke(), A += v, z += u, C.fillText(b[D + 1][1] + "°", A, k - d.textOffSet), C.fillText(b[D + 1][0] + "°", A, k + d.textOffSet)
                }
            };
            k(a, b)
        }

        var q = a("zepto"), r = a("underscore"), s = a("../lib/cookie"), t = a("../lib/common"), u = a("../lib/utils"), v = a("../lib/cityutils"), w = a("../lib/Swipe"), x = r.template(a("../../handlebars/weather.html")), y = r.template(a("../../handlebars/weatherfail.html")), z = 0, A = parseInt(t.getQueryString("showindex") || 0), B = "", C = q('[data-page="index"]');
        q.extend(controllers, {
            index: {
                container: C, initialize: function () {
                    this.container.removeClass("hidden"), A = parseInt(t.getQueryString("showindex") || 0), console.log(A), BJ_REPORT.init({
                        id: 36,
                        combo: 1,
                        delay: 100,
                        url: "//badjs2.qq.com/badjs",
                        ignore: [],
                        level: 1
                    }), window.MIG_REPORT && MIG_REPORT.setConfig({
                        appId: "weather.home",
                        autoReportLoadTime: !1
                    }), d(), m(), console.log("back" != t.getQueryString("from")), window.pgvSendClick && "back" != t.getQueryString("from") && pgvSendClick({
                        hottag: "weather.$.BZTQ001".replace(/\$/, /iphone|ipad/gi.test(navigator.userAgent) ? "IOS" : "ANDROID"),
                        virtualDomain: "weather.html5.qq.com"
                    })
                }, bindEvent: function () {
                    C.on("tap", "[data-click]", function () {
                        if ("getWeatherById" !== t.getQueryString("action") || "" === t.getQueryString("cityid") || "citybid" !== this.id) {
                            var a = q(this).data("click"), b = q(this).data("url"), c = q(this).data("hash"), d = q(q("#banner_slider").find(".slide-item").get(A)).data("cityname"), e = q(q("#banner_slider").find(".slide-item").get(A)).data("cityid");
                            q.post("/index?action=ajaxStat", {
                                click: a,
                                citybid: e,
                                cityname: d
                            }), "icon-tip-dress" == q(this).attr("class") && (s.set("dressflag", "1"), k());
                            var f = q(this).attr("data-stat");
                            f && window.pgvSendClick && pgvSendClick({
                                hottag: ("weather.$." + f).replace(/\$/, /iphone|ipad/gi.test(navigator.userAgent) ? "IOS" : "ANDROID"),
                                virtualDomain: "weather.html5.qq.com"
                            }), setTimeout(function () {
                                c ? location.hash = c : window.location = b
                            }, 300)
                        }
                    })
                }, destroy: function () {
                    C.off("tap", "[data-url]"), this.container.addClass("hidden")
                }
            }
        })
    }, {
        "../../handlebars/weather.html": 6,
        "../../handlebars/weatherfail.html": 7,
        "../lib/Swipe": 9,
        "../lib/cityutils": 10,
        "../lib/common": 11,
        "../lib/cookie": 12,
        "../lib/utils": 14,
        underscore: 38,
        zepto: 57
    }], 19: [function (a, b, c) {
        function d() {
            var a = o.filterUserGPSCity(), b = n("#settingCity"), c = r.get("citybid");
            console.log("citybid:" + c);
            var d = a.map(function (a) {
                return o.getCityInfo(a)
            });
            o.checkUserCurrentCity() ? b.html(t(d)) : b.html(t()), o.showContainer(c, "#addCity", "#addCity-disabled"), e(), n("#loadingContainer").hide()
        }

        function e() {
            var a = navigator.userAgent;
            /android/gi.test(a) && window.browser && browser.weather && browser.weather.getweatherinfo ? f("getweatherinfo") : /iphone|ipod|iPad/gi.test(a) && window.browser && browser.weather && browser.weather.getiOSNetworkWeatherinfo ? f("getiOSNetworkWeatherinfo") : i()
        }

        function f(a) {
            var b = o.compareUsrGPSCity(1);
            r.set("citybid", b), k(b, function () {
                browser.weather[a](function (a) {
                    (0 == a.iCode || a.iCode) && g(a)
                }, {})
            })
        }

        function g(a) {
            if (a.stCurWeatherInfoExV2) {
                var b = h(a.stCurWeatherInfoExV2);
                n("#userCurrentCitys").html("<span>" + (b.cityname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", b.citybid), j(b.citybid)
            } else n("#userCurrentCitys").addClass("fail"), n("#userCurrentCitys").html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
        }

        function h(a) {
            try {
                if ("0" != a.iRetCode)return {};
                var b = s.getWeatherJson(a, a.sCityGBCode, "");
                return b
            } catch (c) {
                return {}
            }
        }

        function i() {
            var a, b = n("#userCurrentCitys"), c = function (a) {
                n.ajax({
                    type: "POST",
                    url: "/index?action=getCity",
                    dataType: "json",
                    timeout: 1e4,
                    data: {flLngitude: a.longitude, latitude: a.latitude},
                    success: function (c) {
                        if (c && 0 === c.ret) {
                            if (l = c.data, m = l.gbid, l.longitude = a.longitude, l.latitude = a.latitude, !o.checkUserGPSInfo()) {
                                var d = o.compareUsrGPSCity(l.gbid);
                                r.set("citybid", d), k(d)
                            }
                            b.html("<span>" + (l.cname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", l.gbid).data("longitude", l.longitude).data("latitude", l.latitude), j(l.gbid)
                        }
                    },
                    error: function (a) {
                        b.addClass("fail"), b.html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
                    }
                })
            };
            try {
                console.log(l), l ? (o.checkUserGPSInfo() || (a = o.compareUsrGPSCity(l.gbid), r.set("citybid", a), k(a)), b.html("<span>" + (l.cname || "未获取当前城市") + '<i class="G-ico G-ico-location"></i></span>').data("citygbid", l.gbid).data("longitude", l.longitude).data("latitude", l.latitude), j(l.gbid)) : o.getGps(c, function () {
                    b.addClass("fail"), b.html('<span>未获取当前城市<i class="G-ico G-ico-location"></i></span>')
                })
            } catch (d) {
                console.log(d)
            }
        }

        function j(a) {
            var b = r.get("citybid");
            b.indexOf(a) > -1 && n(".location-list li").forEach(function (b, c) {
                c > 0 && n(b).attr("data-citygbid") == a && n(b).remove()
            })
        }

        function k(a, b) {
            n.ajax({
                type: "POST",
                url: "/index?action=updateCitys",
                timeout: 1e4,
                dataType: "json",
                data: {citybid: a},
                success: function (c) {
                    if (c && 0 == c.ret) {
                        r.set("citybid", a), localStorage.setItem("updatecity", "1");
                        try {
                            browser && browser.weather && browser.weather.syncweatherinfo ? browser.weather.syncweatherinfo({}) : p.g_push(!0, a, null, null, r.get("ip"), !0, !1, r.get("cardId")), b && b()
                        } catch (d) {
                            console.log(d)
                        }
                    }
                }
            })
        }

        var l, m, n = a("zepto"), o = a("../lib/utils"), p = a("../lib/common"), q = a("underscore"), r = a("../lib/cookie"), s = a("../lib/cityutils"), t = q.template(a("../../handlebars/multiCity.html")), u = n('[data-page="multiSetting"]');
        n.extend(controllers, {
            multiSetting: {
                container: u, initialize: function () {
                    this.container.removeClass("hidden"), BJ_REPORT.init({
                        id: 36,
                        combo: 1,
                        delay: 100,
                        url: "//badjs2.qq.com/badjs",
                        ignore: [],
                        level: 1
                    }), d()
                }, bindEvent: function () {
                    u.on("tap", "#back", function () {
                        localStorage.setItem("updatecity", "1");
                        var a = location.search.indexOf("&from=back") > -1 ? location.search : location.search + ((location.search.indexOf("?") > -1 ? "" : "?") + "&from=back");
                        location.href = location.origin + "/" + a + "#p=index"
                    }), u.on("tap", "#editCity", function () {
                        o.openHash("p=editSetting", 100)
                    }), u.on("tap", "#addCity", function () {
                        o.openHash("p=searchSetting", 100)
                    }), u.on("tap", ".mod-alert .btn-group", function () {
                        n(".mod-alert").addClass("hidden")
                    }), u.on("tap", ".local-status", function () {
                        n(this).attr("class").indexOf("fail") > -1 ? o.checkPermission("精准的天气服务需要开启定位授权，立即开启？") : o.checkPermission("当前定位可能不准确，请开启定位授权获得精准天气服务。")
                    }), u.on("tap", ".redirect", function () {
                        var a = n("#locationList li").index(n(this));
                        a < n("#locationList li").length - 1 && (location.href = "/index?showindex=" + a)
                    })
                }, destroy: function () {
                    u.off("tap", "#back").off("tap", "#editCity").off("tap", "#addCity").off("tap", ".btn-toggle").off("tap", ".mod-alert .btn-group"), this.container.addClass("hidden")
                }
            }
        })
    }, {
        "../../handlebars/multiCity.html": 4,
        "../lib/cityutils": 10,
        "../lib/common": 11,
        "../lib/cookie": 12,
        "../lib/utils": 14,
        underscore: 38,
        zepto: 57
    }], 20: [function (a, b, c) {
        function d() {
            o("#searchSetting").html(u());
            var a = s.get("citybid");
            window.cityList.citybid = a, console.log(a), o("#hotCitysList").empty().html(w(window.cityList)), e()
        }

        function e() {
            var a = navigator.userAgent;
            /android/gi.test(a) && window.browser && browser.weather && browser.weather.getweatherinfo ? f("getweatherinfo") : /iphone|ipod|iPad/gi.test(a) && window.browser && browser.weather && browser.weather.getiOSNetworkWeatherinfo ? f("getiOSNetworkWeatherinfo") : i()
        }

        function f(a) {
            var b = p.compareUsrGPSCity(1);
            s.set("citybid", b), l(b, function () {
                browser.weather[a](function (a) {
                    console.log(a), (0 == a.iCode || a.iCode) && g(a)
                }, {})
            })
        }

        function g(a) {
            if (a.stCurWeatherInfoExV2) {
                var b = h(a.stCurWeatherInfoExV2);
                j(b.citybid)
            }
        }

        function h(a) {
            try {
                if ("0" != a.iRetCode)return {};
                var b = t.getWeatherJson(a, a.sCityGBCode, "");
                return b
            } catch (c) {
                return alert(c), {}
            }
        }

        function i() {
            var a = o("#userCurrentCitys"), b = function (b) {
                o.ajax({
                    type: "POST",
                    url: "/index?action=getCity",
                    dataType: "json",
                    timeout: 1e4,
                    data: {flLngitude: b.longitude, latitude: b.latitude},
                    success: function (a) {
                        a && 0 === a.ret && (m = a.data, n = m.gbid, m.longitude = b.longitude, m.latitude = b.latitude, j(m.gbid))
                    },
                    error: function (b) {
                        a.hide()
                    }
                })
            };
            m ? (n = m.gbid, j(m.gbid)) : p.getGps(b)
        }

        function j(a) {
            o("#hotCitysList li").forEach(function (b, c) {
                o(b).attr("data-citygbid") == a && o(b).addClass("chosed")
            })
        }

        function k() {
            var a = o("#userInputCity").val();
            if ("" === a)o("#hotCitysList").show(), o(".title-out-card").show(), o("#searchDataList").empty(); else {
                o("#hotCitysList").hide(), o(".title-out-card").hide();
                var b, c, d = [];
                window.cityList && window.cityList.PROVENCELIST && window.cityList.PROVENCELIST.forEach(function (e) {
                    e && e.CITYS && e.CITYS.forEach(function (f) {
                        f && (f.CH && f.CH.indexOf(a) > -1 || f.EN && f.EN.indexOf(a) > -1) && (b = f, b.provinceName = e.CH, d.push(b)), f && f.COUNTYS && f.COUNTYS.forEach(function (b) {
                            b && (b.CH && b.CH.indexOf(a) > -1 || b.EN && b.EN.indexOf(a) > -1) && (c = b, c.provinceName = e.CH, c.cityName = f.CH, d.push(c))
                        })
                    })
                }), window.intelCitys && window.intelCitys.forEach(function (b) {
                    b && (b.CH && b.CH.indexOf(a) > -1 || b.EN && b.EN.indexOf(a) > -1) && d.push(b)
                }), d.length > 0 ? (o(".mod-search--result-amount").addClass("hidden"), o("#searchDataList").empty().html(v(d))) : (o(".mod-search--result-amount").removeClass("hidden"), o("#searchDataList").empty(), o(".mod-search--result-amount").text("未搜索到结果"))
            }
        }

        function l(a, b) {
            o.ajax({
                type: "POST",
                url: "/index?action=updateCitys",
                timeout: 1e4,
                dataType: "json",
                data: {citybid: a},
                success: function (c) {
                    if (c && 0 == c.ret) {
                        s.set("citybid", a), s.set("updatecity", "1");
                        try {
                            browser && browser.weather && browser.weather.syncweatherinfo ? browser.weather.syncweatherinfo({}) : q.g_push(!0, a, null, null, s.get("ip"), !0, !1, s.get("cardId")), b && b()
                        } catch (d) {
                            console.log(d)
                        }
                    }
                }
            })
        }

        var m, n, o = a("zepto"), p = a("../lib/utils"), q = a("../lib/common"), r = a("underscore"), s = a("../lib/cookie"), t = a("../lib/cityutils"), u = r.template(a("../../handlebars/addCity.html")), v = r.template(a("../../handlebars/searchResultCity.html")), w = r.template(a("../../handlebars/hotResultCity.html")), x = o('[data-page="searchSetting"]');
        o.extend(controllers, {
            searchSetting: {
                container: x, initialize: function () {
                    this.container.removeClass("hidden"), BJ_REPORT.init({
                        id: 36,
                        combo: 1,
                        delay: 100,
                        url: "//badjs2.qq.com/badjs",
                        ignore: [],
                        level: 1
                    }), d()
                }, bindEvent: function () {
                    x.on("tap", "#cancleAddcity", function () {
                        p.openHash("p=multiSetting", 100)
                    }), x.on("tap", "#hotCitysList li, #searchDataList li", function () {
                        var a = o(this);
                        if (o(this).attr("class") && o(this).attr("class").indexOf("chosed") > -1)return !1;
                        var b, c = a.data("citygbid");
                        o("#userInputCity").blur(), p.checkCityList(c) || (b = p.checkUserGPSInfo() && n == c ? s.get("citybid") : s.get("citybid") + "|" + c, s.set("citybid", b), l(b)), p.openHash("p=multiSetting", 300)
                    }).on("tap", "#userInputSearch", k)
                }, destroy: function () {
                    x.off("tap", "#cancleAddcity").off("tap", "#hotCitysList li, #searchDataList li").off("tap", "#userInputCity"), this.container.addClass("hidden"), o("#userInputCity").val("").blur()
                }
            }
        })
    }, {
        "../../handlebars/addCity.html": 1,
        "../../handlebars/hotResultCity.html": 3,
        "../../handlebars/searchResultCity.html": 5,
        "../lib/cityutils": 10,
        "../lib/common": 11,
        "../lib/cookie": 12,
        "../lib/utils": 14,
        underscore: 38,
        zepto: 57
    }], 21: [function (a, b, c) {
        b.exports = function (a, b) {
            return Array.prototype.slice.call(a, b)
        }
    }, {}], 22: [function (a, b, c) {
        (function (b) {
            !function (d) {
                var e = "object" == typeof self && self.self === self && self || "object" == typeof b && b.global === b && b;
                if ("function" == typeof define && define.amd)define(["underscore", "jquery", "exports"], function (a, b, c) {
                    e.Backbone = d(e, c, a, b)
                }); else if ("undefined" != typeof c) {
                    var f, g = a("underscore");
                    try {
                        f = a("jquery")
                    } catch (h) {
                    }
                    d(e, c, g, f)
                } else e.Backbone = d(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
            }(function (a, b, c, d) {
                var e = a.Backbone, f = Array.prototype.slice;
                b.VERSION = "1.3.3", b.$ = d, b.noConflict = function () {
                    return a.Backbone = e, this
                }, b.emulateHTTP = !1, b.emulateJSON = !1;
                var g = function (a, b, d) {
                    switch (a) {
                        case 1:
                            return function () {
                                return c[b](this[d])
                            };
                        case 2:
                            return function (a) {
                                return c[b](this[d], a)
                            };
                        case 3:
                            return function (a, e) {
                                return c[b](this[d], i(a, this), e)
                            };
                        case 4:
                            return function (a, e, f) {
                                return c[b](this[d], i(a, this), e, f)
                            };
                        default:
                            return function () {
                                var a = f.call(arguments);
                                return a.unshift(this[d]), c[b].apply(c, a)
                            }
                    }
                }, h = function (a, b, d) {
                    c.each(b, function (b, e) {
                        c[e] && (a.prototype[e] = g(b, e, d))
                    })
                }, i = function (a, b) {
                    return c.isFunction(a) ? a : c.isObject(a) && !b._isModel(a) ? j(a) : c.isString(a) ? function (b) {
                        return b.get(a)
                    } : a
                }, j = function (a) {
                    var b = c.matches(a);
                    return function (a) {
                        return b(a.attributes)
                    }
                }, k = b.Events = {}, l = /\s+/, m = function (a, b, d, e, f) {
                    var g, h = 0;
                    if (d && "object" == typeof d) {
                        void 0 !== e && "context" in f && void 0 === f.context && (f.context = e);
                        for (g = c.keys(d); h < g.length; h++)b = m(a, b, g[h], d[g[h]], f)
                    } else if (d && l.test(d))for (g = d.split(l); h < g.length; h++)b = a(b, g[h], e, f); else b = a(b, d, e, f);
                    return b
                };
                k.on = function (a, b, c) {
                    return n(this, a, b, c)
                };
                var n = function (a, b, c, d, e) {
                    if (a._events = m(o, a._events || {}, b, c, {context: d, ctx: a, listening: e}), e) {
                        var f = a._listeners || (a._listeners = {});
                        f[e.id] = e
                    }
                    return a
                };
                k.listenTo = function (a, b, d) {
                    if (!a)return this;
                    var e = a._listenId || (a._listenId = c.uniqueId("l")), f = this._listeningTo || (this._listeningTo = {}), g = f[e];
                    if (!g) {
                        var h = this._listenId || (this._listenId = c.uniqueId("l"));
                        g = f[e] = {obj: a, objId: e, id: h, listeningTo: f, count: 0}
                    }
                    return n(a, b, d, this, g), this
                };
                var o = function (a, b, c, d) {
                    if (c) {
                        var e = a[b] || (a[b] = []), f = d.context, g = d.ctx, h = d.listening;
                        h && h.count++, e.push({callback: c, context: f, ctx: f || g, listening: h})
                    }
                    return a
                };
                k.off = function (a, b, c) {
                    return this._events ? (this._events = m(p, this._events, a, b, {
                        context: c,
                        listeners: this._listeners
                    }), this) : this
                }, k.stopListening = function (a, b, d) {
                    var e = this._listeningTo;
                    if (!e)return this;
                    for (var f = a ? [a._listenId] : c.keys(e), g = 0; g < f.length; g++) {
                        var h = e[f[g]];
                        if (!h)break;
                        h.obj.off(b, d, this)
                    }
                    return this
                };
                var p = function (a, b, d, e) {
                    if (a) {
                        var f, g = 0, h = e.context, i = e.listeners;
                        if (b || d || h) {
                            for (var j = b ? [b] : c.keys(a); g < j.length; g++) {
                                b = j[g];
                                var k = a[b];
                                if (!k)break;
                                for (var l = [], m = 0; m < k.length; m++) {
                                    var n = k[m];
                                    d && d !== n.callback && d !== n.callback._callback || h && h !== n.context ? l.push(n) : (f = n.listening, f && 0 === --f.count && (delete i[f.id], delete f.listeningTo[f.objId]))
                                }
                                l.length ? a[b] = l : delete a[b]
                            }
                            return a
                        }
                        for (var o = c.keys(i); g < o.length; g++)f = i[o[g]], delete i[f.id], delete f.listeningTo[f.objId]
                    }
                };
                k.once = function (a, b, d) {
                    var e = m(q, {}, a, b, c.bind(this.off, this));
                    return "string" == typeof a && null == d && (b = void 0), this.on(e, b, d)
                }, k.listenToOnce = function (a, b, d) {
                    var e = m(q, {}, b, d, c.bind(this.stopListening, this, a));
                    return this.listenTo(a, e)
                };
                var q = function (a, b, d, e) {
                    if (d) {
                        var f = a[b] = c.once(function () {
                            e(b, f), d.apply(this, arguments)
                        });
                        f._callback = d
                    }
                    return a
                };
                k.trigger = function (a) {
                    if (!this._events)return this;
                    for (var b = Math.max(0, arguments.length - 1), c = Array(b), d = 0; d < b; d++)c[d] = arguments[d + 1];
                    return m(r, this._events, a, void 0, c), this
                };
                var r = function (a, b, c, d) {
                    if (a) {
                        var e = a[b], f = a.all;
                        e && f && (f = f.slice()), e && s(e, d), f && s(f, [b].concat(d))
                    }
                    return a
                }, s = function (a, b) {
                    var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
                    switch (b.length) {
                        case 0:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                            return;
                        case 1:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                            return;
                        case 2:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                            return;
                        case 3:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                            return;
                        default:
                            for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b);
                            return
                    }
                };
                k.bind = k.on, k.unbind = k.off, c.extend(b, k);
                var t = b.Model = function (a, b) {
                    var d = a || {};
                    b || (b = {}), this.cid = c.uniqueId(this.cidPrefix), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {});
                    var e = c.result(this, "defaults");
                    d = c.defaults(c.extend({}, e, d), e), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
                };
                c.extend(t.prototype, k, {
                    changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function () {
                    }, toJSON: function (a) {
                        return c.clone(this.attributes)
                    }, sync: function () {
                        return b.sync.apply(this, arguments)
                    }, get: function (a) {
                        return this.attributes[a]
                    }, escape: function (a) {
                        return c.escape(this.get(a))
                    }, has: function (a) {
                        return null != this.get(a)
                    }, matches: function (a) {
                        return !!c.iteratee(a, this)(this.attributes)
                    }, set: function (a, b, d) {
                        if (null == a)return this;
                        var e;
                        if ("object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d || (d = {}), !this._validate(e, d))return !1;
                        var f = d.unset, g = d.silent, h = [], i = this._changing;
                        this._changing = !0, i || (this._previousAttributes = c.clone(this.attributes), this.changed = {});
                        var j = this.attributes, k = this.changed, l = this._previousAttributes;
                        for (var m in e)b = e[m], c.isEqual(j[m], b) || h.push(m), c.isEqual(l[m], b) ? delete k[m] : k[m] = b, f ? delete j[m] : j[m] = b;
                        if (this.idAttribute in e && (this.id = this.get(this.idAttribute)), !g) {
                            h.length && (this._pending = d);
                            for (var n = 0; n < h.length; n++)this.trigger("change:" + h[n], this, j[h[n]], d)
                        }
                        if (i)return this;
                        if (!g)for (; this._pending;)d = this._pending, this._pending = !1, this.trigger("change", this, d);
                        return this._pending = !1, this._changing = !1, this
                    }, unset: function (a, b) {
                        return this.set(a, void 0, c.extend({}, b, {unset: !0}))
                    }, clear: function (a) {
                        var b = {};
                        for (var d in this.attributes)b[d] = void 0;
                        return this.set(b, c.extend({}, a, {unset: !0}))
                    }, hasChanged: function (a) {
                        return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
                    }, changedAttributes: function (a) {
                        if (!a)return !!this.hasChanged() && c.clone(this.changed);
                        var b = this._changing ? this._previousAttributes : this.attributes, d = {};
                        for (var e in a) {
                            var f = a[e];
                            c.isEqual(b[e], f) || (d[e] = f)
                        }
                        return !!c.size(d) && d
                    }, previous: function (a) {
                        return null != a && this._previousAttributes ? this._previousAttributes[a] : null;
                    }, previousAttributes: function () {
                        return c.clone(this._previousAttributes)
                    }, fetch: function (a) {
                        a = c.extend({parse: !0}, a);
                        var b = this, d = a.success;
                        return a.success = function (c) {
                            var e = a.parse ? b.parse(c, a) : c;
                            return !!b.set(e, a) && (d && d.call(a.context, b, c, a), void b.trigger("sync", b, c, a))
                        }, P(this, a), this.sync("read", this, a)
                    }, save: function (a, b, d) {
                        var e;
                        null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                            validate: !0,
                            parse: !0
                        }, d);
                        var f = d.wait;
                        if (e && !f) {
                            if (!this.set(e, d))return !1
                        } else if (!this._validate(e, d))return !1;
                        var g = this, h = d.success, i = this.attributes;
                        d.success = function (a) {
                            g.attributes = i;
                            var b = d.parse ? g.parse(a, d) : a;
                            return f && (b = c.extend({}, e, b)), !(b && !g.set(b, d)) && (h && h.call(d.context, g, a, d), void g.trigger("sync", g, a, d))
                        }, P(this, d), e && f && (this.attributes = c.extend({}, i, e));
                        var j = this.isNew() ? "create" : d.patch ? "patch" : "update";
                        "patch" !== j || d.attrs || (d.attrs = e);
                        var k = this.sync(j, this, d);
                        return this.attributes = i, k
                    }, destroy: function (a) {
                        a = a ? c.clone(a) : {};
                        var b = this, d = a.success, e = a.wait, f = function () {
                            b.stopListening(), b.trigger("destroy", b, b.collection, a)
                        };
                        a.success = function (c) {
                            e && f(), d && d.call(a.context, b, c, a), b.isNew() || b.trigger("sync", b, c, a)
                        };
                        var g = !1;
                        return this.isNew() ? c.defer(a.success) : (P(this, a), g = this.sync("delete", this, a)), e || f(), g
                    }, url: function () {
                        var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || O();
                        if (this.isNew())return a;
                        var b = this.get(this.idAttribute);
                        return a.replace(/[^\/]$/, "$&/") + encodeURIComponent(b)
                    }, parse: function (a, b) {
                        return a
                    }, clone: function () {
                        return new this.constructor(this.attributes)
                    }, isNew: function () {
                        return !this.has(this.idAttribute)
                    }, isValid: function (a) {
                        return this._validate({}, c.extend({}, a, {validate: !0}))
                    }, _validate: function (a, b) {
                        if (!b.validate || !this.validate)return !0;
                        a = c.extend({}, this.attributes, a);
                        var d = this.validationError = this.validate(a, b) || null;
                        return !d || (this.trigger("invalid", this, d, c.extend(b, {validationError: d})), !1)
                    }
                });
                var u = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1};
                h(t, u, "attributes");
                var v = b.Collection = function (a, b) {
                    b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({silent: !0}, b))
                }, w = {add: !0, remove: !0, merge: !0}, x = {add: !0, remove: !1}, y = function (a, b, c) {
                    c = Math.min(Math.max(c, 0), a.length);
                    var d, e = Array(a.length - c), f = b.length;
                    for (d = 0; d < e.length; d++)e[d] = a[d + c];
                    for (d = 0; d < f; d++)a[d + c] = b[d];
                    for (d = 0; d < e.length; d++)a[d + f + c] = e[d]
                };
                c.extend(v.prototype, k, {
                    model: t, initialize: function () {
                    }, toJSON: function (a) {
                        return this.map(function (b) {
                            return b.toJSON(a)
                        })
                    }, sync: function () {
                        return b.sync.apply(this, arguments)
                    }, add: function (a, b) {
                        return this.set(a, c.extend({merge: !1}, b, x))
                    }, remove: function (a, b) {
                        b = c.extend({}, b);
                        var d = !c.isArray(a);
                        a = d ? [a] : a.slice();
                        var e = this._removeModels(a, b);
                        return !b.silent && e.length && (b.changes = {
                            added: [],
                            merged: [],
                            removed: e
                        }, this.trigger("update", this, b)), d ? e[0] : e
                    }, set: function (a, b) {
                        if (null != a) {
                            b = c.extend({}, w, b), b.parse && !this._isModel(a) && (a = this.parse(a, b) || []);
                            var d = !c.isArray(a);
                            a = d ? [a] : a.slice();
                            var e = b.at;
                            null != e && (e = +e), e > this.length && (e = this.length), e < 0 && (e += this.length + 1);
                            var f, g, h = [], i = [], j = [], k = [], l = {}, m = b.add, n = b.merge, o = b.remove, p = !1, q = this.comparator && null == e && b.sort !== !1, r = c.isString(this.comparator) ? this.comparator : null;
                            for (g = 0; g < a.length; g++) {
                                f = a[g];
                                var s = this.get(f);
                                if (s) {
                                    if (n && f !== s) {
                                        var t = this._isModel(f) ? f.attributes : f;
                                        b.parse && (t = s.parse(t, b)), s.set(t, b), j.push(s), q && !p && (p = s.hasChanged(r))
                                    }
                                    l[s.cid] || (l[s.cid] = !0, h.push(s)), a[g] = s
                                } else m && (f = a[g] = this._prepareModel(f, b), f && (i.push(f), this._addReference(f, b), l[f.cid] = !0, h.push(f)))
                            }
                            if (o) {
                                for (g = 0; g < this.length; g++)f = this.models[g], l[f.cid] || k.push(f);
                                k.length && this._removeModels(k, b)
                            }
                            var u = !1, v = !q && m && o;
                            if (h.length && v ? (u = this.length !== h.length || c.some(this.models, function (a, b) {
                                        return a !== h[b]
                                    }), this.models.length = 0, y(this.models, h, 0), this.length = this.models.length) : i.length && (q && (p = !0), y(this.models, i, null == e ? this.length : e), this.length = this.models.length), p && this.sort({silent: !0}), !b.silent) {
                                for (g = 0; g < i.length; g++)null != e && (b.index = e + g), f = i[g], f.trigger("add", f, this, b);
                                (p || u) && this.trigger("sort", this, b), (i.length || k.length || j.length) && (b.changes = {
                                    added: i,
                                    removed: k,
                                    merged: j
                                }, this.trigger("update", this, b))
                            }
                            return d ? a[0] : a
                        }
                    }, reset: function (a, b) {
                        b = b ? c.clone(b) : {};
                        for (var d = 0; d < this.models.length; d++)this._removeReference(this.models[d], b);
                        return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({silent: !0}, b)), b.silent || this.trigger("reset", this, b), a
                    }, push: function (a, b) {
                        return this.add(a, c.extend({at: this.length}, b))
                    }, pop: function (a) {
                        var b = this.at(this.length - 1);
                        return this.remove(b, a)
                    }, unshift: function (a, b) {
                        return this.add(a, c.extend({at: 0}, b))
                    }, shift: function (a) {
                        var b = this.at(0);
                        return this.remove(b, a)
                    }, slice: function () {
                        return f.apply(this.models, arguments)
                    }, get: function (a) {
                        if (null != a)return this._byId[a] || this._byId[this.modelId(a.attributes || a)] || a.cid && this._byId[a.cid]
                    }, has: function (a) {
                        return null != this.get(a)
                    }, at: function (a) {
                        return a < 0 && (a += this.length), this.models[a]
                    }, where: function (a, b) {
                        return this[b ? "find" : "filter"](a)
                    }, findWhere: function (a) {
                        return this.where(a, !0)
                    }, sort: function (a) {
                        var b = this.comparator;
                        if (!b)throw new Error("Cannot sort a set without a comparator");
                        a || (a = {});
                        var d = b.length;
                        return c.isFunction(b) && (b = c.bind(b, this)), 1 === d || c.isString(b) ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("sort", this, a), this
                    }, pluck: function (a) {
                        return this.map(a + "")
                    }, fetch: function (a) {
                        a = c.extend({parse: !0}, a);
                        var b = a.success, d = this;
                        return a.success = function (c) {
                            var e = a.reset ? "reset" : "set";
                            d[e](c, a), b && b.call(a.context, d, c, a), d.trigger("sync", d, c, a)
                        }, P(this, a), this.sync("read", this, a)
                    }, create: function (a, b) {
                        b = b ? c.clone(b) : {};
                        var d = b.wait;
                        if (a = this._prepareModel(a, b), !a)return !1;
                        d || this.add(a, b);
                        var e = this, f = b.success;
                        return b.success = function (a, b, c) {
                            d && e.add(a, c), f && f.call(c.context, a, b, c)
                        }, a.save(null, b), a
                    }, parse: function (a, b) {
                        return a
                    }, clone: function () {
                        return new this.constructor(this.models, {model: this.model, comparator: this.comparator})
                    }, modelId: function (a) {
                        return a[this.model.prototype.idAttribute || "id"]
                    }, _reset: function () {
                        this.length = 0, this.models = [], this._byId = {}
                    }, _prepareModel: function (a, b) {
                        if (this._isModel(a))return a.collection || (a.collection = this), a;
                        b = b ? c.clone(b) : {}, b.collection = this;
                        var d = new this.model(a, b);
                        return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
                    }, _removeModels: function (a, b) {
                        for (var c = [], d = 0; d < a.length; d++) {
                            var e = this.get(a[d]);
                            if (e) {
                                var f = this.indexOf(e);
                                this.models.splice(f, 1), this.length--, delete this._byId[e.cid];
                                var g = this.modelId(e.attributes);
                                null != g && delete this._byId[g], b.silent || (b.index = f, e.trigger("remove", e, this, b)), c.push(e), this._removeReference(e, b)
                            }
                        }
                        return c
                    }, _isModel: function (a) {
                        return a instanceof t
                    }, _addReference: function (a, b) {
                        this._byId[a.cid] = a;
                        var c = this.modelId(a.attributes);
                        null != c && (this._byId[c] = a), a.on("all", this._onModelEvent, this)
                    }, _removeReference: function (a, b) {
                        delete this._byId[a.cid];
                        var c = this.modelId(a.attributes);
                        null != c && delete this._byId[c], this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
                    }, _onModelEvent: function (a, b, c, d) {
                        if (b) {
                            if (("add" === a || "remove" === a) && c !== this)return;
                            if ("destroy" === a && this.remove(b, d), "change" === a) {
                                var e = this.modelId(b.previousAttributes()), f = this.modelId(b.attributes);
                                e !== f && (null != e && delete this._byId[e], null != f && (this._byId[f] = b))
                            }
                        }
                        this.trigger.apply(this, arguments)
                    }
                });
                var z = {
                    forEach: 3,
                    each: 3,
                    map: 3,
                    collect: 3,
                    reduce: 0,
                    foldl: 0,
                    inject: 0,
                    reduceRight: 0,
                    foldr: 0,
                    find: 3,
                    detect: 3,
                    filter: 3,
                    select: 3,
                    reject: 3,
                    every: 3,
                    all: 3,
                    some: 3,
                    any: 3,
                    include: 3,
                    includes: 3,
                    contains: 3,
                    invoke: 0,
                    max: 3,
                    min: 3,
                    toArray: 1,
                    size: 1,
                    first: 3,
                    head: 3,
                    take: 3,
                    initial: 3,
                    rest: 3,
                    tail: 3,
                    drop: 3,
                    last: 3,
                    without: 0,
                    difference: 0,
                    indexOf: 3,
                    shuffle: 1,
                    lastIndexOf: 3,
                    isEmpty: 1,
                    chain: 1,
                    sample: 3,
                    partition: 3,
                    groupBy: 3,
                    countBy: 3,
                    sortBy: 3,
                    indexBy: 3,
                    findIndex: 3,
                    findLastIndex: 3
                };
                h(v, z, "models");
                var A = b.View = function (a) {
                    this.cid = c.uniqueId("view"), c.extend(this, c.pick(a, C)), this._ensureElement(), this.initialize.apply(this, arguments)
                }, B = /^(\S+)\s*(.*)$/, C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                c.extend(A.prototype, k, {
                    tagName: "div", $: function (a) {
                        return this.$el.find(a)
                    }, initialize: function () {
                    }, render: function () {
                        return this
                    }, remove: function () {
                        return this._removeElement(), this.stopListening(), this
                    }, _removeElement: function () {
                        this.$el.remove()
                    }, setElement: function (a) {
                        return this.undelegateEvents(), this._setElement(a), this.delegateEvents(), this
                    }, _setElement: function (a) {
                        this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0]
                    }, delegateEvents: function (a) {
                        if (a || (a = c.result(this, "events")), !a)return this;
                        this.undelegateEvents();
                        for (var b in a) {
                            var d = a[b];
                            if (c.isFunction(d) || (d = this[d]), d) {
                                var e = b.match(B);
                                this.delegate(e[1], e[2], c.bind(d, this))
                            }
                        }
                        return this
                    }, delegate: function (a, b, c) {
                        return this.$el.on(a + ".delegateEvents" + this.cid, b, c), this
                    }, undelegateEvents: function () {
                        return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                    }, undelegate: function (a, b, c) {
                        return this.$el.off(a + ".delegateEvents" + this.cid, b, c), this
                    }, _createElement: function (a) {
                        return document.createElement(a)
                    }, _ensureElement: function () {
                        if (this.el)this.setElement(c.result(this, "el")); else {
                            var a = c.extend({}, c.result(this, "attributes"));
                            this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className")), this.setElement(this._createElement(c.result(this, "tagName"))), this._setAttributes(a)
                        }
                    }, _setAttributes: function (a) {
                        this.$el.attr(a)
                    }
                }), b.sync = function (a, d, e) {
                    var f = D[a];
                    c.defaults(e || (e = {}), {emulateHTTP: b.emulateHTTP, emulateJSON: b.emulateJSON});
                    var g = {type: f, dataType: "json"};
                    if (e.url || (g.url = c.result(d, "url") || O()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {model: g.data} : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                        g.type = "POST", e.emulateJSON && (g.data._method = f);
                        var h = e.beforeSend;
                        e.beforeSend = function (a) {
                            if (a.setRequestHeader("X-HTTP-Method-Override", f), h)return h.apply(this, arguments)
                        }
                    }
                    "GET" === g.type || e.emulateJSON || (g.processData = !1);
                    var i = e.error;
                    e.error = function (a, b, c) {
                        e.textStatus = b, e.errorThrown = c, i && i.call(e.context, a, b, c)
                    };
                    var j = e.xhr = b.ajax(c.extend(g, e));
                    return d.trigger("request", d, j, e), j
                };
                var D = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
                b.ajax = function () {
                    return b.$.ajax.apply(b.$, arguments)
                };
                var E = b.Router = function (a) {
                    a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                }, F = /\((.*?)\)/g, G = /(\(\?)?:\w+/g, H = /\*\w+/g, I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                c.extend(E.prototype, k, {
                    initialize: function () {
                    }, route: function (a, d, e) {
                        c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
                        var f = this;
                        return b.history.route(a, function (c) {
                            var g = f._extractParameters(a, c);
                            f.execute(e, g, d) !== !1 && (f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g))
                        }), this
                    }, execute: function (a, b, c) {
                        a && a.apply(this, b)
                    }, navigate: function (a, c) {
                        return b.history.navigate(a, c), this
                    }, _bindRoutes: function () {
                        if (this.routes) {
                            this.routes = c.result(this, "routes");
                            for (var a, b = c.keys(this.routes); null != (a = b.pop());)this.route(a, this.routes[a])
                        }
                    }, _routeToRegExp: function (a) {
                        return a = a.replace(I, "\\$&").replace(F, "(?:$1)?").replace(G, function (a, b) {
                            return b ? a : "([^/?]+)"
                        }).replace(H, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
                    }, _extractParameters: function (a, b) {
                        var d = a.exec(b).slice(1);
                        return c.map(d, function (a, b) {
                            return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
                        })
                    }
                });
                var J = b.History = function () {
                    this.handlers = [], this.checkUrl = c.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                }, K = /^[#\/]|\s+$/g, L = /^\/+|\/+$/g, M = /#.*$/;
                J.started = !1, c.extend(J.prototype, k, {
                    interval: 50, atRoot: function () {
                        var a = this.location.pathname.replace(/[^\/]$/, "$&/");
                        return a === this.root && !this.getSearch()
                    }, matchRoot: function () {
                        var a = this.decodeFragment(this.location.pathname), b = a.slice(0, this.root.length - 1) + "/";
                        return b === this.root
                    }, decodeFragment: function (a) {
                        return decodeURI(a.replace(/%25/g, "%2525"))
                    }, getSearch: function () {
                        var a = this.location.href.replace(/#.*/, "").match(/\?.+/);
                        return a ? a[0] : ""
                    }, getHash: function (a) {
                        var b = (a || this).location.href.match(/#(.*)$/);
                        return b ? b[1] : ""
                    }, getPath: function () {
                        var a = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                        return "/" === a.charAt(0) ? a.slice(1) : a
                    }, getFragment: function (a) {
                        return null == a && (a = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), a.replace(K, "")
                    }, start: function (a) {
                        if (J.started)throw new Error("Backbone.history has already been started");
                        if (J.started = !0, this.options = c.extend({root: "/"}, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(L, "/"), this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot()) {
                                var b = this.root.slice(0, -1) || "/";
                                return this.location.replace(b + "#" + this.getPath()), !0
                            }
                            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {replace: !0})
                        }
                        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                            this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                            var d = document.body, e = d.insertBefore(this.iframe, d.firstChild).contentWindow;
                            e.document.open(), e.document.close(), e.location.hash = "#" + this.fragment
                        }
                        var f = window.addEventListener || function (a, b) {
                                return attachEvent("on" + a, b)
                            };
                        if (this._usePushState ? f("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? f("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)return this.loadUrl()
                    }, stop: function () {
                        var a = window.removeEventListener || function (a, b) {
                                return detachEvent("on" + a, b)
                            };
                        this._usePushState ? a("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && a("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), J.started = !1
                    }, route: function (a, b) {
                        this.handlers.unshift({route: a, callback: b})
                    }, checkUrl: function (a) {
                        var b = this.getFragment();
                        return b === this.fragment && this.iframe && (b = this.getHash(this.iframe.contentWindow)), b !== this.fragment && (this.iframe && this.navigate(b), void this.loadUrl())
                    }, loadUrl: function (a) {
                        return !!this.matchRoot() && (a = this.fragment = this.getFragment(a), c.some(this.handlers, function (b) {
                                if (b.route.test(a))return b.callback(a), !0
                            }))
                    }, navigate: function (a, b) {
                        if (!J.started)return !1;
                        b && b !== !0 || (b = {trigger: !!b}), a = this.getFragment(a || "");
                        var c = this.root;
                        "" !== a && "?" !== a.charAt(0) || (c = c.slice(0, -1) || "/");
                        var d = c + a;
                        if (a = this.decodeFragment(a.replace(M, "")), this.fragment !== a) {
                            if (this.fragment = a, this._usePushState)this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, d); else {
                                if (!this._wantsHashChange)return this.location.assign(d);
                                if (this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getHash(this.iframe.contentWindow)) {
                                    var e = this.iframe.contentWindow;
                                    b.replace || (e.document.open(), e.document.close()), this._updateHash(e.location, a, b.replace)
                                }
                            }
                            return b.trigger ? this.loadUrl(a) : void 0
                        }
                    }, _updateHash: function (a, b, c) {
                        if (c) {
                            var d = a.href.replace(/(javascript:|#).*$/, "");
                            a.replace(d + "#" + b)
                        } else a.hash = "#" + b
                    }
                }), b.history = new J;
                var N = function (a, b) {
                    var d, e = this;
                    return d = a && c.has(a, "constructor") ? a.constructor : function () {
                        return e.apply(this, arguments)
                    }, c.extend(d, e, b), d.prototype = c.create(e.prototype, a), d.prototype.constructor = d, d.__super__ = e.prototype, d
                };
                t.extend = v.extend = E.extend = A.extend = J.extend = N;
                var O = function () {
                    throw new Error('A "url" property or function must be specified')
                }, P = function (a, b) {
                    var c = b.error;
                    b.error = function (d) {
                        c && c.call(b.context, a, d, b), a.trigger("error", a, d, b)
                    }
                };
                return b
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {jquery: 30, underscore: 38}], 23: [function (a, b, c) {
        "use strict";
        var d = a("ticky");
        b.exports = function (a, b, c) {
            a && d(function () {
                a.apply(c || null, b || [])
            })
        }
    }, {ticky: 37}], 24: [function (a, b, c) {
        "use strict";
        var d = a("atoa"), e = a("./debounce");
        b.exports = function (a, b) {
            var c = b || {}, f = {};
            return void 0 === a && (a = {}), a.on = function (b, c) {
                return f[b] ? f[b].push(c) : f[b] = [c], a
            }, a.once = function (b, c) {
                return c._once = !0, a.on(b, c), a
            }, a.off = function (b, c) {
                var d = arguments.length;
                if (1 === d)delete f[b]; else if (0 === d)f = {}; else {
                    var e = f[b];
                    if (!e)return a;
                    e.splice(e.indexOf(c), 1)
                }
                return a
            }, a.emit = function () {
                var b = d(arguments);
                return a.emitterSnapshot(b.shift()).apply(this, b)
            }, a.emitterSnapshot = function (b) {
                var g = (f[b] || []).slice(0);
                return function () {
                    var f = d(arguments), h = this || a;
                    if ("error" === b && c["throws"] !== !1 && !g.length)throw 1 === f.length ? f[0] : f;
                    return g.forEach(function (d) {
                        c.async ? e(d, f, h) : d.apply(h, f), d._once && a.off(b, d)
                    }), a
                }
            }, a
        }
    }, {"./debounce": 23, atoa: 21}], 25: [function (a, b, c) {
        (function (c) {
            "use strict";
            function d(a, b, c, d) {
                return a.addEventListener(b, c, d)
            }

            function e(a, b, c) {
                return a.attachEvent("on" + b, j(a, b, c))
            }

            function f(a, b, c, d) {
                return a.removeEventListener(b, c, d)
            }

            function g(a, b, c) {
                var d = k(a, b, c);
                if (d)return a.detachEvent("on" + b, d)
            }

            function h(a, b, c) {
                function d() {
                    var a;
                    return o.createEvent ? (a = o.createEvent("Event"), a.initEvent(b, !0, !0)) : o.createEventObject && (a = o.createEventObject()), a
                }

                function e() {
                    return new m(b, {detail: c})
                }

                var f = n.indexOf(b) === -1 ? e() : d();
                a.dispatchEvent ? a.dispatchEvent(f) : a.fireEvent("on" + b, f)
            }

            function i(a, b, d) {
                return function (b) {
                    var e = b || c.event;
                    e.target = e.target || e.srcElement, e.preventDefault = e.preventDefault || function () {
                            e.returnValue = !1
                        }, e.stopPropagation = e.stopPropagation || function () {
                            e.cancelBubble = !0
                        }, e.which = e.which || e.keyCode, d.call(a, e)
                }
            }

            function j(a, b, c) {
                var d = k(a, b, c) || i(a, b, c);
                return r.push({wrapper: d, element: a, type: b, fn: c}), d
            }

            function k(a, b, c) {
                var d = l(a, b, c);
                if (d) {
                    var e = r[d].wrapper;
                    return r.splice(d, 1), e
                }
            }

            function l(a, b, c) {
                var d, e;
                for (d = 0; d < r.length; d++)if (e = r[d], e.element === a && e.type === b && e.fn === c)return d
            }

            var m = a("custom-event"), n = a("./eventmap"), o = c.document, p = d, q = f, r = [];
            c.addEventListener || (p = e, q = g), b.exports = {add: p, remove: q, fabricate: h}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./eventmap": 26, "custom-event": 27}], 26: [function (a, b, c) {
        (function (a) {
            "use strict";
            var c = [], d = "", e = /^on/;
            for (d in a)e.test(d) && c.push(d.slice(2));
            b.exports = c
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 27: [function (a, b, c) {
        (function (a) {
            function c() {
                try {
                    var a = new d("cat", {detail: {foo: "bar"}});
                    return "cat" === a.type && "bar" === a.detail.foo
                } catch (b) {
                }
                return !1
            }

            var d = a.CustomEvent;
            b.exports = c() ? d : "function" == typeof document.createEvent ? function (a, b) {
                var c = document.createEvent("CustomEvent");
                return b ? c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail) : c.initCustomEvent(a, !1, !1, void 0), c
            } : function (a, b) {
                var c = document.createEventObject();
                return c.type = a, b ? (c.bubbles = Boolean(b.bubbles), c.cancelable = Boolean(b.cancelable), c.detail = b.detail) : (c.bubbles = !1, c.cancelable = !1, c.detail = void 0), c
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 28: [function (a, b, c) {
        "use strict";
        function d(a) {
            var b = g[a];
            return b ? b.lastIndex = 0 : g[a] = b = new RegExp(h + a + i, "g"), b
        }

        function e(a, b) {
            var c = a.className;
            c.length ? d(b).test(c) || (a.className += " " + b) : a.className = b
        }

        function f(a, b) {
            a.className = a.className.replace(d(b), " ").trim()
        }

        var g = {}, h = "(?:^|\\s)", i = "(?:\\s|$)";
        b.exports = {add: e, rm: f}
    }, {}], 29: [function (a, b, c) {
        (function (c) {
            "use strict";
            function d(a, b) {
                function c(a) {
                    return ka.containers.indexOf(a) !== -1 || ja.isContainer(a)
                }

                function d(a) {
                    var b = a ? "remove" : "add";
                    e(x, b, "mousedown", z), e(x, b, "mouseup", I)
                }

                function h(a) {
                    var b = a ? "remove" : "add";
                    e(x, b, "mousemove", A)
                }

                function p(a) {
                    var b = a ? "remove" : "add";
                    u[b](x, "selectstart", y), u[b](x, "click", y)
                }

                function r() {
                    d(!0), I({})
                }

                function y(a) {
                    ha && a.preventDefault()
                }

                function z(a) {
                    ba = a.clientX, ca = a.clientY;
                    var b = 1 !== f(a) || a.metaKey || a.ctrlKey;
                    if (!b) {
                        var c = a.target, d = B(c);
                        d && (ha = d, h(), "mousedown" === a.type && (o(c) ? c.focus() : a.preventDefault()))
                    }
                }

                function A(a) {
                    if (ha) {
                        if (0 === f(a))return void I({});
                        if (void 0 === a.clientX || a.clientX !== ba || void 0 === a.clientY || a.clientY !== ca) {
                            if (ja.ignoreInputTextSelection) {
                                var b = s("clientX", a), c = s("clientY", a), d = w.elementFromPoint(b, c);
                                if (o(d))return
                            }
                            var e = ha;
                            h(!0), p(), G(), E(e);
                            var i = g($);
                            _ = s("pageX", a) - i.left, aa = s("pageY", a) - i.top, v.add(fa || $, "gu-transit"), S(), P(a)
                        }
                    }
                }

                function B(a) {
                    if (!(ka.dragging && Y || c(a))) {
                        for (var b = a; n(a) && c(n(a)) === !1;) {
                            if (ja.invalid(a, b))return;
                            if (a = n(a), !a)return
                        }
                        var d = n(a);
                        if (d && !ja.invalid(a, b)) {
                            var e = ja.moves(a, d, b, q(a));
                            if (e)return {item: a, source: d}
                        }
                    }
                }

                function C(a) {
                    return !!B(a)
                }

                function D(a) {
                    var b = B(a);
                    b && E(b)
                }

                function E(a) {
                    W(a.item, a.source) && (fa = a.item.cloneNode(!0), ka.emit("cloned", fa, a.item, "copy")), Z = a.source, $ = a.item, da = ea = q(a.item), ka.dragging = !0, ka.emit("drag", $, Z)
                }

                function F() {
                    return !1
                }

                function G() {
                    if (ka.dragging) {
                        var a = fa || $;
                        J(a, n(a))
                    }
                }

                function H() {
                    ha = !1, h(!0), p(!0)
                }

                function I(a) {
                    if (H(), ka.dragging) {
                        var b = fa || $, c = s("clientX", a), d = s("clientY", a), e = i(Y, c, d), f = O(e, c, d);
                        f && (fa && ja.copySortSource || !fa || f !== Z) ? J(b, f) : ja.removeOnSpill ? K() : L()
                    }
                }

                function J(a, b) {
                    var c = n(a);
                    fa && ja.copySortSource && b === Z && c.removeChild($), N(b) ? ka.emit("cancel", a, Z, Z) : ka.emit("drop", a, b, Z, ea), M()
                }

                function K() {
                    if (ka.dragging) {
                        var a = fa || $, b = n(a);
                        b && b.removeChild(a), ka.emit(fa ? "cancel" : "remove", a, b, Z), M()
                    }
                }

                function L(a) {
                    if (ka.dragging) {
                        var b = arguments.length > 0 ? a : ja.revertOnSpill, c = fa || $, d = n(c), e = N(d);
                        e === !1 && b && (fa ? d.removeChild(fa) : Z.insertBefore(c, da)), e || b ? ka.emit("cancel", c, Z, Z) : ka.emit("drop", c, d, Z, ea), M()
                    }
                }

                function M() {
                    var a = fa || $;
                    H(), T(), a && v.rm(a, "gu-transit"), ga && clearTimeout(ga), ka.dragging = !1, ia && ka.emit("out", a, ia, Z), ka.emit("dragend", a), Z = $ = fa = da = ea = ga = ia = null
                }

                function N(a, b) {
                    var c;
                    return c = void 0 !== b ? b : Y ? ea : q(fa || $), a === Z && c === da
                }

                function O(a, b, d) {
                    function e() {
                        var e = c(f);
                        if (e === !1)return !1;
                        var g = U(f, a), h = V(f, g, b, d), i = N(f, h);
                        return !!i || ja.accepts($, f, Z, h)
                    }

                    for (var f = a; f && !e();)f = n(f);
                    return f
                }

                function P(a) {
                    function b(a) {
                        ka.emit(a, j, ia, Z)
                    }

                    function c() {
                        m && b("over")
                    }

                    function d() {
                        ia && b("out")
                    }

                    if (Y) {
                        a.preventDefault();
                        var e = s("clientX", a), f = s("clientY", a), g = e - _, h = f - aa;
                        Y.style.left = g + "px", Y.style.top = h + "px";
                        var j = fa || $, k = i(Y, e, f), l = O(k, e, f), m = null !== l && l !== ia;
                        (m || null === l) && (d(), ia = l, c());
                        var o = n(j);
                        if (l === Z && fa && !ja.copySortSource)return void(o && o.removeChild(j));
                        var p, r = U(l, k);
                        if (null !== r)p = V(l, r, e, f); else {
                            if (ja.revertOnSpill !== !0 || fa)return void(fa && o && o.removeChild(j));
                            p = da, l = Z
                        }
                        (null === p && m || p !== j && p !== q(j)) && (ea = p, l.insertBefore(j, p), ka.emit("shadow", j, l, Z))
                    }
                }

                function Q(a) {
                    v.rm(a, "gu-hide")
                }

                function R(a) {
                    ka.dragging && v.add(a, "gu-hide")
                }

                function S() {
                    if (!Y) {
                        var a = $.getBoundingClientRect();
                        Y = $.cloneNode(!0), Y.style.width = l(a) + "px", Y.style.height = m(a) + "px", v.rm(Y, "gu-transit"), v.add(Y, "gu-mirror"), ja.mirrorContainer.appendChild(Y), e(x, "add", "mousemove", P), v.add(ja.mirrorContainer, "gu-unselectable"), ka.emit("cloned", Y, $, "mirror")
                    }
                }

                function T() {
                    Y && (v.rm(ja.mirrorContainer, "gu-unselectable"), e(x, "remove", "mousemove", P), n(Y).removeChild(Y), Y = null)
                }

                function U(a, b) {
                    for (var c = b; c !== a && n(c) !== a;)c = n(c);
                    return c === x ? null : c
                }

                function V(a, b, c, d) {
                    function e() {
                        var b, e, f, g = a.children.length;
                        for (b = 0; b < g; b++) {
                            if (e = a.children[b], f = e.getBoundingClientRect(), h && f.left + f.width / 2 > c)return e;
                            if (!h && f.top + f.height / 2 > d)return e
                        }
                        return null
                    }

                    function f() {
                        var a = b.getBoundingClientRect();
                        return g(h ? c > a.left + l(a) / 2 : d > a.top + m(a) / 2)
                    }

                    function g(a) {
                        return a ? q(b) : b
                    }

                    var h = "horizontal" === ja.direction, i = b !== a ? f() : e();
                    return i
                }

                function W(a, b) {
                    return "boolean" == typeof ja.copy ? ja.copy : ja.copy(a, b)
                }

                var X = arguments.length;
                1 === X && Array.isArray(a) === !1 && (b = a, a = []);
                var Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia = null, ja = b || {};
                void 0 === ja.moves && (ja.moves = k), void 0 === ja.accepts && (ja.accepts = k), void 0 === ja.invalid && (ja.invalid = F), void 0 === ja.containers && (ja.containers = a || []), void 0 === ja.isContainer && (ja.isContainer = j), void 0 === ja.copy && (ja.copy = !1), void 0 === ja.copySortSource && (ja.copySortSource = !1), void 0 === ja.revertOnSpill && (ja.revertOnSpill = !1), void 0 === ja.removeOnSpill && (ja.removeOnSpill = !1), void 0 === ja.direction && (ja.direction = "vertical"), void 0 === ja.ignoreInputTextSelection && (ja.ignoreInputTextSelection = !0), void 0 === ja.mirrorContainer && (ja.mirrorContainer = w.body);
                var ka = t({
                    containers: ja.containers,
                    start: D,
                    end: G,
                    cancel: L,
                    remove: K,
                    destroy: r,
                    canMove: C,
                    dragging: !1
                });
                return ja.removeOnSpill === !0 && ka.on("over", Q).on("out", R), d(), ka
            }

            function e(a, b, d, e) {
                var f = {
                    mouseup: "touchend",
                    mousedown: "touchstart",
                    mousemove: "touchmove"
                }, g = {
                    mouseup: "pointerup",
                    mousedown: "pointerdown",
                    mousemove: "pointermove"
                }, h = {mouseup: "MSPointerUp", mousedown: "MSPointerDown", mousemove: "MSPointerMove"};
                c.navigator.pointerEnabled ? u[b](a, g[d], e) : c.navigator.msPointerEnabled ? u[b](a, h[d], e) : (u[b](a, f[d], e), u[b](a, d, e))
            }

            function f(a) {
                if (void 0 !== a.touches)return a.touches.length;
                if (void 0 !== a.which && 0 !== a.which)return a.which;
                if (void 0 !== a.buttons)return a.buttons;
                var b = a.button;
                return void 0 !== b ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : void 0
            }

            function g(a) {
                var b = a.getBoundingClientRect();
                return {left: b.left + h("scrollLeft", "pageXOffset"), top: b.top + h("scrollTop", "pageYOffset")}
            }

            function h(a, b) {
                return "undefined" != typeof c[b] ? c[b] : x.clientHeight ? x[a] : w.body[a]
            }

            function i(a, b, c) {
                var d, e = a || {}, f = e.className;
                return e.className += " gu-hide", d = w.elementFromPoint(b, c), e.className = f, d
            }

            function j() {
                return !1
            }

            function k() {
                return !0
            }

            function l(a) {
                return a.width || a.right - a.left
            }

            function m(a) {
                return a.height || a.bottom - a.top
            }

            function n(a) {
                return a.parentNode === w ? null : a.parentNode
            }

            function o(a) {
                return "INPUT" === a.tagName || "TEXTAREA" === a.tagName || "SELECT" === a.tagName || p(a)
            }

            function p(a) {
                return !!a && ("false" !== a.contentEditable && ("true" === a.contentEditable || p(n(a))))
            }

            function q(a) {
                function b() {
                    var b = a;
                    do b = b.nextSibling; while (b && 1 !== b.nodeType);
                    return b
                }

                return a.nextElementSibling || b()
            }

            function r(a) {
                return a.targetTouches && a.targetTouches.length ? a.targetTouches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a
            }

            function s(a, b) {
                var c = r(b), d = {pageX: "clientX", pageY: "clientY"};
                return a in d && !(a in c) && d[a] in c && (a = d[a]), c[a]
            }

            var t = a("contra/emitter"), u = a("crossvent"), v = a("./classes"), w = document, x = w.documentElement;
            b.exports = d
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./classes": 28, "contra/emitter": 24, crossvent: 25}], 30: [function (a, b, c) {
    }, {}], 31: [function (a, b, c) {
        !function () {
            var c = a("crypt"), d = a("charenc").utf8, e = a("is-buffer"), f = a("charenc").bin, g = function (a, b) {
                a.constructor == String ? a = b && "binary" === b.encoding ? f.stringToBytes(a) : d.stringToBytes(a) : e(a) ? a = Array.prototype.slice.call(a, 0) : Array.isArray(a) || (a = a.toString());
                for (var h = c.bytesToWords(a), i = 8 * a.length, j = 1732584193, k = -271733879, l = -1732584194, m = 271733878, n = 0; n < h.length; n++)h[n] = 16711935 & (h[n] << 8 | h[n] >>> 24) | 4278255360 & (h[n] << 24 | h[n] >>> 8);
                h[i >>> 5] |= 128 << i % 32, h[(i + 64 >>> 9 << 4) + 14] = i;
                for (var o = g._ff, p = g._gg, q = g._hh, r = g._ii, n = 0; n < h.length; n += 16) {
                    var s = j, t = k, u = l, v = m;
                    j = o(j, k, l, m, h[n + 0], 7, -680876936), m = o(m, j, k, l, h[n + 1], 12, -389564586), l = o(l, m, j, k, h[n + 2], 17, 606105819), k = o(k, l, m, j, h[n + 3], 22, -1044525330), j = o(j, k, l, m, h[n + 4], 7, -176418897), m = o(m, j, k, l, h[n + 5], 12, 1200080426), l = o(l, m, j, k, h[n + 6], 17, -1473231341), k = o(k, l, m, j, h[n + 7], 22, -45705983), j = o(j, k, l, m, h[n + 8], 7, 1770035416), m = o(m, j, k, l, h[n + 9], 12, -1958414417), l = o(l, m, j, k, h[n + 10], 17, -42063), k = o(k, l, m, j, h[n + 11], 22, -1990404162), j = o(j, k, l, m, h[n + 12], 7, 1804603682), m = o(m, j, k, l, h[n + 13], 12, -40341101), l = o(l, m, j, k, h[n + 14], 17, -1502002290), k = o(k, l, m, j, h[n + 15], 22, 1236535329), j = p(j, k, l, m, h[n + 1], 5, -165796510), m = p(m, j, k, l, h[n + 6], 9, -1069501632), l = p(l, m, j, k, h[n + 11], 14, 643717713), k = p(k, l, m, j, h[n + 0], 20, -373897302), j = p(j, k, l, m, h[n + 5], 5, -701558691), m = p(m, j, k, l, h[n + 10], 9, 38016083), l = p(l, m, j, k, h[n + 15], 14, -660478335), k = p(k, l, m, j, h[n + 4], 20, -405537848), j = p(j, k, l, m, h[n + 9], 5, 568446438), m = p(m, j, k, l, h[n + 14], 9, -1019803690), l = p(l, m, j, k, h[n + 3], 14, -187363961), k = p(k, l, m, j, h[n + 8], 20, 1163531501), j = p(j, k, l, m, h[n + 13], 5, -1444681467), m = p(m, j, k, l, h[n + 2], 9, -51403784), l = p(l, m, j, k, h[n + 7], 14, 1735328473), k = p(k, l, m, j, h[n + 12], 20, -1926607734), j = q(j, k, l, m, h[n + 5], 4, -378558), m = q(m, j, k, l, h[n + 8], 11, -2022574463), l = q(l, m, j, k, h[n + 11], 16, 1839030562), k = q(k, l, m, j, h[n + 14], 23, -35309556), j = q(j, k, l, m, h[n + 1], 4, -1530992060), m = q(m, j, k, l, h[n + 4], 11, 1272893353), l = q(l, m, j, k, h[n + 7], 16, -155497632), k = q(k, l, m, j, h[n + 10], 23, -1094730640), j = q(j, k, l, m, h[n + 13], 4, 681279174), m = q(m, j, k, l, h[n + 0], 11, -358537222), l = q(l, m, j, k, h[n + 3], 16, -722521979), k = q(k, l, m, j, h[n + 6], 23, 76029189), j = q(j, k, l, m, h[n + 9], 4, -640364487), m = q(m, j, k, l, h[n + 12], 11, -421815835), l = q(l, m, j, k, h[n + 15], 16, 530742520), k = q(k, l, m, j, h[n + 2], 23, -995338651), j = r(j, k, l, m, h[n + 0], 6, -198630844), m = r(m, j, k, l, h[n + 7], 10, 1126891415), l = r(l, m, j, k, h[n + 14], 15, -1416354905), k = r(k, l, m, j, h[n + 5], 21, -57434055), j = r(j, k, l, m, h[n + 12], 6, 1700485571), m = r(m, j, k, l, h[n + 3], 10, -1894986606), l = r(l, m, j, k, h[n + 10], 15, -1051523), k = r(k, l, m, j, h[n + 1], 21, -2054922799), j = r(j, k, l, m, h[n + 8], 6, 1873313359), m = r(m, j, k, l, h[n + 15], 10, -30611744), l = r(l, m, j, k, h[n + 6], 15, -1560198380), k = r(k, l, m, j, h[n + 13], 21, 1309151649), j = r(j, k, l, m, h[n + 4], 6, -145523070), m = r(m, j, k, l, h[n + 11], 10, -1120210379), l = r(l, m, j, k, h[n + 2], 15, 718787259), k = r(k, l, m, j, h[n + 9], 21, -343485551), j = j + s >>> 0, k = k + t >>> 0, l = l + u >>> 0, m = m + v >>> 0
                }
                return c.endian([j, k, l, m])
            };
            g._ff = function (a, b, c, d, e, f, g) {
                var h = a + (b & c | ~b & d) + (e >>> 0) + g;
                return (h << f | h >>> 32 - f) + b
            }, g._gg = function (a, b, c, d, e, f, g) {
                var h = a + (b & d | c & ~d) + (e >>> 0) + g;
                return (h << f | h >>> 32 - f) + b
            }, g._hh = function (a, b, c, d, e, f, g) {
                var h = a + (b ^ c ^ d) + (e >>> 0) + g;
                return (h << f | h >>> 32 - f) + b
            }, g._ii = function (a, b, c, d, e, f, g) {
                var h = a + (c ^ (b | ~d)) + (e >>> 0) + g;
                return (h << f | h >>> 32 - f) + b
            }, g._blocksize = 16, g._digestsize = 16, b.exports = function (a, b) {
                if ("undefined" != typeof a) {
                    var d = c.wordsToBytes(g(a, b));
                    return b && b.asBytes ? d : b && b.asString ? f.bytesToString(d) : c.bytesToHex(d)
                }
            }
        }()
    }, {charenc: 32, crypt: 33, "is-buffer": 34}], 32: [function (a, b, c) {
        var d = {
            utf8: {
                stringToBytes: function (a) {
                    return d.bin.stringToBytes(unescape(encodeURIComponent(a)))
                }, bytesToString: function (a) {
                    return decodeURIComponent(escape(d.bin.bytesToString(a)))
                }
            }, bin: {
                stringToBytes: function (a) {
                    for (var b = [], c = 0; c < a.length; c++)b.push(255 & a.charCodeAt(c));
                    return b
                }, bytesToString: function (a) {
                    for (var b = [], c = 0; c < a.length; c++)b.push(String.fromCharCode(a[c]));
                    return b.join("")
                }
            }
        };
        b.exports = d
    }, {}], 33: [function (a, b, c) {
        !function () {
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = {
                rotl: function (a, b) {
                    return a << b | a >>> 32 - b
                }, rotr: function (a, b) {
                    return a << 32 - b | a >>> b
                }, endian: function (a) {
                    if (a.constructor == Number)return 16711935 & c.rotl(a, 8) | 4278255360 & c.rotl(a, 24);
                    for (var b = 0; b < a.length; b++)a[b] = c.endian(a[b]);
                    return a
                }, randomBytes: function (a) {
                    for (var b = []; a > 0; a--)b.push(Math.floor(256 * Math.random()));
                    return b
                }, bytesToWords: function (a) {
                    for (var b = [], c = 0, d = 0; c < a.length; c++, d += 8)b[d >>> 5] |= a[c] << 24 - d % 32;
                    return b
                }, wordsToBytes: function (a) {
                    for (var b = [], c = 0; c < 32 * a.length; c += 8)b.push(a[c >>> 5] >>> 24 - c % 32 & 255);
                    return b
                }, bytesToHex: function (a) {
                    for (var b = [], c = 0; c < a.length; c++)b.push((a[c] >>> 4).toString(16)), b.push((15 & a[c]).toString(16));
                    return b.join("")
                }, hexToBytes: function (a) {
                    for (var b = [], c = 0; c < a.length; c += 2)b.push(parseInt(a.substr(c, 2), 16));
                    return b
                }, bytesToBase64: function (b) {
                    for (var c = [], d = 0; d < b.length; d += 3)for (var e = b[d] << 16 | b[d + 1] << 8 | b[d + 2], f = 0; f < 4; f++)8 * d + 6 * f <= 8 * b.length ? c.push(a.charAt(e >>> 6 * (3 - f) & 63)) : c.push("=");
                    return c.join("")
                }, base64ToBytes: function (b) {
                    b = b.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var c = [], d = 0, e = 0; d < b.length; e = ++d % 4)0 != e && c.push((a.indexOf(b.charAt(d - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | a.indexOf(b.charAt(d)) >>> 6 - 2 * e);
                    return c
                }
            };
            b.exports = c
        }()
    }, {}], 34: [function (a, b, c) {
        b.exports = function (a) {
            return !(null == a || !a.constructor || "function" != typeof a.constructor.isBuffer || !a.constructor.isBuffer(a))
        }
    }, {}], 35: [function (a, b, c) {
        !function (a, d) {
            "object" == typeof c && "undefined" != typeof b ? b.exports = d() : "function" == typeof define && define.amd ? define(d) : a.moment = d()
        }(this, function () {
            "use strict";
            function c() {
                return Jc.apply(null, arguments)
            }

            function d(a) {
                Jc = a
            }

            function e(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function f(a) {
                return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
            }

            function g(a, b) {
                var c, d = [];
                for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
                return d
            }

            function h(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function i(a, b) {
                for (var c in b)h(b, c) && (a[c] = b[c]);
                return h(b, "toString") && (a.toString = b.toString), h(b, "valueOf") && (a.valueOf = b.valueOf), a
            }

            function j(a, b, c, d) {
                return Ea(a, b, c, d, !0).utc()
            }

            function k() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function l(a) {
                return null == a._pf && (a._pf = k()), a._pf
            }

            function m(a) {
                if (null == a._isValid) {
                    var b = l(a);
                    a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
                }
                return a._isValid
            }

            function n(a) {
                var b = j(NaN);
                return null != a ? i(l(b), a) : l(b).userInvalidated = !0, b
            }

            function o(a, b) {
                var c, d, e;
                if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = l(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Lc.length > 0)for (c in Lc)d = Lc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
                return a
            }

            function p(a) {
                o(this, a), this._d = new Date(null != a._d ? a._d.getTime() : NaN), Mc === !1 && (Mc = !0, c.updateOffset(this), Mc = !1)
            }

            function q(a) {
                return a instanceof p || null != a && null != a._isAMomentObject
            }

            function r(a) {
                return a < 0 ? Math.ceil(a) : Math.floor(a)
            }

            function s(a) {
                var b = +a, c = 0;
                return 0 !== b && isFinite(b) && (c = r(b)), c
            }

            function t(a, b, c) {
                var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
                for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && s(a[d]) !== s(b[d])) && g++;
                return g + f
            }

            function u() {
            }

            function v(a) {
                return a ? a.toLowerCase().replace("_", "-") : a
            }

            function w(a) {
                for (var b, c, d, e, f = 0; f < a.length;) {
                    for (e = v(a[f]).split("-"), b = e.length, c = v(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                        if (d = x(e.slice(0, b).join("-")))return d;
                        if (c && c.length >= b && t(e, c, !0) >= b - 1)break;
                        b--
                    }
                    f++
                }
                return null
            }

            function x(c) {
                var d = null;
                if (!Nc[c] && "undefined" != typeof b && b && b.exports)try {
                    d = Kc._abbr, a("./locale/" + c), y(d)
                } catch (e) {
                }
                return Nc[c]
            }

            function y(a, b) {
                var c;
                return a && (c = "undefined" == typeof b ? A(a) : z(a, b), c && (Kc = c)), Kc._abbr
            }

            function z(a, b) {
                return null !== b ? (b.abbr = a, Nc[a] = Nc[a] || new u, Nc[a].set(b), y(a), Nc[a]) : (delete Nc[a], null)
            }

            function A(a) {
                var b;
                if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return Kc;
                if (!e(a)) {
                    if (b = x(a))return b;
                    a = [a]
                }
                return w(a)
            }

            function B(a, b) {
                var c = a.toLowerCase();
                Oc[c] = Oc[c + "s"] = Oc[b] = a
            }

            function C(a) {
                return "string" == typeof a ? Oc[a] || Oc[a.toLowerCase()] : void 0
            }

            function D(a) {
                var b, c, d = {};
                for (c in a)h(a, c) && (b = C(c), b && (d[b] = a[c]));
                return d
            }

            function E(a, b) {
                return function (d) {
                    return null != d ? (G(this, a, d), c.updateOffset(this, b), this) : F(this, a)
                }
            }

            function F(a, b) {
                return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
            }

            function G(a, b, c) {
                return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
            }

            function H(a, b) {
                var c;
                if ("object" == typeof a)for (c in a)this.set(c, a[c]); else if (a = C(a), "function" == typeof this[a])return this[a](b);
                return this
            }

            function I(a, b, c) {
                var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
                return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
            }

            function J(a, b, c, d) {
                var e = d;
                "string" == typeof d && (e = function () {
                    return this[d]()
                }), a && (Sc[a] = e), b && (Sc[b[0]] = function () {
                    return I(e.apply(this, arguments), b[1], b[2])
                }), c && (Sc[c] = function () {
                    return this.localeData().ordinal(e.apply(this, arguments), a)
                })
            }

            function K(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
            }

            function L(a) {
                var b, c, d = a.match(Pc);
                for (b = 0, c = d.length; b < c; b++)Sc[d[b]] ? d[b] = Sc[d[b]] : d[b] = K(d[b]);
                return function (e) {
                    var f = "";
                    for (b = 0; b < c; b++)f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                    return f
                }
            }

            function M(a, b) {
                return a.isValid() ? (b = N(b, a.localeData()), Rc[b] = Rc[b] || L(b), Rc[b](a)) : a.localeData().invalidDate()
            }

            function N(a, b) {
                function c(a) {
                    return b.longDateFormat(a) || a
                }

                var d = 5;
                for (Qc.lastIndex = 0; d >= 0 && Qc.test(a);)a = a.replace(Qc, c), Qc.lastIndex = 0, d -= 1;
                return a
            }

            function O(a) {
                return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
            }

            function P(a, b, c) {
                fd[a] = O(b) ? b : function (a) {
                    return a && c ? c : b
                }
            }

            function Q(a, b) {
                return h(fd, a) ? fd[a](b._strict, b._locale) : new RegExp(R(a))
            }

            function R(a) {
                return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                    return b || c || d || e
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function S(a, b) {
                var c, d = b;
                for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
                    c[b] = s(a)
                }), c = 0; c < a.length; c++)gd[a[c]] = d
            }

            function T(a, b) {
                S(a, function (a, c, d, e) {
                    d._w = d._w || {}, b(a, d._w, d, e)
                })
            }

            function U(a, b, c) {
                null != b && h(gd, a) && gd[a](b, c._a, c, a)
            }

            function V(a, b) {
                return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
            }

            function W(a) {
                return this._months[a.month()]
            }

            function X(a) {
                return this._monthsShort[a.month()]
            }

            function Y(a, b, c) {
                var d, e, f;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
                    if (e = j([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a))return d;
                    if (!c && this._monthsParse[d].test(a))return d
                }
            }

            function Z(a, b) {
                var c;
                return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
            }

            function $(a) {
                return null != a ? (Z(this, a), c.updateOffset(this, !0), this) : F(this, "Month")
            }

            function _() {
                return V(this.year(), this.month())
            }

            function aa(a) {
                var b, c = a._a;
                return c && l(a).overflow === -2 && (b = c[id] < 0 || c[id] > 11 ? id : c[jd] < 1 || c[jd] > V(c[hd], c[id]) ? jd : c[kd] < 0 || c[kd] > 24 || 24 === c[kd] && (0 !== c[ld] || 0 !== c[md] || 0 !== c[nd]) ? kd : c[ld] < 0 || c[ld] > 59 ? ld : c[md] < 0 || c[md] > 59 ? md : c[nd] < 0 || c[nd] > 999 ? nd : -1, l(a)._overflowDayOfYear && (b < hd || b > jd) && (b = jd), l(a).overflow = b), a
            }

            function ba(a) {
                c.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
            }

            function ca(a, b) {
                var c = !0;
                return i(function () {
                    return c && (ba(a + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
                }, b)
            }

            function da(a, b) {
                qd[a] || (ba(b), qd[a] = !0)
            }

            function ea(a) {
                var b, c, d = a._i, e = rd.exec(d);
                if (e) {
                    for (l(a).iso = !0, b = 0, c = sd.length; b < c; b++)if (sd[b][1].exec(d)) {
                        a._f = sd[b][0];
                        break
                    }
                    for (b = 0, c = td.length; b < c; b++)if (td[b][1].exec(d)) {
                        a._f += (e[6] || " ") + td[b][0];
                        break
                    }
                    d.match(cd) && (a._f += "Z"), xa(a)
                } else a._isValid = !1
            }

            function fa(a) {
                var b = ud.exec(a._i);
                return null !== b ? void(a._d = new Date((+b[1]))) : (ea(a), void(a._isValid === !1 && (delete a._isValid, c.createFromInputFallback(a))))
            }

            function ga(a, b, c, d, e, f, g) {
                var h = new Date(a, b, c, d, e, f, g);
                return a < 1970 && h.setFullYear(a), h
            }

            function ha(a) {
                var b = new Date(Date.UTC.apply(null, arguments));
                return a < 1970 && b.setUTCFullYear(a), b
            }

            function ia(a) {
                return ja(a) ? 366 : 365
            }

            function ja(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            }

            function ka() {
                return ja(this.year())
            }

            function la(a, b, c) {
                var d, e = c - b, f = c - a.day();
                return f > e && (f -= 7), f < e - 7 && (f += 7), d = Fa(a).add(f, "d"), {
                    week: Math.ceil(d.dayOfYear() / 7),
                    year: d.year()
                }
            }

            function ma(a) {
                return la(a, this._week.dow, this._week.doy).week
            }

            function na() {
                return this._week.dow
            }

            function oa() {
                return this._week.doy
            }

            function pa(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function qa(a) {
                var b = la(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function ra(a, b, c, d, e) {
                var f, g = 6 + e - d, h = ha(a, 0, 1 + g), i = h.getUTCDay();
                return i < e && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
                    year: f > 0 ? a : a - 1,
                    dayOfYear: f > 0 ? f : ia(a - 1) + f
                }
            }

            function sa(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            }

            function ta(a, b, c) {
                return null != a ? a : null != b ? b : c
            }

            function ua(a) {
                var b = new Date;
                return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
            }

            function va(a) {
                var b, c, d, e, f = [];
                if (!a._d) {
                    for (d = ua(a), a._w && null == a._a[jd] && null == a._a[id] && wa(a), a._dayOfYear && (e = ta(a._a[hd], d[hd]), a._dayOfYear > ia(e) && (l(a)._overflowDayOfYear = !0), c = ha(e, 0, a._dayOfYear), a._a[id] = c.getUTCMonth(), a._a[jd] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b)a._a[b] = f[b] = d[b];
                    for (; b < 7; b++)a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                    24 === a._a[kd] && 0 === a._a[ld] && 0 === a._a[md] && 0 === a._a[nd] && (a._nextDay = !0, a._a[kd] = 0), a._d = (a._useUTC ? ha : ga).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[kd] = 24)
                }
            }

            function wa(a) {
                var b, c, d, e, f, g, h;
                b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ta(b.GG, a._a[hd], la(Fa(), 1, 4).year), d = ta(b.W, 1), e = ta(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ta(b.gg, a._a[hd], la(Fa(), f, g).year), d = ta(b.w, 1), null != b.d ? (e = b.d, e < f && ++d) : e = null != b.e ? b.e + f : f), h = ra(c, d, e, g, f), a._a[hd] = h.year, a._dayOfYear = h.dayOfYear
            }

            function xa(a) {
                if (a._f === c.ISO_8601)return void ea(a);
                a._a = [], l(a).empty = !0;
                var b, d, e, f, g, h = "" + a._i, i = h.length, j = 0;
                for (e = N(a._f, a._locale).match(Pc) || [], b = 0; b < e.length; b++)f = e[b], d = (h.match(Q(f, a)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && l(a).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Sc[f] ? (d ? l(a).empty = !1 : l(a).unusedTokens.push(f), U(f, d, a)) : a._strict && !d && l(a).unusedTokens.push(f);
                l(a).charsLeftOver = i - j, h.length > 0 && l(a).unusedInput.push(h), l(a).bigHour === !0 && a._a[kd] <= 12 && a._a[kd] > 0 && (l(a).bigHour = void 0), a._a[kd] = ya(a._locale, a._a[kd], a._meridiem), va(a), aa(a)
            }

            function ya(a, b, c) {
                var d;
                return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
            }

            function za(a) {
                var b, c, d, e, f;
                if (0 === a._f.length)return l(a).invalidFormat = !0, void(a._d = new Date(NaN));
                for (e = 0; e < a._f.length; e++)f = 0, b = o({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], xa(b), m(b) && (f += l(b).charsLeftOver, f += 10 * l(b).unusedTokens.length, l(b).score = f, (null == d || f < d) && (d = f, c = b));
                i(a, c || b)
            }

            function Aa(a) {
                if (!a._d) {
                    var b = D(a._i);
                    a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], va(a)
                }
            }

            function Ba(a) {
                var b = new p(aa(Ca(a)));
                return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
            }

            function Ca(a) {
                var b = a._i, c = a._f;
                return a._locale = a._locale || A(a._l), null === b || void 0 === c && "" === b ? n({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), q(b) ? new p(aa(b)) : (e(c) ? za(a) : c ? xa(a) : f(b) ? a._d = b : Da(a), a))
            }

            function Da(a) {
                var b = a._i;
                void 0 === b ? a._d = new Date : f(b) ? a._d = new Date((+b)) : "string" == typeof b ? fa(a) : e(b) ? (a._a = g(b.slice(0), function (a) {
                    return parseInt(a, 10)
                }), va(a)) : "object" == typeof b ? Aa(a) : "number" == typeof b ? a._d = new Date(b) : c.createFromInputFallback(a)
            }

            function Ea(a, b, c, d, e) {
                var f = {};
                return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Ba(f)
            }

            function Fa(a, b, c, d) {
                return Ea(a, b, c, d, !1)
            }

            function Ga(a, b) {
                var c, d;
                if (1 === b.length && e(b[0]) && (b = b[0]), !b.length)return Fa();
                for (c = b[0], d = 1; d < b.length; ++d)b[d].isValid() && !b[d][a](c) || (c = b[d]);
                return c
            }

            function Ha() {
                var a = [].slice.call(arguments, 0);
                return Ga("isBefore", a)
            }

            function Ia() {
                var a = [].slice.call(arguments, 0);
                return Ga("isAfter", a)
            }

            function Ja(a) {
                var b = D(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
                this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = A(), this._bubble()
            }

            function Ka(a) {
                return a instanceof Ja
            }

            function La(a, b) {
                J(a, 0, 0, function () {
                    var a = this.utcOffset(), c = "+";
                    return a < 0 && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
                })
            }

            function Ma(a) {
                var b = (a || "").match(cd) || [], c = b[b.length - 1] || [], d = (c + "").match(zd) || ["-", 0, 0], e = +(60 * d[1]) + s(d[2]);
                return "+" === d[0] ? e : -e
            }

            function Na(a, b) {
                var d, e;
                return b._isUTC ? (d = b.clone(), e = (q(a) || f(a) ? +a : +Fa(a)) - +d, d._d.setTime(+d._d + e), c.updateOffset(d, !1), d) : Fa(a).local()
            }

            function Oa(a) {
                return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
            }

            function Pa(a, b) {
                var d, e = this._offset || 0;
                return null != a ? ("string" == typeof a && (a = Ma(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (d = Oa(this)), this._offset = a, this._isUTC = !0, null != d && this.add(d, "m"), e !== a && (!b || this._changeInProgress ? db(this, $a(a - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Oa(this)
            }

            function Qa(a, b) {
                return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            }

            function Ra(a) {
                return this.utcOffset(0, a)
            }

            function Sa(a) {
                return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Oa(this), "m")), this
            }

            function Ta() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ma(this._i)), this
            }

            function Ua(a) {
                return a = a ? Fa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
            }

            function Va() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Wa() {
                if ("undefined" != typeof this._isDSTShifted)return this._isDSTShifted;
                var a = {};
                if (o(a, this), a = Ca(a), a._a) {
                    var b = a._isUTC ? j(a._a) : Fa(a._a);
                    this._isDSTShifted = this.isValid() && t(a._a, b.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Xa() {
                return !this._isUTC
            }

            function Ya() {
                return this._isUTC
            }

            function Za() {
                return this._isUTC && 0 === this._offset
            }

            function $a(a, b) {
                var c, d, e, f = a, g = null;
                return Ka(a) ? f = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Ad.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: 0,
                    d: s(g[jd]) * c,
                    h: s(g[kd]) * c,
                    m: s(g[ld]) * c,
                    s: s(g[md]) * c,
                    ms: s(g[nd]) * c
                }) : (g = Bd.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: _a(g[2], c),
                    M: _a(g[3], c),
                    d: _a(g[4], c),
                    h: _a(g[5], c),
                    m: _a(g[6], c),
                    s: _a(g[7], c),
                    w: _a(g[8], c)
                }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = bb(Fa(f.from), Fa(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ja(f), Ka(a) && h(a, "_locale") && (d._locale = a._locale), d
            }

            function _a(a, b) {
                var c = a && parseFloat(a.replace(",", "."));
                return (isNaN(c) ? 0 : c) * b
            }

            function ab(a, b) {
                var c = {milliseconds: 0, months: 0};
                return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
            }

            function bb(a, b) {
                var c;
                return b = Na(b, a), a.isBefore(b) ? c = ab(a, b) : (c = ab(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
            }

            function cb(a, b) {
                return function (c, d) {
                    var e, f;
                    return null === d || isNaN(+d) || (da(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = $a(c, d), db(this, e, a), this
                }
            }

            function db(a, b, d, e) {
                var f = b._milliseconds, g = b._days, h = b._months;
                e = null == e || e, f && a._d.setTime(+a._d + f * d), g && G(a, "Date", F(a, "Date") + g * d), h && Z(a, F(a, "Month") + h * d), e && c.updateOffset(a, g || h)
            }

            function eb(a, b) {
                var c = a || Fa(), d = Na(c, this).startOf("day"), e = this.diff(d, "days", !0), f = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
                return this.format(b && b[f] || this.localeData().calendar(f, this, Fa(c)))
            }

            function fb() {
                return new p(this)
            }

            function gb(a, b) {
                var c;
                return b = C("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = q(a) ? a : Fa(a), +this > +a) : (c = q(a) ? +a : +Fa(a), c < +this.clone().startOf(b))
            }

            function hb(a, b) {
                var c;
                return b = C("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = q(a) ? a : Fa(a), +this < +a) : (c = q(a) ? +a : +Fa(a), +this.clone().endOf(b) < c)
            }

            function ib(a, b, c) {
                return this.isAfter(a, c) && this.isBefore(b, c)
            }

            function jb(a, b) {
                var c;
                return b = C(b || "millisecond"), "millisecond" === b ? (a = q(a) ? a : Fa(a), +this === +a) : (c = +Fa(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
            }

            function kb(a, b, c) {
                var d, e, f = Na(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset());
                return b = C(b), "year" === b || "month" === b || "quarter" === b ? (e = lb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : r(e)
            }

            function lb(a, b) {
                var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
                return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
            }

            function mb() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function nb() {
                var a = this.clone().utc();
                return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function ob(a) {
                var b = M(this, a || c.defaultFormat);
                return this.localeData().postformat(b)
            }

            function pb(a, b) {
                return this.isValid() ? $a({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function qb(a) {
                return this.from(Fa(), a)
            }

            function rb(a, b) {
                return this.isValid() ? $a({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function sb(a) {
                return this.to(Fa(), a)
            }

            function tb(a) {
                var b;
                return void 0 === a ? this._locale._abbr : (b = A(a), null != b && (this._locale = b), this)
            }

            function ub() {
                return this._locale
            }

            function vb(a) {
                switch (a = C(a)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function wb(a) {
                return a = C(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
            }

            function xb() {
                return +this._d - 6e4 * (this._offset || 0)
            }

            function yb() {
                return Math.floor(+this / 1e3)
            }

            function zb() {
                return this._offset ? new Date((+this)) : this._d
            }

            function Ab() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
            }

            function Bb() {
                var a = this;
                return {
                    years: a.year(),
                    months: a.month(),
                    date: a.date(),
                    hours: a.hours(),
                    minutes: a.minutes(),
                    seconds: a.seconds(),
                    milliseconds: a.milliseconds()
                }
            }

            function Cb() {
                return m(this)
            }

            function Db() {
                return i({}, l(this))
            }

            function Eb() {
                return l(this).overflow
            }

            function Fb(a, b) {
                J(0, [a, a.length], 0, b)
            }

            function Gb(a, b, c) {
                return la(Fa([a, 11, 31 + b - c]), b, c).week
            }

            function Hb(a) {
                var b = la(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == a ? b : this.add(a - b, "y")
            }

            function Ib(a) {
                var b = la(this, 1, 4).year;
                return null == a ? b : this.add(a - b, "y")
            }

            function Jb() {
                return Gb(this.year(), 1, 4)
            }

            function Kb() {
                var a = this.localeData()._week;
                return Gb(this.year(), a.dow, a.doy)
            }

            function Lb(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            }

            function Mb(a, b) {
                return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
            }

            function Nb(a) {
                return this._weekdays[a.day()]
            }

            function Ob(a) {
                return this._weekdaysShort[a.day()]
            }

            function Pb(a) {
                return this._weekdaysMin[a.day()]
            }

            function Qb(a) {
                var b, c, d;
                for (this._weekdaysParse = this._weekdaysParse || [], b = 0; b < 7; b++)if (this._weekdaysParse[b] || (c = Fa([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
            }

            function Rb(a) {
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = Mb(a, this.localeData()), this.add(a - b, "d")) : b
            }

            function Sb(a) {
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            }

            function Tb(a) {
                return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
            }

            function Ub(a, b) {
                J(a, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }

            function Vb(a, b) {
                return b._meridiemParse
            }

            function Wb(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            }

            function Xb(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            }

            function Yb(a, b) {
                b[nd] = s(1e3 * ("0." + a))
            }

            function Zb() {
                return this._isUTC ? "UTC" : ""
            }

            function $b() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function _b(a) {
                return Fa(1e3 * a)
            }

            function ac() {
                return Fa.apply(null, arguments).parseZone()
            }

            function bc(a, b, c) {
                var d = this._calendar[a];
                return "function" == typeof d ? d.call(b, c) : d
            }

            function cc(a) {
                var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
                return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
                    return a.slice(1)
                }), this._longDateFormat[a])
            }

            function dc() {
                return this._invalidDate
            }

            function ec(a) {
                return this._ordinal.replace("%d", a)
            }

            function fc(a) {
                return a
            }

            function gc(a, b, c, d) {
                var e = this._relativeTime[c];
                return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
            }

            function hc(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
            }

            function ic(a) {
                var b, c;
                for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function jc(a, b, c, d) {
                var e = A(), f = j().set(d, b);
                return e[c](f, a)
            }

            function kc(a, b, c, d, e) {
                if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b)return jc(a, b, c, e);
                var f, g = [];
                for (f = 0; f < d; f++)g[f] = jc(a, f, c, e);
                return g
            }

            function lc(a, b) {
                return kc(a, b, "months", 12, "month")
            }

            function mc(a, b) {
                return kc(a, b, "monthsShort", 12, "month")
            }

            function nc(a, b) {
                return kc(a, b, "weekdays", 7, "day")
            }

            function oc(a, b) {
                return kc(a, b, "weekdaysShort", 7, "day")
            }

            function pc(a, b) {
                return kc(a, b, "weekdaysMin", 7, "day")
            }

            function qc() {
                var a = this._data;
                return this._milliseconds = Yd(this._milliseconds), this._days = Yd(this._days), this._months = Yd(this._months), a.milliseconds = Yd(a.milliseconds), a.seconds = Yd(a.seconds), a.minutes = Yd(a.minutes), a.hours = Yd(a.hours), a.months = Yd(a.months), a.years = Yd(a.years), this
            }

            function rc(a, b, c, d) {
                var e = $a(b, c);
                return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
            }

            function sc(a, b) {
                return rc(this, a, b, 1)
            }

            function tc(a, b) {
                return rc(this, a, b, -1)
            }

            function uc(a) {
                return a < 0 ? Math.floor(a) : Math.ceil(a)
            }

            function vc() {
                var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
                return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * uc(xc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = r(f / 1e3), i.seconds = a % 60, b = r(a / 60), i.minutes = b % 60, c = r(b / 60), i.hours = c % 24, g += r(c / 24), e = r(wc(g)), h += e, g -= uc(xc(e)), d = r(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
            }

            function wc(a) {
                return 4800 * a / 146097
            }

            function xc(a) {
                return 146097 * a / 4800
            }

            function yc(a) {
                var b, c, d = this._milliseconds;
                if (a = C(a), "month" === a || "year" === a)return b = this._days + d / 864e5, c = this._months + wc(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(xc(this._months)), a) {
                    case"week":
                        return b / 7 + d / 6048e5;
                    case"day":
                        return b + d / 864e5;
                    case"hour":
                        return 24 * b + d / 36e5;
                    case"minute":
                        return 1440 * b + d / 6e4;
                    case"second":
                        return 86400 * b + d / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * b) + d;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            }

            function zc() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * s(this._months / 12)
            }

            function Ac(a) {
                return function () {
                    return this.as(a)
                }
            }

            function Bc(a) {
                return a = C(a), this[a + "s"]()
            }

            function Cc(a) {
                return function () {
                    return this._data[a]
                }
            }

            function Dc() {
                return r(this.days() / 7)
            }

            function Ec(a, b, c, d, e) {
                return e.relativeTime(b || 1, !!c, a, d)
            }

            function Fc(a, b, c) {
                var d = $a(a).abs(), e = me(d.as("s")), f = me(d.as("m")), g = me(d.as("h")), h = me(d.as("d")), i = me(d.as("M")), j = me(d.as("y")), k = e < ne.s && ["s", e] || 1 === f && ["m"] || f < ne.m && ["mm", f] || 1 === g && ["h"] || g < ne.h && ["hh", g] || 1 === h && ["d"] || h < ne.d && ["dd", h] || 1 === i && ["M"] || i < ne.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
                return k[2] = b, k[3] = +a > 0, k[4] = c, Ec.apply(null, k)
            }

            function Gc(a, b) {
                return void 0 !== ne[a] && (void 0 === b ? ne[a] : (ne[a] = b, !0))
            }

            function Hc(a) {
                var b = this.localeData(), c = Fc(this, !a, b);
                return a && (c = b.pastFuture(+this, c)), b.postformat(c)
            }

            function Ic() {
                var a, b, c, d = oe(this._milliseconds) / 1e3, e = oe(this._days), f = oe(this._months);
                a = r(d / 60), b = r(a / 60), d %= 60, a %= 60, c = r(f / 12), f %= 12;
                var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
                return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
            }

            var Jc, Kc, Lc = c.momentProperties = [], Mc = !1, Nc = {}, Oc = {}, Pc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Qc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rc = {}, Sc = {}, Tc = /\d/, Uc = /\d\d/, Vc = /\d{3}/, Wc = /\d{4}/, Xc = /[+-]?\d{6}/, Yc = /\d\d?/, Zc = /\d{1,3}/, $c = /\d{1,4}/, _c = /[+-]?\d{1,6}/, ad = /\d+/, bd = /[+-]?\d+/, cd = /Z|[+-]\d\d:?\d\d/gi, dd = /[+-]?\d+(\.\d{1,3})?/, ed = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, fd = {}, gd = {}, hd = 0, id = 1, jd = 2, kd = 3, ld = 4, md = 5, nd = 6;
            J("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), J("MMM", 0, 0, function (a) {
                return this.localeData().monthsShort(this, a)
            }), J("MMMM", 0, 0, function (a) {
                return this.localeData().months(this, a)
            }), B("month", "M"), P("M", Yc), P("MM", Yc, Uc), P("MMM", ed), P("MMMM", ed), S(["M", "MM"], function (a, b) {
                b[id] = s(a) - 1
            }), S(["MMM", "MMMM"], function (a, b, c, d) {
                var e = c._locale.monthsParse(a, d, c._strict);
                null != e ? b[id] = e : l(c).invalidMonth = a
            });
            var od = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), pd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), qd = {};
            c.suppressDeprecationWarnings = !1;
            var rd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], td = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], ud = /^\/?Date\((\-?\d+)/i;
            c.createFromInputFallback = ca("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            }), J(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), B("year", "y"), P("Y", bd), P("YY", Yc, Uc), P("YYYY", $c, Wc), P("YYYYY", _c, Xc), P("YYYYYY", _c, Xc), S(["YYYYY", "YYYYYY"], hd), S("YYYY", function (a, b) {
                b[hd] = 2 === a.length ? c.parseTwoDigitYear(a) : s(a)
            }), S("YY", function (a, b) {
                b[hd] = c.parseTwoDigitYear(a)
            }), c.parseTwoDigitYear = function (a) {
                return s(a) + (s(a) > 68 ? 1900 : 2e3)
            };
            var vd = E("FullYear", !1);
            J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), B("week", "w"), B("isoWeek", "W"), P("w", Yc), P("ww", Yc, Uc), P("W", Yc), P("WW", Yc, Uc), T(["w", "ww", "W", "WW"], function (a, b, c, d) {
                b[d.substr(0, 1)] = s(a)
            });
            var wd = {dow: 0, doy: 6};
            J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), B("dayOfYear", "DDD"), P("DDD", Zc), P("DDDD", Vc), S(["DDD", "DDDD"], function (a, b, c) {
                c._dayOfYear = s(a)
            }), c.ISO_8601 = function () {
            };
            var xd = ca("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Fa.apply(null, arguments);
                return a < this ? this : a
            }), yd = ca("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Fa.apply(null, arguments);
                return a > this ? this : a
            });
            La("Z", ":"), La("ZZ", ""), P("Z", cd), P("ZZ", cd), S(["Z", "ZZ"], function (a, b, c) {
                c._useUTC = !0, c._tzm = Ma(a)
            });
            var zd = /([\+\-]|\d\d)/gi;
            c.updateOffset = function () {
            };
            var Ad = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Bd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
            $a.fn = Ja.prototype;
            var Cd = cb(1, "add"), Dd = cb(-1, "subtract");
            c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            var Ed = ca("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
                return void 0 === a ? this.localeData() : this.locale(a)
            });
            J(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), J(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Fb("gggg", "weekYear"), Fb("ggggg", "weekYear"), Fb("GGGG", "isoWeekYear"), Fb("GGGGG", "isoWeekYear"), B("weekYear", "gg"), B("isoWeekYear", "GG"), P("G", bd), P("g", bd), P("GG", Yc, Uc), P("gg", Yc, Uc), P("GGGG", $c, Wc), P("gggg", $c, Wc), P("GGGGG", _c, Xc), P("ggggg", _c, Xc), T(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
                b[d.substr(0, 2)] = s(a)
            }), T(["gg", "GG"], function (a, b, d, e) {
                b[e] = c.parseTwoDigitYear(a)
            }), J("Q", 0, 0, "quarter"), B("quarter", "Q"), P("Q", Tc), S("Q", function (a, b) {
                b[id] = 3 * (s(a) - 1)
            }), J("D", ["DD", 2], "Do", "date"), B("date", "D"), P("D", Yc), P("DD", Yc, Uc), P("Do", function (a, b) {
                return a ? b._ordinalParse : b._ordinalParseLenient
            }), S(["D", "DD"], jd), S("Do", function (a, b) {
                b[jd] = s(a.match(Yc)[0], 10)
            });
            var Fd = E("Date", !0);
            J("d", 0, "do", "day"), J("dd", 0, 0, function (a) {
                return this.localeData().weekdaysMin(this, a)
            }), J("ddd", 0, 0, function (a) {
                return this.localeData().weekdaysShort(this, a)
            }), J("dddd", 0, 0, function (a) {
                return this.localeData().weekdays(this, a)
            }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), B("day", "d"), B("weekday", "e"), B("isoWeekday", "E"), P("d", Yc), P("e", Yc), P("E", Yc), P("dd", ed), P("ddd", ed), P("dddd", ed), T(["dd", "ddd", "dddd"], function (a, b, c) {
                var d = c._locale.weekdaysParse(a);
                null != d ? b.d = d : l(c).invalidWeekday = a
            }), T(["d", "e", "E"], function (a, b, c, d) {
                b[d] = s(a)
            });
            var Gd = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Hd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Id = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, function () {
                return this.hours() % 12 || 12
            }), Ub("a", !0), Ub("A", !1), B("hour", "h"), P("a", Vb), P("A", Vb), P("H", Yc), P("h", Yc), P("HH", Yc, Uc), P("hh", Yc, Uc), S(["H", "HH"], kd), S(["a", "A"], function (a, b, c) {
                c._isPm = c._locale.isPM(a), c._meridiem = a
            }), S(["h", "hh"], function (a, b, c) {
                b[kd] = s(a), l(c).bigHour = !0
            });
            var Jd = /[ap]\.?m?\.?/i, Kd = E("Hours", !0);
            J("m", ["mm", 2], 0, "minute"), B("minute", "m"), P("m", Yc), P("mm", Yc, Uc), S(["m", "mm"], ld);
            var Ld = E("Minutes", !1);
            J("s", ["ss", 2], 0, "second"), B("second", "s"), P("s", Yc), P("ss", Yc, Uc), S(["s", "ss"], md);
            var Md = E("Seconds", !1);
            J("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), J(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), J(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), J(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), J(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), J(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), J(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), B("millisecond", "ms"), P("S", Zc, Tc), P("SS", Zc, Uc), P("SSS", Zc, Vc);
            var Nd;
            for (Nd = "SSSS"; Nd.length <= 9; Nd += "S")P(Nd, ad);
            for (Nd = "S"; Nd.length <= 9; Nd += "S")S(Nd, Yb);
            var Od = E("Milliseconds", !1);
            J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
            var Pd = p.prototype;
            Pd.add = Cd, Pd.calendar = eb, Pd.clone = fb, Pd.diff = kb, Pd.endOf = wb, Pd.format = ob, Pd.from = pb, Pd.fromNow = qb, Pd.to = rb, Pd.toNow = sb, Pd.get = H, Pd.invalidAt = Eb, Pd.isAfter = gb, Pd.isBefore = hb, Pd.isBetween = ib, Pd.isSame = jb, Pd.isValid = Cb, Pd.lang = Ed, Pd.locale = tb, Pd.localeData = ub, Pd.max = yd, Pd.min = xd, Pd.parsingFlags = Db, Pd.set = H, Pd.startOf = vb, Pd.subtract = Dd, Pd.toArray = Ab, Pd.toObject = Bb, Pd.toDate = zb, Pd.toISOString = nb, Pd.toJSON = nb, Pd.toString = mb, Pd.unix = yb, Pd.valueOf = xb, Pd.year = vd, Pd.isLeapYear = ka, Pd.weekYear = Hb, Pd.isoWeekYear = Ib, Pd.quarter = Pd.quarters = Lb, Pd.month = $, Pd.daysInMonth = _, Pd.week = Pd.weeks = pa, Pd.isoWeek = Pd.isoWeeks = qa,
                Pd.weeksInYear = Kb, Pd.isoWeeksInYear = Jb, Pd.date = Fd, Pd.day = Pd.days = Rb, Pd.weekday = Sb, Pd.isoWeekday = Tb, Pd.dayOfYear = sa, Pd.hour = Pd.hours = Kd, Pd.minute = Pd.minutes = Ld, Pd.second = Pd.seconds = Md, Pd.millisecond = Pd.milliseconds = Od, Pd.utcOffset = Pa, Pd.utc = Ra, Pd.local = Sa, Pd.parseZone = Ta, Pd.hasAlignedHourOffset = Ua, Pd.isDST = Va, Pd.isDSTShifted = Wa, Pd.isLocal = Xa, Pd.isUtcOffset = Ya, Pd.isUtc = Za, Pd.isUTC = Za, Pd.zoneAbbr = Zb, Pd.zoneName = $b, Pd.dates = ca("dates accessor is deprecated. Use date instead.", Fd), Pd.months = ca("months accessor is deprecated. Use month instead", $), Pd.years = ca("years accessor is deprecated. Use year instead", vd), Pd.zone = ca("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Qa);
            var Qd = Pd, Rd = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }, Sd = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }, Td = "Invalid date", Ud = "%d", Vd = /\d{1,2}/, Wd = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }, Xd = u.prototype;
            Xd._calendar = Rd, Xd.calendar = bc, Xd._longDateFormat = Sd, Xd.longDateFormat = cc, Xd._invalidDate = Td, Xd.invalidDate = dc, Xd._ordinal = Ud, Xd.ordinal = ec, Xd._ordinalParse = Vd, Xd.preparse = fc, Xd.postformat = fc, Xd._relativeTime = Wd, Xd.relativeTime = gc, Xd.pastFuture = hc, Xd.set = ic, Xd.months = W, Xd._months = od, Xd.monthsShort = X, Xd._monthsShort = pd, Xd.monthsParse = Y, Xd.week = ma, Xd._week = wd, Xd.firstDayOfYear = oa, Xd.firstDayOfWeek = na, Xd.weekdays = Nb, Xd._weekdays = Gd, Xd.weekdaysMin = Pb, Xd._weekdaysMin = Id, Xd.weekdaysShort = Ob, Xd._weekdaysShort = Hd, Xd.weekdaysParse = Qb, Xd.isPM = Wb, Xd._meridiemParse = Jd, Xd.meridiem = Xb, y("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (a) {
                    var b = a % 10, c = 1 === s(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            }), c.lang = ca("moment.lang is deprecated. Use moment.locale instead.", y), c.langData = ca("moment.langData is deprecated. Use moment.localeData instead.", A);
            var Yd = Math.abs, Zd = Ac("ms"), $d = Ac("s"), _d = Ac("m"), ae = Ac("h"), be = Ac("d"), ce = Ac("w"), de = Ac("M"), ee = Ac("y"), fe = Cc("milliseconds"), ge = Cc("seconds"), he = Cc("minutes"), ie = Cc("hours"), je = Cc("days"), ke = Cc("months"), le = Cc("years"), me = Math.round, ne = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, oe = Math.abs, pe = Ja.prototype;
            pe.abs = qc, pe.add = sc, pe.subtract = tc, pe.as = yc, pe.asMilliseconds = Zd, pe.asSeconds = $d, pe.asMinutes = _d, pe.asHours = ae, pe.asDays = be, pe.asWeeks = ce, pe.asMonths = de, pe.asYears = ee, pe.valueOf = zc, pe._bubble = vc, pe.get = Bc, pe.milliseconds = fe, pe.seconds = ge, pe.minutes = he, pe.hours = ie, pe.days = je, pe.weeks = Dc, pe.months = ke, pe.years = le, pe.humanize = Hc, pe.toISOString = Ic, pe.toString = Ic, pe.toJSON = Ic, pe.locale = tb, pe.localeData = ub, pe.toIsoString = ca("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ic), pe.lang = Ed, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), P("x", bd), P("X", dd), S("X", function (a, b, c) {
                c._d = new Date(1e3 * parseFloat(a, 10))
            }), S("x", function (a, b, c) {
                c._d = new Date(s(a))
            }), c.version = "2.10.6", d(Fa), c.fn = Qd, c.min = Ha, c.max = Ia, c.utc = j, c.unix = _b, c.months = lc, c.isDate = f, c.locale = y, c.invalid = n, c.duration = $a, c.isMoment = q, c.weekdays = nc, c.parseZone = ac, c.localeData = A, c.isDuration = Ka, c.monthsShort = mc, c.weekdaysMin = pc, c.defineLocale = z, c.weekdaysShort = oc, c.normalizeUnits = C, c.relativeTimeThreshold = Gc;
            var qe = c;
            return qe
        })
    }, {}], 36: [function (a, b, c) {
        function d() {
            m && k && (m = !1, k.length ? l = k.concat(l) : n = -1, l.length && e())
        }

        function e() {
            if (!m) {
                var a = h(d);
                m = !0;
                for (var b = l.length; b;) {
                    for (k = l, l = []; ++n < b;)k && k[n].run();
                    n = -1, b = l.length
                }
                k = null, m = !1, i(a)
            }
        }

        function f(a, b) {
            this.fun = a, this.array = b
        }

        function g() {
        }

        var h, i, j = b.exports = {};
        !function () {
            try {
                h = setTimeout
            } catch (a) {
                h = function () {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                i = clearTimeout
            } catch (a) {
                i = function () {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var k, l = [], m = !1, n = -1;
        j.nextTick = function (a) {
            var b = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
            l.push(new f(a, b)), 1 !== l.length || m || h(e, 0)
        }, f.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, j.title = "browser", j.browser = !0, j.env = {}, j.argv = [], j.version = "", j.versions = {}, j.on = g, j.addListener = g, j.once = g, j.off = g, j.removeListener = g, j.removeAllListeners = g, j.emit = g, j.binding = function (a) {
            throw new Error("process.binding is not supported")
        }, j.cwd = function () {
            return "/"
        }, j.chdir = function (a) {
            throw new Error("process.chdir is not supported")
        }, j.umask = function () {
            return 0
        }
    }, {}], 37: [function (a, b, c) {
        var d, e = "function" == typeof setImmediate;
        d = e ? function (a) {
            setImmediate(a)
        } : function (a) {
            setTimeout(a, 0)
        }, b.exports = d
    }, {}], 38: [function (a, b, c) {
        (function () {
            function a(a) {
                function b(b, c, d, e, f, g) {
                    for (; f >= 0 && f < g; f += a) {
                        var h = e ? e[f] : f;
                        d = c(d, b[h], h, b)
                    }
                    return d
                }

                return function (c, d, e, f) {
                    d = v(d, f, 4);
                    var g = !C(c) && u.keys(c), h = (g || c).length, i = a > 0 ? 0 : h - 1;
                    return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
                }
            }

            function d(a) {
                return function (b, c, d) {
                    c = w(c, d);
                    for (var e = B(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)if (c(b[f], f, b))return f;
                    return -1
                }
            }

            function e(a, b, c) {
                return function (d, e, f) {
                    var g = 0, h = B(d);
                    if ("number" == typeof f)a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1; else if (c && f && h)return f = c(d, e), d[f] === e ? f : -1;
                    if (e !== e)return f = b(m.call(d, g, h), u.isNaN), f >= 0 ? f + g : -1;
                    for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)if (d[f] === e)return f;
                    return -1
                }
            }

            function f(a, b) {
                var c = H.length, d = a.constructor, e = u.isFunction(d) && d.prototype || j, f = "constructor";
                for (u.has(a, f) && !u.contains(b, f) && b.push(f); c--;)f = H[c], f in a && a[f] !== e[f] && !u.contains(b, f) && b.push(f)
            }

            var g = this, h = g._, i = Array.prototype, j = Object.prototype, k = Function.prototype, l = i.push, m = i.slice, n = j.toString, o = j.hasOwnProperty, p = Array.isArray, q = Object.keys, r = k.bind, s = Object.create, t = function () {
            }, u = function (a) {
                return a instanceof u ? a : this instanceof u ? void(this._wrapped = a) : new u(a)
            };
            "undefined" != typeof c ? ("undefined" != typeof b && b.exports && (c = b.exports = u), c._ = u) : g._ = u, u.VERSION = "1.8.3";
            var v = function (a, b, c) {
                if (void 0 === b)return a;
                switch (null == c ? 3 : c) {
                    case 1:
                        return function (c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function (c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function (c, d, e) {
                            return a.call(b, c, d, e)
                        };
                    case 4:
                        return function (c, d, e, f) {
                            return a.call(b, c, d, e, f)
                        }
                }
                return function () {
                    return a.apply(b, arguments)
                }
            }, w = function (a, b, c) {
                return null == a ? u.identity : u.isFunction(a) ? v(a, b, c) : u.isObject(a) ? u.matcher(a) : u.property(a)
            };
            u.iteratee = function (a, b) {
                return w(a, b, 1 / 0)
            };
            var x = function (a, b) {
                return function (c) {
                    var d = arguments.length;
                    if (d < 2 || null == c)return c;
                    for (var e = 1; e < d; e++)for (var f = arguments[e], g = a(f), h = g.length, i = 0; i < h; i++) {
                        var j = g[i];
                        b && void 0 !== c[j] || (c[j] = f[j])
                    }
                    return c
                }
            }, y = function (a) {
                if (!u.isObject(a))return {};
                if (s)return s(a);
                t.prototype = a;
                var b = new t;
                return t.prototype = null, b
            }, z = function (a) {
                return function (b) {
                    return null == b ? void 0 : b[a]
                }
            }, A = Math.pow(2, 53) - 1, B = z("length"), C = function (a) {
                var b = B(a);
                return "number" == typeof b && b >= 0 && b <= A
            };
            u.each = u.forEach = function (a, b, c) {
                b = v(b, c);
                var d, e;
                if (C(a))for (d = 0, e = a.length; d < e; d++)b(a[d], d, a); else {
                    var f = u.keys(a);
                    for (d = 0, e = f.length; d < e; d++)b(a[f[d]], f[d], a)
                }
                return a
            }, u.map = u.collect = function (a, b, c) {
                b = w(b, c);
                for (var d = !C(a) && u.keys(a), e = (d || a).length, f = Array(e), g = 0; g < e; g++) {
                    var h = d ? d[g] : g;
                    f[g] = b(a[h], h, a)
                }
                return f
            }, u.reduce = u.foldl = u.inject = a(1), u.reduceRight = u.foldr = a(-1), u.find = u.detect = function (a, b, c) {
                var d;
                if (d = C(a) ? u.findIndex(a, b, c) : u.findKey(a, b, c), void 0 !== d && d !== -1)return a[d]
            }, u.filter = u.select = function (a, b, c) {
                var d = [];
                return b = w(b, c), u.each(a, function (a, c, e) {
                    b(a, c, e) && d.push(a)
                }), d
            }, u.reject = function (a, b, c) {
                return u.filter(a, u.negate(w(b)), c)
            }, u.every = u.all = function (a, b, c) {
                b = w(b, c);
                for (var d = !C(a) && u.keys(a), e = (d || a).length, f = 0; f < e; f++) {
                    var g = d ? d[f] : f;
                    if (!b(a[g], g, a))return !1
                }
                return !0
            }, u.some = u.any = function (a, b, c) {
                b = w(b, c);
                for (var d = !C(a) && u.keys(a), e = (d || a).length, f = 0; f < e; f++) {
                    var g = d ? d[f] : f;
                    if (b(a[g], g, a))return !0
                }
                return !1
            }, u.contains = u.includes = u.include = function (a, b, c, d) {
                return C(a) || (a = u.values(a)), ("number" != typeof c || d) && (c = 0), u.indexOf(a, b, c) >= 0
            }, u.invoke = function (a, b) {
                var c = m.call(arguments, 2), d = u.isFunction(b);
                return u.map(a, function (a) {
                    var e = d ? b : a[b];
                    return null == e ? e : e.apply(a, c)
                })
            }, u.pluck = function (a, b) {
                return u.map(a, u.property(b))
            }, u.where = function (a, b) {
                return u.filter(a, u.matcher(b))
            }, u.findWhere = function (a, b) {
                return u.find(a, u.matcher(b))
            }, u.max = function (a, b, c) {
                var d, e, f = -(1 / 0), g = -(1 / 0);
                if (null == b && null != a) {
                    a = C(a) ? a : u.values(a);
                    for (var h = 0, i = a.length; h < i; h++)d = a[h], d > f && (f = d)
                } else b = w(b, c), u.each(a, function (a, c, d) {
                    e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
                });
                return f
            }, u.min = function (a, b, c) {
                var d, e, f = 1 / 0, g = 1 / 0;
                if (null == b && null != a) {
                    a = C(a) ? a : u.values(a);
                    for (var h = 0, i = a.length; h < i; h++)d = a[h], d < f && (f = d)
                } else b = w(b, c), u.each(a, function (a, c, d) {
                    e = b(a, c, d), (e < g || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
                });
                return f
            }, u.shuffle = function (a) {
                for (var b, c = C(a) ? a : u.values(a), d = c.length, e = Array(d), f = 0; f < d; f++)b = u.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
                return e
            }, u.sample = function (a, b, c) {
                return null == b || c ? (C(a) || (a = u.values(a)), a[u.random(a.length - 1)]) : u.shuffle(a).slice(0, Math.max(0, b))
            }, u.sortBy = function (a, b, c) {
                return b = w(b, c), u.pluck(u.map(a, function (a, c, d) {
                    return {value: a, index: c, criteria: b(a, c, d)}
                }).sort(function (a, b) {
                    var c = a.criteria, d = b.criteria;
                    if (c !== d) {
                        if (c > d || void 0 === c)return 1;
                        if (c < d || void 0 === d)return -1
                    }
                    return a.index - b.index
                }), "value")
            };
            var D = function (a) {
                return function (b, c, d) {
                    var e = {};
                    return c = w(c, d), u.each(b, function (d, f) {
                        var g = c(d, f, b);
                        a(e, d, g)
                    }), e
                }
            };
            u.groupBy = D(function (a, b, c) {
                u.has(a, c) ? a[c].push(b) : a[c] = [b]
            }), u.indexBy = D(function (a, b, c) {
                a[c] = b
            }), u.countBy = D(function (a, b, c) {
                u.has(a, c) ? a[c]++ : a[c] = 1
            }), u.toArray = function (a) {
                return a ? u.isArray(a) ? m.call(a) : C(a) ? u.map(a, u.identity) : u.values(a) : []
            }, u.size = function (a) {
                return null == a ? 0 : C(a) ? a.length : u.keys(a).length
            }, u.partition = function (a, b, c) {
                b = w(b, c);
                var d = [], e = [];
                return u.each(a, function (a, c, f) {
                    (b(a, c, f) ? d : e).push(a)
                }), [d, e]
            }, u.first = u.head = u.take = function (a, b, c) {
                if (null != a)return null == b || c ? a[0] : u.initial(a, a.length - b)
            }, u.initial = function (a, b, c) {
                return m.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
            }, u.last = function (a, b, c) {
                if (null != a)return null == b || c ? a[a.length - 1] : u.rest(a, Math.max(0, a.length - b))
            }, u.rest = u.tail = u.drop = function (a, b, c) {
                return m.call(a, null == b || c ? 1 : b)
            }, u.compact = function (a) {
                return u.filter(a, u.identity)
            };
            var E = function (a, b, c, d) {
                for (var e = [], f = 0, g = d || 0, h = B(a); g < h; g++) {
                    var i = a[g];
                    if (C(i) && (u.isArray(i) || u.isArguments(i))) {
                        b || (i = E(i, b, c));
                        var j = 0, k = i.length;
                        for (e.length += k; j < k;)e[f++] = i[j++]
                    } else c || (e[f++] = i)
                }
                return e
            };
            u.flatten = function (a, b) {
                return E(a, b, !1)
            }, u.without = function (a) {
                return u.difference(a, m.call(arguments, 1))
            }, u.uniq = u.unique = function (a, b, c, d) {
                u.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = w(c, d));
                for (var e = [], f = [], g = 0, h = B(a); g < h; g++) {
                    var i = a[g], j = c ? c(i, g, a) : i;
                    b ? (g && f === j || e.push(i), f = j) : c ? u.contains(f, j) || (f.push(j), e.push(i)) : u.contains(e, i) || e.push(i)
                }
                return e
            }, u.union = function () {
                return u.uniq(E(arguments, !0, !0))
            }, u.intersection = function (a) {
                for (var b = [], c = arguments.length, d = 0, e = B(a); d < e; d++) {
                    var f = a[d];
                    if (!u.contains(b, f)) {
                        for (var g = 1; g < c && u.contains(arguments[g], f); g++);
                        g === c && b.push(f)
                    }
                }
                return b
            }, u.difference = function (a) {
                var b = E(arguments, !0, !0, 1);
                return u.filter(a, function (a) {
                    return !u.contains(b, a)
                })
            }, u.zip = function () {
                return u.unzip(arguments)
            }, u.unzip = function (a) {
                for (var b = a && u.max(a, B).length || 0, c = Array(b), d = 0; d < b; d++)c[d] = u.pluck(a, d);
                return c
            }, u.object = function (a, b) {
                for (var c = {}, d = 0, e = B(a); d < e; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
                return c
            }, u.findIndex = d(1), u.findLastIndex = d(-1), u.sortedIndex = function (a, b, c, d) {
                c = w(c, d, 1);
                for (var e = c(b), f = 0, g = B(a); f < g;) {
                    var h = Math.floor((f + g) / 2);
                    c(a[h]) < e ? f = h + 1 : g = h
                }
                return f
            }, u.indexOf = e(1, u.findIndex, u.sortedIndex), u.lastIndexOf = e(-1, u.findLastIndex), u.range = function (a, b, c) {
                null == b && (b = a || 0, a = 0), c = c || 1;
                for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; f < d; f++, a += c)e[f] = a;
                return e
            };
            var F = function (a, b, c, d, e) {
                if (!(d instanceof b))return a.apply(c, e);
                var f = y(a.prototype), g = a.apply(f, e);
                return u.isObject(g) ? g : f
            };
            u.bind = function (a, b) {
                if (r && a.bind === r)return r.apply(a, m.call(arguments, 1));
                if (!u.isFunction(a))throw new TypeError("Bind must be called on a function");
                var c = m.call(arguments, 2), d = function () {
                    return F(a, d, b, this, c.concat(m.call(arguments)))
                };
                return d
            }, u.partial = function (a) {
                var b = m.call(arguments, 1), c = function () {
                    for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++)f[g] = b[g] === u ? arguments[d++] : b[g];
                    for (; d < arguments.length;)f.push(arguments[d++]);
                    return F(a, c, this, this, f)
                };
                return c
            }, u.bindAll = function (a) {
                var b, c, d = arguments.length;
                if (d <= 1)throw new Error("bindAll must be passed function names");
                for (b = 1; b < d; b++)c = arguments[b], a[c] = u.bind(a[c], a);
                return a
            }, u.memoize = function (a, b) {
                var c = function (d) {
                    var e = c.cache, f = "" + (b ? b.apply(this, arguments) : d);
                    return u.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
                };
                return c.cache = {}, c
            }, u.delay = function (a, b) {
                var c = m.call(arguments, 2);
                return setTimeout(function () {
                    return a.apply(null, c)
                }, b)
            }, u.defer = u.partial(u.delay, u, 1), u.throttle = function (a, b, c) {
                var d, e, f, g = null, h = 0;
                c || (c = {});
                var i = function () {
                    h = c.leading === !1 ? 0 : u.now(), g = null, f = a.apply(d, e), g || (d = e = null)
                };
                return function () {
                    var j = u.now();
                    h || c.leading !== !1 || (h = j);
                    var k = b - (j - h);
                    return d = this, e = arguments, k <= 0 || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
                }
            }, u.debounce = function (a, b, c) {
                var d, e, f, g, h, i = function () {
                    var j = u.now() - g;
                    j < b && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
                };
                return function () {
                    f = this, e = arguments, g = u.now();
                    var j = c && !d;
                    return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
                }
            }, u.wrap = function (a, b) {
                return u.partial(b, a)
            }, u.negate = function (a) {
                return function () {
                    return !a.apply(this, arguments)
                }
            }, u.compose = function () {
                var a = arguments, b = a.length - 1;
                return function () {
                    for (var c = b, d = a[b].apply(this, arguments); c--;)d = a[c].call(this, d);
                    return d
                }
            }, u.after = function (a, b) {
                return function () {
                    if (--a < 1)return b.apply(this, arguments)
                }
            }, u.before = function (a, b) {
                var c;
                return function () {
                    return --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
                }
            }, u.once = u.partial(u.before, 2);
            var G = !{toString: null}.propertyIsEnumerable("toString"), H = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            u.keys = function (a) {
                if (!u.isObject(a))return [];
                if (q)return q(a);
                var b = [];
                for (var c in a)u.has(a, c) && b.push(c);
                return G && f(a, b), b
            }, u.allKeys = function (a) {
                if (!u.isObject(a))return [];
                var b = [];
                for (var c in a)b.push(c);
                return G && f(a, b), b
            }, u.values = function (a) {
                for (var b = u.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)d[e] = a[b[e]];
                return d
            }, u.mapObject = function (a, b, c) {
                b = w(b, c);
                for (var d, e = u.keys(a), f = e.length, g = {}, h = 0; h < f; h++)d = e[h], g[d] = b(a[d], d, a);
                return g
            }, u.pairs = function (a) {
                for (var b = u.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)d[e] = [b[e], a[b[e]]];
                return d
            }, u.invert = function (a) {
                for (var b = {}, c = u.keys(a), d = 0, e = c.length; d < e; d++)b[a[c[d]]] = c[d];
                return b
            }, u.functions = u.methods = function (a) {
                var b = [];
                for (var c in a)u.isFunction(a[c]) && b.push(c);
                return b.sort()
            }, u.extend = x(u.allKeys), u.extendOwn = u.assign = x(u.keys), u.findKey = function (a, b, c) {
                b = w(b, c);
                for (var d, e = u.keys(a), f = 0, g = e.length; f < g; f++)if (d = e[f], b(a[d], d, a))return d
            }, u.pick = function (a, b, c) {
                var d, e, f = {}, g = a;
                if (null == g)return f;
                u.isFunction(b) ? (e = u.allKeys(g), d = v(b, c)) : (e = E(arguments, !1, !1, 1), d = function (a, b, c) {
                    return b in c
                }, g = Object(g));
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h], k = g[j];
                    d(k, j, g) && (f[j] = k)
                }
                return f
            }, u.omit = function (a, b, c) {
                if (u.isFunction(b))b = u.negate(b); else {
                    var d = u.map(E(arguments, !1, !1, 1), String);
                    b = function (a, b) {
                        return !u.contains(d, b)
                    }
                }
                return u.pick(a, b, c)
            }, u.defaults = x(u.allKeys, !0), u.create = function (a, b) {
                var c = y(a);
                return b && u.extendOwn(c, b), c
            }, u.clone = function (a) {
                return u.isObject(a) ? u.isArray(a) ? a.slice() : u.extend({}, a) : a
            }, u.tap = function (a, b) {
                return b(a), a
            }, u.isMatch = function (a, b) {
                var c = u.keys(b), d = c.length;
                if (null == a)return !d;
                for (var e = Object(a), f = 0; f < d; f++) {
                    var g = c[f];
                    if (b[g] !== e[g] || !(g in e))return !1
                }
                return !0
            };
            var I = function (a, b, c, d) {
                if (a === b)return 0 !== a || 1 / a === 1 / b;
                if (null == a || null == b)return a === b;
                a instanceof u && (a = a._wrapped), b instanceof u && (b = b._wrapped);
                var e = n.call(a);
                if (e !== n.call(b))return !1;
                switch (e) {
                    case"[object RegExp]":
                    case"[object String]":
                        return "" + a == "" + b;
                    case"[object Number]":
                        return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                    case"[object Date]":
                    case"[object Boolean]":
                        return +a === +b
                }
                var f = "[object Array]" === e;
                if (!f) {
                    if ("object" != typeof a || "object" != typeof b)return !1;
                    var g = a.constructor, h = b.constructor;
                    if (g !== h && !(u.isFunction(g) && g instanceof g && u.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b)return !1
                }
                c = c || [], d = d || [];
                for (var i = c.length; i--;)if (c[i] === a)return d[i] === b;
                if (c.push(a), d.push(b), f) {
                    if (i = a.length, i !== b.length)return !1;
                    for (; i--;)if (!I(a[i], b[i], c, d))return !1
                } else {
                    var j, k = u.keys(a);
                    if (i = k.length, u.keys(b).length !== i)return !1;
                    for (; i--;)if (j = k[i], !u.has(b, j) || !I(a[j], b[j], c, d))return !1
                }
                return c.pop(), d.pop(), !0
            };
            u.isEqual = function (a, b) {
                return I(a, b)
            }, u.isEmpty = function (a) {
                return null == a || (C(a) && (u.isArray(a) || u.isString(a) || u.isArguments(a)) ? 0 === a.length : 0 === u.keys(a).length)
            }, u.isElement = function (a) {
                return !(!a || 1 !== a.nodeType)
            }, u.isArray = p || function (a) {
                    return "[object Array]" === n.call(a)
                }, u.isObject = function (a) {
                var b = typeof a;
                return "function" === b || "object" === b && !!a
            }, u.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (a) {
                u["is" + a] = function (b) {
                    return n.call(b) === "[object " + a + "]"
                }
            }), u.isArguments(arguments) || (u.isArguments = function (a) {
                return u.has(a, "callee")
            }), "function" != typeof/./ && "object" != typeof Int8Array && (u.isFunction = function (a) {
                return "function" == typeof a || !1
            }), u.isFinite = function (a) {
                return isFinite(a) && !isNaN(parseFloat(a))
            }, u.isNaN = function (a) {
                return u.isNumber(a) && a !== +a
            }, u.isBoolean = function (a) {
                return a === !0 || a === !1 || "[object Boolean]" === n.call(a)
            }, u.isNull = function (a) {
                return null === a
            }, u.isUndefined = function (a) {
                return void 0 === a
            }, u.has = function (a, b) {
                return null != a && o.call(a, b)
            }, u.noConflict = function () {
                return g._ = h, this
            }, u.identity = function (a) {
                return a
            }, u.constant = function (a) {
                return function () {
                    return a
                }
            }, u.noop = function () {
            }, u.property = z, u.propertyOf = function (a) {
                return null == a ? function () {
                } : function (b) {
                    return a[b]
                }
            }, u.matcher = u.matches = function (a) {
                return a = u.extendOwn({}, a), function (b) {
                    return u.isMatch(b, a)
                }
            }, u.times = function (a, b, c) {
                var d = Array(Math.max(0, a));
                b = v(b, c, 1);
                for (var e = 0; e < a; e++)d[e] = b(e);
                return d
            }, u.random = function (a, b) {
                return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
            }, u.now = Date.now || function () {
                    return (new Date).getTime()
                };
            var J = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, K = u.invert(J), L = function (a) {
                var b = function (b) {
                    return a[b]
                }, c = "(?:" + u.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g");
                return function (a) {
                    return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
                }
            };
            u.escape = L(J), u.unescape = L(K), u.result = function (a, b, c) {
                var d = null == a ? void 0 : a[b];
                return void 0 === d && (d = c), u.isFunction(d) ? d.call(a) : d
            };
            var M = 0;
            u.uniqueId = function (a) {
                var b = ++M + "";
                return a ? a + b : b
            }, u.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var N = /(.)^/, O = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, P = /\\|'|\r|\n|\u2028|\u2029/g, Q = function (a) {
                return "\\" + O[a]
            };
            u.template = function (a, b, c) {
                !b && c && (b = c), b = u.defaults({}, b, u.templateSettings);
                var d = RegExp([(b.escape || N).source, (b.interpolate || N).source, (b.evaluate || N).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
                a.replace(d, function (b, c, d, g, h) {
                    return f += a.slice(e, h).replace(P, Q), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
                }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
                try {
                    var g = new Function(b.variable || "obj", "_", f)
                } catch (h) {
                    throw h.source = f, h
                }
                var i = function (a) {
                    return g.call(this, a, u)
                }, j = b.variable || "obj";
                return i.source = "function(" + j + "){\n" + f + "}", i
            }, u.chain = function (a) {
                var b = u(a);
                return b._chain = !0, b
            };
            var R = function (a, b) {
                return a._chain ? u(b).chain() : b
            };
            u.mixin = function (a) {
                u.each(u.functions(a), function (b) {
                    var c = u[b] = a[b];
                    u.prototype[b] = function () {
                        var a = [this._wrapped];
                        return l.apply(a, arguments), R(this, c.apply(u, a))
                    }
                })
            }, u.mixin(u), u.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
                var b = i[a];
                u.prototype[a] = function () {
                    var c = this._wrapped;
                    return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], R(this, c)
                }
            }), u.each(["concat", "join", "slice"], function (a) {
                var b = i[a];
                u.prototype[a] = function () {
                    return R(this, b.apply(this._wrapped, arguments))
                }
            }), u.prototype.value = function () {
                return this._wrapped
            }, u.prototype.valueOf = u.prototype.toJSON = u.prototype.value, u.prototype.toString = function () {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function () {
                return u
            })
        }).call(this)
    }, {}], 39: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                var b = a("./makePromise"), c = a("./Scheduler"), d = a("./env").asap;
                return b({scheduler: new c(d)})
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {"./Scheduler": 40, "./env": 52, "./makePromise": 54}], 40: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a(a) {
                    this._async = a, this._running = !1, this._queue = this, this._queueLen = 0, this._afterQueue = {}, this._afterQueueLen = 0;
                    var b = this;
                    this.drain = function () {
                        b._drain()
                    }
                }

                return a.prototype.enqueue = function (a) {
                    this._queue[this._queueLen++] = a, this.run()
                }, a.prototype.afterQueue = function (a) {
                    this._afterQueue[this._afterQueueLen++] = a, this.run()
                }, a.prototype.run = function () {
                    this._running || (this._running = !0, this._async(this.drain))
                }, a.prototype._drain = function () {
                    for (var a = 0; a < this._queueLen; ++a)this._queue[a].run(), this._queue[a] = void 0;
                    for (this._queueLen = 0, this._running = !1, a = 0; a < this._afterQueueLen; ++a)this._afterQueue[a].run(), this._afterQueue[a] = void 0;
                    this._afterQueueLen = 0
                }, a
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 41: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a(b) {
                    Error.call(this), this.message = b, this.name = a.name, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, a)
                }

                return a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 42: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a(a, c) {
                    function d(b, d, f) {
                        var g = a._defer(), h = f.length, i = new Array(h);
                        return e({f: b, thisArg: d, args: f, params: i, i: h - 1, call: c}, g._handler), g
                    }

                    function e(b, d) {
                        if (b.i < 0)return c(b.f, b.thisArg, b.params, d);
                        var e = a._handler(b.args[b.i]);
                        e.fold(f, b, void 0, d)
                    }

                    function f(a, b, c) {
                        a.params[a.i] = b, a.i -= 1, e(a, c)
                    }

                    return arguments.length < 2 && (c = b), d
                }

                function b(a, b, c, d) {
                    try {
                        d.resolve(a.apply(b, c))
                    } catch (e) {
                        d.reject(e)
                    }
                }

                return a.tryCatchResolve = b, a
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 43: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                var b = a("../state"), c = a("../apply");
                return function (a) {
                    function d(b) {
                        function c(a) {
                            k = null, this.resolve(a)
                        }

                        function d(a) {
                            this.resolved || (k.push(a), 0 === --j && this.reject(k))
                        }

                        for (var e, f, g = a._defer(), h = g._handler, i = b.length >>> 0, j = i, k = [], l = 0; l < i; ++l)if (f = b[l], void 0 !== f || l in b) {
                            if (e = a._handler(f), e.state() > 0) {
                                h.become(e), a._visitRemaining(b, l, e);
                                break
                            }
                            e.visit(h, c, d)
                        } else--j;
                        return 0 === j && h.reject(new RangeError("any(): array must not be empty")), g
                    }

                    function e(b, c) {
                        function d(a) {
                            this.resolved || (k.push(a), 0 === --n && (l = null, this.resolve(k)))
                        }

                        function e(a) {
                            this.resolved || (l.push(a), 0 === --f && (k = null, this.reject(l)))
                        }

                        var f, g, h, i = a._defer(), j = i._handler, k = [], l = [], m = b.length >>> 0, n = 0;
                        for (h = 0; h < m; ++h)g = b[h], (void 0 !== g || h in b) && ++n;
                        for (c = Math.max(c, 0), f = n - c + 1, n = Math.min(c, n), c > n ? j.reject(new RangeError("some(): array must contain at least " + c + " item(s), but had " + n)) : 0 === n && j.resolve(k), h = 0; h < m; ++h)g = b[h], (void 0 !== g || h in b) && a._handler(g).visit(j, d, e, j.notify);
                        return i
                    }

                    function f(b, c) {
                        return a._traverse(c, b)
                    }

                    function g(b, c) {
                        var d = s.call(b);
                        return a._traverse(c, d).then(function (a) {
                            return h(d, a)
                        })
                    }

                    function h(b, c) {
                        for (var d = c.length, e = new Array(d), f = 0, g = 0; f < d; ++f)c[f] && (e[g++] = a._handler(b[f]).value);
                        return e.length = g, e
                    }

                    function i(a) {
                        return p(a.map(j))
                    }

                    function j(c) {
                        var d = a._handler(c);
                        return 0 === d.state() ? o(c).then(b.fulfilled, b.rejected) : (d._unreport(), b.inspect(d))
                    }

                    function k(a, b) {
                        return arguments.length > 2 ? q.call(a, m(b), arguments[2]) : q.call(a, m(b))
                    }

                    function l(a, b) {
                        return arguments.length > 2 ? r.call(a, m(b), arguments[2]) : r.call(a, m(b))
                    }

                    function m(a) {
                        return function (b, c, d) {
                            return n(a, void 0, [b, c, d])
                        }
                    }

                    var n = c(a), o = a.resolve, p = a.all, q = Array.prototype.reduce, r = Array.prototype.reduceRight, s = Array.prototype.slice;
                    return a.any = d, a.some = e, a.settle = i, a.map = f, a.filter = g, a.reduce = k, a.reduceRight = l, a.prototype.spread = function (a) {
                        return this.then(p).then(function (b) {
                            return a.apply(this, b)
                        })
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {"../apply": 42, "../state": 55}], 44: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a() {
                    throw new TypeError("catch predicate must be a function")
                }

                function b(a, b) {
                    return c(b) ? a instanceof b : b(a)
                }

                function c(a) {
                    return a === Error || null != a && a.prototype instanceof Error
                }

                function d(a) {
                    return ("object" == typeof a || "function" == typeof a) && null !== a
                }

                function e(a) {
                    return a
                }

                return function (c) {
                    function f(a, c) {
                        return function (d) {
                            return b(d, c) ? a.call(this, d) : j(d)
                        }
                    }

                    function g(a, b, c, e) {
                        var f = a.call(b);
                        return d(f) ? h(f, c, e) : c(e)
                    }

                    function h(a, b, c) {
                        return i(a).then(function () {
                            return b(c)
                        })
                    }

                    var i = c.resolve, j = c.reject, k = c.prototype["catch"];
                    return c.prototype.done = function (a, b) {
                        this._handler.visit(this._handler.receiver, a, b)
                    }, c.prototype["catch"] = c.prototype.otherwise = function (b) {
                        return arguments.length < 2 ? k.call(this, b) : "function" != typeof b ? this.ensure(a) : k.call(this, f(arguments[1], b))
                    }, c.prototype["finally"] = c.prototype.ensure = function (a) {
                        return "function" != typeof a ? this : this.then(function (b) {
                            return g(a, this, e, b)
                        }, function (b) {
                            return g(a, this, j, b)
                        })
                    }, c.prototype["else"] = c.prototype.orElse = function (a) {
                        return this.then(void 0, function () {
                            return a
                        })
                    }, c.prototype["yield"] = function (a) {
                        return this.then(function () {
                            return a
                        })
                    }, c.prototype.tap = function (a) {
                        return this.then(a)["yield"](this)
                    }, c
                }
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 45: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                return function (a) {
                    return a.prototype.fold = function (b, c) {
                        var d = this._beget();
                        return this._handler.fold(function (c, d, e) {
                            a._handler(c).fold(function (a, c, d) {
                                d.resolve(b.call(this, c, a))
                            }, d, this, e)
                        }, c, d._handler.receiver, d._handler), d
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 46: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                var b = a("../state").inspect;
                return function (a) {
                    return a.prototype.inspect = function () {
                        return b(a._handler(this))
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {"../state": 55}], 47: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                return function (a) {
                    function b(a, b, d, e) {
                        return c(function (b) {
                            return [b, a(b)]
                        }, b, d, e)
                    }

                    function c(a, b, e, f) {
                        function g(f, g) {
                            return d(e(f)).then(function () {
                                return c(a, b, e, g)
                            })
                        }

                        return d(f).then(function (c) {
                            return d(b(c)).then(function (b) {
                                return b ? c : d(a(c)).spread(g)
                            })
                        })
                    }

                    var d = a.resolve;
                    return a.iterate = b, a.unfold = c, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 48: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                return function (a) {
                    return a.prototype.progress = function (a) {
                        return this.then(void 0, void 0, a)
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 49: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                function b(a, b, d, e) {
                    return c.setTimer(function () {
                        a(d, e, b)
                    }, b)
                }

                var c = a("../env"), d = a("../TimeoutError");
                return function (a) {
                    function e(a, c, d) {
                        b(f, a, c, d)
                    }

                    function f(a, b) {
                        b.resolve(a)
                    }

                    function g(a, b, c) {
                        var e = "undefined" == typeof a ? new d("timed out after " + c + "ms") : a;
                        b.reject(e)
                    }

                    return a.prototype.delay = function (a) {
                        var b = this._beget();
                        return this._handler.fold(e, a, void 0, b._handler), b
                    }, a.prototype.timeout = function (a, d) {
                        var e = this._beget(), f = e._handler, h = b(g, a, d, e._handler);
                        return this._handler.visit(f, function (a) {
                            c.clearTimer(h), this.resolve(a)
                        }, function (a) {
                            c.clearTimer(h), this.reject(a)
                        }, f.notify), e
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {"../TimeoutError": 41, "../env": 52}], 50: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                function b(a) {
                    throw a
                }

                function c() {
                }

                var d = a("../env").setTimer, e = a("../format");
                return function (a) {
                    function f(a) {
                        a.handled || (n.push(a), k("Potentially unhandled rejection [" + a.id + "] " + e.formatError(a.value)))
                    }

                    function g(a) {
                        var b = n.indexOf(a);
                        b >= 0 && (n.splice(b, 1), l("Handled previous rejection [" + a.id + "] " + e.formatObject(a.value)))
                    }

                    function h(a, b) {
                        m.push(a, b), null === o && (o = d(i, 0))
                    }

                    function i() {
                        for (o = null; m.length > 0;)m.shift()(m.shift())
                    }

                    var j, k = c, l = c;
                    "undefined" != typeof console && (j = console, k = "undefined" != typeof j.error ? function (a) {
                        j.error(a)
                    } : function (a) {
                        j.log(a)
                    }, l = "undefined" != typeof j.info ? function (a) {
                        j.info(a)
                    } : function (a) {
                        j.log(a)
                    }), a.onPotentiallyUnhandledRejection = function (a) {
                        h(f, a)
                    }, a.onPotentiallyUnhandledRejectionHandled = function (a) {
                        h(g, a)
                    }, a.onFatalRejection = function (a) {
                        h(b, a.value)
                    };
                    var m = [], n = [], o = null;
                    return a
                }
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {"../env": 52, "../format": 53}], 51: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                return function (a) {
                    return a.prototype["with"] = a.prototype.withThis = function (a) {
                        var b = this._beget(), c = b._handler;
                        return c.receiver = a, this._handler.chain(c, a), b
                    }, a
                }
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 52: [function (a, b, c) {
        (function (c) {
            !function (a) {
                "use strict";
                a(function (a) {
                    function b() {
                        return "undefined" != typeof c && "[object process]" === Object.prototype.toString.call(c)
                    }

                    function d() {
                        return "function" == typeof MutationObserver && MutationObserver || "function" == typeof WebKitMutationObserver && WebKitMutationObserver
                    }

                    function e(a) {
                        function b() {
                            var a = c;
                            c = void 0, a()
                        }

                        var c, d = document.createTextNode(""), e = new a(b);
                        e.observe(d, {characterData: !0});
                        var f = 0;
                        return function (a) {
                            c = a, d.data = f ^= 1
                        }
                    }

                    var f, g = "undefined" != typeof setTimeout && setTimeout, h = function (a, b) {
                        return setTimeout(a, b)
                    }, i = function (a) {
                        return clearTimeout(a)
                    }, j = function (a) {
                        return g(a, 0)
                    };
                    if (b())j = function (a) {
                        return c.nextTick(a)
                    }; else if (f = d())j = e(f); else if (!g) {
                        var k = a, l = k("vertx");
                        h = function (a, b) {
                            return l.setTimer(b, a)
                        }, i = l.cancelTimer, j = l.runOnLoop || l.runOnContext
                    }
                    return {setTimer: h, clearTimer: i, asap: j}
                })
            }("function" == typeof define && define.amd ? define : function (c) {
                b.exports = c(a)
            })
        }).call(this, a("_process"))
    }, {_process: 36}], 53: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a(a) {
                    var c = "object" == typeof a && null !== a && (a.stack || a.message) ? a.stack || a.message : b(a);
                    return a instanceof Error ? c : c + " (WARNING: non-Error used)"
                }

                function b(a) {
                    var b = String(a);
                    return "[object Object]" === b && "undefined" != typeof JSON && (b = c(a, b)), b
                }

                function c(a, b) {
                    try {
                        return JSON.stringify(a)
                    } catch (c) {
                        return b
                    }
                }

                return {formatError: a, formatObject: b, tryStringify: c}
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 54: [function (a, b, c) {
        (function (a) {
            !function (b) {
                "use strict";
                b(function () {
                    return function (b) {
                        function c(a, b) {
                            this._handler = a === u ? b : d(a)
                        }

                        function d(a) {
                            function b(a) {
                                e.resolve(a)
                            }

                            function c(a) {
                                e.reject(a)
                            }

                            function d(a) {
                                e.notify(a)
                            }

                            var e = new w;
                            try {
                                a(b, c, d)
                            } catch (f) {
                                c(f)
                            }
                            return e
                        }

                        function e(a) {
                            return J(a) ? a : new c(u, new x(r(a)))
                        }

                        function f(a) {
                            return new c(u, new x(new A(a)))
                        }

                        function g() {
                            return aa
                        }

                        function h() {
                            return new c(u, new w)
                        }

                        function i(a, b) {
                            var c = new w(a.receiver, a.join().context);
                            return new b(u, c)
                        }

                        function j(a) {
                            return l(T, null, a)
                        }

                        function k(a, b) {
                            return l(O, a, b)
                        }

                        function l(a, b, d) {
                            function e(c, e, g) {
                                g.resolved || m(d, f, c, a(b, e, c), g)
                            }

                            function f(a, b, c) {
                                k[a] = b, 0 === --j && c.become(new z(k))
                            }

                            for (var g, h = "function" == typeof b ? e : f, i = new w, j = d.length >>> 0, k = new Array(j), l = 0; l < d.length && !i.resolved; ++l)g = d[l],
                                void 0 !== g || l in d ? m(d, h, l, g, i) : --j;
                            return 0 === j && i.become(new z(k)), new c(u, i)
                        }

                        function m(a, b, c, d, e) {
                            if (K(d)) {
                                var f = s(d), g = f.state();
                                0 === g ? f.fold(b, c, void 0, e) : g > 0 ? b(c, f.value, e) : (e.become(f), n(a, c + 1, f))
                            } else b(c, d, e)
                        }

                        function n(a, b, c) {
                            for (var d = b; d < a.length; ++d)o(r(a[d]), c)
                        }

                        function o(a, b) {
                            if (a !== b) {
                                var c = a.state();
                                0 === c ? a.visit(a, void 0, a._unreport) : c < 0 && a._unreport()
                            }
                        }

                        function p(a) {
                            return "object" != typeof a || null === a ? f(new TypeError("non-iterable passed to race()")) : 0 === a.length ? g() : 1 === a.length ? e(a[0]) : q(a)
                        }

                        function q(a) {
                            var b, d, e, f = new w;
                            for (b = 0; b < a.length; ++b)if (d = a[b], void 0 !== d || b in a) {
                                if (e = r(d), 0 !== e.state()) {
                                    f.become(e), n(a, b + 1, e);
                                    break
                                }
                                e.visit(f, f.resolve, f.reject)
                            }
                            return new c(u, f)
                        }

                        function r(a) {
                            return J(a) ? a._handler.join() : K(a) ? t(a) : new z(a)
                        }

                        function s(a) {
                            return J(a) ? a._handler.join() : t(a)
                        }

                        function t(a) {
                            try {
                                var b = a.then;
                                return "function" == typeof b ? new y(b, a) : new z(a)
                            } catch (c) {
                                return new A(c)
                            }
                        }

                        function u() {
                        }

                        function v() {
                        }

                        function w(a, b) {
                            c.createContext(this, b), this.consumers = void 0, this.receiver = a, this.handler = void 0, this.resolved = !1
                        }

                        function x(a) {
                            this.handler = a
                        }

                        function y(a, b) {
                            w.call(this), W.enqueue(new G(a, b, this))
                        }

                        function z(a) {
                            c.createContext(this), this.value = a
                        }

                        function A(a) {
                            c.createContext(this), this.id = ++$, this.value = a, this.handled = !1, this.reported = !1, this._report()
                        }

                        function B(a, b) {
                            this.rejection = a, this.context = b
                        }

                        function C(a) {
                            this.rejection = a
                        }

                        function D() {
                            return new A(new TypeError("Promise cycle"))
                        }

                        function E(a, b) {
                            this.continuation = a, this.handler = b
                        }

                        function F(a, b) {
                            this.handler = b, this.value = a
                        }

                        function G(a, b, c) {
                            this._then = a, this.thenable = b, this.resolver = c
                        }

                        function H(a, b, c, d, e) {
                            try {
                                a.call(b, c, d, e)
                            } catch (f) {
                                d(f)
                            }
                        }

                        function I(a, b, c, d) {
                            this.f = a, this.z = b, this.c = c, this.to = d, this.resolver = Z, this.receiver = this
                        }

                        function J(a) {
                            return a instanceof c
                        }

                        function K(a) {
                            return ("object" == typeof a || "function" == typeof a) && null !== a
                        }

                        function L(a, b, d, e) {
                            return "function" != typeof a ? e.become(b) : (c.enterContext(b), P(a, b.value, d, e), void c.exitContext())
                        }

                        function M(a, b, d, e, f) {
                            return "function" != typeof a ? f.become(d) : (c.enterContext(d), Q(a, b, d.value, e, f), void c.exitContext())
                        }

                        function N(a, b, d, e, f) {
                            return "function" != typeof a ? f.notify(b) : (c.enterContext(d), R(a, b, e, f), void c.exitContext())
                        }

                        function O(a, b, c) {
                            try {
                                return a(b, c)
                            } catch (d) {
                                return f(d)
                            }
                        }

                        function P(a, b, c, d) {
                            try {
                                d.become(r(a.call(c, b)))
                            } catch (e) {
                                d.become(new A(e))
                            }
                        }

                        function Q(a, b, c, d, e) {
                            try {
                                a.call(d, b, c, e)
                            } catch (f) {
                                e.become(new A(f))
                            }
                        }

                        function R(a, b, c, d) {
                            try {
                                d.notify(a.call(c, b))
                            } catch (e) {
                                d.notify(e)
                            }
                        }

                        function S(a, b) {
                            b.prototype = Y(a.prototype), b.prototype.constructor = b
                        }

                        function T(a, b) {
                            return b
                        }

                        function U() {
                        }

                        function V() {
                            return "undefined" != typeof a && null !== a && "function" == typeof a.emit ? function (b, c) {
                                return "unhandledRejection" === b ? a.emit(b, c.value, c) : a.emit(b, c)
                            } : "undefined" != typeof self && "function" == typeof CustomEvent ? function (a, b, c) {
                                var d = !1;
                                try {
                                    var e = new c("unhandledRejection");
                                    d = e instanceof c
                                } catch (f) {
                                }
                                return d ? function (a, d) {
                                    var e = new c(a, {detail: {reason: d.value, key: d}, bubbles: !1, cancelable: !0});
                                    return !b.dispatchEvent(e)
                                } : a
                            }(U, self, CustomEvent) : U
                        }

                        var W = b.scheduler, X = V(), Y = Object.create || function (a) {
                                function b() {
                                }

                                return b.prototype = a, new b
                            };
                        c.resolve = e, c.reject = f, c.never = g, c._defer = h, c._handler = r, c.prototype.then = function (a, b, c) {
                            var d = this._handler, e = d.join().state();
                            if ("function" != typeof a && e > 0 || "function" != typeof b && e < 0)return new this.constructor(u, d);
                            var f = this._beget(), g = f._handler;
                            return d.chain(g, d.receiver, a, b, c), f
                        }, c.prototype["catch"] = function (a) {
                            return this.then(void 0, a)
                        }, c.prototype._beget = function () {
                            return i(this._handler, this.constructor)
                        }, c.all = j, c.race = p, c._traverse = k, c._visitRemaining = n, u.prototype.when = u.prototype.become = u.prototype.notify = u.prototype.fail = u.prototype._unreport = u.prototype._report = U, u.prototype._state = 0, u.prototype.state = function () {
                            return this._state
                        }, u.prototype.join = function () {
                            for (var a = this; void 0 !== a.handler;)a = a.handler;
                            return a
                        }, u.prototype.chain = function (a, b, c, d, e) {
                            this.when({resolver: a, receiver: b, fulfilled: c, rejected: d, progress: e})
                        }, u.prototype.visit = function (a, b, c, d) {
                            this.chain(Z, a, b, c, d)
                        }, u.prototype.fold = function (a, b, c, d) {
                            this.when(new I(a, b, c, d))
                        }, S(u, v), v.prototype.become = function (a) {
                            a.fail()
                        };
                        var Z = new v;
                        S(u, w), w.prototype._state = 0, w.prototype.resolve = function (a) {
                            this.become(r(a))
                        }, w.prototype.reject = function (a) {
                            this.resolved || this.become(new A(a))
                        }, w.prototype.join = function () {
                            if (!this.resolved)return this;
                            for (var a = this; void 0 !== a.handler;)if (a = a.handler, a === this)return this.handler = D();
                            return a
                        }, w.prototype.run = function () {
                            var a = this.consumers, b = this.handler;
                            this.handler = this.handler.join(), this.consumers = void 0;
                            for (var c = 0; c < a.length; ++c)b.when(a[c])
                        }, w.prototype.become = function (a) {
                            this.resolved || (this.resolved = !0, this.handler = a, void 0 !== this.consumers && W.enqueue(this), void 0 !== this.context && a._report(this.context))
                        }, w.prototype.when = function (a) {
                            this.resolved ? W.enqueue(new E(a, this.handler)) : void 0 === this.consumers ? this.consumers = [a] : this.consumers.push(a)
                        }, w.prototype.notify = function (a) {
                            this.resolved || W.enqueue(new F(a, this))
                        }, w.prototype.fail = function (a) {
                            var b = "undefined" == typeof a ? this.context : a;
                            this.resolved && this.handler.join().fail(b)
                        }, w.prototype._report = function (a) {
                            this.resolved && this.handler.join()._report(a)
                        }, w.prototype._unreport = function () {
                            this.resolved && this.handler.join()._unreport()
                        }, S(u, x), x.prototype.when = function (a) {
                            W.enqueue(new E(a, this))
                        }, x.prototype._report = function (a) {
                            this.join()._report(a)
                        }, x.prototype._unreport = function () {
                            this.join()._unreport()
                        }, S(w, y), S(u, z), z.prototype._state = 1, z.prototype.fold = function (a, b, c, d) {
                            M(a, b, this, c, d)
                        }, z.prototype.when = function (a) {
                            L(a.fulfilled, this, a.receiver, a.resolver)
                        };
                        var $ = 0;
                        S(u, A), A.prototype._state = -1, A.prototype.fold = function (a, b, c, d) {
                            d.become(this)
                        }, A.prototype.when = function (a) {
                            "function" == typeof a.rejected && this._unreport(), L(a.rejected, this, a.receiver, a.resolver)
                        }, A.prototype._report = function (a) {
                            W.afterQueue(new B(this, a))
                        }, A.prototype._unreport = function () {
                            this.handled || (this.handled = !0, W.afterQueue(new C(this)))
                        }, A.prototype.fail = function (a) {
                            this.reported = !0, X("unhandledRejection", this), c.onFatalRejection(this, void 0 === a ? this.context : a)
                        }, B.prototype.run = function () {
                            this.rejection.handled || this.rejection.reported || (this.rejection.reported = !0, X("unhandledRejection", this.rejection) || c.onPotentiallyUnhandledRejection(this.rejection, this.context))
                        }, C.prototype.run = function () {
                            this.rejection.reported && (X("rejectionHandled", this.rejection) || c.onPotentiallyUnhandledRejectionHandled(this.rejection))
                        }, c.createContext = c.enterContext = c.exitContext = c.onPotentiallyUnhandledRejection = c.onPotentiallyUnhandledRejectionHandled = c.onFatalRejection = U;
                        var _ = new u, aa = new c(u, _);
                        return E.prototype.run = function () {
                            this.handler.join().when(this.continuation)
                        }, F.prototype.run = function () {
                            var a = this.handler.consumers;
                            if (void 0 !== a)for (var b, c = 0; c < a.length; ++c)b = a[c], N(b.progress, this.value, this.handler, b.receiver, b.resolver)
                        }, G.prototype.run = function () {
                            function a(a) {
                                d.resolve(a)
                            }

                            function b(a) {
                                d.reject(a)
                            }

                            function c(a) {
                                d.notify(a)
                            }

                            var d = this.resolver;
                            H(this._then, this.thenable, a, b, c)
                        }, I.prototype.fulfilled = function (a) {
                            this.f.call(this.c, this.z, a, this.to)
                        }, I.prototype.rejected = function (a) {
                            this.to.reject(a)
                        }, I.prototype.progress = function (a) {
                            this.to.notify(a)
                        }, c
                    }
                })
            }("function" == typeof define && define.amd ? define : function (a) {
                b.exports = a()
            })
        }).call(this, a("_process"))
    }, {_process: 36}], 55: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function () {
                function a() {
                    return {state: "pending"}
                }

                function b(a) {
                    return {state: "rejected", reason: a}
                }

                function c(a) {
                    return {state: "fulfilled", value: a}
                }

                function d(d) {
                    var e = d.state();
                    return 0 === e ? a() : e > 0 ? c(d.value) : b(d.value)
                }

                return {pending: a, fulfilled: c, rejected: b, inspect: d}
            })
        }("function" == typeof define && define.amd ? define : function (a) {
            b.exports = a()
        })
    }, {}], 56: [function (a, b, c) {
        !function (a) {
            "use strict";
            a(function (a) {
                function b(a, b, c, d) {
                    var e = x.resolve(a);
                    return arguments.length < 2 ? e : e.then(b, c, d)
                }

                function c(a) {
                    return new x(a)
                }

                function d(a) {
                    return function () {
                        for (var b = 0, c = arguments.length, d = new Array(c); b < c; ++b)d[b] = arguments[b];
                        return y(a, this, d)
                    }
                }

                function e(a) {
                    for (var b = 0, c = arguments.length - 1, d = new Array(c); b < c; ++b)d[b] = arguments[b + 1];
                    return y(a, this, d)
                }

                function f() {
                    return new g
                }

                function g() {
                    function a(a) {
                        d._handler.resolve(a)
                    }

                    function b(a) {
                        d._handler.reject(a)
                    }

                    function c(a) {
                        d._handler.notify(a)
                    }

                    var d = x._defer();
                    this.promise = d, this.resolve = a, this.reject = b, this.notify = c, this.resolver = {
                        resolve: a,
                        reject: b,
                        notify: c
                    }
                }

                function h(a) {
                    return a && "function" == typeof a.then
                }

                function i() {
                    return x.all(arguments)
                }

                function j(a) {
                    return b(a, x.all)
                }

                function k(a) {
                    return b(a, x.settle)
                }

                function l(a, c) {
                    return b(a, function (a) {
                        return x.map(a, c)
                    })
                }

                function m(a, c) {
                    return b(a, function (a) {
                        return x.filter(a, c)
                    })
                }

                var n = a("./lib/decorators/timed"), o = a("./lib/decorators/array"), p = a("./lib/decorators/flow"), q = a("./lib/decorators/fold"), r = a("./lib/decorators/inspect"), s = a("./lib/decorators/iterate"), t = a("./lib/decorators/progress"), u = a("./lib/decorators/with"), v = a("./lib/decorators/unhandledRejection"), w = a("./lib/TimeoutError"), x = [o, p, q, s, t, r, u, n, v].reduce(function (a, b) {
                    return b(a)
                }, a("./lib/Promise")), y = a("./lib/apply")(x);
                return b.promise = c, b.resolve = x.resolve, b.reject = x.reject, b.lift = d, b["try"] = e, b.attempt = e, b.iterate = x.iterate, b.unfold = x.unfold, b.join = i, b.all = j, b.settle = k, b.any = d(x.any), b.some = d(x.some), b.race = d(x.race), b.map = l, b.filter = m, b.reduce = d(x.reduce), b.reduceRight = d(x.reduceRight), b.isPromiseLike = h, b.Promise = x, b.defer = f, b.TimeoutError = w, b
            })
        }("function" == typeof define && define.amd ? define : function (c) {
            b.exports = c(a)
        })
    }, {
        "./lib/Promise": 39,
        "./lib/TimeoutError": 41,
        "./lib/apply": 42,
        "./lib/decorators/array": 43,
        "./lib/decorators/flow": 44,
        "./lib/decorators/fold": 45,
        "./lib/decorators/inspect": 46,
        "./lib/decorators/iterate": 47,
        "./lib/decorators/progress": 48,
        "./lib/decorators/timed": 49,
        "./lib/decorators/unhandledRejection": 50,
        "./lib/decorators/with": 51
    }], 57: [function (a, b, c) {
        var d = a("./src/zepto");
        a("./src/ajax"), a("./src/event"), a("./src/touch"), a("./src/fx"), a("./src/fx_methods"), b.exports = d
    }, {
        "./src/ajax": 58,
        "./src/event": 59,
        "./src/fx": 60,
        "./src/fx_methods": 61,
        "./src/touch": 62,
        "./src/zepto": 63
    }], 58: [function (a, b, c) {
        !function (a) {
            function b(b, c, d) {
                var e = a.Event(c);
                return a(b).trigger(e, d), !e.isDefaultPrevented()
            }

            function c(a, c, d, e) {
                if (a.global)return b(c || s, d, e)
            }

            function d(b) {
                b.global && 0 === a.active++ && c(b, null, "ajaxStart")
            }

            function e(b) {
                b.global && !--a.active && c(b, null, "ajaxStop")
            }

            function f(a, b) {
                var d = b.context;
                return b.beforeSend.call(d, a, b) !== !1 && c(b, d, "ajaxBeforeSend", [a, b]) !== !1 && void c(b, d, "ajaxSend", [a, b])
            }

            function g(a, b, d, e) {
                var f = d.context, g = "success";
                d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
            }

            function h(a, b, d, e, f) {
                var g = e.context;
                e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
            }

            function i(a, b, d) {
                var f = d.context;
                d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
            }

            function j() {
            }

            function k(a) {
                return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
            }

            function l(a, b) {
                return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
            }

            function m(b) {
                b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
            }

            function n(b, c, d, e) {
                return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
                    url: b,
                    data: c,
                    success: d,
                    dataType: e
                }
            }

            function o(b, c, d, e) {
                var f, g = a.isArray(c), h = a.isPlainObject(c);
                a.each(c, function (c, i) {
                    f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
                })
            }

            var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/;
            a.active = 0, a.ajaxJSONP = function (b, c) {
                if (!("type" in b))return a.ajax(b);
                var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function (b) {
                    a(k).triggerHandler("error", b || "abort")
                }, n = {abort: m};
                return c && c.promise(n), a(k).on("load error", function (f, i) {
                    clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
                }), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function () {
                    d = arguments
                }, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function () {
                    m("timeout")
                }, b.timeout)), n)
            }, a.ajaxSettings = {
                type: "GET",
                beforeSend: j,
                success: j,
                error: j,
                complete: j,
                context: null,
                global: !0,
                xhr: function () {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: w,
                    xml: "application/xml, text/xml",
                    html: x,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            }, a.ajax = function (b) {
                var c = a.extend({}, b || {}), e = a.Deferred && a.Deferred();
                for (p in a.ajaxSettings)void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
                d(c), c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host), c.url || (c.url = window.location.toString()), m(c), c.cache === !1 && (c.url = l(c.url, "_=" + Date.now()));
                var i = c.dataType, n = /\?.+=\?/.test(c.url);
                if ("jsonp" == i || n)return n || (c.url = l(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(c, e);
                var o, r = c.accepts[i], s = {}, t = function (a, b) {
                    s[a.toLowerCase()] = [a, b]
                }, u = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol, v = c.xhr(), w = v.setRequestHeader;
                if (e && e.promise(v), c.crossDomain || t("X-Requested-With", "XMLHttpRequest"), t("Accept", r || "*/*"), (r = c.mimeType || r) && (r.indexOf(",") > -1 && (r = r.split(",", 2)[0]), v.overrideMimeType && v.overrideMimeType(r)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && t("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)for (q in c.headers)t(q, c.headers[q]);
                if (v.setRequestHeader = t, v.onreadystatechange = function () {
                        if (4 == v.readyState) {
                            v.onreadystatechange = j, clearTimeout(o);
                            var b, d = !1;
                            if (v.status >= 200 && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == u) {
                                i = i || k(c.mimeType || v.getResponseHeader("content-type")), b = v.responseText;
                                try {
                                    "script" == i ? (0, eval)(b) : "xml" == i ? b = v.responseXML : "json" == i && (b = y.test(b) ? null : a.parseJSON(b))
                                } catch (f) {
                                    d = f
                                }
                                d ? h(d, "parsererror", v, c, e) : g(b, v, c, e)
                            } else h(v.statusText || null, v.status ? "error" : "abort", v, c, e)
                        }
                    }, f(v, c) === !1)return v.abort(), h(null, "abort", v, c, e), v;
                if (c.xhrFields)for (q in c.xhrFields)v[q] = c.xhrFields[q];
                var x = !("async" in c) || c.async;
                v.open(c.type, c.url, x, c.username, c.password);
                for (q in s)w.apply(v, s[q]);
                return c.timeout > 0 && (o = setTimeout(function () {
                    v.onreadystatechange = j, v.abort(), h(null, "timeout", v, c, e)
                }, c.timeout)), v.send(c.data ? c.data : null), v
            }, a.get = function () {
                return a.ajax(n.apply(null, arguments))
            }, a.post = function () {
                var b = n.apply(null, arguments);
                return b.type = "POST", a.ajax(b)
            }, a.getJSON = function () {
                var b = n.apply(null, arguments);
                return b.dataType = "json", a.ajax(b)
            }, a.fn.load = function (b, c, d) {
                if (!this.length)return this;
                var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
                return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function (b) {
                    f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
                }, a.ajax(h), this
            };
            var z = encodeURIComponent;
            a.param = function (a, b) {
                var c = [];
                return c.add = function (a, b) {
                    this.push(z(a) + "=" + z(b))
                }, o(c, a, b), c.join("&").replace(/%20/g, "+")
            }
        }(Zepto)
    }, {}], 59: [function (a, b, c) {
        !function (a) {
            function b(a) {
                return a._zid || (a._zid = m++)
            }

            function c(a, c, f, g) {
                if (c = d(c), c.ns)var h = e(c.ns);
                return (q[b(a)] || []).filter(function (a) {
                    return a && (!c.e || a.e == c.e) && (!c.ns || h.test(a.ns)) && (!f || b(a.fn) === b(f)) && (!g || a.sel == g)
                })
            }

            function d(a) {
                var b = ("" + a).split(".");
                return {e: b[0], ns: b.slice(1).sort().join(" ")}
            }

            function e(a) {
                return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
            }

            function f(a, b) {
                return a.del && !s && a.e in t || !!b
            }

            function g(a) {
                return u[a] || s && t[a] || a
            }

            function h(c, e, h, i, k, m, n) {
                var o = b(c), p = q[o] || (q[o] = []);
                e.split(/\s/).forEach(function (b) {
                    if ("ready" == b)return a(document).ready(h);
                    var e = d(b);
                    e.fn = h, e.sel = k, e.e in u && (h = function (b) {
                        var c = b.relatedTarget;
                        if (!c || c !== this && !a.contains(this, c))return e.fn.apply(this, arguments)
                    }), e.del = m;
                    var o = m || h;
                    e.proxy = function (a) {
                        if (a = j(a), !a.isImmediatePropagationStopped()) {
                            a.data = i;
                            var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                            return b === !1 && (a.preventDefault(), a.stopPropagation()), b
                        }
                    }, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
                })
            }

            function i(a, d, e, h, i) {
                var j = b(a);
                (d || "").split(/\s/).forEach(function (b) {
                    c(a, b, e, h).forEach(function (b) {
                        delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
                    })
                })
            }

            function j(b, c) {
                return !c && b.isDefaultPrevented || (c || (c = b), a.each(y, function (a, d) {
                    var e = c[a];
                    b[a] = function () {
                        return this[d] = v, e && e.apply(c, arguments)
                    }, b[d] = w
                }), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
            }

            function k(a) {
                var b, c = {originalEvent: a};
                for (b in a)x.test(b) || a[b] === l || (c[b] = a[b]);
                return j(c, a)
            }

            var l, m = 1, n = Array.prototype.slice, o = a.isFunction, p = function (a) {
                return "string" == typeof a
            }, q = {}, r = {}, s = "onfocusin" in window, t = {
                focus: "focusin",
                blur: "focusout"
            }, u = {mouseenter: "mouseover", mouseleave: "mouseout"};
            r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
                add: h,
                remove: i
            }, a.proxy = function (c, d) {
                if (o(c)) {
                    var e = function () {
                        return c.apply(d, arguments)
                    };
                    return e._zid = b(c), e
                }
                if (p(d))return a.proxy(c[d], c);
                throw new TypeError("expected function")
            }, a.fn.bind = function (a, b, c) {
                return this.on(a, b, c)
            }, a.fn.unbind = function (a, b) {
                return this.off(a, b)
            }, a.fn.one = function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            };
            var v = function () {
                return !0
            }, w = function () {
                return !1
            }, x = /^([A-Z]|returnValue$|layer[XY]$)/, y = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            a.fn.delegate = function (a, b, c) {
                return this.on(b, a, c)
            }, a.fn.undelegate = function (a, b, c) {
                return this.off(b, a, c)
            }, a.fn.live = function (b, c) {
                return a(document.body).delegate(this.selector, b, c), this
            }, a.fn.die = function (b, c) {
                return a(document.body).undelegate(this.selector, b, c), this
            }, a.fn.on = function (b, c, d, e, f) {
                var g, j, m = this;
                return b && !p(b) ? (a.each(b, function (a, b) {
                    m.on(a, c, d, b, f)
                }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function (l, m) {
                    f && (g = function (a) {
                        return i(m, a.type, e), e.apply(this, arguments)
                    }), c && (j = function (b) {
                        var d, f = a(b.target).closest(c, m).get(0);
                        if (f && f !== m)return d = a.extend(k(b), {
                            currentTarget: f,
                            liveFired: m
                        }), (g || e).apply(f, [d].concat(n.call(arguments, 1)))
                    }), h(m, b, e, d, c, j || g)
                }))
            }, a.fn.off = function (b, c, d) {
                var e = this;
                return b && !p(b) ? (a.each(b, function (a, b) {
                    e.off(a, c, b)
                }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function () {
                    i(this, b, d, c)
                }))
            }, a.fn.trigger = function (b, c) {
                return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function () {
                    "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
                })
            }, a.fn.triggerHandler = function (b, d) {
                var e, f;
                return this.each(function (g, h) {
                    e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function (a, b) {
                        if (f = b.proxy(e), e.isImmediatePropagationStopped())return !1
                    })
                }), f
            }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (b) {
                a.fn[b] = function (a) {
                    return a ? this.bind(b, a) : this.trigger(b)
                }
            }), ["focus", "blur"].forEach(function (b) {
                a.fn[b] = function (a) {
                    return a ? this.bind(b, a) : this.each(function () {
                        try {
                            this[b]()
                        } catch (a) {
                        }
                    }), this
                }
            }), a.Event = function (a, b) {
                p(a) || (b = a, a = b.type);
                var c = document.createEvent(r[a] || "Events"), d = !0;
                if (b)for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
                return c.initEvent(a, d, !0), j(c)
            }
        }(Zepto)
    }, {}], 60: [function (a, b, c) {
        !function (a, b) {
            function c(a) {
                return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
            }

            function d(a) {
                return e ? e + a : a.toLowerCase()
            }

            var e, f, g, h, i, j, k, l, m, n, o = "", p = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            }, q = window.document, r = q.createElement("div"), s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, t = {};
            a.each(p, function (a, c) {
                if (r.style[a + "TransitionProperty"] !== b)return o = "-" + a.toLowerCase() + "-", e = c, !1
            }), f = o + "transform", t[g = o + "transition-property"] = t[h = o + "transition-duration"] = t[j = o + "transition-delay"] = t[i = o + "transition-timing-function"] = t[k = o + "animation-name"] = t[l = o + "animation-duration"] = t[n = o + "animation-delay"] = t[m = o + "animation-timing-function"] = "", a.fx = {
                off: e === b && r.style.transitionProperty === b,
                speeds: {_default: 400, fast: 200, slow: 600},
                cssPrefix: o,
                transitionEnd: d("TransitionEnd"),
                animationEnd: d("AnimationEnd")
            }, a.fn.animate = function (c, d, e, f, g) {
                return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b), a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration), d && (d = ("number" == typeof d ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3), g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g)
            }, a.fn.anim = function (d, e, o, p, q) {
                var r, u, v, w = {}, x = "", y = this, z = a.fx.transitionEnd, A = !1;
                if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), "string" == typeof d)w[k] = d, w[l] = e + "s", w[n] = q + "s", w[m] = o || "linear", z = a.fx.animationEnd; else {
                    u = [];
                    for (r in d)s.test(r) ? x += r + "(" + d[r] + ") " : (w[r] = d[r], u.push(c(r)));
                    x && (w[f] = x, u.push(f)), e > 0 && "object" == typeof d && (w[g] = u.join(", "), w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear")
                }
                return v = function (b) {
                    if ("undefined" != typeof b) {
                        if (b.target !== b.currentTarget)return;
                        a(b.target).unbind(z, v)
                    } else a(this).unbind(z, v);
                    A = !0, a(this).css(t), p && p.call(this)
                }, e > 0 && (this.bind(z, v), setTimeout(function () {
                    A || v.call(y)
                }, 1e3 * e + 25)), this.size() && this.get(0).clientLeft, this.css(w), e <= 0 && setTimeout(function () {
                    y.each(function () {
                        v.call(this)
                    })
                }, 0), this
            }, r = null
        }(Zepto)
    }, {}], 61: [function (a, b, c) {
        !function (a, b) {
            function c(c, d, e, f, g) {
                "function" != typeof d || g || (g = d, d = b);
                var h = {opacity: e};
                return f && (h.scale = f, c.css(a.fx.cssPrefix + "transform-origin", "0 0")), c.animate(h, d, null, g)
            }

            function d(b, d, e, f) {
                return c(b, d, 0, e, function () {
                    g.call(a(this)), f && f.call(this)
                })
            }

            var e = window.document, f = (e.documentElement, a.fn.show), g = a.fn.hide, h = a.fn.toggle;
            a.fn.show = function (a, d) {
                return f.call(this), a === b ? a = 0 : this.css("opacity", 0), c(this, a, 1, "1,1", d)
            }, a.fn.hide = function (a, c) {
                return a === b ? g.call(this) : d(this, a, "0,0", c)
            }, a.fn.toggle = function (c, d) {
                return c === b || "boolean" == typeof c ? h.call(this, c) : this.each(function () {
                    var b = a(this);
                    b["none" == b.css("display") ? "show" : "hide"](c, d)
                })
            }, a.fn.fadeTo = function (a, b, d) {
                return c(this, a, b, null, d)
            }, a.fn.fadeIn = function (a, b) {
                var c = this.css("opacity");
                return c > 0 ? this.css("opacity", 0) : c = 1, f.call(this).fadeTo(a, c, b)
            }, a.fn.fadeOut = function (a, b) {
                return d(this, a, null, b)
            }, a.fn.fadeToggle = function (b, c) {
                return this.each(function () {
                    var d = a(this);
                    d[0 == d.css("opacity") || "none" == d.css("display") ? "fadeIn" : "fadeOut"](b, c)
                })
            }
        }(Zepto)
    }, {}], 62: [function (a, b, c) {
        var d = a("./zepto");
        !function (a) {
            function b(a, b, c, d) {
                return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
            }

            function c() {
                k = null, m.last && (m.el.trigger("longTap"), m = {})
            }

            function d() {
                k && clearTimeout(k), k = null
            }

            function e() {
                h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), k && clearTimeout(k), h = i = j = k = null, m = {}
            }

            function f(a) {
                return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
            }

            function g(a, b) {
                return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
            }

            var h, i, j, k, l, m = {}, n = 750;
            a(document).ready(function () {
                var o, p, q, r, s = 0, t = 0;
                "MSGesture" in window && (l = new MSGesture, l.target = document.body), a(document).bind("MSGestureEnd", function (a) {
                    var b = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
                    b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b))
                }).on("touchstart MSPointerDown pointerdown", function (b) {
                    (r = g(b, "down")) && !f(b) || (q = r ? b : b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target : q.target.parentNode), h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && p <= 250 && (m.isDoubleTap = !0), m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId))
                }).on("touchmove MSPointerMove pointermove", function (a) {
                    (r = g(a, "move")) && !f(a) || (q = r ? a : a.touches[0], d(), m.x2 = q.pageX, m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2))
                }).on("touchend MSPointerUp pointerup", function (c) {
                    (r = g(c, "up")) && !f(c) || (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function () {
                        m.el.trigger("swipe"), m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)), m = {}
                    }, 0) : "last" in m && (s < 30 && t < 30 ? i = setTimeout(function () {
                        var b = a.Event("tap");
                        b.cancelTouch = e, m.el.trigger(b), m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), m = {}) : h = setTimeout(function () {
                            h = null, m.el && m.el.trigger("singleTap"), m = {}
                        }, 250)
                    }, 0) : m = {}), s = t = 0)
                }).on("touchcancel MSPointerCancel pointercancel", e), a(window).on("scroll", e)
            }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (b) {
                a.fn[b] = function (a) {
                    return this.on(b, a)
                }
            })
        }(d)
    }, {"./zepto": 63}], 63: [function (a, b, c) {
        var d = function () {
            function a(a) {
                return null == a ? String(a) : U[V.call(a)] || "object"
            }

            function b(b) {
                return "function" == a(b)
            }

            function c(a) {
                return null != a && a == a.window
            }

            function d(a) {
                return null != a && a.nodeType == a.DOCUMENT_NODE
            }

            function e(b) {
                return "object" == a(b)
            }

            function f(a) {
                return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
            }

            function g(a) {
                return "number" == typeof a.length
            }

            function h(a) {
                return D.call(a, function (a) {
                    return null != a
                })
            }

            function i(a) {
                return a.length > 0 ? x.fn.concat.apply([], a) : a
            }

            function j(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function k(a) {
                return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
            }

            function l(a, b) {
                return "number" != typeof b || H[j(a)] ? b : b + "px"
            }

            function m(a) {
                var b, c;
                return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a]
            }

            function n(a) {
                return "children" in a ? C.call(a.children) : x.map(a.childNodes, function (a) {
                    if (1 == a.nodeType)return a
                })
            }

            function o(a, b, c) {
                for (w in b)c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
            }

            function p(a, b) {
                return null == b ? x(a) : x(a).filter(b)
            }

            function q(a, c, d, e) {
                return b(c) ? c.call(a, d, e) : c
            }

            function r(a, b, c) {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            }

            function s(a, b) {
                var c = a.className, d = c && c.baseVal !== v;
                return b === v ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
            }

            function t(a) {
                var b;
                try {
                    return a ? "true" == a || "false" != a && ("null" == a ? null : /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a : b) : a
                } catch (c) {
                    return a
                }
            }

            function u(a, b) {
                b(a);
                for (var c in a.childNodes)u(a.childNodes[c], b)
            }

            var v, w, x, y, z, A, B = [], C = B.slice, D = B.filter, E = window.document, F = {}, G = {}, H = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, I = /^\s*<(\w+|!)[^>]*>/, J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, L = /^(?:body|html)$/i, M = /([A-Z])/g, N = ["val", "css", "html", "text", "data", "width", "height", "offset"], O = ["after", "prepend", "before", "append"], P = E.createElement("table"), Q = E.createElement("tr"), R = {
                tr: E.createElement("tbody"),
                tbody: P,
                thead: P,
                tfoot: P,
                td: Q,
                th: Q,
                "*": E.createElement("div")
            }, S = /complete|loaded|interactive/, T = /^[\w-]*$/, U = {}, V = U.toString, W = {}, X = E.createElement("div"), Y = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, Z = Array.isArray || function (a) {
                    return a instanceof Array
                };
            return W.matches = function (a, b) {
                if (!b || !a || 1 !== a.nodeType)return !1;
                var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
                if (c)return c.call(a, b);
                var d, e = a.parentNode, f = !e;
                return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), d
            }, z = function (a) {
                return a.replace(/-+(.)?/g, function (a, b) {
                    return b ? b.toUpperCase() : ""
                })
            }, A = function (a) {
                return D.call(a, function (b, c) {
                    return a.indexOf(b) == c
                })
            }, W.fragment = function (a, b, c) {
                var d, e, g;
                return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes), function () {
                    g.removeChild(this)
                })), f(c) && (e = x(d), x.each(c, function (a, b) {
                    N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
                })), d
            }, W.Z = function (a, b) {
                return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a
            }, W.isZ = function (a) {
                return a instanceof W.Z
            }, W.init = function (a, c) {
                var d;
                if (!a)return W.Z();
                if ("string" == typeof a)if (a = a.trim(), "<" == a[0] && I.test(a))d = W.fragment(a, RegExp.$1, c), a = null; else {
                    if (c !== v)return x(c).find(a);
                    d = W.qsa(E, a)
                } else {
                    if (b(a))return x(E).ready(a);
                    if (W.isZ(a))return a;
                    if (Z(a))d = h(a); else if (e(a))d = [a], a = null; else if (I.test(a))d = W.fragment(a.trim(), RegExp.$1, c), a = null; else {
                        if (c !== v)return x(c).find(a);
                        d = W.qsa(E, a)
                    }
                }
                return W.Z(d, a)
            }, x = function (a, b) {
                return W.init(a, b)
            }, x.extend = function (a) {
                var b, c = C.call(arguments, 1);
                return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function (c) {
                    o(a, c, b)
                }), a
            }, W.qsa = function (a, b) {
                var c, e = "#" == b[0], f = !e && "." == b[0], g = e || f ? b.slice(1) : b, h = T.test(g);
                return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
            }, x.contains = function (a, b) {
                return a !== b && a.contains(b)
            }, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, x.isEmptyObject = function (a) {
                var b;
                for (b in a)return !1;
                return !0
            }, x.inArray = function (a, b, c) {
                return B.indexOf.call(b, a, c)
            }, x.camelCase = z, x.trim = function (a) {
                return null == a ? "" : String.prototype.trim.call(a)
            }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function (a, b) {
                var c, d, e, f = [];
                if (g(a))for (d = 0; d < a.length; d++)c = b(a[d], d), null != c && f.push(c); else for (e in a)c = b(a[e], e), null != c && f.push(c);
                return i(f)
            }, x.each = function (a, b) {
                var c, d;
                if (g(a)) {
                    for (c = 0; c < a.length; c++)if (b.call(a[c], c, a[c]) === !1)return a
                } else for (d in a)if (b.call(a[d], d, a[d]) === !1)return a;
                return a
            }, x.grep = function (a, b) {
                return D.call(a, b)
            }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
                U["[object " + b + "]"] = b.toLowerCase()
            }), x.fn = {
                forEach: B.forEach,
                reduce: B.reduce,
                push: B.push,
                sort: B.sort,
                indexOf: B.indexOf,
                concat: B.concat,
                map: function (a) {
                    return x(x.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                slice: function () {
                    return x(C.apply(this, arguments))
                },
                ready: function (a) {
                    return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function () {
                        a(x)
                    }, !1), this
                },
                get: function (a) {
                    return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (a) {
                    return B.every.call(this, function (b, c) {
                        return a.call(b, c, b) !== !1
                    }), this
                },
                filter: function (a) {
                    return b(a) ? this.not(this.not(a)) : x(D.call(this, function (b) {
                        return W.matches(b, a)
                    }))
                },
                add: function (a, b) {
                    return x(A(this.concat(x(a, b))))
                },
                is: function (a) {
                    return this.length > 0 && W.matches(this[0], a)
                },
                not: function (a) {
                    var c = [];
                    if (b(a) && a.call !== v)this.each(function (b) {
                        a.call(this, b) || c.push(this)
                    }); else {
                        var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                        this.forEach(function (a) {
                            d.indexOf(a) < 0 && c.push(a)
                        })
                    }
                    return x(c)
                },
                has: function (a) {
                    return this.filter(function () {
                        return e(a) ? x.contains(this, a) : x(this).find(a).size()
                    })
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    var a = this[0];
                    return a && !e(a) ? a : x(a)
                },
                last: function () {
                    var a = this[this.length - 1];
                    return a && !e(a) ? a : x(a)
                },
                find: function (a) {
                    var b, c = this;
                    return b = a ? "object" == typeof a ? x(a).filter(function () {
                        var a = this;
                        return B.some.call(c, function (b) {
                            return x.contains(b, a)
                        })
                    }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function () {
                        return W.qsa(this, a)
                    }) : []
                },
                closest: function (a, b) {
                    var c = this[0], e = !1;
                    for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));)c = c !== b && !d(c) && c.parentNode;
                    return x(c)
                },
                parents: function (a) {
                    for (var b = [], c = this; c.length > 0;)c = x.map(c, function (a) {
                        if ((a = a.parentNode) && !d(a) && b.indexOf(a) < 0)return b.push(a), a
                    });
                    return p(b, a)
                },
                parent: function (a) {
                    return p(A(this.pluck("parentNode")), a)
                },
                children: function (a) {
                    return p(this.map(function () {
                        return n(this)
                    }), a)
                },
                contents: function () {
                    return this.map(function () {
                        return C.call(this.childNodes)
                    })
                },
                siblings: function (a) {
                    return p(this.map(function (a, b) {
                        return D.call(n(b.parentNode), function (a) {
                            return a !== b
                        })
                    }), a)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (a) {
                    return x.map(this, function (b) {
                        return b[a]
                    })
                },
                show: function () {
                    return this.each(function () {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
                    })
                },
                replaceWith: function (a) {
                    return this.before(a).remove()
                },
                wrap: function (a) {
                    var c = b(a);
                    if (this[0] && !c)var d = x(a).get(0), e = d.parentNode || this.length > 1;
                    return this.each(function (b) {
                        x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                    })
                },
                wrapAll: function (a) {
                    if (this[0]) {
                        x(this[0]).before(a = x(a));
                        for (var b; (b = a.children()).length;)a = b.first();
                        x(a).append(this)
                    }
                    return this
                },
                wrapInner: function (a) {
                    var c = b(a);
                    return this.each(function (b) {
                        var d = x(this), e = d.contents(), f = c ? a.call(this, b) : a;
                        e.length ? e.wrapAll(f) : d.append(f)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        x(this).replaceWith(x(this).children())
                    }), this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (a) {
                    return this.each(function () {
                        var b = x(this);
                        (a === v ? "none" == b.css("display") : a) ? b.show() : b.hide()
                    })
                },
                prev: function (a) {
                    return x(this.pluck("previousElementSibling")).filter(a || "*")
                },
                next: function (a) {
                    return x(this.pluck("nextElementSibling")).filter(a || "*")
                },
                html: function (a) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (b) {
                        var c = this.innerHTML;
                        x(this).empty().append(q(this, a, b, c))
                    })
                },
                text: function (a) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                        this.textContent = a === v ? "" : "" + a
                    })
                },
                attr: function (a, b) {
                    var c;
                    return "string" == typeof a && b === v ? 0 == this.length || 1 !== this[0].nodeType ? v : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function (c) {
                        if (1 === this.nodeType)if (e(a))for (w in a)r(this, w, a[w]); else r(this, a, q(this, b, c, this.getAttribute(a)))
                    })
                },
                removeAttr: function (a) {
                    return this.each(function () {
                        1 === this.nodeType && r(this, a)
                    })
                },
                prop: function (a, b) {
                    return a = Y[a] || a, b === v ? this[0] && this[0][a] : this.each(function (c) {
                        this[a] = q(this, b, c, this[a])
                    })
                },
                data: function (a, b) {
                    var c = this.attr("data-" + a.replace(M, "-$1").toLowerCase(), b);
                    return null !== c ? t(c) : v
                },
                val: function (a) {
                    return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value) : this.each(function (b) {
                        this.value = q(this, a, b, this.value)
                    })
                },
                offset: function (a) {
                    if (a)return this.each(function (b) {
                        var c = x(this), d = q(this, a, b, c.offset()), e = c.offsetParent().offset(), f = {
                            top: d.top - e.top,
                            left: d.left - e.left
                        };
                        "static" == c.css("position") && (f.position = "relative"), c.css(f)
                    });
                    if (0 == this.length)return null;
                    var b = this[0].getBoundingClientRect();
                    return {
                        left: b.left + window.pageXOffset,
                        top: b.top + window.pageYOffset,
                        width: Math.round(b.width),
                        height: Math.round(b.height)
                    }
                },
                css: function (b, c) {
                    if (arguments.length < 2) {
                        var d = this[0], e = getComputedStyle(d, "");
                        if (!d)return;
                        if ("string" == typeof b)return d.style[z(b)] || e.getPropertyValue(b);
                        if (Z(b)) {
                            var f = {};
                            return x.each(Z(b) ? b : [b], function (a, b) {
                                f[b] = d.style[z(b)] || e.getPropertyValue(b)
                            }), f
                        }
                    }
                    var g = "";
                    if ("string" == a(b))c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function () {
                        this.style.removeProperty(j(b))
                    }); else for (w in b)b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function () {
                        this.style.removeProperty(j(w))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + g
                    })
                },
                index: function (a) {
                    return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (a) {
                    return !!a && B.some.call(this, function (a) {
                            return this.test(s(a))
                        }, k(a))
                },
                addClass: function (a) {
                    return a ? this.each(function (b) {
                        y = [];
                        var c = s(this), d = q(this, a, b, c);
                        d.split(/\s+/g).forEach(function (a) {
                            x(this).hasClass(a) || y.push(a)
                        }, this), y.length && s(this, c + (c ? " " : "") + y.join(" "))
                    }) : this
                },
                removeClass: function (a) {
                    return this.each(function (b) {
                        return a === v ? s(this, "") : (y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function (a) {
                            y = y.replace(k(a), " ")
                        }), void s(this, y.trim()))
                    })
                },
                toggleClass: function (a, b) {
                    return a ? this.each(function (c) {
                        var d = x(this), e = q(this, a, c, s(this));
                        e.split(/\s+/g).forEach(function (a) {
                            (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                        })
                    }) : this
                },
                scrollTop: function (a) {
                    if (this.length) {
                        var b = "scrollTop" in this[0];
                        return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function () {
                            this.scrollTop = a
                        } : function () {
                            this.scrollTo(this.scrollX, a)
                        })
                    }
                },
                scrollLeft: function (a) {
                    if (this.length) {
                        var b = "scrollLeft" in this[0];
                        return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function () {
                            this.scrollLeft = a
                        } : function () {
                            this.scrollTo(a, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var a = this[0], b = this.offsetParent(), c = this.offset(), d = L.test(b[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : b.offset();
                        return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, {
                            top: c.top - d.top,
                            left: c.left - d.left
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");)a = a.offsetParent;
                        return a
                    })
                }
            }, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function (a) {
                var b = a.replace(/./, function (a) {
                    return a[0].toUpperCase()
                });
                x.fn[a] = function (e) {
                    var f, g = this[0];
                    return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function (b) {
                        g = x(this), g.css(a, q(this, e, b, g[a]()))
                    })
                }
            }), O.forEach(function (b, c) {
                var d = c % 2;
                x.fn[b] = function () {
                    var b, e, f = x.map(arguments, function (c) {
                        return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c)
                    }), g = this.length > 1;
                    return f.length < 1 ? this : this.each(function (a, b) {
                        e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null, f.forEach(function (a) {
                            if (g)a = a.cloneNode(!0); else if (!e)return x(a).remove();
                            u(e.insertBefore(a, b), function (a) {
                                null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                            })
                        })
                    })
                }, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function (a) {
                    return x(a)[b](this), this
                }
            }), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x
        }();
        window.Zepto = d, void 0 === window.$ && (window.$ = d), b.exports = d
    }, {}]
}, {}, [8]);