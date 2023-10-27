import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const ModalForm = ({ isOpen }) => {

  return (
    <form
      className={`flex lg:gap-4 gap-4 ${isOpen ? "flex-col" : "hidden"} lg:flex`}>
      <Input placeholder="Write your username..." />
      <Input type="password" placeholder="Write your password..." />
      <Button color="bg-green">Search</Button>
    </form>
  );
};

