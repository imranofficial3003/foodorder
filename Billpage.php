<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Billing</title>
    <link rel="stylesheet" href="./Billpage.css">
</head>
<body>
        <div id="main">
    <h2>Receipt</h2>

    <div id="header">


       <p id="date">Date :<span id="date1"></span></p><br>
       <p id="billno">Bill.No :<span id="bill1"></span></p>
       <p id="name">Name :<span id="name1"></span></p>
       <p id="mblno">Mobileno :<span id="mblno1"></span></p>

       <?php

        $mobile=$_COOKIE['mobilenumber'];
        // echo $mobile;
        

       $connection=new mysqli("localhost","root","root","foodapp");

       if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
      }





       $sql="SELECT name FROM register WHERE phoneno=$mobile";

       $result = $connection->query($sql);

       if($result->num_rows > 0){
        while($row = $result->fetch_assoc()) {
            $dataname=$row["name"];
            

       }
    }else{
        echo "0 result";
    }
    $connection->close();
    

       ?>



</div>

    <div id="title">
    

            <table id="heading">
                <tr>
                    <th style="width: 158px;">Items</th>
                    <th style="width: 162px;">Quantity</th>
                    <th>Amount</th>
                </tr>
            </table>
    </div>
<div id="body">
    
    <div id="items"></div>

    <div id="qty"></div>

    <div id="amount"></div>

</div>

<div id="footer">

    <p id="total">Total Amount   :<span id="totalamount"></span></p>
   

</div>
        
        </div>    

        <script src="./Billpage.js"></script>

        <script>
            // var mobileno=localStorage.getItem("billing4");

            var mob=localStorage.getItem("userphone");

            // console.log(mob);

            var mobi=mob;

           document.getElementById("mblno1").innerHTML=mobi;

            
            //send the data script to php
            document.cookie="mobilenumber="+ mobi;



            //get the data form php to script
            const dname="<?php echo $dataname; ?>";
            
            
           document.getElementById("name1").innerHTML=dname;
            
            
            
        </script>
</body>
</html>