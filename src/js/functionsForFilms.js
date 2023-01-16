import { refs } from './refs';
import { onSearchFormSubmit } from './searchFilms';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { pagination } from './pagination';
const apiService = new ApiService();
// екземпляр класу в який пишемо виклики фільмів по потребі
export function ShowFilms() {
  topFilms();
  if (apiService.query !== '') {
    refs.searchForm.getNewFilms('submit', onSearchFormSubmit);
    return;
  }
}
// фільми топ, фільми за пошуком
async function topFilms() {
  const results = await apiService.getPopularFilms();
  try {
    renderFilmCard(results);
    //додаю пагінацію
    pagination.reset(results.total_results);
  } catch (error) {
    console.log(error);
  }
}
