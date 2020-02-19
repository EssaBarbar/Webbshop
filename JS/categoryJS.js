import { makeRequest } from "./requsetHandler.js"
export function getCategories() {
    let myData = new FormData();
    myData.append("entity", "category");
    myData.append("endpoint", "getAllCategory");
    makeRequest("../api/recivers/categoryReciver.php", "GET", null, (result) => {

        let cateDiv = document.getElementById("categories")

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            const title = document.createElement('p');
            title.innerText = result[i].CategoryName
            title.onclick = function () {
                getProducts()
            }
            cateDiv.append(title)
        }
        console.log(result)
    })
}

export function getEachProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getEachProduct");
    makeRequest("../api/recivers/productReciver.php", "GET", null, (result) => {
        console.log(result)
        
        let categoryContainer = document.getElementById("allProducts")

        for (let i = 0; i < result.length; i++) {
            const eachProductBox = document.createElement("div");
            eachProductBox.innerText = result[i].CategoryID
            eachProductBox.classList = "productBox"
            console.log(eachProductBox.innerText)

            const productName = document.createElement('p');
            productName.innerText = result[i].ProductName
            eachProductBox.append(productName)

            const descrip = document.createElement('p');
            descrip.innerText = result[i].Description
            eachProductBox.append(descrip)

            const pic = document.createElement('img');
            pic.src = result[i].CoverPicture
            pic.classList = "productPic"
            eachProductBox.append(pic)

            const price = document.createElement('p');
            price.innerText = result[i].Price + " " + "kr"
            eachProductBox.append(price)

            const button = document.createElement('button');
            button.innerText = 'Köp'
            button.classList = 'button'
            eachProductBox.append(button)

            categoryContainer.append(eachProductBox)
        }
    
    })
}
function getProducts() {
    getEachProducts()
}
