<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class Product {
    public $productName;
    public $Price;
    public $description;
    public $coverpicture;
    public $productID;
    public $categoryID;
    public $db;

    function __construct($productID = null, $productName = null, $Price = null, $description = null,
    $coverpicture = null, $categoryID = null) {
        $this->productID= $productID;
        $this->productName = $productName;
        $this->Price = $Price;
        $this->description = $description;
        $this->coverpicture = $coverpicture;
        $this->categoryID = $categoryID;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT ProductName, CoverPicture, Description, Price, CategoryID FROM Products;";
        return $this->db->runQuery($query);
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