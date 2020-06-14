var pass = prompt("Enter your E-mail Address");

do{
  pass = pass.toLowerCase()
  var isValid = false;
  var indexofAt = pass.indexOf("@");
  var indexofDot = pass.indexOf(".",indexofAt);

  if (!pass.startsWith("@") && pass.indexOf(" ") == -1 && indexofAt != -1 && indexofDot != -1 && pass.toLowerCase().charCodeAt(indexofDot+1) >=97 && pass.toLowerCase().charCodeAt(indexofDot+1) <=122){  
      
  alert("Correct E-mail Address");
  isValid = true;

  }
  
  else if (pass === "") {

      pass = prompt ("Please enter your E-mail Address");
      isValid = false;
  }
  
  else {
      pass = prompt("Enter a valid E-mail Address");
      isValid = false;
  }
}while(!isValid);