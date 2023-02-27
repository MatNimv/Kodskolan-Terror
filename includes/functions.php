<?php
error_reporting(-1);
$data = file_get_contents("php://input");

function loadJson($database)
{
    $json = file_get_contents($database);
    return json_decode($json, true);
}

function saveJson($database, $data)
{
    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($database, $json);
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
}

// Alla är välkommna
header("Access-Control-Allow-Origin: *");





?>