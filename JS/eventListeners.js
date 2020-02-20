import { signUpSubmit } from "./signupJS.js"
import { getUsers } from "./adminJS.js"
import { login } from "./loginJS.js"

export function addEventListener() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("getUsersbtn")
    button && button.addEventListener("click", getUsers)
    const loggain = document.getElementById("login")
    loggain && loggain.addEventListener("click", login)
}
