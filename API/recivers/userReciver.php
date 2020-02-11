<?php

try {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {

            if ($_POST["endpoint"] == "addUser") {

                include_once("./userClass.php");

                $database = new Database();
                $result = $database->createUser($_POST["newUser"]);
                echo json_encode($result);
            } else {
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