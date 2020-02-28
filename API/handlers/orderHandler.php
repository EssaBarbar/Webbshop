<?php

session_start();

include("../classes/orderClass.php");

function getOrders() {
    $order = new Order();
    $result = $order->fetchAll();
    return $result;
};

function receivedOrder($Received)
{
    $received = new Order(null, null, null, null, null, $Received, null);
    $result = $received->update();
    return "done";

    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    
    return "no data was sent";
};

function shippedOrder($Shipped)
{
    $shipped = new Order(null, null, null, null, null, null, $Shipped);
    $result = $shipped->update();
    return "alsoDone";

    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    
    return "no data was sent";
};

?>