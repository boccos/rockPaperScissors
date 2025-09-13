let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

let score = document.querySelector("#scores");
let result = document.querySelector("#gameResult");

const restartGame = document.createElement("button");
restartGame.textContent = "Restart";



buttonRock.addEventListener("click", () => {
    let result = round("rock");
});

buttonPaper.addEventListener("click", () => {
    let result = round("paper");
});

buttonScissors.addEventListener("click", () => {
    let result = round("scissors");
});

restartGame.addEventListener("click", () => {
    restartGame.remove();
    humanScore = 0;
    computerScore = 0;
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    score.textContent = "";
    result.textContent = "";
});

function round(button){
    let result = playRound(button, getComputerChoice())
    score.textContent = result + " | " + getScore();
    checkEndGame();
}

function getComputerChoice(){
    let randomNumber = Math.random() * 3;

    if (randomNumber < 1){
        return "rock";
    }

    if (randomNumber < 2){
        return "paper";
    }

    return "scissors";
}

function getScore(){
    return "Score: " + humanScore + " : " + computerScore;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }

    if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }

    if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
 
    if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }

    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }

    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }

    if (humanChoice == computerChoice){
        return "Its a tie!";
    }
}


function overallWinner(){
    if (humanScore > computerScore)
    {
        return "You win! Final Score: " + humanScore + ":" + computerScore;
    }
    if (humanScore < computerScore)
    {
        return "You lost! Final Score: " + humanScore + ":" + computerScore;
    }
    if (humanScore == computerScore)
    {
        return "It was a tie! Final Score: " + humanScore + ":" + computerScore;
    }
}


function playAgain(){
    result.after(restartGame);
}

function disableButtons(){
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
}

function checkEndGame(){
    if (humanScore == 5 || computerScore == 5){
        result.textContent = overallWinner();
        disableButtons();
        playAgain();
    }
}