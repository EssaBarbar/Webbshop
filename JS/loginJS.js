import { getProducts } from "./productJS.js"
import { getCategories } from "./categoryJS.js"
import { makeRequest } from "./requestHandler.js"

window.onload = init()

function init() {
    getProducts()
    getCategories()
    checkInloggedUser()
}

export function login() {
    let userName = document.getElementById("username").value
    let password = document.getElementById("password").value

    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "loginUser");
    myData.append("userName", userName)
    myData.append("password", password)

    makeRequest("../API/recivers/userReciver.php", "POST", myData, (result) => {
        console.log(result)
    })
}

function checkInloggedUser() {
    makeRequest("../API/recivers/userReciver.php", "GET", null, (result) => {
        console.log(result)
    })
}
