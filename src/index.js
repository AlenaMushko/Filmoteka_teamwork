import { refs } from './js/refs';
import ApiService from './js/fetchProdactsAPI';
import { onSearchFormSubmit } from './js/searchFilms';

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
