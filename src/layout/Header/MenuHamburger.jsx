import React from "react";
import open from "../../assets/images/open.svg";
import close from "../../assets/images/close.svg";

const MenuHamburger = ({ isOpen, onClick }) => {
  
  return (
    <button className={`${isOpen ? 'block' : 'lg:hidden'} block z-20`} onClick={onClick}>
      <img src={isOpen ? close : open} alt="Menu icon" />
    </button>
  );
};

export default MenuHamburger;
