import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';

let page = localStorage.getItem('page-value');
let query = localStorage.getItem('query-pg');
let genre = localStorage.getItem('genre-value');
let year = localStorage.getItem('year-value');
refs.filterByGenre.addEventListener('click', onSelectGenre);
refs.filterByYear.addEventListener('click', onSelectYear);
refs.resetButton.addEventListener('click', onSelectReset);
// !функція запиту при відпрацюванні по кліку фільтра
export const getSearchByFilters = async (
  page = '',
  query = '',
  genre = '',
  year = ''
) => {
  let f = {
    year: year !== '' ? `&primary_release_year=${year}` : '',
    genre: genre !== '' ? `&with_genres=${genre}` : '',
    queryFetch: `&query=${query}`,
    discover: `/trending`,
    week: `/week`,
  };
  if (query === '') {
    f.queryFetch = '';
  }
  if (query !== '' && genre === '') {
    f.discover = '/search';
    f.week = '';
  }
  if (query === '' && genre !== '') {
    f.discover = '/discover';
    f.week = '';
  }
  if (query === '' && year !== '') {
    f.discover = '/discover';
    f.week = '';
  }
  let { data } = await axios.get(
    `${BASE_URL}${f.discover}/movie${f.week}?api_key=${KEY}${f.genre}${f.year}&language=en-US${f.queryFetch}&page=${page}`
  );
  localStorage.setItem('moviesData', JSON.stringify(data.results));
  return data;
};
// !фунція яка робить скидання фільтраціі і перезавантаження сторінки до поточного стану
function onSelectReset(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  genre = '';
  year = '';
  page = 1;
  localStorage.setItem('genre-value', genre);
  localStorage.setItem('year-value', year);
  localStorage.setItem('page-value', page);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    // додаю пагінацію
    pagination.reset(data.total_results);
    dataUpdate(data);
    Loading.remove();
  });
  localStorage.setItem('page-value', page);
}
// !функція фільтраціі за жанром
function onSelectGenre(e) {
  if (e) {
    Loading.pulse('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
    genre = e.target.value;
    page = 1;
    localStorage.setItem('page-value', page);
    localStorage.setItem('genre-value', genre);
    getSearchByFilters(page, query, genre, year).then(data => {
      renderFilmCard(data);
      //додаю пагінацію
      pagination.reset(data.total_results);
      Loading.remove();
    });
  }
}
// !Функція фільтраціі за роком
function onSelectYear(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  page = 1;
  localStorage.setItem('page-value', page);
  year = e.target.value;
  localStorage.setItem('year-value', year);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    //додаю пагінацію
    pagination.reset(data.total_results);
    Loading.remove();
  });
}
// !функція яка повертає масив обєктів жанрів і записує іх в локалсторедж
export const getMovieGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${KEY}`
  );
  localStorage.setItem('genresList', data);
  return data;
};
export {};
