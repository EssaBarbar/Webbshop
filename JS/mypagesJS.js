import { makeRequest } from "./requestHandler.js"

export function getOrders() {
    let myData = new FormData();
    myData.append("entity", "orders");
    myData.append("endpoint", "getAllOrders");
    makeRequest("../API/recivers/orderReciver.php", "GET", null, (result) => {

        let productContainer = document.getElementById("userProducts")

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

            if (product.Shipped = "0") {
                document.getElementById("sendOrdersText").innerText = "Your Orders Has Been Send! Weeeee :)"
            } else if (product.Shipped = "0") {
                document.getElementById("sendOrdersText").innerText = "Your Orders Has NOT Been Send Yet!"
            }


        }

        let priceText = document.getElementById("totalPrice");
        priceText.innerText =
            "Total" + " " + "price:" + " " + totalPrice + " " + "SEK";

        console.log(result)
    })
}

export function receivedOrder() {
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "receivedOrder");
    myData.append("Received", document.querySelector('input[name=received]').value)

    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        console.log(result)
    })
}

export function shippedOrder() {
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "shippedOrder");

    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        console.log(result)
    })
}