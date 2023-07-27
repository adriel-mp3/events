import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import open from "../../assets/images/modal-arrow.svg";
import useMedia from "../../hooks/useMedia";
import useToggle from "../../hooks/useToggle";
const Footer = () => {
  const mobile = useMedia("(max-width: 1024px)");
  const [modal, setModal] = useToggle();

  React.useEffect(() => {
    if (!mobile && modal) {
      setModal()
    }
  }, [mobile, modal, setModal])

  return (
    <div className="bg-white-100 border-l-[10px] border-green px-10">
      <footer
        className={`${
          modal ? "flex-col gap-4" : "items-center gap-8 flex-row"
        } flex justify-between max-w-[1600px] mx-auto py-8 font-medium`}
      >
        <div
          className={`flex gap-2 ${
            modal ? "justify-between " : "justify-between w-screen"
          } `}
        >
          <p className="2xl:text-3xl text-2xl text-purple-100">
            Already bought the ticket? Check availability now!
          </p>
          {mobile && (
            <button>
              <img
                className={`max-w-[40px] max-h-[40px] ${modal ? 'rotate-180' : ''}`}
                src={open}
                onClick={setModal}
                alt="modal arrow"
              />
            </button>
          )}
        </div>
        <form className={`flex lg:gap-4 gap-4 ${modal ? "flex-col" : "hidden"} lg:flex`}>
          <Input placeholder="Write your username..." />
          <Input type="password" placeholder="Write your password..." />
          <Button style="bg-green">Search</Button>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
