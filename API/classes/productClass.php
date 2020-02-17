<?php
include("./dbClass.php");

class Product {
    public $productName;
    public $Price;
    public $description;
    public $picture;
    public $productID;
    public $categoryID;
    public $db;

    function __construct($productID, $productName, $Price, $description, $picture, $categoryID) {
        $this->productID= $productID;
        $this->productName = $productName;
        $this->Price = $Price;
        $this->description = $description;
        $this->picture = $picture;
        $this->categoryID = $categoryID;
        $this->db = new Database();
    }

    public function fetchAll($query) {
        $result = $this->db->runQuery($query);
        return $result;
    }

    /* public function getProductID() {
        return $this->productID;
    }

    public function getCategoryID() {
        return $this->categoryID;
    }

    public function makeRequest() {
    } */
}

?>