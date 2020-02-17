import { makeRequest } from "./requsetHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../api/recivers/productReciver.php", "GET", null, (result) => {

        /* for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            document.getElementById("categories").innerHTML = result[i];
        } */
        console.log(result)
    })
}