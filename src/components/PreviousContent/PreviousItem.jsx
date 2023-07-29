import React from "react";

const PreviousItem = ({ label, event, img, alt }) => {
  return (
    <div className="min-w-[360px]">
      <h2 className="text-center text-4xl-semibold mb-4 text-yellow">
        {label}
      </h2>
      <img src={img} alt={alt} />
      <p className="bg-yellow text-purple-100 text-center py-4 text-xl-bold">
        {event}
      </p>
    </div>
  );
};

export default PreviousItem;
