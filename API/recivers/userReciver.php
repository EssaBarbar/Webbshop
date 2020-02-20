<?php
include("../handlers/userHandler.php");
error_log("I am on post admin");
try {
    if ($_SERVER["REQUEST_METHOD"] =='GET') {
        $result = getUsers();
        echo json_encode($result);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {            
            if ($_POST["endpoint"] == "addUser") {
                $result = signUpSubmit(
                    $_POST['firstname'],
                    $_POST['lastname'],
                    $_POST['email'],
                    $_POST['password'],
                    $_POST['role']
                );
                echo json_encode($result);
            } else if($_POST["endpoint"] == "loginUser") {
                $result = loginUser(
                $_POST['userName'],
                $_POST['password']);
                if ($result == NULL) {
                    echo json_encode("fuck off");
                } else echo json_encode($result);
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
