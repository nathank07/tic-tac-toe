const board = document.querySelector('#board');
const square = board.querySelectorAll('.square');
let gameBoard = ["", "", "",
                 "", "", "",
                 "", "", "",];
let player1Move = true;
let player1 = "";
let player2 = "";
square.forEach((square, squareIndex) => {
    square.addEventListener('click', () => {
        console.log(squareIndex);
        if(gameBoard[squareIndex] === ""){
            square.innerHTML = `${(player1Move ? "x" : "o")}`;
            gameBoard[squareIndex] = `${(player1Move ? "x" : "o")}`;
            player1Move = !player1Move
            console.log("gameboard" + gameBoard + ` win is ${checkForWin()}`)
            console.log(checkForWin())
        }
    });
});

function checkForWin(){
    populated = 0;
    rowcount = Math.sqrt(gameBoard.length)
    gameBoard2D = [];
    for(let i = 0; i < gameBoard.length; i += rowcount){
        const row = gameBoard.slice(i, i + rowcount);
        gameBoard2D.push(row)
        console.log(gameBoard2D);
    }
    gameBoard2D.forEach(row => {
        if(row.every(square => square === "x") || row.every(square => square === "o")){
            console.log("bazinga");
            return true;
        }
    })
    if(populated < rowcount){
        return false;
    }
    else{
        return true;
    }
}
console.log(Math.sqrt(gameBoard.length));
console.log(checkForWin());
console.log(["x", "x", "x"].every(square => square === "x"));
