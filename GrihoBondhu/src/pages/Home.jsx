import React from "react";
import Hero from "../components/Hero";
import NoticeBar from "../components/NoticeBar";
import ServiceCategories from "../components/Category";
import RecommendedService from "../components/RecommendedService";
import EMISection from "../components/EMISection";
import PolicySection from "../components/Policy";
import CustomerReviews from "../components/CustomersReviews";


const Home = () => {
  return (
    <div>
      <Hero />
      <NoticeBar />
      <ServiceCategories />
      <EMISection/>
      <RecommendedService/>
      <PolicySection/>
      <CustomerReviews/>
    </div>
  );
};

export default Home;
