import Glide from '@glidejs/glide';

import ApiService from './fetchProdactsAPI';
import { renderSliderFilmCard } from './renderFunction';

const apiService = new ApiService();
// екземпляр класу в який пишемо виклики фільмів по потребі

new Glide('.glide', {
  type: 'slider',
  startAt: 1,
  perView: 5,
  gap: 20,
  autoplay: 1500,
  keyboard: true,
  hoverpause: true,
  bound: true,
}).mount();
// слайдер
export function sliderRevenueFilms(films) {
  apiService
    .getRevenueFilms(films)
    .then(renderSliderFilmCard)
    .catch(error => {
      console.log(error);
      return;
    });
}
