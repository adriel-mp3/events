import React from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import AboutContent from "../components/AboutContent/AboutContent";
import useMedia from '../hooks/useMedia'
const About = () => {
  const screen = useMedia('(min-width:1535px)') 
  
  return (
    <main className="grid 2xl:grid-cols-2 max-w-[1600px] mx-auto 2xl:justify-items-end items-center px-10">
      <AboutContent />
      {screen && <FeaturedContent />}
    </main>
  );
};

export default About;
