<?php

class Database {
    private $connection;

    function __construct() {
        $dsn = 'mysql:host=localhost;dbname=enjoy';
        $user = 'root';
        $password = 'root';

        $this->connection = new PDO($dsn, $user, $password);
        $this->connection->exec("set names utf8");
    }

    public function runQuery($query) {
        $sqlQuery = $this->connection->prepare($query);
        $sqlQuery->execute();
        $result = $sqlQuery->fetchALL(PDO::FETCH_ASSOC);
        return $result;
        if (empty($result)) {
            throw new Exception("Request not found", "501");
            exit;
        }
    }
}

?>