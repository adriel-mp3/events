import React from "react";

const AboutItem = ({ img, title, text, style, alt }) => {
  return (
    <li
      className={`bg-purple flex flex-col items-center min-w-[280px] py-[5rem] px-8 ${style}`}
    >
      <img className="mb-1" src={img} alt={alt} />
      <h2 className="text-yellow mb-2 text-2xl font-medium">{title}</h2>
      <p className="text-white-100 text-base text-center">{text}</p>
    </li>
  );
};

export default AboutItem;
