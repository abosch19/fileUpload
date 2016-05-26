$(document).ready(function(){
  $('.how_work').mouseover(function(){
    $(this).css({cursor:"pointer"});
  });

  $(".how_work, .nav_how").click(function() {
    $('html, body').animate({
        scrollTop: $(".tutorial").offset().top
    }, 1000);
  });

  $(window).scroll(function (){
      $('section.home').css('top', $(window).scrollTop()/10);
  });
});
