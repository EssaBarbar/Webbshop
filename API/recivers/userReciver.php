<?php
include ("../handlers/userHandler.php");
try{
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        getUsers();
}} catch(Exception $e){
    echo json_encode(array("Message"=> $e->getMessage(), "Status"=> $e->getCode()));
}  
// class Database
// {


//     function __construct()
//     {
//         $dsn = 'mysql:host=localhost;dbname=enjoy';
//         $user = 'root';
//         $password = 'root';
//         $this->db = new PDO($dsn, $user, $password);
//         $this->db->exec("set names utf8");
//     }
//     public function getAllUsers()
//     {
//         $sql = "SELECT * FROM Users;";
//         $sqlQuery = $this->db->prepare($sql);
//         $sqlQuery->execute();
//         $result = $sqlQuery->fetchAll(PDO::FETCH_ASSOC);
//         return $result;
//         if (empty($result)) {
//             throw new Exception("Request not found", "501");
//             exit;
//         }
//     }
// }
//     $database = new Database();
//     $result = $database->getAllUsers(); 
//     echo json_encode($result);
// ?>