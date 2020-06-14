var userInput;
var num;
var i =1;
var fact;

function myFactor (num){    
  fact = num * i;
  for (i; i < num; i++) {
    fact = fact * i;
  }
  return fact
}
myFactor()
var result;
userInput = prompt("Enter Value to find a factorial:","");  
num = parseInt (userInput);         
result = myFactor(num);
document.write(result);   