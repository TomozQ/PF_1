function loopTopSlider(){
	var sliderSize = $('.loopSlider .loopslider_wrap ul').width();
	$('.loopSlider .loopslider_wrap').css({'width':sliderSize*2+'px'});
	$('.loopSlider .loopslider_wrap').find('ul').clone().appendTo('.loopSlider .loopslider_wrap');
};
function loopsliderPosition(){
  var sliderSize = $('.loopSlider .loopslider_wrap ul:first-of-type').width();
	$('.loopslider_wrap').css({left:'-' + (sliderSize) + 'px'});
	$('.loopslider_wrap').stop().animate({left:'0'},30000,'linear');
	setTimeout(function(){
		loopsliderPosition();
	},30000);
};