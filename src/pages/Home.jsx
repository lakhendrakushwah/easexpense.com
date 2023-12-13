import Blogs from "../components/Blogs";
import Help from "../components/Help";
import Hero from "../components/Hero";
import MarketPlace from "../components/MarketPlace";
import OurClient from "../components/OurClient";

function Home() {
  return (
    <>
      <Hero/>
      <Help />
      <MarketPlace />
      <Blogs />
      <OurClient />
    </>
  );
}

export default Home;
