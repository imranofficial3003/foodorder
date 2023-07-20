function validation(){
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let mail=document.getElementById("mail").value;
    let pass=document.getElementById("pass").value;
    let repass=document.getElementById("repass").value;


    


    if(name=="" || name==null){
        alert("name contain should not empty");
        return false;
    
    }

    if(name.length<3 || name.length>20){
        alert("name contain minium 3 letters");
        return false;

    }

    //mobile number validation

    var mobileexpr = /^[6-9][0-9]{9}$/;

    if(mobile=="" || mobile==null){
        alert("mobile contain should not empty");
        return false;
    }

    

    if(mobile.length<10 || mobile.length>10){
        alert("mobile number 10 digits only");
        return false;

    }

    if(!mobileexpr.test(mobile)){
        alert("please enter valid mobile number");
        return false;
    }

    //email validation

    var emailexpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(mail=="" || mail==null){
        alert("email contain should not empty");
        return false;

    }

    if(!emailexpr.test(mail)){
        alert("enter valid email address");
        return false;
    }

    //password validation
    if(pass=="" || pass==null){
        alert("password contain should not empty");
        return false;

    }

    //repass validation
    if(repass=="" || repass==null){
        alert("repassword contain should not empty");
        return false;

    }

    if(pass!=repass){
        alert("pass and repass mismathced...");
        return false;

    }
}

