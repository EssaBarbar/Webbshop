<?php
include ("../handlers/categoryHandler.php");
try{
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        getCategories();
}} catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}
?>