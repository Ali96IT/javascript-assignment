//counting
var a=[];
for(var i=0;i<=15;i++){
    a.push(i);
}
document.write("<b>Counting:</b>"+a+"<br>");
//backword counting
var b=[]
for(var i=10;i>0;i--){
    b.push(i);
}
document.write("<b>Backword Counting:</b>"+b+"<br>");
//even
var c=[]
for(var i=0;i<=20;i+=2){
    c.push(i);
}
document.write("<b>Even:</b>"+c+"<br>");
//odd
var d=[]
for(var i=1;i<=20;i+=2){
    d.push(i);
}
document.write("<b>Odd:</b>"+d+"<br>");
for(var i = 2; i <= 20; i += 2){
    if (i == 20){
        document.write(i + "k<br>")
    }
    else{
        document.write(i, "k, ")        
    }
}