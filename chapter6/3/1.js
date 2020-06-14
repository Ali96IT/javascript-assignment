var colors = ["Red","Green", "Blue","Yellow","Pink","Purple","Orange"];
for(a=0;a<7;a++){
    document.write(colors[a]+"<br>");
}    
//part(a)
var heading="<b>After adding color in beginning:</b>";
document.write(heading+"<br>");
    var b =prompt(" What color he/she wants to add to the beginning ",);
    colors.unshift(b);
    document.write(colors+"<br>");
//part(b)
    var heading="<b>After adding color in end:</b>";
    document.write(heading+"<br>");
    var c =prompt(" What color he/she wants to add to the end ",);
    colors.push(c);
        document.write(colors+"<br>");
//part(c)
        var heading="<b>After adding two colors in beginning:</b>";
      document.write(heading+"<br>");
      var color2 = colors.splice(0, 0, "LIGHT BLUE", "WHITE"); 
      document.write(colors+"<br>");
      //part(d)
    var heading="<b>Delete the first color:</b>";
    document.write(heading+"<br>");
    var color3= colors.slice(1)
    document.write(color3+"<br>");
    //part(e)
    var heading="<b>Delete the last color:</b>";
    document.write(heading+"<br>");
    var color4= colors.pop()
    document.write(colors+"<br>");
    //partf
    var heading="<b>Ask the user at which index he/she wants to add a color & color name:</b>";
    document.write(heading+"<br>");
    var ind = prompt("Input index:")
color = prompt("Enter the color you want to add at index "+ind + " :")
colors[ind] = color
document.write(colors + "<br>");
//partg
var heading="<b>Ask the user at which index he/she wants to delete a color & color name:</b>";
    document.write(heading+"<br>");
ind = prompt("Input index :")
var num = prompt("Enter the number of colors you want to delete: ")

colors.splice(ind, num)

document.write(colors + "<br>")

