let winner = false;
let loss = false;

const colorChoice = ['green', 'red', 'blue', 'purple'];
let compSelection = [];
let currentColorIndex = -1;

const messageEls = document.querySelector('#message');
const columns = document.querySelectorAll('.column');
const hiddenAns = document.querySelectorAll('.sqr');
const confirmBtns = document.querySelectorAll('.confirm');
const playerHint = document.querySelectorAll('.ans');
const resetBtn = document.querySelector('#reset');
const playerChoice = [];
const robotGo = new Audio('./robot.mp3');
const loseSound = new Audio('./you-lose.mp3')
const winSound = new Audio('./victory.mp3')

resetBtn.addEventListener('click', (evt) => { //unable to call robotGo.play in init()
    robotGo.volume = 0.6
    robotGo.play()
});

function init() {
    columns.forEach((btn) => {
        btn.style.backgroundColor = [];
    });
    randomComp();
    messageEls.textContent = "Computer is ready! Begin from the top...";
    playerHint.forEach((hint) =>{
        hint.textContent = [];
    });
    compSelection.style.visibility ='hidden';

    updateBoard();
}

function randomComp() {
    compSelection = [];
    for (let i = 0; i < colorChoice.length; i++) {
        const randomIndex = Math.floor(Math.random()*colorChoice.length);
        compSelection.push(colorChoice[randomIndex]);
        // compSelection.style.visibility = 'hidden'; this method appears to throw an error
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

let currentAttemptIndex =-1;

confirmBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerGuess = [];
        columns.forEach((column) => { // each click would go through all the columns again, regardless if it is old or new 
            const color = column.style.backgroundColor
            if (color === "") { 
                return; //end the loop if one selection is not fulfiled 
            }
           else { playerGuess.push(color);
            
           }
        });
            console.log(playerGuess);
           let finalAns = playerGuess.slice(-4);
            let hintResult = checkGuess(finalAns);
            
            playerHint.forEach((hint, index) => {
                if (index === currentAttemptIndex) {
                    hint.textContent = hintResult;
                }
            });
            console.log(finalAns);
        }
    )

});




function checkGuess(finalAns) {
    let exactMatches = 0;
    let correctColorsWrongPosition = 0;
    let compSelectionCopy = [...compSelection];
    let playerGuessCopy = [...finalAns];

    // Check for exact matches
    for (let i = 0; i < compSelection.length; i++) {
        if (compSelection[i] === finalAns[i]) {
            exactMatches++;
            compSelectionCopy[i] = null; // to prepare 2 arrays for second check below, null is to skip over checks done earlier
            playerGuessCopy[i] = null;
        }
    }
    

    for (let i = 0; i < playerGuessCopy.length; i++) {
        if (playerGuessCopy[i] !== null) {
            for (let j = 0; j < compSelectionCopy.length; j++) { //this loop will be called everytime playerGuess[i] throws a non-null, and look for a match
                if (playerGuessCopy[i] === compSelectionCopy[j]) {
                    correctColorsWrongPosition++;
                    compSelectionCopy[j] = null; //prevents duplicates from showing
                    break;
                }
            }
        }
    }

    console.log('Exact matches: ', exactMatches);
    console.log('Correct color, wrong position: ', correctColorsWrongPosition);

    const hintResult = 'Exact matches: ' + exactMatches + ', Correct color, wrong position: ' + correctColorsWrongPosition;
    console.log(hintResult);
    
    if (exactMatches === 4) {
        
        winner = true;
        winSound.volume = 0.6
        winSound.play()
        messageEls.textContent = "You Won!"
        return;
    }

    currentAttemptIndex++;
    messageEls.textContent = "Attempt Number"+" "+(currentAttemptIndex+1);

    if (currentAttemptIndex === 6 && winner === false) {
         messageEls.textContent = "Last attempt!"
    }

    if (currentAttemptIndex === 7 && winner === false) {
        loser = true;
        loseSound.volume = 0.6
        loseSound.play()
        messageEls.textContent = "You lost to computer!"
    }
    return hintResult;
}

function updateBoard() {
    hiddenAns.forEach((square, index) => {
        square.style.backgroundColor = compSelection[index];
    });
}


function resetGame() {
    
    init();
}

resetBtn.addEventListener('click', resetGame)

init();

