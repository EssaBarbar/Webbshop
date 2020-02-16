<?php
include("../classes/categoryClass.php");
include("../classes/dbClass.php");

function getCategories() {
    $Category = new Category(null, null);
    $result = $Category->fetchAll("SELECT * FROM categories;");
    echo json_encode($result);
};
?>