import axios from "axios";
import { log } from "handlebars";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// npm i notiflix  відображає завантаження і повідомлення

// Loading.pulse('Loading...', {
//   backgroundColor: 'rgba(0,0,0,0.8)',
// });

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const  BASE_URL = 'https://api.themoviedb.org/3/';
export default class ApiService {
  constructor() {
this.totalResults = 0;
    this.searchQuery = '';
    this.page = 1;
  }
  // fetchPopularArticles
   getPopularFilms() {
  const url = `${BASE_URL}discover/movie${api_key}&append_to_response=videos,images&sort_by = popularity.desc`;
  return axios.get(url)
    .then(response => {
      if (!response) {
        throw new Error(response.status);
      };
      return response.data;})
}
  // fetchSearchArticles
 getSearchFilms() {
    const url = `${BASE_URL}search/movie${api_key}&query=${this.searchQuery}`;
    return axios.get(url)
      .then(response => {
      if (!response) {
        throw new Error(response.status);
        };
        console.log(response.data);
        return response.data;
      })

}
  // fetchPopularArticlesPages() {
  //   const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
  //   return fetch(url).then(response => response.json());
  // }
  // fetchSearchArticlesPages() {
  //   const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
  //   return fetch(url).then(response => response.json());
  // }
  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }
  insertGenresToMovieObj() {
    return this.fetchPopularArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids
            .map(id => genresList.filter(el => el.id === id))
            .flat(),
        }));
      });
    });
  }
  insertGenresToSearchObj() {
    return this.fetchSearchArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        let release_date;
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date
            ? movie.release_date.split('-')[0]
            : 'n/a',
          genres: movie.genre_ids
            ? movie.genre_ids
                .map(id => genresList.filter(el => el.id === id))
                .flat()
            : 'n/a',
        }));
      });
    });
  };

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}


function getGenrisFilms() {
const url = `${BASE_URL}genre/movie/list${api_key}`;
    return fetch(url)
      .then((response) => response.json())
      .then((results) => {
        const genresNames = results.genres;
        const myMapGenres = new Map();
      
        for (let i = 0; i < genresNames.length; i+=1) {
          let element = Object.values(genresNames[i]);
          myMapGenres.set(element[0], element[1])
        };
        console.log(myMapGenres);
        return myMapGenres
      });
};