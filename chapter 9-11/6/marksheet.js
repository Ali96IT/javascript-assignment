
var math =prompt("Enter Your Math Marks",);
var chemistry =prompt("Enter Your Chemistry Marks",);
var physics =prompt("Enter Your Physics Marks",);
var total_marks =prompt("Total Marks",);
var obtained_mark=parseInt(math)+parseInt(chemistry)+parseInt(physics);
var per=obtained_mark*100/300;
document.write("Total Marks:"+total_marks+"<br>");
document.write("Marks Obtained:"+obtained_mark+"<br>");
document.write("Percentage:"+per +"%"+"<br>");
if(per>= 50 && per<60)
{
    document.write ("Grade:C"+"<br>");
    document.write ("Remarks:You need to improve"+"<br>");


}else if (per>= 60 && per<70)
{
    document.write ("Grade:B"+"<br>");
    document.write ("Remarks:Fair"+"<br>");

}else if(per>= 70 && per< 80)
{
    document.write("Grade:A"+"<br>");
    document.write ("Remarks:Good"+"<br>");

}else if(per>80 && per<=100)
{
    document.write("Grade:A-1"+"<br>");
    document.write ("Remark:Excellent"+"<br>");

}else if (per>100)
{document.write("Grade:not posible"+"<br>");
document.write ("Remarks:None"+"<br>");

}
else{
    document.write("Grade:fail"+"<br>");
    document.write ("Remark:Sorry"+"<br>");

}