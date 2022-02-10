const buttons = document.querySelectorAll('.choice');
const computerScore = document.querySelector('.computer-current');
const playerScore = document.querySelector('.player-current');
const resultContainer = document.querySelector('.round-result > p')
const winPara = document.querySelector('.winner-container > p');


// Functions to get and interpret Computer Move
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

function getPlayerPlay(e) {
    return (e.target.textContent.toLowerCase());
    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getResult(computer, player) {
    if (player === computer) return [`It\'s a tie! You and the computer both chose ${player}.`, 'tie']
    if (player === 'rock') {
        if (computer === 'paper') {
            return [`You Lose! ${capitalizeFirstLetter(computer)} beats ${player}.`, 'lose']
        } else {
            return [`You win! ${capitalizeFirstLetter(player)} beats ${computer}.`, 'win']
        }
    } else if (player === 'paper') {
        if (computer === 'scissors') {
            return [`You Lose! ${capitalizeFirstLetter(computer)} beats ${player}.`, 'lose']
        } else {
            return [`You win! ${capitalizeFirstLetter(player)} beats ${computer}.`, 'win']
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return [`You Lose! ${capitalizeFirstLetter(computer)} beats ${player}.`, 'lose']
        } else {
            return [`You win! ${capitalizeFirstLetter(player)} beats ${computer}.`, 'win']
        }
    } 
}

function addOnetoScore(scoreString) {
    let temp = parseInt(scoreString) + 1;
    return temp.toString();
}

function updateScore(code) {
    if (code === 'tie') return;

    if (code === 'win') {
        playerScore.textContent = addOnetoScore(playerScore.textContent);
    } else {
        computerScore.textContent = addOnetoScore(computerScore.textContent);
    } 
}

function checkForWinner(computerScore, playerScore) {
    return computerScore === 5 || playerScore === 5;
}

function disableChoices() {
    buttons.forEach(button => button.disabled = true);
}

function enableChoices() {const winPara = document.querySelector('.winner-container > p');
    buttons.forEach(button => button.disabled = false);
}

function retryButton(e) {
    computerScore.textContent = '0';
    playerScore.textContent = '0';
    winPara.textContent = '';
    enableChoices();
    e.target.remove();

}

function handleWin(computerScore) {
    const winner = computerScore === 5 ? 'Computer' : 'You'
    disableChoices();
    winPara.textContent = `${winner} win${winner === 'Computer' ? 's' : ''}! Play again?`
    const retryContainer = document.querySelector('.play-again');
    const retry = document.createElement('button')
    retry.textContent = 'Just one more round';
    retry.addEventListener('click', retryButton);
    retryContainer.appendChild(retry);




}

function playRound(e) {
    computerPlay = getComputerPlay();
    playerPlay = getPlayerPlay(e);
    console.log(computerPlay);
    console.log(playerPlay);

    const [resultString, resultCode] = getResult(computerPlay, playerPlay);
    
    
    resultContainer.textContent = resultString;
    updateScore(resultCode);

    if (checkForWinner(parseInt(computerScore.textContent), parseInt(playerScore.textContent))) {
        handleWin(parseInt(computerScore.textContent));
    }
}

buttons.forEach(button => button.addEventListener('click', playRound));