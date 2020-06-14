var now = new Date();
var myDate= now.getDate();
if(myDate<16){
    document.write("First fifteen days of the month");
}else if (myDate> 16){
    document.write ("Last days of the month");
}