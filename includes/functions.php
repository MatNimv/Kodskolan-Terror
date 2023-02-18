<?php
error_reporting(-1);

function randPosition($array){
    shuffle($array);
    for ($i=0; $i < $array; $i++) { 
        return $array[$i];
    }
}



?>