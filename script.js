// STEP 1 - create a random selector made by the computer

function computerPlay() {
    const array = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return (computerSelect = array[random]);
  }
computerPlay ();

console.log (computerSelect);

// STEP 2 - create a case-insentsitive input for playerSelect 

let playerInput = prompt ("Choose your weapon.");
let playerSelect = playerInput.toLowerCase();

console.log (playerSelect);

// STEP 3 - create comparison between computer & player with an output to declare winner

let compScore = 0
let playerScore = 0

function playRound (computerSelect, playerSelect) {
    if (computerSelect === playerSelect) {
    return ('Draw round - try again!')
    } else if ((computerSelect === 'rock' && playerSelect === 'scissor') || 
               (computerSelect === 'paper' && playerSelect === 'rock') ||
               (computerSelect === 'scissor' && playerSelect === 'paper')) {
     return ('Computer win! Computer Score = ' + (++compScore));
    } else {
     return ('Well done! You win! Your Score = ' +(++playerScore));
    }}

playRound();
console.log(playRound(computerSelect, playerSelect))
playRound();



// STEP 4 - create variables where a score is kept - I went back and added it into the same Playround() function... hoping for concise and clean code. 

//STEP 5 - create a 5 round game. 
