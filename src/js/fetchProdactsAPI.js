import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MyLibrary } from './localStorage';
import { refs } from './refs';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

const myLibrary = new MyLibrary();
const arrWatchedFilms = myLibrary.getFromWatched();
export default class ApiService {
  // myLibrary = new MyLibrary();
  currentLang = localStorage.getItem('language');
  arrWatchedFilms = myLibrary.getFromWatched();
  constructor() {
    this.totalResults = 0;
    this.searchQuery = '';
    this.page = 1;
    this.filmsOnPage = 12;
    this.currentLang;
    this.lang;
  }
  //  фільми з більшим доходом
  async getRevenueFilms() {
    if (this.currentLang === 'en') {
      this.lang = 'en';
    } else if (this.currentLang === 'ua') {
      this.lang = 'uk';
    }
    try {
      const url = `${BASE_URL}discover/movie${api_key}&page=2&append_to_response=images&language=${this.lang}&sort_by=revenue.desc`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        // console.log(response.data);
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }
  // фільми топові
  async getPopularFilms() {
    try {
      if (this.currentLang === 'en') {
        this.lang = 'en';
      } else if (this.currentLang === 'ua') {
        this.lang = 'uk';
      }
      Loading.pulse('Loading...', {
        clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}trending/movie/week${api_key}&page=${this.page}&language=${this.lang}&append_to_response=images&sort_by = popularity.desc`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        Loading.remove();
        //  console.log(response.data.results);
        // console.log(response.data);
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }
  // фільми, що шукають за назвою
  async getSearchFilms() {
    try {
      if (this.currentLang === 'en') {
        this.lang = 'en';
      } else if (this.currentLang === 'ua') {
        this.lang = 'uk';
      }
      Loading.pulse('Loading...', {
        clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}search/movie${api_key}&query=${this.searchQuery}&page=${this.page}&language=${this.lang}`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        Loading.remove();
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }
  // пошук фільму по id
  async getFilmById(id) {
    try {
      if (this.currentLang === 'en') {
        this.lang = 'en';
      } else if (this.currentLang === 'ua') {
        this.lang = 'uk';
      }
      Loading.pulse('Loading...', {
        clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}movie/${id}${api_key}&append_to_response=images&language=${this.lang}`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        Loading.remove();
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }
  //  пошук фільму по масиву id з localStorage
  async getFilmFromLocalStorage(arrWatchedFilms) {
    const data = await Promise.all(
      arrWatchedFilms.map(idWatchedFilm => {
        try {
          if (this.currentLang === 'en') {
            this.lang = 'en';
          } else if (this.currentLang === 'ua') {
            this.lang = 'uk';
          }
          Loading.pulse('Loading...', {
            clickToClose: true,
            svgColor: 'rgba(255, 107, 1, 0.6)',
            backgroundColor: 'rgba(0,0,0,0.8)',
          });
          const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images&page=${this.page}&language=${this.lang}`;
          return axios.get(url).then(response => {
            if (!response) {
              throw new Error(response.status);
            }
            Loading.remove();
            return response.data;
          });
        } catch (error) {
          console.error();
        }
      })
    );
    return data;
  }

  // ! Для рендеру фільмів на library Watched
  // async onWatchedBtnClick() {
  //   let filmsOnPage = [];
  //   // console.log(arrWatchedFilms);
  //   if (arrWatchedFilms !== null) {
  //     refs.libraryEmpty.classList.add('is-hidden');
  //     let totalPages = arrWatchedFilms.length;
  //     if (this.page === 1) {
  //       filmsOnPage = arrWatchedFilms.slice(
  //         2 * (this.page - 1),
  //         12 * this.page
  //       );
  //     } else {
  //       filmsOnPage = arrWatchedFilms.slice(
  //         12 * (this.page - 1),
  //         12 * this.page + 1
  //       );
  //     }
  //     const filmInfo = await getFilmFromLocalStorage(arrWatchedFilms);
  //     try {
  //       renderFilmCardLibrary(filmInfo);
  //       // pagination.reset(totalPages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     cleanLibrary();
  //   }
  // }

  // // ! Для рендеру фільмів на library Watched
  // async onQueueBtnClick() {
  //   let filmsOnPage = [];
  //   if (arrWatchedFilms !== null) {
  //     refs.libraryEmpty.classList.add('is-hidden');
  //     let totalPages = arrQueueFilms.length;
  //     if (this.page === 1) {
  //       filmsOnPage = arrQueueFilms.slice(2 * (this.page - 1), 12 * this.page);
  //     } else {
  //       filmsOnPage = arrQueueFilms.slice(
  //         12 * (this.page - 1),
  //         12 * this.page - 1 + 1
  //       );
  //     }
  //     const filmInfo = await apiService.getFilmFromLocalStorage(this);
  //     try {
  //       renderFilmCardLibrary(filmInfo);
  //       // pagination.reset(totalPages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     cleanLibrary();
  //   }
  // }

  // cleanLibrary() {
  //   notifyInfo();
  //   refs.libraryEmpty.classList.remove('is-hidden');
  //   refs.movieLibrary.innerHTML = '';
  // }

  // notifyInfo() {
  //   if (localStorage.getItem('language') === 'en') {
  //     Notify.info(`Your film list is empty`);
  //   } else if (localStorage.getItem('language') === 'ua') {
  //     Notify.info(`Покищо, ваша бібліотека порожня`);
  //   }
  // }

  //  отримуємо символи для пошуку фільму
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  // отримуємо номер сторінки для пагінації
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}
