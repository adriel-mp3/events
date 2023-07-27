import React from "react";

const FeaturedContent = () => {
  return (
    <section className="relative after:bg-arrow after:w-[100px] after:h-[100px] after:absolute after:top-[-30px] after:left-0  before:bg-arrow before:w-[100px] before:h-[100px] before:absolute before:bottom-0 before:right-0 before:rotate-180 p-8">
      <h1 className="2xl:text-7xl lg:text-[3.2rem] md:text-7xl sm:text-5xl text-4xl text-white-100 font-semibold xl:leading-tight lg:leading-tight md:leading-tight mb-2">
        Building
        <br /> a bright future <br />
        with technology
      </h1>
      <span className="text-yellow mb-2 block 2xl:text-2xl font-medium">
        Monday February 22, 2023 - 13:00hrs
      </span>
      <p className="text-gray font-medium max-w-md">
        Unlock boundless potential with technology at our cutting-edge event!
        Join us to shape a brighter future filled with innovation and growth
      </p>
    </section>
  );
};

export default FeaturedContent;
