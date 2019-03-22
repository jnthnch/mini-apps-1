import React from 'react';
import ConnectFour from './connectFour.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPlayer: 'red',
      currentBoard: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ]
    }

    this.updateBoard = this.updateBoard.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.dropPieceDownPosition = this.dropPieceDownPosition.bind(this);
    this.isColumnFilled = this.isColumnFilled.bind(this);
    this.submitWinner = this.submitWinner.bind(this);
  }

  // might not need
  switchPlayer() {
    this.setState(state => ({
      currentPlayer: state.currentPlayer === 'red' ? 'blue' : 'red'
    }))
  }

  // when someone picks a row, 
  dropPieceDownPosition(position) {
    var column = position[1];
    var board = this.state.currentBoard
    if (this.isColumnFilled(position)) {
      alert('THIS COLUMN IS FULL');
      return;
    }
    var newPosition;
    for (let i = 0; i < board.length; i++) {
      
      if (board[i][column]) {
        newPosition = [i - 1, column];
        return newPosition
      }
    }
    newPosition = [board.length - 1, column];
    return newPosition
  }

  isColumnFilled(position) {
    var column = position[1];
    var board = this.state.currentBoard;
    if (board[0][column]) {
      return true;
    } else {
      return false;
    }
  }


  updateBoard(position) {
    console.log('inside updater!')

    var newPosition = this.dropPieceDownPosition(position);
    console.log(newPosition);
    var row = newPosition[0];
    var column = newPosition[1]
    var oldBoard = this.state.currentBoard.slice();
    oldBoard[row][column] = this.state.currentPlayer;
    this.setState({
      currentPlayer: this.state.currentPlayer === 'red' ? 'blue' : 'red',
      currentBoard: oldBoard
    })
  } 

  isThereAWinner() {
    
  }

  submitWinner(winner) {
    console.log('Winner is:', this.state.currentPlayer)
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
  }

  render() {
    return (
      <div>
        <h1>Connect Four Game</h1>
        <ConnectFour handleClick={this.updateBoard} currentPlayer={this.state.currentPlayer} board={this.state.currentBoard}/>
        <button onClick={this.submitWinner}>winner button</button>
      </div>

    )
  }
}

export default App;