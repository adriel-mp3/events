import { NavLink, useLocation } from "react-router-dom";

import { useToggle } from "../../../hooks/useToggle";

import { Button } from "../../../components/Button";
import { ModalLogin } from "../../../components/Modal/ModalLogin";

export const NavMenu = ({ isMenuOpen, toggleMenu, links }) => {
  const [modal, setModal] = useToggle(false);
  const { pathname } = useLocation();

  const activeLinkStyle = "border-b-[3px] border-red"

  return (
    <>
      <nav
        className={`lg:flex items-center lg:gap-6 ${isMenuOpen
          ? "flex flex-col text-center gap-4 bg-purple-100 w-screen h-[100%] absolute z-10 left-0 top-0 pt-[160px]"
          : "hidden"
          }`}
      >
        <ul
          className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:items-center text-base-bold text-white-100"
          onClick={toggleMenu}
        >
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.end}
                className={`py-1 ${pathname === link.to ? activeLinkStyle : ""}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button color={"bg-red"} onClick={setModal} >
          Get a ticket
        </Button>
      </nav>
      <ModalLogin modal={modal} setModal={setModal} />
    </>

  );
};


