import React from "react";
import open from "../../assets/images/modal-arrow.svg";

const FooterFormButton = ({ isOpen, onClick }) => {
  return (
    <button className="block lg:hidden">
      <img
        className={`max-w-[40px] max-h-[40px] ${isOpen ? "rotate-180" : ""}`}
        src={open}
        onClick={onClick}
        alt="modal arrow"
      />
    </button>
  );
};

export default FooterFormButton;
