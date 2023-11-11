<?php

require 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['ids']) && is_array($data['ids']) && !empty($data['ids'])) {
        // Escapar y formatear los IDs como una cadena separada por comas
        $ids = implode(',', array_map('intval', $data['ids']));

        $idsArray = array_map('intval', $data['ids']);
        
        $success = true;

        foreach ($idsArray as $id) {
            $sql = "DELETE FROM plans WHERE id = $id";

            if (!$conn->query($sql)) {
                $success = false;
                break;  // Detener el bucle si hay un error en alguna de las eliminaciones
            }
        }

        if ($success) {
            echo json_encode(array("success" => true));
        } else {
            echo json_encode(array("success" => false, "error" => $conn->error));
        }
    } else {
        echo json_encode(array("success" => false, "error" => "No se recibieron IDs válidos"));
    }
} else {
    echo json_encode(array("success" => false, "error" => "No se recibieron datos"));
}

$conn->close();
?>
