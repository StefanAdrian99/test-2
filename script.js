

const guessInput = document.getElementById("guessInput");
const startGame = document.getElementById("startGame");
const guessSubmit = document.getElementById("guessSubmit");
const guessAttempts = document.getElementById("guessAttempts");
const guessResult = document.getElementById("guessResult");
let guessAttempt = 5;
let guess;
let gameGoing;
const minNo = 1;
const maxNo = 10;

let randomNo = Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo;

startGame.onclick = function(){
    gameGoing = true;
}

guessSubmit.onclick = function(){
    while(gameGoing){
        guess = guessInput.value;
        guess = Number(guess);
        if(isNaN(guess)){
            guessResult.textContent = 'Only numeric chars accepted';
            gameGoing = false;
        }
        else if(guess < minNo || guess > maxNo){
            guessResult.textContent = 'Only numbers from 1 to 10 are valid!';
            gameGoing = false;
        }
        else{
            if(guess > randomNo || guess < randomNo){
                guessAttempt--;
                guessAttempts.textContent = guessAttempt;
                guessResult.textContent = 'Wrong, try again';
                gameGoing = false;
            }
            else if(guessAttempt === 0){
                guessResult.textContent = 'You are out of attempts';
                gameGoing = false;
            }
            else{
                guessResult.textContent = 'You guessed the number, congrats!';
                gameGoing = false;
            }
        }
    }
}