import React from "react";
import Button from "../Button/Button";
import ModalLogin from "../Modal/ModalLogin";
import useMedia from "../../hooks/useMedia";
import useToggle from "../../hooks/useToggle";
import Logo from "./Logo";
import MenuHamburger from "./MenuHamburger";
import NavMenu from "./NavMenu";

const Header = () => {
  const [modal, setModal] = useToggle(false);
  const [menu, setMenu] = useToggle(false);
  const mobile = useMedia("(max-width: 1024px)");

  function toggleGetTicketModal() {
    setModal();
    if (menu) {
      setMenu();
    }
  }

  function toggleMenuMobile() {
    if (mobile) {
      setMenu();
    }
  }

  return (
    <>
      <header className="container justify-between py-8 mb-16">
        <Logo isOpen={menu} />
        <MenuHamburger onClick={toggleMenuMobile} isOpen={menu} />
        <NavMenu isMenuOpen={menu} toggleMenu={toggleMenuMobile}>
          <Button color={"bg-red"} onClick={toggleGetTicketModal}>
            Get a ticket
          </Button>
        </NavMenu>
      </header>
      <ModalLogin modal={modal} setModal={setModal} />
    </>
  );
};

export default Header;
