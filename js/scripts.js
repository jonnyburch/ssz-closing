// Videos that scale

$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".container").fitVids();
});

// Scroll to

$("#magsbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#mags").offset().top
    }, 2000);
});