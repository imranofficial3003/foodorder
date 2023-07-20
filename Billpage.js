//date print

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

document.getElementById("date1").innerHTML=currentDate;



//bill number

let x=Math.floor(Math.random()*9999+9999);
    

document.getElementById("bill1").innerHTML=x;



//fetch the name from database




//items sections
// var name=localStorage.getItem("itemname");

var itemname=localStorage.getItem("billing");
var itemqty=localStorage.getItem("billing1");
var itemprice=localStorage.getItem("billing2");
var itemtotal=localStorage.getItem("billing3");
// var mobileno=localStorage.getItem("billing4");

document.getElementById("items").innerHTML=itemname;

document.getElementById("qty").innerHTML=itemqty;

document.getElementById("amount").innerHTML=itemprice;

document.getElementById("totalamount").innerHTML=itemtotal;

// document.getElementById("mblno1").innerHTML=mobileno;




































