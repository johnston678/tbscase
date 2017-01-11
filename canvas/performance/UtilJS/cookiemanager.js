var startAllTest="startTest";
var testTimeOut = 5*60*1000;//测试页面总共的测试时间
var testPageInteral = 30*1000;//主页面跳转到各个测试页面的间隔时间
var testStartRecordTime = 90*1000;//开始测试到正式记录数据的时间
var testMaxCount = 30;
var testRefreshInteral = 6*60*1000;//主页面定时刷新时间间隔

var allArrayObj = new Array();//创建一个数组
var cookieAndUrlArray = new Array();

var max_value=0;
var min_value=10000;
var valueArray=new Array();
var MAX_COUNT=0;
var m_cookieName="";

//HTML5 utovr
var utovr_min="utovr_min";
var utovr_max="utovr_max";
var utovr_avg="utovr_avg";
var utovr_url="UtoVR/sample/utovr.html";
allArrayObj.push(utovr_min,utovr_max,utovr_avg);
cookieAndUrlArray.push(createObject(utovr_avg, utovr_url));

//HTML5 layaboxar
var layaboxar_min="layaboxar_min";
var layaboxar_max="layaboxar_max";
var layaboxar_avg="layaboxar_avg";
var layaboxar_url="layademo/layaboxar.html";
allArrayObj.push(layaboxar_min,layaboxar_max,layaboxar_avg);
cookieAndUrlArray.push(createObject(layaboxar_avg, layaboxar_url));

//HTML5 Canvas GUIMark3 Performance
//GUIMark3 GM3_JS_Bitmap相关变量
var GM3_JS_Bitmap_min="GM3_JS_Bitmap_min";
var GM3_JS_Bitmap_max="GM3_JS_Bitmap_max";
var GM3_JS_Bitmap_avg="GM3_JS_Bitmap_avg";
var GM3_JS_Bitmap_url="GUIMark3/bitmap/GM3_JS_Bitmap.html";
allArrayObj.push(GM3_JS_Bitmap_min,GM3_JS_Bitmap_max,GM3_JS_Bitmap_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Bitmap_avg, GM3_JS_Bitmap_url));

//GUIMark3 GM3_JS_Bitmap_cache相关变量
var GM3_JS_Bitmap_cache_min="GM3_JS_Bitmap_cache_min";
var GM3_JS_Bitmap_cache_max="GM3_JS_Bitmap_cache_max";
var GM3_JS_Bitmap_cache_avg="GM3_JS_Bitmap_cache_avg";
var GM3_JS_Bitmap_cache_url="GUIMark3/bitmap/GM3_JS_Bitmap_cache.html";
allArrayObj.push(GM3_JS_Bitmap_cache_min,GM3_JS_Bitmap_cache_max,GM3_JS_Bitmap_cache_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Bitmap_cache_avg, GM3_JS_Bitmap_cache_url));

//GUIMark3 GM3_JS_Compute相关变量
var GM3_JS_Compute_min="GM3_JS_Compute_min";
var GM3_JS_Compute_max="GM3_JS_Compute_max";
var GM3_JS_Compute_avg="GM3_JS_Compute_avg";
var GM3_JS_Compute_url="GUIMark3/compute/GM3_JS_Compute.html";
allArrayObj.push(GM3_JS_Compute_min,GM3_JS_Compute_max,GM3_JS_Compute_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Compute_avg, GM3_JS_Compute_url));

//GUIMark3 GM3_JS_Vector相关变量
var GM3_JS_Vector_min="GM3_JS_Vector_min";
var GM3_JS_Vector_max="GM3_JS_Vector_max";
var GM3_JS_Vector_avg="GM3_JS_Vector_avg";
var GM3_JS_Vector_url="GUIMark3/vector/GM3_JS_Vector.html";
allArrayObj.push(GM3_JS_Vector_min,GM3_JS_Vector_max,GM3_JS_Vector_avg);
cookieAndUrlArray.push(createObject(GM3_JS_Vector_avg, GM3_JS_Vector_url));

//HTML5 WebGL Khronos Performance
//ManyPlanetsDeep
var ManyPlanetsDeep_min="ManyPlanetsDeep_min";
var ManyPlanetsDeep_max="ManyPlanetsDeep_max";
var ManyPlanetsDeep_avg="ManyPlanetsDeep_avg";
var ManyPlanetsDeep_url="KhronosGroup/ManyPlanetsDeep.html";
allArrayObj.push(ManyPlanetsDeep_min,ManyPlanetsDeep_max,ManyPlanetsDeep_avg);
cookieAndUrlArray.push(createObject(ManyPlanetsDeep_avg, ManyPlanetsDeep_url));

//WebGL_CSS
var WebGL_CSS_min="WebGL_CSS_min";
var WebGL_CSS_max="WebGL_CSS_max";
var WebGL_CSS_avg="WebGL_CSS_avg";
var WebGL_CSS_url="KhronosGroup/WebGL_CSS.html";
allArrayObj.push(WebGL_CSS_min,WebGL_CSS_max,WebGL_CSS_avg);
cookieAndUrlArray.push(createObject(WebGL_CSS_avg, WebGL_CSS_url));

//HTML5 WebGLSamples Google IO Performance
//objects
var objects_min="objects_min";
var objects_max="objects_max";
var objects_avg="objects_avg";
var objects_url="WebGLSamples/Googleio/objects.html";
allArrayObj.push(objects_min,objects_max,objects_avg);
cookieAndUrlArray.push(createObject(objects_avg, objects_url));

//lots_of_objects_google
var lots_of_objects_google_min="lots_of_objects_google_min";
var lots_of_objects_google_max="lots_of_objects_google_max";
var lots_of_objects_google_avg="lots_of_objects_google_avg";
var lots_of_objects_google_url="WebGLSamples/Googleio/lots_of_objects_google.html";
allArrayObj.push(lots_of_objects_google_min,lots_of_objects_google_max,lots_of_objects_google_avg);
cookieAndUrlArray.push(createObject(lots_of_objects_google_avg, lots_of_objects_google_url));

//HTML5 WebGLSamples Performance
//sprites
var sprites_min="sprites_min";
var sprites_max="sprites_max";
var sprites_avg="sprites_avg";
var sprites_url="WebGLSamples/sprites/sprites.html";
allArrayObj.push(sprites_min,sprites_max,sprites_avg);
cookieAndUrlArray.push(createObject(sprites_avg, sprites_url));

//spacerocks
var spacerocks_min="spacerocks_min";
var spacerocks_max="spacerocks_max";
var spacerocks_avg="spacerocks_avg";
var spacerocks_url="WebGLSamples/spacerocks/spacerocks.html";
allArrayObj.push(spacerocks_min,spacerocks_max,spacerocks_avg);
cookieAndUrlArray.push(createObject(spacerocks_avg, spacerocks_url));

//multiple_views
var multiple_views_min="multiple_views_min";
var multiple_views_max="multiple_views_max";
var multiple_views_avg="multiple_views_avg";
var multiple_views_url="WebGLSamples/multiple-views/multiple_views.html";
allArrayObj.push(multiple_views_min,multiple_views_max,multiple_views_avg);
cookieAndUrlArray.push(createObject(multiple_views_avg, multiple_views_url));


function createObject(cookieName, url)
{
	var object = new Object();
	object.cookieName = cookieName;
	object.url = url;
	return object;
}

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

function backTohomeUrl() {
	var avg = getAvgValue();
	var pageCookieName = m_cookieName.replace("_avg","");
    setCookie(pageCookieName+"_avg",avg);
    setCookie(pageCookieName+"_max",Math.round(max_value));
    setCookie(pageCookieName+"_min",Math.round(min_value));
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
		return Math.round(average / length);	
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
