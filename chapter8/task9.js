function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }
 dt = new Date();
 document.write("Today Date: "+dt +"<br>");
dt = new Date();
document.write("After Add 3 Weeks: "+add_weeks(dt, 3).toString()+"<br>");  
dt = new Date();
document.write("After Add 10 Weeks: "+add_weeks(dt, 10).toString());  

