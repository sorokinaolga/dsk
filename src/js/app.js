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
      spaceBetween: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // feedback form
  const feedbackForm = $('#feedback');
  feedbackForm.submit(function (evt) { 
    evt.preventDefault();
    const xdata = feedbackForm.serializeArray();
    // $.ajax({
    //   async: true,
    //   type: 'POST',
    //   url: url,
    //   dataType: 'html',
    //   data: JSON.stringify(xdata),
    //   success: function() {
        $.fancybox.open({
          src: '#feedback-success',
          type: 'inline'
        });
    //   }
    // });
  });

  // feedbackModal form
  const feedbackModalForm = $('#feedback-modal');
  feedbackModalForm.submit(function (evt) { 
    evt.preventDefault();
    const xdata = $('#feedback-modal').serializeArray();
    // $.ajax({
    //   async: true,
    //   type: 'POST',
    //   url: url,
    //   dataType: 'html',
    //   data: JSON.stringify(xdata),
    //   success: function() {
        $.fancybox.close({
          src: '#feedback-popup',
        });
        $.fancybox.open({
          src: '#feedback-success',
          type: 'inline'
        });
    //   }
    // });
  });

  if ($('*').is('#js-contacts-map')) {
    const map = $('#js-contacts-map');
    map.click(function() {
      $('#js-contacts-map iframe').attr('style', '');
    }),
    map.mouseleave(function() {
      $('#js-contacts-map iframe').attr('style', 'pointer-events: none');
    })
  }
});

const videoContainers = document.querySelectorAll(".text-block__video-container");

videoContainers.forEach( container => {
  const playButton = $(container.querySelector(".text-block__video-play"));
  const video = container.querySelector(".text-block__video");

  container.addEventListener('click', function(evt) {
    if (video.paused == true) {
      playButton.fadeOut();
      evt.preventDefault();
      $(video).get(0).play();
    } else {
      playButton.fadeIn();
      evt.preventDefault();
      $(video).get(0).pause();
    }
  });

  $(video).on('play', function() {
    playButton.fadeOut();
  });

  $(video).on('pause', function() {
    playButton.fadeIn();
  });
})