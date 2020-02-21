<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class Category {
    public $CategoryId;
    public $CategoryName;
    public $db;

    function __construct($categoryId = null, $categoryName = null) {
        $this->CategoryId= $categoryId;
        $this->CategoryName = $categoryName;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT * FROM categories;";
        $result = $this->db->runQuery($query);
        return $result;
    }
    public function insert() {
        $query = "INSERT INTO Categories (CategoryName) VALUES(:CategoryName);";
        $value = array(":CategoryName"=>$this->CategoryName);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function update() {         
        $query = "UPDATE categories SET CategoryID = :CategoryID, CategoryName = :CategoryName
        WHERE CategoryID = :CategoryID;";
        $value = array(":CategoryID"=>$this->CategoryID, ":CategoryName"=>$this->CategoryName);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function delete() {
        $query = "DELETE FROM categories
        WHERE CategoryID = :CategoryID;";
        $value = array(":CategoryID"=>$this->CategoryID);
        $result =$this->db->runQuery($query);
        return $result;
    }
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

        
}

?>
