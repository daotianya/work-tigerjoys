$(document).ready(function(){
	function resizeWidth() {
		var width = $(window).width();
//		console.log(width)
		var padd = (width - 1200) / 2 + 'px';
		$(".center").css({
			'padding-left': padd,
			'padding-right': padd
		});
	
	};
	resizeWidth();
	
	function resizeHeight(){
		var winHeight=$(window).height()-220;
		var bodyHeight=$(".body").outerHeight(true);
		if(bodyHeight>0&& bodyHeight<winHeight){
			
			$("#footer").css({
				"position": "fixed",
				"left": 0,
				"bottom":0
			})
		}
	}
	resizeHeight();
	
	$(window).resize(function() {
		resizeWidth();
		resizeHeight();
	});
	
	$(".replay").click(function(){
		location.reload();
	});

	
});