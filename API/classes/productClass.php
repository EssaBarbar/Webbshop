<?php

class Product {
    public $productName;
    public $unitPrice;
    public $description;
    public $picture;
    private $productID;
    private $categoryID;

    function __construct($productName, $unitPrice, $description, $picture, $productID, $categoryID) {
        $this->productName = $productName;
        $this->unitPrice = $unitPrice;
        $this->description = $description;
        $this->picture = $picture;
        $this->productID= $productID;
        $this->categoryID = $categoryID;
    }

    public function getProductID() {
        return $this->productID;
    }

    public function getCategoryID() {
        return $this->categoryID;
    }

    public function makeRequest() {
    }
}

?>