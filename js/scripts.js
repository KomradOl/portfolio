$(document).ready(function() {
	window.scrollBy(0, 1);
	$("input[name='phone']").mask(" +7 (999) 999 99 99");
	buildGallery(".object-slider");
	buildGallery(".reviews");
		$(".right-arrow").click(function() {
		var sliderIndex = $(".slider-img .active").index();
		var sliderLength = $(".slider-img img").length;
		if( ++sliderIndex === sliderLength )
			sliderIndex = 0;
		$(".slider-img .active").removeClass("active");
		$(".slider-img img").eq(sliderIndex).addClass("active");
	});
	$(".left-arrow").click(function() {
		var sliderIndex = $(".slider-img .active").index();
		var sliderLength = $(".slider-img img").length;
		if( --sliderIndex === -1 )
			sliderIndex = sliderLength - 1;
		$(".slider-img .active").removeClass("active");
		$(".slider-img img").eq(sliderIndex).addClass("active");
	});
	setInterval(function() {
		var sliderIndex = $(".slider-img .active").index();
		var sliderLength = $(".slider-img img").length;
		if( ++sliderIndex === sliderLength )
			sliderIndex = 0;
		$(".slider-img .active").removeClass("active");
		$(".slider-img img").eq(sliderIndex).addClass("active");
	}, 3000);
	
	$(".fancybox").fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});
	
});
$(window).on("hashchange", function() {
	var id = window.location.hash.replace("#","");
	switch(id) {
		case "home" : scrollToEl(".main-header");
		break;
		case "about" : scrollToEl(".header");
		break;
		case "service" : scrollToEl(".service");
		break;
		case "portfolio" : scrollToEl(".portfolio");
		break;
		case "why" : scrollToEl(".reasons");
		break;
		case "features" : scrollToEl(".just");
		break;
		case "reviews" : scrollToEl(".reviews");
		break;
		case "contact" : scrollToEl(".contact");
		break;
	}
});



function zzv(){
	document.modform.onsubmit = function() {yaCounter25412183.reachGoal('zzv'); return true;};
}
function zzn(){
	document.modform.onsubmit = function() {yaCounter25412183.reachGoal('zzn'); return true;};
}
function zzm(){
	document.modform.onsubmit = function() {yaCounter25412183.reachGoal('zzm'); return true;};
}





function scrollToEl(element) {
	var offset = $(element).offset();
	var offsetTop = offset.top;
	var totalScroll = offsetTop - 50;
	$('body,html').animate({ scrollTop: totalScroll }, 1000);
}
$(".close-button").click(function() {
	$(".overlay").fadeOut();
	$(".message-block").fadeOut();
});
$(".form-call").click(function(){
	$(".overlay").fadeIn();
	$(".overlay").height($(document).height());
	$(".message-block").fadeIn();
});
function buildGallery(galleryName) {
	var numInt = 0,
		imgLeft = 0,
		maxLeft,
		i,
		index,
		offset = 20,
		$images = $(galleryName + " .slide"),
		imgWidth = $images.width(),
		imgNum = $images.length,
		$imgContainer = $(galleryName + " .slider-inner");
	for(i = 0; i < $images.length; i++) {
		$images.eq(i).css('left', imgLeft + 'px');
		imgLeft += imgWidth + offset;
	}
	maxLeft = imgLeft - imgWidth - offset;
	$(galleryName + " .rbtn").click(function(){
		if(numInt === imgNum) 
			numInt = 0;
		for(i = 0; i < $images.length; i++) {
			if(numInt === i) {
				$images.eq(numInt).stop(false, true);
				$images.eq(numInt).animate({'left': maxLeft + 'px'}, 500);
			}
			else {
				$images.eq(i).stop(false, true);
				$images.eq(i).animate({'left': parseInt($images.eq(i).css('left'), 10) - (imgWidth + offset) + 'px'}, 500);
			}
		}
		numInt++;
	});
	$(galleryName + " .lbtn").click(function(){
		numInt--;
		if(numInt === -1) 
			numInt = imgNum - 1;
		for(i = 0; i < $images.length; i++) {
			if(numInt === i) {
				$images.eq(numInt).stop(false, true);
				$images.eq(numInt).animate({'left': 0}, 500);
			}
			else {
				$images.eq(i).stop(false, true);
				$images.eq(i).animate({'left': parseInt($images.eq(i).css('left'), 10) + (imgWidth + offset) + 'px'}, 300);
			}
		}
	});
}