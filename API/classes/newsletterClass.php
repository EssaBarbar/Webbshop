<?php
include("../classes/dbClass.php");

class newsletter {
    public $NewsletterID;
    public $UserID;
    public $FirstName;
    public $LastName;
    public $Email;
    public $db;

    function __construct($NewsletterID = null, $UserID = null, $FirstName = null, $LastName = null, $Email =null) {
        $this->NewsletterID= $NewsletterID;
        $this->UserID = $UserID;
        $this->FirstName = $FirstName;
        $this->LastName = $LastName;
        $this->Email = $Email;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT * FROM newsletter;";
        $result = $this->db->runQuery($query);
        return $result;
    }
    public function insert() {
        $query = "INSERT INTO newsletter (UserID, FirstName, LastName, Email)
        VALUES(:UserID, :FirstName, :LastName, :Email);";
        $value = array(":UserID"=>$this->UserID, ":FirstName"=>$this->FirstName,
        ":LastName"=>$this->LastName, ":Email"=>$this->Email);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function update() {         
        $query = "UPDATE newsletter SET NewsletterID = :NewsletterID, UserID = :UserID, FirstName = :FirstName,
        LastName = :LastName, Email = :Email
        WHERE NewsletterID = :NewsletterID;";
        $value = array(":NewsletterID"=>$this->NewsletterID, ":UserID"=>$this->UserID, ":FirstName"=>$this->FirstName,
        ":LastName"=>$this->LastName, ":Email"=>$this->Email);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function delete() {
        $query = "DELETE FROM newsletter
        WHERE NewsletterID = :NewsletterID;";
        $value = array(":NewsletterID"=>$this->NewsletterID);
        $result =$this->db->runQuery($query);
        return $result;
    }
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

        
}

?>