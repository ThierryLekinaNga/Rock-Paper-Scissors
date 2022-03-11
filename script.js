let playerWins = 0;
let computerWins = 0;
let tie = 0;

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
        tie++;
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

function targetSelection() {

    const select = document.querySelector('select');
    let target = parseInt(select.options[select.selectedIndex].value);

    select.addEventListener('change', () => {

        target = parseInt(select.value);
        return target;
        
    });
    return target;
}

function game() {

    const buttons = document.querySelectorAll('button');
    const roundResult = document.querySelector('#roundResult');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    const playerLiveScore = document.querySelector('#playerLiveScore')
    const computerLiveScore = document.querySelector('#computerLiveScore');
    const select = document.querySelector('select');
    const newGame = document.querySelector('#newGame');
    const message = document.createElement('sub');
    message.style.color = 'cornflowerblue';
    message.style.fontWeight = 'bold';
    const zone1 = document.querySelector('#zone-1');
    const zone2 = document.querySelector('#zone-2');
    
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            
            const playerSelection = button.id;
            select.disabled = true;
            const computerSelection = computerPlay();
            const selectionArray = ['rock', 'paper', 'scissors'];
            let i = 0; 

            while(i < selectionArray.length) {

                if(playerSelection === selectionArray[i]) {

                    roundResult.textContent = '\"' + playRound(playerSelection, computerSelection) + '\"';
                    player.textContent = "PLAYER";
                    computer.textContent = "COMPUTER";
                    playerLiveScore.textContent = playerWins;
                    computerLiveScore.textContent = computerWins;
                    break;
                } 

                else
                    i++; 
            }

            if(playerWins === targetSelection() || computerWins === targetSelection()) {

                for(let i = 0; i < buttons.length; i++)
                    buttons[i].disabled = true;

                if(playerWins > computerWins) {

                    zone1.textContent = "YOU";
                    zone2.textContent = "WON";
                }
                else {

                    zone1.textContent = "YOU";
                    zone2.textContent = "LOST";
                }

                message.textContent = "Reload the page to play a new game.";
                newGame.appendChild(message);
            }
        });
    });
    
}

game();