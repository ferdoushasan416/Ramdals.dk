(function ($) {
"use strict";

    $(window).on('scroll', function () { 
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky");
      } else {
        $(".header-sticky").addClass("sticky");
      }
    });

      $(document).ready(function(){
          $('.full-image-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            doots: false,
            prevArrow: '<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
            nextArrow: ' <span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
          });
         
      });  

      
// WOW active
new WOW().init();


})(jQuery);