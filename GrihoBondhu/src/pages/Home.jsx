import React from "react";
import Hero from "../components/Hero";
import NoticeBar from "../components/NoticeBar";
import ServiceCategories from "../components/Category";
import RecommendedService from "../components/RecommendedService";
//import EMISection from "../components/EMISection";

const Home = () => {
  return (
    <div>
      <Hero />
      <NoticeBar />
      <ServiceCategories />
      <RecommendedService/>
    </div>
  );
};

export default Home;
