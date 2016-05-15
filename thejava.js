var customers = [];
var num = 0;


window.onload = init;

function init() {
  'use strict';


document.getElementById('theForm').onsubmit = function() {addEmployee();};
 
  
}



function addEmployee() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;

  
  var emp = {first:fname, last:lname, email:email};
  
  var idnum = getID();
  

 
  customers[num] = emp;
  console.log(customers[num].first);
  console.log(customers[num].last);
  console.log(customers[num].email);


  num+=1;
  
 
  console.log(customers);
  
  return false;
}

