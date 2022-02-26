import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: Array(10).fill(this.initRow())
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8080/machines';
    fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((data) => this.initBoard(data));
  }

  initBoard(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      this.state.squares[10 * (data[i].location.y - 1) + data[i].location.x - 1] = 'O'
    }
  }

  initRow() {
    const cells = Array(10).fill(null);
    return cells.map((cell) => <div className="cell">cell</div>)
  }

  renderBoardRow(i) {
    for (let j = 0; j < 10; j++) {
      this.renderSquare(10*j + i);
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="game-board">
        {this.state.rows}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);