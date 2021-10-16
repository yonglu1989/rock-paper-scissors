function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("Tie! " + playerSelection + " ties " +computerSelection);
        return 0;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! " + playerSelection + " loses to " + computerSelection);
        return 1; 
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! " + playerSelection + " loses to " + computerSelection);
        return 1; 
    }

    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! " + playerSelection + " loses to " + computerSelection);
        return 1; 
    }
    
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return 2; 
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return 2; 
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return 2; 
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;

    // Plays the game with 5 rounds and records score each round.
    for (let i = 0; i < 5; i++) {
        let res = playRound(prompt("Please enter rock, paper, or scissors: "), computerPlay());
        if (res == 1){
            compScore = compScore + 1;
        }
        if (res == 2) {
            playerScore = playerScore + 1;
        }
    }

    // Final scoring output.
    let scoreString = "Your score is: " + playerScore + ". Computer Score: " + compScore;
    if (playerScore > compScore) {
        console.log(scoreString + " .You win!");
    }
    else {
        console.log(scoreString + " .You lose!");
    }
}