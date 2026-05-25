import React, { useState } from "react";
import Status from "./Status";
import Board from "./Board";

function checkWinner(board) {
  const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winnerPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  function handleClick(index) {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setScores((prev) => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1,
      }));
    }

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function restart() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-zinc-950 ">
      <h1 className="text-4xl font-bold text-white tracking-widest uppercase">
        Tic Tac Toe
      </h1>

      <div className="flex gap-8">
        <div className="bg-white/10 px-6 py-3 rounded-xl text-center">
          <p className="text-zinc-400 text-sm">Player X</p>
          <p className="text-blue-400 text-2xl font-bold">{scores.X}</p>
        </div>
        <div className="bg-white/10 px-6 py-3 rounded-xl text-center">
          <p className="text-zinc-400 text-sm">Player O</p>
          <p className="text-red-400 text-2xl font-bold">{scores.O}</p>
        </div>
      </div>

      <Status winner={winner} isXTurn={isXTurn} isDraw={isDraw} />
      <Board board={board} onSquareClick={handleClick} />
      <button
        className="px-8 py-3 bg-white text-zinc-900 font-semibold 
                   rounded-xl hover:bg-zinc-200 transition-all duration-200"
        onClick={restart}
      >
        Reset
      </button>
    </div>
  );
};

export default Game;
