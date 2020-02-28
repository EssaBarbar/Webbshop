<?php
include("../classes/dbClass.php");


class Order {
    public $orderID;
    public $userID;
    public $orderDate;
    public $shipperID;
    public $received;
    public $shipped;
    public $db;
    
    function __construct($orderID = null, $userID = null, $orderDate = null, $shipperID = null, $received = null, $shipped = null) {
        $this->orderID = $orderID;
        $this->userID = $userID;
        $this->orderDate = $orderDate;
        $this->shipperID = $shipperID;
        $this->received = $received;
        $this->shipped = $shipped;
        $this->db = new Database();
    }


    public function fetchAll() {
        $query = "SELECT * FROM products
        INNER JOIN order_details
        ON order_details.ProductID = products.ProductID
        INNER JOIN orders
        ON orders.OrderID = order_details.OrderID
        WHERE UserID = 2;";
        $result = $this->db->runQuery($query);
        return $result;
    }

    public function insert() {
        $query = "INSERT INTO orders (OrderID, OrderDate, UserID, ShipperID, Received, Shipped)
        VALUES(:OrderID, :OrderDate, :UserID, :ShipperID, :Received, :Shipped);";
        
        $value = array(":OrderID"=>$this->orderID, ":OrderDate"=>$this->orderDate, ":ShipperID"=>$this->shipperID,
        ":Recieved"=>$this->received, ":Shipped"=>$this->shipped);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function update() {         
        $query = "UPDATE orders SET /* orderID = :orderID, OrderDate = :OrderDate, userID = :userID, ShipperID = :ShipperID, */
        Received = 0 , Shipped = 0
        WHERE userID = 2;";

        /* $value = array(":orderID"=>$this->orderID, ":OrderDate"=>$this->OrderDate, ":userID"=>$this->userID, ":ShipperID"=>$this->ShipperID,
        ":Received"=>$this->Received, ":Shipped"=>$this->Shipped); */

        $result =$this->db->runQuery($query/* , $value */);
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