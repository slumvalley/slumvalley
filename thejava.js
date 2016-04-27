

window.onload = init;

function init() {
  document.getElementById('theForm').onsubmit = calculate;
  
}

function calculate() {
  

  
  var str = document.getElementById('something').value;
  str = str.replace(/[aeiou]/gi, function(p1){
    
    return p1.toUpperCase();
    
  });
  
  alert(str);
  return false;
}
