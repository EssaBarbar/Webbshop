<?php
include("../classes/dbClass.php");

class Product {
    public $productID;
    public $CategoryID;
    public $ProductName;
    public $UnitInStock;
    public $Price;
    public $CoverPicture;
    public $PNGPicture;
    public $Description;
    public $db;

    
    function __construct($productID = null, $CategoryID = null, $ProductName = null, $UnitInStock = null,
    $Price = null, $CoverPicture = null, $PNGPicture = null, $Description = null) {
        $this->productID= $productID;
        $this->CategoryID = $CategoryID;
        $this->ProductName = $ProductName;
        $this->UnitInStock = $UnitInStock;
        $this->Price = $Price;
        $this->CoverPicture = $CoverPicture;
        $this->PNGPicture = $PNGPicture;
        $this->Description = $Description;
        $this->db = new Database();
    }
    

    public function fetchAll() {
        $query = "SELECT * FROM Products;";
        return $this->db->runQuery($query);
    }

    public function insert() {
        $query = "INSERT INTO Products (CategoryID, ProductName, UnitInStock, Price, CoverPicture, PNGPicture, Description)
        VALUES(:CategoryID, :ProductName, :UnitInStock, :Price, :CoverPicture, :PNGPicture, :Description);";
        
        $value = array(":CategoryID"=>$this->CategoryID, ":ProductName"=>$this->ProductName, ":UnitInStock"=>$this->UnitInStock,
        ":Price"=>$this->Price, ":CoverPicture"=>$this->CoverPicture, ":PNGPicture"=>$this->PNGPicture, ":Description"=>$this->Description);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function update() {         
        $query = "UPDATE Products SET productID = :productID, CategoryID = :CategoryID, ProductName = :ProductName, UnitInStock = :UnitInStock,
        Price = :Price, CoverPicture = :CoverPicture, PNGPicture = :PNGPicture, Description = :Description
        WHERE productID = :productID;";

        $value = array(":CategoryID"=>$this->CategoryID, ":ProductName"=>$this->ProductName, ":UnitInStock"=>$this->UnitInStock,
        ":Price"=>$this->Price, ":CoverPicture"=>$this->CoverPicture, ":PNGPicture"=>$this->PNGPicture, ":Description"=>$this->Description,
        ":productID"=>$this->productID);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function delete() {
        $query = "DELETE FROM Products WHERE productID = :productID;";
        $value = array(":orderID"=>$this->productID);
        $result =$this->db->runQuery($query);
        return $result;
    }







    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

    
}

?>