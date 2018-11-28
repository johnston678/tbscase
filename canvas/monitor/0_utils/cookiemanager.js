//auto test
function createObject(cookieName, url)
{
    var object = new Object();
    object.cookieName = cookieName;
    object.url = url;
    return object;
}

var startAllTest="startTest";

/*
//test
var testTimeOut = 25*1000;//测试页面总共的测试时间
var testPageInteral = 5*1000;//主页面跳转到各个测试页面的间隔时间
var testStartRecordTime = 10*1000;//开始测试到正式记录数据的时间
var testMaxCount = 30;
var testRefreshInteral = 30*1000;//主页面定时刷新时间间隔
//end
*/

var testTimeOut = 5*60*1000;//测试页面总共的测试时间
var testPageInteral = 30*1000;//主页面跳转到各个测试页面的间隔时间
var testStartRecordTime = 90*1000;//开始测试到正式记录数据的时间
var testMaxCount = 30;
var testRefreshInteral = 6*60*1000;//主页面定时刷新时间间隔

var allArrayObj = new Array();//创建一个数组
var cookieAndUrlArray = new Array();

//GUIMark3 GM3_JS_Bitmap相关变量
var GM3_JS_Bitmap_min="GM3_JS_Bitmap_min";
var GM3_JS_Bitmap_max="GM3_JS_Bitmap_max";
var GM3_JS_Bitmap_avg="GM3_JS_Bitmap_avg";
var GM3_JS_Bitmap_url="./GUIMark3bitmap/GM3_JS_Bitmap.html";
allArrayObj.push(GM3_JS_Bitmap_min,GM3_JS_Bitmap_max,GM3_JS_Bitmap_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Bitmap_avg, GM3_JS_Bitmap_url));

//GUIMark3 GM3_JS_Vector相关变量
var GM3_JS_Vector_min="GM3_JS_Vector_min";
var GM3_JS_Vector_max="GM3_JS_Vector_max";
var GM3_JS_Vector_avg="GM3_JS_Vector_avg";
var GM3_JS_Vector_url="./GUIMark3vector/GM3_JS_Vector.html";
allArrayObj.push(GM3_JS_Vector_min,GM3_JS_Vector_max,GM3_JS_Vector_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Vector_avg, GM3_JS_Vector_url));

//GUIMark3 GM3_JS_Compute相关变量
var GM3_JS_Compute_min="GM3_JS_Compute_min";
var GM3_JS_Compute_max="GM3_JS_Compute_max";
var GM3_JS_Compute_avg="GM3_JS_Compute_avg";
var GM3_JS_Compute_url="./GUIMark3compute/GM3_JS_Compute.html";
allArrayObj.push(GM3_JS_Compute_min,GM3_JS_Compute_max,GM3_JS_Compute_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Compute_avg, GM3_JS_Compute_url));

//webgl_custom_attributes_particles2相关变量
var webgl_shader2_min="webgl_shader2_min";
var webgl_shader2_max="webgl_shader2_max";
var webgl_shader2_avg="webgl_shader2_avg";
var webgl_shader2_url="three.js-r71/webgl_shader2.html";
allArrayObj.push(webgl_shader2_min,webgl_shader2_max,webgl_shader2_avg);
cookieAndUrlArray.push(createObject(webgl_shader2_avg, webgl_shader2_url));

//webgl_materials相关变量
var webgl_materials_min="webgl_materials_min";
var webgl_materials_max="webgl_materials_max";
var webgl_materials_avg="webgl_materials_avg";
var webgl_materials_url="three.js-r71/webgl_materials.html";
allArrayObj.push(webgl_materials_min,webgl_materials_max,webgl_materials_avg);
cookieAndUrlArray.push(createObject(webgl_materials_avg, webgl_materials_url));

//webglspacerocks相关变量
var webglspacerocks_min="webglspacerocks_min";
var webglspacerocks_max="webglspacerocks_max";
var webglspacerocks_avg="webglspacerocks_avg";
var webglspacerocks_url="googleio/webglspacerocks.html";
allArrayObj.push(webglspacerocks_min,webglspacerocks_max,webglspacerocks_avg);
cookieAndUrlArray.push(createObject(webglspacerocks_avg, webglspacerocks_url));

//设置cookie
function setCookie(c_name,value)
{
    window.localStorage.setItem(c_name,value);
}
	
//读取cookie
function getCookie(c_name)
{
    for(var index=0; index<window.localStorage.length; index++)
    {
        if(c_name==window.localStorage.key(index))
            return window.localStorage.getItem(c_name);
    }
    return "";
}

function removeCookie(c_name)
{
    setCookie(c_name,"");
}

//清除所有cookie
function clearAllCookie()
{    
    var length = allArrayObj.length;
	for(i = 0;i < length; i++)
	{
		removeCookie(allArrayObj[i]);
	}
	//停止测试
	removeCookie(startAllTest);
}

var max_value=0;
var min_value=10000;
var valueArray=new Array();
var MAX_COUNT=0;
var m_cookieName="";

function backTohomeUrl() {
	var avg = getAvgValue();
	var pageCookieName = m_cookieName.replace("_avg","");
    setCookie(pageCookieName+"_avg",avg);
    //setCookie(pageCookieName+"_max",Math.round(max_value));
    //setCookie(pageCookieName+"_min",Math.round(min_value));
    setCookie(pageCookieName+"_max",max_value.toFixed(2));
    setCookie(pageCookieName+"_min",min_value.toFixed(2));
    console.log("url:"+pageCookieName+" avg:"+avg+" max_value:"+max_value+ " min_value:"+min_value);
    window.history.back();
}

function closeWindowAndSetCookieAfterDelayTime(delayTime, cookieName)
{
	//设置测试时间
	setTimeout(
		'backTohomeUrl()',
		testTimeOut);

	//清理之前记录的数据
	setTimeout(
		function() {
			valueArray.splice(0, valueArray.length);
			max_value=0;
			min_value=10000;
		},
		testStartRecordTime);

	m_cookieName = cookieName;

	initTBSFPS();
}

function closeWindowAndSetCookieAfterCount(count, cookieName)
{	
	if (undefined != count && 0 != count)
	{
			MAX_COUNT=count;
	}

	if(MAX_COUNT>testMaxCount)
	{
		MAX_COUNT = testMaxCount;
	}
	
	m_cookieName = cookieName;
}

function addValue(value)
{
        if (null == value || isNaN( value))
		{
            return;
		}

        if (MAX_COUNT > 0 && valueArray.length > MAX_COUNT+1)
        {
            return;
        }
		
		if (max_value < value)
		{
				max_value = value;
		}
		if (min_value > value)
		{
				min_value = value;
		}

		if (!isNaN(value)) 
		{
			//console.log("FPS:"+value);
            valueArray.push(value);
		}
		
    
    	
		if (MAX_COUNT > 0 && valueArray.length >=MAX_COUNT)
		{
           	backTohomeUrl();
		}
}

function getAvgValue()
{
        var average = 0;
		var length = valueArray.length;
		for (var i=0; i < length; i++){
			average += valueArray[i];
		}
		//return Math.round(average / length);
		return (average/length).toFixed(2);
}

var drawIndex = 1;
function checkFPS(ctx)
{
    if(drawIndex>2)
    {
        drawIndex = 1;
    }
    //绘制二个矩形在相同的位置
    if(drawIndex % 2 == 1)
    {
        ctx.fillStyle="#FFF000";
        ctx.fillRect(0,200,50,50);

        ctx.fillStyle="#FF0000";
        ctx.fillRect(0,250,50,50);
    }
    else
    {
        ctx.fillStyle="#000FFF";
        ctx.fillRect(0,200,50,50);

        ctx.fillStyle="#FF0000";
        ctx.fillRect(50,250,50,50);
    }
    drawIndex++;
}

//FPS
var tbsfpsMeter = null;

TBSTimeUtil = {
	startTime: new Date().getTime(),
	getTimer: function(){
		return new Date().getTime()-TBSTimeUtil.startTime;
	}
}

function TBSFPSMeter(){
	var sampleFPS = 0;
	var lastSampledTime = 0;
	var sampleFrames = 0;
	var attchedBody = false;
	var sampleElement=document.createElement("div");
	sampleElement.style="position:absolute;padding: 0px; margin: 0px; color:#FF0000; z-index:1";
	sampleElement.id="fpsmeterId";

	if(document.body!=null) {
		//document.body.appendChild(sampleElement);
		document.body.insertBefore(sampleElement,document.body.firstChild);
		attchedBody = true;
	}

	this.sampleDuration = 1000;

	this.showFPS = function(){
		sampleFrames++;
		var diff = TBSTimeUtil.getTimer()-lastSampledTime;
		if(diff >= this.sampleDuration){
			var rawFPS = sampleFrames/(diff/1000);
			sampleFPS = TBSFPSMeter.formatNumber(rawFPS);
			sampleFrames = 0;
			lastSampledTime = TBSTimeUtil.getTimer();
			sampleElement.innerHTML = sampleFPS+" FPS";
			addValue(sampleFPS);
			if(!attchedBody && document.body!=null) {
				//document.body.appendChild(sampleElement);
				document.body.insertBefore(sampleElement,document.body.firstChild);
				attchedBody = true;
			}
		}
	}
}

TBSFPSMeter.formatNumber = function(val){
	//format as XX.XX
	return Math.floor(val*100)/100;
}

function loopTBSFPS() {
	if(tbsfpsMeter!=null)
		tbsfpsMeter.showFPS();
	requestAnimationFrame(loopTBSFPS);
}

function initTBSFPS(){
	if(tbsfpsMeter==null)
		tbsfpsMeter = new TBSFPSMeter();
	requestAnimationFrame(loopTBSFPS);
}



