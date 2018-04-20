$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load


  //WORKING WITH .hide
  $(".green-box").hide();
  $(".blue-box").slideUp(5000);
  $("p").hide();
  $("p").slideDown(1000);
  $(".green-box").show(5000);
  $(".red-box").toggle(2000);
});
