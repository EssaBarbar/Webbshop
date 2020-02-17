export function signUpSubmit(event) {

    console.log("EVENT")
    var firstName = document.getElementById("userFirstNInput").value;
    var LastName = document.getElementById("userLastNInput").value;
    var email = document.getElementById("email").value;

    var userPwd = Generate();

    console.log("firstName  " + firstName);
    console.log("LastName   " + LastName);
    console.log("userPwd    " + userPwd);
    console.log("userSignUp " + userSignUp);
    console.log("email  " + email);

}