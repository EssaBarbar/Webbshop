<?php
  include("../classes/dbClass.php");

  class User {
    public $userId;
    public $firstName;
    public $lastName;
    public $role;
    public $email;
    public $db;

    function __construct($userId = null, $firstName = null, $lastName = null, $role = null, $email = null) {
        $this->userId= $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->role = $role;
        $this->email = $email;
        $this->db = new Database();
    }


     public function insert() {
        $query = "INSERT INTO users (FirstName, LastName, Email, Role) VALUES(:firstname, :lastname, :email, :role)";
        $value = array("firstname"=>$this->firstName, "lastname"=>$this->lastName, "email"=>$this->email, "role"=>$this->role);
        error_log('inserting.........');
        error_log(json_encode($value));
        $result =$this->db->runQuery($query, $value);
        return $result;
    }

    public function delete() {

    }
        
}

?>