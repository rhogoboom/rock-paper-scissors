function getComputerPlay() {
    return switchIntToPlay(Math.floor(Math.random() * 3) + 1)
}

function switchIntToPlay(n) {
    if (n == 1) {
        return 'rock';
    } else if(n == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerPlay() {
    let play;
    while (!validatePlayerPlay(play)) {
        play = prompt('Rock, paper, scissors?').toLowerCase();
    }
    return play;
}

function validatePlayerPlay(play) {
    return (play == 'rock' || play == 'paper' || play == 'scissors') 
}



function playRound(computerPlay, playerPlay) {
    console.log(computerPlay);
    console.log(playerPlay);
    if (computerPlay === playerPlay) {
        console.log(`Tie! Computer and Player both chose ${computerPlay}`);
        return 3;

    } else if (computerPlay === 'rock') {
        console.log(`You ${playerPlay === 'paper' ? `win! ${playerPlay} beats ${computerPlay}` : `lose ${computerPlay} beats ${playerPlay}`}`);
        return playerPlay === 'paper';
    } else if (computerPlay === 'paper') {
        console.log(`You ${playerPlay === 'scissors' ? `win! ${playerPlay} beats ${computerPlay}` : `lose ${computerPlay} beats ${playerPlay}`}`);
        return playerPlay === 'scissors';
    } else {
        console.log(`You ${playerPlay === 'rock' ? `win! ${playerPlay} beats ${computerPlay}` : `lose ${computerPlay} beats ${playerPlay}`}`);
        return playerPlay === 'rock';
    }
}


function playGame() {
    let computerScore = 0, playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getComputerPlay(), getPlayerPlay())
        console.log(result);
        if (result === true) {
            playerScore += 1;
        } else if (result === false) {
            computerScore += 1;
        }
    }
    if (computerScore === playerScore) {
       console.log('It\'s a tie!');
    } else {
        console.log(`${computerScore > playerScore ? 'Computer': 'Player'} wins! Player: ${playerScore}, Computer: ${computerScore}`);
    }
}

playGame();