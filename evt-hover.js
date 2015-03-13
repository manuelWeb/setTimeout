jQuery(function($){
	//voir toute la selection
	$('.btn img').mouseover(function(){
		    $(this).stop().animate({opacity:0});
		    $('.btn').css({'background-position':'0 0'});
		}).mouseleave(function(){
			$(this).stop().animate({opacity:1});
		    $('.btn').css({'background-position':'0 0'});
		});
});