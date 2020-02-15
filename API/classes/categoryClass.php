<?php
require("./dbClass.php");

class Category {
    public $CategoryId;
    public $CategoryName;
    public $db;

    function __construct($CategoryId, $CategoryName) {
        $this->CategoryId= $CategoryId;
        $this->CategoryName = $CategoryName;
        $this->db = new Database();
    }

    public function fetchAll($query) {
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