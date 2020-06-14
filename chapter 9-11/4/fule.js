var fule =prompt("Check fule tank",);
if(fule< "0.25litres")
{
    alert ("Please refill the fuel in your car");
}
else if(fule>="0.25litres" && fule<="7.0litres"){
    alert("Car tank is full");
}
else{
    alert("Not possible");
}