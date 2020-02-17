<?php
include("../classes/userClass.php");

function getUsers() {
    $User = new User();
    $result = $User->fetchAll("SELECT * FROM Users;");
    echo json_encode($result );
};
?>