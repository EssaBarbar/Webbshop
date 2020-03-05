import { makeRequest } from "./requestHandler.js"




window.onload = init()

function init() {
    loadOrdersOnload()

}
let resultFromGetOrders
function loadOrdersOnload() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getOrdersToMyPages");
    myData.append("inloggedUserId", sessionStorage.getItem("inloggedUserId"));
    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        resultFromGetOrders = result
        renderOrdersData()
        console.log(result)
    })
}

function renderOrdersData() {

    let arrayWithAllOrders = []
    let arrayForOneOrder = []

    for (let i = 0; i < resultFromGetOrders.length; i++) {
        let order = resultFromGetOrders[i]

        let shouldPush = true
        let theSpecificInfoForProductOfOrder = {}

        for (let j = 0; j < arrayWithAllOrders.length; j++) {
            if (order.OrderID == arrayWithAllOrders[j][0].OrderID) {
                shouldPush = false
                theSpecificInfoForProductOfOrder.ProductID = order.ProductID
                theSpecificInfoForProductOfOrder.Quantity = order.Quantity
                theSpecificInfoForProductOfOrder.UnitPrice = order.UnitPrice
                arrayWithAllOrders[j].push(theSpecificInfoForProductOfOrder)
                arrayWithAllOrders[j][0].orderTotalPrice += order.UnitPrice * order.Quantity

            }

        }
        if (shouldPush == true) {
            let theGeneralInfoForiOrder = {}
            theGeneralInfoForiOrder.OrderID = order.OrderID
            theGeneralInfoForiOrder.OrderDate = order.OrderDate
            theGeneralInfoForiOrder.UserID = order.UserID
            theGeneralInfoForiOrder.ShipperID = order.ShipperID
            theGeneralInfoForiOrder.Recieved = order.Recieved
            theGeneralInfoForiOrder.Shipped = order.Shipped
            theGeneralInfoForiOrder.orderTotalPrice = order.Quantity * order.UnitPrice
            arrayForOneOrder.push(theGeneralInfoForiOrder)
            theSpecificInfoForProductOfOrder.ProductID = order.ProductID
            theSpecificInfoForProductOfOrder.Quantity = order.Quantity
            theSpecificInfoForProductOfOrder.UnitPrice = order.UnitPrice
            arrayForOneOrder.push(theSpecificInfoForProductOfOrder)
        }

        if (arrayForOneOrder.length) {
            arrayWithAllOrders.push(arrayForOneOrder)
            arrayForOneOrder = []
        }

    }
    let ordersContainer = document.getElementById("ordersContainer")
    for (let i = 0; i < arrayWithAllOrders.length; i++) {
        const generalInfoDiv = document.createElement("div")
        let paraFOrProdid = document.createElement("p")
        paraFOrProdid.innerText = arrayWithAllOrders[i][0].OrderID
        let paraFOrProddate = document.createElement("p")
        paraFOrProddate.innerText = arrayWithAllOrders[i][0].OrderDate
        let recivedButton = document.createElement("Button")
        recivedButton.onclick = function thisOrderIsRecived() {
            thisOrderIsReceived(arrayWithAllOrders[i][0].OrderID)
        }
        if (arrayWithAllOrders[i][0].Recieved == 0) {
            recivedButton.innerHTML = "I Received this order " + arrayWithAllOrders[i][0].OrderID
        } else {
            recivedButton.style.display = "None"
        }

        let paraFOrProdShipped = document.createElement("p")
        if (arrayWithAllOrders[i][0].Shipped == 0) {
            paraFOrProdShipped.innerText = "No"

        } else {
            paraFOrProdShipped.innerText = "Yes"
        }

        let paraFOrProdorderTotalPrice = document.createElement("p")
        paraFOrProdorderTotalPrice.innerText = arrayWithAllOrders[i][0].orderTotalPrice
        let mywholeorderDic = document.createElement("h5")
        mywholeorderDic.innerText = "this is the main div"
        ordersContainer.append(paraFOrProdid)
        ordersContainer.append(paraFOrProddate)

        ordersContainer.append(recivedButton)
        ordersContainer.append(paraFOrProdShipped)

        ordersContainer.append(paraFOrProdorderTotalPrice)
        ordersContainer.append(mywholeorderDic)

        for (let j = 1; j < arrayWithAllOrders[i].length; j++) {
            let specOrderInfo = document.createElement("div")
            ordersContainer.append(specOrderInfo)

            let paraFOrProdProductID = document.createElement("p")
            paraFOrProdProductID.innerText = arrayWithAllOrders[i][j].ProductID
            let paraFOrProdProductQuantity = document.createElement("p")
            paraFOrProdProductQuantity.innerText = arrayWithAllOrders[i][j].Quantity
            let paraFOrProdProductUnitPrice = document.createElement("p")
            paraFOrProdProductUnitPrice.innerText = arrayWithAllOrders[i][j].UnitPrice

            specOrderInfo.append(paraFOrProdProductID)
            specOrderInfo.append(paraFOrProdProductQuantity)
            specOrderInfo.append(paraFOrProdProductUnitPrice)
            let myspecDic = document.createElement("h5")
            myspecDic.innerText = "this is the  part for many prods info"
            specOrderInfo.append(myspecDic)

        }


        ordersContainer.append(generalInfoDiv)

    }




}
function thisOrderIsReceived(theReceivedOrderId) {

    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "theOrderIsReceived");
    myData.append("theReceivedOrderId", theReceivedOrderId);
    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        console.log(result)
    })


}