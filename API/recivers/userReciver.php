<?php
include("../handlers/userHandler.php");
try{
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        getUsers();
}} catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}  
?>