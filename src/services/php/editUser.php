<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['nombre'];
    $username = $data['usuario'];
    $password = $data['contrasenia'];
    $email = $data['email'];
    $rol = $data['rol'];
    $branch = $data['rama'];

    $sql = "UPDATE users SET name='$name', username='$username', password='$password', email='$email', rol='$rol', branch='$branch' WHERE username='$username'";

    $result = $conn->query($sql);
}

$conn->close();
