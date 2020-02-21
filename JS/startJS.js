import { getProducts } from "./productJS.js"
import { getCategories } from "./categoryJS.js"
import { makeRequest } from "./requestHandler.js"

window.onload = init()

function init() {
    getProducts()
    getCategories()
    checkInloggedUser()
}




function checkInloggedUser() {
    makeRequest("../API/recivers/userReciver.php", "GET", null, (result) => {
        console.log(result)
    })
}