import { makeRequest } from "./requestHandler.js"
export function getOrders() {
    let myData = new FormData();
    myData.append("entity", "orders");
    myData.append("endpoint", "getAllOrders");
    makeRequest("../API/recivers/orderReciver.php", "GET", null, (result) => {
        console.log(result)
    }

)}