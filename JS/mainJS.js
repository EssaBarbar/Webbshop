/* window.onload = init()

function init() {
    import { addEventListener } from "./eventListeners"
    addEventListener() */
    // You write all the funcs that gonna be done when you load the login site here

//}
// you write all other stuffs the you want to do from other js pages here but you need to import them
// Like maybe doing one function that gonna controll every thins with the login and call it from here
export function makeRequest(url, method, formData, callback){

    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err) => {
        console.log("Error : ",err); 
    })
}