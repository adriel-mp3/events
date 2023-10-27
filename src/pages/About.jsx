import { useMedia } from '../hooks/useMedia';

import { Hero } from "../components/Hero/index";
import { AboutCards } from '../components/Cards/AboutCards/index';

import { aboutCardsData } from '../utils/aboutCardsData';

const About = () => {
  const screen = useMedia('(min-width:1535px)')

  return (
    <main className="container grid 2xl:grid-cols-2 2xl:justify-items-end items-center">
      <AboutCards aboutCardsData={aboutCardsData} />
      {screen && <Hero />}
    </main>
  );
};

export default About;
