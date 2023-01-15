import { refs } from './refs';

class UserStorage {

    // функція, яка додає в базу даних новий запис 
    // з вмістом newSaving 
    // під ім'ям response.name 
    // в папці users
    static create(newSaving) {
        return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/${localStorage.authId}.json`, {
          method: 'POST',
          body: JSON.stringify(newSaving),

        })
          .then(response => response.json())
          .then(response => {
            localStorage.savingId = response.name;
            
        })
    };

    // функція, яка забирає з бази даних
    static take() {
        return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/${localStorage.authId}.json?auth=${localStorage.authId}`)
        .then(response => response.json())
        .then(response => {
            const arrayOfSavings = Object.keys(response).map(key => ({
                ...response[key]
              }));
            const lastSaving = arrayOfSavings[(arrayOfSavings.length-1)];
              for(const saving in lastSaving) {
                //localStorage.saving = lastSaving[saving];
                localStorage.setItem(saving, lastSaving[saving]);
            };
            location.reload();
        })
    }
}

// створення сховища для нового користувача на бекенді
export function giveLocalStorageToFirebaseStorage() {
  if(localStorage.auth === "yes") {
    UserStorage.create(localStorage);
  };
};

// підтягування з бекенду сховища користувача, при авторизації
export function takeLocalStorageFromFirebaseStorage() {
    UserStorage.take();
};

//зміна сховища користувача на бекенді 
export function changeLocalStorageInFirebaseStorage() {
    if(localStorage.auth === "yes") {
        UserStorage.change(localStorage);
    };
};