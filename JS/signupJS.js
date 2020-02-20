import { makeRequest } from "./requestHandler.js"

export function signUpSubmit(event) {

    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addUser");
    myData.append("firstname", document.querySelector('input[name=firstname]').value)
    myData.append("lastname", document.querySelector('input[name=lastname]').value)
    myData.append("email", document.querySelector('input[name=email]').value)
    myData.append("password", document.querySelector('input[name=userPwdInput]').value)
    myData.append("role", document.querySelector('input[name=role]').value)

    makeRequest("../API/recivers/userReciver.php", "POST", myData, (result) => {
        console.log(result)
    })

}
}
