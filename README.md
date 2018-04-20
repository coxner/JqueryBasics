# Jquery Basics

## The Basics
The first step of jQuery is to select the element that you want manipulate..```jQuery $(".red-box") ``` where .red-box is a CSS selector. 
The next step is to attach a jQuery function to your selector. 

In this example we use the .fadeOut() function it looks like this ```$(".red-box").fadeTo(1000, 0.5);``` the 1000 represents the number of milliseconds it will take for the red-box to fade to 50% opacity.

## Fade
The fade folder contains the use of 4 JQuery functions the .fadeOut(), .fadeIn(), .fadeTo() and fadeToggle(). The fadeOut() and fadeIn() functions contain one property and that is the number of milliseconds for the transition to occur.

The fadeTo() function contains two properties which were briefly explained above. The first is the number of milliseconds for the transition and the second is the opacity in which we want to fade the element to. 

The fadeToggle() will make elements fade in if they are faded out, and will fade a element in if it is faded out. It will fade elements back in to the opacity that is set by fadeTo(). 

#### Important note
When you fade a element out it is it is given the CSS property ```display:none;```. If we want to remove a element but not give it the CSS property of ```display:none;``` we can do this ```$(".red-box").fadeTo(1000, 0);``` which fades the element to 0 opacity.

The fadeIn() and fadeOut() **affect the display property**, fadeTo() **does not touch the display property**
