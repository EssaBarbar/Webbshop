<<<<<<< Updated upstream
import { signUpSubmit } from "./signupJS.js"
import { getUsers } from "./adminJS.js"
import { login } from "./loginJS.js"

export function addEventListener() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("getUsersbtn")
    button && button.addEventListener("click", getUsers)
    const loggain = document.getElementById("login")
    loggain && loggain.addEventListener("click", login)
}
=======
//import { signUpSubmit } from "./signupJS.js"
import { addCategory } from "./app.js"
//import { AllCategory } from "./app.js"
//import { newsbtn } from "./newletterJS.js"
import { updateCategory } from "./app.js"


export function addEventListener() {
    //document.getElementById("getUsersbtn").addEventListener("click", getUsers)
    // You write here all your event listners

    // const signup = document.getElementById("signUpSubmit")
    // signup && signup.addEventListener("click", signUpSubmit)

    // const button = document.getElementById("signUpbtn")
    // button && button.addEventListener("click", signUp)

    const categoryAll = document.getElementById("getCategories")
    categoryAll && categoryAll.addEventListener("click", getCategories)

    const productAll = document.getElementById("getProducts")
    productAll && productAll.addEventListener("click", getProducts)

    const adminAddCategory = document.getElementsByClassName("AddAdminCategory")[0]
    adminAddCategory && adminAddCategory.addEventListener("click", addCategory)

    const adminUpdateCategory = document.getElementsByClassName("updateAdminCategory")[0]
    adminUpdateCategory && adminUpdateCategory.addEventListener("click", updateCategory)

    /* const adminAllCategory = document.getElementsByClassName("catDelUpd")[0]
    adminAllCategory && adminAllCategory.addEventListener("click", AllCategory) */

    // const newsbtnbutton = document.getElementById("newsbtn")
    // newsbtnbutton && newsbtnbutton.addEventListener("click", newsbtn)
    // console.log(newsbtnbutton);

}
>>>>>>> Stashed changes
