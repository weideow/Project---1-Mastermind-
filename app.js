board = ["","",""];
// board1 = ["","",""];
winner = false;
loss = false;
colorChoice = ['green','red','blue'];

const playerChoice = document.querySelectorAll('.column');
// const playerChoice1 = document.querySelectorAll('.column1');

function init () {
    render();
};

function render() {

};

function updateBoard() {
    playerChoice.forEach((Choice, index) =>{
    Choice.innerText = board[index];
    });
}

// function updateBoard1() {
//     playerChoice1.forEach((Choice1, index) =>{
//     Choice1.innerText = board1[index];
//     });
// }

function handleClick(event) {
    const squareIndex = event.target.id;
    placePiece (squareIndex);
}

const sect = document.querySelector('section');
const btn = document.querySelector('.column');

let currentColorIndex = -1;

btn.addEventListener('click', () =>{
    const nextColorIndex = ++currentColorIndex % colorChoice.length;
    sect.style.color = colorChoice[nextColorIndex];
});


