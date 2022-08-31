import './plugins.js';

$(document).ready(function () {
  const menuBreakpoint = 840;
  let windowW = $(window).width();

  $('.menu-wrapper').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
    $('.header__main').slideToggle();
  })

  $(window).resize(function () {
    windowW = $(window).width();
    if (windowW > menuBreakpoint) {
      $('.hamburger-menu').removeClass('animate');
      $('.header__main').attr('style', '');
    }
  });

  $('.js-dropdown-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).siblings('.js-dropdown-content').slideToggle(300);
  });

  // promo slider
  if ($('*').is('.js-promo-slider')) {
    const sliderPromo = new Swiper('.js-promo-slider', {
      slidesPerView: 1,
      spaceBetween: 300,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
