playGame();


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    let choice = parseInt(window.prompt("Enter the number of rounds you would like to play."));
    for (let i = 0; i < choice; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    overallWinner();
    playAgain();


    function overallWinner(){
        if (humanScore > computerScore)
        {
            console.log("You win! Final Score: " + humanScore + ":" + computerScore);
        }
        if (humanScore < computerScore)
        {
            console.log("You lost! Final Score: " + humanScore + ":" + computerScore);
        }
        if (humanScore == computerScore)
        {
            console.log("It was a tie! Final Score: " + humanScore + ":" + computerScore);
        }
    }


    function playAgain(){
        let again = window.prompt("Do you want to play again? (y/n)").toLowerCase();

        while (again != "yes" && again != "y" && again != "no" && again != "n")
        {
            again = window.prompt("Invalid input. Do you want to play again? (y/n)").toLowerCase();
        }

        if (again == "yes" || again == "y"){
            playGame();
        }

        else{
            console.log("Thanks for playing!");
        }
    }


    function getComputerChoice(){
        let randomNumber = Math.random() * 3;

        if (randomNumber < 1){
            return "rock";
        }

        if (randomNumber < 2){
            return "paper";
        }

        if (randomNumber < 3){
            return "scissors";
        }
    }


    function getHumanChoice(){
        let choice = window.prompt( roundNumber + " Choose between rock, paper, and scissors").toLowerCase();
    
        while (choice != "rock" && choice != "paper" && choice != "scissors"){
            if (choice == "scissor"){
                choice = window.prompt("Invalid choice (Did you mean scissors?). Choose between rock, paper, and scissors").toLowerCase();
            }

            else{
                choice = window.prompt("Invalid choice. Choose between rock, paper, and scissors").toLowerCase();
            }
        }
        roundNumber++;

        return choice;
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
}