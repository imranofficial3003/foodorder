const btnClose=document.querySelector('#cart-close');
const cart1=document.querySelector('.cart1');
const btnCart=document.querySelector('#cart-icon');





btnCart.addEventListener('click',()=>{
  cart1.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart1.classList.remove('cart-active');
});




document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();

}

function loadContent(){
    //remove food items from cart
    let btnRomve=document.querySelectorAll('.cart-remove');
    btnRomve.forEach((btn)=>{
        btn.addEventListener('click',removeItem);

    });

    //product item change event
    let qtyElement=document.querySelectorAll('.cart-quantity');
    qtyElement.forEach((input)=>{
        input.addEventListener('change',changeQty);

    });

    //product cart

    let cartBtns=document.querySelectorAll('.add-cart');
    //console.log(cartBtns);
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);

});


updateTotal();
}

//Remove Item
function removeItem(){
    if(confirm('Are your sure to remover')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        console.log(title);
        itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();

}
}

//change quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent();
}

//
let itemList=[];


//Add cart
function addCart(){
let food=this.parentElement;

let title=food.querySelector('.food-title').innerHTML;

let price=food.querySelector('.food-price').innerHTML;

var imgsrc=document.getElementById("food-img").src;



let newProduct={title,price,imgsrc}

//check product already exit in cart
if(itemList.find((el)=>el.title==newProduct.title)){
    alert("product already added in cart");
    return;

}else{
    itemList.push(newProduct);
}

let newProductElement=createCartProduct(title,price,imgsrc);

let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');

cartBasket.append(element);

loadContent();

}



function createCartProduct(title,price,imgsrc){
    
    return`
    <div class="cart-box">
    <img src="${imgsrc}" class="cart-img">
    <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
        <div class="cart-price">${price}</div>
        <div class="cart-amt">${price}</div>
    </div>
    <input type="number" value="1" class="cart-quantity">
</div>
<ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
`;

}


function updateTotal()
{

    const cartItemms=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');



    let total=0;
    cartItemms.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        //console.log(priceElement);
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
   
});

totalValue.innerHTML='Rs.'+total;



}

function getvalue(){
    var input=document.getElementById("searching");

    var value=input.value;

    console.log(value);
    document.write(value);
}








function ordering(){

    document.getElementById("Cartorderplace").style.display="flex";

}

function cartcashdelivery(){
    document.getElementById("cartcashondelivery").style.display="block";
    document.getElementById("cartonlinepayment").style.display="none";


    //get the total value
    const cartItemms=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');
    let total=0;
    cartItemms.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        //console.log(priceElement);
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
   
});

totalValue.innerHTML='Rs.'+total;

    let input=document.getElementById("cart-amount");
    input.value=total;  
    
}





function cartotp(){
let totalamount=document.getElementById("cart-amount").value;
let enteramount=document.getElementById("cart-enter-price").value;
let mobilenumber=document.getElementById("cart-enter-mobilenumber").value;


var mblnoexp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;


    
    if(enteramount=="" || enteramount==null){
        alert("Enter amount contain should not empty");
        return false;
    }
    if(totalamount!=enteramount){
        alert("please enter correct amount");
        return false;
    }

    if(mobilenumber=="" || mobilenumber==null){
        alert("Mobile number contain should not empty");
        return false;
    }

    if(mobilenumber.length<10 || mobilenumber.length>10){
        alert("mobile number contain should 10 digits only");
        return false;

    }
    if(!mblnoexp.test(mobilenumber)){
        alert("enter valid mobile number");
    }
    else{

        otp();

    }


}

function otp(){

    let x=Math.floor(Math.random()*9999+9999);
    
    document.getElementById("sysotp").value=x;

}


function cverify(){
    let sysotp=document.getElementById("sysotp").value;
    let enterotp=document.getElementById("cart-enter-otp").value;

    if(enterotp=="" || enterotp==null){
        alert("Enter otp contain should not empty");
        return false;
    }

    if(sysotp!=enterotp){
        alert("please enter valid OTP");
        return false;
    }else{
      window.location.href = "cartbillpage.html";
        
    }

}

function cartonlinedelivery(){
    
    document.getElementById("cartcashondelivery").style.display="none";
    document.getElementById("cartonlinepayment").style.display="block";


     //get the total value
     const cartItemms=document.querySelectorAll('.cart-box');
     const totalValue=document.querySelector('.total-price');
     let total=0;
     cartItemms.forEach(product=>{
         let priceElement=product.querySelector('.cart-price');
         //console.log(priceElement);
         let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
     let qty=product.querySelector('.cart-quantity').value;
     total+=(price*qty);
     product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
    
 });
 
 totalValue.innerHTML='Rs.'+total;
 
     let input=document.getElementById("cart-amount1");
     input.value=total;  

}


function cartotp1(){
    let totalamount=document.getElementById("cart-amount1").value;
    let enteramount=document.getElementById("cart-enter-price1").value;
    let mobilenumber=document.getElementById("cart-enter-mobilenumber1").value;
    
var mblnoexp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

    
        
        if(enteramount=="" || enteramount==null){
            alert("Enter amount contain should not empty");
            return false;
        }
        else if(totalamount!=enteramount){
            alert("please enter correct amount");
            return false;
        }
    
       else  if(mobilenumber=="" || mobilenumber==null){
            alert("Mobile number contain should not empty");
            return false;
        }
    
        else if(mobilenumber.length<10 || mobilenumber.length>10){
            alert("mobile number contain should 10 digits only");
            return false;
    
        }else if(!mblnoexp.test(mobilenumber)){
            alert("enter valid mobile number");
        }else{
            let x=Math.floor(Math.random()*9999+9999);
        
            document.getElementById("sysotp1").value=x;
            // otp1();
    
        }
    
    
    }
    
    
    function pverify(){
        let sysotp=document.getElementById("sysotp1").value;
        let enterotp1=document.getElementById("cart-enter-otp1").value;
    
        if(enterotp1=="" || enterotp1==null){
            alert("Enter otp contain should not empty");
            return false;
        }
    
        else if(sysotp!=enterotp1){
            alert("please enter valid OTP");
            return false;
        }else{
      window.location.href = "cartbillpage.html";
            
        }
    
    }
                



