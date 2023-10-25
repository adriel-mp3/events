import React from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import Thumb from "../components/Thumb/Thumb";

const Home = () => {
  return (
    <main className="container grid lg:grid-cols-2 md:grid-cols-1 justify-items-start gap-20 xl:mb-0 sm:mb-8">
      <FeaturedContent />
      <Thumb />
    </main>
  );
};

export default Home;
