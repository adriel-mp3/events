import React from "react";

const PreviousCard = ({ data }) => {
  return (
    <div className="min-w-[360px]">
      <h2 className="text-center text-4xl-semibold mb-4 text-yellow">
        {data.label}
      </h2>
      <img src={data.img} alt={data.alt} />
      <p className="bg-yellow text-purple-100 text-center py-4 text-xl-bold">
        {data.event}
      </p>
    </div>
  );
};

export default PreviousCard;
