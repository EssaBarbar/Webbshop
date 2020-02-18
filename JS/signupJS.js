import { makeRequest } from "./requestHandler.js"

export function signUpSubmit(event) {

    //var userPwd = Generate(); 
    // TODO: use form from html dom
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addSignUpUser");
    myData.append("firstname", document.querySelector('input[name=firstname]').value)
    myData.append("lastname", document.querySelector('input[name=lastname]').value)
    myData.append("email", document.querySelector('input[name=email]').value)
    myData.append("password", document.querySelector('input[name=userPwdInput]').value)
    myData.append("role", document.querySelector('input[name=role]').value)
    makeRequest("./API/recivers/userReciver.php", "POST", myData, (result) => {
        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
            //console.log(i);

        }

    })

}