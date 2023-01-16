import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getFilterQuery, getQueryAtributes } from './menuFilters';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';
class ApiService {
  constructor() {
    this.totalResults = 0;
    this.searchQuery = '';
    this.page = 1;
  }
  //  фільми з більшим доходом
  async getRevenueFilms(useFilters = false) {
    try {
      // carousel should not use filters
      const filterParams = useFilters ? getFilterQuery() : '';
      const url = `${BASE_URL}discover/movie${api_key}${filterParams}&page=${this.page}&append_to_response=images&sort_by=revenue.desc`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
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
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}trending/movie/week${api_key}&page=${this.page}&append_to_response=images&sort_by = popularity.desc`;
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

  // фільми, що шукають за назвою
  async getSearchFilms() {
    // debugger;
    try {
      const filterParams = getFilterQuery();
      Loading.pulse('Loading...', {
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
      const url = `${BASE_URL}search/movie${api_key}${filterParams}&query=${this.searchQuery}&page=${this.page}`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        Loading.remove();
        return response.data;
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // !метод за яким віпрацьовує запит і пагінація при використанні фільтрів
  async getMoviesForMainView() {
    const { primary_release_year, with_genres, query } = getQueryAtributes();
    if (query) {
      // якщо є query незалежно від наявності genre, year
      return this.getSearchFilms();
    } else if (!query && (with_genres || primary_release_year)) {
      // якщо немає query але є жанр або рік
      return this.getRevenueFilms(true);
    }
    return this.getPopularFilms();
  }

  // пошук фільму по id
  async getFilmById(id) {
    try {
      const url = `${BASE_URL}movie/${id}${api_key}&append_to_response=images`;
      return await axios.get(url).then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        return response.data;
      });
    } catch (error) {
      console.error();
    }
  }

  //  пошук фільму по масиву id з localStorage
  async getFilmFromLocalStorage(arrWatchedFilms) {
    Promise.all(
      arrWatchedFilms.map(idWatchedFilm => {
        try {
          const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images`;
          return axios.get(url).then(response => {
            if (!response) {
              throw new Error(response.status);
            }
            console.log(response.data);
            return response.data;
          });
        } catch (error) {
          console.error();
        }
      })
    );
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
    localStorage.setItem('page-value', newPage);
    this.page = newPage;
  }
}

export default new ApiService();
