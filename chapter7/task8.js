var n=parseInt(prompt("Enter a Number"));
var str=" ";
var unites = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fiveteen",
"sixteen","seventeen","eighteen","nineteen"];
var tens =[" "," ","Twenty","thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"];
var hun =[" ", "Twenty","thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"];

if(n<20){
document.write(str=unites[n]);
}else if(n>=20 && n<100){
    document.write(str=tens[Math.floor(n/10)]  +  unites[n%10]);
}else if(n>=100 && n<1000){
    document.write(str=unites[Math.floor(n/100)] +" Hundred " + hun[Math.floor(n/100)] + unites[n%10])
}/*   else if(n>=1000 && n<10000){
 document.write(str=unites[Math.floor(n/1000)] + " Thousand " + unites[Math.floor(n/10000)] + " Hundred and " + tens[Math.floor(n/1000)] + 
 unites[n%10])
}*/
else{
    alert("Error");
}