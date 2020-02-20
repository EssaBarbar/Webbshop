import { makeRequest } from "./requestHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../API/recivers/userReciver.php", "GET", null, (result) => {

        for (var i = 0; i < result.length; i++) {
            document.getElementById("categories").innerHTML = result[i];
        }
    })
}