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
