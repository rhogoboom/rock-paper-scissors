function getComputerChoice() {
    let choice_int = getRandomInt();
    switch (choice_int) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return

    }
}

function getRandomInt() {
    const max = 3;
    return Math.floor(Math.random() * max);
}

