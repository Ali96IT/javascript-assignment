
var userPass =prompt("Enter Password");
do{
   userPass=userPass.toLowerCase()
var isvalid = false;
//if((userPass.charCodeAt(0)>=97 && userPass.charCodeAt(0)<=112) &&  userPass.length>=8)
for(i=1 ; i < userPass.length ;i++){
if((!isNaN(userPass.charAt(i)))){
   isvalid=true;
   break;
}
}
if(userPass.charCodeAt(0)>=48 && isvalid &&   userPass.length>=8 ) {
   alert("Valid password")
   break
}

else if (userPass === "" ){
  userPass=prompt("Please enter your password");
   isvalid==false;
}
else{
  userPass= prompt("plz Enter a  valid Password");

isvalid=false;

}
}
while(!isvalid);