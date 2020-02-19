<?php
include("../classes/categoryClass.php");

function getCategories() {
    $category = new Category();
    $result = $category->fetchAll();
    return $result;
};
?>