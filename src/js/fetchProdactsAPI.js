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
  };

  async getPopularFilms() {
    try {
  Loading.pulse('Loading...', {
  backgroundColor: 'rgba(0,0,0,0.8)',
});
      const url = await `${BASE_URL}discover/movie${api_key}&page=${this.page}&append_to_response=videos,images&sort_by = popularity.desc`;
    return axios.get(url).then(response => {
      if (!response) {
        throw new Error(response.status);
      };
      Loading.remove();
      return response.data;
    });
    } catch (error){ console.error(); }; 
  };

  async getSearchFilms() {
    try {
      Loading.pulse('Loading...', {
  backgroundColor: 'rgba(0,0,0,0.8)',
});
     const url = await `${BASE_URL}search/movie${api_key}&query=${this.searchQuery}&page=${this.page}`;
    return axios.get(url).then(response => {
      if (!response) {
        throw new Error(response.status);
      }
      console.log(response.data);
      Loading.remove();
      return response.data;
    });
    } catch (error) { console.error(); }; 
  };

  get query() {
    return this.searchQuery;
  };
  set query(newQuery) {
    this.searchQuery = newQuery;
  };
  get pageNum() {
    return this.page;
  };
  set pageNum(newPage) {
    this.page = newPage;
  };
};
