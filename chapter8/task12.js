function game(){
    var random =parseInt( Math.random()*101);
    var guess1 = prompt("Guess a number")
    var guess2 = prompt("Guess a number")
    var guess3 = prompt("Guess a number")
    do{
    if (guess1 != random && guess2 != random && guess3 != random ){
    
        alert("you lose a game");
        var guess4 = prompt("You want to play again?") 
       if(guess4=="yes"){
            game();
        }
        else if(guess4=="no")
            alert("Thank you for playing with us today")
         else
         alert(Error);
        }
    if (guess1 == random || guess2 == random || guess3 == random ){
    
        alert("You are right, You won");
        var guess4 = prompt("You want to play again?")
        if(guess4=="yes"){
            game();
        }
        else if (guess4=="no")
            alert("Thank you for playing with us today")
            else
            alert(Error);
    }
   
    

 }
 while(isvalid )
}

 game();
 