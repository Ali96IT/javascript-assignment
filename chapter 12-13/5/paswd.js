var pass=  /^[A-Za-z]\w{7,14}$/
//var pass = "[A-Z],[a-z]";
var userPass = prompt("Enter password");
if (userPass === "" ){
    alert("Please enter your password");}
else if (userPass === pass){
    alert("Correct! The password you entered matches the original password");
}
else{alert("Incorrect password");}
