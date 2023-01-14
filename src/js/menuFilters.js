import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { cleanPagination } from './pagination';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';
const refs = {
  inputEl: document.getElementById('searchQuery'),
  filterByGenre: document.getElementById('genres-container'),
  filterByYear: document.getElementById('years-container'),
  resetButton: document.getElementById('button-reset'),
};

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

// !змінні для першого відпрацювання фільтрів

let page = loadLocalStorage('page-pg');
let query = loadLocalStorage('query-pg');
let genre = loadLocalStorage('genre-pg');
let year = loadLocalStorage('year-pg');

// !слухачі подій меню фільтрів

refs.filterByGenre.addEventListener('click', onSelectGenre);
refs.filterByYear.addEventListener('click', onSelectYear);
refs.resetButton.addEventListener('click', onSelectReset);

// !функція яка повертає данні запиту за вибором фільтру

export const getSearchByFilters = async (
  page = '',
  query = '',
  genre = '',
  year = ''
) => {
  let f = {
    year:
      year !== '' && year !== 'start' ? `&primary_release_year=${year}` : '',
    genre: genre !== '' && genre !== 'start' ? `&with_genres=${genre}` : '',
    queryFetch: `&query=${query}`,
    discover: `/trending`,
    week: `/week`, //Женя миньйон переделал так что если нету query, то по дефолту делался запрос на тренды недели
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

// !фунція скидання фільтраціі і перезавантаження сторінки при натисканні кнопки reset

function onSelectReset(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  genre = '';
  year = '';
  page = 1;

  saveLocalStorage('genre-pg', genre);
  saveLocalStorage('year-pg', year);
  saveLocalStorage('page-pg', page);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    dataUpdate(data);
    Loading.remove();
  });
  saveLocalStorage('page-pg', page);
  cleanPagination();
}

// !функція фільтраціі за жанром

function onSelectGenre(e) {
  if (e) {
    Loading.pulse('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
    genre = e.target.value;
    page = 1;
    saveLocalStorage('page-pg', page);
    saveLocalStorage('genre-pg', genre);
    getSearchByFilters(page, query, genre, year).then(data => {
      renderFilmCard(data);
      cleanPagination();
      Loading.remove();
    });
  }
}

// !функція фільтраціі за роком

function onSelectYear(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  page = 1;
  saveLocalStorage('page-pg', page);
  year = e.target.value;
  saveLocalStorage('year-pg', year);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    cleanPagination();
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
