import { Hero } from "../components/Hero/index";
import { Thumb } from "../components/Thumb/Thumb";

import thumb from "../assets/images/thumb.jpg";

const Home = () => {

  return (
    <main className="container grid lg:grid-cols-2 md:grid-cols-1 justify-items-start gap-20 xl:mb-0 sm:mb-8">
      <Hero />
      <Thumb thumb={thumb} />
    </main>
  );
};

export default Home;
