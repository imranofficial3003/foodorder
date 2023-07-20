const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

document.getElementById("date1").innerHTML=currentDate;



//bill number

for (let index = 0; index <=100; index++) {

    var number=index;


}

document.getElementById("bill1").innerHTML=number;


var ftitle=localStorage.getItem("ordering");

document.getElementById("items").innerHTML=ftitle;
