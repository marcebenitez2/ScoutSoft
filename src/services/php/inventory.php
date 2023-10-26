<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST");

header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$port = 3306;
$username = "root";
$password = "";
$bdname = "scout";

$conn = new mysqli($servername, $username, $password, $bdname, $port);

if ($conn->connect_error) {
    die("error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM inventory";

$results = $conn->query($sql);

if ($results->num_rows > 0) {
    $data = array();
    while ($row = $results->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results"; // Agrega un punto y coma aquí
}

$conn->close();
