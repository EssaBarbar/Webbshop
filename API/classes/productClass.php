<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class Product {
    Private $ProductID;
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
    
    function getProductID() {
        return $this->ProductID;
    }



    public function fetchAll() {
        $query = "SELECT * FROM Products;";
        return $this->db->runQuery($query);
    }

    public function insert() {
        $query = "INSERT INTO Products (CategoryID, ProductName, UnitInStock, Price, CoverPicture, PNGPicture, Description)
        VALUES(:userID, :OrderDate, :ShipperID, :Recieved, :Shipped);";
        
        $value = array(":userID"=>$this->userID, ":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function update() {         
        $query = "UPDATE orders SET orderID = NULL, userID = :userID, OrderDate = :OrderDate, ShipperID = :ShipperID, Recieved = :Recieved,
        Shipped = :Shipped
        WHERE orderID = :orderID;";

        $value = array(":userID"=>$this->userID, ":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function delete() {
        $query = "DELETE FROM orders WHERE orderID = :orderID;";
        $value = array(":orderID"=>$this->getUserId());
        $result =$this->db->runQuery($query);
        return $result;
    }







    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

    
}

?>