<?php

function addUser($newUser) {
$database = new Database();
$sql = "INSERT INTO enjoy (firstname, lastname, email, role) VALUES (:firstname, :lastname, :email, :role)";
$stmt = $database->connection->prepare($sql);
$stmt->execute(json_decode($newUser, true));
$result = $sql;
if (empty($result)) {
    throw new Exception("No students found", 404);
    exit;
}
return $result;
}

function updateUser() {
$database = array ('firstname' => 'Susan Johnson');
$sql = ("UPDATE enjoy SET firstname = :firstname WHERE id > 5");
$stmt = $database->connection->prepare($sql);
$stmt->execute($database);
$result = $sql;
if (empty($result)) {
    throw new Exception("No students found", 404);
    exit;
}
return $result;
}

function deleteUser() {

$database = "";
$sql = ("DELETE FROM enjoy WHERE id > 5");
$stmt = $database->connection->prepare($sql);
$stmt->execute();
$result = $sql;

if (empty($result)) {
    throw new Exception("No students found", 404);
    exit;
}
return $result;
}

?>