<?php

session_start();

include("../handlers/orderHandler.php");

try {
    if ($_SERVER["REQUEST_METHOD"] =='GET') {
        if($_GET["entity"] == "enjoy") {
        /* if ($_GET["endpoint"] == "") {
            echo json_encode($result);
        } else if ($ss) {
                echo json_encode("KKK");
            } 
            else {
                throw new Exception("Not a valid endpoint", 501);
            } */
        } else {
        throw new Exception("Not a valid entity method for GET", 501);}
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if ($_POST["entity"] == "enjoy") {            
                if ($_POST["endpoint"] == "addOrder") {
                    if (isset($_SESSION["inloggedUser"])) {
                    $result = addorder(
                        $_SESSION["inloggedUserID"],
                        $_POST['orderDate'],
                        $_POST['shipperID'],
                        $_POST['orderProducts']);
                    echo json_encode($result);
                    }else {
                        echo json_encode("You need to SignUp! Click on Enjoy then SignUp Button to register. You can use this password: ");
                    }
                } else if($_POST["endpoint"] == "getOrdersToMyPages") {
                    $result = getOrdersToMyPages($_POST["inloggedUserId"]);
                    echo json_encode($result);
                }else if ($_POST["endpoint"] == "theOrderIsReceived") {
                    $result = setThisAsReceived(
                        $_POST['theReceivedOrderId']);
                    echo json_encode($result);
                } 
                else {
                    throw new Exception("Not a valid endpoint", 501);
                }
            } else {
                throw new Exception("Not a valid entity method for POST", 501);
            }
    } else {
        throw new Exception("Not valid request method", 405);
    }
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}

?>
