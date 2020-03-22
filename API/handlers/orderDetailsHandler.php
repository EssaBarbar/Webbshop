<?php

//session_start();

require_once("../classes/orderDetailsClass.php");




function getOneOrder($OrderID)
{
    error_log("Function IN");
    $OrderDetails = new OrderDetails($OrderID, null, null, null);
    error_log("New OrderDetails");
    $result = $OrderDetails->getOneOrderDetails();
    error_log("fetchOne Efter");
    if (empty($result)) {
        throw new Exception("No Order details found", 404);
        exit;
    }
    return $result;
};


function addOrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice)
{
    $orderDetails = new OrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice);
    $result = $orderDetails->insert();

    return $result;
};
