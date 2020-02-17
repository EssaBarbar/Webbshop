import { makeRequest } from "./requsetHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../api/recivers/productReciver.php", "GET", null, (result) => {

        let prods = document.getElementById("categoryItems")

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            const product = document.createElement('p');
            product.innerText = result[i].ProductName
            prods.append(product)
        }
        console.log(result)
    })
}