import React from "react";
import Footer from "../components/Footer";
import MenuHeader from "../components/MenuHeader";
import AboutInfo from "../components/AboutInfo";
import Chefs from "../components/Chefs";

const About = () => {
  return (
    <div className=''>
      <MenuHeader title={"About Us"} />
      <AboutInfo />
      <Chefs />
      <Footer />
    </div>
  );
};

export default About;
