<?php

include("../classes/categoryClass.php");
include("../classes/dbClass.php");

function getCategories() {
    $Category = new Category(null, null);
    $result = $Category->fetchAll("SELECT * FROM categories;");
    echo json_encode($result);
};

function addCategory($categoryId, $categoryName) {    
    $Category = new Category($categoryId,$categoryName);    
    $query = $Category->connection->prepare("INSERT INTO categories (CategoryID,CategoryName) VALUES (:CategoryID, :CategoryName)");
    $result = $query->execute(array(
        "CategoryID"=>$categoryId,
        "CategoryName"=>$categoryName        
    ));
    
    if (!$result){
        throw new Exception("Couldn't add the Category, something went wrong", 500);
        exit;
    }
    return $result;
}


function getAllCategory(){
    $sql = "SELECT * FROM categories;";
    $database = new Database();
    $query = $database->connection->prepare($sql);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    if (empty($result)){
        throw new Exception("there is no Category here", 404);
        exit;
    }
    return $result;
}


// function addCategory($categoryId, $categoryName) {    
//     $Category = new Category($categoryId,$categoryName);    
//     $query = $Category->connection->prepare("INSERT INTO categories (CategoryID,CategoryName) VALUES (:CategoryID, :CategoryName)");
//     $result = $query->execute(array(
//         "CategoryID"=>$categoryId,
//         "CategoryName"=>$categoryName        
//     ));
    
//     if (!$result){
//         throw new Exception("Couldn't add the Category, something went wrong", 500);
//         exit;
//     }
//     return $result;
// }


// function getAllCategory(){
    
//     $database = new Database();
//     $query = $database->connection->prepare("SELECT * FROM Category;");
//     $query->execute();
//     $result = $query->fetchAll(PDO::FETCH_ASSOC);

//     if (empty($result)){
//         throw new Exception("there is no Category here", 404);
//         exit;
//     }
//     return $result;
// }


// include_once("../classes/dbClass.php");
// include_once("../classes/categoryClass.php");

// $database = new Database();
// $db = $database->connect();

// $Category = new Category($db);

// $result = $post->read();

// $num = $result->rowCount();

// if($num > 0) {
//     $category_arr = array();
//     $category_arr['data'] = array();

//     while($row = $result->fetch(PDO::FETCH_ASSOC)) {
//         extract($row);

//         $category_item = array(
//             'CategoryID' =>$CategoryID,
//             'CategoryName' =>$CategoryName
//         );

//         array_push($category_arr['data'],$category_item);
//     }

//     echo json_encode($category_arr);
// }else {
//     echo json_encode(
//         array('message'=> 'No Category Found')
//     );
// }