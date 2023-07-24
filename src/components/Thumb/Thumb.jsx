import React from "react";
import thumb from "../../assets/images/thumb.jpg";
const Thumb = () => {
  return (
    <div className="relative">
      <div className="after:content-[''] after:bg-play after:w-[55px] after:h-[66px] after:absolute flex justify-center items-center">
        <img src={thumb} alt="Thumbnail video" />
        </div>
    </div>
  );
};

export default Thumb;
