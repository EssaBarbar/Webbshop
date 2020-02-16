<?php
include("../classes/userClass.php");
include("../classes/dbClass.php");
function signUpSubmit($firstname,$lastname,$email,$role) {

            $User = new User($firstname,$lastname,$email,$role);
            $query = "INSERT INTO users(firstname, lastname, email, role) VALUES(:firstname, :lastname, :email, :role)";
            $value = array("firstname"=>$firstname, "lastname"=>$lastname,"email"=>$email,"role"=>$role);
            $result = $User->insert($query, $value);
            echo json_encode($result );
    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;                                   
}
return $result;
};


?>