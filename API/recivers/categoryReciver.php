<?php

include("../handlers/categoryHandler.php");
try{

    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        if ($_POST["entity"] == "enjoy") {      
            if ($_POST["endpoint"] == "getAllCategory") {       
                $result = getAllCategories();
                echo json_encode($result);
            }
        }
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {          
        if ($_POST["entity"] == "enjoy") {            
            if ($_POST["endpoint"] == "delAdminCategory") {                
                $result = deleteFromCategory(
                $_POST['CategoryID']                            
                );
                echo json_encode($result);
            }
        }
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        if ($_POST["entity"] == "enjoy") {      
            if ($_POST["endpoint"] == "updateAdminCategory") {       
                $result = updateCategory($result);
                echo json_encode($result);
            }
        }
    }
   
    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        if ($_POST["entity"] == "enjoy") {            
            if ($_POST["endpoint"] == "addAdminCategory") {       
                $result = insertToCategory(
                $_POST['CategoryName']            
                );
                echo json_encode($result);
            }
        } 
    }
    
}catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}
?>