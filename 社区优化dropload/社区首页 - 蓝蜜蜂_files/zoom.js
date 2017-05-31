 $(function(){
	screenFix();
    var orientationEvent = ('onorientationchange' in window) ? 'orientationchange' : 'resize';
    window.addEventListener(orientationEvent, function() {
        window.setTimeout(function(){
        	screenFix();
        }, 600);
    }, false);
    function screenFix(){
		var _width = window.innerWidth;
		var zoom = _width / 320;
		zoom = zoom > 4?4:zoom;
		$('html').css({
			zoom: (zoom*100)+'%'
		});
	};
});