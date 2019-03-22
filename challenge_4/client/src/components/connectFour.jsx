import React from 'react';
import Row from './Row.jsx';

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center'
// };

function ConnectFour(props) {
  return (
    <div>
      <Row handleClick={props.handleClick} rowNum={0} currentPlayer={props.currentPlayer} board={props.board} />
      <Row handleClick={props.handleClick} rowNum={1} currentPlayer={props.currentPlayer} board={props.board} />
      <Row handleClick={props.handleClick} rowNum={2} currentPlayer={props.currentPlayer} board={props.board} />
      <Row handleClick={props.handleClick} rowNum={3} currentPlayer={props.currentPlayer} board={props.board} />
      <Row handleClick={props.handleClick} rowNum={4} currentPlayer={props.currentPlayer} board={props.board} />
      <Row handleClick={props.handleClick} rowNum={5} currentPlayer={props.currentPlayer} board={props.board} />
    </div>
  )
}

export default ConnectFour;