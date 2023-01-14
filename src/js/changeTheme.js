const themeBtn = document.getElementById('button-theme');

const body = document.querySelector('body');
const iconToTop = document.querySelector('.icon');

const footerConteiner = document.querySelector('.footer__container');
const teamModalBtn = document.querySelector('.team_modal_btn');
const paginationBtn = document.querySelector('.tui-page-btn');

themeBtn.addEventListener('click', onThemeBtnClick);

function onThemeBtnClick(ev) {
  const result = ev.currentTarget.value;
  localStorage.setItem('ui-theme', result);
  if (result === 'dark') {
    body.classList.add('theme--dark');
    iconToTop.classList.add('icon--dark');
    footerConteiner.classList.add('footer__container--dark');
    teamModalBtn.classList.add('team_modal_btn--dark');
    paginationBtn.classList.add('tui-page-btn--dark');
    console.log('add', paginationBtn.classList);
    ev.currentTarget.value = 'light';
    console.log('dark theme click worked');
    // location.reload();
  } else {
    body.classList.remove('theme--dark');
    iconToTop.classList.remove('icon--dark');
    console.log('btntop', iconToTop.classList);
    footerConteiner.classList.remove('footer__container--dark');

    teamModalBtn.classList.remove('team_modal_btn--dark');
    paginationBtn.classList.remove('tui-page-btn--dark');
    console.log('remove', paginationBtn.classList);
    ev.currentTarget.value = 'dark';
    console.log('white theme click worked');
    // location.reload();
  }
}

function ofFirstLoadinTheme() {
  let result = localStorage.getItem('ui-theme');

  if (result === 'dark') {
    body.classList.add('theme--dark');
    iconToTop.classList.add('icon--dark');
    footerConteiner.classList.add('footer__container--dark');
    teamModalBtn.classList.add('team_modal_btn--dark');
    paginationBtn.classList.add('tui-page-btn--dark');
    console.log('add firt load', paginationBtn.classList);
    themeBtn.value = 'light';
    console.log('on first loading worked');
  }
}

ofFirstLoadinTheme();
