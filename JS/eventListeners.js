/* import { getUsers } from "./adminJS.js" */
import { signUp } from "./loginJS.js"

export function addEventListener() {
    /* document.getElementById("getUsersbtn").addEventListener("click", getUsers) */
    // You write here all your event listners
    document.getElementById("signUpbtn").addEventListener("click", signUp)
}