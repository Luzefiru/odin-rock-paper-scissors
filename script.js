// DOM logic

const buttonPlayerRock = document.querySelector('.buttons-player-rock');
buttonPlayerRock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    displayToCardResult(playRound('rock', computerChoice))
    updateScore();

     // display the choice of the computer
     document.querySelector('.computer-choice').setAttribute('src', `./res/${computerChoice}.png`);

     // change it back to the choosing.gif after 2 seconds
     setTimeout(() => (document.querySelector('.computer-choice').setAttribute('src', './res/choosing.gif')), 2000);
});

const buttonPlayerPaper = document.querySelector('.buttons-player-paper');
buttonPlayerPaper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    displayToCardResult(playRound('paper', computerChoice))
    updateScore();

     // display the choice of the computer
     document.querySelector('.computer-choice').setAttribute('src', `./res/${computerChoice}.png`);

     // change it back to the choosing.gif after 2 seconds
     setTimeout(() => (document.querySelector('.computer-choice').setAttribute('src', './res/choosing.gif')), 2000);
});

const buttonPlayerScissors = document.querySelector('.buttons-player-scissors');
buttonPlayerScissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    displayToCardResult(playRound('scissors', computerChoice));
    updateScore();

    // display the choice of the computer
    document.querySelector('.computer-choice').setAttribute('src', `./res/${computerChoice}.png`);

    // change it back to the choosing.gif after 2 seconds
    setTimeout(() => (document.querySelector('.computer-choice').setAttribute('src', './res/choosing.gif')), 2000);
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

    if (playerScore + computerScore == 5) {
        // prints an appropriate message when the combined score reaches 5 points (best of 5 rounds)
        const winner = (playerScore > computerScore) ? 'You' : 'The Computer'
        displayToCardResult(`${(winner)} won the game!`);
    }
    else if (playerScore + computerScore >= 6) {
        // asks the player whether to start a new game or exit the browser tab
        replayGameConfirmation();
    }
}

/**
 * @param {string} str the string to be displayed in the website's Result Card, typically for round announcements
 */
function displayToCardResult(str) {
    const cardResult = document.querySelector('.card-result > .card-result-message');
    cardResult.innerText = str;
}

/**
 * Cheesy function to restart or exit the game.
 * 
 * TODO: remove this function & integrate an actual replay menu in the viewport
 */
function replayGameConfirmation() {
    const yes = confirm("Would you like to play again?");
    if (yes)
        location.reload();
    else
        window.close();
}

// RPS logic

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
            ? "You win!"
            : "You lose.";

        case 'paper':
            return (computerChoice == 'rock')
            ? "You win!"
            : "You lose.";

        case 'scissors':
            return (computerChoice == 'paper')
            ? "You win!"
            : "You lose.";
    }
}

/**
 * @returns a string which is a random selection from; 'Rock', 'Paper', 'Scissors'
 */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let selection = Math.floor((Math.random() * 3)); // picks a random number form 0 - 2

    return choices[selection];
}