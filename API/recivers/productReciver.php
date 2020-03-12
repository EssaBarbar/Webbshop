<?php

session_start();

include("../handlers/productHandler.php");
try {
    
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {    

            if ($_POST["endpoint"] == "getXboxProducts") {
                $result = getXboxProducts();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "getPS4Products"){
                $result = getPS4Products();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "getPCProducts") {
                $result = getPCProducts();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "getPCProducts") {
                $result = getPCProducts();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "addAdminProduct") {                 
                $result = insertToProduct(
                $_POST['CategoryID'],
                $_POST['ProductName'],
                $_POST['UnitInStock'],
                $_POST['Price'],
                $_POST['CoverPicture'],
                $_POST['PNGPicture'],                
                $_POST['Description']
                );                
                echo json_encode($result);   
              
            }else if ($_POST["endpoint"] == "delAdminProduct") {                
                    $result = deleteFromProduct(
                    $_POST['productID']                            
                    );
                    echo json_encode($result);

            }else if ($_POST["endpoint"] == "getAllProducts") {                              
                        $result = getProducts();
                        echo json_encode($result);                 
            }else  {
                throw new Exception("Not a valid endpoint", 501);
            }
            
        } else {
            throw new Exception("Not a valid entity method", 501);
    }
    } else {
        throw new Exception("Not valid request method", 405);
    }  
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {   
        error_log("POST");
        if ($_POST["entity"] == "enjoy") {            
            error_log("enjoy");
            if ($_POST["endpoint"] == "delAdminProduct") { 
                error_log("delAdminProduct");         
                $result = deleteFromProduct(
                $_POST['productID']                            
                );
                echo json_encode($result);

            /* } else if ($_POST["endpoint"] == "updateAdminProduct") {                
                error_log("updateAdminProduct");
                $result = updateProduct(
                $_POST['ProductID'],                            
                $_POST['UnitInStockText'] 
                );
                error_log("updateProduct");
                echo json_encode($result); */
            }
        }
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
        error_log("updateHandlar"); 
        error_log("POSTUpdate");
        if ($_POST["entity"] == "enjoy") {            
            error_log("enjoyUpdate");
            if ($_POST["endpoint"] == "updateAdminProduct") {                
                error_log("endpointUpdate");
                $result = updateProduct(
                $_POST['productID'],                            
                $_POST['UnitInStockText'] 
                );
                error_log("updateProduct");
                echo json_encode($result);
            }
        }
    }
    
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}

?>