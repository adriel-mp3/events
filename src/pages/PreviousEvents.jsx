import React from "react";
import { PreviousCards } from "../components/Cards/PreviousCards/index";
import { previousCardsData } from '../utils/previousCardsData'
const PreviousEvents = () => {
  return (
    <main className="container">
      <PreviousCards previousCardsData={previousCardsData} />
    </main>
  );
};

export default PreviousEvents;
