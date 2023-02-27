
<?php 
require_once "includes/functions.php";

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_SERVER["REQUEST_METHOD"] === "POST"){
    var_dump($_POST);
    var_dump($_GET);

    //$data = json_decode(file_get_contents("users.json"), true);

    $updatedArr = ["hej"];

    saveJson("users.json", $_POST["studentArray"]);

}

?>