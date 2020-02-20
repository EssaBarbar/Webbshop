<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class Product {
    public $productName;
    public $Price;
    public $description;
    public $picture;
    public $productID;
    public $categoryID;
    public $db;

    function __construct($productID = null, $productName = null, $Price = null, $description = null,
    $picture = null, $categoryID = null) {
        $this->productID= $productID;
        $this->productName = $productName;
        $this->Price = $Price;
        $this->description = $description;
        $this->picture = $picture;
        $this->categoryID = $categoryID;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT * FROM Products;";
        return $this->db->runQuery($query);
    }
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
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