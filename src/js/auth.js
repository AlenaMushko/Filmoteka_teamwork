import { homeHeaderLinkBntLogic } from './headerBtnLinkLogic';
import { refs } from './refs';

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
            location. reload();
        }
        
    })     
};

export function authEntranceBtnHandler(e) {
    const email = refs.authEmailInput.value;
    const password = refs.authPasswordInput.value;

    e.preventDefault();
    //logInModalWindow.closeModal(); 
    authWithEmailAndPassword(email, password);
    homeHeaderLinkBntLogic();
};