import Glide from '@glidejs/glide';
import ApiService from './fetchProdactsAPI';
import { renderSliderFilmCardLB } from './renderFunction';

const apiService = new ApiService();

const sliderLB = new Glide('.glide-lb', {
  type: 'slider',
  startAt: 0,
  perView: 5,
  gap: 20,
  autoplay: 1500,
  keyboard: true,
  hoverpause: true,
  bound: true,
}).mount();

export function sliderRevenueFilmsLB(films) {
  apiService
    .getRevenueFilms(films)
    .then(renderSliderFilmCardLB)
    .catch(error => {
      console.log(error);
      return;
    });
}
