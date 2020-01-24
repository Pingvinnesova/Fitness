'use strict';

var anchor = document.querySelector('.scroll-to');

anchor.addEventListener('click', function (e) {
  e.preventDefault();
  var blockID = anchor.getAttribute('href');
  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// trainers

$(document).ready(function() {
  $('.trainers__list').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    nextArrow: document.querySelector('.trainers__switch--next'),
    prevArrow: document.querySelector('.trainers__switch--prev'),
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});

// // feedback

// $(document).ready(function() {
//   $('.feedback__list').slick({
//     infinite: false,
//     speed: 350,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: document.querySelector('.feedback__switch--next'),
//     prevArrow: document.querySelector('.feedback__switch--prev'),
//   });
// });
