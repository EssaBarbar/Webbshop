import { signUpSubmit } from "./signupJS.js"
import { getCategories } from "./categoryJS.js"
import { getProducts } from "./productJS.js"
/* import { getUsers } from "./adminJS.js" */
import { signUp } from "./loginJS.js"

export function addEventListener() {
    /* document.getElementById("getUsersbtn").addEventListener("click", getUsers) */
    // You write here all your event listners
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("signUpbtn")
    button && button.addEventListener("click", signUp)
    const categoryAll = document.getElementById("getCategories")
    categoryAll && categoryAll.addEventListener("click", getCategories)
    const productAll = document.getElementById("getProducts")
    productAll && productAll.addEventListener("click", getProducts)


}