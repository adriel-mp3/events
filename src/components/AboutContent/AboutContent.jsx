import React from "react";
import location from "../../assets/images/location.svg";
import hobbies from "../../assets/images/hobbies.svg";
import presentation from "../../assets/images/presentation.svg";
import AboutItem from "./AboutItem";

const AboutContent = () => {
  return (
    <section className="overflow-x-auto ">
      <ul className="flex content-center 2xl:mb-0 mb-10 2xl:gap-0 gap-8 ">
        <AboutItem
          style="2xl:px-[2.5rem] 2xl:py-[4.38rem] 2xl:my-8 px-8 py-[5rem] min-w-[280px]"
          img={location}
          alt="Location icon"
          title="Location"
          text="Welcome to Villa Lorem, the perfect place to host memorable events!
            Situated in a picturesque setting surrounded by lush nature, Villa
            Lorem is the ideal destination."
        />
        <AboutItem
          style="2xl:px-[2.5rem] 2xl:py-[5.12rem] 2xl:my-4 px-8 py-[5rem] min-w-[280px]"
          img={hobbies}
          alt="Hobbies icon"
          title="Hobbies"
          text="Join our fantastic event and explore exciting hobbies! From
          thrilling outdoor adventures to creative workshops, there's
          something for everyone!"
        />
        <AboutItem
          style="2xl:px-[2.5rem] 2xl:py-[5.81rem] px-8 py-[5rem] min-w-[280px]"
          img={presentation}
          alt="Presentation icon"
          title="Presentation"
          text="Spectacular event! Get ready to be amazed by breathtaking
          performances, captivating artists, and a night filled with magic and
          wonder."
        />
      </ul>
    </section>
  );
};

export default AboutContent;
