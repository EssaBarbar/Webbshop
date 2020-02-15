<?php
require("../classes/categoryClass.php");

function getCategories() {
    $Category = new Category(null, null);
    $result = $Category->fetchAll("SELECT * FROM categories;");
    echo json_encode($result);
};
?>