export function authHandler() {
    if (localStorage.auth === "yes") {
        return;
    } else {
        localStorage.setItem('auth', "no");
    }    
}