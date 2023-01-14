const themeBtn = document.getElementById('button-theme');
const themeLink = document.querySelector('.theme-dark');
console.log(themeLink);

// export function onFirstLoadingMyLib() {
//   if (localStorage.getItem('ui-theme') === 'dark') {
//     themeLink.classList.add('is-hidden');
//   } else {
//     themeLink.classList.remove('is-hidden');
//   }
//   console.log('I am done');
// }

themeBtn.addEventListener('click', onThemeBtnClick);

function onThemeBtnClick(ev) {
  const result = ev.currentTarget.value;

  localStorage.setItem('ui-theme', result);
  if (result === 'dark') {
    themeLink.classList.remove('is-hidden');

    console.log('dark:', themeLink.classList);
    ev.currentTarget.value = 'light';
    location.reload();
  } else {
    themeLink.classList.add('is-hidden');
    console.log('white:', themeLink.classList);
    ev.currentTarget.value = 'dark';
    location.reload();
  }
}

function onFirstLoading() {
  const key = localStorage.getItem('ui-theme');
  console.log(key);
  if (localStorage.getItem('ui-theme') === 'dark') {
    themeLink.classList.remove('is-hidden');
    themeBtn.value = 'light';
  } else {
    themeLink.classList.add('is-hidden');
    console.log('It is ELSE');
  }
}

onFirstLoading();
