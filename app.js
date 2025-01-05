let board = ["","",""];
// board1 = ["","",""];
let winner = false;
let loss = false;




function init () {
    render();
    randomComp();
    updateBoard();
    // checkWinner1();
    // updateMessage();
    
};

function render() {

};



function handleClick(event) {
    const squareIndex = event.target.id;
    placePiece (squareIndex);
}

// const colorChoice = ['green', 'red', 'blue']; 
// const sect = document.querySelector('section');
// const columnBtns = document.querySelectorAll('.column');

// let currentColorIndex = -1;


// columnBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {

//         const nextColorIndex = ++currentColorIndex % colorChoice.length;
//         sect.style.backgroundColor = colorChoice[nextColorIndex]; 
//     });
// });this is wrong, color was applied to the background instead of buttons itself

const messageEls = document.querySelector('#message');
const columnBtns = document.querySelectorAll('.column');
const hiddenAns = document.querySelectorAll('.sqr');
const colorChoice = ['green', 'red', 'blue']; 
const playerHint0 = document.querySelector('#ans0');

let currentColorIndex = -1;
let playerChoice ={key4:"", key5:"", key6:"", key7:"", key8:"", key9:""};

columnBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const nextColorIndex = ++currentColorIndex % colorChoice.length; //colorChoice is 0,1,2. ++ brings the loop through with 1. currentColorIndex is -1, upon 1st click, it will be 0.
        //0%3 gives 0, and so on. once it goes to 3%3, result will be 0, meaning the loop resets.
        const chosenColor = colorChoice[nextColorIndex];
        btn.style.backgroundColor = chosenColor 

        playerChoice[`key${index+4}`] = chosenColor;
            console.log(playerChoice);
   
    });

});

const confirmSelection0 = document.querySelector('#confirm0');
confirmSelection0.addEventListener('click', () => {
    // checkAnswer1();
    checkWinner1();
    updateMessage();
});

const matchingValues = [];
function checkAnswer1() {  //compare compSelection against playerChoice number 1
        
        if (compSelection.key0 === playerChoice.key7) {
            matchingValues.push(compSelection.key0);
        }
        if (compSelection.key1 === playerChoice.key8) {
            matchingValues.push(compSelection.key1);
        }

        if (compSelection.key2 === playerChoice.key9) {
            matchingValues.push(compSelection.key2);
        }
        
        console.log(matchingValues);
        return matchingValues;

}

function updateMessage() {
    if (winner === true){
        messageEls.textContent = "Player Wins!"
    }
    else {
        messageEls.textContent = "Please try again!"
    }
}

function checkWinner1() {
    checkAnswer1();
    if (matchingValues.length === 3) {
        winner = true;
    }

    else if (matchingValues.length === 2) {
        playerHint0.textContent = "2 right values!"
    }

    else if (matchingValues.length === 1) {
        playerHint0.textContent = "1 right value!"
    }

    else if (matchingValues.length === 0) {
        playerHint0.textContent = " No correct value!"
    }
}

// https://stackoverflow.com/questions/69995256/loop-through-colors/69995422#69995422 credits to stackoverflow

// function randomComp() {
//     const compSelection = [];
//     const colorChoice = ['green', 'red', 'blue'];
//     for (let i =0; i<colorChoice.length; i++) {
//         const randomSelect = Math.random(colorChoice);
//         compSelection.push(randomSelect);
//     }
    
// }//looped through but no selection


function randomComp() {
    compSelection0 = [];
    compSelection = {key0:"",key1:"",key2:""};
    const colorChoice = ['green', 'red', 'blue'];
    for (let i =0; i<colorChoice.length; i++) {
        const randomIndex = Math.floor(Math.random()*colorChoice.length);
        compSelection0.push(colorChoice[randomIndex]);

         const compColor = colorChoice[randomIndex];
        
         compSelection[`key${i}`] = compColor; //the object that would be used to match player choice
    }
    // console.log(compSelection0);
    console.log(compSelection);
    return compSelection;

}


// function updateBoard() {
//     hiddenAns.forEach((square) => {
//         for (let i = 0; i<compSelection.length; i++) {
//             square.style.backgroundColor = compSelection[i];
//         }

//    });
// }



function updateBoard() {
 
    hiddenAns.forEach((square, index) => {
            square.style.backgroundColor = compSelection0[index];
            // console.log(compSelection);
    });
}


init();





