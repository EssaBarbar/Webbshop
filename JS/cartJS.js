import { toCart } from "./productJS.js"
import { count } from "./productJS.js"

let cartList = JSON.parse(sessionStorage.getItem("cart"));
if (cartList && cartList.length) {
    console.log(cartList)
    count(cartList.length)

    let totalPrice = 0

    for (let i = 0; i < cartList.length; i++) {
        let product = cartList[i]

        let cartProductContainer = document.getElementById('cartProducts')

        const cartBox = document.createElement('div')
        cartBox.classList = 'productBox'

        const ProductName = document.createElement('p')
        ProductName.innerText = product.ProductName
        cartBox.append(ProductName)

        const CoverPicture = document.createElement('img')
        CoverPicture.src = product.CoverPicture
        CoverPicture.classList = 'productPic'
        cartBox.append(CoverPicture)

        const zz = document.createElement('p')
        zz.innerText = product.Price + " " + "SEK"

        cartBox.append(zz)

        const removeProduct = document.createElement('button')
        removeProduct.classList = 'button'
        removeProduct.innerText = "Remove"
        removeProduct.data = i;
        removeProduct.onclick = function () {
            removeItem(this.data);
        }
        cartBox.append(removeProduct)

        cartProductContainer.append(cartBox)

        totalPrice += Number(product.Price)
        console.log(totalPrice)
    }

    let checkContainer = document.getElementById("checkBox")

    let priceText = document.createElement("h2");
    priceText.innerText =
        "Total" + " " + "price:" + " " + totalPrice + " " + "SEK";
    priceText.classList = "totalText";

    checkContainer.appendChild(priceText)

    let finishButton = document.createElement("button")
    finishButton.innerText = "Checkout"
    finishButton.classList = "button"
    finishButton.onclick = function() {
        checkShipper()
    }

    checkContainer.appendChild(finishButton)

}else {
    let buyText = document.createElement("p")
    buyText.classList = "buyText"
    buyText.innerText = "You have no orders yet :)"

    let container = document.getElementById("checkBox")

    container.appendChild(buyText)
}

export function removeItem(index) {
    let cartList = JSON.parse(sessionStorage.getItem("cart"))
    cartList.splice(index, 1)
    sessionStorage.setItem("cart", JSON.stringify(cartList))
    document.getElementsByTagName("main")[0].innerHTML = ""
    location.href = "http://localhost:3001/Cart.html"
}

function checkShipper() {
   alert("Fyll i frakt alternativ!")
}