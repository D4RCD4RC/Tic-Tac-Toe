import { useEffect, useState } from 'react';
import './app.scss';
import Square from './Components/Square';

const cls = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [game, updateGame] = useState(cls);
  const [changeX, updateX] = useState(false);

  const clicked = (index) => {
    let strings = Array.from(game);
    if (strings[index]) return;
    strings[index] = changeX ? 'X' : '0';
    updateX(!changeX);
    updateGame(strings);
  };

  const clearGame = () => {
    updateGame(cls);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`The winner is ***" ${winner} "***`);
    }
  }, [game]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      'Class: App, Function: checkWinner ==',
      game[0],
      game[1],
      game[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  };

  return (
    <div className='container'>
      <p className='title'>Tic Tac Toe</p>
      <div className='row'>
        <Square
          className='borderBottonRight'
          onClick={() => clicked(0)}
          state={game[0]}
        />
        <Square
          className='borderBottonRight'
          onClick={() => clicked(1)}
          state={game[1]}
        />
        <Square
          className='borderBottom'
          onClick={() => clicked(2)}
          state={game[2]}
        />
      </div>
      <div className='row'>
        <Square
          className='borderBottonRight'
          onClick={() => clicked(3)}
          state={game[3]}
        />
        <Square
          className='borderBottonRight'
          onClick={() => clicked(4)}
          state={game[4]}
        />
        <Square
          className='borderBottom'
          onClick={() => clicked(5)}
          state={game[5]}
        />
      </div>
      <div className='row'>
        <Square
          className='borderRight'
          onClick={() => clicked(6)}
          state={game[6]}
        />
        <Square
          className='borderRight'
          onClick={() => clicked(7)}
          state={game[7]}
        />
        <Square onClick={() => clicked(8)} state={game[8]} />
      </div>
      <button className='clearButton' onClick={clearGame}>
        Clear Game
      </button>
    </div>
  );
}

export default App;
