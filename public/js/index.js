$(document).ready(function(){
  $('.how_work').mouseover(function(){
    $(this).css({cursor:"pointer"});
  });

  $(".how_work").click(function() {
    $('html, body').animate({
        scrollTop: $(".q").offset().top
    }, 1000);
  });
});
