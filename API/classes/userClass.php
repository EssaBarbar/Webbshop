<?php

class User extends Database{
    public $firstname;
    public $lastname;
    public $email;
    public $role;
    private $userID;
    private $password;

    function __construct($firstname, $lastname, $email, $role, $userID, $password) {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->role = $role;
        $this->userID = $userID;
        $this->password = $password;
    }

    public function getUserID() {
        return $this->userID;
    }

    public function getPassword() {
        return $this->password;
    }

    public function makeRequest() {
    }
}

?>