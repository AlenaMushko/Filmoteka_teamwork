import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import ApiService from './fetchProdactsAPI';
// import { resetQuery } from './searchFilms';
const apiService = new ApiService();
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';

// !функця запису в локалсторедж
const saveLocalStorage = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error('Set error: ', error.message);
  }
};

// !функція вигрузки з локалсторедж значення за ключем
const loadLocalStorage = key => {
  try {
    const serialized = localStorage.getItem(key);
    return serialized === null ? undefined : JSON.parse(serialized);
  } catch (error) {
    console.error('Get error: ', error.message);
  }
};

// !функція яка видаляє з локалсторедж
const removeLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get error: ', error.message);
  }
};

// !функція яка перетворює данні у валідний JSON
function dataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

let page = localStorage.getItem('page-value');


// !це мій файл, закоментовувати цей рядок не буду тут вилазила помилка

let query = localStorage.getItem('query-value');
let genre = localStorage.getItem('genre-value');
let year = localStorage.getItem('year-value');

if (!refs.filterByGenre) {
  return;
} else {
  refs.filterByGenre.addEventListener('click', onSelectGenre);
  refs.filterByYear.addEventListener('click', onSelectYear);
  refs.resetButton.addEventListener('click', onSelectReset);
}

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
  saveLocalStorage('moviesData', data.results);
  return data;
};
// !фунція яка робить скидання фільтраціі і перезавантаження сторінки до поточного стану
function onSelectReset(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  query = '';
  genre = '';
  year = '';
  page = 1;
  localStorage.setItem('query-value', query);
  localStorage.setItem('genre-value', genre);
  localStorage.setItem('year-value', year);
  localStorage.setItem('page-value', page);
  localStorage.setItem('query-value', query);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    // додаю пагінацію
    pagination.reset(data.total_results);
    Loading.remove();
  });
  saveLocalStorage('page-value', page);
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
  saveLocalStorage('genresList', data);
  return data;
};

const resetQuery = () => {
  refs.inputEl.value = '';
  localStorage.removeItem('query-value');
  apiService.query = '';
};
export {};
