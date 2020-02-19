import { makeRequest } from "./requsetHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../api/recivers/productReciver.php", "GET", null, (result) => {

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