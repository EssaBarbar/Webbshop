<?php

session_start();

require_once("../classes/orderClass.php");
require_once("../handlers/orderDetailsHandler.php");


 function addorder($UserID, $OrderDate, $ShipperID, $orderProducts) {
        $order = new Order(null, $UserID, $OrderDate, $ShipperID,);
        $orderIdInOrders = $order->insert();


        $newOrder = array();
        $explodedArray = explode(',',$orderProducts);
        $z = 2; 
        for ($i = 0; $i < count($explodedArray); $i++) {
               if($i == $z) {
                      $z= $z + 3;
              } else {
                     $oneproduct = array();
                     $oneproduct = array("id"=>$explodedArray[$z - 2],"qauntity"=>$explodedArray[$z - 1],
                     "price"=>$explodedArray[$z]);
                     $resultFromDetails = addOrderDetails($orderIdInOrders, $explodedArray[$z - 2], $explodedArray[$z - 1], $explodedArray[$z]);
                     array_push($newOrder, $oneproduct);
                     unset($oneproduct);
                     $i++;
              }
       }

       return true;
};

function getOrdersToMyPages($inloggedUserId) {
       $fromOrder = new Order();
       $flexQuery = "SELECT * FROM orders
       INNER JOIN order_details
       ON order_details.OrderID = orders.OrderID
       WHERE userId = :userId;";
       $flexArray = array(":userId"=>$inloggedUserId);

       $result = $fromOrder->flexFunction($flexQuery, $flexArray);
       return $result;
}

function setThisAsReceived($orderId) {
       $receivedOrder = new Order();
       $flexQuery = "UPDATE orders SET Recieved = :Recieved
       WHERE OrderID = :OrderID;";
       $flexArray = array(":OrderID"=>$orderId, ":Recieved"=>1);
       $receivedOrder->flexFunction($flexQuery, $flexArray);

       return true;
}

?>
