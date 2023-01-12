import { refs } from './refs';

export function scrolToTop() {
  window.onscroll = function () {
    scrollFunction();
  };
  refs.myButton.addEventListener('click', onMyButtonClick);
}

export function onMyButtonClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    refs.myButton.style.display = 'block';
  } else {
    refs.myButton.style.display = 'none';
  }
}
