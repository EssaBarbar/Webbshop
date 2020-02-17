import { signUpSubmit } from "./signupJS.js"

//document.getElementById("signUpSubmit").addEventListener("click", signUpSubmit);
document.addEventListener("click", myFunction);


document.addEventListener("click", function() {
    document.getElementById("addCategory").innerHTML = "addCategory";
});

document.addEventListener("click", function() {
    document.getElementById("uppDelCategory").innerHTML = "uppDelCategory";
});

document.addEventListener("click", function() {
    document.getElementById("addProduct").innerHTML = "addProduct";
});

document.addEventListener("click", function() {
    document.getElementById("uppDelProduct").innerHTML = "uppDelProduct";
});