import { getProducts } from "./productJS.js"
import { getCategories } from "./categoryJS.js"
import { makeRequest } from "./requestHandler.js"
window.onload = init()

async function init() {
    getProducts()
    getCategories()

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