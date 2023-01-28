/**
 * Plays a game of "Rock Paper Scissors".
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