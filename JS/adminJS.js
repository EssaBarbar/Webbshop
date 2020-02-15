import { makeRequest } from "./requsetHandler.js"
export function getUsers() {
    let myData = new FormData();
    myData.append("entity", "user");
    myData.append("endpoint", "getAllUsers");
    makeRequest("../api/recivers/userReciver.php", "GET", null, (result) => {

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            document.getElementById("usersDiv").innerHTML = result[i];
        }
    })
}