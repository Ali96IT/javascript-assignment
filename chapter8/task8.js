function MyDate(){
    var myDate=new Date();
    var a = myDate.getFullYear();
    var b = myDate.getMonth() +1;
    var c = myDate.getDate();
    var d =b-month;
    var e =c-day;
    if(d==1 && e==1){
    document.write("You are "+(a-year)+" years " +(d) +" month and " + (e) +" days old");
}
else{
    document.write("You are "+(a-year)+" years " +(d) +" months and " + (e) +" days olds");
}
}
var year = prompt("Enter your Birth Year");
var month = prompt("Enter your Birth Month");
var day = prompt("Enter your Birth Day");
MyDate() 
