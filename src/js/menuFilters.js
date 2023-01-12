// кнопки налаштувань і фільтрів, поки залишив

// const refsEl = {
//   btnFiltersEl: document.getElementById('button-filters'),
//   menuFiltersEl: document.getElementById('menu-filters'),
//   btnGenresEl: document.getElementById('button-genres'),
//   genresContainerEl: document.getElementById('genres-container'),
//   btnResetFiltersEl: document.getElementById('button-reset'),
// };

// refsEl.btnFiltersEl.addEventListener('click', () =>
//   refsEl.menuFiltersEl.classList.toggle('menu-filters')
// );

// функція конвертаціі id жанра в назву жанра

import genresList from '../genres.json';

const genresConverting = genresIds => {
  const genreArray = [];
  genresIds.map(genreId => {
    genresList.map(genre => {
      if (genreId === genre.id) {
        genreArray.push(genre.name);
      }
    });
  });
  return genreArray.join(', ');
};
