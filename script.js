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
            console.log(gameBoard)
        }
    });
});


