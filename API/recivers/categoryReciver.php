<?php
echo json_encode("Hello");

try{
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if($_POST['entity'] =="category") {
            include_once("../handlers/categoryHandler.php");
            //$Category = new Database();
            if($_POST['endpoint'] =="addCategory"){                                           
                $result = $Category->getAllCategory();
                echo json_encode($result);            
           
            }else if($_POST['endpoint'] =="getAllCategory"){                                 
                    $result = $database->getAllCategory(); 
                    echo json_encode($result );
                                    
            }else {
                throw new Exception("BBBBBBBBBBBBBBBB",507);
            }

        } else {
            throw new Exception("AAAAAAAAAAAAA",501);
        }

    }
    else {
        throw new Exception("Not a valid method",405);
    }
    
}catch(Exception $e){
   echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}


?>