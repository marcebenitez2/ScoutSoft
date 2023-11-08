<?php
require 'config.php';


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Script para insetar item de inventario en la bd

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $title = $data['nombre'];
    $date = $data['fecha'];
    $starttime = $data['inicio'];
    $endtime = $data['fin'];
    $location = $data['lugar'];
    $description = $data['descripcion'];
    $type = $data['tipo'];
    $branch = $data['rama'];


    $sql = "INSERT INTO calendary (title, date, startTime, endTime, location,description,type,branch) VALUES ('$title', '$date', '$starttime', '$endtime', '$location', '$description', '$type', '$branch')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo evento insertado con éxito";
    } else {
        echo "Error al insertar nuevo evento: " . $conn->error;
    }
}

$conn->close();
