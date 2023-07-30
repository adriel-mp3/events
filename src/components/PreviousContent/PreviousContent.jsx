import React from "react";
import PreviousItem from "./PreviousItem";
import previousItemsData from "../../helper/previousItems";

const PreviousContent = () => {
  return (
    <section className="flex justify-between gap-8 overflow-x-auto mb-10">
      {previousItemsData.map((item) => (
        <PreviousItem
          key={item.event}
          label={item.label}
          event={item.event}
          img={item.img}
          alt={item.alt}
        />
      ))}
    </section>
  );
};

export default PreviousContent;
