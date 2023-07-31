import React from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import AboutCards from "../components/AboutContent/AboutContent";
import useMedia from '../hooks/useMedia'

const About = () => {
  const screen = useMedia('(min-width:1535px)') 
  
  return (
    <main className="container grid 2xl:grid-cols-2 2xl:justify-items-end items-center">
      <AboutCards />
      {screen && <FeaturedContent />}
    </main>
  );
};

export default About;
