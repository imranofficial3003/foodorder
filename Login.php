<?php
session_start();
include "connection.php";


if(isset($_POST['phoneno']) && isset($_POST['password'])){
    $phoneno=($_POST['phoneno']);
    $password=($_POST['password']);

}

if(empty($phoneno)){
            header("location:Login.html?error=phone no is required"); 
            exit();   
}else if(empty($password)){
    header("location:Login.html?error=password is required");  
    exit();
}else{
    $sql="SELECT * FROM register WHERE phoneno='$phoneno'  AND  password='$password'";
    $result=mysqli_query($conn,$sql);


    if(mysqli_num_rows($result)===1){
        $row=mysqli_fetch_assoc($result);

        if($row['phoneno']===$phoneno && $row['password']===$password){

            $_SESSION['phoneno']=$row['phoneno'];
            $_SESSION['password']=$row['password'];
            $_SESSION['id'] = $row['id'];

            header("Location:index.html");

            exit();
        }
    }
    else{
        header("Location:Login.html?error=please valid phoneno & password");
        exit();

    }


}
?>