$(function(){
  // ▼マウスが載ったらサブメニューを表示
  $(".head__under__wrapper__cat").mouseenter(function(){
     $(".head__under__in-brand").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
     $(".head__under__in-category").slideDown(150);     // 自分のサブメニューを表示する。
     $('.head__under__wrapper__cat').css('background-color', '#ffd9eb')
     $('.head__under__wrapper__cat').css('color', '#ff59c3')
  });
  // ▼どこかがクリックされたらサブメニューを消す
  $('html').click(function() {
     $('.head__under__in-category').slideUp(150);
     $('.head__under__wrapper__cat').css('background-color', '#ff59c3')
     $('.head__under__wrapper__cat').css('color', 'white')
  });
});