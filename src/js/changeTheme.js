const themeBtn = document.querySelector('#theme-btn');
console.log(themeBtn);

export function onFirstLoadTheme() {
  document.querySelector('.theme-dark').disabled = true;
  const result = localStorage.getItem('ui-theme');
  if (result === 'dark') {
    document.querySelector('.theme-dark').disabled = false;
    themeBtn.value = 'light';
  }
}

export function getChengeThemeByClick() {
  themeBtn.addEventListener('click', onThemeBtnClick);

  function onThemeBtnClick(ev) {
    const result = ev.currentTarget.value;
    localStorage.setItem('ui-theme', result);
    if (result === 'dark') {
      document.querySelector('.theme-dark').disabled = false;
      themeBtn.value = 'light';
    } else {
      document.querySelector('.theme-dark').disabled = true;
      themeBtn.value = 'dark';
    }
  }
}
