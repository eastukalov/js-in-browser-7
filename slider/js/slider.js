'use strict';

const slides = document.querySelector('.slides');

let currentSlide = slides.firstElementChild;
currentSlide.classList.toggle('slide-current');

const prev = document.querySelector('[data-action="prev"]');
const next = document.querySelector('[data-action="next"]');
const first = document.querySelector('[data-action="first"]');
const last = document.querySelector('[data-action="last"]');

prev.addEventListener('click', () => move('prev'));
next.addEventListener('click', () => move('next'));
first.addEventListener('click', () => move('first'));
last.addEventListener('click', () => move('last'));

checkButton();

function move(mode) {
  currentSlide.classList.remove('slide-current');

  switch (mode) {
    case 'prev':
      currentSlide = currentSlide.previousElementSibling;
      break;
    case 'next':
      currentSlide = currentSlide.nextElementSibling;
      break;
    case 'first':
      currentSlide = slides.firstElementChild;
      break;
    case 'last':
      currentSlide = slides.lastElementChild;
  }

  currentSlide.classList.add('slide-current');
  checkButton();
}

function checkButton() {
  if (currentSlide.previousElementSibling === null) {
    prev.classList.add('disabled');
    first.classList.add('disabled');
    last.classList.remove('disabled');
    next.classList.remove('disabled');
  } else  if (currentSlide.nextElementSibling === null) {
    last.classList.add('disabled');
    next.classList.add('disabled');
    first.classList.remove('disabled');
    prev.classList.remove('disabled');
  } else {
    for (const el of document.querySelectorAll('nav a')) {
      el.classList.remove('disabled');
    }
  }
}