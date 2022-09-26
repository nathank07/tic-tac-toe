const board = document.querySelector('#board');
const square = board.querySelectorAll('.square');

const player = (name, side) => {
    const place = () => {
        console.log(`placed ${side}`);
    }
    return {name, side, place};
};

const player1 = player('joe', 'x');
const player2 = player('john', 'o');


let player1Move = true;
square.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerHTML === ""){
            square.innerHTML = `${(player1Move ? "x" : "o")}`;
            player1Move = !player1Move
        }
    });
});


player1.place();