function Withdraw(){
var n=prompt("Enter Amount of Withdraw")
if(n>=10 && n<49){
  document.write("You Will have " + Math.floor(n / 10) +" Ten note");
}
else if(n>=50 && n<100){
    document.write("You Will have "+Math.floor(n/50)  + "Fifty note " + Math.floor(((n % 50) / 10))+" Ten note");
}else if(n>=100 && n<1000){
  document.write("You Will have "+Math.floor(n / 100)+" Hundred note " + Math.floor((n % 100) / 50)+" Fifty note " 
  + Math.floor((((n % 100) % 50) / 10))+" Ten note")
    }
}
Withdraw();
