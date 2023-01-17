import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';
export default class ApiService {
  constructor() {
    this.totalResults = 0;
    this.searchQuery = '';
    this.page = 1;
    this.filmsOnPage = 12;
    // this.currentLang = ;
  }
  //  фільми з більшим доходом
  async getRevenueFilms() {
    let currentLang = localStorage.getItem('language') || 'en';
      console.log(currentLang === 'en');
    console.log(currentLang === 'ua');
    try {
      if (currentLang === 'ua') {
  const url = `${BASE_URL}discover/movie${api_key}&page=2&append_to_response=images&language=ua-UA&sort_by=revenue.desc`;
} else {
      const url = `${BASE_URL}discover/movie${api_key}&page=2&append_to_response=images&language=en-US&sort_by=revenue.desc`;
}
      // const url = `${BASE_URL}discover/movie${api_key}&page=2&append_to_response=images&language=en-US&sort_by=revenue.desc`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        console.log(response.data);
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }
  // фільми топові
  async getPopularFilms() {
    try {
      Loading.pulse('Loading...', {
        clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}trending/movie/week${api_key}&page=${this.page}&append_to_response=images&sort_by = popularity.desc`;
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
      Loading.pulse('Loading...', {
        clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}search/movie${api_key}&query=${this.searchQuery}&page=${this.page}`;
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
      Loading.pulse('Loading...', {
          clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}movie/${id}${api_key}&append_to_response=images`;
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
          Loading.pulse('Loading...', {
              clickToClose: true,
        svgColor: 'rgba(255, 107, 1, 0.6)',
            backgroundColor: 'rgba(0,0,0,0.8)',
          });
          const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images&page=${this.page}`;
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
  // отримуємо мову із localStorage
get currentLang() {
    return this.currentLang;
  }
  set currentLang(newCurrentLang) {
    this.currentLang = newCurrentLang;
  }

}
