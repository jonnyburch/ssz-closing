// Videos that scale

$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".container").fitVids();
});

// Scroll to

$(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});