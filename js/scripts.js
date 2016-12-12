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

// home slideshows

$(".header").backstretch([
"img/history/2013/fun1.jpg",
"img/history/2012/fun2.jpg"
], {
  fade: 750,
  duration: 7000
});
$(".mag").backstretch([
"img/history/2016/ssz1.jpg",
"img/history/2016/ssz2.jpg",
"img/history/2016/ssz3.jpg",
"img/history/2016/ssz4.jpg",
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

// history slideshows

$(".2009").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

$(".2010").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

$(".2011").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

$(".2012").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

$(".2013").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});

$(".2014").backstretch([
"img/history/2016/ssz5.jpg"
], {
  fade: 750,
  duration: 5000
});