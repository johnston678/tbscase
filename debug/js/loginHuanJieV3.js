//****************************** */
var useHttps;
var selectServerUrl;
var serversUrl;

var ip = null;
var port;
var zoneid;
var alias;
var state = 0;
var version = "V66";
var whitelist;
var zoneDic = null; // 
var recentServers = null; //最近服务器列表
var formalServers = null; //服务器列表
var serverData = null; // 选服接口返回的服务器列表数据
var isGetServer = false;
var isNewRole = 0;
var isClickEnter = false;
var isLoadEgret = false;
var isLoadMain = false;
var versionFn = "gameVer";

var isGG = false; //是否打开过公告

function showgonggao(e) {
    if (loginArg) {
        showgg()
        if (!isGG) {
            isGG = true;
            var url;
            url = loginArg.ggUrl + "?";
            var data = {};
            data.randnum = Math.random();
            data.cmd = 102;
            data.pf = loginArg.platform;
            if (isTest) { //内测
                data.testserver = 1;
            }

            loadHttp(url, function (result) {
                $('#ggcontent').html("" + result);
            }, data);
        }
    }
}

function ready() {
    $('.goplay').click(function () {
        if (!ip || !loginArg) {
            return;
        }
        var changeAccount = document.getElementById("accountChange");
        if (changeAccount) {
            changeAccount.style.display = "none";
        }

        if (state == 0) { //未开服
            return;
        } else if (state == 2) { //维护中
            showgonggao(null);
            return;
        }

        if (state == 0 && !whitelist) { //不是白名单
            if ($("#alert").length <= 0) {
                createAlert();
                //维护时间
                var url = loginArg.chooseServer;
                var data = {};
                //data.randnum = Math.random();
                //data.cmd = 110;
                //data.pf = loginArg.platform;
                //data.zoneid = zoneid;
                loadHttp(url, function (ret) {
                    $('.alertContent').html("维护时间：<br>" + ret);
                }, data);
            }
            showAlert();
            return;
        }
        $("#gg").remove();
        $('#choose').remove();
        $("#slist").remove();
        $("#popbg").remove();

        $('#loading').addClass('loading loading_webkit');
        $('#loading').removeClass('loading_none');
        isClickEnter = true;
        bodyOnLoad();
    })
    //公告
    $('#ggbtn').click(showgonggao);
    $('#ggclose,#ggtopclose').click(function (e) {
        hidegg()
    });
    //选服页交互
    $('.servername').click(function (e) {
        if (loginArg) {
            if (!isGetServer) {
                isGetServer = true;
                var url = loginArg.chooseServer;
                var data = {};
                data.randnum = Math.random();
                data.cmd = 101;
                data.pf = loginArg.platform;
                data.account = loginArg.account;
                data.type = 2;
                if (isTest) { //内测
                    data.testserver = 1;
                }

                loadHttp(url, function (result) {
                    if (typeof result == 'string') {
                        serverData = JSON.parse(result);
                    } else {
                        serverData = result;
                    }

                    initServerData();
                });
            }
            showslist();
        }

    });

    $('#sclosetitle,#sclose').click(function (e) {
        showchoose();
    });

    if (isTest) {
        initLoginData();
    } else {
        initData();
    }
}

function initData() {
    if (loginArg) {
        var url = loginArg.recomondUrl;
        var data = {};
        //data.randnum = Math.random();
        //data.cmd = 101;
        //data.pf = loginArg.platform;
        //data.account = loginArg.account;
        //data.type = 4;

        loadHttp(url, function (result) {
            if (typeof result == 'string') {
                var info = JSON.parse(result);
            } else {
                info = result;
            }
            console.log("data" + JSON.stringify(data));
            console.log("loadHttpResult:" + result);
            var last = info.last;
            var max = info.maxNew;

            ip = last.ip;
            port = last.port;
            zoneid = last.zoneid;
            loginArg.alias = alias = last.alias;
            state = last.state;
            isNewRole = last.newuser;
            version = last.v;
            whitelist = last.whitelist;
            if (state == 0) {
                $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>未开服</font>");
            } else if (state == 1) {
                $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#00FF00'>选服></font>");
            } else {
                $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>维护中></font>");
            }
            $('.newname').html("最新服&nbsp;&nbsp;<font color='#00FF00'>" + max.alias + "</font>");
        }, data);
    } else {
        setTimeout(function () {
            initData();
        }, 50);
    }
}

//平台类型
function getPlatformType() {
    return 1;
}


function initLoginData() {
    if (loginArg) {
        var selectD;
        if (window.localStorage.selectDate && DEBUGM) {
            selectD = JSON.parse(window.localStorage.selectDate);
            ip = selectD.ip;
            port = selectD.port;
            zoneid = selectD.zoneid;
            alias = selectD.alias
            $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#00FF00'>选服></font>");
            initNewServer();
        } else {
            var url = "";
            var data = {};
            if (DEBUGM) {
                url = selectServerUrl;
            } else {
                url = loginArg.recomondUrl;
                data.randnum = Math.random();
                data.cmd = 101;
                data.pf = loginArg.platform;
                data.account = loginArg.account;
                data.type = 1;
                if (isTest) { //内测
                    data.testserver = 1;
                }
            }

            loadHttp(url, function (result) {
                console.log(result);
                if (typeof result == 'string') {
                    selectD = JSON.parse(result);
                } else {
                    selectD = result;
                }
                ip = selectD.ip;
                port = selectD.port;
                zoneid = selectD.zoneid;
                alias = selectD.alias;
                state = selectD.state;
                isNewRole = selectD.newuser;
                if (state == 0) {
                    $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>未开服</font>");
                } else if (state == 1) {
                    $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#00FF00'>选服></font>");
                } else {
                    $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>维护中></font>");
                }
                initNewServer();
            }, data);
        }
    } else {
        setTimeout(function () {
            initLoginData();
        }, 100);
    }
}

function initNewServer() {
    if (DEBUGM) {} else {
        var url = "";
        url = loginArg.chooseServer;
        var data = {};
        data.randnum = Math.random();
        data.cmd = 101;
        data.pf = loginArg.platform;
        data.account = loginArg.account;
        data.type = 3;
        if (isTest) { //内测
            data.testserver = 1;
        }

        loadHttp(url, function (result) {
            if (result instanceof String) {
                var serverData = JSON.parse(result);
            } else {
                serverData = result;
            }
            $('.newname').html("最新服&nbsp;&nbsp;<font color='#00FF00'>" + serverData.alias + "</font>");
        }, data);
    }
}

function showgg() {
    $('#choose').addClass('choose_none');
    $('#choose').removeClass('choose choose_webkit');
    $('#gg').addClass('gg gg_webkit');
    $('#gg').removeClass('gg_none');
    $('#popbg').show();
}

function hidegg() {
    $('#choose').addClass('choose choose_webkit');
    $('#choose').removeClass('choose_none');
    $('#gg').addClass('gg_none');
    $('#gg').removeClass('gg gg_webkit');
    $('#popbg').hide();
}

function showchoose() {
    $('#choose').addClass('choose choose_webkit');
    $('#choose').removeClass('choose_none');
    $('#slist').addClass('slist_none');
    $('#slist').removeClass('slist slist_webkit');
    $('#popbg').hide();
}

function showslist() {
    $('#choose').addClass('choose_none');
    $('#choose').removeClass('choose choose_webkit');
    $('#slist').addClass('slist slist_webkit');
    $('#slist').removeClass('slist_none');
    $('#popbg').show();
}

function showAlert() {
    $('#choose').addClass('choose_none');
    $('#choose').removeClass('choose choose_webkit');
    $('#alert').addClass('alert alert_webkit');
    $('#alert').removeClass('alert_none');
    $('#popbg').show();
}

function hideAlert() {
    $('#choose').addClass('choose choose_webkit');
    $('#choose').removeClass('choose_none');
    $('#alert').addClass('alert_none');
    $('#alert').removeClass('alert alert_webkit');
    $('#popbg').hide();
}

function createAlert() {
    var str = "<div id='alert' class='alert_none'><div class='alertContent'>维护时间：</div></div>";
    $('#server').append(str);
    $('#alert').click(function (e) {
        hideAlert()
    });
}
//服务器列表
function initServerData() {
    if (!serverData)
        return;
    zoneListData = [];

    serverData.formal.sort(function (a, b) {
        return a.zoneid - b.zoneid;
    });

    recentServers = serverData.recent;
    formalServers = serverData.formal;

    var zoneGap = 20;
    var len = formalServers.length;
    var count = Math.ceil(len / zoneGap);
    for (var i = 0; i < count; i++) {
        var zoneName = "正式服" + (1 + zoneGap * i) + "-" + ((i + 1) * zoneGap);
        zoneListData.push(zoneName);
    }
    zoneListData = zoneListData.reverse();
    var div = '<div class="between_sel">最近登录</div>';
    div += '<div class="between_nosel">最新服</div>';
    var len = zoneListData.length;

    for (var i = 0; i < len; i++) {
        div += '<div class="between_nosel">' + zoneListData[i] + '</div>';
    }
    $('.between').append(div);

    $('.between>div:first').addClass('between_sel');
    $('.between>div').click(function (e) {
        $('.between>div').removeClass('between_sel');
        $('.between>div').addClass('between_nosel');
        $(this).addClass('between_sel');
        $(this).removeClass('between_nosel');
        updateSerList($(this).html());
    });

    var server_div = '<div class="serversel serverindex" style="overflow-y:overlay;">';
    server_div += '</div>';
    $('.slist').append(server_div);

    $('.serversel>div').addClass('servernoselect');

    updateSerList("最近登录");
}
//显示服务器列表
function updateSerList(str) {
    var server_div = '';
    $('.serversel').empty();
    if (str == "最近登录") {
        if (recentServers) {
            for (var i = recentServers.length - 1; i >= 0; i--) {
                var data = recentServers[i];
                var str = JSON.stringify(data);
                server_div += GetServerSelDiv(data);
            }
        }
    } else if (str == "最新服") {
        if (formalServers && formalServers.length) {
            var data = formalServers[formalServers.length - 1];
            server_div += GetServerSelDiv(data);
        }
    } else {
        var sp = str.split('-');
        var first = sp[0];
        var last = sp[1];
        first = Number(first.substring(3, first.length));
        if (formalServers) {
            for (var i = last - 1; i >= (first - 1); i--) {
                var data = formalServers[i];
                if (!data) {
                    continue;
                }
                var str = JSON.stringify(data);
                server_div += GetServerSelDiv(data);
            }
        }
    }
    $('.serversel').append(server_div);

    $('.serversel>div').click(function (e) {
        // 调样式
        $('.serversel>div').addClass('servernoselect');
        $('.serversel>div').removeClass('serverselect');
        $(this).removeClass('servernoselect');
        $(this).addClass('serverselect');
        // 选服
        showchoose();
        // 记录选择信息
        ip = $(this).attr('ip');
        port = $(this).attr('port');
        zoneid = $(this).attr('zoneid');
        loginArg.alias = alias = $(this).attr('alias');
        state = $(this).attr('state');
        if (!isTest) {
            version = $(this).attr('version');
        }
        if (state == 0) {
            $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>未开服</font>");
        } else if (state == 1) {
            $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#00FF00'>选服></font>");
        } else {
            $('.servername').html(alias + "&nbsp;&nbsp;&nbsp;<font color='#FF3333'>维护中></font>");
        }
    });
}
//http请求数据
function loadHttp(url, callback, data) {
    $.ajax({
        type: "get",
        url: url,
        data: data,
        success: function (result) {
            callback && callback(result);
        },
        error: function () {
            callback && callback(null);
        }
    });
}

//{"zoneid":1,"alias":"版本服","state":2,"port":8001,"ip":"192.168.34.55"}
function GetServerSelDiv(data) {
    var zoneid = data.zoneid;
    var servername = data.alias;
    var port = data.port;
    var ip = data.ip;
    var version = data.v;
    var isNew = parseInt(data.isNew);
    var status = parseInt(data.state);

    var tag = "<span ></span>"
    if (isNew) {
        tag = '<span class="new-tag"></span>'
    } else {
        tag = '<span class="hot-tag"></span>'
    }
    if (status == 0) {
        servername += " 维护中";
    }
    return '<div ip=' + ip + ' port=' + port + ' alias=' + servername + ' zoneid=' + zoneid + ' state=' + status + ' version=' + version + ' class="servernoselect">' + servername + tag + '</div>'
}

var pro1;
var star1;
var pro2;
var star2;
var proInter;

function showPro(text, pro, st) {
    showLoadProgress(text, pro, st);
}

//显示语言进度条
function showTipsProgress(text, pro, st) {
    document.getElementById("loading1").style.backgroundImage = "url('')";
    document.getElementById("loading2").style.backgroundImage = "url('')";
    document.getElementById("pro_line1").style.backgroundImage = "url('')";
    document.getElementById("pro_line2").style.backgroundImage = "url('')";
    document.getElementById("star1").style.display = "none";
    document.getElementById("star2").style.display = "none";
    $('#proalert1').html("游戏运行中，请耐心等待...");
    $('#proalert2').html(text);
}

//显示带图片的进度条
function showImgProgress(text, pro, st) {
    if (!proInter) {
        proInter = setInterval(runProgress, 40);
        pro1 = document.getElementById("pro_line1");
        star1 = document.getElementById("star1");
        pro2 = document.getElementById("pro_line2");
        star2 = document.getElementById("star2");
        $('#proalert1').html("游戏运行中，请耐心等待...");
    }
    if (st > 0) {
        clearTimeout(proInter);
        proInter = 0;
        pro2.style.width = 0 + "rem";
        $('#proalert2').html(text + "  <font color='#FF0000'>点击刷新</font>");
        $('#server').click(reLoginWeb);
    } else {
        $('#proalert2').html(text);
    }

    var w = (pro / 100) * 7.65;
    pro1.style.width = w + "rem";
    if (pro >= 95) {
        pro2.style.width = 7.65 + "rem";
        clearTimeout(proInter);
        proInter = 0;
    }
}

var pro2num = 0;

function runProgress() {
    if (pro2num == 7.56) {
        pro2num = 0;
    }
    pro2num += 0.5;
    if (pro2num > 7.56) {
        pro2num = 7.56;
    }
    pro2.style.width = pro2num + "rem";
}

function isHideProgressBar() {
    return true;//loginArg.platform == "ios";
}

//进度条
function showLoadProgress(text, pro, st) {
    if (!isClickEnter) {
        return;
    }
    var isHide = isHideProgressBar();
    if (isHide) {
        showTipsProgress(text, pro, st);
    } else {
        showImgProgress(text, pro, st);
    }
}

//
//是否新用户
function isNewUser() {
    if (recentServers) { //是否在最近登录列表中
        for (var i = recentServers.length - 1; i >= 0; i--) {
            var data = recentServers[i];
            if (parseInt(zoneid) == parseInt(data.zoneid)) {
                return 0;
            }
        }
        return 1;
    } else {
        return isNewRole;
    }
}
var loadOne = true;
//加载引擎和主文件
function bodyOnLoad() {
    if (loginArg) {
        if (loadOne) {
            loadOne = false;
            loadGameJS();
        }
    } else {
        //setTimeout(bodyOnLoad, 50);
    }
}
//加版本号
function getResVersion(url) {
    var loginArg_ = loginArg;
    if (url == "egretLib.min.js") {
        return "egretLib.min.js";
    } else if (url == "main.min.js") {
        return "main.min_" + version + ".js";
    } else {
        return url;
    }
}

function loadGameJS() {
    showLoadProgress("初始化游戏引擎", 15, 0);
    // loadScriptRes(loginArg.cdn + "libs/egretLib5_0_15V9.js", function () {
    //     showLoadProgress("初始化游戏主程序", 35, 0);
    //     isLoadEgret = true;
    //     loadScriptRes(loginArg.cdn + version + "/main.min.js", function () {
    //         showLoadProgress("初始化游戏", 45, 0);
    //         isLoadMain = true;
    //         runEgretMain();
    //         isInGame = true;
    //     });
    // });
    var script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src="https://hjcscdn-res.xcwlxcwl.cn/HuanJieChuanShuoQzone/libs/egretLib5_0_15V9.js"
    document.body.appendChild(script1);
    script1.onload = function() {
        showLoadProgress("初始化游戏主程序", 35, 0);
        isLoadEgret = true;
        var script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src="https://hjcscdn-res.xcwlxcwl.cn/HuanJieChuanShuoQzone/V102/main.min.js"
        document.body.appendChild(script2);
        script2.onload = function() {
            showLoadProgress("初始化游戏", 45, 0);
            isLoadMain = true;
            runEgretMain();
            isInGame = true;
        }
    }
}

function runEgretMain() {
    isClickEnter = true;
    if (isClickEnter && isLoadEgret && isLoadMain) {

        var serverData = {};

        loginArg.ip = serverData.ip = ip;
        loginArg.port = serverData.port = port;
        loginArg.zoneid = serverData.zoneid = "" + zoneid;
        loginArg.serverName = serverData.alias = alias;
        loginArg.state = serverData.state = state;
        loginArg.versionFn = versionFn;
        loginArg.ver = version;

        egret.runEgret({
            renderMode: "webgl",
            audioType: 0
        });
        egret.ImageLoader.crossOrigin = 'anonymous';
    }
}

function myBrowser() {
    try {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Presto") > -1;
        if (isOpera) { //判断是否Opera内核
            return "Opera"
        }
        if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox内核
            return "FF";
        }
        if (userAgent.indexOf("AppleWebKit") > -1) { //判断是否谷歌内核
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) { //判断是否Safari内核
            return "Safari";
        }
        if (userAgent.indexOf("Trident") > -1) { //判断是否IE内核
            return "IE";
        }
        if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
            return "Android";
        }
        if (userAgent.indexOf('iPhone') > -1) {
            return "iPhone";
        }
        if (userAgent.indexOf('iPad') > -1) {
            return "iPad";
        }
    } catch (err) {}
    return "Other";
}

function removeLoading() {
    diposeLoadView();
}

function diposeLoadView() {
    $("#server").remove();
    if (proInter > 0) {
        clearTimeout(proInter);
        proInter = 0;
    }
}

function setLoadVis(v) {
    if (v) {
        $('#server').removeClass('server_none');
        $('#server').addClass('server server_webkit');
    } else {
        $('#server').removeClass('server server_webkit');
        $('#server').addClass('server_none');
    }
}

function reLoginWeb() {
    window.location.reload();
}

function getLoginArg() {
    return loginArg;
}