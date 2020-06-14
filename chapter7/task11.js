var n=parseInt(prompt("Enter a Number"));
var p=" ";
var str=" ";
if(n>=1 && n<100){
    document.write(str=(n=parseInt(n/10)  + (p=n%10))/2);
}
else if(n>=100 && n<1000){
    document.write(parseInt(str=(n=parseInt(n/100) + (n=n%10) + (p=n%10))/3));  
}else if(n>=1000 && n<100000){
    document.write(parseInt(str=(n=(n/10000))  + (n=n%1000)+ (n=n%100)+  (p=n%10)/5)) }