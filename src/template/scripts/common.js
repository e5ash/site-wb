$(document).ready(function($) {

	$('.input_phone').mask('+7 (999) 999-99-99');
	
	$('.popup__title a').click(function(event) {
		parent.jQuery.fancybox.getInstance().close();
	});



	var visible = true;


	$('.popup_order .popup__close').click(function(event) {
		if (visible == true) {
			$.fancybox.open({src  : '#popup-gift',type : 'inline'});
		}
		visible = false;
	});


	$(window).on('load, scroll', function () {
		var windowScroll = $(window).scrollTop(),
				windowWidth = $(window).width();
		
		if (windowWidth > 1095) {
			if (windowScroll > 181) {
				$('.nav_top').addClass('nav_fix');
			} else {
				$('.nav_top').removeClass('nav_fix');
			}
		} else{
			$('.nav_top').removeClass('nav_fix');
		}
	})
	
	// $.fancybox.open({src  : '#popup-thanks',type : 'inline'});
	
});
