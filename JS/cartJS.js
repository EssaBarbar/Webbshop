import { toCart } from "./productJS.js"
import { count } from "./productJS.js"

var cartList = JSON.parse(sessionStorage.getItem("cart"));
if (cartList && cartList.length) {
    console.log(cartList)
    count(cartList.length)

    /* let totalPrice = 0; */
    for (let i = 0; i < cartList.length; i++) {
        let product = cartList[i]

        /* totalPrice += product.price */

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
    }
}

export function removeItem(index) {
    var cartList = JSON.parse(sessionStorage.getItem("cart"))
    cartList.splice(index, 1)
    sessionStorage.setItem("cart", JSON.stringify(cartList))
    document.getElementsByTagName("main")[0].innerHTML = ""
    location.href = "http://localhost:3001/Cart.html"
}