import { makeRequest } from "./requsetHandler.js"
export function getCategories() {
    let myData = new FormData();
    myData.append("entity", "category");
    myData.append("endpoint", "getAllCategory");
    makeRequest("../api/recivers/categoryReciver.php", "GET", null, (result) => {

        /* for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            document.getElementById("categories").innerHTML = result[i];
        } */
        console.log(result)
    })
}