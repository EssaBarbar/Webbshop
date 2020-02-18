<?php
include("../handlers/productHandler.php");
try{
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        $result = getProducts();
        echo json_encode($result);
}} catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}
?>