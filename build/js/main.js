'use strict';

// input

var input = document.querySelector('#order__tel');

if (input) {
  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function mask(event) {
      var matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
      if (event.type === 'blur') {
        if (this.value.length === 2) this.value = '';
      } else setCursorPosition(this.value.length, this);
    }
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
  });
}

// якорь

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

var mySwiperTrainers = new Swiper('.trainers__slider', {
  navigation: {
    nextEl: '.trainers__switch--next',
    prevEl: '.trainers__switch--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  }
});

// feedback-slider

var mySwiperFeedback = new Swiper('.feedback-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.feedback__switch--next',
    prevEl: '.feedback__switch--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
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
var membershipLink = document.querySelector('.membership__months li');
var membershipLinkActive = document.querySelector('.membership__active-link');

if (membershipItem || membershipButton) {
  membershipItem.addEventListener('focus', function (e) {
    e.preventDefault();
    membershipItemActive.classList.remove('membership__item--active');
    membershipButtonActive.classList.remove('membership__button--active');
  }, true);
}

if (membershipItem || membershipButton) {
  membershipItem.addEventListener('click', function (e) {
    e.preventDefault();
    membershipItemActive.classList.remove('membership__item--active');
    membershipButtonActive.classList.remove('membership__button--active');
  }, true);
}

// membership__active-link

if (membershipLink) {
  membershipLinkActive.focus();
}
