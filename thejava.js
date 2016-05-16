var customers = [];
var num = 0;
var loggedin = false;
var products = [];
var item = {title, price, desc}

products[0]= item{title:"pizza", price:25, desc:"LA Cheese Strapback"};
products[1]= item{title:"arabic", price:30, desc:"Badlands Arabic Tee"};
products[2]= item{title:"camo", price:40, desc:"Badlands Camo Shirt"};
products[3]= item{title:"jersey", price:35, desc:"Badlands Jersey"};
products[4]= item{title:"trunks", price:30, desc:"LA Cross Trunks"};
products[5]= item{title:"flamingo", price:25, desc:"Badlands Flamingo Hat"};



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
    var a = document.getElementById("jersey").checked;
    var b = document.getElementById("pizza").checked;
    var c = document.getElementById("arabic").checked;
    var d = document.getElementById("camo").checked;
    var e = document.getElementById("trunks").checked;
    var f = document.getElementById("flamingo").checked;
    
    if((a || b || c || d || e || f) && loggedin==true) {
      document.getElementById("demo").innerHTML = "All Items Added To Cart";
      document.getElementById("cart").innerHTML = "<h1>Items In Your Cart:</h1><br>"
                                                  + "";
    }
    else {
      if(loggedin==false) {
        document.getElementById("demo").innerHTML = "You are not logged in.";
      }
      else {
        document.getElementById("demo").innerHTML = "There are no items selected.";
        document.getElementById("cart").innerHTML ="";
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




