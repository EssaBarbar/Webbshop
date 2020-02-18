import { makeRequest } from "./requestHandler.js"
export function getProducts() {
    // let myData = new FormData();
    //myData.append("entity", "products");
    //myData.append("endpoint", "getAllProducts");
    makeRequest("./API/recivers/productReciver.php", "GET", null, (result) => {

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            //document.getElementById("getProducts").innerHTML = result[i];
        }
        //   console.log(result)
    })
}