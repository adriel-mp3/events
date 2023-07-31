import React from "react";

const AboutCard = ({ about }) => {
  return (
    <li
      className={`bg-purple flex flex-col items-center min-w-[280px] py-[5rem] px-8 ${about.style}`}
    >
      <img className="mb-1" src={about.img} alt={about.alt} />
      <h2 className="text-yellow mb-2 text-2xl font-medium">{about.title}</h2>
      <p className="text-white-100 text-base text-center">{about.text}</p>
    </li>
  );
};

export default AboutCard;
