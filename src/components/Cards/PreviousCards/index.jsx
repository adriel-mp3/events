import { PreviousCard } from "./partials/PreviousCard";

export const PreviousCards = ({ previousCardsData }) => {
  return (
    <section className="flex justify-between gap-8 overflow-x-auto mb-10">
      {previousCardsData.map((card) => (
        <PreviousCard data={card} />
      ))}
    </section>
  );
};
