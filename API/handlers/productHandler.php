<?php
include("../classes/productClass.php");
include("../classes/dbClass.php");

function getProducts() {
    $Product = new Product(null, null, null, null, null, null);
    $result = $Product->fetchAll("SELECT * FROM products;");
    echo json_encode($result);
};
?>