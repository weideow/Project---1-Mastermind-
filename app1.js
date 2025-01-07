let winner = false;
let loss = false;

const colorChoice = ['green', 'red', 'blue', 'purple'];
let compSelection = [];
let currentColorIndex = -1;

const messageEls = document.querySelector('#message');
const columns = document.querySelectorAll('.column');
const hiddenAns = document.querySelectorAll('.sqr');
const confirmBtns = document.querySelectorAll('.confirm');
const playerHint = document.querySelectorAll('.class');
const playerChoice = [];

function init() {
    randomComp();
    updateBoard();
}

function randomComp() {
    compSelection = [];
    for (let i = 0; i < colorChoice.length; i++) {
        const randomIndex = Math.floor(Math.random()*colorChoice.length);
        compSelection.push(colorChoice[randomIndex]);
        console.log(compSelection);
    }
}

columns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const nextColorIndex = ++currentColorIndex % colorChoice.length;
        const chosenColor = colorChoice[nextColorIndex];
        btn.style.backgroundColor = chosenColor;
    });
});

confirmBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerGuess = [];
        columns.forEach((column) => { // each click would go through all the columns again, regardless if it is old or new 
            const color = column.style.backgroundColor
            if (color === "") { 
                return; //end the loop if one selection is not fulfiled 
            }
            playerGuess.push(color);
        });

        if (playerGuess.length === 4) {
            checkGuess(playerGuess);
        }
    });
});

function checkGuess(playerGuess) {
    let exactMatches = 0;
    let correctColorsWrongPosition = 0;
    let compSelectionCopy = [...compSelection];
    let playerGuessCopy = [...playerGuess];

    // Check for exact matches
    for (let i = 0; i < compSelection.length; i++) {
        if (compSelection[i] === playerGuess[i]) {
            exactMatches++;
            compSelectionCopy[i] = null;
            playerGuessCopy[i] = null;
        }
    }

    // Check for correct color, wrong position
    for (let i = 0; i < playerGuessCopy.length; i++) {
        if (playerGuessCopy[i] !== null) {
            for (let j = 0; j < compSelectionCopy.length; j++) {
                if (playerGuessCopy[i] === compSelectionCopy[j]) {
                    correctColorsWrongPosition++;
                    compSelectionCopy[j] = null;
                    break;
                }
            }
        }
    }

    console.log('Exact matches: ', exactMatches);
    console.log('Correct color, wrong position: ', correctColorsWrongPosition);

function updateHint() {

    //update the message into hint
}


    if (exactMatches === 4) {
        winner = true;
        updateMessage();
    }
}



function updateBoard() {
    hiddenAns.forEach((square, index) => {
        square.style.backgroundColor = compSelection[index];
    });
}

function updateMessage() {
    if (winner) {
        messageEls.textContent = "Player Wins!";
    } else {
        messageEls.textContent = "Please try again!";
    }
}

init();
