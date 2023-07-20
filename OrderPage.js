function price(){

    var x=document.getElementById("quantity").value;
     var amount=document.querySelector('#price').innerHTML;
    var y=x*amount;
    document.getElementById("totalamount1").value=y;

}



function one(){
    if(document.getElementById("quantity").value==""||document.getElementById("quantity").value==null){

      alert("please enter the quantity");
    }else{
     
      document.getElementById("onlinepayment").style.display="none";
     document.getElementById("cashondelivery").style.display="block";
    }  
  }




  function two(){
    
    if(document.getElementById("quantity").value==""||document.getElementById("quantity").value==null){

      alert("please enter the quantity");
    }else{
     
      document.getElementById("onlinepayment").style.display="block";
      document.getElementById("cashondelivery").style.display="none";
    }

    
  }




  //cashondelivery section

  function otp(){

    let x=Math.floor(Math.random()*9999+9999);
    
    document.getElementById("sysotp").value=x;
  }


  function mobilevalidation(){

    let mblno=document.getElementById("mobileno").value;
    
    var mblnoexp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

    if(mblno==""||mblno==null){
      alert("mobile number contain should not empty");
      return false;
    }
    else if(mblno.length<10||mblno.length>10){
      alert("mobile number contain 10 digits only");
      return false;
    }
    else if(!mblnoexp.test(mblno)){
      alert("enter valid mobile number");
      return false;
    }else{
      otp();
    }
  
  }

  function validation(){
var otp=document.getElementById("sysotp").value;
var enterotp=document.getElementById("enterotp").value;

    if(otp=="" || otp==null){
      alert("Otp contain should not empty");
      return false;
    }else if(enterotp=="" || enterotp==null){
      alert("Otp contain should not empyt");
      return false;
    }else if(otp!=enterotp){
      alert("enter valid OTP");
      return false;
    }else{
      window.location.href = "Billpage.php";
    }

  }
  

//onlinepayment

  function pay1(){
    var mblno1=document.getElementById("mobileno1").value;
    var mblnoexp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;


    if(mblno1==""||mblno1==null){
      alert("mobile number1 contain should not empty");
      return false;
    }
    else if(mblno1.length<10||mblno1.length>10){
      alert("mobile number contain 10 digits only");
      return false;
    }
    else if(!mblnoexp.test(mblno1)){
      alert("enter valid mobile number");
      return false;
    }else{
      document.getElementById("getotp1").style.display="block";
    }
     
  }
  function otp1(){
    let x=Math.floor(Math.random()*9999+9999);
    document.getElementById("sysotp1").value=x;
  }

  function validation1(){
    var otp1=document.getElementById("sysotp1").value;
   var enterotp1=document.getElementById("enterotp1").value;

    if(otp1=="" || otp1==null){
      alert("Otp contain should not empty");
      return false;
    }else if(enterotp1=="" || enterotp1==null){
      alert("Otp contain should not empyt");
      return false;
    }else if(otp1!=enterotp1){
      alert("enter valid OTP");
      return false;
    }else{
      window.location.href = "Billpage.php";
    }
  }



  
  



  
  




  
  
  

  

    
