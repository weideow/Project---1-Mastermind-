board = ["","",""];
// board1 = ["","",""];
winner = false;
loss = false;




function init () {
    render();
    randomComp();
    updateBoard();
    checkAnswer();
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





const columnBtns = document.querySelectorAll('.column');
const hiddenAns = document.querySelectorAll('.sqr');
const colorChoice = ['green', 'red', 'blue']; 
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

   




// https://stackoverflow.com/questions/69995256/loop-through-colors/69995422#69995422 credits to stackoverflow

// function randomComp() {
//     const compSelection = [];
//     const colorChoice = ['green', 'red', 'blue'];
//     for (let i =0; i<colorChoice.length; i++) {
//         const randomSelect = Math.random(colorChoice);
//         compSelection.push(randomSelect);
//     }
    
// }//looped through but no selection

 

// let compSelection = [];

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
            square.style.backgroundColor = compSelection[index];
            // console.log(compSelection);
    });
}

function checkAnswer() {
    randomComp();

}


init();




