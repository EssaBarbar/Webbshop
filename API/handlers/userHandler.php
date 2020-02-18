<?php
include("../classes/userClass.php");

function signUpSubmit($firstname, $lastname, $email, $password, $role)
{
    $user = new User(null, $firstname, $lastname, $email, $password, $role);
    $result = $user->insert();

    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    
    return $result;
};

function getUsers()
{
    $user = new User();
    return $user->fetchAll();
    
};
