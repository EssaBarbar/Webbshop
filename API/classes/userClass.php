<?php
  include("../classes/dbClass.php");

  class User {
    public $userId;
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $role;
    public $db;
   

    function __construct($userId = null, $firstName = null, $lastName = null, $email = null, $password = null, $role = null) {
        $this->userId= $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;
        $this->db = new Database();
    }


    
    
    
    public function fetchAll() {
        // todo: ta bort password
        $query = "SELECT * FROM Users;";
        $result = $this->db->runQuery($query);
        return $result;
    }
    
    public function insert() {
        $query = "INSERT INTO users (FirstName, LastName, Email, Password, Role)
        VALUES(:firstname, :lastname, :email, :Password, :role);";

        $value = array(":firstname"=>$this->firstName, ":lastname"=>$this->lastName, ":email"=>$this->email, 
        ":Password"=>$this->password, ":role"=>$this->role);

        $result =$this->db->runQuery($query, $value);
        return $result;        
    }

    public function update() {
        $query = "UPDATE users SET firstName = :firstName, lastname = :lastname, email = :email,
        Password = :Password, role = :role
        WHERE userId = :userId;";

        $value = array(":firstname"=>$this->firstName, ":lastname"=>$this->lastName, ":email"=>$this->email, 
        ":Password"=>$this->password, ":role"=>$this->role, ":userId"=>$this->userId);

        $result =$this->db->runQuery($query, $value);
        return $result;        
    }
    public function delete() {
        $query = "DELETE FROM users WHERE userId = :userId;";
        $value = array(":userId"=>$this->userId);
        $result =$this->db->runQuery($query);
        return $result;
    }
    
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }


}

?>
