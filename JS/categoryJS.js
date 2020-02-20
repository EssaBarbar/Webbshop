import { makeRequest } from "./requestHandler.js"
export function getCategories() {
    let myData = new FormData();
    myData.append("entity", "category");
    myData.append("endpoint", "getAllCategory");
    makeRequest("./API/recivers/categoryReciver.php", "GET", null, (result) => {

        var catDiv = document.getElementById("categories")
        for (var i = 0; i < result.length; i++) {
            const title = document.createElement("p");
            title.innerText = result[i].CategoryName
            catDiv.append(title)
        }
    })
}