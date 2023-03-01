
<?php 
require_once "includes/functions.php";

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_SERVER["REQUEST_METHOD"] === "POST"){

    saveJson("users.json", $_POST["studentArray"]);

}

?>