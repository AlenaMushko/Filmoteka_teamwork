// import { easyScroll } from 'easy-scroll';

// const filmwrap = document.querySelector('.library-films');

// easyScroll({
//   scrollableDomEle: window,
//   direction: 'bottom',
//   duration: 2000,
//   easingPreset: 'easeInQuad',
//   scrollAmount: 1000,
// });
// const options = {
//   rootMargin: '100px',
//   threshold: 1,
// };
// function onWindowScrole(entries) {
//   console.log(entries);
//   if (!inputValue) {
//     return;
//   }
//   entries.forEach(async entry => {
//     // анимируем, если элемент целиком попадает в отслеживаемую область
//     if (entry.isIntersecting && entry.intersectionRatio == 1) {
//       refs.btnLoadMoreEl.classList.add('is-hidden');
//       const results = await cardFetchAxios(inputValue, pageNumber);
//       try {
//         cardCreate(results.hits);
//         pageNumber += 1;
//       } catch (error) {
//         console.log(error);
//       }
//       let remainder = results.totalHits - 40 * (pageNumber - 2);
//       if (remainder < 40) {
//         refs.infoTextEl.classList.remove('is-hidden');
//       } else {
//         refs.infoTextEl.classList.add('is-hidden');
//       }
//     }
//   });
// }
// const observer = new IntersectionObserver(onWindowScrole, options);
// observer.observe(refs.scrollEl);

import { onWatchedBtnClick } from './watched_queue';
import ApiService from './fetchProdactsAPI';

const apiService = new ApiService();
const btns = document.querySelector('.list__button');

btns.addEventListener('click', onbtnQueClick);
window.addEventListener('scroll', onScrollMove);

function onbtnQueClick(event) {
  if (event.target.button.btn__watched) {
    onScrollMove();
  }
}

function onScrollMove() {
  const documentRect = document.documentElement.getBoundingClientRect();
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    apiService.page += 1;
    console.log(apiService.page);
    onWatchedBtnClick(apiService.page);
  }
}
