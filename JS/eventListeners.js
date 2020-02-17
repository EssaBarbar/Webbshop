import { signUpSubmit } from "./signupJS.js"


/* import { getUsers } from "./adminJS.js" */
import { signUp } from "./loginJS.js"

export function addEventListener() {
    /* document.getElementById("getUsersbtn").addEventListener("click", getUsers) */
    // You write here all your event listners
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("signUpbtn")
    button && button.addEventListener("click", signUp)
}
