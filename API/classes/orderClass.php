<?php

class Order extends Database {
    public $product;
    public $totalPrice;
    public $shipping;
    private $userID;
    private $orderID;

    function __construct($product, $totalPrice, $shipping, $userID, $orderID) {
        $this->product = $product;
        $this->totalPrice = $totalPrice;
        $this->shipping = $shipping;
        $this->userID = $userID;
        $this->orderID = $orderID;
    }

    public function getUserId() {
        return $this->userID;
    }

    public function getOrderId() {
        return $this->orderID;
    }

    public function makeRequest() {
    }
}

?>