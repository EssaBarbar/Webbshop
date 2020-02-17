import { makeRequest } from "./mainJS.js"

export function signUpSubmit(event) {

  //var userPwd = Generate(); 
  // TODO: use form from html dom
  var myData = new FormData();
  myData.append("entity", "enjoy");
  myData.append("endpoint", "addSignUpUser");
  myData.append("firstname", document.querySelector('input[name=firstname]').value)
  myData.append("lastname", document.querySelector('input[name=lastname]').value)
  myData.append("email", document.querySelector('input[name=email]').value)
  myData.append("role", document.querySelector('input[name=role]').value)
  //myData.append("userPwd", userPwd)
  makeRequest("./API/recivers/userReciver.php", "POST", myData, (result) => {
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);

    }

  })

}


function Generate() {

  var length = 4
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  }
  return result
}

