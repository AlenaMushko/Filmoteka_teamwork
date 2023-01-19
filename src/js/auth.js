import { homeHeaderLinkBntLogic } from './headerBtnLinkLogic';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { takeLocalStorageFromFirebaseStorage } from './firebaseDatastorage';

export function authHandler() {
    if (localStorage.auth === "yes") {
        return;
    } else {
        localStorage.setItem('auth', "no");
    };
};

export function checkUserRegistration(email, password) {
  const apiKey = 'AIzaSyCh4IOUhN3RY5RpYi3dFrDkgc69KqBpI3o';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
        returnSecureToken: true,
      })
    })
      .then(response => response.json())
      .catch();
};

export function authWithEmailAndPassword() {
  const email = refs.authEmailInput.value;
  const password = refs.authPasswordInput.value;

  if(email === "" || password === "") {

    if (localStorage.language === 'en') {
      Notiflix.Notify.warning('For signing in you need to enter both E-mail and Password');
    
    } else if (localStorage.language === 'ua') {
      Notiflix.Notify.warning('Для авторизації необхідно ввести логін та пароль');

    } else {
      Notiflix.Notify.warning('For signing in you need to enter both E-mail and Password');

    };
    return;
  };

    return checkUserRegistration(email, password)
      .then(data => {
        if (data.registered === true) {
            localStorage.auth = "yes";
            localStorage.authId = data.localId;
            //takeLocalStorageFromFirebaseStorage();
            location.reload();
            return;
        }

          if (localStorage.language === 'en') {
            Notiflix.Report.failure(
              'There is no such user',
              'Сheck email and password or sign up',
              'Okay',);
          } else if (localStorage.language === 'ua') {
            Notiflix.Report.failure(
              'Невірно веедені дані',
              'Перевірте правильність введення пошти та пароля або зареєструйтеся',
              'Ок',);
          } else {
            Notiflix.Report.failure(
              'There is no such user',
              'Сheck email and password or sign up',
              'Okay',);
          }
          
    }).catch();     
};

export function authEntranceBtnHandler(e) {
    e.preventDefault();
    authWithEmailAndPassword(email, password);
    homeHeaderLinkBntLogic();
    if (localStorage === "yes") {Notiflix.Loading.pulse();};
    localStorage.mail = refs.authEmailInput.value;
};