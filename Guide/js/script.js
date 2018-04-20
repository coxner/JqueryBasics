$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  //$(".red-box").fadeOut(2000);
  //$(".green-box").fadeOut(2000);
  //$(".red-box").fadeIn(1000);
  //$(".red-box").fadeTo(3000, 0.2);
  //$(".green-box").fadeTo(2000, 0);
  //$(".blue-box").fadeTo(1000, 0.8);

  //$(".blue-box").fadeToggle();
  //$(".blue-box").fadeToggle();

  //WORKING WITH .hide
  //$(".green-box").hide();

  //$(".blue-box").slideUp(2000);
  //$("p").hide();
  //$("p").slideDown(1000);

  //CUSTOM animations
  /*
  $(".blue-box").animate({
    "margin-left": "+=200px",
    "opacity": "0",
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  },1000);

  $("p").animate({
    "font-size": "26px"
  },1000); */

/*
  $(".red-box").fadeTo(1000, 0, function () {
    $(".green-box").fadeTo(1000, 0, function () {
      $(".blue-box").fadeTo(1000, 0);
    });
  });*/

  //$(".lightbox").delay(500).fadeIn(1000);

  //$("p").css("background-color", "rgba(180,180,30,0.8)");
  //$("#list").css("background-color", "rgba(180,180,30,0.8)");
  //$("input[type='text']").css("background-color", "rgba(180,180,30,0.8)");
  //$("#list").find("li").css("background-color", "rgba(180,180,30,0.8)");
  //$("#list").parents("div").css("background-color", "rgba(180,180,30,0.8)");
  //$("#list").siblings("p").css("background-color", "rgba(180,180,30,0.8)");
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180,180,30,0.8)");
  //$("li").filter(function(index){
      //return index % 3 === 1;
  //}).css("background-color", "rgba(180,180,30,0.8)");
  //$("li").first().css("background-color", "rgba(180,180,30,0.8)");

  //$("ul ul:first").append("<li> I'm gonna be the last sub-item");

  //$("<li> I'm gonna be the last item</li>").appendTo($("ul ul:first"))
  //$("ul ul:first").prepend("<li> I'm gonna be the first sub-item</li>");
  //$("<li> I'm gonna be the first item</li>").prependTo($("ul ul:first"));
  //$(".red-box").after("<div class='red-box'> Another Red </div>")
  //$(".blue-box").before("<div class='blue-box'> Another blue </div>");
  //$(".blue-box").before(function(){
    //return "<div class='blue-box'>Another blue</div>";
//  });

  //REPLACING ELEMENTS
  //$(".blue-box").before($(".red-box"));
  //$("p").after($("#list"));
  //$("li").replaceWith(function(){
    //return "<li> Replaced with function </li>";
  //});

  //var firstListItem = $("li:first");
  //$("p:first").replaceWith(firstListItem);
  //$(".red-box, .blue-box").replaceWith("<div class ='green-box'> More Green </div>");
  //$("<div class ='green-box'> More Green </div>").replaceAll(".red-box, .blue-box");

  //REMOVING ELEMENTS....
  //$("li").remove();

  //$("form").children().not("input:text, textarea, br").remove();

  //var detachedListItem = $("li").detach();
  //$("#content").append(detachedListItem);

  //$("p:first").empty();
  //$(".red-box, .blue-box, .green-box").empty();

  //var specialLink = $("#special-link");
  //console.log(specialLink.attr("href"));
  //console.log(specialLink.attr("title"));


  //specialLink.attr("href", "http://www.twitter.com" );

  //var checkbox = $("input:checkbox");
  //console.log(checkbox.prop("checked"));]

  var textInput = $("input:text");
  textInput.val("Christian Oxner");
  console.log(textInput.val());

  var rangeInput = $("input[type='range']");
  console.log(rangeInput.val());



});
