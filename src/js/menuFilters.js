import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { cleanPagination } from './pagination';
import { refs } from './refs';
import { PGLoadMoreByFiltres } from './pagination';
import ApiService from './fetchProdactsAPI';

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

// !функція додавання в бібіліотеку фільму по id та перевірки наявності за id в localstorage

function addListLibrary(id, select) {
  const sel = select + 'Data';
  const moviesData = loadLocalStorage('moviesData');
  const movieData = moviesData.find(movie => movie.id === id);
  const libraryArray = loadLocalStorage(select) ? loadLocalStorage(select) : [];
  const libraryData = loadLocalStorage(sel) ? loadLocalStorage(sel) : [];
  const index = libraryArray.indexOf(id);
  if (index < 0) {
    libraryArray.push(id);
    libraryData.push(movieData);
  } else {
    libraryArray.splice(index, 1);
    libraryData.splice(index, 1);
  }
  saveLocalStorage(select, libraryArray);
  saveLocalStorage(sel, libraryData);
}

// !функція яка перетворює данні у валідний JSON
function dataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

let page = loadLocalStorage('page-value');
let query = loadLocalStorage('query-pg');
let genre = loadLocalStorage('genre-value');
let year = loadLocalStorage('year-value');

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
  saveLocalStorage('moviesData', data.results);

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

  saveLocalStorage('genre-value', genre);
  saveLocalStorage('year-value', year);
  saveLocalStorage('page-value', page);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    PGLoadMoreByFiltres(query, genre, year);
    dataUpdate(data);
    Loading.remove();
  });
  saveLocalStorage('page-value', page);
  // cleanPagination();
}

// !функція фільтраціі за жанром

function onSelectGenre(e) {
  if (e) {
    Loading.pulse('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
    genre = e.target.value;
    page = 1;
    saveLocalStorage('page-value', page);
    saveLocalStorage('genre-value', genre);
    getSearchByFilters(page, query, genre, year).then(data => {
      renderFilmCard(data);
      PGLoadMoreByFiltres(query, genre, year);
      // cleanPagination();
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
  saveLocalStorage('page-value', page);
  year = e.target.value;
  saveLocalStorage('year-value', year);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    PGLoadMoreByFiltres(query, genre, year);
    // cleanPagination();
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

export {};
