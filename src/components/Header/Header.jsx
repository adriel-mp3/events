import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/images/logo.svg";
import ModalLogin from "../Modal/ModalLogin";
import open from "../../assets/images/open.svg";
import close from "../../assets/images/close.svg";
import useMedia from "../../hooks/useMedia";
import useToggle from "../../hooks/useToggle";

const Header = () => {
  const { pathname } = useLocation();
  const [modal, setModal] = useToggle(false);
  const [menu, setMenu] = useToggle(false);
  const mobile = useMedia("(max-width: 1024px)");

  function handleClickGetTicket() {
    setModal();
    if (menu) {
      setMenu();
    }
  }

  function handleClickMenu() {
    if (mobile) {
      setMenu();
    }
  }

  return (
    <div className="justify-center w-screen ">
      <header className="flex max-w-[1600px] justify-between py-8 mx-auto mb-16 px-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Events logo" />
          <span className="flex items-center gap-4 text-2xl text-white-100 font-medium before:content-[''] before:block before:w-[0.25rem] before:h-8 before:bg-white-100">
            Events
          </span>
        </div>
        <button className={"lg:hidden block"} onClick={handleClickMenu}>
          <img src={menu ? close : open} alt="Menu icon" />
        </button>
        <nav
          className={`lg:flex items-center lg:gap-6 ${
            menu
              ? "flex flex-col text-center gap-4 bg-purple-100 w-screen h-[100%] absolute z-20 left-0 top-0 pt-9"
              : "hidden"
          }`}
        >
          {menu && (
            <div className="flex items-center gap-4 w-screen justify-between">
              <div className="flex items-center gap-4 px-10">
                <img src={logo} alt="Events logo" />
                <span className="flex items-center gap-4 text-2xl text-white-100 font-medium before:content-[''] before:block before:w-[0.25rem] before:h-8 before:bg-white-100">
                  Menu
                </span>
              </div>
              <button className="block pr-10" onClick={handleClickMenu}>
                <img src={menu ? close : open} alt="Menu icon" />
              </button>
            </div>
          )}
          <ul
            className="flex lg:flex-row flex-col gap-4 lg:items-center text-base text-white-100 font-medium lg:gap-6"
            onClick={handleClickMenu}
          >
            <li>
              <NavLink
                to="/"
                end
                className={`py-2   ${
                  pathname === "/" ? "border-b-[3px] border-red" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`py-2 ${
                  pathname === "/about" ? "border-b-[3px] border-red" : ""
                }`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/previous-events"
                className={`py-2 ${
                  pathname === "/previous-events"
                    ? "border-b-[3px] border-red"
                    : ""
                }`}
              >
                Previous Events
              </NavLink>
            </li>
          </ul>
          <Button
            style={`bg-red ${menu ? "justify-start align mt-10" : ""}`}
            onClick={handleClickGetTicket}
          >
            Get a ticket
          </Button>
        </nav>
      </header>
      <ModalLogin modal={modal} setModal={setModal} />
    </div>
  );
};

export default Header;
