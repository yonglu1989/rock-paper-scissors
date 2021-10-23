let compScore = 0;
let playerScore = 0;
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('compScore').innerHTML = compScore;
let roundResult = document.getElementById('round-res');

// Adding Event listeners to Rock, paper, and scissors 
// event listeners will trigger playRound()
const rock     = document.querySelector('#rock');
const paper    = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function userInput(e) {
    playRound(this.id, computerPlay());
}

rock.addEventListener('click', userInput);
paper.addEventListener('click', userInput);
scissors.addEventListener('click', userInput);

// This function returns the computer's choice.
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == computerSelection) {
        roundResult.innerHTML = ("Tie! " + playerSelection + " ties " +computerSelection);

        // return 0;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        roundResult.innerHTML = ("You lose! " + playerSelection + " loses to " + computerSelection);
        compScore += 1;
        // return 1; 
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        roundResult.innerHTML = ("You lose! " + playerSelection + " loses to " + computerSelection);
        compScore += 1;
        // return 1; 
    }

    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        roundResult.innerHTML = ("You lose! " + playerSelection + " loses to " + computerSelection);
        compScore += 1;
        // return 1; 
    }
    
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        roundResult.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
        playerScore += 1;
        // return 2; 
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        roundResult.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
        playerScore += 1;
        // return 2; 
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        roundResult.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
        playerScore += 1;
        // return 2; 
    }

    updateScore();

}

function updateScore() {
    // Check to see if a player has won. Resets score and announces result.
    if (playerScore == 5) {
        roundResult.innerHTML = ("You win! Scores are now reset!");
        playerScore = 0;
        compScore = 0;
    }
    else if (compScore == 5){
        playerScore = 0;
        compScore = 0;
        roundResult.innerHTML = ("You lose! Scores are now reset!");
    }

    // Update the innerhtml of scoreboards
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;

}

function game() {
    // let playerScore = 0;
    // let compScore = 0;

    // Plays the game with 5 rounds and records score each round.
    // for (let i = 0; i < 5; i++) {
    //     let res = playRound(prompt("Please enter rock, paper, or scissors: "), computerPlay());
    //     if (res == 1){
    //         compScore = compScore + 1;
    //     }
    //     if (res == 2) {
    //         playerScore = playerScore + 1;
    //     }
    // }

    // Final scoring output.
    let scoreString = "Your score is: " + playerScore + ". Computer Score: " + compScore;
    if (playerScore > compScore) {
        roundResult.innerHTML = (scoreString + " .You win! Scores are now reset.");
    }
    else {
        roundResult.innerHTML = (scoreString + " .You lose! Scores are now reset.");
    }
}

