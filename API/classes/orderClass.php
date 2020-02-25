<?php
include("../classes/dbClass.php");


class Order {
    public $orderID;
    public $userID;
    public $OrderDate;
    public $ShipperID;
    public $Recieved;
    public $Shipped;
    
    function __construct($orderID = null, $userID = null, $OrderDate = null, $ShipperID = null, $Recieved = null, $Shipped = null) {
        $this->orderID = $orderID;
        $this->userID = $userID;
        $this->OrderDate = $OrderDate;
        $this->ShipperID = $ShipperID;
        $this->Recieved = $Recieved;
        $this->Shipped = $Shipped;
    }


    public function fetchAll() {
        $query = "SELECT * FROM orders;";
        $result = $this->db->runQuery($query);
        return $result;
    }
    public function insert() {
        $query = "INSERT INTO orders (userID, OrderDate, ShipperID, Recieved, Shipped)
        VALUES(:userID, :OrderDate, :ShipperID, :Recieved, :Shipped);";
        
        $value = array(":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function update() {         
        $query = "UPDATE orders SET orderID = :orderID, userID = :userID, OrderDate = :OrderDate, ShipperID = :ShipperID,
        Recieved = :Recieved, Shipped = :Shipped
        WHERE orderID = :orderID;";

        $value = array(":userID"=>$this->userID, ":OrderDate"=>$this->OrderDate, ":ShipperID"=>$this->ShipperID,
        ":Recieved"=>$this->Recieved, ":Shipped"=>$this->Shipped, ":orderID"=>$this->orderID);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function delete() {
        $query = "DELETE FROM orders WHERE orderID = :orderID;";
        $value = array(":orderID"=>$this->orderID);
        $result =$this->db->runQuery($query);
        return $result;
    }
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }
}

?>