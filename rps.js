let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let roundWin;

const buttons = document.querySelectorAll("button");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

let score = document.querySelector("#scores");
let result = document.querySelector("#gameResult");

const restartGame = document.createElement("button");
restartGame.textContent = "Restart 🔄";

buttonRock.addEventListener("click", () => {
    buttons.forEach(b => b.style.backgroundColor = "#333");
    let result = round("rock");
    if (roundWin === true) buttonRock.style.backgroundColor = "green";
    else if (roundWin === false) buttonRock.style.backgroundColor = "red";
});

buttonPaper.addEventListener("click", () => {
    buttons.forEach(b => b.style.backgroundColor = "#333");
    let result = round("paper");
    if (roundWin === true) buttonPaper.style.backgroundColor = "green";
    else if (roundWin === false) buttonPaper.style.backgroundColor = "red";
});

buttonScissors.addEventListener("click", () => {
    buttons.forEach(b => b.style.backgroundColor = "#333");
    let result = round("scissors");
    if (roundWin === true) buttonScissors.style.backgroundColor = "green";
    else if (roundWin === false) buttonScissors.style.backgroundColor = "red";
});

restartGame.addEventListener("click", () => {
    restartGame.remove();
    humanScore = 0;
    computerScore = 0;
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    buttonRock.style.backgroundColor = "#333";
    buttonPaper.style.backgroundColor = "#333";
    buttonScissors.style.backgroundColor = "#333";
    score.textContent = "";
    result.textContent = "";
});

function wLResult(winOrLose){
    if (winOrLose == "true"){
        roundWin = true;
    }
    if (winOrLose == "false"){
        roundWin = false;
    }
}

function round(button){
    let result = playRound(button, getComputerChoice())
    score.textContent = result + " | " + getScore();
    checkEndGame();
}

function getComputerChoice(){
    let randomNumber = Math.random() * 3;
    if (randomNumber < 1) return "rock";
    if (randomNumber < 2) return "paper";
    return "scissors";
}

function getScore(){
    return "Score: " + humanScore + " : " + computerScore;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        wLResult("true");
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        wLResult("true");
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        wLResult("true");
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        wLResult("false");
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        wLResult("false");
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        wLResult("false");
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
    if (humanChoice == computerChoice){
        return "Its a tie!";
    }
}

function overallWinner(){
    if (humanScore > computerScore) return "You win! Final Score: " + humanScore + ":" + computerScore;
    if (humanScore < computerScore) return "You lost! Final Score: " + humanScore + ":" + computerScore;
    if (humanScore == computerScore) return "It was a tie! Final Score: " + humanScore + ":" + computerScore;
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

        if (humanScore > computerScore) {
            buttonRock.style.backgroundColor = "green";
            buttonPaper.style.backgroundColor = "green";
            buttonScissors.style.backgroundColor = "green";
        } 
        else {
            buttonRock.style.backgroundColor = "red";
            buttonPaper.style.backgroundColor = "red";
            buttonScissors.style.backgroundColor = "red";
        }

        disableButtons();
        playAgain();
    }
}