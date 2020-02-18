import { getUsers } from "./adminJS.js"
import { signUp } from "./loginJS.js"

export function addEventListener() {
    document.getElementById("getUsersbtn").addEventListener("click", getUsers)
    // You write here all your event listners
    const button = document.getElementById("signUpbtn")
    button && button.addEventListener("click", signUp)
}