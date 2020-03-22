<?php

//session_start();

require_once("../handlers/orderDetailsHandler.php");
try {
       
    if ($_SERVER["REQUEST_METHOD"] =='GET') {        
        $result = getAllOrders();
        echo json_encode($result);  

    } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {     
        error_log("POST");        
        if ($_POST["entity"] == "enjoy") {      
            error_log("enjoy");          
            if ($_POST["endpoint"] == "getOrderDetails") {                
                error_log("endpoint IN");    
                $result = getOneOrder(
                $_POST['OrderID']                            
                );
                error_log("endpoint RESULT");    
            }
        }
   
    } else {
        throw new Exception("Not valid request method", 405);
    }
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
