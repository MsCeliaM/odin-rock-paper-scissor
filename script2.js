// computer variables start with c
// human variables start with h

// Function for computer to choose a random string value from a specified array. 

function cPlay() {
    let array = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random()*3);
    return (cChoice = array[random]);
}
console.log (cPlay());

// Function for human to input a value from choice and turn it into lowercase to be able to compare to computer choice from lowercase array. 

function hPlay() {
    let hInput = prompt ('Player please choose - rock, paper or scissor?');
    return hChoice = hInput.toLowerCase();
}
console.log (hPlay());

// Function to compare outcome of cChoice and hChoice, declare winner and increment winner score

let cScore = Number(0)
let hScore = Number(0)

function playRound (cChoice, hChoice) {
    if (cChoice === hChoice)  { 
    return ('Tie, try again')
    } else if ((cChoice === 'rock' && hChoice === 'scissor') || 
            (cChoice === 'paper' && hChoice === 'rock') ||
            (cChoice === 'scissor' && hChoice === 'paper')) {
    return ('Computer win the round - it\'s score is ' + Number(++cScore))
    } else {
    return ('You win the round - your score is '+ Number(++hScore))
    }
}

playRound ();
console.log (playRound(cChoice,hChoice));

// Loop to have cPlay, hPlay & playRound repeat until cScore or hScore === 5 then declare winner. 



console.log (cPlay());
console.log (hPlay());
playRound ();
console.log (playRound(cChoice,hChoice));

console.log (cPlay());
console.log (hPlay());
playRound ();
console.log (playRound(cChoice,hChoice));

console.log (cPlay());
console.log (hPlay());
playRound ();
console.log (playRound(cChoice,hChoice));





// Function to keep the scores of above outcomes...

function theWinner (cScore, hScore) {
    if (cScore === 5) {
    return ('Computer Wins - better luck next time.')
    } else if (hScore === 5) {
    return ('You win!! You\'re a bloody genius! We\'re not worthy - go forth and conquer!')
    } else {
    return ('Play another round, let\'s see who wins the game!')
    }
}

theWinner ();
console.log (theWinner(cScore, hScore));

// Function to clear scores at end of game

function clearScores () {
    cScore = 0
    hScore = 0
}

// Recalling functions to try make it a full 5 round game?! or in a function?







