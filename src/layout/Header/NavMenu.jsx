import React from "react";
import navLinksData from "../../utils/headerNavLinks";
import { NavLink, useLocation } from "react-router-dom";

const NavMenu = ({ isMenuOpen, toggleMenu, children }) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`lg:flex items-center lg:gap-6 ${
        isMenuOpen
          ? "flex flex-col text-center gap-4 bg-purple-100 w-screen h-[100%] absolute z-10 left-0 top-0 pt-[160px]"
          : "hidden"
      }`}
    >
      <ul
        className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:items-center    text-base-bold text-white-100"
        onClick={toggleMenu}
      >
        {navLinksData.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              end={link.end}
              className={`py-1 ${
                pathname === link.to ? "border-b-[3px] border-red" : ""
              }`}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};

export default NavMenu;
