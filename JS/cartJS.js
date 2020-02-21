import { toCart } from "./productJS.js"
import { count } from "./productJS.js"


var cartList = JSON.parse(sessionStorage.getItem("cart"));
if (cartList && cartList.length) {
    console.log(cartList)
    /* let productContainer = document.getElementById("allProducts")

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

        const price = document.createElement('p');
        price.innerText = product.Price + " " + "kr"
        productBox.append(price)

        const button = document.createElement('button');
        button.innerText = 'Köp'
        button.classList = 'button'
        button.data = product
        button.onclick = function () {
            toCart(this.data)
        }
        productBox.append(button)

        productContainer.append(productBox)
    }
    console.log(result)
})
} */
}