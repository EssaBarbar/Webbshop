// import { makeRequest } from "./mainJS.js"
// //alert("fdsfsdf");

// console.log("Hello  ");



//export function renderContent() {
function renderContent() {
    var myData = new FormData();
    myData.append("entity", "category");
    myData.append("endpoint", "renderContent");
    console.log("out");
    makeRequest("./API/recivers/categoryReciver.php", "POST", myData, (result) => {
        console.log(result);
        console.log("in");
    })
}

//export function makeRequest(url, method, formData, callback) {
function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err) => {
        console.log("Error : ", err);
    })
}