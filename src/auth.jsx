
export function login(name){
    localStorage.setItem('is-logged-in',JSON.stringify(true))
    localStorage.setItem('user-name',JSON.stringify(name))
}
export function logout(){
    localStorage.removeItem('is-logged-in')
    localStorage.removeItem('user-name')
}
export function isAuthenticated(){
    return JSON.parse(localStorage.getItem('is-logged-in')|| 'false')
}
