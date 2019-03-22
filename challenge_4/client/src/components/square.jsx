import React from 'react';

function Square(props) {
  var position = [props.y, props.x];
  var row = props.y;
  var column = props.x;
  var color = props.board[row][column];
  var divStyle = {
    padding: "1% 0",
    color: `${color}`
  }  
  // [row, column]
  return (
    <div style={divStyle}>
      <div onClick={ () => {props.handleClick(position)} }> {color ? color : 'empty'} </div>
    </div>
  )
}

export default Square;