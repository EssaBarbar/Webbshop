<?php

//session_start();

include("../classes/orderClass.php");
include("../handlers/orderDetailsHandler.php");


function getAllOrders() {       
       $Order = new Order();
       $result = $Order->fetchAll();
       return $result;
};


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

?>