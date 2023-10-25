import React from "react";
import useMedia from "../../hooks/useMedia";
import useToggle from "../../hooks/useToggle";
import ModalForm from "../Modal/ModalForm";
import FooterFormButton from "../Button/FooterFormButton";

const Footer = () => {
  const mobile = useMedia("(max-width: 1024px)");
  const [modal, setModal] = useToggle();

  React.useEffect(() => {
    if (!mobile && modal) {
      setModal();
    }
  }, [mobile, modal, setModal]);

  return (
    <div className="bg-white-100 border-l-[10px] border-green">
      <footer
        className={`flex justify-between container py-8 font-medium ${
          modal ? "flex-col gap-4" : "items-center gap-8 flex-row"
        }`}
      >
        <div
          className={`flex gap-2 ${
            modal ? "justify-between " : "justify-between w-screen"
          } `}
        >
          <p className="2xl:text-3xl text-2xl-bold text-purple-100">
            Already bought the ticket? Check availability now!
          </p>
          <FooterFormButton isOpen={modal} onClick={setModal} />
        </div>
        <ModalForm isOpen={modal} />
      </footer>
    </div>
  );
};

export default Footer;
