<?php

session_start();

include("../classes/orderClass.php");

function getOrders() {
    $order = new Order();
    $result = $order->fetchAll();
    return $result;
};

?>