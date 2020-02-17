<?php
include("../classes/userClass.php");
include("../classes/dbClass.php");

function getUsers() {
    $User = new User(null, null, null, null);
    $result = $User->fetchAll("SELECT * FROM Users;");
    echo json_encode($result );
};
?>