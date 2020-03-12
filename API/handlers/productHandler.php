<?php

//session_start();

include("../classes/productClass.php");

function getProducts() {
    $Products = new Product();
    $result = $Products->fetchAll();
    return $result;
};
function getXboxProducts() {
    $Products = new Product();
    $result = $Products->flexFunction("SELECT * FROM products WHERE CategoryID = 1;");
    return $result;
};
function getPS4Products() {
    $Products = new Product();
    $result = $Products->flexFunction("SELECT * FROM products WHERE CategoryID = 2;");
    return $result;
};

function getPCProducts() {
    $Products = new Product();
    $result = $Products->flexFunction("SELECT * FROM products WHERE CategoryID = 3;");
    return $result;
};


function insertToProduct($CategoryID, $ProductName, $UnitInStock, $Price, $CoverPicture, $PNGPicture, $Description)
{
    $Products = new Product(null, $CategoryID, $ProductName, $UnitInStock, $Price, $CoverPicture, $PNGPicture, $Description);
    $result = $Products->insert();

    if (empty($result)) {
        throw new Exception("No Product found", 404);
        exit;
    }    
    return $result;
};

function deleteFromProduct($productID) {
    $Products = new Product($productID);
    $result = $Products->delete();

    if (empty($result)) {
        throw new Exception("No Product found", 404);
        exit;
    }
    return $result;
};

function updateProduct($productID,$UnitInStock) {
    error_log("updateHandlar");    
    $Products = new Product($productID, $UnitInStock);
    $result = $Products->update();

    if (empty($result)) {
        throw new Exception("No Product found", 404);
        exit;
    }
    return $result;
};

?>