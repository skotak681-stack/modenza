import React from "react";
import Hero from "../Sections/Hero";
import HowItWorks from "../Sections/HowItWorks";
import Residences from "../Sections/Residences";
import Configurator from "../Sections/Configurator";
import Venues from "../Sections/Venues";
import Advantages from "../Sections/Advantages";
import TechnologyInfo from "../Sections/TechnologyInfo";
import FinishingPackages from "../Sections/FinishingPackages";
import WhyModenza from "../Sections/WhyModenza";
import ForWhom from "../Sections/ForWhom";
import WhyUs from "../Sections/WhyUs";
import Footer from "../Sections/Footer";

function Home(props) {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Residences />
      <TechnologyInfo />
      <FinishingPackages />
      <Venues />
      <WhyModenza />
      <ForWhom />
      <WhyUs />
    </div>
  );
}

export default Home;
