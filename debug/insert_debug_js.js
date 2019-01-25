var fpsMeter = null;

TimeUtil = {
	startTime: new Date().getTime(),
	getTimer: function(){
		return new Date().getTime()-TimeUtil.startTime;
	}
}

function FPSMeter(){
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
		var diff = TimeUtil.getTimer()-lastSampledTime;
		if(diff >= this.sampleDuration){
			var rawFPS = sampleFrames/(diff/1000);
			sampleFPS = FPSMeter.formatNumber(rawFPS);
			sampleFrames = 0;
			lastSampledTime = TimeUtil.getTimer();
			sampleElement.innerHTML = sampleFPS+" FPS";
			if(!attchedBody && document.body!=null) {
				//document.body.appendChild(sampleElement);
				document.body.insertBefore(sampleElement,document.body.firstChild);
				attchedBody = true;
			}
		}
	}
}

FPSMeter.formatNumber = function(val){
	//format as XX.XX
	return Math.floor(val*100)/100;
}

function loopFPS() {
	if(fpsMeter!=null)
		fpsMeter.showFPS();
	requestAnimationFrame(loopFPS);
}

function initFPS(){
	if(fpsMeter==null)
		fpsMeter = new FPSMeter();
	requestAnimationFrame(loopFPS);
}

function insertAllEvent(eventEle) {
	var beginTime = 0;
	var currentTime = 0;
	var strLog = "";
	function handleEvent(event)
	{
		currentTime = (new Date()).getTime();
		if("touchstart"==event.type)
		{
			if(currentTime - beginTime > 1000)
			{
				beginTime = (new Date()).getTime();
			}
		}
		strLog = " EventTargetId:"+event.target.id+" EventType:" + event.type + " CostTime:" + (currentTime-beginTime) + "ms";
		if("touchstart"==event.type || "touchstart"==event.type || "touchstart"==event.type || "touchstart"==event.type)
		{
			strLog += +" pageX:"+event.touches[0].pageX+" pageY:"+event.touches[0].pageY+" screenX:"+event.touches[0].screenX+" screenY:"+event.touches[0].screenY;
		}
		console.log(strLog);
	}
	eventEle.addEventListener("touchstart", handleEvent, false);
	eventEle.addEventListener("touchmove", handleEvent, false);
	eventEle.addEventListener("touchend", handleEvent, false);
	eventEle.addEventListener("touchcancel", handleEvent, false);
	eventEle.addEventListener("mousemove", handleEvent, false);
	eventEle.addEventListener("mousedown", handleEvent, false);
	eventEle.addEventListener("mouseup", handleEvent, false);
	eventEle.addEventListener("mouseover", handleEvent, false);
	eventEle.addEventListener("mouseout", handleEvent, false);
	eventEle.addEventListener("click", handleEvent, false);
	eventEle.addEventListener("tap", handleEvent, false);
	eventEle.addEventListener("singleTap", handleEvent, false);
	eventEle.addEventListener("doubleTap", handleEvent, false);
	eventEle.addEventListener("longTap", handleEvent, false);
	eventEle.addEventListener("wx-tap", handleEvent, false);
	eventEle.addEventListener("wx-singleTap", handleEvent, false);
	eventEle.addEventListener("wx-doubleTap", handleEvent, false);
	eventEle.addEventListener("wx-longTap", handleEvent, false);
}

//1.js console define insertJS function
//2.insert js do insertJS("insert_debug_js","http://whmgc.cn/debug/insert_debug_js.js");
//3.exec js function，for example insertAllEvent(document.body),initFPS()
/*
function insertJS(jsid,jsurl){
	var nodeHead = document.getElementsByTagName('head')[0];
	var nodeScript = null;
	if(document.getElementById(jsid) == null){
		nodeScript = document.createElement('script');
		nodeScript.setAttribute('type', 'text/javascript');
		nodeScript.setAttribute('src', jsurl);
		nodeScript.setAttribute('id',jsid);
		nodeHead.appendChild(nodeScript);
	}
}
*/

