<?php
include("../classes/categoryClass.php");

function getAllCategories() {
    $category = new Category();
    $result = $category->fetchAll();
    return $result;
};

function deleteCategory($CategoryID) {
    $category = new Category($CategoryID,null);
    $result = $category->delete();
    error_log('deleteCategory');
    error_log($result);
    return $result;
};


function addCategory($categoryName)
{
    $category = new Category(null, $categoryName);
    $result = $category->insert();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }    
    return $result;
};


function updateCategory($categoryName)
{
    $category = new Category(null, $categoryName);
    $result = $category->update();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }
    
    return $result;
};
?>