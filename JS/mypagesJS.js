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
    })
}

function renderOrdersData() {

    let arrayWithAllOrders = []
    let arrayForOneOrder = []

    for (let i = 0; i < resultFromGetOrders.length; i++) {
        let order = resultFromGetOrders[i]
        let orderTotalPricebefore = 0

        let shouldPush = true
        let theSpecificInfoForProductOfOrder = {}

        for (let j = 0; j < arrayWithAllOrders.length; j++) {
            if (order.OrderID == arrayWithAllOrders[j][0].OrderID) {
                orderTotalPricebefore = arrayWithAllOrders[j][0].orderTotalPrice
                for (let z = 1; z <= arrayWithAllOrders[j].length; z++) {
                    console.log(arrayWithAllOrders[j])
                    orderTotalPricebefore += arrayWithAllOrders[j][z].Quantity * arrayWithAllOrders[j][z].UnitPrice
                    arrayWithAllOrders[j][0].orderTotalPrice = orderTotalPricebefore
                }
                shouldPush = false
                theSpecificInfoForProductOfOrder.ProductID = order.ProductID
                theSpecificInfoForProductOfOrder.Quantity = order.Quantity
                theSpecificInfoForProductOfOrder.UnitPrice = order.UnitPrice
                arrayWithAllOrders[j].push(theSpecificInfoForProductOfOrder)

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
    console.log(arrayWithAllOrders)
    let ordersContainer = document.getElementById("ordersContainer")
    for (let i = 0; i < arrayWithAllOrders.length; i++) {
        const generalInfoDiv = document.createElement("div")
        let paraFOrProdid = document.createElement("p")
        paraFOrProdid.innerText = arrayWithAllOrders[i][0].OrderID
        let paraFOrProddate = document.createElement("p")
        paraFOrProddate.innerText = arrayWithAllOrders[i][0].OrderDate
        let paraFOrProdRecieved = document.createElement("p")
        paraFOrProdRecieved.innerText = arrayWithAllOrders[i][0].Recieved
        let paraFOrProdShipped = document.createElement("p")
        paraFOrProdShipped.innerText = arrayWithAllOrders[i][0].Shipped
        let paraFOrProdorderTotalPrice = document.createElement("p")
        paraFOrProdorderTotalPrice.innerText = arrayWithAllOrders[i][0].orderTotalPrice
        let mywholeorderDic = document.createElement("h5")
        mywholeorderDic.innerText = "this is the main div"
        ordersContainer.append(paraFOrProdid)
        ordersContainer.append(paraFOrProddate)
        ordersContainer.append(paraFOrProdRecieved)
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