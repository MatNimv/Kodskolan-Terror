<?php 
error_reporting(-1);

require_once "includes/functions.php";

$users = loadJson("users.json");
?>

<script>
    let jsonarray = <?php echo json_encode($users); ?>
</script>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Gloock&family=Kanit&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="assets/glitch.css">
    <link rel="stylesheet" href="assets/style.css">
    <title>TERROR</title>
</head>
<body>
    <div id="wrapper">
        <h1 class="hero glitch layers" data-text="TERROR"><span>TERROR</span></h1>
        <div id="studentWrapper">
        <form id="checkBoxes">
            <div class="checkBox">
                <p>ALL</p>
                <input type="radio" name="radAnswer" id="radioAll">
            </div>
            <div class="checkBox">
                <p>TERRORIZED</p>
                <input type="radio" name="radAnswer" id="radioTerror">
            </div>            
        </form>
            <div id="studentWrapperContent">
                <h3>STUDENTS</h3>
                <div id="studentList"></div>
            </div>
        </div>
        <div id="btnWrapper">
        <button id="terrorize">TERRORIZE.</button>
        </div>
        
        <div id="chosenStudent">
            <span></span>
        </div>
        <div id="btnWrapper">
        <button id="savexit" >
            Save Changes
        </button>
    </div>
    </div>

    <script type="module" src="includes/index.js"></script>
</body>
</html>