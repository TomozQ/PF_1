$(function(){
  // ▼マウスが載ったらサブメニューを表示
  $(".quote_site").click(function(){
     $(".quote__wrapper").slideDown(300);
     $('.close').click(function(){
      $('.quote__wrapper').slideUp(300);
     });
  });
});