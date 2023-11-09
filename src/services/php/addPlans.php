<?php
require 'config.php'; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $title = $data['titulo'];
    $event = $data['evento'];
    $branch = $data['rama'];
    $url = $data['archivo'];

    $sql = "INSERT INTO plans (title, event, branch, url) VALUES ('$title', '$event', '$branch', '$url')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false, "error" => $conn->error));
    }
}

$conn->close();
?>
