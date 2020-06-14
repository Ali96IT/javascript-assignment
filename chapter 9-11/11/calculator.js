var first =prompt("Enter A First Number",);
var second =prompt("Enter A Second Number",);
var opert =prompt("Calculate This Value",);
var add ="+";
var sub="-";
var mul="*";
var div="/";
var mod="%";


if(opert===add){
    alert(parseInt(first)+parseInt(second));
}else if(opert===sub){
    alert(first-second);
}else if(opert===mul){
    alert(first*second);
}else if(opert===div){
    alert(first/second);
}else if(opert===mod){
    alert(first%second);
}else{
    alert("error");
}
