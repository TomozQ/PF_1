$(function(){
  $(".top_contents__images__image").hover(
    function(){
    console.log('hoge')
    $(this).find('div').fadeOut(200)
  },
  function(){
    $(this).find('div').css('display', 'block')
  });
});