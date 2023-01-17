import { Modal } from "./modal";

// ⚠️ Підключити цю функцію в index.js ⚠️
export function filmCardModalWindow() {
  const filmCardModal = new Modal(
    ".js-open-film-modal",
    ".film-modal__close-btn",
    ".film-modal__overlay",
    ".film-modal"
  );
  
  const modalFilmBtn = document.querySelectorAll(".js-open-film-modal");

  modalFilmBtn.forEach(btn => {
    btn.addEventListener('click', filmCardModal.openFilmCardModal.bind(filmCardModal));
  });
}