<?php
  include("./../classes/dbClasss.php");

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


     public function insert($query, $values) {
        $result =$this->db->runQuery($query,$values);
        return $result;
    }
        
}

?>