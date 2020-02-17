<?php
include("./dbClass.php");
class Category {
    public $categoryId;
    public $categoryName;
    
    function __construct($categoryId, $categoryName) {
        $this->categoryId = $categoryId;
        $this->categoryName = $categoryName;        
    } 

    // public function addCategory($categoryId,$categoryName) {

    // }
}

// class Category {
//     private $conn;
//     private $table = 'orders';

//     public $CategoryID;
//     public $CategoryName;

//     public function __construct($db) {
//         $this->conn = $db;
//     }
    
        
//     public function read() {
//         $query = 'SELECT  
//         CategoryID,
//         CategoryName
//         FROM ' . $this->table . ' ';
//         $stmt = $this->conn->prepare('select * from categories;');
//         $stmt->execute();
//         return $stmt;
//     }

    

// }

?>