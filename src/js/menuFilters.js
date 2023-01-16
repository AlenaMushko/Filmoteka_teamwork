import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import apiService from './fetchProdactsAPI';
import { resetQuery } from './searchFilms';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';

// !функця запису в локалсторедж

const saveLocalStorage = (key, value) => {
  // try {
  //   const serialized = JSON.stringify(value);
  //   localStorage.setItem(key, serialized);
  // } catch (error) {
  //   console.error('Set error: ', error.message);
  // }
  localStorage.setItem(key, value);
};

// !функція вигрузки з локалсторедж значення за ключем

const loadLocalStorage = key => {
  return localStorage.getItem(key);
  // try {
  //   const serialized = localStorage.getItem(key);
  //   return serialized === null ? undefined : JSON.parse(serialized);
  // } catch (error) {
  //   console.error('Get error: ', error.message);
  // }
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

function dataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

function onLogoClick(e) {
  page = 1;
  query = '';
  genre = '';
  year = '';
  saveLocalStorage('page-value', page);
  saveLocalStorage('query-value', query);
  saveLocalStorage('genre-value', genre);
  saveLocalStorage('year-value', year);
}

let page = loadLocalStorage('page-value');
let query = loadLocalStorage('query-value');
let genre = loadLocalStorage('genre-value');
let year = loadLocalStorage('year-value');

refs.filterByGenre.addEventListener('click', onSelectGenre);
refs.filterByYear.addEventListener('click', onSelectYear);
refs.resetButton.addEventListener('click', onSelectReset);
// refs.logoBtn.addEventListener('click', onLogoClick);

// !функція запиту при відпрацюванні по кліку фільтра

export const getQueryAtributes = () => ({
  primary_release_year: localStorage.getItem('year-value'),
  with_genres: localStorage.getItem('genre-value'),
  query: localStorage.getItem('query-value'),
});

export const getFilterQuery = () => {
  const searchAttributes = getQueryAtributes();

  // тут query нам не потрібен бо він підставляється всередені apiService
  delete searchAttributes.query;

  // query should always be present even if empty
  const searchKeyValuePairs = Object.entries(searchAttributes).filter(
    ([key, value]) => Boolean(value)
  );

  return searchKeyValuePairs.reduce(
    (acc, [filterKey, filterValue]) => `${acc}&${filterKey}=${filterValue}`,
    ''
  );
};

// !фунція яка робить скидання фільтраціі і перезавантаження сторінки до поточного стану
function onSelectReset(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  genre = '';
  year = '';
  page = 1;

  // page is stored to localStore within the apiService
  apiService.pageNum = page;
  saveLocalStorage('genre-value', genre);
  saveLocalStorage('year-value', year);
  saveLocalStorage('page-value', page);
  resetQuery();

  apiService.getPopularFilms().then(data => {
    renderFilmCard(data);
    // додаю пагінацію
    pagination.reset(data.total_results);
    dataUpdate(data);
    Loading.remove();
  });
}

// !функція фільтраціі за жанром

async function onSelectGenre(e) {
  if (e) {
    Loading.pulse('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
    genre = e.target.value;
    apiService.pageNum = 1;
    saveLocalStorage('page-value', page);
    saveLocalStorage('genre-value', genre);

    try {
      const data = await apiService.getMoviesForMainView();
      renderFilmCard(data);
      //додаю пагінацію
      pagination.reset(data.total_results);
    } catch (e) {
      // decide whether to throw upper or not
      // decide whether to render 0 items
      // renderFilmCard({ result: [] });
      // or leave the page as is
    } finally {
      Loading.remove();
    }
  }
}

// !Функція фільтраціі за роком
function onSelectYear(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  apiService.pageNum = 1;
  year = e.target.value;
  saveLocalStorage('year-value', year);
  apiService.getMoviesForMainView().then(data => {
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

export {};
