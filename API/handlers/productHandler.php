<?php

session_start();

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

?>