<?php

function getAllProductss() {
    $database = new Product();
    $query = $database->connection->prepare("SELECT * FROM category WHERE CategoryID = 4;");
    $query->execute();
    $result = $query->fetchALL(PDO::FETCH_ASSOC);

    if (empty($result)) {
        throw new Exception("No students found", 404);
        exit;
    }
    return $result;
}

?>