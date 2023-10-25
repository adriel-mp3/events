import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Logo = ({ label }) => {
  return (
    <Link to="/" className="flex items-center gap-4 z-20">
      <img src={logo} alt="Events logo" />
      <span className="flex items-center gap-4 text-2xl-bold text-white-100 logo-separator">
        {label}
      </span>
    </Link>
  );
};

export default Logo;
