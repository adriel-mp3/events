import React from "react";
import logo from "../../assets/images/logo.svg";

const Logo = ({ isOpen }) => {
  return (
    <div className="flex items-center gap-4 z-20">
      <img src={logo} alt="Events logo" />
      <span className="flex items-center gap-4 text-2xl-bold text-white-100 logo-separator">
        {isOpen ? "Menu" : "Events"}
      </span>
    </div>
  );
};

export default Logo;
