(function ($){

  $(document).ready(function(){

    //-------------------------
    //scroll to same # on a page
    //--------------------------
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    //--------------------
    //mobile menu
    //--------------------
    //small devices icon for toggeling navigation
    $(".smalldevice-icon").bind("click", function(){
      $("header[role=banner] nav").slideToggle();
      $(this).toggleClass('active');
    });

    //small devices icon for toggeling navigation
    $(".loginblock .icon").bind("click", function(){
      $(".loginblock").toggleClass('active');
    });

    //Slide in mobile region l-offsidecanvas

    $(".menutestbutton").bind("click", function(){
      $(".l-container").toggleClass('active');
    });




  }); //document ready

  //--------------------------
  //header menu resizing
  //-------------------------------
  $(document).on('scroll',function(){  

    if($(document).scrollTop()>100){
      $('header[role="banner"]').removeClass("headlarge").addClass("headsmall");
      // $('.scrolltotop').addClass("show");
    }else{
      $('header[role="banner"]').addClass("headlarge").removeClass("headsmall");
      // $('.scrolltotop').toggleClass("show");      
    }

  });    

  //Flexslider
  $('.flexslider').flexslider({
    controlsContainer: ".flex-container",
    selector: ".slides > li", 
    animation: "slide",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
  });  




})(jQuery);




/*
Fix the rotate issue with viewports
http://webdesignerwall.com/tutorials/iphone-safari-viewport-scaling-bug
*/
(function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }

}(document));

/*
scrolle down below the adressbar
 */
/*
window.addEventListener("load",function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 0);
});
*/

