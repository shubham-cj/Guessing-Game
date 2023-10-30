let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess(){
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber){
        gameResult.textContent = "It's High! Try Again!!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent = "It's Low! Try Again!!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "Congratulation! You got it right!!";
        gameResult.style.backgroundColor = "green";
    }
    else{
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}