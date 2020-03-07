<?php

include("../classes/orderDetailsClass.php");

 function addOrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice) {
        $orderDetails = new OrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice);
        $result = $orderDetails->insert();
        return $result;

 };
?>