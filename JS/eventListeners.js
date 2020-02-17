import { signUpSubmit } from "./signupJS.js"
import { getUsers } from "./adminJS.js"

export function addEventListener() {
    // You write here all your event listners
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("getUsersbtn")    
    button && button.addEventListener("click", getUsers)
}
