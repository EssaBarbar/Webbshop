<?php

session_start();

include("../handlers/productHandler.php");
try {
    if ($_SERVER["REQUEST_METHOD"] =='GET') {
        $result = getProducts();
        echo json_encode($result);
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
            }
            else {
                throw new Exception("Not a valid endpoint", 501);
            }
        } else {
            throw new Exception("Not a valid entity method", 501);
    }
    } else {
        throw new Exception("Not valid request method", 405);
    }
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}

?>