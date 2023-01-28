
/**
 * @returns a string which is a random selection from; 'Rock', 'Paper', 'Scissors'
 */
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let selection = Math.floor((Math.random() * 3)); // picks a random number form 0 - 2

    return choices[selection];
}