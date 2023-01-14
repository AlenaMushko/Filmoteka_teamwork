import { refs } from './refs';

export function scrolToTop() {
  window.onscroll = function () {
    scrollFunction();
  };
  refs.goToTop.addEventListener('click', onMyButtonClick);
}

export function onMyButtonClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     refs.goToTop.style.display = 'block';
  } else {
    refs.goToTop.style.display = 'none';
  }
}