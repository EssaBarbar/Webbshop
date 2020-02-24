import { makeRequest } from "./requestHandler.js"
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../API/recivers/productReciver.php", "GET", null, (result) => {

        let productContainer = document.getElementById("allProducts")

        if (cartList) {
            count(cartList.length);
        }

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
                count(cartList.length)
            }
            productBox.append(button)

            productContainer.append(productBox)
        }
        console.log(result)
    })
}

export function getXboxProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getXboxProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)


        let thisContainer = document.getElementById("allProducts")
        thisContainer.innerText = ""

        let xboxBox = document.getElementById("allProducts")
        xboxBox.classList = "categoryClass"

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const xboxProductBox = document.createElement("div");
            xboxProductBox.classList = "productBox"
            console.log(result[i]);

            const xboxProductName = document.createElement('p');
            xboxProductName.innerText = product.ProductName
            xboxProductBox.append(xboxProductName)

            const xboxDescrip = document.createElement('p');
            xboxDescrip.innerText = product.Description
            xboxProductBox.append(xboxDescrip)

            const xboxPic = document.createElement('img');
            xboxPic.src = product.CoverPicture
            xboxPic.classList = "productPic"
            xboxProductBox.append(xboxPic)

            const xboxPrice = document.createElement('p');
            xboxPrice.innerText = product.Price + " " + "kr"
            xboxProductBox.append(xboxPrice)

            const xboxButton = document.createElement('button');
            xboxButton.innerText = 'Köp'
            xboxButton.classList = 'button'
            xboxButton.data = product
            xboxButton.onclick = function () {
                toCart(this.data)
                count(cartList.length)
            }
            xboxProductBox.append(xboxButton)

            xboxBox.append(xboxProductBox)
        }
    })
}
export function getPS4Products() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPS4Products");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)

        let thisContainerTo = document.getElementById("allProducts")
        thisContainerTo.innerText = ""

        let ps4Box = document.getElementById("allProducts")
        ps4Box.classList = "categoryClass"

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const ps4ProductBox = document.createElement("div");
            ps4ProductBox.classList = "productBox"
            console.log(result[i]);

            const ps4ProductName = document.createElement('p');
            ps4ProductName.innerText = product.ProductName
            ps4ProductBox.append(ps4ProductName)

            const ps4Descrip = document.createElement('p');
            ps4Descrip.innerText = product.Description
            ps4ProductBox.append(ps4Descrip)

            const ps4Pic = document.createElement('img');
            ps4Pic.src = product.CoverPicture
            ps4Pic.classList = "productPic"
            ps4ProductBox.append(ps4Pic)

            const ps4Price = document.createElement('p');
            ps4Price.innerText = product.Price + " " + "kr"
            ps4ProductBox.append(ps4Price)

            const ps4Button = document.createElement('button');
            ps4Button.innerText = 'Köp'
            ps4Button.classList = 'button'
            ps4Button.data = product
            ps4Button.onclick = function () {
                toCart(this.data)
                count(cartList.length)
            }
            ps4ProductBox.append(ps4Button)

            ps4Box.append(ps4ProductBox)
        }
    })
}

export function getPCProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPCProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result)

        let andThisAlso = document.getElementById("allProducts")
        andThisAlso.innerText = ""

        let pcBox = document.getElementById("allProducts")
        pcBox.classList = "categoryClass"

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const pcProductBox = document.createElement("div");
            pcProductBox.classList = "productBox"
            console.log(result[i]);

            const pcProductName = document.createElement('p');
            pcProductName.innerText = product.ProductName
            pcProductBox.append(pcProductName)

            const pcDescrip = document.createElement('p');
            pcDescrip.innerText = product.Description
            pcProductBox.append(pcDescrip)

            const pcPic = document.createElement('img');
            pcPic.src = product.CoverPicture
            pcPic.classList = "productPic"
            pcProductBox.append(pcPic)

            const pcPrice = document.createElement('p');
            pcPrice.innerText = product.Price + " " + "kr"
            pcProductBox.append(pcPrice)

            const pcButton = document.createElement('button');
            pcButton.innerText = 'Köp'
            pcButton.classList = 'button'
            pcButton.data = product
            pcButton.onclick = function () {
                toCart(this.data)
                count(cartList.length)
            }
            pcProductBox.append(pcButton)

            pcBox.append(pcProductBox)
        }
    })
}

var cartList = JSON.parse(sessionStorage.getItem("cart"));

export function toCart(product) {
    if (cartList) {
        cartList.push(product);
        count(cartList.length);
    } else {
        cartList = [];
        cartList.push(product);
    }
    sessionStorage.setItem("cart", JSON.stringify(cartList));
    console.log(cartList)
}

export function count(length) {
    if (cartList) {
        document.getElementById("counter").innerText = length;
        console.log(length)
    }if (length === 0) {
        document.getElementById("counter").innerText = "";
    }
}