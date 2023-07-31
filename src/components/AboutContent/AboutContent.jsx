import React from "react";
import aboutCardsData from "../../utils/aboutCardsData";
import AboutCard from "./AboutItem";

const AboutCards = () => {
  return (
    <section className="overflow-x-auto ">
      <ul className="flex content-center 2xl:mb-0 mb-10 2xl:gap-0 gap-8 ">
        {aboutCardsData.map((data) => (
          <AboutCard about={data} key={data.title} />
        ))}
      </ul>
    </section>
  );
};

export default AboutCards;
