let btn=document.getElementById('btn');
let output=document.getElementById("outputtext");

let number=[Math.floor(Math.random()*100)]
let score=100;

btn.addEventListener('click',function(){
    let input =document.getElementById('userinput').value;
    if(input==number){
        output.innerHTML="You guessed right, your number was `$(number)`"
        output.innerHTML=` Your Win  percentage is: ${score}🏆🏆`;
    }
    else if(input<number){
        output.innerHTML="You guess to low, guess some another bigger number";

        score--;
    }
    if(input>number){
        output.innerHTML="You guess too high, guess some another smaller number"

        score--;
    }
});
