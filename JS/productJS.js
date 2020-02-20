import { makeRequest } from "./requestHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../API/recivers/productReciver.php", "GET", null, (result) => {

        for (var i = 0; i < result.length; i++) {
            document.getElementById("categories").innerHTML = result[i];
        }
    })
}
export function getXboxProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getXboxProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)
    })


}
export function getPS4Products() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPS4Products");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)
    })


}
export function getPCProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPCProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)
    })


}
