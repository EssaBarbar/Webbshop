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
        $result = deleteCategory();
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
   
    if ($_POST["entity"] == "enjoy") {            
        if ($_POST["endpoint"] == "addAdminCategory") {       
            $result = addCategory(
            $_POST['CategoryName']            
            );
            echo json_encode($result);
        }
    } 
    
}catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}
?>