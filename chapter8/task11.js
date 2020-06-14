var char = prompt("Please Enter Character").toUpperCase();
function Vowel (){
switch(char){
    default:
        return "false";
        
    case "A":
        return "true";
    
    case "E":
        return "true";
        
    case "I":
        return "true";
        
    case "O":
        return "true";
            
    case "U":
        return "true";
            
}
}
document.write(Vowel())
