// computer variables start with c
// human variables start with h

// Function for computer to choose a random string value from a specified array. 

function cPlay() {
    let array = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random()*3);
    return (cChoice = array[random]);
}
cPlay();
console.log (cPlay());

// Function for human to input a value from choice and turn it into lowercase to be able to compare to computer choice from lowercase array. 

function hPlay() {
    let hInput = prompt ('Player please choose - rock, paper or scissor?');
    return hChoice = hInput.toLowerCase();
}
console.log (hPlay());

// Function to compare outcome of cChoice and hChoice to declare a winner

function playRound (cChoice, hChoice) {
    if (cChoice === hChoice) {
    return ('Tie, try again')
    } else if ((cChoice === 'rock' && hChoice === 'scissor') || 
            (cChoice === 'paper' && hChoice === 'rock') ||
            (cChoice === 'scissor' && hChoice === 'paper')) {
    return ('Computer Wins - try again') 
    } else {
    return ('Well done - you win!')
    }
}

playRound ();
console.log (playRound(cChoice,hChoice));

// Function to keep the scores of above outcomes...

let cScore = Number(0)
let hScore = Number(0)

function keepScore (cScore, hScore) {
    if (cChoice === hChoice) {
    return ('A tie - no one scores') , (cScore += 0, hScore += 0)
    } else if ((cChoice === 'rock' && hChoice === 'scissor') || 
            (cChoice === 'paper' && hChoice === 'rock') ||
            (cChoice === 'scissor' && hChoice === 'paper')) {
    return ('Computer one up - score is ' + (++cScore) )
    } else {
    return ('Human one up - your score is '+ (++hScore))
    }
}
keepScore (cScore, hScore);
console.log (keepScore (cScore,hScore));

function theWinner (cScore, hScore) {
    if (cScore === 5) {
    return ('Computer Wins - better luck next time.')
    } else if (hScore === 5) {
    return ('You win!! You\'re a bloody genius! We\'re not worthy - go forth and conquer!')
    } else {
    return ('Play another round, let\'s see who wins!')
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








