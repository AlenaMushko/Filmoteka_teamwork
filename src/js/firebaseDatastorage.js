import { UserStorage } from './usersBackend';

export function giveLocalStorageToFirebaseStorage() {
    if(localStorage.auth === "yes") {
        console.log(localStorage);
    }
};

export function takeLocalStorageToFirebaseStorage() {
    
}


UserStorage.create(localStorage);