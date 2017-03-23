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

//1.js console insertJS function
//2.insertJS("insertFPS","http://whmgc.cn/debug/fps.js");
//3.initFPS();
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

