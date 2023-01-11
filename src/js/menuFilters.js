const refsEl = {
  btnFiltersEl: document.getElementById('button-filters'),
  menuFiltersEl: document.getElementById('menu-filters'),
  btnGenresEl: document.getElementById('button-genres'),
  genresContainerEl: document.getElementById('genres-container'),
  btnResetFiltersEl: document.getElementById('button-reset'),
};

refsEl.btnFiltersEl.addEventListener('mouseup', () =>
  refsEl.menuFiltersEl.classList.toggle('menu-filters')
);
