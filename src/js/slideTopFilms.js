import Glide from '@glidejs/glide'
// https://glidejs.com/docs/api/  slider

import ApiService from './fetchProdactsAPI';
import { renderSliderFilmCard } from './rendarFunction';

const apiService = new ApiService();

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 5,
  gap: 20,
  autoplay: 2000,
  keyboard: true,
  hoverpause: true,
  bound: true,
}).mount()

export function sliderTopFilms(films) {
  apiService.getPopularFilms(films)
    .then(renderSliderFilmCard)
    .catch(error => {
      console.log(error);
      return;
    });
};

