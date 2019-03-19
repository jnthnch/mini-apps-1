var  currentBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var winCombos = [
    // horizontal
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonal
    [1, 5, 9],
    [3, 5, 7]
];

var winTallys = {
    'X': 0,
    'O': 0
}

var currentPlayer = 'X'

var playerOneName = prompt(`Player1, What's Your Name?`)
var playerTwoName = prompt(`Player2, What's Your Name?`)

// set up front-end display
document.getElementById('currentPlayerHeader').innerText = `Current Player: ${currentPlayer}`;
document.getElementById('x-win-tally').innerText = `${playerOneName} - X Win Count: 0` 
document.getElementById('o-win-tally').innerText = `${playerTwoName} - O Win Count: 0` 


var eventHandlers = {
    addMark(e) {
        var cellIdClicked = e.target.id;
        var currentPlayerMark = currentPlayer;
        if (eventHandlers.updateBoard(e, currentPlayerMark)) {

            eventHandlers.literallyUpdateBoard(cellIdClicked, currentPlayerMark);
            
            // check for winners before next move
            eventHandlers.checkForWinner(currentPlayer);
            // reset game if board is full
            
            if (eventHandlers.checkBoardFull() === true) {
                alert('GAME ENDS IN A TIE');
                eventHandlers.resetGame();
            }
            //change currentPlayer
            eventHandlers.toggleCurrentPlayer();
        } else {
            alert ('INVALID MOVE, TRY AGAIN')
        }

        //update board's current player on-screen
        document.getElementById('currentPlayerHeader').innerText = `Current Player: ${currentPlayer}`;
    },

    literallyUpdateBoard(cellIdClicked, playerMark) {
        document.getElementById(cellIdClicked).append(playerMark)
    },

    // updates the back-end board
    updateBoard(e, currentMark) {
        var cellIdClicked = e.target.id
        // cell-5
        var cellInteger = parseInt(cellIdClicked.split('-')[1]);
        // 5
        var boardPosition = eventHandlers.cellPositionToBoardPosition(cellInteger);
        // [1, 1]
        if (eventHandlers.validPos(boardPosition)) {
            currentBoard[boardPosition[0]][boardPosition[1]] = currentMark;
            return true;
        } else {
            return false;
        }
    },

    cellPositionToBoardPosition(pos) {
        // take a position 1-9
        // return array with positions for currentBoard
        if (pos < 1 || pos > 9) {
            throw Error
        }
        var conversion = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2]
        }
        return conversion[pos]
    },

    validPos(pos) {
        if (currentBoard[pos[0]][pos[1]] === null ) {
            return true;
        } else {
            return false;
        }
    },

    isThereAWinner(playerMark) {
        for (let i = 0; i < winCombos.length; i++) {
            var checkCombo = winCombos[i]
            var count = 0;
            for (let j = 0; j < checkCombo.length; j++) {
                var position = checkCombo[j];
                var boardPosition = eventHandlers.cellPositionToBoardPosition(position)
                if (currentBoard[boardPosition[0]][boardPosition[1]] === playerMark) {
                    count += 1;
                }
            }
            if (count === 3) {
                return true; 
            }
        }

        return false;
    },

    checkForWinner(playerMark) {
        if (eventHandlers.isThereAWinner(playerMark)) {
            setTimeout(() => alert(`WINNER IS: ${playerMark}`), 250);
            
            eventHandlers.updateWinnerTally(playerMark);
            eventHandlers.toggleCurrentPlayer();
        } 
    },

    updateWinnerTally(playerMark) {
        winTallys[playerMark] += 1
        document.getElementById('x-win-tally').innerText = `${playerOneName} - X Win Count: ${winTallys['X']}` 
        document.getElementById('o-win-tally').innerText = `${playerTwoName} - O Win Count: ${winTallys['O']}` 
    },

    checkBoardFull() {
        for(let i = 0; i < currentBoard.length; i++) {
            // check each row for null space
            if (currentBoard[i].some(function(space) {
                return space === null
            })) {
                return false;
            }
        }
        return true;
    },

    resetGame() {
        // clear back-end tables
        for(let i = 0; i < currentBoard.length; i++) {
            for(let j = 0; j < currentBoard[i].length; j++) {
                currentBoard[i][j] = null;
            }
        }
        // clear front-end
        var allCells = document.getElementsByClassName("table-cell")
        for (let j = 0; j < allCells.length; j++) {
            allCells[j].textContent = '';
        }    
    },

    toggleCurrentPlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }


};

document.addEventListener("click", function(e) {
    if (e.target.className === 'table-cell') {
        eventHandlers.addMark(e)
    }
});

document.getElementById('reset-game-button').addEventListener("click", function() {
    eventHandlers.resetGame();
})