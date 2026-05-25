import React from "react";
import Square from "./Square";

const Board = ({ board, onSquareClick }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
