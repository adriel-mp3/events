import React from "react";
import aboutData from "../../helper/aboutItems";
import AboutItem from "./AboutItem";

const AboutContent = () => {
  return (
    <section className="overflow-x-auto ">
      <ul className="flex content-center 2xl:mb-0 mb-10 2xl:gap-0 gap-8 ">
        {aboutData.map((card) => (
          <div key={card.title}>
            <AboutItem
              img={card.img}
              alt={card.alt}
              title={card.title}
              text={card.text}
              style={card.style}
            />
          </div>
        ))}
      </ul>
    </section>
  );
};

export default AboutContent;
