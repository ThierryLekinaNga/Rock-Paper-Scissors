let playerWins = 0;
let computerWins = 0;
let draw = 0;

function computerPlay() {

    const computerRandomThrow = Math.floor(Math.random() * 3);

    switch(computerRandomThrow) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "System Failure!";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        draw++;
        return "Tie, No Winner or Loser!";
    }

    else {

        if(playerSelection === "rock" && computerSelection === "paper") {
            computerWins++;
            return "You Lose! Paper beats Rock.";
        }

        else if(playerSelection === "rock" && computerSelection === "scissors") {
            playerWins++;
            return "You Win! Rock beats Scissors.";
        }

        else if(playerSelection === "paper" && computerSelection === "rock") {
            playerWins++;
            return "You Win! Paper beats Rock.";
        }

        else if(playerSelection === "paper" && computerSelection === "scissors") {
            computerWins++;
            return "You Lose! Scissors beat Paper.";
        }

        else if(playerSelection === "scissors" && computerSelection === "rock") {
            computerWins++;
            return "You Lose! Rock beats Scissors.";
        }

        else {
            playerWins++;
            return "You Win! Scissors beat Paper.";
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Rock, Paper, or Scissors?", " ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerWins > computerWins)
        return "Total Score:You Win!\n\nPlayer: " + playerWins + " Vs Computer: " + computerWins + ", Tie: " + draw;
    
    else if(playerWins < computerWins)
        return "Total Score:You Lose!\n\nPlayer: " + playerWins + " Vs Computer: " + computerWins + ", Tie: " + draw;

    else
        return "Total Score:Draw!\n\nPlayer: " + playerWins + " Vs Computer: " + computerWins + ", Tie: " + draw;
}

console.log(game());

