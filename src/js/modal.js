// Клас, який створює об'єкт модалки з методами закриття/відкриття
export  class Modal {
  constructor(openBtn, closeBtn, overlay, modal) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.overlay = document.querySelector(overlay);
    this.modal = document.querySelector(modal);
    this.body = document.querySelector('body');
  }

  openModal() {
    this.addClassAndListener();
  }

  closeModal(e) {
    if (e.target.classList.contains('modal')) {
      return;
    }
    this.removeClassAndListener();
  }

  onEscPress(e) {
    if (e.code === "Escape") {
      this.removeClassAndListener();
    };
  }

  addClassAndListener() {
    this.overlay.classList.add('active');
    this.modal.classList.add('active');
    this.body.classList.add('no-scroll');
    this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    this.overlay.addEventListener('click', this.closeModal.bind(this));
    document.addEventListener("keydown", this.onEscPress.bind(this));
    }
    removeClassAndListener() {
    this.overlay.classList.remove('active');
    this.modal.classList.remove('active');
      this.body.classList.remove('no-scroll');
          this.closeBtn.removeEventListener('click', this.closeModal);
    this.overlay.removeEventListener('click', this.closeModal);
    document.removeEventListener("keydown", this.onEscPress);
  }
  }


  // Імпортуємо клас Modal в свій js-файл і створюємо його екземпляр.
  // При створенні нового екземпляра модалки, прописуємо селектори елементів ("кнопка відкриття модалки", "кнопка закриття модалки", "оверлей/бекдроп модалки", "контейнер модалки").

  // Приклад створення модалки

  // const exampleModalWindow = new Modal(
  //   '.example-modal-open',
  //   '.example-modal-close',
  //   '.example-modal-overlay',
  //   '.example-modal'
  // );

  // Щоб модалка відкривалась, вішаємо слухача кліка на кнопку відкриття модалки

  // exampleModalWindow.openBtn.addEventListener(
  //   'click',
  //   exampleModalWindow.openModal.bind(exampleModalWindow)
  // );

