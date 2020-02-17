<?php

// new Product($id, NULL, $unitPrice);

class Product extends Database{
    public $productName;
    public $unitPrice;
    public $description;
    public $picture;
    private $productID;
    private $categoryID;
    private $db;

    function __construct($productID, $productName, $unitPrice, $description, $picture, $categoryID) {
        $this->productID= $productID;
        $this->productName = $productName;
        $this->unitPrice = $unitPrice;
        $this->description = $description;
        $this->picture = $picture;
        $this->categoryID= $categoryID;
        $this->db = new Database();
    }
}

?>