'use strict';

var anchor = document.querySelector('.scroll-to');

if (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
// trainers-slider

$(document).ready(function () {
  $('.trainers__list').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 4,
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

// feedback-slider

$(document).ready(function () {
  $('.feedback__list').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
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

if (footerNav || logo) {
  cloneBlock();
}

window.addEventListener('resize', function () {
  if (footerNav || logo) {
    cloneBlock();
  }
}, false);

// focus


var membershipItem = document.querySelector('.membership__item');
var membershipButton = document.querySelector('.membership__button');
var membershipItemActive = document.querySelector('.membership__item--active');
var membershipButtonActive = document.querySelector('.membership__button--active');
var membershipLink = document.querySelector('.membership__link');
var membershipLinkActive = document.querySelector('.membership__link--active');

if (membershipItem || membershipButton) {
  membershipItem.addEventListener('focus', function (e) {
    e.preventDefault();
    membershipItemActive.classList.remove('membership__item--active');
    membershipButtonActive.classList.remove('membership__button--active');
  }, true);
}

if (membershipLink) {
  membershipLink.addEventListener('focus', function (e) {
    e.preventDefault();
    membershipLinkActive.classList.remove('membership__link--active');
  }, true);
}

if (membershipItem || membershipButton) {
  membershipItem.addEventListener('click', function (e) {
    e.preventDefault();
    membershipItemActive.classList.remove('membership__item--active');
    membershipButtonActive.classList.remove('membership__button--active');
  }, true);
}

if (membershipLink) {
  membershipLink.addEventListener('click', function (e) {
    e.preventDefault();
    membershipLinkActive.classList.remove('membership__link--active');
  }, true);
}

// lazy

var blazy = new Blazy({
  selector: 'img' || '.b-lazy',
  breakpoints:[{
    width: 1199,
    src: 'data-tablet-src'
  },
  {
    width: 767,
    src: 'data-mobile-src'
  }]
});

// input

var orderTel = document.getElementById('order__tel');

if (orderTel) {
  orderTel.onkeydown = function (e) {
      return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
  }
}

if (orderTel) {
orderTel.addEventListener('invalid', function () {
  if (orderTel.validity.tooShort) {
    orderTel.setCustomValidity('Телефон должен состоять минимум из 8-ми символов');
  } else if (orderTelt.validity.tooLong) {
    orderTel.setCustomValidity('Телефон не должен превышать 15-ть символов');
  } else if (orderTel.validity.valueMissing) {
    orderTel.setCustomValidity('Обязательное поле');
  } else {
    orderTel.setCustomValidity('');
  }
});
}
