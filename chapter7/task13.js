var myDate=new Date();
  var n = myDate.getTime();
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var d = new Date();
  var t= d.getTime();

  var y = Math.round(t / minutes);

  document.write("Current date: "+myDate+"<br>");
  document.write("Millisecond since january1,1970: "+n+"<br>");
  document.write("Minutes since january1,1970: "+y);
