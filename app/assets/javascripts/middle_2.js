function loopTopSlider2(){
	var sliderSize = $('.loopSlider2 .loopslider_wrap2 ul').width();
	$('.loopSlider2 .loopslider_wrap2').css({'width':sliderSize*2+'px'});
	$('.loopSlider2 .loopslider_wrap2').find('ul').clone().appendTo('.loopSlider2 .loopslider_wrap2');
};
function loopsliderPosition2(){
	var sliderSize = $('.loopSlider2 .loopslider_wrap2 ul:first-of-type').width();
	$('.loopslider_wrap2').css({left:'0'});
	$('.loopslider_wrap2').stop().animate({left:'-'+(sliderSize)+'px'},35000,'linear');
	setTimeout(function(){
		loopsliderPosition2();
	},35000);
};

$(function(){
  
});