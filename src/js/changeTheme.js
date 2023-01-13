const themeBtn = document.getElementById('button-theme');
const body = document.querySelector('body');
const btnToTop = document.querySelector('.icon');
console.log(btnToTop);

themeBtn.addEventListener('click', onThemeBtnClick);

function onThemeBtnClick(ev) {
  const result = ev.currentTarget.value;

  localStorage.setItem('ui-theme', result);
  if (result === 'dark') {
    body.classList.add('theme--dark');
    btnToTop.classList.add('icon--dark');
    ev.currentTarget.value = 'light';
  } else {
    body.classList.remove('theme--dark');
    btnToTop.classList.remove('icon--dark');
    ev.currentTarget.value = 'dark';
  }
}

function onFirstLoading() {
  if (localStorage.getItem('ui-theme') === 'dark') {
    body.classList.add('theme--dark');
    themeBtn.value = 'light';
  }
}

onFirstLoading();
