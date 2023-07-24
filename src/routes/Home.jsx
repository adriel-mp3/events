import React from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import Thumb from "../components/Thumb/Thumb";

const Home = () => {
  return (
    <main className="grid grid-cols-2 max-w-[1600px] mx-auto justify-items-start items-center">
      <FeaturedContent />
      <Thumb/>
    </main>
  );
};

export default Home;
