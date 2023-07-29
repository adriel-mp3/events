import React from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import Thumb from "../components/Thumb/Thumb";

const Home = () => {
  return (
    <main className="grid lg:grid-cols-2 md:grid-cols-1 max-w-[1600px] mx-auto justify-items-start px-10 gap-20 xl:mb-0 sm:mb-8">
      <FeaturedContent />
      <Thumb />
    </main>
  );
};

export default Home;
