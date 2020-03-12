<?php
require_once("./../classes/dbClass.php");

class Order {
    public $OrderID;
    public $OrderDate;
    public $UserID;
    public $ShipperID;
    public $Recieved;
    public $Shipped;
    public $db;
    
    function __construct($OrderID = null, $OrderDate = null, $UserID = null, $ShipperID = null, $Recieved = 0, $Shipped = 0) {
        $this->OrderID = $OrderID;
        $this->OrderDate = $OrderDate;
        $this->UserID = $UserID;
        $this->ShipperID = $ShipperID;
        $this->Recieved = $Recieved;
        $this->Shipped = $Shipped;
        $this->db = new Database();
    }


    public function fetchAll() {
        $query = "SELECT * FROM orders;";
        $result = $this->db->runQuery($query);
        return $result;
    }

    public function insert() {
        $query = "INSERT INTO orders (UserID, OrderDate, ShipperID, Recieved, Shipped)
        VALUES(:UserID, :OrderDate, :ShipperID, :Recieved, :Shipped);";
        
        $value = array(":UserID"=>$this->UserID, ":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped);

        $result =$this->db->runQueryAndGetID($query, $value);
        return $result;
    }
    public function update() {         
        $query = "UPDATE orders SET OrderID = :OrderID, UserID = :UserID, OrderDate = :OrderDate, ShipperID = :ShipperID,
        Recieved = :Recieved, Shipped = :Shipped
        WHERE OrderID = :OrderID;";

        $value = array(":UserID"=>$this->UserID, ":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped, ":orderID"=>$this->orderID);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function delete() {
        $query = "DELETE FROM orders WHERE OrderID = :OrderID;";
        $value = array(":OrderID"=>$this->OrderID);
        $result =$this->db->runQuery($query);
        return $result;
    }

    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }
    
}

?>