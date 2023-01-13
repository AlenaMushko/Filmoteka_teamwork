const axios = require('axios').default;
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';
const movieID = 168259;

async function getTrailersByMovieId(movieID) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieID}/videos${api_key}`
  );
  return response.data.results.filter(value => value.type === 'Trailer');
}

async function renderTrailersBtns() {
  const trailers = await getTrailersByMovieId(movieID);
  console.log(trailers.length);
  if (trailers.length > 3) {
    // TODO Render 3 buttons for trailers
    const markup = trailers.map(trailer => ``);
  } else {
    // for (let i = 1; i <= trailers.length; i += 1) {
    //   const element = array[];
    // }
  }
}

renderTrailersBtns();

// 168259;

// async function renderTrailerWindow(movieID) {
//   try {
//     const trailer = await getTrailersByMovieId(movieID);
//     return trailer;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

//     .then(response => {
//       if (!response) {
//         throw new Error(response.status);
//       }
//       return response.data;
//     });
//   } catch (error) {
//     console.error();
//   }
// }
