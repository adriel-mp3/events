import { AboutCard } from "./partials/AboutCard";

export const AboutCards = ({ aboutCardsData }) => {
  
  return (
    <section className="overflow-x-auto ">
      <ul className="flex content-center 2xl:mb-0 mb-10 2xl:gap-0 gap-8 ">
        {aboutCardsData.map((data) => (
          <AboutCard data={data} key={data.title} />
        ))}
      </ul>
    </section>
  );
};
