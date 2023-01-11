// Клас, який створює об'єкт модалки з методами закриття/відкриття
class Modal {
  constructor(openBtn, closeBtn, overlay, modal) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.overlay = document.querySelector(overlay);
    this.modal = document.querySelector(modal);
    this.body = document.querySelector('body');
  }

  openModal() {
    this.overlay.classList.add('active');
    this.modal.classList.add('active');
    this.body.classList.add('no-scroll');
    this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    this.overlay.addEventListener('click', this.closeModal.bind(this));
  }

  closeModal(e) {
    if (e.target.classList.contains('modal')) {
      return;
    }
    this.overlay.classList.remove('active');
    this.modal.classList.remove('active');
    this.body.classList.remove('no-scroll');
    this.closeBtn.removeEventListener('click', this.closeModal.bind(this));
    this.overlay.removeEventListener('click', this.closeModal.bind(this));
  }
}

// ⚠️ Для роботи скрипта необхідно цю функцію підключити у файл index.js ⚠️
export function modalWindows() {
  // Всі створені об'єкти модалки і слухачі їх відкриття інджектимо в цю функцію
  // При створенні нового об'єкту модалки прописуємо селектори елементів ("кнопка відкриття модалки", "кнопка закриття модалки", "оверлей/бекдроп модалки", "контейнер модалки")
  // Приклад створення модалки картки фільму
  //   const filmCardModal = new Modal(
  //     'кнопка відкриття модалки',
  //     '.film-modal__close-btn',
  //     '.film-modal-overlay',
  //     '.film-modal'
  //   );
  //   filmCardModal.openBtn.addEventListener(
  //     'click',
  //     filmCardModal.openModal.bind(filmCardModal)
  //   );
}
