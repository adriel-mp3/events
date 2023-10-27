import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const ModalLogin = ({ modal, setModal }) => {
  function handleClickOutside(e) {
    const { target, currentTarget } = e;
    e.preventDefault();
    if (target === currentTarget) setModal((value) => !value);
  }

  return (
    modal && (
      <div
        onClick={handleClickOutside}
        className="min-w-full min-h-full z-10 flex top-0 left-0 fixed items-center justify-center bg-[rgba(0,0,0,.5)] px-10"
      >
        <div className=" bg-white-100 py-16 px-12 max-w-2xl shadow-modal">
          <h2 className="text-purple-100 font-semibold text-3xl mb-8">
            Register now and receive your ticket in a second!
          </h2>
          <form className="flex flex-col gap-4">
            <Input label={"Full name*"} placeholder={"Fulani of Silva"} />
            <Input label={"Your email:*"} placeholder={"yourname@email.com"} />
            <Input label={"Password:*"} placeholder={"12345...."} />
            <Button style="bg-purple-100 mt-4">Submit</Button>
          </form>
          <Button color="bg-purple-80" size="full">Submit</Button>
        </div>
      </div>
    )
  );
};
