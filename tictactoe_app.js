const gameBoard = document.querySelector("#game-board");
const allBoardBoxes = [...document.querySelectorAll(".game__board--box")];
const winnerBox = document.querySelector("#game__winnerboard--winner");
const resetBtn = document.querySelector("#game__winnerboard--reset");
const winnerBoard = document.querySelector("#game__winnerboard");

const playerX = "X";
const playerO = "O";
let actualPlayer = null;


document.addEventListener("DOMContentLoaded", () => {
    gameInit();
})

const gameInit = function() {
    pickPlayer();
    gameBoard.classList.add(actualPlayer);
    takeBoxes();
}

const pickPlayer = function() {
    return actualPlayer = (Math.floor(Math.random()*20) % 2) === 0 ? playerX : playerO
}

const takeBoxes = function() {
    allBoardBoxes.forEach(box => {
        box.addEventListener("click", handleClick);
    })
}

const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const checkWinningCombinations = function(actualPlayer) {
    return winningCombinations.some(combinations => {
        return combinations.every(combination => {
            return allBoardBoxes[combination].classList.contains(actualPlayer)
        })
    })
}

const isDraw = function(){
    return allBoardBoxes.every(box => {
        return box.classList.contains(playerX) || box.classList.contains(playerO)
    })
}
const resetBtnClicked = function() {
    location.reload();
}

const handleClick = function(){
    this.classList.add(actualPlayer);
    gameBoard.classList.remove(actualPlayer);
    if(checkWinningCombinations(actualPlayer) === true){
        winnerBoard.classList.remove("game__winnerboard--disabled");
        winnerBoard.classList.add("game__winnerboard")
        winnerBox.innerHTML = `Wygrał: ${actualPlayer}`;
        resetBtn.addEventListener("click", resetBtnClicked)
    }
    else if (isDraw()){
        winnerBoard.classList.remove("game__winnerboard--disabled");
        winnerBoard.classList.add("game__winnerboard")
        winnerBox.innerHTML = `Remis`;
        resetBtn.addEventListener("click", resetBtnClicked)
    }


    this.removeEventListener("click", handleClick)
    actualPlayer = (actualPlayer === playerX ? playerO : playerX);
    gameBoard.classList.add(actualPlayer);
}