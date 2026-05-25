import React from "react";

const Status = ({ winner, isXTurn, isDraw }) => {
  return (
    <div className="text-lg font-semibold tracking-wide ">
      <h2
        className={`
    ${winner === "X" ? "text-blue-400" : ""}
    ${winner === "O" ? "text-red-400" : ""}
    ${isDraw ? "text-yellow-400" : ""}
    ${!winner && !isDraw ? "text-white" : ""}
  `}
      >
        {winner
          ? `${winner} wins!`
          : isDraw
            ? "It's a draw!"
            : `Player "${isXTurn ? "X" : "O"}" turn`}
      </h2>
    </div>
  );
};

export default Status;
