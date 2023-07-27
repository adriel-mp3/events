import React from "react";

const Button = ({ children, style, onClick }) => {
  return (
    <button
      className={`text-center text-white py-2 px-6 text-white-100 font-medium ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
