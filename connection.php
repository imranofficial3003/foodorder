<?php 
$server="localhost";
$user="root";
$pass="root";
$database="foodapp";
$conn= new mysqli($server,$user,$pass,$database);
if($conn->connect_error){
    die("connection error".$conn->connect_error);
}else {
    echo "con fail";
}

?>