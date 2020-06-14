function MyDate(){
    var myDate=new Date();
    var a =myDate.getDay();
    var b = 6-a;
if(a===6 || a===7){
    document.write("It's Weekend");
}else{

document.write("Sorry! wait for "+b+" more day")
}
}

Document.write(MyDate() )