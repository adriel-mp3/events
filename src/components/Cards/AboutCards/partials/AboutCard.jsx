import React from "react";

export const AboutCard = ({ data }) => {
  return (
    <li
      className={`bg-purple flex flex-col items-center min-w-[280px] py-[5rem] px-8 ${data.style}`}
    >
      <img className="mb-1" src={data.img} alt={data.alt} />
      <h2 className="text-yellow mb-2 text-2xl font-medium">{data.title}</h2>
      <p className="text-white-100 text-base text-center">{data.text}</p>
    </li>
  );
};
