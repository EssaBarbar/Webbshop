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
            cateDiv.append(title)
        }
        console.log(result)
    })
}