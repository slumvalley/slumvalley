var customers = [];
var num = 0;


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

  
  var emp = {first:fname, last:lname, email:email};
  
  var idnum = getID();
  
  emp.employeeID = idnum;
 
  customers[num] = emp;
  console.log(customers[num].first);
  console.log(customers[num].last);
  console.log(customers[num].email);
  console.log(customers[num].employeeID);
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

