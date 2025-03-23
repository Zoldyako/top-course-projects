const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;

    function placeSymbol(x, y) {
        return board[x][y] = symbol;
    }
    
    return {name, placeSymbol}
}

function playRound(player, computer) {
    for (let i = 0; i <= 9; i++) { 
        player.placeSymbol(x, y);
        if (checkWinner('X') == true) break;
        
        computer.placeSymbol(x, y);
        if (checkWinner('O') == true) break;
    }
}


function checkWinner(player) {

    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}


const game = (() => {
    let player = Player('José', 'X');
    let computer = Player('Computer', 'O');

    playRound(player, computer);
})();

