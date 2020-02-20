<?php
include("../classes/categoryClass.php");

function getCategories() {
    $category = new Category();
    $result = $category->fetchAll();
    return $result;
};

function delCategory() {
    $category = new Category();
    $result = $category->delCategory();
    return $result;
};



function adminCatSubmit($categoryName)
{
    $category = new Category(null, $categoryName);
    $result = $category->insertCatAdmin();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }
    
    return $result;
};


function updateCategory($categoryName)
{
    $category = new Category(null, $categoryName);
    $result = $category->updateCatAdmin();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }
    
    return $result;
};
?>