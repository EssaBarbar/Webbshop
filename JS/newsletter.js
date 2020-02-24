import { makeRequest } from "./requestHandler.js"
/* import { newsbtn } from "./mainJS" */

export function newsbtn(event) {
  var myData = new FormData();
  myData.append("entity", "enjoy");
  myData.append("endpoint", "addSubscriber");
  myData.append("firstname", document.querySelector('input[name=firstname]').value)
  myData.append("lastname", document.querySelector('input[name=lastname]').value)
  myData.append("email", document.querySelector('input[name=email]').value)
 
  makeRequest("./API/recivers/userReciver.php", "POST", myData, (result) => {
    for (var i = 0; i < result.length; i++) {
     // console.log(result[i]);

    }
  })
}
