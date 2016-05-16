var customers = [];
var num = 0;
var loggedin = false;
var products = [];

var pizza = {title:"pizza", price:25, desc:"LA Cheese Strapback - $25"};
var arabic = {title:"arabic", price:30, desc:"Badlands Arabic Tee - $30"};
var camo = {title:"camo", price:40, desc:"Badlands Camo Shirt - $40"};
var jersey = {title:"jersey", price:35, desc:"Badlands Jersey - $35"};
var trunks = {title:"trunks", price:30, desc:"LA Cross Trunks - $30"};
var flamingo = {title:"flamingo", price:25, desc:"Badlands Flamingo Hat - $25"};
products[0]= pizza;
products[1]= arabic;
products[2]= camo;
products[3]= jersey;
products[4]= trunks;
products[5]= flamingo;



window.onload = init;

function init() {
  'use strict';


 document.getElementById('theForm').onsubmit = addEmployee;
 document.getElementById('login').onsubmit = tryLogin;
  
}



function addEmployee() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  

  
  var emp = {first:fname, last:lname, email:email, password:pass};
  
  var idnum = getID();
  
  emp.employeeID = idnum;
 
  customers[num] = emp;
  console.log(customers[num].first);
  console.log(customers[num].last);
  console.log(customers[num].email);
  console.log(customers[num].employeeID);
  console.log(customers[num].password);
  var d = Date();
  num+=1;
  
 document.getElementById("confirm").innerHTML=("You Have Successfully Registered  <br> Name: " + customers[num-1].last + ", " + customers[num-1].first + "<br> Email: " + customers[num-1].email + "<br> Confirmation Number: " + customers[num-1].employeeID );
  
  console.log(customers);
  
  return false;
}

function tryLogin() {
  
  var un = document.getElementById('un').value;
  var pw = document.getElementById('pw').value;
  
  if(num===0) {
    document.getElementById('status').innerHTML=("Not yet registered.");
    return false;
  }
  var x = false;
  var y = 0;
  for(var i = 0; i < num; i++) {
    if(customers[i].email==un && customers[i].password==pw) {
      x = true;
      loggedin= true;
      y = i;
    }
  }
  
  if(x) {
    document.getElementById('status').innerHTML=("Thank You, " + customers[y].first);
  }
  else {
    document.getElementById('status').innerHTML =("That is incorrect.");
  }
  return false;
}



function getID() {
  
  var temp = Math.floor(10000000 + Math.random() * 90000000);
  for(var i=0; i < num;i++){
    if(temp!=customers[i].id){
      break;
    }
    else {
      temp = getID();
    }
  }
  
  return temp;
  
  
}

function addToCart() {
    
    var a = document.getElementById("pizza").checked;
    var b = document.getElementById("arabic").checked;
    var c = document.getElementById("camo").checked;
    var d = document.getElementById("jersey").checked;
    var e = document.getElementById("trunks").checked;
    var f = document.getElementById("flamingo").checked;
    
    var receipt = "";
    var space = "<br>";
    total = 0;
    if(a==true) {
      receipt = receipt.concat(products[0].desc, space);
      total+=products[0].price;
    }
    if(b==true) {
      receipt = receipt.concat(products[1].desc, space);
      total+=products[1].price;
    }
    if(c==true) {
      receipt = receipt.concat(products[2].desc, space);
      total+=products[2].price;
    }
    if(d==true) {
      receipt = receipt.concat(products[3].desc, space);
      total+=products[3].price;
    }
    if(e==true) {
      receipt = receipt.concat(products[4].desc, space);
      total+=products[4].price;
    }
    if(f==true) {
      receipt = receipt.concat(products[5].desc, space);
      total+=products[5].price;
    }
    
    
    
    
    
    if((a || b || c || d || e || f) && loggedin==true) {
      document.getElementById("demo").innerHTML = "All Items Added To Cart";
      document.getElementById("cart").innerHTML = "<center><img src=http://i.imgur.com/0V4zrBw.jpg?1><br><h1>Items In Your Cart:</h1><br><h3>"
                                                  + receipt + "<br>" + "<hr><br>Your Total Is: $" + total + "</h3></center>";
    }
    else {
      if(loggedin==false) {
        document.getElementById("demo").innerHTML = "You are not logged in.";
      }
      else {
        document.getElementById("demo").innerHTML = "There are no items selected.";
        document.getElementById("cart").innerHTML= " No Items In Your Cart";
        
      }
      
    }
    
    
}



// show the given page, hide the rest
            function show(elementID) {
                // try to find the requested page and alert if it's not found
                var ele = document.getElementById(elementID);
                if (!ele) {
                    alert("no such element");
                    return;
                }

                // get all pages, loop through them and hide them
                var pages = document.getElementsByClassName('page');
                for(var i = 0; i < pages.length; i++) {
                    pages[i].style.display = 'none';
                }

                // then show the requested page
                ele.style.display = 'block';
            }




