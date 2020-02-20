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
        let productContainer = document.getElementById("allProducts")

        for (let i = 0; i < result.length; i++) {
            const productBox = document.createElement("div");
            productBox.classList = "productBox"
            console.log(result[i]);

            const productName = document.createElement('p');
            productName.innerText = result[i].ProductName
            productBox.append(productName)

            /* const descrip = document.createElement('p');
            descrip.innerText = result[i].Description
            productBox.append(descrip) */

            const pic = document.createElement('img');
            pic.src = result[i].CoverPicture
            pic.classList = "productPic"
            productBox.append(pic)

            const price = document.createElement('p');
            price.innerText = result[i].Price + " " + "kr"
            productBox.append(price)

            const button = document.createElement('button');
            button.innerText = 'Köp'
            button.classList = 'button'
            productBox.append(button)

            productContainer.append(productBox)
        }
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
