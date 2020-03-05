<?php

session_start();

include("../classes/newsletterClass.php");

function subscribeNews($firstname, $lastname, $email)
{
    $newsletter = new Newsletter(null,null, $firstname, $lastname, $email);
    $result = $newsletter->insert();
    return "done";
    
    if (empty($result)) {
        throw new Exception("No subscribtion found", 404);
        exit;
    }
    
    return $result;
};



?>