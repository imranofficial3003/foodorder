<?php
    require_once "connection.php";
    $email=$_POST["mail"];
    $password=$_POST["pass"];
    $name=$_POST["name"];
    $mobilenumber=$_POST["mobile"];


    $sql = "insert into register values('$name','$mobilenumber','$email','$password')";
    $result=mysqli_query($conn,$sql);
    if($result){
        echo "success";
        header("Location:Login.html");
    }
    else{
        echo "faliure";
    }
?>