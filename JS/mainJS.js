window.onload = init()

import { addEventListener } from "./eventListeners.js"
import { getCategories } from "./categoryJS.js"
import { getProducts } from "./productJS.js"
import { signUp } from "./loginJS.js"
import { signUpSubmit } from "./signupJS.js"

function init() {
    addEventListener()
    // You write all the funcs that gonna be done when you load the login site here
    getCategories()
    getProducts()
    signUpSubmit()
    
 /*    signUp() */
}
// you write all other stuffs the you want to do from other js pages here but you need to import them
// Like maybe doing one function that gonna controll every thins with the login and call it from here

