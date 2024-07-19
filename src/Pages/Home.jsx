import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Discover from "../components/Discover";
import LearnMore from "../components/LearnMore";
import DiscoverMenu from "../components/DiscoverMenu";
import UpcomingEvents from "../components/UpcomingEvents";
import Reservation from "../components/Reservation";
import LatestBlog from "../components/LatestBlog";

const Home = () => {
  return (
    <div className='flex flex-col space-y-8 md:space-y-12'>
      <Hero />
      <Welcome />
      <Discover />
      <LearnMore />
      <DiscoverMenu />
      <UpcomingEvents />
      <Reservation />
      <LatestBlog />
    </div>
  );
};

export default Home;