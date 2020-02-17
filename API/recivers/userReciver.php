<?php
include ("../handlers/userHandler.php");
try {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {
            
                if ($_POST["endpoint"] == "addSignUpUser") {
                    $firstname = $_POST['firstname'];
                    $lastname = $_POST['lastname'];
                    $email = $_POST['email'];
                    $password = $_POST['password'];
                    $role = $_POST['role'];
                  /*   $firstname = "x";
                    $lastname = "y";
                    $email = "z";
                    $role = "c";
                   */ signUpSubmit($_POST['firstname'], $_POST['lastname'], $_POST['email'], 
                   $_POST['password'], $_POST['role']);
                   error_log("asdasdasdasdasd",$password);

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