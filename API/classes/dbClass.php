<?php

class Database {
    private $connection;

    function __construct() {
        $dsn = 'mysql:host=localhost;dbname=Enjoy';
        $user = 'root';
        $password = 'root';
        error_log('before');
        
        try {
            $this->connection = new PDO($dsn, $user, $password);
            $this->connection->exec("set names utf8");
        } catch (\PDOException $e) {
            error_log($e);
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }
    
    public function runQuery($query, $inputArray = null) {
        $statement = $this->connection->prepare($query);
        $statement->execute($inputArray);
        return $statement->fetchALL(PDO::FETCH_ASSOC);
    }
}


?>
