<?php

include("../handlers/categoryHandler.php");
try{
    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        if ($_POST["entity"] == "enjoy") {      
            if ($_POST["endpoint"] == "getAllCategory") {       
        $result = getCategories();
        echo json_encode($result);
            }
        }
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        if ($_POST["entity"] == "enjoy") {      
            if ($_POST["endpoint"] == "delAdminCategory") {       
                $result = delCategory();
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
            $result = adminCatSubmit(
            $_POST['CategoryName']            
            );
                echo json_encode($result);
        }
    } 
    
}catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}
?>