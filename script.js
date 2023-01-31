// DOM logic

const buttonPlayerRock = document.querySelector('.buttons-player-rock');
buttonPlayerRock.addEventListener('click', () => {
    displayToCardResult(playRound('rock', getComputerChoice()))
    updateScore();
});

const buttonPlayerPaper = document.querySelector('.buttons-player-paper');
buttonPlayerPaper.addEventListener('click', () => {
    displayToCardResult(playRound('paper', getComputerChoice()))
    updateScore();
});

const buttonPlayerScissors = document.querySelector('.buttons-player-scissors');
buttonPlayerScissors.addEventListener('click', () => {
    displayToCardResult(playRound('scissors', getComputerChoice()));
    updateScore();
});

/**
 * Updates the scoreboard after each round.
 * 
 * to be run everytime a player selects a choice & plays a round.
 */
function updateScore() {
    let playerScore = Number(document.querySelector('.card-scoreboard-player').innerText);
    let computerScore = Number(document.querySelector('.card-scoreboard-computer').innerText);

    // selects the results card to find the round result
    const cardResult = document.querySelector('.card-result > .card-result-message').innerText;

    // updates score according to which player wins by scanning the results card announcement
    if (cardResult.search('win') != -1) {
        playerScore += 1;
        document.querySelector('.card-scoreboard-player').innerText = playerScore;
    }
    else {
        computerScore += 1;
        document.querySelector('.card-scoreboard-computer').innerText = computerScore;
    }

    // prints an appropriate message when the combined score reaches 5 points (best of 5 rounds)
    if (playerScore + computerScore >= 5) {
        const winner = (playerScore > computerScore) ? 'You' : 'The Computer'
        displayToCardResult(`${(winner)} won the game!`);
    }
}

/**
 * 
 * @param {string} str the string to be displayed in the website's Result Card, typically for round announcements
 */
function displayToCardResult (str) {
    const cardResult = document.querySelector('.card-result > .card-result-message');
    cardResult.innerText = str;
}

// RPS logic

/**
 * Plays a best-of-5-rounds game of "Rock Paper Scissors".
 * 
 * Handles invalid input & is case-insensitive.
 */
function game() {
    let playerInput, roundOutcome;
    let playerScore = 0, computerScore = 0;
    let possibleChoices = ['rock', 'paper', 'scissors'];

    while (playerScore + computerScore < 5) {
        playerInput = prompt("What will you pick?");
        playerInput = playerInput.toLowerCase();

        // handles invalid inputs and redos the round
        if (!possibleChoices.includes(playerInput)) {
            alert("Try another input.");
            continue;
        }

        roundOutcome = playRound(playerInput, getComputerChoice());
        alert(roundOutcome);

        if (roundOutcome.search('tie') != -1)// checks if the word 'tie' is in the return message
            continue;
        else if (roundOutcome.search('win') != -1) // checks if the word 'win' is in the return message
            playerScore++;
        else
            computerScore++;
    }

    if (playerScore > computerScore)
        alert(`You win the game! Final Score was ${playerScore}:${computerScore}`);
    else
        alert(`You lost the game. Final Score was ${playerScore}:${computerScore}`);
}

/**
 * WARNING: Does not error handle input outside the allowable strings listed below.
 * 
 * Acceptable string inputs are listed in this array: ['Rock', 'Paper', 'Scissors'].
 * It is not case-sensitive.
 * 
 * @param {string} playerChoice
 * @param {string} computerChoice 
 * @returns a string which is the message to display at the result of a round of Rock Paper Scissors
 */
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice == computerChoice)
        return "It's a tie!";
    
    switch (playerChoice)
    {
        case 'rock':
            return (computerChoice == 'scissors')
            ? "You win! Rock beats Scissors."
            : "You lose. Paper beats Rock.";

        case 'paper':
            return (computerChoice == 'rock')
            ? "You win! Paper beats Rock."
            : "You lose. Scissors beats Paper.";

        case 'scissors':
            return (computerChoice == 'paper')
            ? "You win! Scissors beats Paper."
            : "You lose. Rock beats Scissors.";
    }
}

/**
 * @returns a string which is a random selection from; 'Rock', 'Paper', 'Scissors'
 */
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let selection = Math.floor((Math.random() * 3)); // picks a random number form 0 - 2

    return choices[selection];
}