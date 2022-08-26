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
      spaceBetween: 50,
      pagination: {
        el: ".js-promo-pagination",
        clickable: true,
      },
    });
  }

  // brands slider
  if ($('*').is('.js-brands-slider')) {
    const sliderBrands = new Swiper('.js-brands-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".js-brands-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 7,
          spaceBetween: 50
        }
      }
    });
  }

  // partners slider
  if ($('*').is('.js-partners-slider')) {
    const sliderPartners = new Swiper('.js-partners-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".js-partners-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 7,
          spaceBetween: 50
        }
      }
    });
  }
});
