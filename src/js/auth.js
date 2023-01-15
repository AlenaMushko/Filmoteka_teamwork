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

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyCh4IOUhN3RY5RpYi3dFrDkgc69KqBpI3o';

    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.registered === true) {
            localStorage.auth = "yes";
            localStorage.authId = data.localId;
            takeLocalStorageFromFirebaseStorage();
            return;
        }
        Notiflix.Report.failure(
'There is no such user',
'Сheck email and password or sign up',
'Okay',);
    })     
};

export function authEntranceBtnHandler(e) {
    const email = refs.authEmailInput.value;
    const password = refs.authPasswordInput.value;

    e.preventDefault();
    authWithEmailAndPassword(email, password);
    homeHeaderLinkBntLogic();
    if (localStorage === "yes") {Notiflix.Loading.pulse();};
    localStorage.mail = refs.authEmailInput.value;

};