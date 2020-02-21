import { signUpSubmit } from "./signupJS.js"
import { login } from "./loginJS.js"
import { updateCategory } from "./app.js"
import { addCategory } from "./app.js"

export function addEventListener() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)

    const button = document.getElementById("getUsersbtn")
    button && button.addEventListener("click", getUsers)

    const loggain = document.getElementById("login")
    loggain && loggain.addEventListener("click", login)

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