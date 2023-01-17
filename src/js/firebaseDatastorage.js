import { refs } from './refs';
import { addNewUser } from './signUp';
export function firebaseRealtimeDatabase() {
  //setInterval(deleteDataFromFirebaseStorage, 1000);
  //setInterval(giveLocalStorageToFirebaseStorage, 1000);
  deleteDataFromFirebaseStorage();
  giveLocalStorageToFirebaseStorage();
  window.addEventListener('storage', deleteDataFromFirebaseStorage);
  window.addEventListener('storage', giveLocalStorageToFirebaseStorage);
  addNewUser();
};
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
    };

    static delete(dataToDelete) {
      const previousSavingId = localStorage.savingId;
      return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/${localStorage.authId}/${previousSavingId}.json?x-http-method-override=DELETE`, {
        method: 'POST',
        body: JSON.stringify(dataToDelete),

      })
        .then(response => response.json())
        .then(response => {
      })
  };

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

export function deleteDataFromFirebaseStorage() {
  UserStorage.delete();
}