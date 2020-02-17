<?php
include("../classes/productClass.php");


function getProducts() {
    $Product = new Product();
    $result = $Product->fetchAll();
    return $result;
};
?>
