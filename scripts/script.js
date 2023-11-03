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

function playRound(playerSelection, computerSelection) {
    const cleanedChoice = cleanChoice(playerSelection);
    if (isValidChoice(cleanedChoice)) {
        let winScenario = decideWinScenario(cleanedChoice, computerSelection);
        let outputString = makeOutputString(winScenario, cleanedChoice, computerSelection);
        return outputString;

    }

}