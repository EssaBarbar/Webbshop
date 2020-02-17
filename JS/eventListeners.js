import { getUsers } from "./adminJS.js"

export function addEventListener() {
    //document.getElementById("getUsersbtn").addEventListener("click", getUsers)
    // You write here all your event listners
    const button = document.getElementById("getUserbtn")
    button && button.addEventListener("click", getUsers)
}