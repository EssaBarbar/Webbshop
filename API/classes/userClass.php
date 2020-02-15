<?php
include("./dbClass.php");


class User {
    public $userId;
    public $userName;
    public $role;
    public $email;
    public $db;

    function __construct($userId, $userName, $role, $email) {
        $this->userId= $userId;
        $this->userName = $userName;
        $this->role = $role;
        $this->email = $email;
        $this->db = new Database();
    }

    public function fetchAll($query) {
        $result = $this->db->runQuery($query);
        return $result;
    }

    // public function fetch() {
    //     $this->db->runQuery("SELECT * FROM.....");
    // }

    // public function insert($query, $values) {
    //     $this->db->runQuery("INSERT INTO...");
    // }

    // public function delete() {
    //     $this->db->runQuery("DELETE FROM... WHERE productID = $this->productId");
    // }

    // public function update() {
    //     if ($this->unitPrice)
    //     $this->db->runQuery("UPDATE... SET Unit");
    // }
}

?>