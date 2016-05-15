var employees = [];
var num = 0;


window.onload = init;

function init() {
  'use strict';


 document.getElementById('theForm').onsubmit = function() {addEmployee();};
  
}



function addEmployee() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var dept = document.getElementById('dept').value;

  
  var emp = {first:fname, last:lname, dep:dept};
  
  var idnum = getID();
  
  emp.employeeID = idnum;
 
  employees[num] = emp;
  console.log(employees[num].first);
  console.log(employees[num].last);
  console.log(employees[num].dep);
  console.log(employees[num].employeeID);
  var d = Date();
  num+=1;
  
 document.getElementById("hi").innerHTML=("<h4>Employee Has Been Added</h4>  <br> Name: " + employees[num-1].last + ", " + employees[num-1].first + "<br> Department: " + employees[num-1].dep + "<br> Employee ID: " + employees[num-1].employeeID + "<br> Hire Date: " + d + "<br> Number of Employees: " + num);
  
  console.log(employees);
  
  return false;
}

function getID() {
  
  var temp = Math.floor(10000000 + Math.random() * 90000000);
  for(var i=0; i < num;i++){
    if(temp!=employees[i].id){
      break;
    }
    else {
      temp = getID();
    }
  }
  
  return temp;
  
  
}



