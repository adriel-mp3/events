import React from "react";
import PreviousItem from "./PreviousItem";
import networking from "../../assets/images/networking.jpg";
import product from "../../assets/images/product.jpg";
import science from "../../assets/images/science.jpg";
import hard from "../../assets/images/hard.jpg";

const PreviousContent = () => {
  return (
    <section className="flex justify-between gap-8 overflow-x-auto mb-10">
      <PreviousItem
        label="2019"
        event="Networking Project"
        img={networking}
        alt="Networking event photo"
      />
      <PreviousItem
        label="2020"
        event="Science Hub | WEF"
        img={product}
        alt="Science Hu event photo"
      />
      <PreviousItem
        label="2021"
        event="#ProductCon | London"
        img={science}
        alt="#ProductCon event photo"
      />
      <PreviousItem
        label="2022"
        event="#HardCoreCoding"
        img={hard}
        alt="#HardCoreCoding event photo"
      />
    </section>
  );
};

export default PreviousContent;
