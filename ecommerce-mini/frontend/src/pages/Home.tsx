import Hero from "../components/Hero";
import IndustryGrid from "../components/IndustryGrid";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

//temporary match to Products page, need to build banner, Hero, links to particular parts

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <IndustryGrid />
      <Reviews />
    </div>
  );
};

export default Home;
