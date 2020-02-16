import { makeRequest } from "./requsetHandler.js"
export function getUsers() {
    let myData = new FormData();
    myData.append("entity", "user");
    myData.append("endpoint", "getAllUsers");
    makeRequest("../api/recivers/userReciver.php", "GET", null, (result) => {
        let usersDiv = document.getElementById("usersDiv")

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            usersDiv.innerHTML = result[i]
            // let userDiv = document.createElement("div")
            //     userDiv.innerHTML = result[i];
            //     usersDiv.appendChild("userDiv")
        }
    })
}