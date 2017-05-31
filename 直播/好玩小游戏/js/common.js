$(document).ready(function(){
	function resizeWidth() {
		var width = $(window).width();
		var padd = (width - 1200) / 2 + 'px';
		$(".center").css({
			'padding-left': padd,
			'padding-right': padd
		});
	
	};
	resizeWidth();
	
	$(window).resize(function() {
		resizeWidth();
	});
	
	$(".replay").click(function(){
		location.reload();
	})
});