import { makeRequest } from "./requsetHandler.js"
export function getUsers() {
    let myData = new FormData();
    myData.append("entity", "user");
    myData.append("endpoint", "getAllUsers");
    makeRequest("../api/recivers/userReciver.php", "GET", null, (result) => {
        let huvudusersDiv = document.getElementById("usersDiv")

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            const userDiv = document.createElement("div")
            huvudusersDiv.append(userDiv)
            const title = document.createElement('p');
            const role = document.createElement('p');
            title.innerText = result[i].FirstName
            role.innerText = result[i].Role
            usersDiv.append(title)
            usersDiv.append(role)
            userDiv.style.display = "flex"
            userDiv.style.flexDirection = "row"
        }
    })
}