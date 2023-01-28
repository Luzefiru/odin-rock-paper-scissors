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