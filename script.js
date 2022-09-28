const boardDiv = document.querySelector('#board');
const square = boardDiv.querySelectorAll('.square');
let player1Move = true;

const Board = (gridSize) => {
    function createBoard(){
        let boardArr = [];
        for(let i = 0; i < (gridSize * gridSize); i++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('click', () => {
                if(square.innerText === ""){
                    square.innerHTML = `${(player1Move ? "x" : "o")}`;
                    player1Move = !player1Move;
                    board.checkForWin();
                }
            });
            boardDiv.append(square)
            boardArr.push(square);
        }
        return boardArr;
    }
    let gameBoard = createBoard(gridSize);
    const rowCoordinates = () => {
        let gameBoard2D = [];
        for(let i = 0; i < gameBoard.length; i += gridSize){
            const row = gameBoard.slice(i, i + gridSize);
            gameBoard2D.push(row)
        }
        return gameBoard2D;
    }
    const columnCoordinates = () => {
        let gameBoard2D = rowCoordinates();
        let gameBoardColumn = [];
        let gameBoardColumns = [];
        for(let i = 0; i < gameBoard2D.length; i += 1){
            for(let j = 0; j < gameBoard2D.length; j += 1){
                gameBoardColumn.push(gameBoard2D[j][i]);
                if(gameBoardColumn.length === gridSize){
                    gameBoardColumns.push(gameBoardColumn)
                    gameBoardColumn = [];
                }
            }
        }
        return gameBoardColumns;
    }
    const lDiagCoordinates = () => {
        let gameBoard2D = rowCoordinates();
        let gameBoardDiags = [];
        for(let i = 0; i < gameBoard2D.length; i += 1){
            gameBoardDiags.push(gameBoard2D[i][i]);

        }
        return gameBoardDiags;
    }
    const rDiagCoordinates = () => {
        let gameBoard2D = rowCoordinates();
        let gameBoardDiags = [];
        let j = 0;
        for(let i = gridSize - 1; i >= 0; i -= 1){
            gameBoardDiags.push(gameBoard2D[i][j])
            j+=1;
        }
        return gameBoardDiags;
    }
    const checkForWin = () => {
        board.rowCoordinates().forEach(row => {
            if(row.every(square => square.innerText === "x") || row.every(square => square.innerText === "o")){
                console.log(row[0].innerHTML + " wins!");
            }
        });
        board.columnCoordinates().forEach(column => {
            if(column.every(square => square.innerText === "x") || column.every(square => square.innerText === "o")){
                console.log(column[0].innerHTML + " wins!");
            }
        });
        if(lDiagCoordinates().every(square => square.innerText === "x") || lDiagCoordinates().every(square => square.innerText === "o")){
            console.log(lDiagCoordinates()[0].innerHTML + " wins!");
        }
        if(rDiagCoordinates().every(square => square.innerText === "x") || rDiagCoordinates().every(square => square.innerText === "o")){
            console.log(rDiagCoordinates()[0].innerHTML + " wins!");
        }
        if(gameBoard.every(square => square.innerText !== "")){
            console.log("Tie");
        }
    }
    return {createBoard, rowCoordinates, columnCoordinates, lDiagCoordinates, rDiagCoordinates, checkForWin}
}

const board = Board(3);
