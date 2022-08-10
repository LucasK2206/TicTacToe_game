const gameBoard = document.querySelector("#game-board");
const allBoardBoxes = [...document.querySelectorAll(".game__board--box")];
const winnerBox = document.querySelector(".game__winnerboard--winner");
const resetBtn = document.querySelector("#game__winnerboard--reset");

const playerX = "X";
const playerO = "O";
let actualPlayer = null;

function handleClick(){
    this.classList.add(actualPlayer);
}

function addEventListeners() {
    allBoardBoxes.forEach(box => {
        box.addEventListener("click", handleClick);
    })
}
function pickPlayer() {
    return actualPlayer = (Math.floor(Math.random()*20) % 2) === 0 ? playerX : playerO
}
function gameInit() {
    pickPlayer();
    gameBoard.classList.add(actualPlayer);
    addEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
    gameInit();
})

