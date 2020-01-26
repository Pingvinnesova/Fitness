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
    // variableWidth: true,
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

$(document).ready(function() {
  $('.feedback__list').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    nextArrow: document.querySelector('.feedback__switch--next'),
    prevArrow: document.querySelector('.feedback__switch--prev'),
  });
});


// footer


var logo = document.querySelector('.footer__logo');
var footerNav = document.querySelector('.footer__nav');
var cloneLogo = logo.cloneNode(true);
var NewLi = document.createElement('li');

NewLi.appendChild(cloneLogo);

var cloneBlock = function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    footerNav.prepend(NewLi);
    logo.classList.add('footer__logo--show');
  } else {
    if (footerNav.contains(NewLi)) {
      footerNav.removeChild(NewLi);
      logo.classList.remove('footer__logo--show');
    }
  }
};

// if (copyright || wrapper) {
  cloneBlock();
// }

window.addEventListener('resize', function () {
  // if (copyright || wrapper) {
    cloneBlock();
  // }
}, false);

// focus


var membershipItem = document.querySelector('.membership__item');
var membershipButton = document.querySelector('.membership__button');
var membershipItemActive = document.querySelector('.membership__item--active');
var membershipButtonActive = document.querySelector('.membership__button--active');
membershipItem.addEventListener("focus", function (e) {
  e.preventDefault();
  membershipItemActive.classList.remove('membership__item--active');
  membershipButtonActive.classList.remove('membership__button--active');
}, true);

var membershipLink = document.querySelector('.membership__link');
var membershipLinkActive = document.querySelector('.membership__link--active');
membershipLink.addEventListener("focus", function (e) {
  e.preventDefault();
  membershipLinkActive.classList.remove('membership__link--active');
}, true);

membershipItem.addEventListener("click", function (e) {
  e.preventDefault();
  membershipItemActive.classList.remove('membership__item--active');
  membershipButtonActive.classList.remove('membership__button--active');
}, true);

membershipLink.addEventListener("click", function (e) {
  e.preventDefault();
  membershipLinkActive.classList.remove('membership__link--active');
}, true);
