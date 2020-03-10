<?php

session_start();
error_log("I am in reciver page");

include("../handlers/newsletterHandler.php");
try {
    if ($_SERVER["REQUEST_METHOD"] == 'GET') {
        if ($asd) {
            echo json_encode($result);
        } else if ($ss) {
            echo json_encode("");
        }
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {
            if ($_POST["endpoint"] == "addSubscriber") {
                if (!isset($_SESSION["inloggedUserId"])) {
                    $result = subscribeNews(
                        $_POST[true],
                        $_POST['firstname'],
                        $_POST['lastname'],
                        $_POST['email']
                    );
                    echo json_encode($result);
                } else {
                    $result = subscribeNews(
                        $_POST[true],
                        $_POST[null],
                        $_POST[null],
                        $_POST[null]
                    );
                    echo json_encode($result);
                }
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
