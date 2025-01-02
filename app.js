board = ["","",""];
// board1 = ["","",""];
winner = false;
loss = false;


const playerChoice = document.querySelectorAll('.column');
// const playerChoice1 = document.querySelectorAll('.column1');

function init () {
    render();
    randomComp();
    updateBoard();
};

function render() {

};


// function updateBoard1() {
//     playerChoice1.forEach((Choice1, index) =>{
//     Choice1.innerText = board1[index];
//     });
// }

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

const colorChoice = ['green', 'red', 'blue']; 
const columnBtns = document.querySelectorAll('.column');
const hiddenAns = document.querySelectorAll('.sqr');

let currentColorIndex = 0;

columnBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const nextColorIndex = ++currentColorIndex % colorChoice.length; //colorChoice is 0,1,2. ++ brings the loop through with 1. currentColorIndex is -1, upon 1st click, it will be 0.
        //0%3 gives 0, and so on. once it goes to 3%3, result will be 0, meaning the loop resets.
        btn.style.backgroundColor = colorChoice[nextColorIndex];  
    });
});
// https://stackoverflow.com/questions/69995256/loop-through-colors/69995422#69995422 credits to stackoverflow

// function randomComp() {
//     const compSelection = [];
//     const colorChoice = ['green', 'red', 'blue'];
//     for (let i =0; i<colorChoice.length; i++) {
//         const randomSelect = Math.random(colorChoice);
//         compSelection.push(randomSelect);
//     }
    
// }//looped through but no selection




// function randomComp() {
//     const compSelection = [];
//     const colorChoice = ['green', 'red', 'blue'];
//     for (let i =0; i<colorChoice.length; i++) {
//         const randomIndex = Math.floor(Math.random(colorChoice)*colorChoice.length);
//         compSelection.push(colorChoice[randomIndex]);
//     }
//     return compSelection;
// }

let compSelection = [];

function randomComp() {
    compSelection = [];
    const colorChoice = ['green', 'red', 'blue'];
    for (let i =0; i<colorChoice.length; i++) {
        const randomIndex = Math.floor(Math.random()*colorChoice.length);
        compSelection.push(colorChoice[randomIndex]);
    }
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

        if (index < compSelection.length) {
            square.style.backgroundColor = compSelection[index];
        }
    });
}

init();




