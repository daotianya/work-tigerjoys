function fontSize(doc, win,fontSize,baseSize) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = fontSize * (clientWidth / baseSize) + 'px';		
	};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
}

var ua=navigator.userAgent.toLowerCase();
if (/android (\d+\.\d+)/.test(ua)) {
	//安卓手机
	fontSize(document,window,20,360);
} else if(ua.indexOf('iphone') > -1){
	//苹果手机
	fontSize(document,window,20.8333,375);	
}