import { Modal } from "./modal";

// ⚠️ Підключити цю функцію в index.js ⚠️
export function filmCardModalWindow() {
  const filmCardModal = new Modal(
    // ".top-films" || ".library-films" || ".glide__slides",
    ".top-films",
    ".film-modal__close-btn",
    ".film-modal__overlay",
    ".film-modal"
  );

  filmCardModal.openBtn.addEventListener('click', filmCardModal.openFilmCardModal.bind(filmCardModal));
}