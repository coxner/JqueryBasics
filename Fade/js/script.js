$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(1000);
  $(".green-box").fadeIn(1000);
  $(".red-box").fadeTo(3000, 0.2);
  $(".green-box").fadeTo(2000, 0);
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeTo(4000, 0.8);
  $(".blue-box").fadeToggle();





});