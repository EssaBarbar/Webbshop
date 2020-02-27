import { makeRequest } from "./requestHandler.js"

export function getOrders() {
    let myData = new FormData();
    myData.append("entity", "orders");
    myData.append("endpoint", "getAllOrders");
    makeRequest("../API/recivers/orderReciver.php", "GET", null, (result) => {

        let productContainer = document.getElementById("allProducts")

        let totalPrice = 0

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const productBox = document.createElement("div");
            productBox.classList = "productBox"

            const productName = document.createElement('p');
            productName.innerText = product.ProductName
            productBox.append(productName)

            const pic = document.createElement('img');
            pic.src = product.CoverPicture
            pic.classList = "productPic"
            productBox.append(pic)

            productContainer.append(productBox)

            totalPrice += Number(product.Price)
        }

        let priceText = document.getElementById("totalPrice");
        priceText.innerText =
            "Total" + " " + "price:" + " " + totalPrice + " " + "SEK";

        console.log(result)
    }

    )
}