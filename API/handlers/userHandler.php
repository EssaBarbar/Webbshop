<?php
include("../classes/userClass.php");
function signUpSubmit($firstname, $lastname, $email, $role) {

            $user = new User(null, $firstname, $lastname, $role, $email);
            $result = $user->insert();
            echo json_encode($result);
    
            if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;                                   
}
return $result;
};


?>