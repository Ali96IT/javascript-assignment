var guess =prompt("Guess The Secret Number");
var num="5";
var num1=num-1;
if (guess == num){
    
alert("Bingo! Correct answer");
}else if(guess==num1)
{
alert("Close enough to the correct answer");
}else{
    alert("Incorrect ans");
}
document.write(guess++);