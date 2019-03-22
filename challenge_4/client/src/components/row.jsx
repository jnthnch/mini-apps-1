import React from 'react';


import Square from './Square.jsx'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowNum: this.props.rowNum
    }
  }

  render() {
    return (
      <div style={divStyle}>
        <Square x={0} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board}/>
        <Square x={1} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
        <Square x={2} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
        <Square x={3} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
        <Square x={4} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
        <Square x={5} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
        <Square x={6} y={this.props.rowNum} handleClick={this.props.handleClick} currentPlayer={this.props.currentPlayer} board={this.props.board} />
      </div>
    )
  }

}

export default Row;