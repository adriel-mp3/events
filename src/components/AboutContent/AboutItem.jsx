import React from "react";

const AboutItem = ({ img, title, text, style, alt }) => {
  return (
    <li className={`bg-purple flex flex-col items-center ${style}`}>
      <img className="mb-1" src={img} alt={alt} />
      <h2 className="text-yellow mb-2 text-2xl font-medium">{title}</h2>
      <p className="text-white-100">{text}</p>
    </li>
  );
};

export default AboutItem;
