import useMedia from '../hooks/useMedia';

import { FeaturedContent } from "../components/FeaturedContent/FeaturedContent";
import { AboutCards } from '../components/AboutCards';

import { aboutCardsData } from '../utils/aboutCardsData';

const About = () => {
  const screen = useMedia('(min-width:1535px)')

  return (
    <main className="container grid 2xl:grid-cols-2 2xl:justify-items-end items-center">
      <AboutCards aboutCardsData={aboutCardsData} />
      {screen && <FeaturedContent />}
    </main>
  );
};

export default About;
