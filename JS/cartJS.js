import { toCart } from "./productJS.js"
import { count } from "./productJS.js"

let cartList = JSON.parse(sessionStorage.getItem("cart"));
if (cartList && cartList.length) {
    console.log(cartList)
    count(cartList.length)

    let totalPrice = ""

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

        const Price = document.createElement('p')
        Price.innerText = product.Price + " " + "kr"

        console.log(Price)
        cartBox.append(Price)

        const removeProduct = document.createElement('button')
        removeProduct.classList = 'button'
        removeProduct.innerText = "Ta bort"
        removeProduct.data = i;
        removeProduct.onclick = function () {
            removeItem(this.data);
        }
        cartBox.append(removeProduct)

        cartProductContainer.append(cartBox)
    
        totalPrice += parseFloat(product.Price)
    }

    let checkContainer = document.getElementById("checkBox")

    let priceText = document.createElement("h2");
    priceText.innerText =
        "Totalt" + " " + "pris:" + " " + totalPrice + " " + "kr";
    priceText.classList = "totalText";

    checkContainer.appendChild(priceText);
}

export function removeItem(index) {
    let cartList = JSON.parse(sessionStorage.getItem("cart"))
    cartList.splice(index, 1)
    sessionStorage.setItem("cart", JSON.stringify(cartList))
    document.getElementsByTagName("main")[0].innerHTML = ""
    location.href = "http://localhost:3001/Cart.html"
}