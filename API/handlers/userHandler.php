<?php
session_start();

include("../classes/userClass.php");

function signUpSubmit($firstname, $lastname, $email, $password, $role)
{
    $user = new User(null, $firstname, $lastname, $email, $password, $role);
    $result = $user->insert();
    return "done";

    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    
    return "no data was sent";
};


function getUsers()
{
    $user = new User();
    return $user->fetchAll();
    
};
function loginUser($email, $password) {
    $user = new User();
    $allUsers = $user->fetchAll();
    for ($i=0; $i <= count($allUsers); $i++) {
        if ($email === $allUsers[$i]["Email"]) {
            if (password_verify($password, $allUsers[$i]["Password"])) {
                $_SESSION["inloggedUser"] = $allUsers[$i]["FirstName"];
                $_SESSION["inloggedUserID"] = $allUsers[$i]["UserID"];
                return array("success" => true, "userName" => "welcome ".$allUsers[$i]["FirstName"], "inloggedUserId" => $allUsers[$i]["UserID"]);
            }
        }
    };

    return "Wrong Username or passwords";
}

?>