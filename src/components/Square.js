import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div>
      <button
        className={`
       w-28 h-28 text-5xl font-bold rounded-2xl 
    bg-white border border-zinc-200  shadow-md transition-all duration-150
     hover:shadow-xl hover:scale-105
    ${value === "X" ? "text-blue-500" : ""}
    ${value === "O" ? "text-red-400" : ""}
    ${!value ? "hover:bg-zinc-100 cursor-pointer" : "cursor-default"}
  `}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
