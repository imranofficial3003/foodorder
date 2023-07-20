function validation(){
    let phoneno=document.getElementById("phoneno").value;

    if(phoneno=="" || phoneno==null){
        alert("user name should not empty");
    }

    if(phoneno.length>10){
        alert("phone number should be 10 digit");
    }
}