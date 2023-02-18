<?php 
error_reporting(-1);
session_start(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>TERROR</title>
</head>
<body>
    <div id="wrapper">
        <h1>TERROR</h1>
        <div id="studentWrapper">
            <div id="studentWrapperContent">
                <h3>STUDENTS</h3>
                <div id="checkboxWrapper"></div>
                <div id="studentList"></div>
            </div>
        </div>
        <button>TERRORIZE.</button>
    </div>

    <script type="module" src="includes/index.js"></script>
</body>
</html>