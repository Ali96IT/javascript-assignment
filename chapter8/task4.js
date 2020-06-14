function circum() {
    var radius = parseInt(prompt("Enter the radius of the circle"));
    
    var circle = 2 * Math.PI * radius;
    var circle1 =radius * radius * Math.PI
    document.write("The circumference is "+circle+"<br>")
    document.write("The Area is "+circle1+"")
    
  }
  circum()