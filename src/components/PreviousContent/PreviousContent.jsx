import React from "react";
import previousCardsData from "../../utils/previousCardsData";
import PreviousCard from "./PreviousCard";

const PreviousContent = () => {
  return (
    <section className="flex justify-between gap-8 overflow-x-auto mb-10">
      {previousCardsData.map((card) => (
        <PreviousCard data={card} />
      ))}
    </section>
  );
};

export default PreviousContent;
