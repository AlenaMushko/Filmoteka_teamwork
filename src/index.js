// import { renderProdutsItems } from "./js/rendarFunction";
// import { ProductsAPI } from "./js/fetchProdactsAPI";

// const productsAPI = new ProductsAPI();

// productsAPI.getAllProducts()
//   .then((products) => {
//     renderProdutsItems(products);
// })

import axios from "axios";
async function fetch() {
  const KEY = '32432509d17cea42104bbb7507a382c7';

  const url = `https://api.themoviedb.org/3/movie/343611?api_key=${KEY}`
  // const url = `  https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=Jack+Reacher`
  

 return await axios
    .get(`${url}`)
    .then(response => console.log(response.data))
}
console.log(fetch());
fetch()