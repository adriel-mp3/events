import React from "react";
import thumb from "../../assets/images/thumb.jpg";
const Thumb = () => {
  return (
    <div className="relative after:content-[''] after:bg-play after:w-[55px] after:h-[66px] after:absolute flex items-center justify-center lg:mb-0 mb-10">
      <img
        src={thumb}
        alt="Thumbnail video"
      />
    </div>
  );
};

export default Thumb;
