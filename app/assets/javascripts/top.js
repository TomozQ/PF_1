$(function(){
  // ▼マウスが載ったらサブメニューを表示
  $(".head__under__wrapper__cat").mouseenter(function(){
     $(".head__under__in-category").slideDown(300);     // 自分のサブメニューを表示する。
     $('.head__under__wrapper__cat').css('background-color', 'gold')
     $('.head__under__wrapper__cat').css('color', 'black')
     $(".head__under__in-category").css('z-index', '9999');
     $(".head__under__in-brand").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
     $('.head__under__wrapper__bra').css('background-color', 'black')
     $('.head__under__wrapper__bra').css('color', 'white')
  });

  $(".head__under__wrapper__bra").mouseenter(function(){
    $(".head__under__in-brand").slideDown(300);     // 自分のサブメニューを表示する。
    $('.head__under__wrapper__bra').css('background-color', 'gold')
    $('.head__under__wrapper__bra').css('color', 'black')
    $(".head__under__in-brand").css('z-index', '9999');
    $(".head__under__in-category").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
    $('.head__under__wrapper__cat').css('background-color', 'black')
     $('.head__under__wrapper__cat').css('color', 'white')
 });

  // ▼どこかがクリックされたらサブメニューを消す
  $('html').click(function() {
     $('.head__under__in-category').slideUp(300);
     $('.head__under__in-brand').slideUp(300);
     $('.head__under__wrapper__cat').css('background-color', 'black')
     $('.head__under__wrapper__cat').css('color', 'white')
     $('.head__under__wrapper__bra').css('background-color', 'black')
     $('.head__under__wrapper__bra').css('color', 'white')
  });
});