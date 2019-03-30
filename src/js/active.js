(function($) {
  'use strict';

  // [ JS Active Code Index ]
  // :: 2.0 Slick Active Code
  // :: 3.0 Footer Reveal Active Code
  // :: 4.0 ScrollUp Active Code
  // :: 5.0 CounterUp Active Code
  // :: 6.0 onePageNav Active Code
  // :: 8.0 Sticky Active Code

  // :: 2.0 Slick Active Code
  if ($.fn.slick) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      slide: 'div',
      autoplay: true,
      centerMode: true,
      centerPadding: '30px',
      mobileFirst: true,
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right"></i>'
    });
  }

  // :: 3.0 Footer Reveal Active Code
  if ($.fn.footerReveal) {
    $('footer').footerReveal({
      shadow: true,
      shadowOpacity: 0.3,
      zIndex: -101
    });
  }

  // :: 4.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>'
    });
  }

  // :: 6.0 onePageNav Active Code
  if ($.fn.onePageNav) {
    $('#nav').onePageNav({
      currentClass: 'active',
      scrollSpeed: 2000,
      easing: 'easeOutQuad'
    });
  }

  $('a[href="#"]').click(function($) {
    $.preventDefault();
  });

  let $window = $(window);

  if ($window.width() > 767) {
    new WOW().init();
  }

  // :: 8.0 Sticky Active Code
  $window.on('scroll', function() {
    if ($window.scrollTop() > 48) {
      $('.header_area').addClass('sticky slideInDown');
    } else {
      $('.header_area').removeClass('sticky slideInDown');
    }
  });
})(jQuery);