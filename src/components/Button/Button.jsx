import React from "react";

const Button = ({ children, color, onClick }) => {
  return (
    <button
      className={`text-center py-2 px-6 text-white-100 text-base-bold ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
