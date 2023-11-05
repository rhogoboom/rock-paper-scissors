function getComputerChoice() {
    let choice_int = getRandomInt();
    switch (choice_int) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return

    }
}

function getRandomInt() {
    const max = 3;
    return Math.floor(Math.random() * max);
}



function cleanChoice(choice) {
    return choice.toLowerCase().trim();
}

function isValidChoice(choice) {
    const validChoices = ['rock', 'paper', 'scissors'];
    return validChoices.includes(choice);
}

function decideWinScenario(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 0;
        } else if (computerSelection === 'scissors') {
            return 1;
        } else {
            return 2;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 0;
        } else if (computerSelection === 'rock') {
            return 1;
        } else {
            return 2;
        }
    } else {
        if (computerSelection === 'rock') {
            return 0;
        } else if (computerSelection === 'paper') {
            return 1;
        } else {
            return 2;
        }
    }
}

function makeOutputString(winScenario, playerSelection, computerSelection) {
    const capitalizePlayer = capitalizeFirstLetter(playerSelection);
    const capitalizeComputer = capitalizeFirstLetter(computerSelection);
    switch (winScenario) {
        case 0:

            return `You Lose! ${capitalizeComputer} beats ${capitalizePlayer}.`
        case 1:
            return `You Win! ${capitalizePlayer} beats ${capitalizeComputer}.`
        case 2:
            return `You Tie! You both chose ${capitalizePlayer}.`
        default:
            break
    }

}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



// function game(nRounds=5) {
//     let playerWins = 0;
//     let computerWins = 0;


//     for (let i = 0; i < nRounds; i++) {
//         let roundResult = playRound(getPlayerChoice(), getComputerChoice());
//         if (roundResult === 0) {
//             computerWins++;
//         } else if (roundResult === 1) {
//             playerWins++;
//         }
//     }

//     if (playerWins > computerWins) {
//         return `You won the games: ${playerWins} to ${computerWins}`;
//     } else if (computerWins > playerWins) {
//         return 'You lost the games: ${playerWins} to ${computerWins}`';
//     } else {
//         return 'the games ended in a tie'
//     }

// };

function getPlayerChoice() {
    let validChoice = false;
    let cleanedChoice;
    while (!validChoice) {
        const currentChoice = prompt("Rock, paper or scissors?");
        cleanedChoice = cleanChoice(currentChoice);
        validChoice = isValidChoice(cleanedChoice);
    }
    
    return cleanedChoice;
};

const buttons = [...document.querySelectorAll('button')];

buttons.forEach(btn => btn.addEventListener('click', handleSelection));
// Button handler needs to do the following:
// 1: Play the round
// 2: Display the results

function getRoundResult(playerSelection, computerSelection) {
    let winScenario = decideWinScenario(playerSelection, computerSelection);
    return winScenario;


}

function handleSelection(e) {
    const scoreDivs = [...document.querySelectorAll('.score')]
    scoreDivs.forEach(div => {
        if (checkWin(parseInt(div.textContent))) {
            clearScores();
        }
    })

    const computerSelection = getComputerChoice();
    const playerSelection = cleanChoice(e.target.textContent);
    const roundResult = decideWinScenario(playerSelection, computerSelection)
    const outputString = makeOutputString(roundResult, playerSelection, computerSelection);
    displayRoundResults(outputString);
    updateScores(roundResult)


}


function displayRoundResults(outputString) {
    const resultsDiv = document.querySelector('.results-text')
    resultsDiv.textContent = outputString;
}

function updateScores(winScenario) {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    let scoreToUpdate;
    let currentScore;


    if ( winScenario === 0) {
        scoreToUpdate = computerScore;
    }
    if ( winScenario === 1) {
        scoreToUpdate = playerScore;
    }

    if (winScenario !== 2) {
        currentScore = parseInt(scoreToUpdate.textContent);
        currentScore++;
        scoreToUpdate.textContent = currentScore;
    
        if (checkWin(currentScore)) {
            const gameWinLose = document.querySelector('.game-win-lose-text');
            gameWinLose.textContent = `You ${winScenario === 1 ? 'Win' : 'Lose'}!`;
        }
    }
    
}

function checkWin(score, gamesToWin=5) {

    if (score === gamesToWin) {
        return true
    }
    return false;
}

function clearScores() {
    const scoreDivs = [...document.querySelectorAll('.score')]
    const testDiv = document.querySelector('.game-win-lose-text');
    scoreDivs.forEach(div => div.textContent = '0');
    testDiv.textContent = '';

}