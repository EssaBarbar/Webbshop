<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class Category {
    public $CategoryId;
    public $CategoryName;
    public $db;

    function __construct($categoryId = null, $categoryName = null) {
        $this->CategoryId= $categoryId;
        $this->CategoryName = $categoryName;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT * FROM Categories";
        $result = $this->db->runQuery($query);
        return $result;
    }

    // public function fetch() {
    //     $this->db->runQuery("SELECT * FROM.....");
    // }

    // public function insert($query, $values) {
    //     $this->db->runQuery("INSERT INTO...");
    // }

    // public function delete() {
    //     $this->db->runQuery("DELETE FROM... WHERE productID = $this->productId");
    // }

    // public function update() {
    //     if ($this->unitPrice)
    //     $this->db->runQuery("UPDATE... SET Unit");
    // }
    
}

?>
